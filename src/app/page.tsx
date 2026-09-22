import { MotionConfig } from "motion/react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ui } from "@/data/portfolio";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#home"
        className="fixed left-2 top-2 z-50 -translate-y-16 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform focus-visible:translate-y-0"
      >
        {ui.skipToContent.id}
      </a>
      <Navbar />
      <main id="home" className="mx-auto max-w-5xl space-y-16 px-4 py-10 sm:px-6 lg:ml-64 lg:max-w-none lg:px-10 lg:py-14 xl:px-16">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </MotionConfig>
  );
}
