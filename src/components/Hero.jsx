import React from "react";
import { FaUser } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="animate-slide-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Dilipkumar J
              </span>
            </h1>

            <h2 className="text-lg md:text-2xl text-gray-300 mb-6 font-medium">
              Frontend & AI Developer
            </h2>

            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Passionate developer specializing in AI-powered web applications with expertise in React, TypeScript,
              and modern frameworks. I build intuitive, scalable digital experiences that merge frontend craft with AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] transition transform neon-glow">
                Get In Touch
              </a>
              <a href="#projects" className="inline-block px-6 py-3 rounded-full border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white transition">
                View Projects
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-3 animate-spin-slow profile-frame">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Updated image path */}
                  <img 
                    src="/assets/profile.png" 
                    alt="Profile" 
                    className="text-7xl text-gray-400 rounded-full object-cover mt-14" 
                  />
                </div>
              </div>

              {/* Small floating icons */}
              <div className="absolute -top-3 -left-3 glass rounded-2xl p-3 animate-float" style={{ animationDuration: "6s" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="absolute -top-3 -right-3 glass rounded-2xl p-3 animate-float" style={{ animationDuration: "6s", animationDelay: "1s" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent to-purple-500 rounded-full" />
      </div>
    </section>
  );
}
