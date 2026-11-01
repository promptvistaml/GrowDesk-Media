export interface LeadEnquiry {
  id: string;
  fullName: string;
  contactMethod: string; // phone or email
  businessName: string;
  serviceCategory: string;
  message?: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Won' | 'Lost';
  notes?: string;
  createdAt: string;
}

// In-memory persistent array during runtime with initial representative data
export const IN_MEMORY_LEADS: LeadEnquiry[] = [
  {
    id: 'GD-1092',
    fullName: 'Rahul Sharma',
    contactMethod: '+91 98765 43210',
    businessName: 'Apex Health Institute',
    serviceCategory: 'Paid Ads & Growth',
    message: 'Looking to start admission lead generation campaigns for our upcoming batch.',
    status: 'New',
    notes: 'Requested a WhatsApp call back regarding Google Ads & Facebook funnels.',
    createdAt: '2026-10-31 18:30',
  },
  {
    id: 'GD-1091',
    fullName: 'Ananya Verma',
    contactMethod: 'ananya@zenithcafe.in',
    businessName: 'Zenith Bistro & Lounge',
    serviceCategory: 'Brand, Content & Social Media',
    message: 'Need video reels and local restaurant promotions to double footfalls.',
    status: 'Contacted',
    notes: 'Sent initial reel package deck on WhatsApp.',
    createdAt: '2026-10-31 15:12',
  },
  {
    id: 'GD-1090',
    fullName: 'Vikram Joshi',
    contactMethod: '+91 94120 88291',
    businessName: 'Joshi Agro Logistics',
    serviceCategory: 'Messaging & Automation',
    message: 'Interested in WhatsApp Business Platform automation for bookings.',
    status: 'Qualified',
    notes: 'Qualified client. Needs official Meta API verification.',
    createdAt: '2026-10-30 11:45',
  },
  {
    id: 'GD-1089',
    fullName: 'Kunal Singhania',
    contactMethod: '+91 99887 76655',
    businessName: 'Singhania Tiles & Bath',
    serviceCategory: 'Offline & Consulting',
    message: 'Seeking franchise expansion plan across 5 cities in North India.',
    status: 'Proposal Sent',
    notes: 'Sent franchise modeling proposal following Cleaning Karigar framework.',
    createdAt: '2026-10-29 09:20',
  },
];

