import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { handleNavbarOnScroll, initRevealAnimations, initSmoothInternalLinks } from "./utils/animations";

const App = () => {
  useEffect(() => {
    // init behaviors
    initRevealAnimations();
    initSmoothInternalLinks();

    // navbar scroll handler
    const onScroll = () => handleNavbarOnScroll();
    window.addEventListener("scroll", onScroll);

    // call once to set initial state
    handleNavbarOnScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="font-inter bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* decorative background blobs */}
      <div className="bg-blobs" aria-hidden>
        <div className="bg-blob" style={{ top: "5%", left: "5%", width: "420px", height: "420px", background: "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.35), transparent 40%)" }} />
        <div className="bg-blob" style={{ bottom: "0%", right: "5%", width: "520px", height: "520px", background: "radial-gradient(circle at 70% 70%, rgba(6,182,212,0.25), transparent 40%)" }} />
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
