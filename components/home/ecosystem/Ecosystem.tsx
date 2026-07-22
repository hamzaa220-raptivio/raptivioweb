"use client";

import { useRef } from "react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Brain,
  Database,
  Globe,
  LayoutDashboard,
  LucideIcon,
  MonitorPlay,
  MousePointerClick,
  Palette,
  PenTool,
  Search,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type EcosystemSlide = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  items: Array<{
    title: string;
    detail?: string;
    icon: LucideIcon;
  }>;
  tags: string[];
  cta: string;
};

const slides: EcosystemSlide[] = [
  {
    eyebrow: "Performance Marketing",
    title: "Digital Advertising Ecosystem",
    description:
      "Build a predictable revenue engine through intelligent advertising systems that combine strategy, media buying, analytics, creative production and AI-driven optimisation.",
    icon: BarChart3,
    accent: "#F4B400",
    items: [
      { title: "Google Ads", icon: Search },
      { title: "Meta Ads", icon: MousePointerClick },
      { title: "Performance Scaling", icon: TrendingUp },
      { title: "Lead Generation Systems", icon: Target },
    ],
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads"],
    cta: "Explore Advertising",
  },
  {
    eyebrow: "Intelligent Operations",
    title: "AI Intelligence & Automation",
    description:
      "AI systems that automate conversations, workflows, customer journeys and business operations across your organization.",
    icon: Brain,
    accent: "#2A7BFF",
    items: [
      { title: "AI Agents", icon: Bot },
      { title: "Chatbots", icon: Sparkles },
      { title: "CRM", icon: Database },
      { title: "Automation", icon: Workflow },
    ],
    tags: ["GPT", "WhatsApp", "CRM", "Voice AI"],
    cta: "Explore AI",
  },
  {
    eyebrow: "Brand Intelligence",
    title: "Brand & Creative",
    description:
      "Build memorable brands through strategy, storytelling and creative experiences that inspire trust and drive engagement.",
    icon: Palette,
    accent: "#F4B400",
    items: [
      { title: "Brand Identity", icon: PenTool },
      { title: "Creative Design", icon: Palette },
      { title: "Video Production", icon: MonitorPlay },
      { title: "Content Strategy", icon: Sparkles },
    ],
    tags: ["UI / UX", "Social Media", "Motion", "Creative Strategy"],
    cta: "Explore Creative",
  },
  {
    eyebrow: "Digital Products",
    title: "Intelligent Web & Software Solutions",
    description:
      "From lightning-fast websites to enterprise software, SaaS platforms and AI-powered applications, we engineer digital products designed for performance, scalability and long-term business growth.",
    icon: Globe,
    accent: "#2A7BFF",
    items: [
      { title: "High-Performance Websites", detail: "Next.js · React", icon: Globe },
      { title: "Custom Web Apps", detail: "Node.js · APIs", icon: Boxes },
      { title: "Dashboards", detail: "CRM · Analytics", icon: LayoutDashboard },
      { title: "Mobile & AI Products", detail: "Apps · AI Agents", icon: Smartphone },
    ],
    tags: ["Next.js", "React", "Node.js", "AI APIs", "Cloud", "SaaS"],
    cta: "Explore Development",
  },
];

const orbitPositions = [
  "left-[8%] top-[13%]",
  "right-[4%] top-[28%]",
  "bottom-[19%] left-[1%]",
  "bottom-[8%] right-[10%]",
];

function EcosystemVisual({ slide }: { slide: EcosystemSlide }) {
  const CenterIcon = slide.icon;

  return (
    <div className="relative h-full min-h-[330px]">
      <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#071A63]/10" />
      <div
        className="absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: `${slide.accent}45` }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ backgroundColor: `${slide.accent}35` }}
      />
      <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#F4B400] to-[#071A63] text-white shadow-[0_24px_65px_rgba(7,26,99,.3)]">
        <CenterIcon size={36} />
      </div>

      {slide.items.map((item, index) => {
        const ItemIcon = item.icon;

        return (
          <div
            key={item.title}
            className={`absolute ${orbitPositions[index]} z-30 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-lg`}
          >
            <ItemIcon size={15} className="text-[#071A63]" />
            <span className="whitespace-nowrap text-xs font-semibold text-slate-700">
              {item.title}
            </span>
          </div>
        );
      })}

      <div
        className="absolute left-[25%] top-[18%] h-3 w-3 rounded-full shadow-[0_0_24px_currentColor]"
        style={{ backgroundColor: slide.accent, color: slide.accent }}
      />
      <div className="absolute bottom-[18%] right-[25%] h-3.5 w-3.5 rounded-full bg-[#071A63] shadow-[0_0_24px_#071A63]" />
    </div>
  );
}

