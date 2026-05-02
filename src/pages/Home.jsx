import { motion } from 'motion/react';
import { ArrowRight, Star, Coffee, Wine, Settings, ClipboardList, ChevronRight, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import StatsCounter from '../components/StatsCounter';

export default function Home() {
  const categories = [
    { name: 'Staffing', icon: <Coffee size={24} />, desc: 'Waiters, Bartenders, Baristas, Marshals, and Commis Chefs.' },
    { name: 'Equipment & Supply', icon: <Wine size={24} />, desc: 'Bar stock, Glassware, Bar tools, and Coffee station supplies.' },
    { name: 'Logistics & Setup', icon: <Settings size={24} />, desc: 'Table settings and décor support.' },
    { name: 'Management', icon: <ClipboardList size={24} />, desc: 'Full event planning and end-to-end coordination.' },
  ];

  const whyChoose = [
    { title: 'Vetted Professionals', desc: 'Every team member screened & trained' },
    { title: 'Rapid Deployment', desc: 'Quick turnaround for urgent events' },
    { title: '10+ Years Excellence', desc: 'Proven track record in South Africa' },
    { title: 'End-to-End Service', desc: 'From equipment to staff, every detail' }
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-64 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden bg-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-primary-container text-on-primary-container text-[10px] md:text-xs font-semibold uppercase tracking-wider">
               State of The Presence
            </div>
            <h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw] font-display font-bold tracking-tighter leading-[1.1] text-secondary">
              Professional <br /> 
              <span className="text-primary italic font-medium">Hospitality.</span>
            </h1>
            <p className="text-base md:text-xl md:text-2xl text-on-surface-variant max-w-2xl font-normal leading-relaxed">
              Architectural staffing for brands that define the age. Fresh People provides the human interface for high-stakes excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
              <Link to="/contact" className="btn-m3-filled text-center justify-center sm:justify-start text-sm md:text-base">
                Secure Talent <ArrowRight size={16} md:size={20} />
              </Link>
              <Link to="/services" className="btn-m3-tonal text-center justify-center sm:justify-start text-sm md:text-base">
                Our Services <ChevronRight size={16} md:size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-32 section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4">
          <div className="md:col-span-8 bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border border-gray-100 flex flex-col justify-between group overflow-hidden shadow-sm">
            <div className="space-y-4 md:space-y-6 relative z-10">
              <h2 className="text-2xl md:text-4xl md:text-6xl font-display font-bold text-secondary">Premium <br /> <span className="text-primary">Services.</span></h2>
              <p className="text-on-surface-variant text-sm md:text-lg max-w-md">The heartbeat of Johannesburg and Cape Town's most prestigious corporate and luxury events.</p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-12 pt-8 md:pt-20 grayscale opacity-30">
               {['MYS Agency', 'Fresh Yumm', 'ETV', 'Green Dot'].map(b => (
                 <span key={b} className="text-lg md:text-2xl font-bold tracking-tighter">{b}</span>
               ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-secondary text-white rounded-2xl md:rounded-3xl p-6 md:p-12 flex flex-col justify-between items-start">
             <div className="p-3 md:p-4 bg-primary rounded-xl md:rounded-2xl text-on-primary shadow-lg shadow-primary/20">
                <Star fill="currentColor" size={24} md:size={32} />
             </div>
             <div className="space-y-1 md:space-y-2">
                <div className="text-5xl md:text-7xl font-display font-bold">10+</div>
                <p className="text-white/40 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">Years of excellence</p>
             </div>
          </div>

          {categories.map((cat, i) => (
            <div key={i} className="md:col-span-3 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 hover:bg-primary-container/20 transition-all duration-500 group">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-secondary-container rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-8 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-secondary mb-1 md:mb-2">{cat.name}</h3>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-40 bg-secondary text-white rounded-[32px] md:rounded-[40px] mx-4 sm:mx-6 md:mx-12 mb-8 md:mb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 md:space-y-12">
           <div className="w-12 h-12 md:w-16 md:h-16 border border-primary/30 rounded-full mx-auto flex items-center justify-center text-primary">
              <Zap size={20} md:size={24} />
           </div>
           <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-[#cccccc]">"Where every placement is a performance in professionalism."</h2>
           <div className="space-y-3 md:space-y-4">
              <p className="text-primary font-display font-bold uppercase tracking-widest text-[10px] md:text-xs">The African Standard</p>
              <p className="text-[#999999] text-sm md:text-base max-w-2xl mx-auto">From the boardroom to the ballroom, we ensure your brand message is delivered with precision and grace.</p>
           </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-32 section-container">
        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-secondary">Why Choose <span className="text-primary">Fresh People?</span></h2>
          <p className="text-on-surface-variant text-base md:text-xl max-w-2xl mx-auto">The standard for premium event staffing in South Africa.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {whyChoose.map((item, i) => (
            <div key={i} className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-primary hover:shadow-m3-1 transition-all duration-300">
              <CheckCircle2 className="text-primary mb-3 md:mb-4" size={24} md:size={32} />
              <h3 className="text-lg md:text-xl font-display font-bold text-secondary mb-1 md:mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <StatsCounter />

      <Testimonials />

      {/* Final CTA */}
      <section className="py-32 md:py-60 section-container text-center space-y-8 md:space-y-16">
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="space-y-6 md:space-y-8"
         >
           <h2 className="text-4xl md:text-6xl lg:text-[8vw] font-display font-bold tracking-tighter text-secondary">Ready to <span className="text-primary">Integrate?</span></h2>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link to="/contact" className="btn-m3-filled !px-8 md:!px-12 !py-4 md:!py-5 text-sm md:text-base">
                 Start Protocol <ArrowRight size={16} md:size={20} />
              </Link>
           </div>
         </motion.div>
      </section>
    </div>
  );
}
