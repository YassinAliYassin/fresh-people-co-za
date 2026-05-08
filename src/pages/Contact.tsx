import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const response = await fetch('https://formspree.io/f/mojrqwzd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <section className="pt-32 md:pt-64 pb-16 md:pb-24 section-container relative">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 md:space-y-12 relative z-10"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">The Conversation</span>
          <h1 className="text-[10vw] md:text-[8vw] font-display font-bold tracking-tighter text-secondary leading-[0.9]">
            Initialize <br /> <span className="text-primary italic font-medium">Protocol.</span>
          </h1>
          <p className="text-lg md:text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Submit your inquiry to begin the vetting and placement sequence for your event.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-none md:rounded-none p-8 md:p-12 lg:p-20 shadow-m3-1" aria-live="polite">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8 md:space-y-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-3 md:space-y-4">
                      <label htmlFor="full-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Full Identity</label>
                      <input
                        id="full-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Organization or Name"
                        aria-required="true"
                        className="w-full bg-secondary-container rounded-none md:rounded-none px-6 md:px-8 py-4 md:py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all placeholder:text-on-surface-variant/50 text-base md:text-lg"
                      />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <label htmlFor="email-address" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Email Coordinates</label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="contact@brand.co.za"
                        aria-required="true"
                        className="w-full bg-secondary-container rounded-none md:rounded-none px-6 md:px-8 py-4 md:py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all placeholder:text-on-surface-variant/50 text-base md:text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <label htmlFor="placement-scope" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Service Required</label>
                    <div className="relative">
                       <select 
                         id="placement-scope"
                         name="service"
                         className="w-full bg-secondary-container rounded-none md:rounded-none px-6 md:px-8 py-4 md:py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer text-base md:text-lg"
                       >
                          <option>Staffing</option>
                          <option>Equipment & Supply</option>
                          <option>Logistics & Setup</option>
                          <option>Management</option>
                          <option>Full-Service Package</option>
                       </select>
                       <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                          <ArrowRight size={16} className="rotate-90" />
                       </div>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                     <label htmlFor="project-brief" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-4 block">Project Brief</label>
                     <textarea
                        id="project-brief"
                        name="message"
                        required
                        rows={3}
                        placeholder="Describe your event parameters..."
                        aria-required="true"
                        className="w-full bg-secondary-container rounded-none md:rounded-none px-6 md:px-8 py-4 md:py-5 text-secondary font-medium focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all resize-none placeholder:text-on-surface-variant/50 text-base md:text-lg"
                     />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="btn-m3-filled !w-full !py-5 md:!py-6 !text-base md:!text-lg !justify-between px-8 md:px-12 focus-visible:ring-4 focus-visible:ring-primary/20 disabled:opacity-50"
                    aria-label="Submit inquiry protocol"
                  >
                     {loading ? 'Transmitting...' : 'Commence Inquiry'} <ArrowRight size={20} aria-hidden="true" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 md:py-20 space-y-6 md:space-y-8"
                  role="status"
                >
                   <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-none mx-auto flex items-center justify-center text-primary">
                      <CheckCircle2 size={48} strokeWidth={1} aria-hidden="true" />
                   </div>
                   <div className="space-y-2">
                     <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary">Transmission Logged.</h3>
                     <p className="text-on-surface-variant text-base md:text-lg">Our consultants will reach out with talent options shortly.</p>
                   </div>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="btn-m3-tonal text-sm md:text-base focus-visible:ring-4 focus-visible:ring-primary/20"
                   >
                     New Inquiry
                   </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
             <div className="bg-secondary text-white p-8 md:p-12 rounded-none md:rounded-none space-y-8 md:space-y-12">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary">
                   <Star size={36}  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-xl md:text-2xl font-display font-bold">Vetting Standards</h4>
                  <p className="text-white/40 text-sm md:text-base leading-relaxed">Behavioral checks and etiquette evaluation are performed for every inquiry before talent allocation.</p>
                </div>
             </div>

             <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-none md:rounded-none space-y-6 md:space-y-10 shadow-sm">
                <div className="space-y-4 md:space-y-6">
                  <h4 className="text-lg md:text-xl font-display font-bold text-secondary">Direct Channel</h4>
                  <div className="flex flex-col gap-6 md:gap-8">
                     <div className="flex items-center gap-4 md:gap-6 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-none md:rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
                           <Mail size={18}  />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">Email Office</p>
                           <p className="text-base md:text-lg font-bold text-secondary truncate">info@fresh-people.co.za</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 md:gap-6 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-none md:rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
                           <Phone size={18}  />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">Direct Voice</p>
                           <p className="text-base md:text-lg font-bold text-secondary">+27 67 296 1272</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 md:gap-6 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-none md:rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
                           <MapPin size={18}  />
                        </div>
                        <div className="space-y-0.5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">HQ Hub</p>
                           <p className="text-base md:text-lg font-bold text-secondary">Randburg</p>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
