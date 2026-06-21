import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="bg-surface min-h-screen flex items-center justify-center px-6">
      <SEO title="Page Not Found | Fresh People" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg space-y-8"
      >
        <div className="space-y-2">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Error 404</p>
          <h1 className="text-7xl md:text-9xl font-display font-bold text-secondary">404</h1>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">Page Not Found</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link to="/" className="btn-m3-filled text-base justify-center">
            <Home size={18} className="mr-2" aria-hidden="true" /> Back to Home
          </Link>
          <Link to="/contact" className="btn-m3-tonal text-base justify-center">
            Contact Us <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
