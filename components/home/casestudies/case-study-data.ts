export type Industry =
  | "All"
  | "Mortgage"
  | "Hospitality"
  | "Healthcare"
  | "Finance"
  | "Consultancy"
  | "Education";

export interface CaseStudy {
  id: string;

  company: string;

  industry: Exclude<Industry, "All">;

  country: string;

  metric: string;

  metricLabel: string;

  description: string;

  services: string[];

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
    description:
      "Restructured Google Ads campaigns and redesigned landing pages to dramatically improve conversion quality and performance.",
    services: [
      "Google Ads",
      "Landing Pages",
      "CRO",
    ],
    accent: "yellow",
    featured: true,
    pdf:
      "https://www.raptivio.com/wp-content/uploads/2025/11/FlexPoint-Mortgage-US-Case-Study.pdf",
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
    pdf:
      "https://www.raptivio.com/wp-content/uploads/2025/11/Z-House-Coworking-Karachi-Case-Study.pdf",
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
    pdf:
      "https://www.raptivio.com/wp-content/uploads/2025/11/Upzone-Consulting-Dubai-Case-Study.pdf",
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
    pdf:
      "https://www.raptivio.com/wp-content/uploads/2025/11/Fatima-Dental-Hospital-Karachi-Case-Study.pdf",
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
    pdf:
      "https://www.raptivio.com/wp-content/uploads/2025/11/Kama-Capital-Seminar-Al-Ain-Case-Study.pdf",
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
    pdf:
      "https://www.raptivio.com/wp-content/uploads/2025/11/Kama-Capital-Seminar-2-Riyadh-Case-Study.pdf",
  },

  {
    id: "terteeb",
    company: "Terteeb",
    industry: "Education",
    country: "Pakistan",
    metric: "Growth",
    metricLabel: "Brand Awareness",
    description:
      "Building trust and awareness through education-focused digital campaigns.",
    services: [
      "Meta Ads",
      "Content Strategy",
    ],
    accent: "green",
    featured: false,
    pdf: "",
  },
];
