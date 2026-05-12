"use client";
import { Settings, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

export default function Story() {
  return (
    <section id="story" className="py-24 lg:py-32 px-4 lg:px-6">
      <div className="w-[96%] md:max-w-[75vw] mx-auto grid lg:grid-cols-2 gap-20 px-2 md:px-0">
        {/* Left text block - High Contrast Black Card */}
        <div className="soft-card-dark p-12 lg:p-16 h-full flex flex-col justify-center">
          <p className="reveal text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
            Our Story
          </p>
          <h2 className="reveal text-4xl lg:text-7xl font-[1000] tracking-tighter leading-[0.9] mb-10 text-white">
            Digtel
          </h2>
          <div className="reveal space-y-6 text-sm lg:text-base text-white/70 leading-[1.8] font-medium">
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
            className="reveal inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-full bg-white text-black text-[12px] font-black uppercase tracking-widest hover:bg-white/90 transition-all group w-fit"
          >
            Learn More <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right — value props using Soft UI White Cards */}
        <div className="flex flex-col gap-8 h-full">
          {[
            {
              icon: <Settings className="w-6 h-6 text-black/70" />,
              title: "Digital Solutions With Unmatched Excellence",
              desc: "Our expert-crafted digital marketing services focus on success and distinction.",
            },
            {
              icon: <Lightbulb className="w-6 h-6 text-black/70" />,
              title: "Turn Your Digital Ideas Into Reality",
              desc: "We transform your vision into a unique digital experience, backed by over 20 years of expertise.",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-black/70" />,
              title: "Strategies Tailored To Your Ambitions",
              desc: "We deliver innovative and precise strategies to achieve your goals seamlessly.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="soft-card reveal group p-8 lg:p-10 flex flex-col sm:flex-row gap-8 transition-all flex-1"
            >
              <div className="w-20 h-24 lg:w-24 lg:h-32 shrink-0 bg-[#f0f0f3] rounded-[1.5rem] flex items-center justify-center shadow-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
                <div className="relative z-10 scale-110">
                  {item.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-black/10 mb-2">
                  <svg width="40" height="32" viewBox="0 0 32 24" fill="currentColor">
                    <path d="M0 24V11.232C0 7.392 0.864 4.32 2.592 2.016 4.32 -0.288 7.392 -0.672 11.808 0.864L10.08 5.76C8.064 4.896 6.72 5.184 6.048 6.624 5.376 8.064 5.04 9.6 5.04 11.232H11.808V24H0ZM20.16 24V11.232C20.16 7.392 21.024 4.32 22.752 2.016 24.48 -0.288 27.552 -0.672 31.968 0.864L30.24 5.76C28.224 4.896 26.88 5.184 26.208 6.624 25.536 8.064 25.2 9.6 25.2 11.232H31.968V24H20.16Z" />
                  </svg>
                </div>
                <h3 className="font-black text-lg lg:text-xl mb-3 tracking-tight text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-black/50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
