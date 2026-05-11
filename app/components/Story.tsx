"use client";

export default function Story() {
  return (
    <section id="story" className="py-24 lg:py-32 px-6 lg:px-10 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left text block */}
        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-widest text-black/40 mb-3">
            Our Story
          </p>
          <h2 className="reveal text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-8">
            Digtel
          </h2>
          <div className="reveal space-y-4 text-base text-black/60 leading-[1.8]">
            <p>
              We live in a world that never stands still — technology evolves,
              businesses transform, and audiences demand more every day.
            </p>
            <p>
              As a marketing agency, IT solutions partner, and production house,
              we exist to help brands move confidently into that future. We
              combine creativity with technology, ideas with execution, and
              vision with measurable growth.
            </p>
            <p>
              It&rsquo;s not about preparing for tomorrow — we design it, power it,
              and bring it to life. With Digtel, your next chapter begins, and
              together, we shape what comes after.
            </p>
          </div>
          <a
            href="#contact"
            className="reveal inline-flex items-center gap-2 mt-8 text-sm font-semibold border-b border-black pb-0.5 hover:gap-4 transition-all duration-200"
          >
            Learn More →
          </a>
        </div>

        {/* Right — value props */}
        <div className="flex flex-col gap-6">
          {[
            {
              icon: "⚙️",
              title: "Digital Solutions With Unmatched Excellence",
              desc: "Our expert-crafted digital marketing services focus on success and distinction.",
            },
            {
              icon: "💡",
              title: "Turn Your Digital Ideas Into Reality",
              desc: "We transform your vision into a unique digital experience, backed by over 20 years of expertise.",
            },
            {
              icon: "📈",
              title: "Strategies Tailored To Your Ambitions",
              desc: "We deliver innovative and precise strategies to achieve your goals seamlessly.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="reveal group bg-white border border-black/8 rounded-2xl p-6 flex gap-5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-shadow duration-300"
            >
              <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-1.5 group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-black/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
