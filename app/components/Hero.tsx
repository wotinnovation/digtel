"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-10 pt-20 overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Tag line */}
        <div
          ref={ref}
          className="reveal mb-8 inline-flex items-center gap-2 border border-black/12 rounded-full px-4 py-1.5 text-xs font-medium text-black/60 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          Founded in 2023 · UAE-born Agency
        </div>

        {/* Main headline */}
        <h1 className="reveal text-[clamp(3rem,9vw,8rem)] font-black leading-[0.95] tracking-tighter text-black mb-6">
          Building
          <br />
          <span className="italic font-light">What&rsquo;s</span>
          <br />
          Next!
        </h1>

        {/* Sub-headline */}
        <p className="reveal max-w-xl text-base lg:text-lg text-black/55 leading-relaxed mb-10">
          Make your brand so useful, people would miss it if it disappeared.
        </p>

        {/* CTA row */}
        <div className="reveal flex flex-wrap items-center gap-4">
          <a
            id="hero-start-project"
            href="#contact"
            className="px-7 py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-black/80 transition-colors duration-200"
          >
            Start a project
          </a>
          <a
            id="hero-see-work"
            href="#reels"
            className="px-7 py-3.5 border border-black/20 text-black text-sm font-semibold rounded-full hover:bg-black/5 transition-colors duration-200"
          >
            See our work →
          </a>
        </div>

        {/* Stats row */}
        <div className="reveal mt-20 pt-8 border-t border-black/8 grid grid-cols-3 gap-6 max-w-lg">
          {[
            { num: "500+", label: "Clients" },
            { num: "1000+", label: "Projects Done" },
            { num: "5+", label: "Countries" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl lg:text-3xl font-black tracking-tight">{s.num}</p>
              <p className="text-xs text-black/45 mt-0.5 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-black/25">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <span className="w-px h-8 bg-black/20 animate-pulse" />
      </div>
    </section>
  );
}
