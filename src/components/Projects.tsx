'use client';

import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  tech: string;
  date: string;
  description: string;
  points: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Pub/Sub',
    tech: 'Golang • Gobwas (WS) • Syscall • Epoll',
    date: 'Jul 2024 – Aug 2024',
    description: 'A highly scalable, Go-based microservice designed to broadcast messages to millions of connected clients with minimal resource usage.',
    points: [
      'Designed a scalable microservice architecture to connect millions of reader clients with minimal resources.',
      'Optimized server performance by leveraging Go routines to enhance connection handling and event management efficiency.',
      'Eliminated race conditions by implementing sync.Mutex locks to coordinate reader and writer event access.',
      'Leveraged OS-level epoll features to optimize resource usage for large-scale message dissemination.'
    ],
    github: 'https://github.com/Abinash4567/pub_sub'
  },
  {
    title: 'Recall',
    tech: 'Next.js • Chrome API • Cloudinary • Shadcn • Postgres',
    date: 'Jun 2024 – Jul 2024',
    description: 'A dedicated platform designed to enhance cognitive function in individuals with Alzheimer\'s by using custom Twitter posts as memory prompts.',
    points: [
      'Developed a curated content feed with custom Twitter posts to serve as gentle memory prompts and maintain cognitive engagement.',
      'Leveraged Cloudinary to ensure effortless image and avatar storage, simplifying data management.',
      'Built a Chrome Extension to integrate memory prompts directly into the user\'s browsing experience.',
      'Implemented a website preview feature allowing users to see how custom posts will appear in their feed.'
    ],
    github: 'https://github.com/Abinash4567/recall',
    demo: 'https://recall-smoky.vercel.app/'
  },
  {
    title: 'Billops',
    tech: 'Next.js • TypeScript • Prisma • Shadcn • Supabase',
    date: 'Mar 2024 – Apr 2024',
    description: 'A comprehensive subscription management platform designed to help businesses handle billing, user data, and multi-tier subscription models.',
    points: [
      'Designed an insightful dashboard for evaluating revenue, subscription details, and monthly changes.',
      'Empowered businesses to configure and manage custom, multi-tier subscription models tailored to diverse needs.',
      'Developed a secure API leveraging x-api-key authentication to protect access to subscription and user data.',
      'Integrated Razorpay webhook support to securely verify and process payment events in real time.'
    ],
    github: 'https://github.com/Abinash4567/billops',
    demo: 'https://billops.vercel.app/'
  }
];

export default function Projects() {
  return (
    <div id="project" className="min-h-[80vh] py-20 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="relative pl-6 md:pl-0 group">
            {/* Header: Title, Date and Link */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-cyan-400 transition-colors"
                      title="View Live Demo"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
              <span className="text-sm text-neutral-500 font-mono mt-1 md:mt-0">{project.date}</span>
            </div>

            {/* Tech Stack */}
            <h4 className="text-sm font-medium text-cyan-400 mb-4 font-mono">{project.tech}</h4>

            {/* Description */}
            <p className="text-neutral-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Points */}
            <ul className="space-y-2">
              {project.points.map((point, idx) => (
                <li key={idx} className="flex items-center text-neutral-500 text-sm">
                  <span className="mr-2 h-1 w-1 rounded-full bg-neutral-600"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