function EcosystemPanel({
  slide,
  index,
}: {
  slide: EcosystemSlide;
  index: number;
}) {
  const MainIcon = slide.icon;

  return (
    <article className="relative h-full overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(15,23,42,.08)] sm:rounded-[34px]">
      <div
        className="absolute -left-20 -top-24 h-64 w-64 rounded-full blur-[115px]"
        style={{ backgroundColor: `${slide.accent}24` }}
      />
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#071A63]/10 blur-[120px]" />

      <div className="relative z-10 grid h-full lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex min-h-0 flex-col p-5 sm:p-7 lg:p-8 xl:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4B400] to-[#071A63] text-white shadow-lg sm:h-13 sm:w-13">
                <MainIcon size={23} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-slate-400 sm:text-xs">
                {slide.eyebrow}
              </p>
            </div>
            <span className="font-manrope text-sm font-bold tracking-[0.2em] text-[#071A63]/45">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-2xl font-manrope text-2xl font-bold leading-[1.04] tracking-[-0.035em] text-[#071A63] sm:text-3xl lg:mt-5 lg:text-4xl">
            {slide.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:mt-4">
            {slide.description}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5">
            {slide.items.map((item) => {
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-w-0 items-center gap-2.5 rounded-2xl border border-slate-100 bg-[#F8F9FC] px-3 py-2.5 sm:px-4 sm:py-3"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#071A63] shadow-sm">
                    <ItemIcon size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold leading-4 text-[#071A63] sm:text-sm">
                      {item.title}
                    </p>
                    {item.detail && (
                      <p className="mt-0.5 hidden text-[11px] text-slate-400 sm:block">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-auto flex items-end justify-between gap-4 pt-4 sm:pt-5">
            <div className="hidden flex-wrap gap-1.5 sm:flex">
              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold text-[#071A63]"
                  style={{ backgroundColor: `${slide.accent}18` }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="/services"
              className="ml-auto inline-flex flex-shrink-0 items-center gap-2 text-xs font-bold text-[#071A63] transition hover:gap-3 sm:text-sm"
            >
              {slide.cta}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative hidden border-l border-slate-100 bg-[#F8F9FC]/55 p-7 lg:block">
          <EcosystemVisual slide={slide} />
        </div>
      </div>
    </article>
  );
}

function StackedCard({
  progress,
  index,
  children,
  reduceMotion,
}: {
  progress: MotionValue<number>;
  index: number;
  children: React.ReactNode;
  reduceMotion: boolean | null;
}) {
  const segment = 1 / slides.length;
  const isLast = index === slides.length - 1;
  const enterEnd = index * segment;
  const enterStart = Math.max(0, enterEnd - 0.085);
  const exitEnd = Math.min(1, (index + 1) * segment);
  const exitStart = Math.max(0, exitEnd - 0.085);

  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [enterStart, enterEnd],
    index === 0 ? ["0%", "0%"] : ["108%", "0%"],
  );
  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [exitStart, exitEnd],
    isLast ? [1, 1] : [1, 0.965],
  );
  const opacity = useTransform(
    progress,
    isLast
      ? [0, 0.5, 1]
      : [exitStart, Math.max(exitStart, exitEnd - 0.02), exitEnd],
    isLast ? [1, 1, 1] : [1, 1, 0],
  );

  return (
    <motion.div
      style={
        reduceMotion
          ? undefined
          : {
              y,
              scale,
              opacity,
              zIndex: index + 10,
            }
      }
      className="absolute inset-0 origin-top motion-reduce:relative motion-reduce:mb-5"
    >
      {children}
    </motion.div>
  );
}

function ScrollProgressSegment({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const scaleX = useTransform(
    progress,
    [index * 0.25, Math.min(1, (index + 1) * 0.25)],
    [0, 1],
  );

  return (
    <div className="h-1.5 w-7 overflow-hidden rounded-full bg-slate-200">
      <motion.div
        className="h-full origin-left rounded-full bg-[#071A63]"
        style={{ scaleX }}
      />
    </div>
  );
}

export default function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      id="growth-services"
      className="relative h-[350svh] scroll-mt-32 bg-[#F8F9FC] motion-reduce:h-auto md:h-[390vh]"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden py-4 pt-16 motion-reduce:relative motion-reduce:h-auto motion-reduce:overflow-visible md:pt-20">
        <div
          id="solutions"
          className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 sm:px-6"
        >
          <SectionHeading />

          <div className="relative mt-5 h-[clamp(430px,59svh,520px)] overflow-hidden rounded-[28px] motion-reduce:h-auto motion-reduce:overflow-visible sm:rounded-[34px] md:mt-7 md:h-[clamp(445px,61vh,540px)]">
            {slides.map((slide, index) => (
              <StackedCard
                key={slide.title}
                progress={scrollYProgress}
                index={index}
                reduceMotion={reduceMotion}
              >
                <EcosystemPanel slide={slide} index={index} />
              </StackedCard>
            ))}
          </div>

          <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-xl motion-reduce:hidden">
            {slides.map((slide, index) => (
              <ScrollProgressSegment
                key={slide.title}
                progress={scrollYProgress}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
