import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🌍 Fetching jobs from Remotive API...");

    const res = await fetch("https://remoteok.com/api", {
      headers: {
        "Accept": "application/json",
      },
      cache: "no-store", // ensures fresh fetch on each request
    });

    if (!res.ok) {
      console.error("❌ Remotive API responded with status:", res.status);
      return NextResponse.json(
        { error: `Remotive API Error: ${res.statusText}` },
        { status: 500 }
      );
    }

    // Try to parse the JSON safely
    let data;
    try {
      data = await res.json();
    } catch (jsonError) {
      console.error("❌ Failed to parse Remotive API JSON:", jsonError);
      return NextResponse.json(
        { error: "Invalid JSON response from Remotive API" },
        { status: 500 }
      );
    }

    if (!data?.jobs || !Array.isArray(data.jobs)) {
      console.error("❌ Invalid job data format:", data);
      return NextResponse.json(
        { error: "Unexpected response format from Remotive API" },
        { status: 500 }
      );
    }

    type SimplifiedJob = {
      title: string;
      company: string;
      description: string;
      tags: string[];
      url: string;
    };

    const jobs: SimplifiedJob[] = data.jobs.map((job: any) => ({
      title: job.title,
      company: job.company_name,
      description: job.description,
      tags: job.tags || [],
      url: job.url,
    }));

    console.log("✅ Jobs fetched successfully:", jobs.length);

    return NextResponse.json({ jobs }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error in match-jobs API:", error.message || error);
    return NextResponse.json(
      { error: `Server Error: ${error.message || "Unknown error"}` },
      { status: 500 }
    );
  }
}
