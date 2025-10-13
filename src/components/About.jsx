import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Bridging frontend excellence with AI innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-2 animate-slide-right">
            <div className="glass rounded-3xl p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a Frontend Developer with a passion for creating AI-powered web applications.
                With expertise in React, TypeScript, and modern CSS frameworks, I specialize in integrating LLMs and RAG systems into responsive user interfaces.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Currently pursuing my Bachelor's in Electronics and Communication Engineering
                at Adhiparasakthi Engineering College, I combine academic knowledge with practical experience in building scalable, high-performance digital solutions.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Technologies cards */}
                <div className="glass rounded-2xl p-6 hover:bg-purple-500/10 transition transform">
                  <h4 className="font-semibold text-purple-400 mb-4">Frontend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"].map((t) => (
                      <span key={t} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 hover:bg-cyan-500/10 transition transform">
                  <h4 className="font-semibold text-cyan-400 mb-4">AI & Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "FastAPI", "LangChain", "RAG Systems", "Machine Learning"].map((t) => (
                      <span key={t} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 hover:bg-pink-500/10 transition transform">
                  <h4 className="font-semibold text-pink-400 mb-4">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git/GitHub", "OpenCV", "IoT", "Raspberry Pi"].map((t) => (
                      <span key={t} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image + stats */}
          <div className="animate-fade-in">
            <div className="glass rounded-3xl p-8 mb-8">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1 mb-6">
                <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Updated image path */}
                  <img
                    src="/assets/profile.png"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ objectPosition: "center 20%" }}
                    alt="Profile"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-2">7</div>
                <div className="text-gray-400 text-sm">Months Experience</div>
              </div>

              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-2">3</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>

              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-2">4</div>
                <div className="text-gray-400 text-sm">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
