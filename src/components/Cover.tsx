import { motion } from 'motion/react';
import { useEffect } from 'react';
import type { Page } from '../App';

interface CoverProps {
  onNavigate: (page: Page) => void;
}

export function Cover({ onNavigate }: CoverProps) {
  useEffect(() => {
    // Automatically transition to index after 2 seconds
    const timer = setTimeout(() => {
      onNavigate('index');
    }, 2000);

    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="h-full flex items-center justify-center px-8 relative overflow-hidden bg-[#1a0e08]">
      {/* Book container - no zoom, just subtle opening animation */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ 
          rotateY: [0, 0, -10],
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.7, 1],
          ease: "easeInOut"
        }}
        className="relative"
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '2000px'
        }}
      >
        {/* Book cover background with leather texture */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0.3] }}
          transition={{ 
            duration: 2,
            times: [0, 0.8, 1]
          }}
          className="relative w-[500px] h-[700px] md:w-[600px] md:h-[850px]"
        >
          {/* Main leather cover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6b3d2e] via-[#5a2f20] to-[#4a2416] rounded-r-lg shadow-2xl">
            {/* Leather grain texture */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  radial-gradient(ellipse at top left, transparent 0%, rgba(0,0,0,0.3) 100%),
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 3px,
                    rgba(0, 0, 0, 0.05) 3px,
                    rgba(0, 0, 0, 0.05) 6px
                  ),
                  repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 3px,
                    rgba(0, 0, 0, 0.05) 3px,
                    rgba(0, 0, 0, 0.05) 6px
                  )
                `
              }}
            />
            
            {/* Book spine shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/80 to-transparent rounded-l-lg" />
            
            {/* Ornate border frame */}
            <div className="absolute inset-0 m-4 md:m-6 border-4 border-[#d4af37] rounded-sm">
              {/* Inner border line */}
              <div className="absolute inset-0 m-2 border border-[#d4af37]/60" />
              
              {/* Decorative corner stars - top left */}
              <div className="absolute -top-1 -left-1 text-[#d4af37] text-xl">✦</div>
              {/* Top right */}
              <div className="absolute -top-1 -right-1 text-[#d4af37] text-xl">✦</div>
              {/* Bottom left */}
              <div className="absolute -bottom-1 -left-1 text-[#d4af37] text-xl">✦</div>
              {/* Bottom right */}
              <div className="absolute -bottom-1 -right-1 text-[#d4af37] text-xl">✦</div>
              
              {/* Diamond pattern border decoration */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1 text-[#d4af37] text-xs">
                ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1 text-[#d4af37] text-xs">
                ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦
              </div>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-[#d4af37] text-xs">
                <span>✦</span>
                <span>◆</span>
                <span>✦</span>
                <span>◆</span>
                <span>✦</span>
                <span>◆</span>
                <span>✦</span>
              </div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-[#d4af37] text-xs">
                <span>✦</span>
                <span>◆</span>
                <span>✦</span>
                <span>◆</span>
                <span>✦</span>
                <span>◆</span>
                <span>✦</span>
              </div>
            </div>
            
            {/* Subtle aging/wear */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-r-lg" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-between py-16 md:py-20">
          {/* Emblem/Monogram Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="relative">
              {/* Ornate emblem container */}
              <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                {/* Decorative circle frame */}
                <div className="absolute inset-0 rounded-full border-4 border-[#d4af37]/30" />
                <div className="absolute inset-3 rounded-full border-2 border-[#d4af37]/20" />
                
                {/* Flourish elements */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#d4af37] text-3xl">❋</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[#d4af37] text-3xl">❋</div>
                
                {/* Monogram */}
                <div className="relative z-10 text-center">
                  <div className="text-[#d4af37] font-serif text-7xl md:text-8xl drop-shadow-lg opacity-90">
                    MG
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-2 border-[#d4af37]/40 rotate-45" />
                  </div>
                </div>
              </div>
              
              {/* Surrounding decorative elements */}
              <div className="absolute -top-8 -left-8 text-[#d4af37]/60 text-2xl rotate-12">✧</div>
              <div className="absolute -top-8 -right-8 text-[#d4af37]/60 text-2xl -rotate-12">✧</div>
              <div className="absolute -bottom-8 -left-8 text-[#d4af37]/60 text-2xl -rotate-12">✧</div>
              <div className="absolute -bottom-8 -right-8 text-[#d4af37]/60 text-2xl rotate-12">✧</div>
            </div>
          </motion.div>

          {/* Parchment title band */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative w-full px-8"
          >
            <div className="relative bg-gradient-to-b from-[#d9c89e] via-[#c9b588] to-[#b8a678] py-8 md:py-10 shadow-2xl border-y-4 border-[#8b7355]">
              {/* Parchment texture */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(139, 115, 85, 0.1) 2px,
                      rgba(139, 115, 85, 0.1) 4px
                    )
                  `
                }}
              />
              
              {/* Decorative corner flourishes */}
              <div className="absolute top-2 left-4 md:left-8 text-[#6b5d4f] text-2xl md:text-3xl opacity-40">❦</div>
              <div className="absolute top-2 right-4 md:right-8 text-[#6b5d4f] text-2xl md:text-3xl opacity-40 scale-x-[-1]">❦</div>
              <div className="absolute bottom-2 left-4 md:left-8 text-[#6b5d4f] text-2xl md:text-3xl opacity-40 scale-y-[-1]">❦</div>
              <div className="absolute bottom-2 right-4 md:right-8 text-[#6b5d4f] text-2xl md:text-3xl opacity-40 scale-[-1]">❦</div>
              
              {/* Title content */}
              <div className="relative text-center px-4">
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2d2416] mb-3 tracking-wider drop-shadow-sm" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  My Journey
                </h1>
                
                <div className="h-px w-32 md:w-40 mx-auto bg-gradient-to-r from-transparent via-[#6b5d4f] to-transparent my-3" />
                
                <p className="text-[#4a3f2f] text-sm md:text-base mb-1">by</p>
                <p className="font-serif text-lg md:text-xl text-[#2d2416] tracking-wide">
                  Mehul Grover
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Opening book effect - pages flipping */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: [0, 0, 1, 1],
          scaleX: [0, 0, 1, 1],
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.8, 0.9, 1]
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/10 to-transparent"
        style={{
          transformOrigin: 'left center'
        }}
      />
    </div>
  );
}