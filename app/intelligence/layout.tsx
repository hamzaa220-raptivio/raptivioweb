import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI, Marketing, SEO & Web Insights | Raptivio",
  description:
    "Read practical Raptivio insights on AI automation, digital marketing, SEO, content strategy, web development, software engineering and business growth.",
  path: "/intelligence",
});

export default function IntelligenceLayout({ children }: { children: ReactNode }) {
  return children;
}
