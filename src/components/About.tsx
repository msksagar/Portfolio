import React from 'react';
import { motion } from 'motion/react';
import { Camera, Film, Monitor, Layers } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '6+' },
    { label: 'Global Clients', value: '0' },
    { label: 'Awards Won', value: '1' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <img 
                src="/about-mayank.png" 
                alt="Mayank" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-secondary/10 blur-3xl rounded-full" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-4 inline-block">
              About Me
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Driven by <span className="text-brand-primary italic font-serif">Emotion</span>, <br />
              Defined by <span className="underline decoration-brand-secondary decoration-2 underline-offset-8">Precision</span>.
            </h2>
            <p className="text-white/60 text-lg mb-8 font-light leading-relaxed">
              Based in the heart of India, I am a professional Video Editor and Cinematographer with a deep passion for visual storytelling. From high-energy music videos to intimate heritage documentaries, my mission is to capture the essence of every frame.
            </p>
            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
              I believe that every project deserves a unique cinematic language. I don't just cut footage; I weave together rhythm, color, and sound to create immersive experiences that resonate with audiences on a primal level.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-brand-primary mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
