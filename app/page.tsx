"use client"

import { Appbar } from "./components/Appbar"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BriefcaseIcon,
  SparklesIcon,
  TargetIcon,
  CheckCircle2,
  Star,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-indigo-400">
      <Appbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-300/20 via-white/10 to-green-200/20 border border-green-200/30">
              <span className="text-sm font-medium bg-gradient-to-r from-pink-300 via-white to-green-200 bg-clip-text text-transparent">
                ✨ AI-Powered Job Matching
              </span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-pink-300 via-white to-green-200 bg-clip-text text-transparent">
              Find Your Dream Job with AI-Powered Matching
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Upload your resume and let our advanced AI match you with perfect job opportunities tailored to your
              unique skills and career goals.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="glow-border cursor-pointer bg-gradient-to-r from-pink-400 to-green-400 hover:from-pink-500 hover:to-green-500 text-white font-semibold text-base"
              >
                Upload Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glow-border cursor-pointer text-white hover:bg-white/10 bg-transparent"
              >
                Browse Jobs
              </Button>
            </div>
            <div className="flex gap-8 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Free initial match</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="glow-border rounded-2xl overflow-hidden bg-gradient-to-br from-pink-300/10 to-green-200/10 backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Office workers collaborating"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Companies */}
      <section className="border-y border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-400 mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple"].map((company) => (
              <div key={company} className="text-gray-500 font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - How It Works */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our AI-powered process finds your perfect match in just three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glow-border bg-gradient-to-br from-pink-300/20 via-white/5 to-green-200/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-400/50 transition-colors">
            <div className="h-14 w-14 bg-gradient-to-br from-pink-400 to-green-400 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-pink-400/20">
              <BriefcaseIcon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Upload Resume</h3>
            <p className="text-gray-400 leading-relaxed">
              Simply upload your resume in PDF or DOC format. Our AI instantly analyzes your skills, experience, and
              career goals.
            </p>
          </div>
          <div className="glow-border bg-gradient-to-br from-pink-300/20 via-white/5 to-green-200/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-400/50 transition-colors">
            <div className="h-14 w-14 bg-gradient-to-br from-pink-400 to-green-400 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-pink-400/20">
              <SparklesIcon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">AI Analysis</h3>
            <p className="text-gray-400 leading-relaxed">
              Our advanced algorithms analyze millions of jobs, matching them against your profile with 95% accuracy.
            </p>
          </div>
          <div className="glow-border bg-gradient-to-br from-pink-300/20 via-white/5 to-green-200/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-400/50 transition-colors">
            <div className="h-14 w-14 bg-gradient-to-br from-pink-400 to-green-400 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-pink-400/20">
              <TargetIcon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Get Matched</h3>
            <p className="text-gray-400 leading-relaxed">
              Receive personalized job recommendations with salary insights, company culture fit, and growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-24 glow-border bg-gradient-to-br from-pink-400/10 via-white/5 to-green-200/10 backdrop-blur-sm border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-green-200 bg-clip-text text-transparent">
                1M+
              </div>
              <div className="text-gray-400 text-lg">Active Users</div>
              <p className="text-sm text-gray-500 mt-2">Job seekers trust us daily</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-green-200 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-gray-400 text-lg">Companies</div>
              <p className="text-sm text-gray-500 mt-2">Premium employers on platform</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-green-200 bg-clip-text text-transparent">
                100K+
              </div>
              <div className="text-gray-400 text-lg">Jobs Posted</div>
              <p className="text-sm text-gray-500 mt-2">Fresh opportunities weekly</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-green-200 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-gray-400 text-lg">Success Rate</div>
              <p className="text-sm text-gray-500 mt-2">Users hired within 60 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-5xl font-bold text-center text-white mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Get matched to jobs in seconds, not days" },
            { icon: TrendingUp, title: "Salary Insights", desc: "Know your market value before applying" },
            { icon: Users, title: "Culture Fit", desc: "Find companies that align with your values" },
            { icon: SparklesIcon, title: "Smart Tracking", desc: "Monitor applications and get interview tips" },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-colors bg-gray-800/30 hover:bg-gray-800/50"
            >
              <feature.icon className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-5xl font-bold text-center text-white mb-16">What Users Love</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Sarah Chen",
              role: "UX Designer",
              text: "Found my dream job in just 2 weeks! The AI matching was incredibly accurate.",
            },
            {
              name: "James Wilson",
              role: "Full Stack Dev",
              text: "The salary insights helped me negotiate 20% higher. Highly recommend!",
            },
            {
              name: "Maya Patel",
              role: "Product Manager",
              text: "Best resume tool I've used. The culture fit matching is a game-changer.",
            },
          ].map((testimonial, i) => (
            <div key={i} className="p-8 rounded-xl border border-gray-700 bg-gray-800/20 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="border-y border-gray-800 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-white mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Free", price: "$0", features: ["5 job matches", "Resume analysis", "Company insights"] },
              {
                name: "Pro",
                price: "$29",
                features: ["Unlimited matches", "Priority support", "Salary negotiation tips", "Interview prep"],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Dedicated account", "Team features", "API access", "Custom integrations"],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition-colors ${plan.highlight ? "bg-gradient-to-br from-pink-400/20 to-green-400/20 border-green-400/50" : "bg-gray-800/30 border-gray-700 hover:border-gray-600"}`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-white mb-6">
                  {plan.price}
                  <span className="text-lg text-gray-400">/mo</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-2 text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? "default" : "outline"} className="w-full">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-5xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How does the AI matching work?",
              a: "Our AI analyzes 100+ data points from your resume and compares them against job requirements to find your best matches.",
            },
            {
              q: "Is my resume data safe?",
              a: "Yes, we use bank-level encryption and never share your data with third parties without permission.",
            },
            {
              q: "How long does matching take?",
              a: "Initial analysis takes 30-60 seconds. You'll get your first matches instantly.",
            },
            {
              q: "Can I update my resume?",
              a: "Yes, you can update your resume anytime and get fresh matches immediately.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-700 bg-gray-800/20 hover:bg-gray-800/40 transition-colors"
            >
              <h3 className="font-bold text-white mb-2 text-lg">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-white to-green-200 bg-clip-text text-transparent">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Join over 1 million professionals who have found their perfect career match through our AI-powered platform.
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 glow-border cursor-pointer bg-gradient-to-r from-pink-400 to-green-400 hover:from-pink-500 hover:to-green-500 text-white font-semibold"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 glow-border cursor-pointer bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 JobMatch AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
