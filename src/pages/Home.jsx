import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Crown, Coffee, Martini, Utensils, Truck, ClipboardCheck, ArrowRight, Check, Mail, ShieldCheck, UserCheck, BadgeCheck } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import Logo from '../components/Logo';
import { assetUrl } from '../lib/utils';

export default function Home() {
  const talentCategories = [
    { name: 'Brand Ambassadors', slug: 'brand-ambassadors', icon: Crown, desc: 'Expert talent for luxury activations, product launches, and VIP events. Charismatic representation that elevates your brand.' },
    { name: 'Coffee Baristas', slug: 'coffee-baristas', icon: Coffee, desc: 'Specialty coffee service with skilled baristas for corporate events, weddings, and activations.' },
    { name: 'Cocktail Bartenders', slug: 'cocktail-bartenders', icon: Martini, desc: 'RSA-certified bartenders crafting premium cocktails and beverage service for all events.' },
    { name: 'Hospitality Staff', slug: 'hospitality-staff', icon: Utensils, desc: 'Professional waitstaff, butlers, and commis chefs for seamless food service at events.' },
    { name: 'Event Logistics', slug: 'event-logistics', icon: Truck, desc: 'Equipment rental, bar stock, glassware, table settings, and end-to-end event coordination.' },
    { name: 'Event Coordinators', slug: 'event-coordinators', icon: ClipboardCheck, desc: 'On-site coordinators to manage timelines, vendors, and ensure flawless execution of your event vision.' },
  ];

  const stats = [
    { value: '12+', label: 'Years staffing Gauteng events' },
    { value: '6', label: 'Talent categories on call' },
    { value: '7', label: 'Gauteng regions covered' },
    { value: '1', label: 'Booking for staff, supplies & coordination' },
  ];

  const whyChoose = [
    { title: 'Vetted People', desc: 'Staff selected for presentation, communication, reliability, and event experience' },
    { title: 'Gauteng Coverage', desc: 'Coverage across Randburg, Sandton, Rosebank, Fourways, Midrand, Pretoria, and Johannesburg' },
    { title: 'Built For Events', desc: 'Support for activations, weddings, launches, conferences, festivals, and private functions' },
    { title: 'One Booking', desc: 'Staffing, supplies, setup, confirmations, and on-site coordination handled together' },
  ];

  const howItWorks = [
    { step: 1, title: 'Send Event Details', desc: 'Share the date, venue, staff count, service type, and any equipment needs.' },
    { step: 2, title: 'Receive a Plan', desc: 'We confirm the right team mix, availability, and pricing for your brief.' },
    { step: 3, title: 'Run the Event', desc: 'Fresh People handles arrival, briefing, service delivery, and close-out.' },
  ];

  const vetted = [
    { icon: ShieldCheck, label: 'Identity verified' },
    { icon: UserCheck, label: 'Behavioural checked' },
    { icon: BadgeCheck, label: 'RSA certified' },
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

      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-primary hidden sm:block z-20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 -bottom-40 h-[480px] w-[480px] rounded-full bg-white/[0.03] hidden lg:block"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-[1.1fr_1fr] items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="py-24 md:py-32 lg:py-36 space-y-7 lg:pr-10"
          >
            <Logo tone="light" size="md" withTagline />

            <div className="pt-4">
              <p className="eyebrow eyebrow--on-dark">Johannesburg Event Staffing</p>
            </div>

            <h1 className="text-white font-bold text-[2rem] sm:text-4xl lg:text-[3.4rem] leading-[1.06]">
              Staff Your Event With<br className="hidden sm:block" />{' '}
              <span className="accent">Fresh, Reliable People.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Fresh People supplies brand ambassadors, hosts, models, bartenders, waiters, baristas, marshals, event crews, and equipment support across Johannesburg and Gauteng.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link to="/contact" className="btn-m3-filled text-center justify-center">
                Get a Quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn-on-dark text-center justify-center">
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              <span>Randburg</span>
              <span className="text-primary">·</span>
              <span>Gauteng</span>
              <span className="text-primary">·</span>
              <span className="text-primary">fresh-people.co.za</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-0 lg:-mr-12"
          >
            <img
              src={assetUrl('images/page-image-new1.jpg')}
              alt="Fresh People waitstaff serving at a Johannesburg event"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 18%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30 lg:hidden" />
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-secondary via-secondary/25 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Stat bar */}
      <section className="bg-secondary text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="py-8 md:py-10 pr-4 pl-5 first:pl-0">
                <div className="text-3xl md:text-5xl font-display font-bold text-primary leading-none">{s.value}</div>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <section className="section-padding section-container">
        <div className="max-w-3xl space-y-5 mb-14">
          <p className="eyebrow">01 · What we do</p>
          <h2 className="font-bold text-on-surface">
            Staffing, Hospitality<br />
            <span className="accent">&amp; Events.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A practical partner for activations, weddings, corporate events, launches, conferences, exhibitions, festivals, and private functions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {talentCategories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/services/${cat.slug}`}
                className="card-line group flex h-full flex-col"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="flex h-12 w-12 items-center justify-center bg-tint text-primary">
                    <cat.icon size={22} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-on-surface/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">{cat.name}</h3>
                <p className="text-muted text-[15px] leading-relaxed flex-grow">{cat.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                  Learn more <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- Vetting */}
      <section className="px-6 pt-2 pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="panel-tint p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">How we select staff</h3>
            <p className="text-muted leading-relaxed">
              We match people to the event environment, guest profile, service standard and brand expectation. Teams are briefed on call time, uniform, role, guest interaction and on-site conduct before arrival.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {vetted.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <v.icon size={22} className="text-primary flex-none mt-0.5" aria-hidden="true" />
                  <span className="text-[15px] font-bold text-on-surface leading-snug">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <img
              src={assetUrl('images/beverage-bar-team.jpg')}
              alt="Fresh People bar and coffee staff at a brand activation"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Dark vetting */}
      <section className="panel-dark px-6 py-14 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[240px_1fr] gap-8 md:gap-14 items-start">
          <p className="eyebrow eyebrow--on-dark">Vetting standards</p>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-14">
            <div className="flex items-start gap-4">
              <ShieldCheck size={26} className="text-primary flex-none mt-1" aria-hidden="true" />
              <p className="text-white/70 leading-relaxed">
                Every team member undergoes thorough screening, background checks and professional training.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <UserCheck size={26} className="text-primary flex-none mt-1" aria-hidden="true" />
              <p className="text-white/70 leading-relaxed">
                Behavioural checks and etiquette evaluation are performed for every inquiry before talent allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- How it works */}
      <section className="section-padding section-container">
        <div className="max-w-3xl space-y-5 mb-14">
          <p className="eyebrow">02 · How it works</p>
          <h2 className="font-bold text-on-surface">
            A simple <span className="accent">booking flow.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Built for event planners, agencies, venues, couples, and corporate teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-line card-line--flat"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-primary text-on-primary text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-on-surface mt-6 mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- Testimonials */}
      <section className="section-padding bg-tint">
        <div className="section-container">
          <div className="max-w-3xl space-y-5 mb-14">
            <p className="eyebrow">03 · What clients say</p>
            <h2 className="font-bold text-on-surface">
              Trusted across <span className="accent">Gauteng.</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed">
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
                className="bg-white border border-line p-8 md:p-10 flex flex-col justify-between"
              >
                <span className="text-primary text-5xl font-display leading-none mb-4" aria-hidden="true">“</span>
                <p className="text-on-surface-variant leading-relaxed text-[17px] mb-8 flex-grow">{t.quote}</p>
                <footer className="border-t border-line pt-5">
                  <cite className="not-italic font-bold text-on-surface block">{t.name}</cite>
                  <span className="text-sm text-muted">{t.company}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Why choose */}
      <section className="section-padding section-container">
        <div className="max-w-3xl space-y-5 mb-14">
          <p className="eyebrow">04 · Why Fresh People</p>
          <h2 className="font-bold text-on-surface">
            Presentation, timing and <span className="accent">service standards.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A dependable partner when presentation, timing, guest experience, and service standards matter.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <div key={i} className="card-line card-line--flat">
              <span className="flex h-12 w-12 items-center justify-center bg-tint text-primary mb-6">
                <Check size={22} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-on-surface mb-3">{item.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------- FAQ */}
      <FAQ />

      {/* ----------------------------------------------------------------- CTA */}
      <section className="panel-dark px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="eyebrow eyebrow--on-dark justify-center">Ready when you are</p>
          <h2 className="font-bold text-white text-3xl md:text-5xl">
            Ready to Elevate <span className="accent">Your Event?</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Send the event details and we will come back with a tailored staffing and support quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-m3-filled text-center justify-center !px-10 !py-5 !text-[13px]">
              Request a Quote <ArrowRight size={18} className="ml-2" aria-hidden="true" />
            </Link>
            <a href="mailto:info@fresh-people.co.za" className="btn-on-dark text-center justify-center !px-10 !py-5 !text-[13px]">
              <Mail size={18} className="mr-2" aria-hidden="true" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
