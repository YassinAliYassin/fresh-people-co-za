import { useParams, Link } from 'react-router-dom';
import { Coffee, Wine, Settings, ClipboardList, ArrowLeft, Check, Star, Users, Clock, Shield } from 'lucide-react';

const serviceData = {
  'brand-ambassadors': {
    title: 'Brand Ambassadors',
    subtitle: 'Elevate Your Brand Experience',
    icon: <Coffee size={48} />,
    color: '#A4C71D',
    hero: 'Charismatic, professional talent for luxury activations, product launches, VIP events, mall campaigns, and premium brand moments across Gauteng.',
    sections: [
      {
        title: 'Luxury Activations',
        desc: 'Trained ambassadors who embody your brand values with poise and enthusiasm at high-end retail and experiential activations.',
        highlights: ['Brand messaging mastery', 'Engaging interactions', 'Social media ready', 'Luxury presentation']
      },
      {
        title: 'Product Launches',
        desc: 'Specialists who create buzz, demo products, and convert interest into memorable brand experiences.',
        highlights: ['Product knowledge', 'Sampling experts', 'Lead capture', 'Launch energy']
      },
      {
        title: 'VIP & Corporate Events',
        desc: 'Polished hosts for VIP lounges, gala entrances, and corporate hospitality who make every guest feel valued.',
        highlights: ['VIP etiquette', 'Multilingual', 'Photo & media handling', 'Seamless guest flow']
      },
      {
        title: 'Promotional Campaigns',
        desc: 'Energetic teams for mall activations, roadshows, exhibitions, store openings, and field marketing.',
        highlights: ['High footfall handling', 'Consistent messaging', 'Data collection', 'Branded attire']
      }
    ],
    whyChoose: [
      'Rigorous vetting & brand training',
      'Professional appearance & communication',
      'Flexible for half-day or full activations',
      'Photo/video content capture included',
      'Gauteng-wide deployment'
    ]
  },
  'hospitality-staff': {
    title: 'Hospitality Staff',
    subtitle: 'Flawless Service, Every Time',
    icon: <Coffee size={48} />,
    color: '#A4C71D',
    hero: 'RSA-certified bartenders, waiters, baristas, commis chefs, and support staff for weddings, corporate, and high-profile events.',
    sections: [
      {
        title: 'Waiters, Butlers & Commis Chefs',
        desc: 'Professional waitstaff, butlers, and kitchen support for seamless plated service and back-of-house excellence.',
        highlights: ['Fine dining etiquette', 'Multi-course service', 'Dietary specialists', 'Uniformed presentation']
      },
      {
        title: 'Cocktail Bartenders',
        desc: 'RSA-certified mixologists crafting premium cocktails, signature drinks, and full bar service with style.',
        highlights: ['Craft cocktails', 'High-volume service', 'Inventory & stock mgmt', 'Flair optional']
      },
      {
        title: 'Coffee Baristas',
        desc: 'Specialty coffee professionals running espresso stations, latte art, and full coffee bars for events.',
        highlights: ['Espresso mastery', 'Mobile stations', 'Premium beans', 'Wedding & corporate']
      },
      {
        title: 'Event Marshals & Runners',
        desc: 'Front-of-house support, ushering, crowd guidance, and runner services to keep events flowing.',
        highlights: ['Guest direction', 'Queue management', 'VIP escort', 'On-call support']
      }
    ],
    whyChoose: [
      'All hospitality staff RSA certified',
      'Full uniforms & grooming standards',
      'Rapid replacements on-site',
      '10+ years JHB event experience',
      'One team for FOH + BOH'
    ]
  },
  'coffee-baristas': {
    title: 'Coffee Baristas',
    subtitle: 'Specialty Coffee, Elevated',
    icon: <Coffee size={48} />,
    color: '#A4C71D',
    hero: 'Third-wave baristas and complete mobile coffee stations for corporate events, weddings, launches, and festivals.',
    sections: [
      {
        title: 'Full Coffee Station Setup',
        desc: 'We bring the machines, beans, cups, syrups, and everything needed for a premium café experience on site.',
        highlights: ['Commercial espresso', 'Grinder & accessories', 'Branded disposables', 'Power & water included']
      },
      {
        title: 'Latte Art & Signature Drinks',
        desc: 'Skilled baristas creating beautiful latte art and custom coffee cocktails for your guests.',
        highlights: ['Latte art trained', 'Custom menus', 'Alternative milks', 'Iced & hot options']
      },
      {
        title: 'Corporate & Wedding Service',
        desc: 'Professional, uniformed baristas who handle high-volume service with grace for any guest list size.',
        highlights: ['Uniformed pros', 'High volume capable', 'Guest interaction', 'Custom branding']
      },
      {
        title: 'Mobile & Event Ready',
        desc: 'Fully self-contained stations that arrive, set up, serve, and break down cleanly.',
        highlights: ['Quick deploy', 'All supplies included', 'Cleanup included', 'Flexible packages']
      }
    ],
    whyChoose: [
      'Professional baristas only',
      'Own high-end equipment',
      'Setup, service, breakdown',
      'Perfect for weddings & conferences',
      'Add to any package'
    ]
  },
  'cocktail-bartenders': {
    title: 'Cocktail Bartenders',
    subtitle: 'Craft Bars That Impress',
    icon: <Wine size={48} />,
    color: '#A4C71D',
    hero: 'RSA-certified cocktail specialists delivering premium beverage service, mobile bars, and unforgettable drink experiences.',
    sections: [
      {
        title: 'Craft Cocktail Service',
        desc: 'Classics and signature creations using premium spirits, fresh ingredients, and pro technique.',
        highlights: ['RSA certified', 'Premium spirits', 'Fresh ingredients', 'Presentation focused']
      },
      {
        title: 'Mobile Bar Setups',
        desc: 'Portable bars, back bars, ice, glassware, and full service delivered and installed.',
        highlights: ['Full bar builds', 'Ice & chilling', 'Glassware packages', 'Stock provision']
      },
      {
        title: 'Premium Beverage Curation',
        desc: 'We help design custom menus that match your event theme, brand, or guest preferences.',
        highlights: ['Signature drinks', 'Menu consultation', 'Themed options', 'Dietary friendly']
      },
      {
        title: 'High-Volume & Flair',
        desc: 'Speed service for large events or stylish flair performances for intimate gatherings.',
        highlights: ['Fast service', 'Entertainment option', 'Stock management', 'Professional garnish']
      }
    ],
    whyChoose: [
      'RSA-certified professionals',
      'Flair + serious skill',
      'Custom menu development',
      'Full bar + staffing packages',
      'High-volume experts'
    ]
  },
  'event-logistics': {
    title: 'Event Logistics',
    subtitle: 'Everything But The Guests',
    icon: <Settings size={48} />,
    color: '#A4C71D',
    hero: 'Bar stock, glassware, equipment rental, setup crews, and full logistics so your event runs without a hitch.',
    sections: [
      {
        title: 'Equipment & Bar Stock',
        desc: 'Premium bar stock, crystal glassware, bar tools, coffee stations, and all the gear you need.',
        highlights: ['Curated beverages', 'Crystal & glass', 'Pro bar tools', 'Delivery included']
      },
      {
        title: 'Setup & Breakdown Crews',
        desc: 'Experienced teams that handle layout, styling, install, and full strike — on time, every time.',
        highlights: ['Early arrival crews', 'Fast efficient work', 'Waste & removal', 'Post-event clean']
      },
      {
        title: 'Venue Layout & Planning',
        desc: 'CAD-level floor plans, traffic flow, capacity, and spatial optimization for your venue.',
        highlights: ['Floor plan design', 'Traffic analysis', 'Capacity optimization', 'Accessibility']
      },
      {
        title: 'Full Coordination',
        desc: 'Timeline management, vendor sync, and real-time adjustments from load-in to load-out.',
        highlights: ['Minute-by-minute plans', 'Vendor liaison', 'On-site problem solving', 'Post-event report']
      }
    ],
    whyChoose: [
      'End-to-end coordination',
      'Backup gear always ready',
      'One invoice for everything',
      '10+ years logistics',
      'Insured & reliable'
    ]
  },
  'event-coordinators': {
    title: 'Event Coordinators',
    subtitle: 'Command & Control',
    icon: <ClipboardList size={48} />,
    color: '#A4C71D',
    hero: 'Dedicated on-site coordinators, full planning support, vendor management, and flawless execution from brief to breakdown.',
    sections: [
      {
        title: 'On-Site Coordination',
        desc: 'A professional manager who owns the timeline, directs vendors, solves problems, and keeps everything on track.',
        highlights: ['Dedicated lead', 'Real-time decisions', 'Guest experience focus', 'Crisis handling']
      },
      {
        title: 'Planning & Vendor Mgmt',
        desc: 'Budgeting, vendor selection, contracts, and day-of execution so you can enjoy your event.',
        highlights: ['Full planning support', 'Vendor negotiations', 'Timeline creation', 'Post-event report']
      }
    ],
    whyChoose: [
      'Single point of accountability',
      'Experienced event pros',
      'Vendor network of 100+',
      'Budget & timeline experts',
      'Stress-free delivery'
    ]
  },
  'staffing': {
    title: 'Staffing',
    subtitle: 'Your Event, Perfectly Staffed',
    icon: <Coffee size={48} />,
    color: '#A4C71D',
    hero: 'From craft cocktail bars to high-end galas — we supply the human engine that drives your event.',
    sections: [
      {
        title: 'Waiters & Waitresses',
        desc: 'RSA-certified professionals trained in fine dining etiquette, wine service, and guest relations.',
        highlights: ['Uniformed & trained', 'Wine service certified', 'Multi-language options', 'Full table service']
      },
      {
        title: 'Bartenders',
        desc: 'Mixologists and speed bartenders who turn your bar into an experience. Flair optional, skill guaranteed.',
        highlights: ['RSA certified', 'Cocktail specialists', 'High-volume capable', 'Inventory management']
      },
      {
        title: 'Baristas',
        desc: 'Third-wave coffee pros with their own gear. Latté art included, caffeine addiction supported.',
        highlights: ['Own equipment', 'Latte art skilled', 'Espresso mastery', 'Event-grade machines']
      },
      {
        title: 'Event Marshals & Security',
        desc: 'Crowd control with a smile. Professional, assertive when needed, invisible when not.',
        highlights: ['PSIRA registered', 'Crowd management', 'Access control', 'First aid trained']
      },
      {
        title: 'Commis Chefs & Kitchen',
        desc: 'Back-of-house warriors who keep the plates flowing and the kitchen running like clockwork.',
        highlights: ['Professional chefs', 'Plating perfection', 'Dietary accommodation', 'HACCP trained']
      }
    ],
    whyChoose: [
      'Every staff member vetted & trained',
      'Uniforms provided (or match your brand)',
      'Replacements available within 2 hours',
      '10+ years staffing Johannesburg events',
      'Competitive rates, zero compromise'
    ]
  },
  'equipment-supply': {
    title: 'Equipment & Supply',
    subtitle: 'Everything But The Venue',
    icon: <Wine size={48} />,
    color: '#A4C71D',
    hero: 'Premium bar stock, crystal glassware, professional tools — delivered, setup, and collected. You focus on the guests.',
    sections: [
      {
        title: 'Bar Stock & Beverages',
        desc: 'Curated wine lists, craft beers, premium spirits, and mixers. We know what Johannesburg drinks.',
        highlights: ['Premium selections', 'Volume discounts', 'Cold-chain delivery', 'Licensed supplier']
      },
      {
        title: 'Glassware & Table Setting',
        desc: 'Crystal glasses, charger plates, cutlery, and linens. Your tables will look like a magazine spread.',
        highlights: ['Crystal & glass options', 'Linen in every color', 'Charger plates', 'Porcelain & ceramics']
      },
      {
        title: 'Bar Equipment',
        desc: 'From portable bars to ice machines, blenders to beer taps. We bring the bar to you.',
        highlights: ['Portable bar setups', 'Ice machines', 'Blenders & equipment', 'Beer & wine chillers']
      },
      {
        title: 'Coffee Station Setup',
        desc: 'Full coffee bars with baristas, beans, cups, and machines. Your guests get cafe-quality service.',
        highlights: ['Espresso machines', 'Premium beans', 'Branded cups', 'Full station setup']
      }
    ],
    whyChoose: [
      'Delivery & collection included',
      'Backup equipment on standby',
      'Setup & breakdown crews',
      'Competitive rental rates',
      'One invoice for staff + gear'
    ]
  },
  'logistics-setup': {
    title: 'Logistics & Setup',
    subtitle: 'Precision Behind The Scenes',
    icon: <Settings size={48} />,
    color: '#A4C71D',
    hero: 'Venue layouts, décor coordination, setup & breakdown — we handle the chaos so your event flows like water.',
    sections: [
      {
        title: 'Venue Layout & Planning',
        desc: 'CAD-level floor plans, traffic flow analysis, and spatial optimization. We maximize your venue.',
        highlights: ['Floor plan design', 'Traffic flow analysis', 'Capacity optimization', 'Accessibility compliance']
      },
      {
        title: 'Décor & Styling',
        desc: 'Floral arrangements, lighting design, installations, and themed décor. We make it Instagram-worthy.',
        highlights: ['Floral arrangements', 'Lighting design', 'Themed installations', 'Backdrop & staging']
      },
      {
        title: 'Setup & Breakdown',
        desc: 'Crews that arrive early, work fast, and disappear before guests arrive. Then return to pack it all up.',
        highlights: ['Early setup crews', 'Fast & efficient', 'Post-event breakdown', 'Waste removal']
      },
      {
        title: 'Timeline Management',
        desc: 'Minute-by-minute schedules, vendor coordination, and real-time adjustments. Nothing slips through.',
        highlights: ['Minute-by-minute plans', 'Vendor coordination', 'Real-time adjustments', 'Emergency protocols']
      }
    ],
    whyChoose: [
      '10+ years event logistics',
      'Real-time problem solving',
      'Vendor relationship network',
      'Insured & bonded crews',
      'Post-event reporting included'
    ]
  },
  'management': {
    title: 'Management',
    subtitle: 'Your Event, Our Command',
    icon: <ClipboardList size={48} />,
    color: '#A4C71D',
    hero: 'End-to-end event planning, on-site coordination, and vendor management. Hand us your vision — we deliver perfection.',
    sections: [
      {
        title: 'Event Planning',
        desc: 'Concept to execution. We handle budgets, timelines, vendor selection, and creative direction.',
        highlights: ['Budget planning', 'Concept development', 'Vendor sourcing', 'Timeline creation']
      },
      {
        title: 'On-Site Coordination',
        desc: 'A dedicated event manager who runs the show, handles crises, and ensures every detail is perfect.',
        highlights: ['Dedicated manager', 'Crisis management', 'Real-time coordination', 'Guest services']
      },
      {
        title: 'Vendor Management',
        desc: 'We negotiate with caterers, AV teams, venues, and entertainers. You get the best deals, zero stress.',
        highlights: ['Contract negotiation', 'Quality assurance', 'Payment coordination', 'Performance tracking']
      },
      {
        title: 'Post-Event Services',
        desc: 'Feedback collection, vendor payments, damage reports, and lessons learned. We make your next event better.',
        highlights: ['Guest feedback', 'Vendor reviews', 'Financial reconciliation', 'Improvement reports']
      }
    ],
    whyChoose: [
      'Single point of contact',
      'Budget optimization experts',
      'Crisis management trained',
      'Vendor network (100+)',
      'ROI tracking & reporting'
    ]
  },
  // Aliases for legacy / direct links from previous deploys (brand ambassador etc)
  'models-hosts': { title: 'Models & Hosts', subtitle: 'Front-of-House Excellence', icon: <Coffee size={48} />, color: '#A4C71D', hero: 'Professional models, ushers and VIP hosts for high-profile events.', sections: [{title: 'VIP Hosting', desc: 'Elegant, engaging hosts for galas, weddings and corporate.', highlights: ['Poised presentation', 'Guest greeting', 'Photo coordination']}], whyChoose: ['Vetted talent', 'Event ready'] },
  'waiters-butlers-commis-chefs': { title: 'Waiters, Butlers & Commis Chefs', subtitle: 'Precision Hospitality', icon: <Coffee size={48} />, color: '#A4C71D', hero: 'Trained service staff for seamless dining and kitchen support.', sections: [{title: 'Service Staff', desc: 'Full service teams for plated events and back of house.', highlights: ['Etiquette trained', 'Uniformed', 'Dietary aware']}], whyChoose: ['RSA standards', 'Reliable'] }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-display font-bold text-[#0A0A0A]">Service Not Found</h1>
          <Link to="/services" className="text-[#A4C71D] hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBFBF9] min-h-screen">
      {/* Hero */}
      <section className="pt-40 md:pt-64 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#A4C71D] hover:underline mb-8">
            <ArrowLeft size={16} /> All Services
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-[#A4C71D]/10 text-[#A4C71D] rounded-none flex items-center justify-center">
              {service.icon}
            </div>
            <div>
              <span className="text-[#A4C71D] font-bold uppercase tracking-widest text-sm">{service.title}</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-[#0A0A0A]">{service.subtitle}</h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-[#0A0A0A]/70 max-w-3xl leading-relaxed">{service.hero}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {service.sections.map((section, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 md:p-12 rounded-none">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-grow space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0A0A0A]">{section.title}</h2>
                  <p className="text-[#0A0A0A]/70 text-lg">{section.desc}</p>
                </div>
                <div className="md:w-80 space-y-3">
                  {section.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-3 text-[#0A0A0A]">
                      <div className="w-5 h-5 bg-[#A4C71D]/20 rounded-none flex items-center justify-center text-[#A4C71D]">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 md:py-40 bg-[#0A0A0A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-12 text-white drop-shadow-lg">Why Choose {service.title}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyChoose.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-none hover:bg-[#A4C71D] hover:text-[#0A0A0A] transition-all duration-500 group">
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-[#A4C71D] group-hover:text-[#0A0A0A]" />
                  <span className="font-semibold text-white">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 md:py-60 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0A0A0A]">
            Ready to <span className="text-[#A4C71D]">Elevate?</span>
          </h2>
          <p className="text-xl text-[#0A0A0A]/70">Get a custom quote for your event in under 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#A4C71D] text-[#0A0A0A] px-12 py-5 text-lg font-medium hover:bg-[#A4C71D]/90 transition-colors inline-flex items-center gap-2">
              Get Quote <ArrowLeft size={16} className="rotate-180" />
            </Link>
            <Link to="/services" className="border-2 border-[#0A0A0A] text-[#0A0A0A] px-12 py-5 text-lg font-medium hover:bg-[#0A0A0A] hover:text-white transition-colors inline-flex items-center gap-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
