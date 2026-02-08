'use client';

import { ArrowUpRight } from "lucide-react";

interface Blog {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  link: string;
}

const blogs: Blog[] = [
  {
    title: 'Improving State Management in React: Transitioning from ContextAPI to Recoil',
    summary: 'Explore the performance differences between Context API and Recoil for large-scale applications. Learn how Recoil\'s atoms and selectors provide fine-grained state management and efficient re-rendering.',
    date: '2024',
    tags: ['typescript', 'webdev', 'tutorial', 'react'],
    link: 'https://dev.to/abinash4567/improving-state-management-in-react-transitioning-from-contextapi-to-recoil-4ghb'
  },
  {
    title: 'Improving State Management in React: Transitioning from Prop Drilling to ContextAPI',
    summary: 'Understand the pitfalls of prop drilling in complex component trees and how React Context API offers a cleaner solution for global state management, despite some performance trade-offs.',
    date: '2024',
    tags: ['webdev', 'react', 'javascript', 'beginners'],
    link: 'https://dev.to/abinash4567/improving-state-management-in-react-transitioning-from-prop-drilling-to-contextapi-53a8'
  }
];

export default function Blogs() {
  return (
    <div id="blogs" className="min-h-[80vh] py-20 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-12">Blogs</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors leading-tight">
                {blog.title}
              </h3>
              <ArrowUpRight size={18} className="text-neutral-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-4" />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {blog.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono text-neutral-500">
                  #{tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
