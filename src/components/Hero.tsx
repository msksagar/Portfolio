import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background with cinematic effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />
        
        {/* Placeholder for video reel - Using a dark cinematic gradient + noise for now */}
        <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
             {/* Animating ambient particles would go here */}
             <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2071')] bg-cover bg-center brightness-[0.3]"
             />
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-brand-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 inline-block">
             Professional Video Editor & Cinematographer
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tight leading-[0.9] mb-8">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">Stories</span> Through <br />
            <span className="text-brand-primary">Cinematic</span> Visuals
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Transforming raw footage into powerful narratives. Specializing in high-end editing, color grading, and creative storytelling for global brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-brand-primary text-black font-bold uppercase tracking-widest rounded-full overflow-hidden flex items-center gap-2"
            >
              <span className="relative z-10">View Portfolio</span>
              <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            <motion.a
                href="#showreel"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest rounded-full flex items-center gap-2 transition-all"
            >
              <Play size={18} fill="white" />
              <span>Watch Reel</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}
