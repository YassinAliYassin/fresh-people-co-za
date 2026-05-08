import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How quickly can you provide staff for an event?",
    answer: "We can typically provide staff within 24-48 hours for urgent requests. For large events, we recommend booking at least 1-2 weeks in advance to ensure availability of your preferred team members."
  },
  {
    question: "What types of events do you staff?",
    answer: "We staff all types of events including corporate functions, weddings, galas, conferences, product launches, and private parties. Our team is trained for both formal and casual environments."
  },
  {
    question: "Do you provide equipment along with staffing?",
    answer: "Yes! We offer comprehensive event solutions including bar equipment, glassware, coffee station supplies, furniture, and decor. Check our Equipment & Supply service for full details."
  },
  {
    question: "What areas do you service?",
    answer: "We primarily service Johannesburg (with headquarters in Randburg) and Cape Town. We also handle events in surrounding areas. Contact us for specific location availability."
  },
  {
    question: "Are your staff trained and vetted?",
    answer: "Absolutely. Every team member undergoes thorough screening, background checks, and professional training. We ensure all staff are experienced, reliable, and represent your brand with excellence."
  },
  {
    question: "How does billing work?",
    answer: "Billing is done weekly or per event, depending on your preference. We provide detailed invoices and can integrate with your procurement system."
  },
  {
    question: "Can I request specific staff members?",
    answer: "Yes, if you've worked with us before and have preferred staff members, you can request them specifically. We'll do our best to accommodate your preferences based on availability."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require at least 48 hours notice for cancellations. Late cancellations may incur a fee. For emergencies, we're flexible and will work with you to find a solution."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-[#a4c71d]/10 rounded-none flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} className="text-[#a4c71d]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Fresh People services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-none shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#a4c71d] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#a4c71d] text-white px-6 py-3 rounded-none hover:bg-[#8fb018] transition-colors"
          >
            Contact Our Team
            <ChevronDown size={16} className="rotate-270" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
