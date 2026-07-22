export type IntelligenceAccent = "blue" | "yellow" | "purple";

export interface IntelligenceSection {
  heading: string;
  body: string;
}

export interface IntelligenceArticle {
  id: string;
  slug: string;
  category: "Marketing" | "SEO" | "Web Development";
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  readTime: string;
  publishedAt: string;
  displayDate: string;
  summary: string;
  accent: IntelligenceAccent;
  sections: IntelligenceSection[];
  takeaways: string[];
  pullQuote: string;
  businessImpact: string;
}

export const intelligenceArticles: IntelligenceArticle[] = [
  {
    id: "h2h",
    slug: "human-to-human-content-marketing",
    category: "Marketing",
    title: "The Shift Toward Human-to-Human (H2H) Content",
    seoTitle: "Human-to-Human Content Marketing in 2026 | Raptivio",
    seoDescription:
      "Learn why human-to-human content marketing builds trust, engagement and brand authority, and how real stories outperform generic AI-sounding content in 2026.",
    eyebrow: "Brand Intelligence",
    readTime: "6 min read",
    publishedAt: "2026-06-05",
    displayDate: "June 5, 2026",
    summary:
      "Why content that feels human, specific and useful is becoming more valuable than generic brand posting.",
    accent: "yellow",
    takeaways: [
      "Write for people, not algorithms alone.",
      "Use real stories, specific examples and clear language.",
      "Connect every piece of content to genuine customer or business value.",
    ],
    pullQuote:
      "Content is no longer about sounding smart. It is about sounding real, useful and worth trusting.",
    businessImpact:
      "Brands that communicate like people can build trust faster, create stronger conversations and turn attention into longer-term customer relationships.",
    sections: [
      {
        heading: "The shift from more content to better content",
        body:
          "For years, brands focused on producing more content, not better content. Articles were written to please algorithms, not people. But as we move into 2026, the biggest change in content marketing is the shift toward Human-to-Human communication. This is no longer a buzzword; it is becoming the new normal. People are tired of robotic content. They want brands that sound real, honest and easy to understand. They want stories, not scripts, and messages that feel like they are coming from someone who understands them rather than a machine trying to rank on Google.",
      },
      {
        heading: "Why the platforms are rewarding it",
        body:
          "The big platforms have noticed the same change. Google is rewarding content that feels natural and helpful. Social platforms boost posts that start real conversations. Even email marketing is moving toward simple, friendly writing. The days of stuffing keywords and using complex marketing terms are fading fast. Brands that win attention will speak clearly and connect emotionally. They will understand what their audience feels, not just what they search for, and create content that sounds like it was written by a real person who cares.",
      },
      {
        heading: "Trust is the competitive advantage",
        body:
          "H2H content builds trust faster. When people feel understood, they engage more, share more and return more often. It is no longer enough to capture attention; you have to keep it by being genuine. This does not mean ignoring data or strategy. It means using data to understand people, not trick them. Numbers matter, but emotions matter too. In 2026 and beyond, the fastest-growing brands will write like they talk, keep things simple and make their audience feel valued. If you want H2H content for your brand, connect with Raptivio's experts to get started.",
      },
    ],
  },
  {
    id: "seo",
    slug: "seo-real-experience-matters",
    category: "SEO",
    title: "SEO in 2026: Why Real Experience Matters More Than Keywords",
    seoTitle: "SEO in 2026: Why Real Experience Outranks Keywords | Raptivio",
    seoDescription:
      "Learn how first-hand experience, helpful content, technical performance and brand credibility shape modern SEO rankings and sustainable organic growth.",
    eyebrow: "Search Intelligence",
    readTime: "7 min read",
    publishedAt: "2026-06-12",
    displayDate: "June 12, 2026",
    summary:
      "Search is moving toward credibility, usefulness and experience. Keywords still matter, but they are no longer enough.",
    accent: "blue",
    takeaways: [
      "Share evidence, first-hand examples and measurable outcomes.",
      "Improve speed, navigation and the complete page experience.",
      "Build brand reputation alongside search-focused content.",
    ],
    pullQuote:
      "The strongest SEO content does not repeat what is already online. It adds proof that only real experience can provide.",
    businessImpact:
      "Businesses that document genuine expertise can earn visibility and trust at the same time, reducing their dependence on generic high-volume content.",
    sections: [
      {
        heading: "Proof has replaced theory",
        body:
          "SEO has changed more in the last two years than it did in the previous ten. As we move into 2026, the biggest shift is Google's focus on real experience. Search engines want content backed by proof, not theory. They want to rank brands that actually know what they are talking about. The old approach of writing long articles filled with keywords is losing power. Instead, Google wants useful, original content written by people with real knowledge of the topic. Experience-based SEO is now at the centre of ranking.",
      },
      {
        heading: "What experience-based SEO looks like",
        body:
          "Brands must move away from generic content. Instead of repeating information that already exists online, search engines want creators to share insights, examples, results and real stories. This content helps users more, and Google knows it. User behaviour also plays a bigger role. If people stay longer on a page, read the content or click deeper into a site, Google sees the brand as more trustworthy. Helpful content keeps people engaged and improves rankings without tricks.",
      },
      {
        heading: "The complete page experience",
        body:
          "SEO in 2026 includes a better on-page experience. Fast loading, clean layouts, easy navigation and simple language all play a major role. Great content cannot rank effectively if the page is slow or confusing. Brand reputation also matters: reviews, mentions and references help visibility. The brands that will win combine expertise with real value. Build helpful, honest content backed by experience, then support it with fast pages, strong service content and credible case studies.",
      },
    ],
  },
  {
    id: "web",
    slug: "web-development-trends-2026",
    category: "Web Development",
    title: "Web Development Trends for 2026: Faster, Simpler and More Personal",
    seoTitle: "Web Development Trends 2026: Speed, Simplicity & AI | Raptivio",
    seoDescription:
      "Explore the web development trends shaping 2026, including faster websites, mobile-first UX, AI personalisation, cleaner design and connected business systems.",
    eyebrow: "Digital Product",
    readTime: "8 min read",
    publishedAt: "2026-06-19",
    displayDate: "June 19, 2026",
    summary:
      "The next generation of websites will feel faster, cleaner and more connected to business systems.",
    accent: "purple",
    takeaways: [
      "Treat fast loading as the starting point, not an optional upgrade.",
      "Design mobile-first journeys with fewer distractions.",
      "Use personalisation only where it makes the experience genuinely more useful.",
    ],
    pullQuote:
      "The best modern websites do less on screen while doing more for the business behind the scenes.",
    businessImpact:
      "A faster and simpler website can improve trust and conversion today, while connected data and automation create a stronger operating foundation for future growth.",
    sections: [
      {
        heading: "Speed is now the starting point",
        body:
          "Web development in 2026 is about speed, simplicity and personalisation. People no longer wait for a slow website to load. They do not want heavy animations or complicated layouts; they want clean, fast experiences that work on every device. The first major trend is ultra-fast loading. Google and other platforms push fast websites higher, and users trust them more. Developers are focusing on lighter code, optimised images and fewer scripts. The goal is simple: load instantly.",
      },
      {
        heading: "Personal, simple and mobile-first",
        body:
          "Another trend is AI-powered personalisation. Websites can adjust in real time based on what each visitor needs: smart recommendations, personalised messages or journeys that change based on behaviour. At the same time, simplicity is becoming more important. Websites with too many sections, animations or effects feel outdated. Clean layouts with short text, simple flows and easy navigation are taking over. Mobile-first design remains essential because most people browse on phones, and faster mobile pages often lead to higher conversions and better satisfaction.",
      },
      {
        heading: "Security and storytelling",
        body:
          "Security is another big focus. With more data being collected, secure forms, updated CMS systems and strong hosting are baseline requirements, not upgrades. Finally, brands are investing more in storytelling through design. Websites are no longer brochures; they need to guide users, explain benefits simply and make visitors feel something. Clear visuals, human-centred writing and honest messaging all play a role. The future belongs to brands that combine speed, simplicity and real human connection.",
      },
    ],
  },
];

export function getIntelligenceArticle(slugOrId: string) {
  return intelligenceArticles.find(
    (article) => article.slug === slugOrId || article.id === slugOrId,
  );
}
