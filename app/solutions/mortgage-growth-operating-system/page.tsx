import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  Gauge,
  Landmark,
  Mail,
  Megaphone,
  MessageSquareText,
  PhoneCall,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import CTA from "@/components/home/cta/CTA";
import Navbar from "@/components/layout/Navbar";

const pageUrl =
  "https://www.raptivio.com/solutions/mortgage-growth-operating-system";

export const metadata: Metadata = {
  title: "Growth System for Mortgage Companies | Raptivio",
  description:
    "Discover Raptivio's growth system for mortgage companies: paid media, CRM, AI automation, borrower nurturing, sales operations and funded-loan reporting.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Growth System for Mortgage Companies | Raptivio",
    description:
      "Connect mortgage lead generation, CRM operations, borrower engagement, loan-officer workflows and funded-loan analytics in one growth system.",
    type: "website",
    url: pageUrl,
    siteName: "Raptivio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth System for Mortgage Companies | Raptivio",
    description:
      "One connected system for mortgage marketing, lead operations, borrower engagement, sales and reporting.",
  },
};

const journey = [
  {
    number: "01",
    title: "Acquire",
    description: "Generate and integrate high-intent borrower opportunities.",
    icon: Target,
  },
  {
    number: "02",
    title: "Route",
    description: "Map, score and distribute every lead to the right team.",
    icon: Route,
  },
  {
    number: "03",
    title: "Engage",
    description: "Coordinate calls, email, SMS and loan-officer follow-up.",
    icon: MessageSquareText,
  },
  {
    number: "04",
    title: "Measure",
    description: "Track the journey from ad spend to funded-loan performance.",
    icon: BarChart3,
  },
];

const pillars = [
  {
    eyebrow: "Demand generation",
    title: "Build a mortgage-specific acquisition engine",
    icon: Megaphone,
    description:
      "Campaigns and lead sources are planned around borrower intent, mortgage products, geography and the economics of your lending operation.",
    items: [
      "Google Search and Display campaigns",
      "Facebook and Instagram acquisition and retargeting",
      "LinkedIn for wholesale growth and broker recruitment",
      "YouTube and programmatic mid-funnel nurturing",
      "Live transfers, aged leads, internet leads and exclusive lead programs",
      "Lead-vendor evaluation and budget allocation",
    ],
  },
  {
    eyebrow: "Lead operations",
    title: "Turn scattered leads into a controlled sales pipeline",
    icon: Workflow,
    description:
      "Raptivio connects acquisition sources, CRMs, telephony and loan-officer workflows so opportunities are captured, prioritised and worked consistently.",
    items: [
      "Lead-field mapping with minimal data loss",
      "Rules-based, round-robin and weighted distribution",
      "Geography, product, loan amount and capacity routing",
      "Duplicate suppression and vendor API integrations",
      "Lead scoring and high-intent prioritisation",
      "Inbound and outbound IVR with disposition tracking",
    ],
  },
  {
    eyebrow: "Borrower engagement",
    title: "Create follow-up that matches borrower intent",
    icon: Mail,
    description:
      "Every source has a different intent profile. Engagement flows are designed for how that borrower entered the pipeline—not from one generic template.",
    items: [
      "Instant acknowledgement and loan-officer introduction",
      "Source-specific email and SMS cadences",
      "Rate, product and educational nurture sequences",
      "Application, approval and funded-loan milestones",
      "Dynamic CRM personalisation and tracked interactions",
      "Referral, review and retention follow-up",
    ],
  },
  {
    eyebrow: "Revenue intelligence",
    title: "Manage performance against funded-loan outcomes",
    icon: Gauge,
    description:
      "Dashboards connect marketing cost, speed-to-contact, loan-officer activity and pipeline movement to the metrics leadership actually needs.",
    items: [
      "Cost per lead by source, channel and campaign",
      "Contact rate and speed-to-contact visibility",
      "Lead-to-application and application-to-funded conversion",
      "Cost per funded loan and revenue attribution",
      "Loan-officer activity, pull-through and pipeline reporting",
      "Vendor quality, compliance and budget recommendations",
    ],
  },
];

