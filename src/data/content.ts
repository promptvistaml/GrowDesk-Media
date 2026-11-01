export interface CaseStudy {
  id: string;
  client: string;
  tagline: string;
  category: string;
  statNumber: string;
  statLabel: string;
  description: string;
  bullets: string[];
  metricsContext?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cleaning-karigar",
    client: "Cleaning Karigar",
    tagline: "Franchise Model Built from Scratch",
    category: "Franchise Development & Branding",
    statNumber: "Multi-City",
    statLabel: "Expansion Trajectory",
    description: "We helped develop the franchise model from the ground up, alongside brand positioning and targeted franchise promotion. The business is now actively expanding across multiple cities in India.",
    bullets: [
      "Built the complete turnkey franchise model from scratch",
      "Developed high-conversion marketing and franchise-promotion acquisition strategies",
      "Supported comprehensive brand positioning and multi-city expansion efforts",
    ],
  },
  {
    id: "travelzone",
    client: "TravelZone",
    tagline: "Marketing for Daily Vehicle Bookings",
    category: "Lead Generation & Performance Ads",
    statNumber: "Daily Inquiries",
    statLabel: "Across Fleet Classes",
    description: "Continuous marketing activities driving qualified booking inquiries across TravelZone's fleet categories using targeted digital promotion, social video content, and conversion campaigns.",
    bullets: [
      "Multi-category fleet campaigns (sedan, SUV, luxury, tempo)",
      "High-intent marketing for local, airport transfers, outstation, and corporate cab services",
      "Content & lead-funnel campaigns hyper-focused on confirmed booking inquiries",
    ],
  },
  {
    id: "weshine-salon",
    client: "WeShine Beauty n Salon",
    tagline: "From Ground Level to Franchise Model",
    category: "Brand Building & Franchise Strategy",
    statNumber: "Ground-to-Scale",
    statLabel: "Franchise Transition",
    description: "Partnered with the brand from its grassroots stage, executing promotional marketing and architecting a franchise-based business model for regional footprint growth.",
    bullets: [
      "Full brand identity refinement and promotional launch campaigns",
      "Direct customer-acquisition marketing support driving chair occupancy",
      "Franchise model blueprint and long-term expansion roadmap",
    ],
  },
  {
    id: "sankalp-classes",
    client: "Sankalp Learning Classes",
    tagline: "600+ Student Contacts Collected",
    category: "Education Lead Generation",
    statNumber: "600+",
    statLabel: "Student Contacts Collected",
    description: "Targeted regional digital marketing campaigns gathered a high-intent database of 600+ student contact details, providing an actionable pipeline for follow-up and admission conversions.",
    bullets: [
      "600+ verified student contact details captured through digital funnels",
      "Built a structured student-lead database with parent qualification",
      "Supported ongoing enrollment drives and strategic follow-up sequences",
    ],
  },
  {
    id: "chandra-tiles",
    client: "Chandra Tiles",
    tagline: "Followers Doubled in One Month",
    category: "Social Media & Multi-Branch Visibility",
    statNumber: "2×",
    statLabel: "Followers in 30 Days",
    description: "Within one month of marketing, Chandra Tiles' social presence doubled, dramatically enhancing regional brand recall across their showroom network.",
    bullets: [
      "2× social media follower growth in 30 days with localized reach",
      "Elevated architectural and product digital visibility",
      "Omnichannel marketing support across all four showroom branches",
    ],
  },
  {
    id: "sanjivani-pharmacy",
    client: "Sanjivani Institute of Pharmacy",
    tagline: "45+ Verified Admissions",
    category: "Higher Education Enrollment",
    statNumber: "45+",
    statLabel: "Admissions in 2 Months",
    description: "Two months of focused enrollment marketing generated 45+ confirmed student admissions, establishing institutional authority in competitive regional education corridors.",
    bullets: [
      "45+ student admissions enrolled in 60 days",
      "Targeted student career counseling inquiries and verification calls",
      "Strengthened institutional visibility and course accreditation awareness",
    ],
  },
  {
    id: "biryani-and-co",
    client: "Biryani and Co.",
    tagline: "Reported 2× Sales Growth",
    category: "F&B Growth & Local Promotion",
    statNumber: "2×",
    statLabel: "Sales Volume Growth",
    description: "Transformed a local food cart into a bustling culinary landmark. Promotional campaigns and viral local buzz directly doubled operational batch sizes and daily revenue.",
    bullets: [
      "Handi preparation capacity scaled from 10 kg to 15 kg daily",
      "Reported daily sales increased from 10–12 to 22–25 servings/batches",
      "Reported sales growth of approximately 2× through hyper-local visibility",
    ],
  },
  {
    id: "gyanoday-school",
    client: "Gyanoday Vidya Sanskar School",
    tagline: "152 Admissions (3x Benchmark)",
    category: "K-12 School Admissions",
    statNumber: "152",
    statLabel: "Admissions (Goal: 50+)",
    description: "Surpassed the school's initial target of 50+ admissions by over 300%, achieving 152 verified student enrollments within a concentrated two-month marketing drive.",
    bullets: [
      "152 confirmed admissions delivered in two months",
      "Triple the client's original target benchmark (50+ admissions)",
      "Omnichannel parent-awareness campaigns highlighting faculty and facilities",
    ],
  },
];

