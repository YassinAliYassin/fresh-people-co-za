import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

export default function Home() {
  const talentCategories = [
    { name: 'Brand Ambassadors', slug: 'brand-ambassadors', icon: 'fas fa-crown', desc: 'Expert talent for luxury activations, product launches, and VIP events. Charismatic representation that elevates your brand.' },
    { name: 'Coffee Baristas', slug: 'coffee-baristas', icon: 'fas fa-coffee', desc: 'Specialty coffee service with skilled baristas for corporate events, weddings, and activations.' },
    { name: 'Cocktail Bartenders', slug: 'cocktail-bartenders', icon: 'fas fa-glass-martini-alt', desc: 'RSA-certified bartenders crafting premium cocktails and beverage service for all events.' },
    { name: 'Hospitality Staff', slug: 'hospitality-staff', icon: 'fas fa-utensils', desc: 'Professional waitstaff, butlers, and commis chefs for seamless food service at events.' },
    { name: 'Event Logistics', slug: 'event-logistics', icon: 'fas fa-truck', desc: 'Equipment rental, bar stock, glassware, table settings, and end-to-end event coordination.' },
    { name: 'Event Coordinators', slug: 'event-coordinators', icon: 'fas fa-clipboard-check', desc: 'On-site coordinators to manage timelines, vendors, and ensure flawless execution of your event vision.' },
  ];

  const whyChoose = [
    { title: 'Vetted People', desc: 'Staff selected for presentation, communication, reliability, and event experience' },
    { title: 'Gauteng Coverage', desc: 'Coverage across Randburg, Sandton, Rosebank, Fourways, Midrand, Pretoria, and Johannesburg' },
    { title: 'Built For Events', desc: 'Support for activations, weddings, launches, conferences, festivals, and private functions' },
    { title: 'One Booking', desc: 'Staffing, supplies, setup, confirmations, and on-site coordination handled together' }
  ];

  const howItWorks = [
    { step: 1, title: 'Send Event Details', desc: 'Share the date, venue, staff count, service type, and any equipment needs.' },
    { step: 2, title: 'Receive a Plan', desc: 'We confirm the right team mix, availability, and pricing for your brief.' },
    { step: 3, title: 'Run the Event', desc: 'Fresh People handles arrival, briefing, service delivery, and close-out.' }
  ];

  const testimonials = [
    {
      quote: 'Fresh People delivered a polished team for our product launch. Guests noticed the service — we noticed the reliability.',
      name: 'Event Director',
      company: 'Johannesburg Brand Activation',
    },
    {
      quote: 'From quote to close-out, communication was clear and the staff arrived briefed and uniform-ready. We book them again for every major function.',
      name: 'Venue Manager',
      company: 'Sandton Corporate Venue',
    },
    {
      quote: 'Our wedding service ran seamlessly. Waitstaff and bartenders were professional, warm, and on top of every guest request.',
      name: 'Couple',
      company: 'Private Wedding, Fourways',
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      <SEO title="Fresh People | Premier Talent & Events Staffing Johannesburg" description="Elevate your brand with South Africa's premier talent agency. Brand ambassadors, bartenders, hospitality staff, event logistics. Based in Randburg, serving all Johannesburg events." />
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
               Johannesburg Event Staffing
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tighter leading-[1.05] text-secondary italic">
              Staff Your Event With <br /> 
              <span className="text-primary not-italic">Fresh, Reliable People.</span>
            </h1>
            <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Fresh People supplies brand ambassadors, hosts, models, bartenders, waiters, baristas, marshals, event crews, and equipment support across Johannesburg and Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/contact" className="btn-m3-filled text-center justify-center text-base">
                Get a Quote <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link to="/services" className="btn-m3-tonal text-center justify-center text-base">
                View Services <i className="fas fa-chevron-right ml-2"></i>
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
              <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary">Staffing, <br /> <span className="text-primary">Hospitality & Events.</span></h2>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">A practical partner for activations, weddings, corporate events, launches, conferences, exhibitions, festivals, and private functions.</p>
            </div>
<div className="flex flex-wrap gap-8 pt-20 grayscale opacity-30">
   {['Brand Ambassadors', 'Hospitality Staff', 'Event Logistics', 'Gauteng Coverage'].map(b => (
     <span key={b} className="text-2xl font-bold tracking-tighter">{b}</span>
   ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-secondary text-white rounded-none p-8 md:p-12 flex flex-col justify-between items-start">
             <div className="p-4 bg-primary rounded-none text-on-primary shadow-lg shadow-primary/20">
                <i className="fas fa-star text-2xl"></i>
             </div>
             <div className="space-y-2">
                <div className="text-7xl font-display font-bold">12+</div>
                <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Years of excellence</p>
             </div>
          </div>

          {talentCategories.map((cat, i) => (
            <Link key={i} to={`/services/${cat.slug}`} className="md:col-span-3 bg-white p-8 rounded-none border border-gray-100 hover:bg-primary-container/20 transition-all duration-600 group block">
              <div className="w-14 h-14 bg-secondary-container rounded-none flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <i className={`${cat.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-2">{cat.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{cat.desc}</p>
              <div className="mt-4 text-primary font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <i className="fas fa-arrow-right text-xs"></i>
              </div>
            </Link>
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
            <h2 className="text-4xl md:text-6xl font-display font-bold italic text-white">How It Works</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">A simple booking flow for event planners, agencies, venues, couples, and corporate teams.</p>
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
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold italic">What Clients Say</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            Trusted by planners, venues, brands, and couples across Gauteng.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 p-8 md:p-10 rounded-none shadow-sm flex flex-col justify-between"
            >
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">“{t.quote}”</p>
              <footer>
                <cite className="not-italic font-display font-bold text-secondary block">{t.name}</cite>
                <span className="text-sm text-on-surface-variant/70">{t.company}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding section-container bg-white">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold italic">Why Choose Fresh People</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">A dependable partner when presentation, timing, guest experience, and service standards matter.</p>
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

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold italic text-secondary">Ready to Elevate Your Event?</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">Send the event details and we will come back with a tailored staffing and support quote.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-m3-filled text-lg px-10 py-5">
              Request a Quote <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <a href="mailto:info@fresh-people.co.za" className="btn-m3-outlined text-lg px-10 py-5">
              <i className="fas fa-envelope mr-2" aria-hidden="true"></i> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
