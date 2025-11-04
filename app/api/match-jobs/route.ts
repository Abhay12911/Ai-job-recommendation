import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import { Resume } from "@/app/models/resume";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { jsonrepair } from "jsonrepair";

export async function GET() {
  try {
    console.log("📢 Connecting to MongoDB...");
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      console.error("❌ Unauthorized: No session found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("✅ User session found:", session.user?.email);

    // Fetch latest resume
    const resume = await Resume.findOne({ userId: session.user?.email }).sort({ createdAt: -1 });
    if (!resume) {
      console.error("❌ Resume not found for user:", session.user?.email);
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    console.log("✅ Resume found:", resume);

    // ✅ Fetch jobs from RemoteOK
    console.log("🌍 Fetching jobs from RemoteOK API...");
    const jobRes = await fetch("https://remoteok.com/api", {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!jobRes.ok) {
      throw new Error(`RemoteOK API Error: ${jobRes.statusText}`);
    }

    const jobData = await jobRes.json();

    // Filter valid jobs (RemoteOK includes a metadata object at index 0)
    const jobs = jobData.filter((job: any) => job.company && job.position).slice(0, 50);

    console.log("✅ Jobs fetched:", jobs.length);

    // Build the AI prompt
    const prompt = `
Based on this resume:
Skills: ${resume.extractedData.skills?.join(", ")}
Experience: ${resume.extractedData.experience}
Education: ${resume.extractedData.education}

And these jobs:
${jobs
  .map(
    (job: any, i: number) =>
      `${i + 1}. ${job.position} at ${job.company}. Tags: ${job.tags?.join(", ")}`
  )
  .join("\n")}

Return the top 10 most relevant jobs in **valid JSON** format like:
[
  { "title": "Job Title", "company": "Company Name", "url": "https://...", "reason": "why it matches" }
]
`;

    // ✅ Call Gemini API
    console.log("💡 Sending request to Gemini API...");
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!geminiRes.ok) {
      const errorText = await geminiRes.text();
      console.error("❌ Gemini API response:", errorText);
      throw new Error("Error calling Gemini API");
    }

    const geminiData = await geminiRes.json();
    const output = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "[]";

    console.log("🤖 Raw Gemini output:", output);

    let matches;
    try {
      matches = JSON.parse(output);
    } catch {
      console.warn("⚠️ Malformed JSON detected, attempting to repair...");
      matches = JSON.parse(jsonrepair(output));
    }

    return NextResponse.json({ matches });
  } catch (error: any) {
    console.error("❌ Error in match-jobs API:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
