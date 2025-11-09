import React from "react";
import { Code2,FileCode2,Brain } from "lucide-react"; // import icons
export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500" />
          <div className="space-y-12">
            {/* Experience */}
            <div className="flex items-center animate-slide-up">
              <div className="w-1/2 pr-8 text-right">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Frontend & AI Developer Intern
                  </h3>
                  <p className="text-purple-400 font-semibold mb-2">
                    Data Reveal AI Company
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    March 2025 - September 2025
                  </p>
                  <p className="text-gray-300 text-justify">
                    Developed responsive and performant frontend applications using React (Vite) and 
                    Tailwind CSS to enhance UI/UX consistency and load speed, while building a 
                    Retrieval-Augmented Generation (RAG) chatbot for agricultural learning by integrating 
                    ChromaDB with Hugging Face and LLMs for contextual accuracy, applying hands-on expertise 
                    in RAG and LLMs to incorporate advanced AI capabilities into modern frontend applications.
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900" />
              <div className="w-1/2 pl-8" />
            </div>

            {/* Education */}
            <div
              className="flex items-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-1/2 pr-8" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900" />
              <div className="w-1/2 pl-8">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Bachelor of Engineering - ECE
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-2">
                    Adhiparasakthi Engineering College
                  </p>
                  <p className="text-gray-400 text-sm mb-4">2021 - 2025</p>
                  <p className="text-gray-300">
                    I completed my B.E. in Electronics and Communication Engineering at Adhiparasakthi 
                    Engineering College, Melmaruvathur, with a CGPA of 8.2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* Certifications */}
<div className="mt-16 animate-fade-in">
  <h3 className="text-xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
    Certifications
  </h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { 
        text: "HTML CSS JavaScript", 
        provider: "Infosys Springboard",
        icon: Code2 
      },
      { 
        text: "Python", 
        provider: "Campus Connection",
        icon: FileCode2 
      },
      { 
        text: "Machine Learning with Python", 
        provider: "Campus Connection",
        icon: Brain 
      },
    ].map((c) => (
      <div
        key={c.text}
        className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
      >
        <c.icon className="mx-auto text-purple-400 mb-4 w-10 h-10" />
        <p className="text-gray-100 font-bold text-lg mb-2">{c.text}</p>
        <p className="text-gray-400 text-sm">by {c.provider}</p>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
