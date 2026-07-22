import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Real Business Growth & Client Success Stories | Raptivio",
  description:
    "See how Raptivio delivers measurable growth across mortgage, healthcare, hospitality, finance and ecommerce through paid ads, SEO, AI and web development.",
  path: "/case-studies",
});

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return children;
}
