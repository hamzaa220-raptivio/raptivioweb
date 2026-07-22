import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import NewsletterSignup from "./NewsletterSignup";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Growth Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/#insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Accounting Operations System",
        href: "/solutions#solutions",
      },
      {
        label: "Human Resource Management System",
        href: "/solutions#solutions",
      },
      {
        label: "Salesforce Customer Intelligence Platform",
        href: "/solutions#solutions",
      },
      { label: "B2B Growth System", href: "/solutions#solutions" },
      {
        label: "Growth System for Mortgage Companies",
        href: "/solutions/mortgage-growth-operating-system",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/raptivio/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/raptivio/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Raptivio",
    icon: FaFacebookF,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@raptivio",
    icon: FaTiktok,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white px-6 py-16 text-[#111318]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Experience intelligent growth
            </h2>

            <div className="mt-8 grid gap-8 sm:grid-cols-[minmax(250px,0.85fr)_minmax(320px,1.15fr)] sm:items-start sm:gap-0">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Follow us on social media
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Raptivio on ${label}`}
                      title={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#071A63] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#071A63]/30 hover:bg-[#071A63] hover:text-white hover:shadow-lg"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8 sm:border-l sm:border-t-0 sm:pl-9 sm:pt-0">
                <NewsletterSignup />
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {footerLinks.map((group) => (
              <div
                key={group.title}
                className={group.title === "Company" ? "lg:pl-6" : undefined}
              >
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {group.title}
                </h3>

                <div className="grid gap-4">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium transition hover:text-[#071A63]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <Image
            src="/logos/raptivio-logo.png"
            alt="Raptivio"
            width={1800}
            height={360}
            className="h-auto w-full max-w-[1500px] object-contain grayscale brightness-50 opacity-90"
            priority
          />
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            <a href="/privacy" className="transition hover:text-[#071A63]">
              Privacy
            </a>
            <a href="/terms" className="transition hover:text-[#071A63]">
              Terms
            </a>
          </div>

          <p>© 2026 Raptivio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
