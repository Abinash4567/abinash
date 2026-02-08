'use client';

import { useEffect, useState } from "react";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'blogs', label: 'Blogs' },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Adjust rootMargin to create a detection area in the center of the viewport
        // This ensures that whatever section is currently in the middle of the screen is highlighted
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0 
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Left Sidebar - Fixed to Left Viewport */}
      <aside className="hidden lg:flex flex-col justify-center h-screen fixed left-6 top-0 z-40">
        <nav>
          <ul className="space-y-6">
            {navItems.map(({ id, label }) => (
              <li 
                key={id}
                onClick={() => scrollToSection(id)}
                className="group flex items-center gap-4 cursor-pointer"
              >
                {/* Line Indicator */}
                <span 
                  className={`h-[1px] transition-all duration-300 ease-in-out ${
                    activeSection === id 
                      ? 'w-8 bg-foreground' 
                      : 'w-4 bg-gray-600 group-hover:w-6 group-hover:bg-foreground'
                  }`}
                />
                
                {/* Text Label */}
                <span 
                  className={`text-base font-normal tracking-normal transition-colors duration-300 ${
                    activeSection === id 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-white'
                  }`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content - Centered */}
      <section className="max-w-4xl mx-auto space-y-32 py-32 px-6">
         {/* About Section */}
         <About />

         {/* Work Section */}
         <WorkExperience />

         {/* Project Section */}
         <Projects />

         {/* Skills Section */}
         <Skills />

         {/* Blogs Section */}
         <Blogs />
      </section>
    </main>
  );
}
