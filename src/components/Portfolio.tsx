import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Play, Maximize2, X } from 'lucide-react';

const categories = ['All', 'Commercial', 'Music Video', 'Short Film', 'Reels', 'Documentary'];

const projects = [
  {
    title: 'Photography',
    category: 'Documentary',
    image: '/varanasi.jpg',
    description: 'A visual exploration of spirituality and childhood in the heart of Varanasi.'
  },
  {
    title: 'Chhath Puja',
    category: 'Documentary',
    image: '/chhathapuja.jpg',
    description: 'Capturing the devotion and beauty of the Chhath Puja festival at the riverbank.'
  },
  {
    title: 'Street Photography',
    category: 'Documentary',
    image: '/street.webp',
    description: 'A candid glimpse into the daily rhythms and hidden stories of urban streets.'
  },
  {
    title: 'Nature\'s Rhythm',
    category: 'Reels',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000',
    description: 'Capturing the raw beauty of natural landscapes in a vertical format.',
    link: 'https://www.instagram.com/reel/DPaeyC-iO-v/?igsh=MWl5cGFsYmRhdXVpYw=='
  },
  {
    title: 'Street Soul',
    category: 'Reels',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=1000',
    description: 'Authentic street vibes and cinematic daily life moments.',
    link: 'https://www.instagram.com/reel/DFIZ-S5q8hq/?igsh=M3VveDltaml3amVv'
  },

  {
    title: 'Future Horizons',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1459',
    description: 'Sci-fi inspired commercial for a tech startup.'
  }
];

type Project = typeof projects[0];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [0, 1], [5, -5]);
  const rotateY = useTransform(springX, [0, 1], [-5, 5]);
  const translateX = useTransform(springX, [0, 1], [-10, 10]);
  const translateY = useTransform(springY, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden cursor-pointer perspective-1000 ${project.link ? '' : 'cursor-default'}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: 1.1,
        }}
        className="w-full h-full relative"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          style={{
            x: translateX,
            y: translateY,
          }}
          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-[filter] duration-500"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col"
        >
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-primary text-[10px] uppercase tracking-[0.2em] mb-2 inline-block"
          >
            {project.category}
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-display font-bold text-white mb-2"
          >
            {project.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-xs font-light line-clamp-2 mb-4 leading-relaxed"
          >
            {project.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-white hover:text-brand-primary transition-colors">
              <Play size={12} className="fill-current" />
              {project.link ? 'View Reel' : 'Play Film'}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
          <Maximize2 size={16} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const getInstagramEmbedUrl = (link: string) => {
    try {
      const url = new URL(link);
      const pathname = url.pathname;
      const match = pathname.match(/\/reel\/([^\/]+)/);
      if (match && match[1]) {
        return `https://www.instagram.com/reel/${match[1]}/embed/`;
      }
      return link;
    } catch (e) {
      return link;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-4 inline-block">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Cinematic Portfolio
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-brand-primary border-brand-primary text-black' 
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                onClick={() => project.link && setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>


        <div className="mt-20 text-center">
           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border border-white/20 hover:border-brand-primary hover:text-brand-primary text-white text-xs font-bold uppercase tracking-widest transition-all rounded-full"
           >
              Load More Projects
           </motion.button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[9/16] md:aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              {selectedProject.link ? (
                <iframe
                  src={getInstagramEmbedUrl(selectedProject.link)}
                  className="w-full h-full border-0"
                  allowTransparency
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center text-white/40">
                  <Play size={48} className="mb-4 opacity-20" />
                  <p>Full film content coming soon</p>
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-display font-bold text-white">{selectedProject.title}</h3>
                <p className="text-white/60 text-sm">{selectedProject.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
