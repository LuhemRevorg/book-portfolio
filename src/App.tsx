import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cover } from './components/Cover';
import { Index } from './components/Index';
import { Foreword } from './components/Foreword';
import { ProjectChapter } from './components/ProjectChapter';
import { MoreProjects } from './components/MoreProjects';
import { WorkExperience } from './components/WorkExperience';

export type Page = 
  | 'cover'
  | 'index' 
  | 'foreword' 
  | 'project-strumspace' 
  | 'project-shakespeare' 
  | 'project-compiler'
  | 'more-projects' 
  | 'work-experience';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('index');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const navigateToPage = (page: Page) => {
    const pageOrder: Page[] = [
      'cover',
      'index',
      'foreword',
      'project-strumspace',
      'project-shakespeare',
      'project-compiler',
      'more-projects',
      'work-experience',
    ];
    
    const currentIndex = pageOrder.indexOf(currentPage);
    const nextIndex = pageOrder.indexOf(page);
    
    setDirection(nextIndex > currentIndex ? 'forward' : 'backward');
    setCurrentPage(page);
  };

  const pageVariants = {
    initial: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? '100%' : '-100%',
      opacity: 0,
      rotateY: direction === 'forward' ? 25 : -25,
    }),
    animate: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? '-50%' : '50%',
      opacity: 0,
      rotateY: direction === 'forward' ? -15 : 15,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] overflow-hidden">
      <div className="relative h-screen perspective-[2000px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {currentPage === 'cover' && <Cover onNavigate={navigateToPage} />}
            {currentPage === 'index' && <Index onNavigate={navigateToPage} />}
            {currentPage === 'foreword' && <Foreword onNavigate={navigateToPage} />}
            {currentPage === 'project-strumspace' && (
              <ProjectChapter
                chapterNumber={2.1}
                title="StrumSpace"
                subtitle="AR Guitar Training System"
                techStack={['Python', 'YOLOv8', 'MediaPipe', 'OpenCV', 'React']}
                description="StrumSpace is a real-time AR guitar training system that provides live fretboard tracking with AR chord projection overlays. Using YOLOv8-powered computer vision and MediaPipe hand tracking, it detects guitar fretboards and provides real-time guidance for self-learners with stable tracking across varying lighting conditions and camera angles."
                keyFeatures={[
                  'Live fretboard tracking using YOLOv8 object detection',
                  'AR chord projection overlays for real-time guidance',
                  'Real-time strum direction detection',
                  'Stable tracking across lighting conditions and angles',
                  'Detection → Smoothing → Coordinate Mapping → Render pipeline',
                  'Real-time inference with optimized FPS performance',
                ]}
                onNavigate={navigateToPage}
                heroImage="https://images.unsplash.com/photo-1647193022213-4e82b7553383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBhdWdtZW50ZWQlMjByZWFsaXR5fGVufDF8fHx8MTc2MzM1MTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                githubUrl="https://github.com/LuhemRevorg/StrumSpace"
              />
            )}
            {currentPage === 'project-shakespeare' && (
              <ProjectChapter
                chapterNumber={2.2}
                title="Miniature Shakespeare LLM"
                subtitle="Character-Level Language Model"
                techStack={['PyTorch', 'Python', 'LSTM', 'NLP']}
                description="A character-level LSTM language model trained on Shakespeare's complete works to generate authentic Shakespeare-style text. The project demonstrates deep learning fundamentals including RNN architecture, embeddings, training pipelines, and sequence generation with temperature-controlled sampling for creative text generation."
                keyFeatures={[
                  'Character-level LSTM for sequence modeling',
                  'Custom preprocessing with character mapping and vocab creation',
                  'Embedding + LSTM + Linear layers architecture',
                  'Temperature-controlled sampling for adjustable creativity',
                  'Custom inference pipeline with greedy vs. sampling decoding',
                  'Convergence visualization and training dynamics analysis',
                ]}
                onNavigate={navigateToPage}
                heroImage="https://images.unsplash.com/photo-1723220217596-45d4b51e2804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFrZXNwZWFyZSUyMHRleHQlMjBib29rfGVufDF8fHx8MTc2MzM1MTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                githubUrl="https://github.com/LuhemRevorg/ShakeLLM"
              />
            )}
            {currentPage === 'project-compiler' && (
              <ProjectChapter
                chapterNumber={2.3}
                title="MIPS Compiler"
                subtitle="End-to-End Compiler Pipeline"
                techStack={['C++', 'MIPS Assembly', 'Compilers', 'Systems']}
                description="A complete compiler for a MIPS-like language built for CS241, implementing the full compilation pipeline from source code to MIPS assembly. The compiler handles lexing, parsing, semantic analysis, and code generation with proper error recovery and register allocation strategies."
                keyFeatures={[
                  'Complete scanner (tokenizer) implementation',
                  'Recursive descent parser with grammar design',
                  'Semantic analysis and type checking',
                  'Code generation to MIPS-like assembly',
                  'Error recovery mechanisms',
                  'Register allocation and logical mapping',
                  'AST construction and optimization',
                ]}
                onNavigate={navigateToPage}
                heroImage="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvZGUlMjBhc3NlbWJseXxlbnwxfHx8fDE3NjMzNTE2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                githubUrl="https://github.com/LuhemRevorg/WLP4Comp"
              />
            )}
            {currentPage === 'more-projects' && (
              <MoreProjects onNavigate={navigateToPage} />
            )}
            {currentPage === 'work-experience' && (
              <WorkExperience onNavigate={navigateToPage} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}