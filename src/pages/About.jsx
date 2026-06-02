import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { label: 'Established', value: '2014' },
    { label: 'Events Hosted', value: '1.5k+' },
    { label: 'Vetted Talent', value: '500+' },
    { label: 'Satisfaction', value: '99%' },
  ];

  return (
    <div className="bg-surface min-h-screen">
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



      <section className="py-24 section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {stats.map((s, i) => (
             <div key={i} className="bg-white border border-gray-100 p-10 rounded-none group hover:bg-primary hover:text-on-primary transition-all duration-500 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9a9a9a] group-hover:text-white/60 mb-2">{s.label}</p>
                <div className="text-5xl font-display font-bold">{s.value}</div>
             </div>
           ))}

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
                 </div>
              </div>
              <div className="lg:col-span-5 flex justify-center relative">
                 <Star className="text-primary/10 absolute -top-20 -right-20" size={300} strokeWidth={1} />
                 <Award className="text-primary" size={160} strokeWidth={1} />
              </div>
           </div>
        </div>
      </section>

      <section className="py-60 section-container text-center space-y-16">
         <h2 className="text-6xl md:text-[8vw] font-display font-bold tracking-tighter text-secondary">Let Us <span className="text-primary">Staff</span> It.</h2>
         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="btn-m3-filled !px-16 !py-6">
              Partner With Us
            </Link>
         </div>
      </section>
    </div>
  );
}