const engagementSteps = [
  ["Lead received", "Instant email and SMS acknowledgement"],
  ["Loan-officer introduction", "Personal introduction with a follow-up task"],
  ["Value delivery", "Relevant rate, product or educational information"],
  ["Longer nurture", "Market updates, rate alerts and re-engagement"],
  ["Application and approval", "Confirmation, documents and next-step guidance"],
  ["Funded", "Thank-you, referral and review request"],
];

const integrationGroups = [
  {
    title: "Mortgage CRM & Sales",
    items: [
      "Salesforce",
      "Insellerate",
      "Lodasoft",
      "Velocify",
      "Bonzo",
      "MeridianLink",
    ],
  },
  {
    title: "Telephony & Call Operations",
    items: [
      "Five9",
      "CallRail",
      "Predictive dialling",
      "Power dialling",
      "Inbound and outbound IVR",
    ],
  },
  {
    title: "Analytics & Business Intelligence",
    items: [
      "CRM-native reporting",
      "Google Looker Studio",
      "Power BI",
      "Tableau",
      "Executive and operational views",
    ],
  },
];

export default function MortgageGrowthOperatingSystemPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Growth System for Mortgage Companies",
    description: metadata.description,
    provider: {
      "@type": "Organization",
      name: "Raptivio",
      url: "https://www.raptivio.com",
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Mortgage companies and wholesale lenders",
    },
    url: pageUrl,
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[#F8F9FC]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
          }}
        />

        <section className="relative px-6 pb-20 pt-40 md:pb-28 md:pt-48">
          <div className="absolute left-1/2 top-16 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[150px]" />
          <div className="absolute -left-28 top-80 h-80 w-80 rounded-full bg-[#FFCA00]/15 blur-[120px]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-5 py-2 shadow-sm backdrop-blur-xl">
                <Landmark size={16} className="text-[#071A63]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#071A63]">
                  Built for mortgage companies
                </span>
              </div>
              <h1 className="mt-8 font-manrope text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-[#071A63] md:text-7xl">
                From first click to funded loan.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
                The Growth System for Mortgage Companies connects marketing, lead
                acquisition, CRM operations, AI-assisted automation, borrower
                engagement, sales execution and reporting in one measurable
                growth infrastructure.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#071A63] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#102d8f]"
                >
                  Build Your Mortgage Growth System <ArrowRight size={19} />
                </a>
                <a
                  href="#system"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-[#071A63] shadow-sm transition hover:-translate-y-1 hover:border-[#FFCA00]"
                >
                  Explore the System
                </a>
              </div>
            </div>

            <div className="relative rounded-[36px] bg-[#071A63] p-6 text-white shadow-2xl md:p-8">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2A7BFF]/25 blur-[90px]" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFCA00]">
                  One connected system
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em]">
                  Marketing does not stop at the lead form.
                </h2>
                <p className="mt-4 leading-7 text-white/65">
                  The system follows every opportunity through routing,
                  engagement, loan-officer action, application and funding.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {journey.map(({ title, icon: Icon }) => (
                    <div
                      key={title}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFCA00] text-[#071A63]">
                        <Icon size={19} />
                      </div>
                      <span className="font-semibold">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journey.map(({ number, title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071A63] text-white">
                    <Icon size={22} />
                  </div>
                  <span className="text-sm font-bold text-slate-300">{number}</span>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-[#071A63]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="system" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFCA00]">
                Complete mortgage growth infrastructure
              </p>
              <h2 className="mt-5 font-manrope text-4xl font-bold tracking-[-0.04em] text-[#071A63] md:text-6xl">
                Four systems working as one revenue engine.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Each layer is configured around your products, lead sources,
                sales team, technology stack and funded-loan economics.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {pillars.map(({ eyebrow, title, icon: Icon, description, items }) => (
                <article
                  key={title}
                  className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-sm md:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFCA00] to-[#071A63] text-white shadow-lg">
                    <Icon size={25} />
                  </div>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.27em] text-[#FFCA00]">
                    {eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold leading-tight text-[#071A63]">
                    {title}
                  </h3>
                  <p className="mt-5 leading-8 text-slate-600">{description}</p>
                  <div className="mt-7 grid gap-3">
                    {items.map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-[#071A63]"
                        />
                        <span className="text-sm font-medium leading-6 text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl rounded-[38px] bg-[#071A63] p-7 text-white shadow-2xl md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <MessageSquareText size={38} className="text-[#FFCA00]" />
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.3em] text-[#FFCA00]">
                  Borrower lifecycle
                </p>
                <h2 className="mt-4 font-manrope text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                  The right message at the right stage.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  Google searchers, social leads, live transfers and aged leads
                  behave differently. The system gives each source an
                  appropriate speed, message and nurture path.
                </p>
              </div>

              <div className="grid gap-3">
                {engagementSteps.map(([stage, action], index) => (
                  <div
                    key={stage}
                    className="grid gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 sm:grid-cols-[42px_0.7fr_1.3fr] sm:items-center"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFCA00] text-sm font-bold text-[#071A63]">
                      {index + 1}
                    </span>
                    <strong>{stage}</strong>
                    <span className="text-sm leading-6 text-white/60">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFCA00]">
                  Technology and intelligence
                </p>
                <h2 className="mt-5 font-manrope text-4xl font-bold tracking-[-0.04em] text-[#071A63] md:text-6xl">
                  Built around the tools your mortgage team already uses.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Raptivio configures the operating layer across your existing
                  CRM, telephony, lead vendors and reporting tools. The goal is
                  a connected system—not another disconnected platform.
                </p>

                <div className="mt-8 rounded-[28px] border border-[#FFCA00]/30 bg-[#FFCA00]/10 p-6">
                  <div className="flex items-center gap-3 text-[#071A63]">
                    <Bot size={24} />
                    <h3 className="text-xl font-bold">Where AI fits</h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">
                    AI can assist with lead prioritisation, call-quality review,
                    borrower-intent signals, content personalisation, workflow
                    recommendations and performance insight—while your team
                    retains control of lending decisions and customer contact.
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {integrationGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 text-[#071A63]">
                      <Database size={22} />
                      <h3 className="text-xl font-bold">{group.title}</h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#071A63]/8 px-4 py-2 text-sm font-semibold text-[#071A63]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <article className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <ShieldCheck size={34} className="text-[#071A63]" />
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.28em] text-[#FFCA00]">
                Compliance-aware by design
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#071A63]">
                Growth workflows built for a regulated customer journey.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Opt-in and opt-out handling, DNC controls, call recording,
                source attribution and approval workflows are designed into the
                operating model. Messaging can be structured around TCPA,
                CAN-SPAM and applicable mortgage communication requirements,
                with final compliance review retained by your legal team.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-[34px] bg-[#071A63] p-7 text-white shadow-xl md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFCA00]/15 blur-[100px]" />
              <div className="relative">
                <Sparkles size={34} className="text-[#FFCA00]" />
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.28em] text-[#FFCA00]">
                  Relevant mortgage experience
                </p>
                <h2 className="mt-4 text-3xl font-bold">
                  Proven performance thinking for mortgage acquisition.
                </h2>
                <p className="mt-5 leading-8 text-white/65">
                  In Raptivio&apos;s work with FlexPoint Mortgage, a restructured
                  Google Ads and landing-page approach improved landing-page
                  conversion from 2.84% to 14.65%. That same focus on measurable
                  conversion and lead quality informs this wider operating system.
                </p>
                <a
                  href="/case-studies"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#FFCA00]"
                >
                  Explore mortgage results <ArrowRight size={18} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <PhoneCall size={38} className="mx-auto text-[#071A63]" />
            <h2 className="mt-6 font-manrope text-4xl font-bold tracking-[-0.04em] text-[#071A63] md:text-6xl">
              Ready to connect marketing to funded-loan growth?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              We will map your current lead sources, CRM, sales process,
              engagement gaps and reporting needs—then design the system around
              your lending operation.
            </p>
            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#071A63] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#102d8f]"
            >
              Talk to Raptivio <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
