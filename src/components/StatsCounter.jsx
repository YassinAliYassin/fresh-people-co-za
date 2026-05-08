import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Users, Calendar, Star, TrendingUp } from 'lucide-react';

function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setCount(Math.floor(eased * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { icon: Users, label: 'Happy Clients', value: 500, suffix: '+', prefix: '' },
  { icon: Calendar, label: 'Events Staffed', value: 1200, suffix: '+', prefix: '' },
  { icon: Star, label: '5-Star Reviews', value: 98, suffix: '%', prefix: '' },
  { icon: TrendingUp, label: 'Success Rate', value: 99, suffix: '%', prefix: '' }
];

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-24 bg-[#a4c71d] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-white/20 rounded-none flex items-center justify-center">
                <stat.icon size={24} className="md:w-8 md:h-8" />
              </div>
              <div className="text-3xl md:text-5xl font-bold mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix} 
                />
              </div>
              <p className="text-sm md:text-base text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
