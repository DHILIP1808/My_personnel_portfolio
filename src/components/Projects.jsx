import React from "react";

const PROJECTS = [
  {
    title: "LLM Chatbot",
    desc: "Full-stack chatbot powered by large language models using OpenRouter API. Features interactive React frontend with TypeScript and FastAPI backend for AI response handling.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "Vite", "Tailwind CSS"],
    git: "https://github.com/DHILIP1808/LLM-CHATBOT",
    live: "https://ai-assistant-trial.netlify.app/"
  },
  {
    title: "Resume Analyser AI",
    desc: "Developed an AI-powered web application that evaluates resumes, calculates ATS scores, and compares them with job descriptions using LLM integration to deliver detailed insights and improvement suggestions, while building a responsive, cross-browser compatible, and user-friendly interface that supports multiple formats (PDF, DOCX, text) with real-time analysis completed in under 30 seconds.",
    tech: ["React", "Tailwind CSS", "Python", "Vite"],
    git: "https://github.com/DHILIP1808/Resume_analyser",
    live: "https://resume-analyser-frontend-8doz.onrender.com/"
  },
  {
    title: "QuickRead AI",
    desc: "Developed an AI-powered document assistant that enables users to upload multiple file types (PDF, Word, Excel, Text, ZIP) and interact with their content through a natural language chat interface, while integrating LLM-based real-time, context-aware analysis and designing a fully responsive, cross-browser compatible UI with adjustable response creativity.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Python", "Vite"],
    git: "https://github.com/DHILIP1808/Quickread",
    live: "https://quickread-876n.onrender.com/"
  },
  {
    title: "ShopSmart",
    desc: "Built a modern, mobile-first e-commerce interface using React, TypeScript, Vite, and Tailwind CSS, ensuring smooth performance, intuitive UI design, and compatibility across all major browsers and devices, while implementing product cart and favorites functionality using Redux Toolkit for scalable state management and integrating the FakeStore API to dynamically fetch product data, showcasing strong API-driven UI development and component-based architecture skills.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
    git: "https://github.com/DHILIP1808/shopsmart",
    live: "https://shopsmart-vmk6.onrender.com/"
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
                  <a 
                    href={p.git} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Git
                  </a>
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Live
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-300 mb-4 text-justify">{p.desc}</p>

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