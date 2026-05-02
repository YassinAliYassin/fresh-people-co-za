import { Instagram, Facebook, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/we_are_fresh_people?igsh=MWNkcmg4aXduNHNteQ%3D%3D&utm_source=qr" },
    { icon: Facebook, url: "Https://www.facebook.com/share/16a2HPGeW8/?mibextid=wwXIfr" },
  ];

  return (
    <footer className="bg-secondary border-t border-on-surface-variant/20 pt-32 pb-12 px-6 sm:px-12 rounded-t-[40px] mt-12 text-[#a1a1a1]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-10">
            <Link to="/" className="group inline-block">
              <span className="text-3xl font-display font-bold tracking-tighter text-[#a1a1a1]">
                Fresh<span className="text-primary">People</span>
              </span>
            </Link>
            <p className="text-[#999999] text-lg leading-relaxed max-w-xs font-light">
              South Africa's premier talent agency. We refine the human brand interaction for a luxury era.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#999999] hover:bg-primary hover:text-secondary transition-all duration-300"
                >
                  <social.icon size={20} strokeWidth={1} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-primary">Protocol</h4>
            <ul className="space-y-6 text-[#999999] font-medium text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Service Scope</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Inquiry</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-primary">Regional Coordinates</h4>
            <ul className="space-y-8 text-[#999999] font-medium text-sm">
              <li className="flex flex-col gap-2">
                 <span className="text-[9px] uppercase font-bold text-[#666666] tracking-widest">Office Hub</span>
                 <p className="text-lg font-display font-medium text-[#cccccc]">Johannesburg / Cape Town</p>
              </li>
              <li className="flex flex-col gap-2">
                 <span className="text-[9px] uppercase font-bold text-[#666666] tracking-widest">Inquiries</span>
                 <a href="mailto:hello@freshpeople.agency" className="text-lg font-display font-medium text-[#cccccc] hover:text-primary transition-colors">hello@freshpeople.agency</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-10 text-center md:text-left">
             <div className="p-8 border border-on-surface-variant/10 rounded-[32px] space-y-6 bg-[#121212]">
                <Star className="text-primary mx-auto md:mx-0" size={32} />
                <h4 className="text-xl font-display font-medium text-[#a1a1a1]">Join the Sequence</h4>
                <div className="flex gap-2">
                   <input 
                     type="email" 
                     placeholder="Digital Mail" 
                     className="bg-[#1a1a1a] border-none rounded-xl px-4 py-3 text-sm flex-grow focus:ring-1 focus:ring-primary outline-none text-[#cccccc] placeholder-[#666666]"
                   />
                   <button className="p-3 bg-primary text-secondary rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                      <ChevronRight size={20} />
                   </button>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-on-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-[#666666] uppercase tracking-[0.3em]">
          <p className="whitespace-nowrap">&copy; {currentYear} FRESH PEOPLE STAFFING SOLUTIONS</p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
             <span className="text-[#666666]">Brand Standard Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
