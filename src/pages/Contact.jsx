import { useState } from 'react';
import { LucideMail, LucidePhone, LucideMapPin, LucideSend } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mojrqwzd', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="py-20">
      <div className="section-container">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <LucidePhone className="text-primary" size={20} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+27672961272" className="text-on-surface-variant hover:text-primary">+27 672 961 272</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <LucideMail className="text-primary" size={20} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:[email protected]" className="text-on-surface-variant hover:text-primary">[email protected]</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <LucideMapPin className="text-primary" size={20} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-on-surface-variant">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
            <a href="https://wa.me/27672961272" className="btn-m3-filled w-full justify-center">
              WhatsApp Us <LucideSend size={16} />
            </a>
          </div>

          {/* Contact Form */}
          <div className="card-m3-elevated">
            <h3 className="text-xl font-bold mb-6">Book Staff Now</h3>
            {status === 'success' ? (
              <div className="text-center py-8">
                <p className="text-primary font-semibold text-lg">Thank you! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-surface-variant focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-surface-variant focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select name="service" className="w-full px-4 py-3 rounded-lg border border-surface-variant focus:border-primary focus:outline-none">
                    <option>Bartenders</option>
                    <option>Brand Ambassadors</option>
                    <option>Hostesses/Hosts</option>
                    <option>Full Event Staffing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-surface-variant focus:border-primary focus:outline-none"></textarea>
                </div>
                <button type="submit" className="btn-m3-filled w-full justify-center">
                  Send Message <LucideSend size={16} />
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
