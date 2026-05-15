import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';

const services = {
  'brand-ambassadors': {
    title: 'Brand Ambassadors',
    icon: 'fas fa-crown',
    tagline: 'Premium Brand Representation',
    description: 'Our brand ambassadors are the face of your brand. Charismatic, professional, and trained to deliver your message with impact at every activation, product launch, and VIP event.',
    features: [
      'Luxury retail activations',
      'Product launch specialists',
      'VIP event representation',
      'Brand messaging training',
      'Social media integration',
      'Multilingual capabilities'
    ],
    ideal: 'Perfect for product launches, retail activations, trade shows, and corporate events where brand image is paramount.',
    gallery: ['/images/page-image-new1.jpg', '/images/extra1.jpg', '/images/extra2.jpg']
  },
  'hospitality-staff': {
    title: 'Waiters, Butlers & Commis Chefs',
    icon: 'fas fa-utensils',
    tagline: 'Professional Food Service',
    description: 'Professional waitstaff, butlers, and commis chefs for seamless food service at weddings, corporate events, and private functions.',
    features: [
      'Professional waitstaff',
      'Experienced butlers',
      'Commis chefs & kitchen support',
      'Uniformed & trained staff',
      'Multi-course service',
      ' dietary accommodation'
    ],
    ideal: 'Essential for weddings, corporate dinners, private functions, and any event requiring professional food service.',
    gallery: ['/images/extra1.jpg', '/images/extra2.jpg', '/images/extra3.jpg']
  },
  'coffee-baristas': {
    title: 'Coffee Baristas',
    icon: 'fas fa-coffee',
    tagline: 'Specialty Coffee Service',
    description: 'Professional baristas serving specialty coffee and beverages for corporate events, weddings, and brand activations.',
    features: [
      'Specialty coffee service',
      'Espresso & cappuccino',
      'Mobile coffee stations',
      'Corporate event specialists',
      'Wedding coffee bars',
      'Custom menu options'
    ],
    ideal: 'Perfect for corporate events, weddings, brand activations, and any event requiring premium coffee service.',
    gallery: ['/images/extra3.jpg', '/images/extra4.jpg', '/images/page-image-new1.jpg']
  },
  'cocktail-bartenders': {
    title: 'Cocktail Bartenders',
    icon: 'fas fa-glass-martini-alt',
    tagline: 'Premium Beverage Service',
    description: 'RSA-certified bartenders crafting premium cocktails and beverage service for corporate events, weddings, and private functions.',
    features: [
      'RSA-certified bartenders',
      'Craft cocktail menus',
      'Premium beverage service',
      'Mobile bar setups',
      'Corporate event specialists',
      'Custom drink creation'
    ],
    ideal: 'Essential for corporate events, weddings, festivals, and any event requiring professional bar service.',
    gallery: ['/images/extra4.jpg', '/images/page-image-new2.jpg', '/images/extra1.jpg']
  },
  'event-coordinators': {
    title: 'Event Coordinators',
    icon: 'fas fa-clipboard-check',
    tagline: 'Flawless Execution',
    description: 'On-site coordinators to manage timelines, vendors, and ensure flawless execution of your event vision. Your dedicated point of contact.',
    features: [
      'On-site event coordination',
      'Timeline management',
      'Vendor coordination',
      'Guest services & management',
      'Problem-solving & contingencies',
      'Post-event reporting'
    ],
    ideal: 'Invaluable for complex events, corporate functions, weddings, and any event requiring professional coordination.',
    gallery: ['/images/extra4.jpg', '/images/page-image-new1.jpg', '/images/extra2.jpg']
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-secondary">Service Not Found</h1>
          <Link to="/services" className="btn-m3-tonal">
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen">
      <section className="pt-32 md:pt-40 pb-16 section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} />
            Back to All Services
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center text-primary">
              <i className={`${service.icon} text-2xl`}></i>
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">The Portfolio</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-xl text-primary font-semibold">{service.tagline}</p>
        </motion.div>
      </section>

      <section className="py-16 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-none border border-gray-100"
            >
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">Overview</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">{service.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-none border border-gray-100"
            >
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">What We Provide</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-none flex items-center justify-center text-primary shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-secondary font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-secondary text-white p-8 md:p-12 rounded-none"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-4">Ideal For</h2>
              <p className="text-white/80 leading-relaxed">{service.ideal}</p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-none border border-gray-100 sticky top-8"
            >
              <h3 className="text-xl font-display font-bold text-secondary mb-6">Ready to Book?</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Get a custom quote for your {service.title.toLowerCase()} needs today.
              </p>
              <Link
                to="/contact"
                className="btn-m3-filled w-full justify-center text-base py-4"
              >
                Request Quote <ChevronRight size={18} className="ml-2" />
              </Link>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-on-surface-variant">
                  <strong className="text-secondary">Quick Response:</strong><br />
                  We typically respond within 2 hours during business hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="section-container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
            Need Multiple Services?
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Ask about our bundled packages for comprehensive event solutions.
          </p>
          <Link to="/services" className="btn-m3-tonal text-base">
            View All Services <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
