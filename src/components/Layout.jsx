import { Outlet, Link, useLocation } from 'react-router-dom';
import { LucideHome, LucideInfo, LucideBriefcase, LucideMail, LucidePhone } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-surface-variant">
        <div className="section-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/fresh-people-logo-vector-01.webp" alt="Fresh People" className="h-10 w-auto" />
            <span className="font-display font-bold text-xl text-primary">Fresh People</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" current={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/about" current={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/services" current={location.pathname === '/services'}>Services</NavLink>
            <NavLink to="/contact" current={location.pathname === '/contact'}>Contact</NavLink>
          </nav>
          
          <a href="tel:+27672961272" className="btn-m3-filled">
            <LucidePhone size={16} />
            <span className="hidden sm:inline">+27 672 961 272</span>
          </a>
        </div>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-on-secondary py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fresh People</h3>
              <p className="text-on-secondary/80">Johannesburg's most reliable event staffing agency.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-on-secondary/80">Phone: +27 672 961 272</p>
              <p className="text-on-secondary/80">Email: [email protected]</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <a href="https://wa.me/27672961272" className="text-on-secondary/80 hover:text-primary transition-colors">WhatsApp</a>
            </div>
          </div>
          <div className="border-t border-on-secondary/20 mt-8 pt-8 text-center text-sm text-on-secondary/60">
            © {new Date().getFullYear()} Fresh People. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, current, children }) {
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors ${current ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
    >
      {children}
    </Link>
  );
}
