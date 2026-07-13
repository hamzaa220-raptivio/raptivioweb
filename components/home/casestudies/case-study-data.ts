export type Industry =
  | "All"
  | "Mortgage"
  | "Hospitality"
  | "Healthcare"
  | "Finance"
  | "Consultancy"
  | "Education"
  | "Ecommerce"
  | "Restaurant"
  | "Professional Services";

export interface CaseStudy {
  id: string;
  company: string;
  industry: Exclude<Industry, "All">;
  country: string;

  metric: string;
  metricLabel: string;

  headline?: string;
  description: string;

  services: string[];

  platforms?: string[];

  results?: string[];

  stats?: {
    label: string;
    value: string;
  }[];

  image?: string;

  accent: "blue" | "yellow" | "green" | "purple";

  featured: boolean;

  pdf: string;
}

export const industries: Industry[] = [
  "All",
  "Mortgage",
  "Hospitality",
  "Healthcare",
  "Finance",
  "Consultancy",
  "Education",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "flexpoint",
    company: "FlexPoint Mortgage",
    industry: "Mortgage",
    country: "USA",

    metric: "14.65%",
    metricLabel: "Landing Page Conversion Rate",

    headline: "CVR improved from 2.84% to 14.65%",

    description:
      "A complete Google Ads restructuring, landing page optimisation and conversion tracking implementation that transformed campaign performance and dramatically improved lead quality.",

    services: [
      "Google Ads",
      "Landing Pages",
      "CRO",
      "Conversion Tracking",
    ],

    platforms: [
      "Google Ads",
      "Google Analytics",
      "Google Tag Manager",
    ],

    results: [
      "Conversion Rate increased from 2.84% to 14.65%",
      "Google Ads account completely restructured",
      "Landing pages redesigned for higher conversions",
      "Advanced conversion tracking implemented",
      "Lead quality improved significantly",
    ],

    stats: [
      {
        label: "CVR",
        value: "14.65%",
      },
      {
        label: "Platform",
        value: "Google Ads",
      },
      {
        label: "Market",
        value: "USA",
      },
    ],

    image: "/case-studies/flexpoint.webp",

    accent: "yellow",

    featured: true,

    pdf: "/case-studies/pdfs/flexpoint-mortgage-case-study.pdf",
  },

  {
    id: "zhouse",
    company: "Z House Coworking",
    industry: "Hospitality",
    country: "Pakistan",

    metric: "2,000+",
    metricLabel: "Qualified Leads",

    description:
      "Generated qualified enquiries through Google Ads, Meta Ads and conversion-focused landing pages.",

    services: [
      "Google Ads",
      "Meta Ads",
      "Landing Pages",
    ],

    accent: "blue",

    featured: false,

    pdf: "/case-studies/pdfs/z-house-coworking-case-study.pdf",
  },

  {
    id: "upzone",
    company: "Upzone Consulting",
    industry: "Consultancy",
    country: "UAE",

    metric: "700+",
    metricLabel: "Qualified B2B Leads",

    description:
      "Built a predictable lead generation system for UAE business setup services.",

    services: [
      "Google Ads",
      "Meta Ads",
    ],

    accent: "yellow",

    featured: false,

    pdf: "/case-studies/pdfs/upzone-consulting-case-study.pdf",
  },

  {
    id: "fatima",
    company: "Fatima Dental Hospital",
    industry: "Healthcare",
    country: "Pakistan",

    metric: "500+",
    metricLabel: "Patient Leads",

    description:
      "Performance campaigns driving appointments, awareness and long-term patient growth.",

    services: [
      "Google Ads",
      "Meta Ads",
    ],

    accent: "green",

    featured: false,

    pdf: "/case-studies/pdfs/fatima-dental-hospital-case-study.pdf",
  },

  {
    id: "kamauae",
    company: "Kama Capital UAE",
    industry: "Finance",
    country: "UAE",

    metric: "300+",
    metricLabel: "Seminar Registrations",

    description:
      "Generated registrations through LinkedIn and Meta advertising campaigns.",

    services: [
      "LinkedIn Ads",
      "Meta Ads",
    ],

    accent: "purple",

    featured: false,

    pdf: "/case-studies/pdfs/kama-capital-al-ain-case-study.pdf",
  },

  {
    id: "kamaksa",
    company: "Kama Capital KSA",
    industry: "Finance",
    country: "Saudi Arabia",

    metric: "300+",
    metricLabel: "Seminar Registrations",

    description:
      "Scaled registrations through multilingual financial advertising campaigns.",

    services: [
      "LinkedIn Ads",
      "Meta Ads",
    ],

    accent: "purple",

    featured: false,

    pdf: "/case-studies/pdfs/kama-capital-riyadh-case-study.pdf",
  },

  {
    id: "terteeb",
    company: "Terteeb",
    industry: "Education",
    country: "Pakistan",

    metric: "300+",
    metricLabel: "Leads",

    description:
      "Building trust and awareness through education-focused digital campaigns.",

    services: [
      "Meta Ads",
      "Content Strategy",
    ],

    stats: [
      {
        label: "Instagram Account Growth",
        value: "200%+",
      },
    ],

    accent: "green",

    featured: false,

    pdf: "",
  },
  {
    id: "reliable-accounting-website",
    company: "Reliable Accounting Solutions",
    industry: "Professional Services",
    country: "Memphis, Tennessee, USA",
    metric: "Modern",
    metricLabel: "Lead-Ready Website",
    headline: "A credible, responsive public website for a long-established CPA firm.",
    description: "Designed and developed a clean, professional WordPress website for a family-owned accounting firm with more than 20 years of experience in tax preparation, bookkeeping, payroll and financial consulting.",
    services: ["WordPress Development", "UI/UX Design", "Responsive Website", "Lead Generation"],
    platforms: ["WordPress", "Responsive Web"],
    results: ["Created a professional, service-focused public website.", "Improved the path from service discovery to client inquiry.", "Delivered a consistent experience across desktop, tablet and mobile."],
    accent: "blue",
    featured: false,
    pdf: "https://drive.google.com/file/d/16WtOmsasCDB76xISzO3nawD7qV6jDJlz/view",
  },
  {
    id: "reliable-accounting-app",
    company: "Reliable Accounting Solutions",
    industry: "Professional Services",
    country: "Memphis, Tennessee, USA",
    metric: "Custom",
    metricLabel: "Accounting Management App",
    headline: "A secure internal accounting system built around reporting, payroll and client operations.",
    description: "Built an enterprise-grade internal application to centralise financial data, client records, payroll, sales tax, P&L tracking, reporting and internal workflows for the CPA firm.",
    services: ["Blazor Frontend", ".NET Core 8", "SQL Server", "Financial Reporting", "Role-Based Access", "RingCentral Integration"],
    platforms: ["Blazor", ".NET Core 8", "SQL Server", "RingCentral"],
    results: ["Centralised financial, service and client information.", "Reduced manual workload through structured workflows and reporting.", "Enabled faster, more accurate reporting across monthly and yearly views.", "Created a scalable, responsive operating system for future growth."],
    accent: "blue",
    featured: false,
    pdf: "https://drive.google.com/file/d/1_C5BeMlHM5w6s8GPzyHt1ZqEUincTNEa/view",
  },
  {
    id: "silkoze",
    company: "Silkoze",
    industry: "Ecommerce",
    country: "Canada",
    metric: "Premium",
    metricLabel: "Ecommerce Experience",
    headline: "A premium ecommerce storefront for a Canadian silk pillowcase brand.",
    description: "Created a refined online shopping experience that makes Silkoze's silk pillowcases feel luxurious, trustworthy and easy to buy.",
    services: ["Ecommerce Website", "UX Design", "Product Storytelling", "Brand Messaging", "Responsive Development"],
    platforms: ["Ecommerce", "Responsive Web"],
    results: ["Created a premium, mobile-ready shopping experience.", "Made product benefits, gifting value and silk-care positioning easier to understand.", "Built clearer paths from product discovery to purchase.", "Strengthened the brand's digital credibility in the Canadian market."],
    accent: "blue",
    featured: false,
    pdf: "",
  },
  {
    id: "zeds-kitchen",
    company: "Zed's Kitchen & Cafe",
    industry: "Restaurant",
    country: "Pakistan",
    metric: "133%+",
    metricLabel: "Revenue Growth",
    headline: "Connecting web, paid media, content and influencer collaborations for restaurant growth.",
    description: "Built and managed a connected digital growth system for Zed's Kitchen & Cafe across website development, digital ads, content creation and influencer collaborations.",
    services: ["Website", "Digital Ads", "Content Creation", "Influencer Collaborations", "Growth Strategy"],
    platforms: ["Website", "Meta Ads", "Social Media"],
    results: ["Increased revenue from 300,000 to 700,000 — more than 133% growth.", "Created stronger online visibility across web and social channels.", "Built content that made the food, space and experience more discoverable.", "Connected advertising, content and social proof into one consistent growth motion."],
    accent: "yellow",
    featured: false,
    pdf: "",
  },
  {
    id: "integral-psychiatric-care",
    company: "Integral Psychiatric Care",
    industry: "Healthcare",
    country: "United States",
    metric: "Trusted",
    metricLabel: "Healthcare Website Experience",
    headline: "A calm, credible website experience for a psychiatric care practice.",
    description: "Designed a professional website that helps psychiatric care patients understand services, feel reassured and take the next step with confidence.",
    services: ["Website Design", "Healthcare UX", "Content Structure", "Responsive Development"],
    platforms: ["Responsive Web"],
    results: ["Created a calmer, more trusted digital presence for sensitive healthcare inquiries.", "Made care options and next steps easier for patients to understand.", "Improved clarity, accessibility and confidence across devices."],
    accent: "green",
    featured: false,
    pdf: "",
  },
];
