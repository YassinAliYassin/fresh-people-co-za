import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-6',
        scrolled ? 'py-4' : 'bg-transparent'
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-none",
        scrolled ? "bg-white/90 backdrop-blur-xl border border-gray-100 px-8 py-3 shadow-md translate-y-2" : "px-4"
      )}>
        <Link to="/" className="group flex items-center gap-3">
          <span className="text-xl font-medium tracking-[0.08em] text-gray-600" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Fresh<span className="text-primary">People</span>
          </span>
          <div className="w-1.5 h-1.5 bg-primary rounded-none opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_rgba(164,199,29,0.5)]" />
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Talent Scope', path: '/services' },
              { name: 'The Legacy', path: '/about' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-none',
                  location.pathname === item.path ? 'text-primary' : 'text-on-surface/60'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn-m3-filled !py-2.5 !px-6 text-xs focus-visible:ring-4 focus-visible:ring-primary/20">
            Inquiry Protocol
          </Link>
        </div>

        <button
          className="md:hidden text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 top-0 left-0 w-full h-screen bg-surface z-40 md:hidden p-8 flex flex-col justify-center gap-12"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="space-y-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className="block text-5xl font-display font-bold text-secondary hover:text-primary transition-colors focus-visible:text-primary outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-12 border-t border-gray-100">
             <Link to="/contact" className="btn-m3-filled w-full">
               Request Protocol <ChevronRight size={20} />
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
