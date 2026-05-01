import { LucideGlassWater, LucideMegaphone, LucideUsers, LucideStar, LucideCheck } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-20">
      <div className="section-container">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Bartenders */}
          <div className="card-m3-elevated">
            <LucideGlassWater size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Professional Bartenders</h3>
            <p className="text-on-surface-variant mb-6">Experienced bartenders for corporate events, weddings, and activations in Johannesburg.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Licensed & certified</li>
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Cocktail specialists</li>
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Flair bartending available</li>
            </ul>
            <a href="/contact" className="btn-m3-filled w-full justify-center">Book Now</a>
          </div>

          {/* Brand Ambassadors */}
          <div className="card-m3-elevated relative ring-2 ring-primary">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs px-3 py-1 rounded-full">Most Popular</span>
            <LucideMegaphone size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Brand Ambassadors</h3>
            <p className="text-on-surface-variant mb-6">Engaging brand ambassadors to represent your brand at events and activations.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Brand training provided</li>
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Product sampling</li>
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Promotional events</li>
            </ul>
            <a href="/contact" className="btn-m3-filled w-full justify-center">Book Now</a>
          </div>

          {/* Hostesses */}
          <div className="card-m3-elevated">
            <LucideUsers size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Hostesses & Hosts</h3>
            <p className="text-on-surface-variant mb-6">Professional hostesses for VIP events, corporate functions, and conferences.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> VIP event specialists</li>
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Multilingual staff</li>
              <li className="flex items-center gap-2"><LucideCheck size={16} className="text-primary" /> Registration & greeting</li>
            </ul>
            <a href="/contact" className="btn-m3-filled w-full justify-center">Book Now</a>
          </div>
        </div>

        <div className="text-center bg-primary-container/30 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need Custom Staffing?</h2>
          <p className="text-lg text-on-surface-variant mb-8">We tailor our staffing solutions to your specific event needs.</p>
          <a href="/contact" className="btn-m3-filled">Contact Us <LucideArrowRight size={16} /></a>
        </div>
      </div>
    </div>
  );
}
