import { LucideCheck, LucideUsers, LucideTrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20">
      <div className="section-container">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Fresh People</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-on-surface-variant mb-6">
            Fresh People is Johannesburg's premier event staffing agency, specializing in providing professional bartenders, brand ambassadors, and hostesses for corporate events and activations.
          </p>
          <p className="text-lg text-on-surface-variant">
            With over 200+ happy clients across Johannesburg, we pride ourselves on reliability, professionalism, and excellence in every event we staff.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-m3-elevated text-center">
            <LucideUsers size={48} className="mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">200+</h3>
            <p className="text-on-surface-variant">Happy Clients</p>
          </div>
          <div className="card-m3-elevated text-center">
            <LucideTrendingUp size={48} className="mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">5+ Years</h3>
            <p className="text-on-surface-variant">Industry Experience</p>
          </div>
          <div className="card-m3-elevated text-center">
            <LucideCheck size={48} className="mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
            <p className="text-on-surface-variant">Reliability Rate</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/contact" className="btn-m3-filled">Get in Touch <LucideArrowRight size={16} /></a>
        </div>
      </div>
    </div>
  );
}
