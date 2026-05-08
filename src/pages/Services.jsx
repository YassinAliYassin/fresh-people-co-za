import { Coffee, Wine, Settings, ClipboardList, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Staffing',
      description: 'Waiters, Bartenders, Baristas, Marshals, and Commis Chefs.',
      icon: <Coffee size={32} />,
      id: '01',
      features: [
        'Professional Wait Staff',
        'RSA-Certified Bartenders',
        'Skilled Baristas',
        'Event Marshals & Security',
        'Commis Chefs & Kitchen Support'
      ]
    },
    {
      title: 'Equipment & Supply',
      description: 'Bar stock, Glassware, Bar tools, and Coffee station supplies.',
      icon: <Wine size={32} />,
      id: '02',
      features: [
        'Premium Bar Stock',
        'Crystal & Glassware',
        'Professional Bar Tools',
        'Coffee Station Setup',
        'Equipment Delivery & Pickup'
      ]
    },
    {
      title: 'Logistics & Setup',
      description: 'Table settings and décor support.',
      icon: <Settings size={32} />,
      id: '03',
      features: [
        'Table Setting & Styling',
        'Décor Coordination',
        'Venue Layout Planning',
        'Setup & Breakdown Crews',
        'Timeline Management'
      ]
    },
    {
      title: 'Management',
      description: 'Full event planning and end-to-end coordination.',
      icon: <ClipboardList size={32} />,
      id: '04',
      features: [
        'End-to-End Event Planning',
        'On-Site Coordination',
        'Vendor Management',
        'Budget Planning',
        'Post-Event Reporting'
      ]
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      <section className="pt-40 md:pt-64 pb-24 section-container relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12 relative z-10"
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

      {/* Brand Images */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-none">
            <img src="/images/page-image-new1.jpg" alt="Fresh People" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          </div>
          <div className="relative overflow-hidden rounded-none">
            <img src="/images/page-image-new2.jpg" alt="Fresh People" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          </div>
          <div className="relative overflow-hidden rounded-none">
            <img src="/images/extra1.jpg" alt="Fresh People" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          </div>
          <div className="relative overflow-hidden rounded-none">
            <img src="/images/extra2.jpg" alt="Fresh People" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          </div>
          <div className="relative overflow-hidden rounded-none">
            <img src="/images/extra3.jpg" alt="Fresh People" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      <section className="py-24 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {services.map((s, i) => (
             <div key={i} className={`rounded-none overflow-hidden p-8 md:p-12 flex flex-col justify-between border border-gray-100 bg-white group hover:border-primary transition-all duration-500 shadow-sm ${i === 0 ? 'lg:col-span-12' : 'lg:col-span-6'}`}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
                   <div className="space-y-6 md:space-y-8 flex-grow">
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 text-primary rounded-none flex items-center justify-center">
                           {s.icon}
                        </div>
                        <span className="text-xs font-bold text-[#9a9a9a] uppercase tracking-widest">{s.id}</span>
                      </div>
                      
                      <div className="space-y-3 md:space-y-4">
                        <h3 className={`font-display font-bold text-secondary tracking-tight ${i === 0 ? 'text-3xl md:text-4xl lg:text-6xl' : 'text-2xl md:text-3xl lg:text-5xl'}`}>{s.title}</h3>
                        <p className="text-on-surface-variant text-base md:text-lg font-normal max-w-xl">{s.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-6 md:pt-8">
                         {s.features.map((f, j) => (
                           <div key={j} className="flex items-center gap-2 md:gap-3 text-secondary font-medium text-sm md:text-base">
                              <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/20 rounded-none flex items-center justify-center text-primary shrink-0">
                                 <Check size={10} md:size={14} strokeWidth={3} />
                              </div>
                              <span>{f}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   {i === 0 && (
                     <div className="w-full md:w-[300px] aspect-square bg-secondary-container rounded-none md:rounded-none flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
                        <Coffee size={80} className="text-primary" strokeWidth={1} />
                     </div>
                   )}
                </div>
                
                <div className="pt-6 md:pt-8 flex justify-end">
                   <Link 
                     to="/contact" 
                     className="btn-m3-tonal text-sm md:text-base focus-visible:ring-4 focus-visible:ring-primary/20"
                     aria-label={`Inquire about ${s.title} services`}
                   >
                      Inquire About {s.title} <ChevronRight size={16} md:size={18} aria-hidden="true" />
                   </Link>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Why Choose Us Section - Replaces Client Section */}
      <section className="py-24 md:py-40 bg-secondary text-white rounded-none md:rounded-none mx-4 sm:mx-6 md:mx-12 mb-12">
        <div className="section-container">
          <div className="mb-12 md:mb-20 space-y-4 md:space-y-6">
             <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-[#cccccc]">Why Fresh People?</h2>
             <p className="text-[#999999] text-lg md:text-xl font-light">The standard for premium event staffing and management in South Africa.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             {[
               { title: 'Vetted Professionals', desc: 'Every team member undergoes rigorous screening and training.' },
               { title: 'End-to-End Service', desc: 'From equipment to staff, we handle every detail.' },
               { title: 'Proven Track Record', desc: '10+ years of excellence in the industry.' },
               { title: 'Rapid Deployment', desc: 'Quick turnaround for urgent events and activations.' },
               { title: 'Custom Solutions', desc: 'Tailored staffing plans for your unique requirements.' },
               { title: '24/7 Support', desc: 'Round-the-clock coordination and emergency support.' }
             ].map((item, i) => (
               <div key={i} className="bg-white/5 border border-white/5 rounded-none md:rounded-none p-6 md:p-10 space-y-4 md:space-y-6 hover:bg-primary hover:text-secondary transition-all duration-500 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-none flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-primary">
                     <Check size={20} md:size={24} />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                     <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-secondary transition-colors">{item.title}</h3>
                     <p className="text-[#999999] group-hover:text-secondary/70 text-sm md:text-base leading-relaxed transition-colors">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 md:py-60 section-container text-center">
         <h2 className="text-4xl md:text-6xl lg:text-[8vw] font-display font-bold tracking-tighter text-secondary leading-none mb-8 md:mb-12">
           Ready to <span className="text-primary">Elevate?</span>
         </h2>
         <Link to="/contact" className="btn-m3-filled !px-12 md:!px-20 !py-5 md:!py-6 text-base md:text-xl focus-visible:ring-4 focus-visible:ring-primary/20">
            Start Your Event
         </Link>
      </section>
    </div>
  );
}
