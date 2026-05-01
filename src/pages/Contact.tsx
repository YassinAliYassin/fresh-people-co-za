import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface min-h-screen">
      <section className="pt-64 pb-24 section-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">The Conversation</span>
          <h1 className="text-[12vw] md:text-[8vw] font-display font-bold tracking-tighter text-secondary leading-[0.9]">
            Initialize <br /> <span className="text-primary italic font-medium">Protocol.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Submit your inquiry to begin the vetting and placement sequence for your brand activation.
          </p>
        </motion.div>
      </section>

      <section className="py-24 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[40px] p-12 md:p-20 shadow-m3-1" aria-live="polite">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label htmlFor="full-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Full Identity</label>
                      <input
                        id="full-name"
                        type="text"
                        required
                        placeholder="Organization or Name"
                        aria-required="true"
                        className="w-full bg-secondary-container rounded-3xl px-8 py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all placeholder:text-on-surface-variant/50"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="email-address" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Email Coordinates</label>
                      <input
                        id="email-address"
                        type="email"
                        required
                        placeholder="contact@brand.com"
                        aria-required="true"
                        className="w-full bg-secondary-container rounded-3xl px-8 py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all placeholder:text-on-surface-variant/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                     <label htmlFor="placement-scope" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Placement Scope</label>
                     <div className="relative">
                        <select 
                          id="placement-scope"
                          className="w-full bg-secondary-container rounded-3xl px-8 py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                        >
                           <option>Brand Activation</option>
                           <option>VIP Hosting</option>
                           <option>Gala / Private Event</option>
                           <option>Marketing Campaign</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                           <ArrowRight size={16} className="rotate-90" />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <label htmlFor="project-brief" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Project Brief</label>
                     <textarea
                        id="project-brief"
                        required
                        rows={4}
                        placeholder="Describe your event parameters..."
                        aria-required="true"
                        className="w-full bg-secondary-container rounded-3xl px-8 py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all resize-none placeholder:text-on-surface-variant/50"
                     />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-m3-filled !w-full !py-6 !text-lg !justify-between px-12 focus-visible:ring-4 focus-visible:ring-primary/20"
                    aria-label="Submit inquiry protocol"
                  >
                     Commence Inquiry <ArrowRight size={24} aria-hidden="true" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-8"
                  role="status"
                >
                   <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center text-primary">
                      <CheckCircle2 size={56} strokeWidth={1} aria-hidden="true" />
                   </div>
                   <div className="space-y-2">
                     <h3 className="text-4xl font-display font-bold text-secondary">Transmission Logged.</h3>
                     <p className="text-on-surface-variant text-lg">Our consultants will reach out with talent options shortly.</p>
                   </div>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="btn-m3-tonal focus-visible:ring-4 focus-visible:ring-primary/20"
                   >
                     New Inquiry
                   </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
             <div className="bg-secondary text-white p-12 rounded-[40px] space-y-12">
                <Star className="text-primary" size={48} />
                <div className="space-y-4">
                  <h4 className="text-2xl font-display font-bold">Vetting Standards</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Behavioral checks and etiquette evaluation are performed for every inquiry before talent allocation.</p>
                </div>
             </div>

             <div className="bg-white border border-gray-100 p-12 rounded-[40px] space-y-10 shadow-sm">
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <Mail size={20} />
                   </div>
                   <div className="space-y-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">Email Office</p>
                      <p className="text-lg font-bold text-secondary">hello@freshpeople.agency</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <Phone size={20} />
                   </div>
                   <div className="space-y-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">Direct Voice</p>
                      <p className="text-lg font-bold text-secondary">+27 67 296 1272</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <MapPin size={20} />
                   </div>
                   <div className="space-y-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">HQ Hub</p>
                      <p className="text-lg font-bold text-secondary">Sandton, Johannesburg</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
