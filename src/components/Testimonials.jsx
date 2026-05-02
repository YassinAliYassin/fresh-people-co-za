import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mthembu",
    role: "Event Manager",
    company: "Jozi Events",
    content: "Fresh People provided exceptional staff for our corporate event. Professional, punctual, and perfectly dressed. Will definitely use again!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    id: 2,
    name: "James van der Merwe",
    role: "Operations Director",
    company: "Cape Media Group",
    content: "We've been using Fresh People for all our equipment hire needs. Quality gear, competitive prices, and reliable delivery every time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  },
  {
    id: 3,
    name: "Thabo Molefe",
    role: "Wedding Planner",
    company: "Fairytale Weddings",
    content: "The team from Fresh People made our wedding setup seamless. From furniture to lighting, everything was perfect. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: 4,
    name: "Lisa Naidoo",
    role: "HR Manager",
    company: "TechSphere Ltd",
    content: "Fresh People's staffing solutions helped us scale during our busy season. Great talent, hassle-free management.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    id: 5,
    name: "Michael Botha",
    role: "Production Manager",
    company: "StageWorks",
    content: "Best logistics partner we've worked with. On-time delivery, professional setup, and great communication throughout.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading companies across South Africa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#a4c71d] hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#a4c71d] hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Testimonial Content */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src={current.image} 
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                "{current.content}"
              </blockquote>

              <div>
                <p className="font-bold text-gray-900">{current.name}</p>
                <p className="text-sm text-gray-600">
                  {current.role}, {current.company}
                </p>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-[#a4c71d]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {['500+ Events Staffed', '98% Client Satisfaction', '5-Star Rated Service', '24/7 Support'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <div className="w-2 h-2 rounded-full bg-[#a4c71d]" />
              <span className="text-sm font-medium text-gray-700">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
