"use client";
import { useState } from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import RevealInit from "../components/RevealInit";
import { Mail, Phone, MapPin, Paperclip, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What's the typical timeline from idea to v1?",
    answer: "A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We'll run a kickoff workshop to align scope."
  },
  {
    question: "What do we need to start?",
    answer: "We typically require a brief project overview, brand assets if available, and any specific technical requirements or preferred timelines you might have."
  },
  {
    question: "Which models/stack do you use?",
    answer: "Our stack is modern and scalable, primarily using Next.js, Tailwind CSS, and various specialized AI/ML models depending on the project requirements."
  },
  {
    question: "Are model/API costs included in pricing?",
    answer: "Service fees cover our strategy and implementation. Third-party API costs (like OpenAI or AWS) are typically handled directly by the client or billed separately."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-[#fcfcfd] min-h-screen">
      <RevealInit />
      <Navbar />

      <section className="pt-48 pb-10 md:pb-32 px-4 lg:px-6">
        <div className="w-[96%] md:max-w-[75vw] mx-auto">
          
          {/* Banner Section (Service Card Style) */}
          <div className="soft-card p-6 lg:p-8 bg-white reveal mb-12 md:mb-24">
            <div className="relative aspect-[4/3] md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden mb-12">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Our Office"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            <div className="w-full h-px bg-black/5 mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr] gap-12 lg:gap-16 px-2">
              <div>
                <h2 className="text-3xl lg:text-4xl font-[1000] tracking-tighter leading-none text-black">
                  Visit Our Studio
                </h2>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Description</p>
                <p className="text-sm text-black/60 leading-relaxed font-medium">
                  Experience our creative process firsthand. Our studio is a space designed for collaboration, innovation, and digital excellence.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Location</p>
                <p className="text-sm text-black/60 leading-relaxed font-medium">
                  Business Bay, Dubai<br/>UAE
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Availability</p>
                <p className="text-sm text-black/60 leading-relaxed font-medium">
                  Mon — Fri<br/>9:00 AM — 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-32">
            {[
              { icon: <Mail className="w-6 h-6 text-white" />, label: "E-mail address", value: "hello@digtel.agency" },
              { icon: <Phone className="w-6 h-6 text-white" />, label: "Phone number", value: "+971 50 123 4567" },
              { icon: <MapPin className="w-6 h-6 text-white" />, label: "Our Location", value: "Business Bay, Dubai, UAE" },
            ].map((item, idx) => (
              <div key={idx} className="soft-card p-12 flex flex-col items-center text-center reveal bg-white">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shadow-xl mb-8">
                  {item.icon}
                </div>
                <p className="text-xl font-black text-black mb-3">{item.label}</p>
                <p className="text-sm text-black/40 font-medium tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 lg:gap-40 items-start mb-16 md:mb-32">
            {/* Left Content */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Contact</span>
              </div>
              <h1 className="text-6xl lg:text-[7rem] font-[1000] tracking-tighter leading-[0.85] text-black mb-12">
                Let&rsquo;s Build
                <br />
                Intelligent Things
              </h1>
              <p className="max-w-md text-sm lg:text-lg text-black/40 font-medium leading-relaxed mb-20">
                Combining creativity, technology, and strategy to craft solutions that think, adapt, and inspire. Connect with us to turn visionary ideas into meaningful, data-driven realities.
              </p>

              {/* Social Buttons */}
              <div className="flex flex-wrap gap-5">
                {[
                  { label: "Twitter / X", icon: <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg> },
                  { label: "Facebook", icon: <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { label: "Instagram", icon: <svg className="w-4 h-4 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                ].map((s, idx) => (
                  <button key={idx} className="soft-card px-7 py-4 flex items-center gap-6 bg-white hover:bg-black/5 transition-all active:scale-95 group">
                    <span className="text-[11px] font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">{s.label}</span>
                    <div className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="soft-card p-10 lg:p-16 bg-white reveal shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
              <h2 className="text-4xl font-black tracking-tighter text-black mb-16">Fill this form below</h2>
              
              <form className="space-y-12">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 px-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full bg-transparent border-b border-black/5 py-5 px-2 text-base font-bold placeholder:text-black/10 focus:outline-none focus:border-black/20 transition-colors"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 px-2">Your Phone</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent border-b border-black/5 py-5 px-2 text-base font-bold placeholder:text-black/10 focus:outline-none focus:border-black/20 transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 px-2">More About The Project</label>
                  <textarea 
                    rows={1}
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent border-b border-black/5 py-5 px-2 text-base font-bold placeholder:text-black/10 focus:outline-none focus:border-black/20 transition-colors resize-none"
                  />
                </div>

                <button type="button" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors group">
                  <Paperclip className="w-4 h-4 transition-transform group-hover:rotate-12" /> Add an Attachment
                </button>

                <button 
                  type="submit"
                  className="w-full bg-[#111111] text-white py-6 rounded-[2rem] text-[12px] font-black uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="reveal mb-20 md:mb-48">
            <div className="soft-card p-4 bg-white overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178650021435!2d55.2704257762!3d25.185010677717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682df6e5797f%3A0x6a0a03724c965e6d!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: "1.5rem", filter: "grayscale(1) invert(0.05)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto pb-0 md:pb-48">
            <div className="text-center mb-20 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">FAQs</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-[1000] tracking-tighter leading-tight text-black">
                Frequently Asked
                <br />
                Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="soft-card bg-white reveal overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="p-8 lg:p-10 flex items-center justify-between gap-8">
                    <p className="text-lg lg:text-xl font-bold text-black tracking-tight">
                      {faq.question}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shadow-lg transition-transform duration-300">
                      {openFaq === idx ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
                    </div>
                  </div>
                  <div 
                    className={`transition-all duration-500 ease-in-out px-8 lg:px-10 pb-8 lg:pb-10 ${
                      openFaq === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="w-full h-px bg-black/5 mb-8" />
                    <p className="text-base text-black/50 leading-relaxed font-medium max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
