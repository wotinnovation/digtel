"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-[#f0f0f3]/80 backdrop-blur-xl border-b border-black/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)]" 
          : "bg-transparent py-8"
      }`}
    >
      <nav className="max-w-[75vw] mx-auto flex items-center justify-between px-2">
        {/* Logo - Soft style text shadow */}
        <Link href="/" className="text-2xl lg:text-3xl font-[1000] tracking-tighter select-none text-black drop-shadow-[2px_2px_2px_rgba(255,255,255,0.8)]">
          Digtel
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-14 text-[11px] font-black uppercase tracking-[0.3em] text-black/40">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="relative hover:text-black transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2.5px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="soft-button-dark text-[11px] font-black uppercase tracking-[0.2em] px-9 py-3.5 shadow-xl"
          >
            Start project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden w-12 h-12 rounded-2xl flex items-center justify-center text-black soft-raised-sm active:scale-95 transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out bg-[#f0f0f3]/95 backdrop-blur-xl border-b border-black/5 ${
          open ? "max-h-[500px] opacity-100 py-12 shadow-2xl" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-[75vw] mx-auto flex flex-col gap-10 text-2xl font-[1000] tracking-tighter">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block hover:translate-x-3 transition-transform duration-300 text-black/60 hover:text-black"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="soft-button-dark inline-block px-12 py-5 text-white text-sm font-black uppercase tracking-widest"
            >
              Start project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const links = [
  { label: "Services", href: "/services" },
  { label: "Story", href: "/#story" },
  { label: "Work", href: "/#reels" },
  { label: "Contact", href: "/contact" },
];
