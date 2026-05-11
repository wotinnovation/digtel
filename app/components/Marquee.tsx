"use client";

const BRANDS = [
  "TechVentures", "NovaBuild", "AlphaCorp", "SkyGroup",
  "PrimeHoldings", "ArcStudio", "FutureCo", "ZenithBrand",
  "OrbitMedia", "CoreLabs", "PeakDigital", "VantageGroup",
];

export default function Marquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-12 border-y border-black/8 overflow-hidden bg-white">
      <p className="reveal text-center text-xs font-semibold uppercase tracking-widest text-black/30 mb-8">
        Trusted by Leading Brands
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          className="flex gap-12 items-center whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {doubled.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-sm font-bold tracking-tight text-black/20 hover:text-black/60 transition-colors duration-200 shrink-0 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
