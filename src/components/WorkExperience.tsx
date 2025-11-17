import { motion } from 'motion/react';
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react';
import type { Page } from '../App';

interface WorkExperienceProps {
  onNavigate: (page: Page) => void;
}

const experiences = [
  {
    company: 'Shopify',
    role: 'Software Engineer Intern – Developer Productivity',
    period: 'Sep 2025 – Dec 2025',
    location: 'Toronto, ON',
    description: 'Contributed to developer productivity initiatives by building CLI tools, AI agents, and automation pipelines integrated with Shopify\'s Rails ecosystem.',
    achievements: [
      'Built CLI tools to simplify common engineering workflows and boost developer speed',
      'Developed AI agents to automate repetitive tasks and improve build and review efficiency',
      'Created automation pipelines integrated with Shopify\'s Rails ecosystem to improve tooling reliability',
      'Worked with teams to identify bottlenecks and ship improvements used across engineering',
    ],
    logo: '✦',
  },
  {
    company: 'Sodale Group',
    role: 'Digital Strategist/AI Intern',
    period: 'May 2025 – August 2025',
    location: 'Waterloo, ON',
    description: 'Developed automation pipelines and AI-powered solutions to streamline financial modeling and property data analysis across Canadian markets.',
    achievements: [
      'Developed automation pipelines in Python and Power Query to streamline financial model updates and reduce manual effort',
      'Prototyped an AI-powered chatbot using LLMs to provide conversational insights into financial and property data',
      'Built data ingestion systems with web scraping and standardized inputs across Canadian markets to support scalable analysis',
    ],
    logo: '◆',
  },
  {
    company: 'Akom Technologies',
    role: 'Software Development Intern',
    period: 'May 2024 – August 2024',
    location: 'New Delhi, India',
    description: 'Developed and maintained the Django backend for an IT hardware sales platform, enabling seamless customer product queries.',
    achievements: [
      'Developed and maintained the Django backend for an IT hardware sales platform, enabling seamless customer product queries',
      'Designed and integrated database models to manage customer inquiries, improving communication between users and the sales team',
    ],
    logo: '◇',
  },
];

export function WorkExperience({ onNavigate }: WorkExperienceProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col">
        {/* Navigation Header */}
        <div className="px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center border-b border-[#e5e1db]">
          <button
            onClick={() => onNavigate('more-projects')}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Chapter</span>
          </button>
          <span className="text-[#a89984] font-serif">— 3 —</span>
          <button
            onClick={() => onNavigate('index')}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <span>Back to Index</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 md:px-16 lg:px-24 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Chapter Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-[#d4a574] font-serif mb-2">Chapter Three</div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#2a2a2a] mb-3">
                Work Experience
              </h1>
              <p className="text-xl text-[#6a6a6a] mb-6">
                A journey through roles, growth, and impact
              </p>
              <div className="h-px w-32 bg-[#d4a574]" />
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a574] via-[#a89984] to-transparent" />

              {/* Experiences */}
              <div className="space-y-16">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
                    className="relative pl-8 md:pl-24"
                  >
                    {/* Logo stamp */}
                    <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-[#d4a574] flex items-center justify-center shadow-md">
                      <span className="text-[#d4a574] text-lg">{exp.logo}</span>
                    </div>

                    {/* Content card */}
                    <div className="bg-white rounded-sm shadow-lg border border-[#e5e1db] p-8 hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h2 className="font-serif text-2xl text-[#2a2a2a] mb-1">
                              {exp.company}
                            </h2>
                            <p className="text-lg text-[#d4a574]">{exp.role}</p>
                          </div>
                          <div className="text-right text-sm text-[#6a6a6a]">
                            <div className="flex items-center gap-2 justify-end mb-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 justify-end">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
                      </div>

                      {/* Description */}
                      <p className="text-[#4a4a4a] leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h3 className="flex items-center gap-2 text-[#2a2a2a] mb-3">
                          <Briefcase className="w-4 h-4" />
                          <span>Key Achievements</span>
                        </h3>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-[#4a4a4a]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#d4a574] mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-20 pt-12 border-t border-[#e5e1db] text-center"
            >
              <p className="text-[#4a4a4a] italic text-lg max-w-2xl mx-auto leading-relaxed">
                "Each role has been a chapter in continuous learning, pushing boundaries, 
                and creating meaningful impact through thoughtful design and engineering."
              </p>
              <div className="mt-8 flex items-center justify-center gap-2 text-[#a89984]">
                <div className="h-px w-12 bg-[#d4a574]" />
                <span className="font-serif">∗</span>
                <div className="h-px w-12 bg-[#d4a574]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}