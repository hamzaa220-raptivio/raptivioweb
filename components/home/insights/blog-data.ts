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

    slug: "/intelligence/human-to-human-content-marketing",

    category: "Marketing",

    date: "June 2026",

    readTime: "6 min read",

    image: "/blogs/h2h.webp",
  },

  {
    id: "seo2026",

    title: "SEO in 2026: Why Real Experience Matters More Than Keywords",

    slug: "/intelligence/seo-real-experience-matters",

    category: "SEO",

    date: "June 2026",

    readTime: "7 min read",

    image: "/blogs/seo2026.webp",
  },

  {
    id: "web2026",

    title: "Web Development Trends for 2026: Faster, Simpler and More Personal",

    slug: "/intelligence/web-development-trends-2026",

    category: "Web Development",

    date: "June 2026",

    readTime: "8 min read",

    image: "/blogs/web2026.webp",
  },
];
