import { motion } from 'motion/react';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function PageHero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-brand-green/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-dark/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-black text-brand-dark mb-6 leading-[1.1]">
            {title}
          </h1>
          <p className="text-xl text-brand-dark/60 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
