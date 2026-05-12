"use client";
import { useRef } from "react";
import { Search, Zap, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01/03",
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Discover & Scope",
    desc: "Align on problems, data reality, and success metrics. Opportunity brief, KPI model, phased roadmap, effort/cost ranges.",
    duration: "3-7 DAYS",
  },
  {
    id: "02/03",
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Prototype",
    desc: "De-risk unknowns and validate value quickly. Clickable UX, tech spike repo, initial eval rubric demo.",
    duration: "1-2 WEEKS",
  },
  {
    id: "03/03",
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Engineering & Launch",
    desc: "Production-ready build, rigorous testing, and seamless deployment. Quality assurance and performance optimization.",
    duration: "4-8 WEEKS",
  },
];

export default function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { current } = scrollRef;
    const scrollAmount = current.offsetWidth * 0.8;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="process" className="py-24 lg:py-32 overflow-hidden hidden md:block">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left Text - Aligned to the 75vw grid */}
        <div className="w-full lg:w-[40vw] lg:pl-[12.5vw] px-[2%] md:px-6 mb-20 lg:mb-0">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full soft-card bg-white mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Process</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-[1000] tracking-tighter leading-[0.95] text-black mb-12">
              From Idea
              <br />
              to Production
            </h2>
            
            {/* Nav Arrows */}
            <div className="flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-full flex items-center justify-center soft-card hover:bg-black/5 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-black/40" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-full flex items-center justify-center soft-card hover:bg-black/5 active:scale-95 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-black/40" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Slider - 100vw Feel (Bleeds to edge) */}
        <div className="w-full lg:w-[60vw] lg:pr-0">
          <div 
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-12 pt-4 px-[2%] lg:pl-10 lg:pr-[12.5vw]"
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className="min-w-[85vw] lg:min-w-[450px] snap-start soft-card bg-white p-10 lg:p-14 relative flex flex-col h-[500px] lg:h-[550px] reveal"
              >
                {/* Red Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-[#ff4d4d] flex items-center justify-center shadow-[0_15px_30px_rgba(255,77,77,0.4)] mb-10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 animate-pulse" />
                  <div className="relative z-10">{step.icon}</div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-black mb-6">
                  {step.title}
                </h3>
                
                <p className="text-base lg:text-lg text-black/50 leading-relaxed font-medium mb-10 max-w-sm">
                  {step.desc}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="px-8 py-3 rounded-full bg-black/5 text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                    {step.duration}
                  </div>
                  <div className="text-4xl lg:text-5xl font-[1000] tracking-tighter text-black/5 select-none">
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
