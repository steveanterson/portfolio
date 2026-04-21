import { useState } from "react";
import { Preloader } from "./components/layout/Preloader";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import BackToTop from "./components/ui/BackToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-black text-white">
          {/* Subtle background gradations */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[150px]" />
            <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
          </div>

          <Navbar />
          
          <main className="flex-grow z-10 w-full relative">
            <Hero />
            <BackToTop />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
