import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

/**
 * Sticky contact / quote call-to-action.
 *
 * Mobile: a full-width bar pinned to the bottom of the viewport once the user
 * scrolls past the hero — the primary conversion path on phones.
 * Desktop: a compact floating button bottom-right.
 *
 * Hidden on the contact page itself (already the destination) and until the
 * hero has been scrolled past, so it never fights the hero CTA.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 md:inset-x-auto md:right-6 md:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-stretch gap-2 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href="mailto:info@fresh-people.co.za"
          className="btn-m3-outlined flex-1 !py-3.5 !px-4"
          aria-label="Email Fresh People"
        >
          <Mail size={16} aria-hidden="true" />
          Email
        </a>
        <Link to="/contact" className="btn-m3-filled flex-[1.6] !py-3.5 !px-4">
          Get a Quote
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <Link
        to="/contact"
        className="btn-m3-filled hidden md:inline-flex !py-4 !px-6 shadow-m3-2"
      >
        Get a Quote
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
