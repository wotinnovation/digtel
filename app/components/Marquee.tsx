"use client";

const BRANDS = [
  "Emirates", "Emaar", "Etihad", "Nakheel", "Du", "ADNOC",
  "Talabat", "Careem", "PropertyFinder", "Noon", "Bayut", "Kitopi",
];

export default function Marquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="max-w-[75vw] mx-auto relative">
        <p className="reveal text-center text-3xl lg:text-5xl font-[1000] tracking-[0.2em] uppercase italic text-black mb-16">
          Trusted by Leading Brands
        </p>
        
        <div className="relative py-24">
          <div
            className="flex gap-20 items-center whitespace-nowrap"
            style={{ animation: "marquee 40s linear infinite" }}
          >
            {doubled.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-4xl lg:text-6xl font-[1000] tracking-tighter uppercase italic text-black/20 hover:text-black/60 transition-all duration-500 shrink-0 cursor-default px-8 scale-y-150 inline-block"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
