'use client';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['C', 'C++', 'Java (OOP)', 'JavaScript', 'TypeScript', 'Go (Concurrency)']
  },
  {
    name: 'Web & Backend Technologies',
    skills: ['React', 'Next.js', 'Express.js', 'Recoil', 'WebSockets', 'Redis', 'LangChain']
  },
  {
    name: 'Databases & Data Layer',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'GraphQL']
  },
  {
    name: 'DevOps & Cloud',
    skills: ['AWS (Lambda, SQS, S3, SES, CloudWatch)', 'Docker']
  },
  {
    name: 'Tools & Developer Workflow',
    skills: ['Git', 'GitHub', 'Postman', 'Ngrok', 'Tailwind CSS', 'Shadcn UI']
  }
];

export default function Skills() {
  return (
    <div id="skills" className="min-h-[80vh] py-20 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="grid md:grid-cols-4 gap-4 md:gap-8 items-start group">
            <h3 className="text-lg font-medium text-neutral-400 md:col-span-1 group-hover:text-cyan-400 transition-colors duration-300">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2 md:col-span-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
