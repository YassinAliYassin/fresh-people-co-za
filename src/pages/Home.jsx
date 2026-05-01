import { LucideUsers, LucideGlassWater, LucideMegaphone, LucideStar, LucideArrowRight, LucideCheck } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-container/30 to-surface">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6">
            Johannesburg's Most Reliable<br />
            <span className="text-primary">Event Staffing</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Premium bartenders, brand ambassadors & hostesses for corporate events and activations in Johannesburg.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="btn-m3-filled">
              Book Staff Now <LucideArrowRight size={16} />
            </a>
            <a href="https://wa.me/27672961272" className="btn-m3-tonal">
              WhatsApp Us <LucideCheck size={16} />
            </a>
          </div>
          <p className="mt-6 text-sm text-on-surface-variant">
            <LucidePhone size={14} className="inline" /> Call us: +27 672 961 272
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-primary-container/20">
        <div className="section-container text-center">
          <p className="text-sm font-semibold text-on-primary-container uppercase tracking-wide">
            Trusted by 200+ Johannesburg event planners
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-m3-elevated text-center">
              <LucideGlassWater size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Bartenders</h3>
              <p className="text-on-surface-variant">Experienced bartenders for corporate events, weddings, and activations.</p>
            </div>
            <div className="card-m3-elevated text-center relative">
              <span className="absolute top-4 right-4 bg-primary text-on-primary text-xs px-3 py-1 rounded-full">Most Popular</span>
              <LucideMegaphone size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Ambassadors</h3>
              <p className="text-on-surface-variant">Engaging brand ambassadors to represent your brand at events.</p>
            </div>
            <div className="card-m3-elevated text-center">
              <LucideUsers size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Hostesses & Hosts</h3>
              <p className="text-on-surface-variant">Professional hostesses for VIP events and corporate functions.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="btn-m3-outlined">View All Services <LucideArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary-container/30">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Request Staff</h3>
              <p className="text-on-surface-variant">Tell us your event details and staffing needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-on-surface-variant">We match you with vetted, professional staff.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Event Ready</h3>
              <p className="text-on-surface-variant">Your staff arrives on time, ready to deliver excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <LucideStar size={32} className="text-primary mx-auto mb-4" />
          <blockquote className="text-2xl font-medium text-on-surface mb-6">
            "Fresh People provided exceptional staff for our Johannesburg corporate event. Professional, on-time, and a pleasure to work with."
          </blockquote>
          <cite className="text-on-surface-variant">— Sarah M., Event Planner</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-on-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Staff Your Event?</h2>
          <p className="text-xl mb-8 opacity-90">Book Johannesburg's most reliable event staff today.</p>
          <a href="/contact" className="bg-on-primary text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
            Book Staff Now
          </a>
        </div>
      </section>
    </div>
  );
}
