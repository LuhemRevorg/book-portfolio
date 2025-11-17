import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Page } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ForewordProps {
  onNavigate: (page: Page) => void;
}

export function Foreword({ onNavigate }: ForewordProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col">
        {/* Navigation Header */}
        <div className="px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center border-b border-[#e5e1db]">
          <button
            onClick={() => onNavigate('index')}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Index</span>
          </button>
          <span className="text-[#a89984] font-serif">— 1 —</span>
          <button
            onClick={() => onNavigate('project-aurora')}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <span>Next Chapter</span>
            <ArrowRight className="w-4 h-4" />
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
              <div className="text-[#d4a574] font-serif mb-2">Chapter One</div>
              <h1 className="text-5xl md:text-7xl font-serif text-[#2a2a2a] mb-6">
                Foreword
              </h1>
              <div className="h-px w-32 bg-[#d4a574]" />
            </motion.div>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-16"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-[#2a2a2a] leading-relaxed mb-6">
                  <span className="float-left text-6xl font-serif text-[#d4a574] leading-none mr-2 mt-2">H</span>
                  i, I'm Mehul — a developer who loves turning ideas into real, working technology.
                  I study Data Science at the University of Waterloo, and most of my work sits at the intersection of software engineering, machine learning, and thoughtful product design. I like building projects that solve real problems: from AR tools and AI-powered chatbots to financial-model automation systems and proctoring solutions used in large-scale deployments.
                </p>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">
                  I'm driven by a simple idea: if something can be improved with code, I want to build it.
                  Whether it's designing full-stack apps, training ML models, or architecting systems that make workflows smoother, I approach every project with curiosity, clarity, and a high bar for execution.
                </p>
                <p className="text-[#4a4a4a] leading-relaxed">
                  I've also worked at Shopify on developer productivity initiatives, contributing to tooling and internal systems that help engineers ship better software, faster. Outside work, I spend a lot of time experimenting with 3D interfaces, automation, and creative AI tools.
                </p>
                <p className="text-[#4a4a4a] leading-relaxed">
                  I'm always learning, always building, and always looking for the next challenge that pushes me further.
                </p>
              </div>
            </motion.div>

            {/* Skills & Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8 pt-12 border-t border-[#e5e1db]"
            >
              <div>
                <h3 className="font-serif text-xl text-[#2a2a2a] mb-4">Machine Learning</h3>
                <ul className="space-y-2 text-[#6a6a6a]">
                  <li>Deep Learning</li>
                  <li>Computer Vision</li>
                  <li>NLP & AI Chatbots</li>
                  <li>Model Training</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#2a2a2a] mb-4">Full-Stack Development</h3>
                <ul className="space-y-2 text-[#6a6a6a]">
                  <li>React & TypeScript</li>
                  <li>Next.js & Node.js</li>
                  <li>Python & FastAPI</li>
                  <li>System Architecture</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#2a2a2a] mb-4">Specializations</h3>
                <ul className="space-y-2 text-[#6a6a6a]">
                  <li>AR/VR & 3D Interfaces</li>
                  <li>Financial Automation</li>
                  <li>Proctoring Solutions</li>
                  <li>Data Science</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}