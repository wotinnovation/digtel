"use client";

const reels = [
  {
    id: "reel-1",
    title: "Dubai Marina Luxury Tour",
    views: "125K views",
    tag: "Real Estate",
    aspect: "9/16",
  },
  {
    id: "reel-2",
    title: "Investment Tips 2025",
    views: "89K views",
    tag: "Finance",
    aspect: "9/16",
  },
  {
    id: "reel-3",
    title: "Premium Properties",
    views: "156K views",
    tag: "Lifestyle",
    aspect: "9/16",
  },
  {
    id: "reel-4",
    title: "Market Insights",
    views: "94K views",
    tag: "Business",
    aspect: "9/16",
  },
];

// Gradient palettes for each reel card
const gradients = [
  "from-zinc-800 to-zinc-950",
  "from-stone-700 to-stone-950",
  "from-neutral-700 to-neutral-950",
  "from-gray-700 to-gray-950",
];

const icons = ["🏙️", "💹", "🏛️", "📊"];

export default function Reels() {
  return (
    <section id="reels" className="py-24 lg:py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-widest text-black/40 mb-3">
              Featured Work
            </p>
            <h2 className="reveal text-4xl lg:text-5xl font-black tracking-tight">
              Featured Reels
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal self-start md:self-auto text-sm font-semibold border-b border-black pb-0.5 hover:gap-4 transition-all duration-200"
          >
            See all work →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {reels.map((reel, i) => (
            <div
              key={reel.id}
              id={reel.id}
              className="reveal group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "9/16" }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${gradients[i]} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Icon placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                {icons[i]}
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white fill-white ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-1 block">
                  {reel.tag}
                </span>
                <p className="text-white text-xs font-bold leading-snug mb-1">
                  {reel.title}
                </p>
                <p className="text-white/50 text-[10px]">{reel.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
