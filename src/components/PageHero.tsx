import { motion } from 'motion/react';

interface HeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
}

/**
 * Interior page header — mirrors the company profile's interior pages:
 * a label eyebrow, a large two-tone headline over a thin green rule.
 * A page can pass `title` with a trailing segment wrapped in <span className="accent">.
 */
export default function PageHero({ title, subtitle, eyebrow }: HeroProps) {
  return (
    <section className="bg-white border-b border-line">
      <div className="section-container pt-16 md:pt-24 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-6"
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="text-4xl md:text-6xl font-bold text-on-surface leading-[1.05]">{title}</h1>
          <div className="brand-rule w-20" aria-hidden="true" />
          <p className="text-lg md:text-xl text-muted leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
