import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import type { Page } from '../App';

interface IndexProps {
  onNavigate: (page: Page) => void;
}

export function Index({ onNavigate }: IndexProps) {
  const chapters = [
    {
      number: '1',
      title: 'Foreword',
      subtitle: 'About Me',
      page: 'foreword' as Page,
    },
    {
      number: '2',
      title: 'Projects',
      subtitle: 'Selected Works',
      subChapters: [
        { number: '2.1', title: 'StrumSpace', page: 'project-strumspace' as Page },
        { number: '2.2', title: 'Miniature Shakespeare LLM', page: 'project-shakespeare' as Page },
        { number: '2.3', title: 'MIPS Compiler', page: 'project-compiler' as Page },
        { number: '2.4', title: 'More Projects', page: 'more-projects' as Page },
      ],
    },
    {
      number: '3',
      title: 'Work Experience',
      subtitle: 'Professional Journey',
      page: 'work-experience' as Page,
    },
  ];

  return (
    <div className="h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl w-full">
        {/* Book Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl mb-4 font-serif text-[#2a2a2a] tracking-tight">
            Index
          </h1>
          <div className="h-px w-24 bg-[#d4a574] mx-auto" />
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          {chapters.map((chapter, idx) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
            >
              {/* Main Chapter */}
              <button
                onClick={() => chapter.page && onNavigate(chapter.page)}
                className="group w-full text-left py-4 border-b border-[#e5e1db] hover:border-[#d4a574] transition-all duration-300"
              >
                <div className="flex items-baseline justify-between">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#d4a574] font-serif text-lg">
                        {chapter.number}
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl text-[#2a2a2a] group-hover:text-[#d4a574] transition-colors">
                        {chapter.title}
                      </h2>
                    </div>
                    <p className="text-[#6a6a6a] ml-10 mt-1">
                      {chapter.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </button>

              {/* Sub-chapters */}
              {chapter.subChapters && (
                <div className="ml-10 mt-2 space-y-2">
                  {chapter.subChapters.map((sub) => (
                    <button
                      key={sub.number}
                      onClick={() => onNavigate(sub.page)}
                      className="group w-full text-left py-2 flex items-baseline gap-3 hover:text-[#d4a574] transition-colors"
                    >
                      <span className="text-[#a89984] text-sm font-serif">
                        {sub.number}
                      </span>
                      <span className="text-[#4a4a4a] group-hover:text-[#d4a574] transition-colors">
                        {sub.title}
                      </span>
                      <div className="flex-1 border-b border-dotted border-[#d5d1cc] mb-1 mx-2" />
                      <ChevronRight className="w-4 h-4 text-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Page Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-right text-[#a89984] font-serif"
        >
          — i —
        </motion.div>
      </div>
    </div>
  );
}