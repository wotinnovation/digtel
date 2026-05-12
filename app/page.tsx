import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Story from "./components/Story";
import Reels from "./components/Reels";
import Process from "./components/Process";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import RevealInit from "./components/RevealInit";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">
      <RevealInit />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Story />
      <Reels />
      <Process />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
