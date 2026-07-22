import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Raptivio | Start Your Growth Project",
  description:
    "Contact Raptivio for AI automation, lead generation, paid ads, email campaigns, sales systems, high-performance websites, custom software and partnerships.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
