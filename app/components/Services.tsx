"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    desc: "Data-driven campaigns across paid, social, and content channels that convert audiences into loyal customers.",
    tags: ["Paid Ads", "Social Media", "Email Marketing"],
    image: "/images/digital.jpg",
  },
  {
    id: "02",
    title: "Website Development",
    desc: "High-performance, beautifully crafted websites and web apps built with modern stacks for speed and scale.",
    tags: ["React / Next.js", "UX/UI Design", "E-commerce"],
    image: "/images/webdevelopment.jpeg",
  },
  {
    id: "03",
    title: "SEO",
    desc: "Organic growth strategies that earn top search positions and lasting visibility without burning ad budget.",
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
    image: "/images/seo.jpeg",
  },
  {
    id: "04",
    title: "Video Production",
    desc: "Cinematic storytelling — from concept and scripting through production and post — that stops the scroll.",
    tags: ["Brand Films", "Motion Graphics", "Color Grading"],
    image: "/images/videoproduction.jpeg",
  },
];

export default function Services() {
  const [active, setActive] = useState("01");

  const currentService = services.find((s) => s.id === active) || services[0];

  return (
    <section id="services" className="py-16 lg:py-20 px-4 lg:px-6">
      <div className="w-[96%] md:max-w-[75vw] mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start px-2 md:px-0">

        {/* Left Content */}
        <div className="flex flex-col h-full lg:sticky lg:top-32">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full soft-card bg-[#fcfcfd] mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Services</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-[1000] tracking-tighter leading-[0.95] text-black mb-8 drop-shadow-sm">
              End-to-End
              <br />
              Digital Services
            </h2>
            <p className="max-w-sm text-sm lg:text-base text-black/50 font-medium leading-relaxed mb-16">
              We turn ambiguous digital ideas into production features your users trust—combining strategy, design, engineering, and rigorous evaluation.
            </p>
          </div>

          {/* Dynamic Bottom-Left Image - Increased Size */}
          <div className="hidden lg:block overflow-hidden rounded-[3.5rem] soft-card relative aspect-square w-full max-w-md mt-16">
            <div
              key={currentService.image}
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 animate-fade-in"
              style={{ backgroundImage: `url('${currentService.image}')` }}
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Right - Service Accordion - Shifted down to align with the headline text */}
        <div className="flex flex-col gap-6 lg:pt-[5.5rem]">
          {services.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full text-left transition-all duration-500 rounded-[2.25rem] overflow-hidden ${isActive
                    ? "soft-card-dark text-white p-10 lg:p-14 scale-105 z-10"
                    : "bg-[#ffffff] text-black p-8 lg:p-10 soft-card"
                  }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className={`text-xl lg:text-3xl font-[1000] tracking-tight pr-8 ${isActive ? "text-white" : "text-black/80"}`}>
                    {s.title}
                  </h3>
                  <span className={`text-[11px] font-black font-mono tracking-widest mt-1 ${isActive ? "text-white/30" : "text-black/20"}`}>
                    ({s.id})
                  </span>
                </div>

                {/* Expanded Content */}
                <div className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100 mt-10" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm lg:text-base text-white/50 font-medium leading-relaxed mb-10 max-w-lg">
                      {s.desc}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {s.tags.map((tag) => (
                        <div
                          key={tag}
                          className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/70 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d]" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