export interface ServiceDetail {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  problemSolved: string;
  deliverables: string[];
  steps: string[];
  requirements: string[];
  reporting: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "brand-content-social",
    category: "Brand, Content & Social Media",
    title: "Brand Positioning, Reels & Social Management",
    tagline: "Transform passive scrollers into passionate advocates and loyal buyers.",
    problemSolved: "Inconsistent posting, low engagement, weak brand identity, and lack of visual prestige that prevents premium pricing.",
    deliverables: [
      "High-converting short-form video & viral Reels production",
      "Bespoke graphic design, typography, and cohesive brand identity",
      "End-to-end social media publishing, caption copywriting, and community management",
      "Brand messaging manuals and visual asset kits",
    ],
    steps: [
      "Brand Audit & Competitor Benchmarking",
      "Content Calendar & Script Blueprinting",
      "High-Fidelity Production & Asset Design",
      "Scheduled Publishing & Audience Nurturing",
    ],
    requirements: ["Brand assets, high-res photos/footage, approval on content calendars"],
    reporting: "Bi-weekly engagement reviews and monthly reach & follower growth audits.",
  },
  {
    slug: "paid-ads-growth",
    category: "Paid Ads & Growth",
    title: "Performance Marketing: Meta & Google Ads",
    tagline: "Precision-targeted paid campaigns engineered for direct ROI and customer acquisition.",
    problemSolved: "Wasted ad spend, unqualified leads, fluctuating customer acquisition costs, and poor campaign scaling.",
    deliverables: [
      "Full-funnel Meta Ads (Instagram & Facebook) and Google Search/Display Ads",
      "Conversion tracking, Pixel setup, and custom audience segmentation",
      "High-converting visual ad creatives, headline hooks, and copywriting",
      "Daily bid management and A/B ad split-testing",
    ],
    steps: [
      "Audience Research & Funnel Architecture",
      "Creative Production & Ad Copy Iterations",
      "Tracking Infrastructure & Campaign Launch",
      "Scale Profitable Ad Sets & Continuous Optimization",
    ],
    requirements: ["Ad Account access, daily ad budget, target audience criteria"],
    reporting: "Live dashboard tracking spend, cost-per-lead (CPL), and weekly return-on-ad-spend (ROAS) summaries.",
  },
  {
    slug: "website-ecommerce-seo",
    category: "Website, E-commerce & SEO",
    title: "Web Design, E-Commerce & Organic SEO",
    tagline: "High-speed digital storefronts built to rank at the top and convert visitors on arrival.",
    problemSolved: "Slow, outdated websites that repel visitors, poor mobile responsiveness, and zero Google search visibility.",
    deliverables: [
      "Custom responsive Next.js & modern CMS website design & development",
      "High-conversion e-commerce checkout and product catalog architecture",
      "Technical on-page & off-page Search Engine Optimization (SEO)",
      "Fast page load optimization (<1s) and mobile UX excellence",
    ],
    steps: [
      "Wireframing & Information Architecture",
      "UI/UX Visual Design & Approval",
      "Full-Stack Development & Speed Optimization",
      "SEO Indexing, Analytics Setup & Live Launch",
    ],
    requirements: ["Company profile, product list/pricing, domain registrar access"],
    reporting: "Search console ranking reports, organic traffic metrics, and conversion rate audits.",
  },
  {
    slug: "messaging-automation",
    category: "Messaging & Automation",
    title: "WhatsApp Marketing, AI Chatbots & Automation",
    tagline: "Instant response systems that engage, nurture, and qualify leads 24/7.",
    problemSolved: "Missed customer inquiries, delayed responses causing lost deals, and tedious manual follow-ups.",
    deliverables: [
      "Official WhatsApp Business Platform API setup and verification",
      "Automated lead capture, qualifying chatbot sequences, and broadcast campaigns",
      "Email & SMS drip marketing automations",
      "Google Business Profile optimization and local review generation engines",
    ],
    steps: [
      "Conversation Workflow & Logic Mapping",
      "API & Meta Platform Verification",
      "Chatbot & Automated Funnel Integration",
      "Testing Triggers, Fallbacks & Broadcast Launch",
    ],
    requirements: ["Dedicated business phone number, Facebook Business verification"],
    reporting: "Open rates, response rates, qualified lead captures, and delivery telemetry.",
  },
  {
    slug: "offline-consulting",
    category: "Offline & Consulting",
    title: "Strategic Consulting & Offline Marketing",
    tagline: "Ground-level authority combined with senior boardroom growth strategy.",
    problemSolved: "Unclear market positioning, lack of multi-city expansion models, and fragmented marketing across physical & digital channels.",
    deliverables: [
      "Franchise model architecture and regional expansion blueprints",
      "High-impact billboard, hoarding, print, and collateral design",
      "Fractional CMO strategic advisory and monthly growth steering",
      "Cross-channel unified marketing roadmaps",
    ],
    steps: [
      "Deep-Dive Business Diagnostics",
      "Expansion Strategy & Financial Projections",
      "Collateral Design & Print Vendor Coordination",
      "Quarterly Milestone Tracking & Execution Oversight",
    ],
    requirements: ["Executive stakeholder interviews, unit economics, target market geography"],
    reporting: "Monthly executive briefings, milestone progress sheets, and strategic KPI reviews.",
  },
];

