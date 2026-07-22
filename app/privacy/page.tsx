import { createPageMetadata } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Raptivio",
  description:
    "Read Raptivio's privacy policy to understand how we collect, use and protect information submitted through our website, contact forms and email updates.",
  path: "/privacy",
});

export default function PrivacyPage() { return <><Navbar /><main className="mx-auto min-h-screen max-w-4xl px-6 pb-24 pt-40 text-slate-700"><p className="text-sm font-bold uppercase tracking-[0.28em] text-[#FFCA00]">Legal</p><h1 className="mt-4 font-manrope text-5xl font-bold tracking-[-0.04em] text-[#071A63]">Privacy Policy</h1><p className="mt-8 text-lg leading-8">Raptivio respects your privacy. We use information you submit through our website to respond to requests, provide services, and improve our website and communications.</p><h2 className="mt-10 text-2xl font-bold text-[#071A63]">Information we collect</h2><p className="mt-3 leading-7">This may include your name, email address, phone number, company details and the information you choose to share in contact forms.</p><h2 className="mt-8 text-2xl font-bold text-[#071A63]">How we use it</h2><p className="mt-3 leading-7">We use this information to contact you about your request, deliver relevant services, and maintain secure business records. We do not sell personal information.</p><h2 className="mt-8 text-2xl font-bold text-[#071A63]">Email updates</h2><p className="mt-3 leading-7">If you choose to join Raptivio Intelligence, we use your email address to send occasional insights about AI, growth, automation and software. You can unsubscribe from these emails at any time.</p><h2 className="mt-8 text-2xl font-bold text-[#071A63]">Contact</h2><p className="mt-3 leading-7">For privacy questions, please contact Raptivio through our contact page.</p></main></>; }
