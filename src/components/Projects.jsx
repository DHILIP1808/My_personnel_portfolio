import React from "react";

const PROJECTS = [
  {
    title: "LLM Chatbot with Custom UI",
    desc: "Full-stack chatbot powered by large language models using OpenRouter API. Features interactive React frontend with TypeScript and FastAPI backend for AI response handling.",
    tech: ["React", "TypeScript", "Python", "FastAPI"]
  },
  {
    title: "Smart Rover for Plant Disease Detection",
    desc: "Semi-autonomous rover for detecting plant diseases using real-time image capture and ML. Wi-Fi-enabled web interface for remote control and monitoring.",
    tech: ["Python", "OpenCV", "ML", "Raspberry Pi"]
  },
  {
    title: "Fruitstore - E-commerce Website",
    desc: "Responsive and modern e-commerce UI for an online fruit store. Focused on clean design and user-friendly interfaces with modern UI design.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Showcasing my latest work in AI and web development</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, idx) => (
            <article key={p.title} className="glass rounded-3xl p-6 hover:scale-[1.02] transition transform">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
                  <span className="text-white font-semibold">P{idx + 1}</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-purple-400">Git</a>
                 <a href="https://ai-assistant-trial.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                       
                        Live
                  </a>
              </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-200">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
