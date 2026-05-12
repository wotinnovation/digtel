"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-4 lg:px-6">
      <div className="w-[96%] md:max-w-[75vw] mx-auto soft-card p-10 lg:p-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <p className="text-3xl font-[1000] tracking-tighter mb-6">Digtel</p>
            <p className="text-sm text-black/45 leading-relaxed font-medium max-w-[200px]">
              UAE-born digital marketing agency building what&rsquo;s next.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">
              Services
            </p>
            <ul className="space-y-4 text-sm text-black/60 font-bold">
              {["Performance Marketing", "SEO", "Influencer Marketing", "Web Development"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-black transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">
              Company
            </p>
            <ul className="space-y-4 text-sm text-black/60 font-bold">
              {[
                { label: "Story", href: "/#story" },
                { label: "Work", href: "/#reels" },
                { label: "Contact", href: "/#contact" }
              ].map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="hover:text-black transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">
              Stay Updated
            </p>
            <p className="text-xs text-black/45 mb-6 leading-relaxed font-medium">
              Get insights and updates directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="soft-input px-5 py-3.5 text-xs font-bold placeholder:text-black/20 focus:outline-none"
              />
              <button
                id="footer-subscribe"
                type="submit"
                className="soft-button-dark px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.2em]"
              >
                {subscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-black/35 font-black uppercase tracking-[0.3em]">
          <p>© {year} Digtel. All rights reserved.</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="hover:text-black transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            {[
              { 
                label: "Instagram", 
                href: "#",
                svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.162a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg> 
              },
              { 
                label: "LinkedIn", 
                href: "#",
                svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
              },
              { 
                label: "Twitter", 
                href: "#",
                svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> 
              },
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-black/40 hover:text-black hover:scale-110 soft-raised-sm active:scale-95 transition-all duration-300"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
