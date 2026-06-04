import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'motion/react';

const posts = [
  {
    id: 1,
    title: 'All Black Dress Code Guide',
    date: '2026-05-20',
    excerpt: 'Everything you need to know about our signature all-black event dress code, including approved footwear and accessories.',
    content: 'At Fresh People, our signature all-black dress code represents professionalism, elegance, and uniformity across all events. This comprehensive guide covers everything your team needs to know.\n\n## Why All Black?\n\nThe all-black uniform creates a sleek, professional appearance that works across all event types - from corporate galas to weddings, festivals to VIP activations. It\'s timeless, photogenic, and allows your brand or event theme to take center stage.\n\n## Approved Footwear\n\n- Black leather shoes (closed toe)\n- Black formal heels (max 3-inch heel)\n- Black dress shoes with minimal branding\n- Non-slip soles required for safety\n\n## Accessories\n\n- Minimal silver or black jewelry only\n- Fresh People name badge (provided)\n- Black belt if wearing trousers\n- No visible tattoos or piercings during service\n\n## Grooming Standards\n\nAll staff must arrive with neat, professional grooming. Hair should be clean and styled conservatively. Makeup should be natural and professional.',
    category: 'Staff Tips',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'New Staff Onboarding Process',
    date: '2026-05-15',
    excerpt: 'Welcome to our team! Here\'s how we assign event roles, arrival times, and what to expect on your first event.',
    content: 'Welcome to the Fresh People team! We\'re excited to have you on board. This guide walks you through our onboarding process and what to expect as you start your journey with us.\n\n## Registration & Vetting\n\nAll staff undergo a comprehensive vetting process including ID verification, reference checks, and behavioral assessment. This ensures we maintain our high standards.\n\n## Event Assignment\n\nEvents are assigned based on:\n- Your skills and certifications\n- Availability and location\n- Client preferences and event requirements\n- Your performance history\n\n## Arrival & Briefing\n\nYou\'ll receive event details 24-48 hours before the event, including:\n- Venue address and parking info\n- Call time and uniform requirements\n- Point of contact details\n- Special instructions or VIP guest alerts\n\n## Your First Event\n\nArrive 15 minutes early, check in with the coordinator, and remember - guest experience is our top priority!',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Event ICS Calendar Integration',
    date: '2026-05-10',
    excerpt: 'We now auto-generate .ics calendar files for all confirmed events, compatible with iPhone, Outlook, and Gmail.',
    content: 'Fresh People now automatically generates .ics calendar files for all confirmed events! This means you can easily add your shifts to your preferred calendar app.\n\n## How It Works\n\nOnce your event is confirmed, you\'ll receive:\n1. An email confirmation with event details\n2. A downloadable .ics file attached\n3. Option to add directly to Google Calendar\n\n## Compatible Apps\n\n- Google Calendar\n- Outlook (desktop & mobile)\n- Apple Calendar (iPhone & Mac)\n- Samsung Calendar\n- Any app that supports .ics files\n\n## Benefits\n\n- Never miss a shift with automatic reminders\n- See your work schedule alongside personal events\n- Sync across all your devices\n- Share your availability with family/friends\n\nCalendar invites are sent 48 hours after event confirmation.',
    category: 'Tech Updates',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop',
    readTime: '3 min read'
  },
  {
    id: 4,
    title: 'Client Success: Corporate Gala 2026',
    date: '2026-05-05',
    excerpt: 'How we staffed and executed a 500-guest corporate gala with our signature all-black team.',
    content: 'In May 2026, Fresh People was proud to staff the annual corporate gala for a leading Johannesburg company. Here\'s how we delivered excellence for 500 VIP guests.\n\n## The Brief\n\n- 500 corporate guests\n- Black-tie dress code\n- 3-course plated dinner\n- Cocktail reception before dinner\n- After-dinner entertainment\n\n## Our Team\n\nWe deployed:\n- 25 waiters (all-black uniform)\n- 8 RSA-certified bartenders\n- 4 event coordinators\n- 6 kitchen support staff\n- 2 coffee baristas for after-dinner service\n\n## Execution\n\nThe event ran flawlessly. Our team arrived 3 hours early for setup, briefing, and uniform checks. Service was timed to perfection, with all 500 guests served within 45 minutes.\n\n## Client Feedback\n\n"The Fresh People team was exceptional. Professional, attentive, and truly elevated our event." - Procurement Manager, MTN Group\n\nWe\'re proud to be the trusted staffing partner for Johannesburg\'s corporate events.',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1540575469963-83ee6c357c37?w=1200&h=600&fit=crop',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Staff Shortage Management Tips',
    date: '2026-04-28',
    excerpt: 'Best practices for managing event staffing when demand exceeds available team members.',
    content: 'Event staffing shortages happen. Here are our proven strategies for managing high-demand periods while maintaining service quality.\n\n## Prevention Strategies\n\n- Maintain a roster of 2x your average event size\n- Cross-train staff across multiple roles\n- Build relationships with reliable freelancers\n- Offer incentives for last-minute availability\n\n## When Shortages Occur\n\n1. **Prioritize roles** - Keep essential positions (bartenders, waiters) filled first\n2. **Merge roles** - A bartender can also handle simple wine service\n3. **Call in backups** - We maintain a list of on-call staff\n4. **Communicate early** - Tell the client immediately so they can adjust expectations\n\n## Emergency Protocol\n\nFresh People guarantees replacement staff within 2 hours. We maintain a standby team specifically for emergencies.\n\nThe key is proactive planning and honest communication with clients.',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    readTime: '7 min read'
  },
  {
    id: 6,
    title: 'The Fresh People Legacy: 5 Years Strong',
    date: '2026-04-15',
    excerpt: 'Celebrating five years of delivering premium event staffing across South Africa.',
    content: '2026 marks 5 years of Fresh People! What started as a small Johannesburg staffing agency has grown into the region\'s premier event staffing partner.\n\n## Our Journey\n\n**2021** - Founded with 10 staff members\n**2022** - First major corporate client (MTN Group)\n**2023** - Expanded to 100+ vetted staff\n**2024** - Launched equipment & logistics division\n**2025** - 1,000+ events staffed\n**2026** - 500+ active staff, 1,500+ events completed\n\n## What Sets Us Apart\n\n- **Vetting** - Every staff member is identity-verified and behaviorally assessed\n- **Training** - RSA certification, etiquette training, and role-specific skills\n- **Reliability** - 99% on-time rate, 2-hour replacement guarantee\n- **Coverage** - Johannesburg, Sandton, Randburg, Pretoria, and surrounds\n\n## Thank You\n\nTo our clients, staff, and partners - thank you for 5 incredible years. Here\'s to the next 5!\n\nInterested in joining our team? Contact us today.',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    readTime: '8 min read'
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-display font-bold text-[#0a0a0a]">Post Not Found</h1>
          <Link to="/blog" className="text-[#A4C71D] hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Split content into sections
  const contentSections = post.content.split('\n\n');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-32 pb-20 bg-[#FBFBF9]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#A4C71D] hover:underline mb-8">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4 text-sm text-on-surface/50">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag size={14} />
              {post.category}
            </span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0a0a0a] mb-6">
            {post.title}
          </h1>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="aspect-[2/1] overflow-hidden bg-gray-100 rounded-none mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {contentSections.map((section, index) => {
            if (section.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-display font-bold text-[#0a0a0a] mt-12 mb-6">
                  {section.replace('## ', '')}
                </h2>
              );
            } else if (section.startsWith('- ')) {
              const items = section.split('\n').filter(line => line.trim());
              return (
                <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-on-surface/80">{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            } else {
              return (
                <p key={index} className="text-on-surface/80 leading-relaxed mb-6">
                  {section}
                </p>
              );
            }
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-200 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-[#0a0a0a] mb-4">
            Ready to Work With Us?
          </h3>
          <p className="text-on-surface/60 mb-8">
            Join our team or book staff for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-m3-filled">
              Contact Us
            </Link>
            <Link to="/blog" className="btn-m3-tonal">
              Back to Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
