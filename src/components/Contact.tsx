import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Youtube, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      fullName: formData.fullName.trim() === '' ? 'Name is required' : '',
      email: !validateEmail(formData.email) ? 'Valid email is required' : '',
      message: formData.message.trim() === '' ? 'Project details are required' : ''
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSuccess(true);
          setFormData({ fullName: '', email: '', message: '' });
          setTimeout(() => setIsSuccess(false), 5000);
        } else {
          const data = await response.json();
          alert(data.error || 'Failed to send message. Please try again.');
        }
      } catch (err) {
        console.error('Contact form error:', err);
        alert('An unexpected error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 aspect-square bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-1/4 -left-1/4 w-1/2 aspect-square bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-4 inline-block">
               Let's Collaborate
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight uppercase tracking-tighter">
              Start Your <br /> Next <span className="text-brand-primary">Vision</span>.
            </h2>
            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed max-w-md">
              Have a project in mind? Whether it's a music video, a commercial, or a feature film, I'm ready to bring your story to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                  <Mail className="text-white/60 group-hover:text-brand-primary transition-colors" size={20} />
                </div>
                <div>
                   <span className="block text-[10px] uppercase tracking-widest text-white/30">Email Me</span>
                   <a href="mailto:mayankzx11@gmail.com" className="text-xl font-display font-medium hover:text-brand-primary transition-colors">mayankzx11@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
               {[
                 { Icon: Instagram, href: 'https://www.instagram.com/themayankside?igsh=MTcwc3d3Z3EwZDN0Zw%3D%3D&utm_source=qr' },
                 { Icon: Youtube, href: 'https://youtube.com/@mayankside?si=suo8h4BNRoLgmOID' },
                 { Icon: Linkedin, href: 'https://www.linkedin.com/in/mayank-kumar-945168266?utm_source=share_via&utm_content=profile&utm_medium=member_ios' }
               ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all"
                  >
                    <social.Icon size={18} />
                  </motion.a>
               ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative"
          >
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm ${errors.fullName ? 'border-red-500/50' : 'border-white/10'}`} 
                        placeholder="John Doe" 
                      />
                      {errors.fullName && <p className="text-red-500 text-[10px] uppercase tracking-wider ml-1">{errors.fullName}</p>}
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm ${errors.email ? 'border-red-500/50' : 'border-white/10'}`} 
                        placeholder="john@example.com" 
                      />
                      {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-wider ml-1">{errors.email}</p>}
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Project Details</label>
                   <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm ${errors.message ? 'border-red-500/50' : 'border-white/10'}`} 
                    placeholder="Tell me about your vision..."
                   ></textarea>
                   {errors.message && <p className="text-red-500 text-[10px] uppercase tracking-wider ml-1">{errors.message}</p>}
                </div>

                <motion.button
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   disabled={isSubmitting}
                   className="w-full py-4 bg-brand-primary text-black font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                   {isSubmitting ? (
                     <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                   ) : (
                     <>
                       <span>{isSuccess ? 'Message Sent!' : 'Send Message'}</span>
                       {!isSuccess && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                     </>
                   )}
                </motion.button>
                
                {isSuccess && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-primary text-center text-xs uppercase tracking-widest font-medium"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
