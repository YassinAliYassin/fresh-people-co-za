import { Wine, Crown, Camera, Coffee, Utensils, Sparkles, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const talents = [
    {
      title: 'Brand Ambassadors',
      description: 'Charismatic professionals calibrated for top-tier activations and corporate presence.',
      icon: <Sparkles size={32} />,
      id: '01',
      features: [
        'Advanced Brand Knowledge',
        'Guest Greeting Protocols',
        'Lead Data Capture',
        'Market Vetting Excellence'
      ]
    },
    {
      title: 'Executive Hosting',
      description: 'Reception and guest management for exclusive gala dinners and board summits.',
      icon: <Crown size={32} />,
      id: '02',
      features: [
        'Elite Etiquette Standards',
        'Guest List Management',
        'VIP Care Excellence',
        'Incident Poise'
      ]
    },
    {
      title: 'Creative Talent',
      description: 'Standard-setting talent for high-end campaigns and editorial luxury shoots.',
      icon: <Camera size={32} />,
      id: '03',
      features: [
        'Campaign Ready Poise',
        'Editorial Aesthetic',
        'Portfolio Excellence',
        'Technical Proficiency'
      ]
    }
  ];

  const hospitality = [
    { title: 'Mixology', icon: <Wine size={24} />, desc: 'RSA-certified beverage specialists.' },
    { title: 'Curation', icon: <Coffee size={24} />, desc: 'High-end barista service.' },
    { title: 'Stewardship', icon: <Utensils size={24} />, desc: 'Elite dining waitstaff.' },
  ];

  return (
    <div className="bg-surface min-h-screen">
      <section className="pt-64 pb-24 section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">The Portfolio</span>
          <h1 className="text-[12vw] md:text-[8vw] font-display font-bold tracking-tighter text-secondary leading-[0.9] max-w-4xl">
            Precision <br /> <span className="text-primary italic font-medium">Staffing.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed">
            From high-end retail activations to elite private hospitality, our talent network is engineered for clinical precision.
          </p>
        </motion.div>
      </section>

      <section className="py-24 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {talents.map((t, i) => (
             <div key={i} className={`rounded-[32px] overflow-hidden p-12 flex flex-col justify-between border border-gray-100 bg-white group hover:border-primary transition-all duration-500 shadow-sm ${i === 0 ? 'lg:col-span-12' : 'lg:col-span-6'}`}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                   <div className="space-y-8 flex-grow">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                           {t.icon}
                        </div>
                        <span className="text-xs font-bold text-[#9a9a9a] uppercase tracking-widest">{t.id}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className={`font-display font-bold text-secondary tracking-tight ${i === 0 ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'}`}>{t.title}</h3>
                        <p className="text-on-surface-variant text-lg font-normal max-w-xl">{t.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
                         {t.features.map((f, j) => (
                           <div key={j} className="flex items-center gap-3 text-secondary font-medium">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                 <Check size={14} strokeWidth={3} />
                              </div>
                              <span>{f}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   {i === 0 && (
                     <div className="w-full md:w-[300px] aspect-square bg-secondary-container rounded-[40px] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                        <Sparkles size={120} className="text-primary" strokeWidth={1} />
                     </div>
                   )}
                </div>
                
                <div className="pt-8 flex justify-end">
                   <Link 
                     to="/contact" 
                     className="btn-m3-tonal focus-visible:ring-4 focus-visible:ring-primary/20"
                     aria-label={`Inquire about ${t.title} specialists`}
                   >
                      Inquire Specialist <ChevronRight size={18} aria-hidden="true" />
                   </Link>
                </div>
             </div>
           ))}
        </div>
      </section>

      <section className="py-40 bg-secondary text-white rounded-[40px] mx-6 sm:mx-12 mb-12">
        <div className="section-container">
          <div className="mb-20 space-y-6">
             <h2 className="text-4xl md:text-6xl font-display font-bold text-[#cccccc]">Hospitality Stewardship.</h2>
             <p className="text-[#999999] text-xl font-light">Certified back-of-house excellence for elite environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {hospitality.map((h, i) => (
               <div key={i} className="bg-white/5 border border-white/5 rounded-3xl p-10 space-y-8 hover:bg-primary hover:text-secondary transition-all duration-500 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-primary">
                     {h.icon}
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-2xl font-display font-bold text-white group-hover:text-secondary transition-colors">{h.title}</h3>
                     <p className="text-[#999999] group-hover:text-secondary/70 text-sm leading-relaxed transition-colors">{h.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-60 section-container text-center">
         <h2 className="text-6xl md:text-[8vw] font-display font-bold tracking-tighter text-secondary leading-none mb-12">
           Architecture <br /> <span className="text-primary">Of Service.</span>
         </h2>
         <Link to="/contact" className="btn-m3-filled !px-20 !py-6 text-xl focus-visible:ring-4 focus-visible:ring-primary/20">
            Secure Booking protocol
         </Link>
      </section>
    </div>
  );
}
