import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="min-h-[80vh] py-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Profile Image Column */}
      <div className="flex-shrink-0">
        <div className="w-64 h-64 rounded-full bg-neutral-800 border-2 border-neutral-700 overflow-hidden relative">
            {/* Placeholder for image */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm">
                Profile Image
            </div>
        </div>
      </div>

      {/* Content Column */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Abinash Ray Yadav</h1>
          <h2 className="text-xl text-neutral-400 font-medium">Software Development Engineer</h2>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a href="https://github.com/Abinash4567/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-full text-sm text-neutral-300 transition-colors">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abinash-ray-yadav/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-full text-sm text-neutral-300 transition-colors">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a href="https://x.com/rayyadav_abi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-full text-sm text-neutral-300 transition-colors">
            <Twitter size={16} /> {/* X uses Twitter icon usually or X specific */}
            <span>X</span>
          </a>
          <a href="https://dev.to/abinash4567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-full text-sm text-neutral-300 transition-colors">
            <span className="font-bold text-[10px] bg-white text-black px-1 py-0.5 rounded-[2px] leading-none">DEV</span>
            <span>Dev.to</span>
          </a>
        </div>

        <div className="space-y-4 text-neutral-400 leading-relaxed max-w-2xl text-sm md:text-base">
          <p>
            I am someone who loves his profession, obsessed with coding, creating, and deeply curious about how things work in Systems and AI. 
            I am a Computer Science Graduate (Class of 2025) from <strong>Motilal Nehru National Institute of Technology (MNNIT)</strong>.
          </p>
          <p>
            My technical playground includes <strong>React, Express and Cloud</strong>. Whether it's designing microservices or orchestrating LLM workflows with LangChain, I thrive on building efficient, high-performance software.
          </p>
        </div>
      </div>
    </div>
  );
}
