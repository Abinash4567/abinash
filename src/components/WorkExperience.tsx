'use client';

interface Experience {
  company: string;
  role: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    company: 'Veritech.AI',
    role: 'Software Development Engineer',
    date: 'Sep 2025 - Feb 2026',
    points: [
  "Designed and implemented a modular frontend architecture to enhance scalability, maintainability, and component reusability.",
  "Developed reusable data visualization components including pie charts, bar graphs, and bubble charts to present analytical insights.",
  "Built an interactive conversational user interface integrated with an AI copilot to support dynamic user interactions.",
  "Implemented real-time streaming of AI responses, managing multiple processing states and rendering UI components dynamically based on structured JSON outputs.",
  "Developed logic for parsing AI-generated responses to trigger recommended actions and dynamically display metric visualizations.",
  "Engineered a robust file upload system with exponential retry mechanisms and parallel multi-file upload support to ensure reliability and performance.",
  "Contributed to the development of an identity microservice to populate user sessions with brand and user-specific information.",
  "Implemented Meta and Google OAuth sign-in flows to securely retrieve refresh tokens and associated advertising account data."
]

  },
  {
    company: 'Veritech.AI',
    role: 'Intern (Remote)',
    date: 'Jan 2025 - Sep 2025',
    points: [
      'Built a Chrome Extension to scrape LinkedIn user profiles, job postings, and Naukri profiles for data aggregation.',
      'Designed a context-aware chatbot agent with database access to automate candidate screening, reducing manual effort and streamlining the screening process, lowering operational costs by 76%.',
      'Developed an AI assistant with an agentic workflow to perform step-by-step analysis of resumes and job descriptions, providing insights into candidate–role fit on the basis of dynamic user defined parameters.',
      'Built an n8n workflow to automate candidate sourcing and communication, including follow-up emails for non-responses and handling candidate replies.',
      'Developed modular, reusable components aligned with atomic design principles using Ant Design, Tailwind CSS, and Redux to enforce consistency and streamline frontend architecture.',
      'Deployed, tested, and monitored full-stack services on AWS, leveraging Lambda, SQS, SES, S3 and CloudWatch to ensure scalability, reliability, and smooth system operation.'
    ],
  },
  {
    company: 'Foalends, LLC',
    role: 'Software Developer Intern (Remote)',
    date: 'Sep 2024 – Dec 2024',
    points: [
      'Implemented OTP-based email and phone verification using Clerk to enhance security and streamline client onboarding.',
      'Developed in-memory caching solution to efficiently save and allow user to resume form during company registration.',
      'Implemented rate limiting to control the frequency of verification emails a user can send subsequently.',
      'Designed 36 base lexo-rank based algorithm to create unique view of kanban board to each specific user.'
    ],
  },
];

export default function WorkExperience() {
  return (
    <div id="work" className="min-h-[80vh] py-20 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 md:pl-0">
            {/* Header: Company and Date */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
              <span className="text-sm text-neutral-500 font-mono mt-1 md:mt-0">{exp.date}</span>
            </div>
            
            {/* Role */}
            <h4 className="text-lg font-medium text-cyan-400 mb-6">{exp.role}</h4>
            
            {/* Points */}
            <ul className="space-y-4">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-neutral-400 text-sm md:text-base leading-relaxed group">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 min-w-[6px] rounded-full bg-neutral-600 group-hover:bg-cyan-400 transition-colors duration-300"></span>
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
