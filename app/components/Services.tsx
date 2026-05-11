"use client";

const services = [
  {
    num: "01",
    title: "Digital Marketing",
    desc: "Data-driven campaigns across paid, social, and content channels that convert audiences into loyal customers.",
    tags: ["Social Media", "Paid Ads", "Email", "Analytics"],
  },
  {
    num: "02",
    title: "Website Development",
    desc: "High-performance, beautifully crafted websites and web apps built with modern stacks for speed and scale.",
    tags: ["React / Next.js", "CMS", "E-commerce", "UX/UI"],
  },
  {
    num: "03",
    title: "SEO",
    desc: "Organic growth strategies that earn top search positions and lasting visibility without burning ad budget.",
    tags: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
  },
  {
    num: "04",
    title: "Video Production",
    desc: "Cinematic storytelling — from concept and scripting through production and post — that stops the scroll.",
    tags: ["Brand Films", "Reels", "Motion Graphics", "Testimonials"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-widest text-black/40 mb-3">
              What We Do
            </p>
            <h2 className="reveal text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Services
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm text-black/55 leading-relaxed">
            Crafting transformative digital experiences by seamlessly blending design, technology, and marketing.
          </p>
        </div>

        {/* Service rows */}
        <ul className="divide-y divide-black/8">
          {services.map((s) => (
            <li
              key={s.num}
              className="group reveal py-8 flex flex-col md:flex-row md:items-center gap-4 cursor-default"
            >
              {/* Number */}
              <span className="text-xs font-mono text-black/30 w-10 shrink-0">{s.num}</span>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold flex-1 transition-all duration-300 group-hover:translate-x-1">
                {s.title}
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-black/40">
                  →
                </span>
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-black/10 rounded-full text-black/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Description — appears on hover/mobile */}
              <p className="text-sm text-black/50 md:max-w-xs leading-relaxed md:opacity-0 md:group-hover:opacity-100 md:translate-y-1 md:group-hover:translate-y-0 transition-all duration-300">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
