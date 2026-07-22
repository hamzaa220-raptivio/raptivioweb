import { createPageMetadata } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";

export const metadata = createPageMetadata({
  title: "Terms of Use | Raptivio",
  description:
    "Review the terms governing use of the Raptivio website, digital content, third-party links, service information and related communications.",
  path: "/terms",
});

export default function TermsPage() { return <><Navbar /><main className="mx-auto min-h-screen max-w-4xl px-6 pb-24 pt-40 text-slate-700"><p className="text-sm font-bold uppercase tracking-[0.28em] text-[#FFCA00]">Legal</p><h1 className="mt-4 font-manrope text-5xl font-bold tracking-[-0.04em] text-[#071A63]">Terms of Use</h1><p className="mt-8 text-lg leading-8">By using the Raptivio website, you agree to use it lawfully and in accordance with these terms.</p><h2 className="mt-10 text-2xl font-bold text-[#071A63]">Website content</h2><p className="mt-3 leading-7">Website content is provided for general information. Service scopes, timelines and commercial terms are confirmed separately in a written agreement.</p><h2 className="mt-8 text-2xl font-bold text-[#071A63]">Third-party links</h2><p className="mt-3 leading-7">Links to third-party sites are provided for convenience. Raptivio is not responsible for their content or privacy practices.</p><h2 className="mt-8 text-2xl font-bold text-[#071A63]">Contact</h2><p className="mt-3 leading-7">For questions about these terms, please contact Raptivio through our contact page.</p></main></>; }
