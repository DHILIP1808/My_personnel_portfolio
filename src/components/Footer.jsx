import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; 2025 Dilipkumar J. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/DHILIP1808"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 transition"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/dilipkumar1808/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:dkdhilip777@gmail.com"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-yellow-400 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
