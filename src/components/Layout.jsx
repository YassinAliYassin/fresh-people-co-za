import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow pt-20" tabIndex={-1}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      {/* Keep the sticky mobile CTA from covering the footer's last row. */}
      <div className="h-[72px] md:hidden" aria-hidden="true" />
      <StickyCTA />
    </div>
  );
}
