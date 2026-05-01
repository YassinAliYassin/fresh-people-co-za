import { motion } from 'motion/react';
import { ArrowRight, Star, Globe, Zap, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    { name: 'Brand Ambassadors', icon: <Sparkles size={24} />, desc: 'Elite representation for prestige launches.' },
    { name: 'VIP Hosting', icon: <Star size={24} />, desc: 'Poise and etiquette for exclusive spaces.' },
    { name: 'Mixology', icon: <Zap size={24} />, desc: 'RSA-certified service at the highest level.' },
    { name: 'Global Talent', icon: <Globe size={24} />, desc: 'Bilingual models and diverse staffing.' },
  ];

  return (
    <div className="bg-surface min-h-screen">
      <section className="relative pt-64 pb-24 px-6 sm:px-12 overflow-hidden bg-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 xl:col-span-8 space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold uppercase tracking-wider">
               State of The Presence
            </div>
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-display font-bold tracking-tighter leading-[1] text-secondary">
              Professional <br /> 
              <span className="text-primary italic font-medium">Hospitality.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-normal leading-relaxed">
              Architectural staffing for brands that define the age. Fresh People provides the human interface for high-stakes excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact" className="btn-m3-filled">
                Secure Talent <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-m3-tonal">
                Our Services <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 bg-white rounded-3xl p-12 border border-gray-100 flex flex-col justify-between group overflow-hidden relative shadow-sm">
            <div className="space-y-6 relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary">Trusted by <br /> <span className="text-primary">Industry Giants.</span></h2>
              <p className="text-on-surface-variant text-lg max-w-md">The heartbeat of Johannesburg and Cape Town's most prestigious corporate and luxury events.</p>
            </div>
            <div className="flex flex-wrap gap-12 pt-20 grayscale opacity-30">
               {['MYS Agency', 'Fresh Yumm', 'Fhulufhelani', 'ETV', 'Green Dot Cafe', 'Stay by Inimitable'].map(b => (
                 <span key={b} className="text-2xl font-bold tracking-tighter">{b}</span>
               ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-secondary text-white rounded-3xl p-12 flex flex-col justify-between items-start">
             <div className="p-4 bg-primary rounded-2xl text-on-primary shadow-lg shadow-primary/20">
                <Star fill="currentColor" />
             </div>
             <div className="space-y-2">
                <div className="text-7xl font-display font-bold">10+</div>
                <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Years of excellence</p>
             </div>
          </div>

          {categories.map((cat, i) => (
            <div key={i} className="md:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 hover:bg-primary-container/20 transition-all duration-500 group">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-2">{cat.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 bg-secondary text-white rounded-[40px] mx-6 sm:mx-12 mb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
           <div className="w-16 h-1 w-16 border border-primary/30 rounded-full mx-auto flex items-center justify-center text-primary">
              <Zap size={24} />
           </div>
           <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-[#cccccc]">"Where every placement is a performance in professionalism."</h2>
           <div className="space-y-4">
              <p className="text-primary font-display font-bold uppercase tracking-widest text-xs">The African Standard</p>
              <p className="text-[#999999] max-w-2xl mx-auto">From the boardroom to the ballroom, we ensure your brand message is delivered with precision and grace.</p>
           </div>
        </div>
      </section>

      <section className="py-60 section-container text-center space-y-16">
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="space-y-8"
         >
           <h2 className="text-6xl md:text-[8vw] font-display font-bold tracking-tighter text-secondary">Ready to <span className="text-primary">Integrate?</span></h2>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="btn-m3-filled !px-12 !py-5 text-base">
                 Start Protocol <ArrowRight size={20} />
              </Link>
           </div>
         </motion.div>
      </section>
    </div>
  );
}
