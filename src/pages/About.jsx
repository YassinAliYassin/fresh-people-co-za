import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Star, Award, Users, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { label: 'Established', value: '2014' },
    { label: 'Events Hosted', value: '1.5k+' },
    { label: 'Vetted Talent', value: '500+' },
    { label: 'Satisfaction', value: '99%' }
  ];

  const values = [
    {
      title: 'Reliability',
      desc: 'We show up on time, briefed and ready. Every event, every time.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Professionalism',
      desc: 'From uniform standards to guest interactions, we maintain the highest service levels.',
      icon: <UserCheck size={24} />
    },
    {
      title: 'Excellence',
      desc: 'We don\'t just fill shifts — we elevate events with skilled, passionate people.',
      icon: <Star size={24} />
    },
    {
      title: 'Integrity',
      desc: 'Honest pricing, transparent communication, and ethical treatment of all staff.',
      icon: <Award size={24} />
    }
  ];

  const team = [
    {
      name: 'Yassin Al-Yassin',
      role: 'Founder & Lead Coordinator',
      desc: '10+ years in event management across Johannesburg. Founded Fresh People to bridge the gap between quality staffing and seamless event execution.'
    },
    {
      name: 'Operations Team',
      role: 'Staffing & Logistics',
      desc: 'Our operations team handles vetting, scheduling, transport coordination, and on-site support for every event.'
    },
    {
      name: '60+ Active Staff',
      role: 'Vetted Event Professionals',
      desc: 'Waiters, bartenders, baristas, hosts, marshals, and coordinators — all vetted, trained, and event-ready.'
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="pt-64 pb-24 section-container relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl space-y-12 relative z-10"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Heritage</span>
          <h1 className="text-[12vw] md:text-[8vw] font-display font-bold tracking-tighter text-secondary leading-[0.9]">
            People Behind <br /> <span className="text-primary italic font-medium">Better Events.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Fresh People is a Johannesburg-based event staffing and talent partner supplying reliable people for brand activations, hospitality, corporate functions, weddings, launches, festivals, and private events.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-24 section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {stats.map((s, i) => (
             <div key={i} className="bg-white border border-gray-100 p-10 rounded-none group hover:bg-primary hover:text-on-primary transition-all duration-500 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9a9a9a] group-hover:text-white/60 mb-2">{s.label}</p>
                <div className="text-5xl font-display font-bold">{s.value}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary">
              Built on Trust, <br /><span className="italic">Driven by Excellence</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                Fresh People was founded in 2014 with a simple mission: provide Johannesburg events with reliable, professional, and well-trained staffing solutions.
              </p>
              <p>
                What started as a small team of 10 hospitality professionals has grown into Gauteng's premier event staffing agency, with over 500 vetted staff members and 1,500+ successful events completed.
              </p>
              <p>
                We don't just fill shifts. We carefully match people to each event based on venue requirements, guest profiles, service standards, and brand expectations. Every team member is vetted, trained, and briefed before arrival.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-secondary-container rounded-none p-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Based in Randburg</h3>
                  <p className="text-on-surface-variant text-sm">Serving Johannesburg, Sandton, Fourways, Midrand, Pretoria, and surrounds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">+27 67 296 1272</h3>
                  <p className="text-on-surface-variant text-sm">WhatsApp & phone support available 7 days a week.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">info@fresh-people.co.za</h3>
                  <p className="text-on-surface-variant text-sm">Usually respond within 2 hours during business hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Select Staff */}
      <section className="py-24 section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           <div className="md:col-span-4 bg-secondary-container rounded-none p-12 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden relative">
            <div className="lg:col-span-7 space-y-8 relative z-10">
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary">How We Select Staff.</h2>
                 <p className="text-on-surface-variant text-lg font-normal leading-loose">
                    We do not just fill shifts. We match people to the event environment, guest profile, service standard, and brand expectation. Teams are briefed on call time, uniform, role, guest interaction, and on-site conduct before arrival.
                 </p>
                 <div className="flex flex-wrap gap-6 pt-6">
                    <div className="flex items-center gap-3 text-secondary font-bold">
                       <ShieldCheck className="text-primary" size={24} />
                       <span>Identity Verified</span>
                    </div>
                    <div className="flex items-center gap-3 text-secondary font-bold">
                       <UserCheck className="text-primary" size={24} />
                       <span>Behavioral Checked</span>
                    </div>
                    <div className="flex items-center gap-3 text-secondary font-bold">
                       <Award className="text-primary" size={24} />
                       <span>RSA Certified</span>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-5 flex justify-center relative">
                 <Star className="text-primary/10 absolute -top-20 -right-20" size={300} strokeWidth={1} />
                 <Users className="text-primary" size={160} strokeWidth={1} />
              </div>
           </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold italic">Our Values</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">The principles that guide every decision we make.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 p-8 rounded-none hover:border-primary transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-3">{value.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold italic">Our Team</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">Meet the people behind Fresh People.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 p-8 md:p-10 rounded-none shadow-sm"
            >
              <h3 className="text-2xl font-display font-bold text-secondary mb-2">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
              <p className="text-on-surface-variant leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-60 section-container text-center space-y-16">
        <h2 className="text-6xl md:text-[8vw] font-display font-bold tracking-tighter text-secondary leading-none mb-8 md:mb-12">
          Let Us <span className="text-primary">Staff</span> It.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="btn-m3-filled !px-16 !py-6">
              Partner With Us
            </Link>
            <Link to="/services" className="btn-m3-tonal !px-16 !py-6">
              View Services
            </Link>
         </div>
      </section>
    </div>
  );
}
