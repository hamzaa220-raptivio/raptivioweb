export interface BlogPost {
  id: string;

  title: string;

  slug: string;

  category:
    | "AI"
    | "SEO"
    | "Web Development"
    | "Marketing";

  date: string;

  readTime: string;

  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "h2h",

    title: "The Shift Toward Human-to-Human (H2H) Content",

    slug: "https://www.raptivio.com/the-shift-toward-human-to-human-h2h-content/",

    category: "Marketing",

    date: "June 2026",

    readTime: "6 min read",

    image: "/blogs/h2h.webp",
  },

  {
    id: "seo2026",

    title: "SEO in 2026: Why Real Experience Matters More Than Keywords",

    slug: "https://www.raptivio.com/seo-in-2026-why-real-experience-matters-more-than-keywords/",

    category: "SEO",

    date: "June 2026",

    readTime: "7 min read",

    image: "/blogs/seo2026.webp",
  },

  {
    id: "web2026",

    title: "Web Development Trends for 2026: Faster, Simpler and More Personal",

    slug: "https://www.raptivio.com/web-development-trends-for-2026-faster-simpler-and-more-personal/",

    category: "Web Development",

    date: "June 2026",

    readTime: "8 min read",

    image: "/blogs/web2026.webp",
  },
];