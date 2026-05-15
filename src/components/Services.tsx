import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Camera, Youtube, Palette, Music, Megaphone, Smartphone, Star } from 'lucide-react';

const services = [
  {
    title: 'Video Editing',
    description: 'High-end post-production for films, music videos, and commercials with advanced storytelling techniques.',
    icon: Scissors,
  },
  {
    title: 'Cinematic Shoots',
    description: 'Professional cinematography with cinema-grade cameras, lighting, and composition directed for emotion.',
    icon: Camera,
  },
  {
    title: 'Commercial Ads',
    description: 'Powerful brand narratives designed to convert viewers into customers through high-impact visuals.',
    icon: Megaphone,
  },
  {
    title: 'Social Media Content',
    description: 'Fast-paced, vertically optimized content for Instagram Reels, TikTok, and YouTube Shorts.',
    icon: Smartphone,
  },
  {
    title: 'Color Grading',
    description: 'Advanced color science to create specific moods and professional-looking cinematic aesthetics.',
    icon: Palette,
  },
  {
    title: 'Motion Graphics',
    description: 'Eye-catching 2D and 3D animations to enhance visual engagement and clarify complex messages.',
    icon: Star,
  },
  {
    title: 'YouTube Editing',
    description: 'Optimized editing for high retention, featuring strategic pacing, call-to-actions, and sound design.',
    icon: Youtube,
  },
  {
    title: 'Sound Design',
    description: 'Immersive audio landscapes with SFX, foley, and specialized sound mixing to elevate the experience.',
    icon: Music,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-4 inline-block">
              My Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Premium <span className="text-white/40">Visual</span> <br /> Solutions.
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-right hidden md:block">
            Tailored services for brands and artists who demand the highest standards in cinematic production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group hover:bg-brand-primary transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black/20 transition-colors">
                <service.icon className="text-brand-primary group-hover:text-black transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-black transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed group-hover:text-black/70 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
