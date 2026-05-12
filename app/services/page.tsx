"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealInit from "../components/RevealInit";
import CTA from "../components/CTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceData = [
  {
    title: "Performance Marketing",
    desc: "Our performance marketing team focuses on measurable growth. Every campaign is built with clear goals, whether it is boosting sales, generating leads, or nurturing stronger customer relationships.",
    deliverables: "Ecommerce, Lead Gen, Creative Strategy, Automation, Email Marketing",
    industry: "Ecommerce / B2B / Retail",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "SEO Solutions",
    desc: "Our SEO team helps businesses stand out in search results and attract people who are already looking for what they offer. We focus on connecting your brand with qualified visitors ready to engage.",
    deliverables: "Technical SEO, On-Page/Off-Page, Content Strategy, UX Audit",
    industry: "Tech / Healthcare / Finance",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Influencer Marketing",
    desc: "Helping brands grow their presence through strong storytelling and influencer-driven strategies. We focus on building awareness and creating meaningful conversations in the right spaces.",
    deliverables: "Influencer Sourcing, Campaign Management, Content Strategy",
    industry: "Lifestyle / Fashion / F&B",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
  },
  {
    title: "Web Development & UI/UX",
    desc: "Turning ideas into functional, user-focused digital experiences. From websites to apps, we build platforms that perform smoothly and guide visitors toward meaningful actions.",
    deliverables: "Next.js Apps, UI/UX Design, Ecommerce Platforms, Maintenance",
    industry: "Startups / Enterprise / SaaS",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Creative Production",
    desc: "Our production house manages a wide range of creative projects, from large-scale advertising campaigns to specialised content. End-to-end solutions that help brands tell resonant stories.",
    deliverables: "Video Production, Ad Campaigns, Line Production, Post-Production",
    industry: "Entertainment / Corporate / Broadcast",
    image: "https://images.unsplash.com/photo-1492691523567-6119203ad9f3?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#fcfcfd] min-h-screen">
      <RevealInit />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-4 lg:px-6">
        <div className="max-w-[75vw] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Expertise</span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-[1000] tracking-tighter leading-[0.85] text-black mb-12">
            Transform
            <br />
            Your Digital
            <br />
            Presence
          </h1>
          <p className="max-w-2xl text-lg lg:text-xl text-black/50 font-medium leading-relaxed">
            We craft exceptional digital experiences that captivate audiences and drive results through innovative design and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Services Cards Container */}
      <div className="px-4 lg:px-6 pb-24 space-y-24">
        {serviceData.map((service) => (
          <div 
            key={service.title}
            className="max-w-[75vw] mx-auto soft-card p-6 lg:p-8 bg-white reveal"
          >
            {/* Top Image Section */}
            <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden mb-12">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Status Dots */}
            <div className="flex gap-2 mb-8 px-2">
              <div className="w-2 h-2 rounded-full bg-black/10" />
              <div className="w-2 h-2 rounded-full bg-black/10" />
              <div className="w-2 h-2 rounded-full bg-black/10" />
              <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-black/5 mb-12" />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr] gap-12 lg:gap-16 px-2">
              {/* Title Column */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-[1000] tracking-tighter leading-none text-black">
                  {service.title}
                </h2>
              </div>

              {/* Description Column */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Description</p>
                <p className="text-sm text-black/60 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Deliverables Column */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Deliverables</p>
                <p className="text-sm text-black/60 leading-relaxed font-medium">
                  {service.deliverables}
                </p>
              </div>

              {/* Industry Column */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Industry</p>
                <p className="text-sm text-black/60 leading-relaxed font-medium">
                  {service.industry}
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 flex justify-end px-2">
               <Link 
                href="/contact"
                className="group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors"
               >
                Discuss this project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
          </div>
        ))}
      </div>

      <CTA />

      <Footer />
    </main>
  );
}