export const WORK_PROCESS_STEPS = [
  { step: "01", name: "Understand", desc: "We study your business model, customer psychology, margins, and market friction points." },
  { step: "02", name: "Plan", desc: "We map out an actionable strategy with transparent benchmarks, milestones, and channel priority." },
  { step: "03", name: "Create", desc: "Our creative and technical team produces high-converting assets, funnels, copy, and campaigns." },
  { step: "04", name: "Launch", desc: "We deploy across target channels with strict tracking, pixel verification, and compliance checks." },
  { step: "05", name: "Optimise", desc: "Real-time iteration on creatives, audience bids, conversion rates, and message clarity." },
  { step: "06", name: "Report", desc: "Transparent, jargon-free performance reviews focused on verified business outcomes and sales." },
];

export const INDUSTRIES_SERVED = [
  { name: "Education & Schools", solution: "Student admission drives, parent awareness campaigns, and enrollment pipelines." },
  { name: "Franchise & Retail", solution: "Turnkey franchise models, investor deck marketing, and multi-city store launches." },
  { name: "Healthcare & Pharma", solution: "Institutional authority, patient trust campaigns, and student course enrollments." },
  { name: "Food & Beverage", solution: "Hyper-local footfall surges, viral food reels, and delivery order growth." },
  { name: "Real Estate & Ceramics", solution: "High-ticket buyer lead generation, showroom walk-ins, and B2B distributor networks." },
  { name: "Transport & Logistics", solution: "Continuous vehicle booking inquiries, fleet visibility, and route promotions." },
];

export const FAQS = [
  {
    q: "How does GrowDesk Media route inquiries to WhatsApp?",
    a: "Every lead submitted through our website inquiry forms is structured and dispatched immediately to our official WhatsApp Business desk. This allows instant follow-up with the prospect while storing the record securely in our team's admin management panel.",
  },
  {
    q: "How quickly do campaigns launch once we partner?",
    a: "Typically, initial audits, creative assets, and tracking infrastructure are ready within 5 to 7 business days following client onboarding and asset provision.",
  },
  {
    q: "Are the case study metrics verified?",
    a: "All figures—such as 152 school admissions, 2x sales growth, and 600+ student contacts—are based on actual reported campaign outcomes and business milestones provided by our partner clients.",
  },
  {
    q: "Can you help our business expand into a franchise model?",
    a: "Yes. As demonstrated with Cleaning Karigar and WeShine Salon, we specialize in building franchise marketing frameworks, investor pitch positioning, and multi-city expansion systems.",
  },
];

