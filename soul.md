# Fresh People Co. Za - Website Soul

## Identity

- **Business**: Fresh People - Premier Talent & Events Staffing Johannesburg
- **Ownership**: Black-owned South African business
- **Location**: Johannesburg, Gauteng, South Africa
- **Email**: info@fresh-people.co.za (phone/WhatsApp removed from public site)
- **Website**: https://fresh-people.co.za

## Mission

South Africa's premier talent agency. We refine the human brand interaction for a luxury era.

## Core Values

- **Vetting**: Every staff member is identity-verified and behaviorally assessed
- **Training**: RSA certification, etiquette training, and role-specific skills
- **Reliability**: 99% on-time rate, 2-hour replacement guarantee
- **Coverage**: Johannesburg, Sandton, Randburg, Pretoria, and surrounds

## Services Offered

1. Brand Ambassadors (slug: `brand-ambassadors`)
2. Coffee Baristas (slug: `coffee-baristas`)
3. Cocktail Bartenders (slug: `cocktail-bartenders`)
4. Hospitality Staff (slug: `hospitality-staff`)
5. Event Logistics (slug: `event-logistics`)
6. Event Coordinators (slug: `event-coordinators`)

## Technical Architecture

### Project Structure

- **Repo**: `/home/yassin/repos/fresh-people-co-za/`
- **GitHub**: `https://github.com/YassinAliYassin/fresh-people-co-za.git`
- **Branch**: `main`
- **Build**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + Motion (react-motion)

### Key Pages

- **Home**: `/` (src/pages/Home.jsx) - Talent cards link to service pages
- **Services**: `/services/:serviceId` (src/pages/ServiceDetail.jsx)
- **About**: `/about` (src/pages/About.jsx) - Expanded with company story
- **Blog**: `/blog` (src/pages/Blog.jsx) - 6 sample posts
- **Blog Post**: `/blog/:id` (src/pages/BlogPost.jsx) - Individual post pages
- **Contact**: `/contact` (src/pages/Contact.tsx)

### Critical Updates Made (2026-06-04)

1. ✅ **Created BlogPost.jsx** - Fixed "Post Not Found" error
2. ✅ **Updated App.jsx** - Added `/blog/:id` route
3. ✅ **Expanded About.jsx** - Added Our Story, Values, Team, Contact sections
4. ✅ **Verified Service Detail pages** - All 6 service pages work correctly
5. ✅ **Fixed image strategy** - All blog images use local `/images/` folder
6. ✅ **Deployed to FTP** - `zada136.webway.host` (FTP user: `fresh@fresh-people.co.za`)

### Image Strategy

- **Local images only** - Reflects South African black-owned business
- **Location**: `/public/images/` folder
- **Blog posts use**: `page-image-1.jpg`, `page-image-2.jpg`, `page-image-3.jpg`, `extra1.jpg`, `extra2.jpg`, `extra3.jpg`
- **No Unsplash URLs** - All external image links removed

### Deployment Process

1. **Build**: `npm run build` (outputs to `dist/`)
2. **FTP Upload**: `lftp` to `zada136.webway.host:/public_html/`
3. **FTP Credentials**:
   - Server: `zada136.webway.host`
   - User: `fresh@fresh-people.co.za`
   - Pass: `${FTP_PASSWORD}` (stored in GitHub Actions secret `FTP_PASSWORD`; not committed)
   - Dir: `/public_html/`

### Scheduled Deployments

- **Cron Job ID**: `aa98f629c4d0`
- **Schedule**: Every Monday, Wednesday, Friday at 9:00 AM
- **Script**: `/home/yassin/.hermes/scripts/deploy-fresh-people.sh`
- **Action**: Builds and deploys to FTP automatically

## Blog Content Strategy

- **Frequency**: Automatically deploys Mon/Wed/Fri
- **Current Posts**: 6 posts covering staff tips, operations, tech updates, case studies
- **Content Themes**:
  - Staff dress code & grooming
  - Onboarding & training
  - Event execution & case studies
  - Technology integration (ICS calendars)
  - Business milestones & legacy

## Design Language

- **Colors**: Primary `#A4C71D` (green), Secondary `#0a0a0a` (near-black)
- **Font**: Ubuntu (body, headings, and logo wordmark)
- **Style**: X-style minimalism, Tailwind utility-first
- **Tone**: Professional, reliable, premium but accessible

## GitHub Actions

- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` branch
- **Steps**: Checkout → Setup Node.js → Install → Build → FTP Deploy
- **FTP Action**: `SamKirkland/FTP-Deploy-Action@v4.3.4`

## Maintenance Commands

```bash
# Build project
cd /home/yassin/repos/fresh-people-co-za && npm run build

# Deploy manually
./home/yassin/.hermes/scripts/deploy-fresh-people.sh

# Check scheduled jobs
hermes cron list

# View deployment log
cat /home/yassin/.hermes/logs/fresh-people-deploy.log
```

## Important Notes

- **NEVER mix** `fresh` (FPCC app) with `fresh-people.co.za` (website)
- **Always use local images** - No external URLs for blog content
- **FTP deploys are live immediately** - No GitHub Actions needed for quick fixes
- **GitHub push triggers Actions** - Use for version control and backup
- **Domain**: `fresh-people.co.za` (Cloudflare DNS managed)

## Next Steps

- Add more blog content (auto-deploys Mon/Wed/Fri)
- Monitor site uptime (cron job `aca8ad3cf268` checks every 10 min)
- Expand service detail pages with more content
- Add client testimonials to homepage
- Consider adding online booking form

---

_This soul.md captures the essence of Fresh People's digital presence - a premium, reliable, proudly South African talent agency serving Gauteng's events industry._
