import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// lucide-react dropped brand/logo marks (trademark reasons), so these two
// social glyphs are small local SVGs rather than pulling in a second icon
// library for two icons.
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.5.5.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1 0-2.34 1.17 1.17 0 0 1 0 2.34Z" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 13.5h2.5l1-4H14V7.5c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.95 2 14.66 2 11.98 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: InstagramIcon, label: 'Instagram', url: "https://www.instagram.com/we_are_fresh_people?igsh=MWNkcmg4aXduNHNteQ%3D%3D&utm_source=qr" },
    { icon: FacebookIcon, label: 'Facebook', url: "https://www.facebook.com/share/16a2HPGeW8/?mibextid=wwXIfr" },
  ];

  return (
    <footer className="bg-secondary border-t border-on-surface-variant/20 pt-32 pb-12 px-6 sm:px-12 rounded-none mt-12 text-[#a1a1a1]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-10">
            <Link to="/" className="group inline-block" aria-label="Fresh People home">
              <span className="logo-wordmark text-xl text-gray-400">
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
                  aria-label={`Follow Fresh People on ${social.label}`}
                  className="w-12 h-12 bg-[#1a1a1a] rounded-none flex items-center justify-center text-[#999999] hover:bg-primary hover:text-secondary transition-all duration-300"
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-primary">Explore</h4>
            <ul className="space-y-6 text-[#999999] font-medium text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-primary">Regional Coordinates</h4>
            <ul className="space-y-8 text-[#999999] font-medium text-sm">
              <li className="flex flex-col gap-2">
                 <span className="text-[9px] uppercase font-bold text-[#666666] tracking-widest">Office Hub</span>
                 <p className="text-lg font-display font-medium text-[#cccccc]">Randburg</p>
              </li>
              <li className="flex flex-col gap-2">
                 <span className="text-[9px] uppercase font-bold text-[#666666] tracking-widest">Inquiries</span>
                 <a href="mailto:info@fresh-people.co.za" className="text-lg font-display font-medium text-[#cccccc] hover:text-primary transition-colors">info@fresh-people.co.za</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-10 text-center md:text-left">
             <div className="p-8 border border-on-surface-variant/10 rounded-none space-y-6 bg-[#121212]">
                <Star className="text-primary mx-auto md:mx-0" size={32} />
                <h4 className="text-xl font-display font-medium text-[#a1a1a1]">Join the Sequence</h4>
                <form action="https://formspree.io/f/mojrqwzd" method="POST" className="flex gap-2">
                   <input 
                     type="email" 
                     name="email"
                     placeholder="Digital Mail" 
                     required
                     className="bg-[#1a1a1a] border-none rounded-none px-4 py-3 text-sm flex-grow focus:ring-1 focus:ring-primary outline-none text-[#cccccc] placeholder-[#666666]"
                   />
                   <input type="hidden" name="_subject" value="Newsletter Signup" />
                   <button type="submit" className="p-3 bg-primary text-secondary rounded-none hover:shadow-lg hover:shadow-primary/20 transition-all">
                      <ChevronRight size={20} />
                   </button>
                </form>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-on-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-[#666666] uppercase tracking-[0.3em]">
          <p className="whitespace-nowrap">&copy; {currentYear} FRESH PEOPLE STAFFING SOLUTIONS</p>
          <div className="flex items-center gap-2">
             <span className="text-[#666666] font-display font-bold">We Love What We Do <span className="animate-pulse inline-block">✊🏾</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
