import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import StatsCounter from '../components/StatsCounter';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const talentCategories = [
    { name: 'Brand Ambassadors', icon: 'fas fa-crown', desc: 'Expert talent for luxury activations, product launches, and VIP events. Charismatic representation that elevates your brand.' },
    { name: 'Models & Hosts', icon: 'fas fa-user-tie', desc: 'Professional models and VIP hosts for front-of-house presence at corporate galas, weddings, and high-profile events.' },
    { name: 'Hospitality Staff', icon: 'fas fa-cocktail', desc: 'RSA-certified bartenders, waiters, baristas, and marshals. Full back-of-house support for every event.' },
    { name: 'Event Logistics', icon: 'fas fa-truck', desc: 'Equipment rental, bar stock, glassware, table settings, and end-to-end event coordination.' },
  ];

  const whyChoose = [
    { title: 'Premium Vetted Talent', desc: 'Every team member screened, trained, and experienced in luxury events' },
    { title: 'Rapid Deployment', desc: 'Quick turnaround for urgent events across Johannesburg' },
    { title: '10+ Years Excellence', desc: 'Proven track record with 200+ event planners in Gauteng' },
    { title: 'End-to-End Service', desc: 'From talent to equipment, every detail handled professionally' }
  ];

  const howItWorks = [
    { step: 1, title: 'Request Quote', desc: 'Tell us your event details, talent needs, and dates via our quick form' },
    { step: 2, title: 'Get Matched', desc: 'We select the perfect vetted talent from our premium pool' },
    { step: 3, title: 'Event Ready', desc: 'Your team arrives on time, fully prepped and ready to deliver excellence' }
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section - Talent First */}
      <section className="relative hero-padding px-4 sm:px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-none bg-primary-container text-on-primary-container text-xs font-semibold uppercase tracking-wider">
               Premier Talent Agency
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tighter leading-[1.05] text-secondary italic">
              Elevate Your Brand With <br /> 
              <span className="text-primary not-italic">South Africa's Premier Talent.</span>
            </h1>
            <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              From luxury activations in Sandton to weddings in Randburg, festivals in Fourways to launches in Rosebank — we provide charismatic talent for every major event in Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/contact" className="btn-m3-filled text-center justify-center text-base">
                Book Talent <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link to="/services" className="btn-m3-tonal text-center justify-center text-base">
                Our Talent <i className="fas fa-chevron-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Talent First */}
      <section className="section-padding section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-white rounded-none p-8 md:p-12 border border-gray-100 flex flex-col justify-between group overflow-hidden shadow-sm">
            <div className="space-y-6 relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary">Premium <br /> <span className="text-primary">Talent.</span></h2>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">The heartbeat of Johannesburg's events industry. Leading with front-of-house talent, backed by full-service hospitality support.</p>
            </div>
            <div className="flex flex-wrap gap-8 pt-20 grayscale opacity-30">
               {['Trusted Across Gauteng', 'Premier Talent', 'Excellence Since 2014', '200+ Clients'].map(b => (
                 <span key={b} className="text-2xl font-bold tracking-tighter">{b}</span>
               ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-secondary text-white rounded-none p-8 md:p-12 flex flex-col justify-between items-start">
             <div className="p-4 bg-primary rounded-none text-on-primary shadow-lg shadow-primary/20">
                <i className="fas fa-star text-2xl"></i>
             </div>
             <div className="space-y-2">
                <div className="text-7xl font-display font-bold">10+</div>
                <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Years of excellence</p>
             </div>
          </div>

          {talentCategories.map((cat, i) => (
            <div key={i} className="md:col-span-3 bg-white p-8 rounded-none border border-gray-100 hover:bg-primary-container/20 transition-all duration-600 group">
              <div className="w-14 h-14 bg-secondary-container rounded-none flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <i className={`${cat.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-2">{cat.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold italic">How It Works</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">Get premium talent for your event in 3 simple steps</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-none border border-white/10 text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-none flex items-center justify-center text-on-primary text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <section className="section-padding section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold italic">Why Choose Fresh People</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">Trusted by South Africa's top event planners for over a decade</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <div key={i} className="card-m3-elevated text-center">
              <div className="w-12 h-12 bg-primary-container rounded-none flex items-center justify-center text-primary mx-auto mb-6">
                <i className="fas fa-check text-xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold italic text-secondary">Ready to Elevate Your Event?</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">Get in touch today for a custom quote tailored to your event needs</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-m3-filled text-lg px-10 py-5">
              Book Talent Now <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <a href="tel:+27672961272" className="btn-m3-outlined text-lg px-10 py-5">
              <i className="fas fa-phone mr-2"></i> +27 67 296 1272
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
