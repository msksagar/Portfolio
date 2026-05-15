import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1518005020250-6859458674c3?auto=format&fit=crop&q=80&w=2000" 
          alt="Background Texture" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-4 inline-block">
            The Spotlight
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Featured Showreel
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light">
            A curated montage of my best cinematographic shots and editing masterpieces.
          </p>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           onClick={() => !isPlaying && setIsPlaying(true)}
           className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shadow-brand-primary/10 border border-white/5"
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full relative"
              >
                {/* Main Video/Image Preview */}
                <img 
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1459" 
                  alt="Showreel Preview" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-75"
                />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-brand-primary rounded-full animate-pulse" />
                    <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                       <Play size={40} className="text-brand-primary fill-brand-primary ml-2" />
                    </div>
                    
                    {/* Spinning borders effect */}
                    <div className="absolute -inset-4 border border-brand-primary/30 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                    <div className="absolute -inset-8 border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]" />
                  </motion.div>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex flex-col md:flex-row items-end justify-between bg-gradient-to-t from-black to-transparent pointer-events-none">
                   <div className="flex flex-col gap-2">
                      <span className="text-white/40 text-[10px] uppercase tracking-widest">Global Showreel</span>
                      <h3 className="text-2xl font-display font-bold">MAYANK REEL 2.0</h3>
                   </div>
                   <div className="flex items-center gap-4 mt-4 md:mt-0">
                      <div className="flex flex-col items-center">
                          <span className="text-brand-primary font-bold">4K</span>
                          <span className="text-[10px] uppercase text-white/30">Resolution</span>
                      </div>
                      <div className="w-[1px] h-8 bg-white/20 mx-2" />
                      <div className="flex flex-col items-center">
                          <span className="text-brand-primary font-bold">60</span>
                          <span className="text-[10px] uppercase text-white/30">FPS</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full bg-black relative"
              >
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/UKFiT0wt1Yg?si=o08hweL9zC3QrgDX&autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black p-2 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
