export interface Testimonial {
  id: string;

  company: string;

  person: string;

  title: string;

  country: string;

  logo: string;

  rating: number;

  quote: string;

  services: string[];

  accent: "blue" | "yellow" | "green";
}

export const testimonials: Testimonial[] = [
  {
    id: "flexpoint",

    company: "FlexPoint Mortgage",

    person: "Dennis",

    title: "Vice President",

    country: "USA",

    logo: "/logos/flexpoint.svg",

    rating: 5,

    quote:
      "The performance jump was clear. Better landing pages and structured campaigns made a huge difference. Our Google leads are now much more qualified, and our sales team can respond instantly through the CRM.",

    services: [
      "Google Ads",
      "Landing Pages",
      "Conversion Tracking",
    ],

    accent: "yellow",
  },

  {
    id: "zhouse",

    company: "Z House Coworking",

    person: "Zarak Khan",

    title: "CEO",

    country: "Pakistan",

    logo: "/logos/zhouse.svg",

    rating: 5,

    quote:
      "With Raptivio, our campaigns finally started converting consistently. The team genuinely understood our business, and our growth this year is strongly tied to their work.",

    services: [
      "Meta Ads",
      "Google Ads",
      "CRM Automation",
    ],

    accent: "blue",
  },

  {
    id: "upzone",

    company: "Upzone Consulting",

    person: "Muhammad",

    title: "Managing Director",

    country: "UAE",

    logo: "/logos/upzone.svg",

    rating: 5,

    quote:
      "The landing page and Google Ads structure made a significant difference. We started receiving much more relevant leads, especially for Golden Visa enquiries. The results were clearly visible month after month.",

    services: [
      "Google Ads",
      "Landing Pages",
      "Lead Generation",
    ],

    accent: "green",
  },
];