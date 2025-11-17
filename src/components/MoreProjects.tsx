import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import type { Page } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MoreProjectsProps {
  onNavigate: (page: Page) => void;
}

const projectCategories = [
  {
    category: 'AI / ML',
    projects: [
      {
        title: 'Music Generation with RNNs',
        description: 'LSTM generating Irish folk melodies in ABC notation with temperature sampling.',
      },
      {
        title: 'Rain Prediction for Australia',
        description: 'Machine learning comparison of meteorological models.',
      },
      {
        title: 'MNIST in C++',
        description: 'From-scratch neural network with custom forward/backward pass.',
      },
    ],
  },
  {
    category: 'Systems / CS',
    projects: [
      {
        title: 'Doudizhu Game Engine (Racket)',
        description: 'Complete rules engine with card evaluation and simulations.',
      },
      {
        title: 'Biquadris — Classic Block-Stacking, Reimagined in C++',
        description: 'Full-featured Tetris-style game with advanced gameplay mechanics.',
      },
    ],
  },
  {
    category: 'Full-Stack',
    projects: [
      {
        title: 'Rhythm – Real-Time Speech Coach',
        description: 'FastAPI + React + DSP pitch tracking tool from Hack The Hill.',
      },
      {
        title: 'Pet Monitoring App',
        description: 'Full-stack monitoring + alert system.',
      },
    ],
  },
];

export function MoreProjects({ onNavigate }: MoreProjectsProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col">
        {/* Navigation Header */}
        <div className="px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center border-b border-[#e5e1db]">
          <button
            onClick={() => onNavigate('project-echo')}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <span className="text-[#a89984] font-serif">— 2.4 —</span>
          <button
            onClick={() => onNavigate('work-experience')}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <span>Next Chapter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 md:px-16 lg:px-24 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Chapter Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-[#d4a574] font-serif mb-2">Chapter 2.4</div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#2a2a2a] mb-3">
                More Projects
              </h1>
              <p className="text-xl text-[#6a6a6a] mb-6">
                A collection of additional works and explorations
              </p>
              <div className="h-px w-32 bg-[#d4a574]" />
            </motion.div>

            {/* Project Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-12"
            >
              {projectCategories.map((categoryGroup, categoryIdx) => (
                <motion.div
                  key={categoryGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + categoryIdx * 0.15, duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <h2 className="font-serif text-2xl text-[#2a2a2a]">
                      {categoryGroup.category}
                    </h2>
                    <div className="flex-1 h-px bg-[#e5e1db]" />
                  </div>

                  {/* Projects in this category */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryGroup.projects.map((project, projectIdx) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.5 + categoryIdx * 0.15 + projectIdx * 0.1, 
                          duration: 0.5 
                        }}
                        className="group"
                      >
                        <div className="p-6 bg-white border border-[#e5e1db] rounded-sm shadow-sm hover:shadow-md hover:border-[#d4a574] transition-all duration-300">
                          <h3 className="font-serif text-lg text-[#2a2a2a] mb-2 group-hover:text-[#d4a574] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[#6a6a6a] text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="text-[#6a6a6a] italic">
                Each project represents a unique challenge and learning opportunity
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}