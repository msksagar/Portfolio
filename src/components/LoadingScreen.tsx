import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative w-24 h-24">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-t-2 border-brand-primary rounded-full shadow-[0_-5px_15px_rgba(242,125,38,0.3)]" 
               />
               <div className="absolute inset-4 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Play className="text-black fill-current animate-pulse" size={32} />
               </div>
            </div>
            
            <div className="text-center overflow-hidden">
                <motion.h1 
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="font-display font-extrabold text-3xl tracking-tighter uppercase"
                >
                  Mayank
                </motion.h1>
                <div className="w-full h-[1px] bg-white/10 mt-2 relative overflow-hidden">
                   <motion.div 
                     initial={{ x: '-100%' }}
                     animate={{ x: '100%' }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 bg-brand-primary"
                   />
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
