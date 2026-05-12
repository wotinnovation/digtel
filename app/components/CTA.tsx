"use client";
import { MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 px-4 lg:px-6">
      {/* Light Soft UI CTA Card */}
      <div className="max-w-[75vw] mx-auto soft-card bg-[#fcfcfd] p-16 lg:p-28 text-center relative overflow-hidden group">
        
        {/* Subtle decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#f0f0f3] rounded-full shadow-[inset_10px_10px_30px_#d1d1d1,inset_-10px_-10px_30px_#ffffff] opacity-50 transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#f0f0f3] rounded-full shadow-[inset_10px_10px_30px_#d1d1d1,inset_-10px_-10px_30px_#ffffff] opacity-50 transition-transform duration-1000 group-hover:scale-110" />

        <div className="relative z-10">
          <p className="reveal text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-8">
            Ready to scale?
          </p>
          
          <h2 className="reveal text-5xl lg:text-8xl font-[1000] tracking-tighter text-black leading-[0.9] mb-12 drop-shadow-sm">
            Let&rsquo;s Work
            <br />
            <span className="italic font-light opacity-60">Together</span>
          </h2>
          
          <p className="reveal text-sm lg:text-lg text-black/45 mb-14 max-w-md mx-auto font-medium leading-relaxed">
            Ready to create something extraordinary? Our team is waiting to start your next chapter.
          </p>
          
          <div className="reveal flex flex-wrap justify-center items-center gap-8">
            <Link
              href="/contact"
              id="cta-start-project"
              className="soft-button-dark px-12 py-5 text-[14px] font-black uppercase tracking-[0.2em]"
            >
              Start Project
            </Link>
            
            <a
              href="https://wa.me/971503535409"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-button-light px-12 py-5 text-[14px] font-black uppercase tracking-[0.2em] flex items-center gap-3 text-black/70 hover:text-black"
            >
              <div className="w-6 h-6 rounded-lg flex items-center justify-center soft-inset">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
              </div>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
