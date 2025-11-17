import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import type { Page } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectChapterProps {
  chapterNumber: number;
  title: string;
  subtitle: string;
  techStack: string[];
  description: string;
  keyFeatures: string[];
  onNavigate: (page: Page) => void;
  heroImage?: string;
  githubUrl?: string;
}

export function ProjectChapter({
  chapterNumber,
  title,
  subtitle,
  techStack,
  description,
  keyFeatures,
  onNavigate,
  heroImage,
  githubUrl,
}: ProjectChapterProps) {
  const getNextPage = (): Page => {
    if (chapterNumber === 2.1) return 'project-shakespeare';
    if (chapterNumber === 2.2) return 'project-compiler';
    if (chapterNumber === 2.3) return 'more-projects';
    return 'work-experience';
  };

  const getPrevPage = (): Page => {
    if (chapterNumber === 2.1) return 'foreword';
    if (chapterNumber === 2.2) return 'project-strumspace';
    if (chapterNumber === 2.3) return 'project-shakespeare';
    return 'index';
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col">
        {/* Navigation Header */}
        <div className="px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center border-b border-[#e5e1db]">
          <button
            onClick={() => onNavigate(getPrevPage())}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <span className="text-[#a89984] font-serif">— {chapterNumber} —</span>
          <button
            onClick={() => onNavigate(getNextPage())}
            className="flex items-center gap-2 text-[#6a6a6a] hover:text-[#d4a574] transition-colors"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 md:px-16 lg:px-24 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Chapter Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-[#d4a574] font-serif mb-2">
                Chapter {chapterNumber}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#2a2a2a] mb-3">
                {title}
              </h1>
              <p className="text-xl text-[#6a6a6a] mb-6">{subtitle}</p>
              <div className="h-px w-32 bg-[#d4a574]" />
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-16 relative"
            >
              <div className="aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#4a4a4a] rounded-sm shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src={heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"}
                  alt={title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl md:text-6xl font-serif">{title}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid md:grid-cols-3 gap-12"
            >
              {/* Main Description */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-[#2a2a2a] mb-4">Overview</h2>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    {description}
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-[#2a2a2a] mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4a574] mt-2" />
                        <span className="text-[#4a4a4a]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-lg text-[#2a2a2a] mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#f0ede8] text-[#4a4a4a] text-sm rounded-full border border-[#e5e1db]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {githubUrl && (
                  <div className="pt-6 border-t border-[#e5e1db]">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-white hover:bg-[#d4a574] transition-colors rounded-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}