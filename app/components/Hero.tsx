"use client";
import { useEffect, useRef, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-white"
    >
      {/* Spline 3D Background - Strict Isolation */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none select-none touch-none">
        <Suspense fallback={<div className="absolute inset-0 bg-white" />}>
          <Spline
            scene="/bg/Serenity in Symmetry.spline"
            className="w-full h-full pointer-events-none"
            style={{ pointerEvents: 'none' }}
          />
        </Suspense>
      </div>

      <div className="max-w-[75vw] mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 mb-10 border border-black/5">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Dubai Digital Agency</span>
          </div>

          {/* Headline */}
          <h1 className="reveal text-5xl lg:text-8xl font-[1000] tracking-tighter leading-[0.85] text-black mb-12 drop-shadow-sm">
            We Build
            <br />
            Digital
            <br />
            Products.
          </h1>

          {/* Paragraph */}
          <p className="reveal text-lg lg:text-2xl text-black/50 font-medium leading-relaxed mb-16 max-w-2xl">
            A UAE-born digital creative agency that helps startups and enterprises scale through
            high-fidelity design and engineering.
          </p>

          {/* CTA row */}
          <div className="reveal flex flex-wrap items-center gap-6">
            <Link
              id="hero-start-project"
              href="/contact"
              className="soft-button-dark px-12 py-5 text-[14px] font-bold uppercase tracking-widest shadow-2xl"
            >
              Start a project
            </Link>
            <a
              id="hero-see-work"
              href="#reels"
              className="soft-button-light px-12 py-5 text-[14px] font-bold uppercase tracking-widest group flex items-center gap-2"
            >
              See our work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Optional Gradient Overlay for readability if map is too bright */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/20 via-transparent to-transparent z-5" />
    </section>
  );
}
