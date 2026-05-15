import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, Linkedin, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Play className="text-black w-4 h-4 fill-current" />
             </div>
             <span className="font-display font-bold text-lg tracking-tighter uppercase">
               Mayank
             </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 font-display">
             <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a>
             <a href="#" className="hover:text-brand-primary transition-colors">Careers</a>
          </div>

          <div className="flex gap-4">
             {[
               { Icon: Instagram, href: 'https://www.instagram.com/themayankside?igsh=MTcwc3d3Z3EwZDN0Zw%3D%3D&utm_source=qr' },
               { Icon: Youtube, href: 'https://youtube.com/@mayankside?si=suo8h4BNRoLgmOID' },
               { Icon: Linkedin, href: 'https://www.linkedin.com/in/mayank-kumar-945168266?utm_source=share_via&utm_content=profile&utm_medium=member_ios' }
             ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-brand-primary transition-colors"
                >
                   <social.Icon size={18} />
                </a>
             ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
           <p className="text-[10px] uppercase tracking-widest text-white/20">
              © {new Date().getFullYear()} MAYANK PORTFOLIO. ALL RIGHTS RESERVED. CRAFTED WITH PASSION AND PIXELS.
           </p>
        </div>
      </div>
    </footer>
  );
}
