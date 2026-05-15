import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const skills = [
  { name: 'Adobe Premiere Pro', level: 95, color: 'bg-blue-500' },
  { name: 'After Effects', level: 40, color: 'bg-purple-500' },
  { name: 'Cinematography', level: 90, color: 'bg-brand-primary' },
  { name: 'Color Grading', level: 94, color: 'bg-brand-secondary' },
  { name: 'Storytelling', level: 98, color: 'bg-red-500' },
  { name: 'Sound Design', level: 85, color: 'bg-emerald-500' },
  { name: 'Motion Graphics', level: 40, color: 'bg-indigo-500' },
  { name: 'Camera Handling', level: 95, color: 'bg-neutral-500' },
];

export default function Skills() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-4 inline-block">
              Specialization
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Technical <span className="text-white/40">Mastery</span> & <br /> Creative Edge.
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-right hidden md:block italic">
            "Tools are secondary. The vision is what truly matters, but mastery of the tools empowers the vision."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill, idx) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium uppercase tracking-widest text-white/80 group-hover:text-brand-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-white/40">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 1, ease: "easeOut" }}
                  className={cn("h-full rounded-full relative", skill.color)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </section>
  );
}
