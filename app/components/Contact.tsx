"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-4 lg:px-6">
      <div className="max-w-[75vw] mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-widest text-black/40 mb-3">
            Get In Touch
          </p>
          <h2 className="reveal text-4xl lg:text-6xl font-[1000] tracking-tighter leading-tight mb-8">
            Let&rsquo;s talk about
            <br />
            your growth
          </h2>
          <p className="reveal text-sm lg:text-base text-black/55 font-medium leading-relaxed mb-12 max-w-sm">
            Tell us what you&rsquo;re building and we&rsquo;ll get back within one
            business day. For urgent queries, ping us on WhatsApp.
          </p>

          {/* Contact details */}
          <ul className="reveal space-y-6">
            {[
              { icon: <Mail className="w-5 h-5" />, label: "info@digtel.ae", href: "mailto:info@digtel.ae" },
              { icon: <Phone className="w-5 h-5" />, label: "+971 50 353 5409", href: "tel:+971503535409" },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "City Bay Business Center, Office No 523 | Abu Hail Road, Deira – Dubai",
                href: "#",
              },
            ].map((c, idx) => (
              <li key={idx}>
                <a
                  href={c.href}
                  className="flex items-start gap-4 text-sm font-semibold text-black/65 hover:text-black transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center soft-raised-sm group-hover:scale-105 transition-transform">
                    {c.icon}
                  </div>
                  <span className="leading-relaxed mt-2 group-hover:underline underline-offset-4 decoration-black/10">
                    {c.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            id="whatsapp-cta"
            href="https://wa.me/971503535409"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-button-light reveal mt-12 inline-flex items-center gap-3 px-8 py-4 text-[13px] font-black uppercase tracking-widest text-[#25D366] hover:text-[#1ebe5a]"
          >
            <MessageSquare className="w-5 h-5 fill-[#25D366]/10" />
            WhatsApp
          </a>
        </div>

        {/* Right — Form using Soft UI Card */}
        <div className="soft-card reveal p-10 lg:p-14">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center gap-6 py-20 text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#f0f0f3] shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center text-3xl">
                ✨
              </div>
              <div>
                <p className="font-black text-xl mb-2">Message sent!</p>
                <p className="text-sm text-black/50 font-medium">
                  We&rsquo;ll get back to you within one business day.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {[
                { name: "name", label: "Name", placeholder: "Jane Doe", type: "text" },
                { name: "email", label: "Email", placeholder: "jane@company.com", type: "email" },
                { name: "company", label: "Company", placeholder: "Acme Inc.", type: "text" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-[10px] font-black text-black/40 mb-3 uppercase tracking-[0.2em]">
                    {f.label}
                  </label>
                  <input
                    id={`form-${f.name}`}
                    name={f.name}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    className="soft-input w-full px-6 py-4 text-sm font-medium placeholder:text-black/20 focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[10px] font-black text-black/40 mb-3 uppercase tracking-[0.2em]">
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className="soft-input w-full px-6 py-4 text-sm font-medium placeholder:text-black/20 focus:outline-none resize-none"
                />
              </div>
              <button
                id="form-submit"
                type="submit"
                className="soft-button-dark w-full py-5 text-[13px] font-black uppercase tracking-[0.2em] mt-4 flex items-center justify-center gap-3 group"
              >
                Send message <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
