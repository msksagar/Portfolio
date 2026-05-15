import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const feedbackData = [
  {
    name: 'Sarah Jenkins',
    role: 'Creative Director, Nike',
    content: 'The level of professionalism and artistic vision brought to our last campaign was unmatched. The storytelling is simply breathtaking.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'David Chen',
    role: 'Tech Influencer',
    content: 'Finalized my YouTube showreel in record time without compromising on the cinematic quality. A true master of Premiere and Resolve.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Elena Rossi',
    role: 'Producer, Independent Films',
    content: 'Working on our short film together was an absolute joy. The color grading elevated the entire project to a theatrical level.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Feedback() {
  return (
    <section id="feedback" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-4 inline-block">
            Voice of the People
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Feedback
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbackData.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 glass-card"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-black fill-current" size={20} />
              </div>
              
              <p className="text-white/70 text-lg font-light italic leading-relaxed mb-8">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-brand-primary/30" />
                <div>
                  <h4 className="font-display font-bold text-sm bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
