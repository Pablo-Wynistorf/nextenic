import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Products from "@/sections/Products";
import Marquee from "@/sections/Marquee";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

/**
 * Section order is a deliberate rhythm: a dense hero, a short factual breather
 * (Stats), the long product sections, a graphic hinge (Marquee), then the company
 * itself and how to reach it. Two heavy sections never sit back to back.
 */
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <Products />
      <Marquee />
      <About />
      <Contact />
    </main>
  );
}
