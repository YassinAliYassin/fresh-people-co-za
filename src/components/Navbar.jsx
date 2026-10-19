import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

const MOBILE_ITEMS = [...NAV_ITEMS, { name: 'Contact', path: '/contact' }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300',
        scrolled ? 'shadow-[0_1px_0_0_#e4e4e4,0_8px_24px_-16px_rgba(0,0,0,0.25)]' : 'border-b border-line',
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Fresh People home">
          <Logo tone="dark" size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={cn(
                  'relative text-[13px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-primary',
                  location.pathname === item.path ? 'text-on-surface' : 'text-muted',
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary" />
                )}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn-m3-filled !py-3 !px-6 !text-[12px]">
            Get a Quote
          </Link>
        </div>

        <button
          className="md:hidden text-secondary p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 w-full h-[100dvh] bg-white z-40 md:hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="h-20 px-5 flex items-center justify-between border-b border-line flex-none">
            <Logo tone="dark" size="sm" />
            <button
              className="text-secondary p-2 -mr-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-10 flex flex-col justify-between gap-12">
            <div className="flex flex-col">
              {MOBILE_ITEMS.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between border-b border-line py-5 text-2xl font-display font-bold transition-colors',
                    location.pathname === item.path ? 'text-primary' : 'text-secondary',
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-muted">
                      0{i + 1}
                    </span>
                    {item.name}
                  </span>
                  <ChevronRight size={20} aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <Link to="/contact" className="btn-m3-filled w-full" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote <ChevronRight size={18} aria-hidden="true" />
              </Link>
              <a href="mailto:info@fresh-people.co.za" className="btn-m3-outlined w-full">
                info@fresh-people.co.za
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
