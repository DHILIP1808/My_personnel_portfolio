import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_ITEMS = ["home", "about", "projects", "experience", "contact"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // close mobile menu when clicking outside
    function handleClick(e) {
      if (!mobileMenuRef.current) return;
      if (!mobileMenuRef.current.contains(e.target) && mobileOpen) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  useEffect(() => {
    // lock body scroll when mobile menu open
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav id="navbar" className="fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="inline-flex items-center gap-3" aria-label="Go to home">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent neon-glow">
              DK
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((it) => (
              <a
                key={it}
                href={`#${it}`}
                className="relative group text-sm font-medium text-white hover:text-purple-400 transition-colors"
                aria-label={`Go to ${it}`}
              >
                <span className="capitalize">{it}</span>
                <span className="nav-underline group-hover:w-full" />
              </a>
            ))}

            <a
              href="#contact"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-95 transform hover:-translate-y-0.5 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-md bg-white/6 hover:bg-white/8"
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (slide down) */}
      {mobileOpen && (
        <div ref={mobileMenuRef} id="mobile-menu" className="md:hidden">
          <div className="bg-black bg-opacity-95 backdrop-blur-lg px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DK</div>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-md bg-white/6 hover:bg-white/8">
                <HiX className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-2">
              {NAV_ITEMS.map((it) => (
                <a
                  key={it}
                  href={`#${it}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 rounded-lg text-white hover:bg-white/6 transition"
                >
                  <span className="capitalize">{it}</span>
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-center font-semibold">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
