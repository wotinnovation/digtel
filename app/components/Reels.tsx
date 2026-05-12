"use client";
import { Play, ArrowRight } from "lucide-react";

const reels = [
  {
    id: "reel-1",
    title: "Dubai Marina Luxury Tour",
    views: "125K views",
    tag: "Real Estate",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "reel-2",
    title: "Investment Tips 2025",
    views: "89K views",
    tag: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "reel-3",
    title: "Premium Properties",
    views: "156K views",
    tag: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "reel-4",
    title: "Market Insights",
    views: "94K views",
    tag: "Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

export default function Reels() {
  return (
    <section id="reels" className="py-24 lg:py-32 px-4 lg:px-6">
      <div className="max-w-[75vw] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-widest text-black/40 mb-3">
              Featured Work
            </p>
            <h2 className="reveal text-4xl lg:text-6xl font-[1000] tracking-tighter leading-none">
              Featured Reels
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal self-start md:self-auto text-[13px] font-black uppercase tracking-widest border-b-2 border-black/5 pb-1 hover:border-black transition-all group flex items-center gap-2"
          >
            See all work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="soft-card reveal group relative p-3 transition-all duration-500 hover:translate-y-[-8px]"
            >
              <div 
                className="relative w-full overflow-hidden rounded-[2rem] bg-stone-100"
                style={{ aspectRatio: "9/16" }}
              >
                {/* Visual Background */}
                <img 
                  src={reel.image} 
                  alt={reel.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Tag */}
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/80 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    {reel.tag}
                  </span>
                </div>

                {/* Play Button - Only one button centered */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/50 group-hover:scale-110 group-hover:bg-white/60 transition-all duration-500">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Views Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider z-20">
                  {reel.views}
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-6 px-4 pb-4">
                <p className="text-black text-sm lg:text-base font-black leading-snug group-hover:text-black transition-colors">
                  {reel.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
