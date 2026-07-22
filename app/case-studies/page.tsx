"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, BarChart3, Building2, CheckCircle2, ChevronDown, Globe2, Layers3, LineChart, Users, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/home/cta/CTA";
import { caseStudies, Industry } from "@/components/home/casestudies/case-study-data";

const preferredCaseOrder = ["flexpoint", "zhouse", "upzone", "quick-quartz"];
const preferredCasePositions = new Map(preferredCaseOrder.map((id, index) => [id, index]));
const orderedCaseStudies = [...caseStudies].sort((a, b) => {
  const aPosition = preferredCasePositions.get(a.id) ?? preferredCaseOrder.length + caseStudies.indexOf(a);
  const bPosition = preferredCasePositions.get(b.id) ?? preferredCaseOrder.length + caseStudies.indexOf(b);
  return aPosition - bPosition;
});
const industries: Industry[] = ["All", ...Array.from(new Set(caseStudies.map((item) => item.industry)))];
const accents = {
  blue: { badge: "bg-[#071A63] text-white", border: "hover:border-[#071A63]/30", glow: "bg-[#071A63]/15" },
  yellow: { badge: "bg-[#FFCA00] text-[#071A63]", border: "hover:border-[#FFCA00]/50", glow: "bg-[#FFCA00]/25" },
  green: { badge: "bg-emerald-500 text-white", border: "hover:border-emerald-400/40", glow: "bg-emerald-400/15" },
  purple: { badge: "bg-violet-600 text-white", border: "hover:border-violet-400/40", glow: "bg-violet-500/15" },
};

function CaseStudiesContent() {
  const params = useSearchParams();
  const initialCase = orderedCaseStudies.find((item) => item.id === params.get("case"));

  const [industry, setIndustry] = useState<Industry>(initialCase?.industry ?? "All");
  const [activeId, setActiveId] = useState(initialCase?.id ?? orderedCaseStudies[0]?.id ?? "");
  const mobileSelectorRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const filteredCases = useMemo(() => orderedCaseStudies.filter((item) => industry === "All" || item.industry === industry), [industry]);
  const selected = filteredCases.find((item) => item.id === activeId) ?? filteredCases[0];

  function handleCaseSelect(item: (typeof caseStudies)[number]) {
    setActiveId(item.id);

    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function showMobileSelector() {
    mobileSelectorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return <><Navbar /><main className="overflow-hidden bg-[#F8F9FC]">
    <section className="relative px-6 pb-16 pt-40 md:pb-24 md:pt-44">
      <div className="absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-200/25 blur-[130px]" />
      <div className="absolute -left-24 top-72 h-80 w-80 rounded-full bg-[#FFCA00]/15 blur-[110px]" />
      <div className="absolute -right-24 top-64 h-80 w-80 rounded-full bg-[#071A63]/10 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl"><div className="mx-auto max-w-5xl text-center"><div className="mx-auto inline-flex rounded-full border border-slate-200 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-xl"><span className="text-xs font-bold uppercase tracking-[0.32em] text-[#071A63]">Raptivio Case Studies</span></div><h1 className="mt-8 font-manrope text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-[#071A63] md:text-7xl">Real growth systems across multiple industries.</h1><p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">Explore how Raptivio helps ambitious businesses generate leads, improve conversion, build better digital products and connect marketing with operations.</p><div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#071A63] px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#102d8f]">Get Started Today <ArrowRight size={20} /></a><a href="#case-library" className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-[#071A63] shadow-sm transition hover:-translate-y-1 hover:border-[#FFCA00]">Browse Work <ChevronDown size={20} /></a></div></div>
      <div className="mt-16 grid gap-4 md:grid-cols-4">{[["Qualified Leads", "3,500+", Users], ["Best CVR", "14.65%", LineChart], ["Industries", "9+", Building2], ["Growth Services", "Ads + AI + Web", Layers3]].map(([label, value, Icon]) => { const MetricIcon = Icon as typeof Users; return <div key={label as string} className="rounded-[26px] border border-slate-200 bg-white/85 p-6 text-center shadow-sm backdrop-blur-xl"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071A63] text-white"><MetricIcon size={22} /></div><p className="mt-4 text-2xl font-bold text-[#071A63]">{value as string}</p><p className="mt-1 text-sm font-medium text-slate-500">{label as string}</p></div>; })}</div></div>
    </section>
    <section id="case-library" className="px-6 py-12 md:py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.32em] text-[#FFCA00]">Case Library</p><h2 className="mt-4 font-manrope text-4xl font-bold tracking-[-0.04em] text-[#071A63] md:text-6xl">Pick a case study by industry.</h2></div><FilterGroup value={industry} onChange={setIndustry} /></div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
        <div
          ref={mobileSelectorRef}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
        >
          {filteredCases.map((item) => (
            <CaseOptionCard
              key={item.id}
              item={item}
              isActive={selected?.id === item.id}
              onSelect={handleCaseSelect}
              mobile
            />
          ))}
        </div>

        <div className="hidden space-y-4 lg:block lg:max-h-[880px] lg:overflow-y-auto lg:pr-2">
          {filteredCases.map((item) => (
            <CaseOptionCard
              key={item.id}
              item={item}
              isActive={selected?.id === item.id}
              onSelect={handleCaseSelect}
            />
          ))}
        </div>

        {selected && (
          <div ref={detailRef} className="scroll-mt-28 lg:contents">
            <button
              type="button"
              onClick={showMobileSelector}
              className="mb-1 inline-flex items-center gap-2 text-sm font-semibold text-[#071A63] lg:hidden"
            >
              <ChevronDown size={17} className="rotate-180" />
              Choose another case study
            </button>
            <CaseDetail item={selected} />
          </div>
        )}
      </div>
    </div></section><CTA />
  </main></>;
}

function FilterGroup({ value, onChange }: { value: Industry; onChange: (value: Industry) => void }) {
  return <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-3 flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Industry</p>{value !== "All" && <button type="button" onClick={() => onChange("All")} className="inline-flex items-center gap-1 text-xs font-semibold text-[#071A63]"><X size={13} />Clear</button>}</div><div className="flex flex-wrap gap-2">{industries.map((option) => <button type="button" key={option} onClick={() => onChange(option)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${value === option ? "bg-[#071A63] text-white" : "bg-slate-100 text-slate-600 hover:bg-[#FFCA00]/20 hover:text-[#071A63]"}`}>{option}</button>)}</div></div>;
}

function CaseOptionCard({
  item,
  isActive,
  onSelect,
  mobile = false,
}: {
  item: (typeof caseStudies)[number];
  isActive: boolean;
  onSelect: (item: (typeof caseStudies)[number]) => void;
  mobile?: boolean;
}) {
  const style = accents[item.accent];

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-pressed={isActive}
      className={`group rounded-[28px] border bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        mobile ? "w-[88%] shrink-0 snap-center sm:w-[70%]" : "w-full"
      } ${
        isActive
          ? "border-[#071A63] shadow-xl"
          : `border-slate-200 ${style.border}`
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${style.badge}`}
          >
            {item.industry}
          </span>
          <h3 className="mt-4 text-xl font-bold leading-tight text-[#071A63] sm:text-2xl">
            {item.company}
          </h3>
          <p className="mt-2 text-sm font-medium text-slate-500">{item.country}</p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-[#071A63]">{item.metric}</p>
          <p className="mt-1 max-w-28 text-xs leading-5 text-slate-500">
            {item.metricLabel}
          </p>
        </div>
      </div>

      <p className="mt-5 line-clamp-2 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </button>
  );
}

function CaseDetail({ item }: { item: (typeof caseStudies)[number] }) {
  const style = accents[item.accent];
  return <article className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-6 shadow-xl md:p-8 lg:sticky lg:top-28"><div className={`absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[120px] ${style.glow}`} /><div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#071A63]/10 blur-[120px]" /><div className="relative z-10"><div className="flex flex-wrap items-center gap-3"><span className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${style.badge}`}>{item.industry}</span><span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{item.country}</span></div><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.55fr]"><div><p className="text-sm font-bold uppercase tracking-[0.28em] text-[#FFCA00]">{item.company}</p><h2 className="mt-4 font-manrope text-4xl font-bold leading-tight tracking-[-0.04em] text-[#071A63] md:text-5xl">{item.headline ?? item.metricLabel}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{item.description}</p></div><div className="rounded-[28px] bg-[#071A63] p-6 text-white"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">Main Result</p><p className="mt-5 text-5xl font-bold">{item.metric}</p><p className="mt-2 text-sm leading-6 text-white/65">{item.metricLabel}</p><div className="mt-8 flex items-center gap-3 text-sm text-white/70"><Globe2 size={17} />{item.country}</div></div></div><div className="mt-8 grid gap-6 lg:grid-cols-2"><DetailList title="What Raptivio Did" points={item.services} icon={CheckCircle2} /><DetailList title="Results" points={item.results ?? [item.description]} icon={BarChart3} /></div><div className="mt-8 grid gap-5 md:grid-cols-2"><TagGroup title="Services" tags={item.services} /><TagGroup title="Platforms" tags={item.platforms ?? ["Raptivio Growth Ecosystem"]} blue /></div>{item.pdf && <a href={item.pdf} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#071A63] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#102d8f]">Open Source PDF <ArrowRight size={18} /></a>}</div></article>;
}

function DetailList({ title, points, icon: Icon }: { title: string; points: string[]; icon: typeof CheckCircle2 }) { return <div><h3 className="text-2xl font-bold text-[#071A63]">{title}</h3><div className="mt-5 space-y-3">{points.map((point) => <div key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-4"><Icon size={20} className="mt-0.5 flex-shrink-0 text-[#071A63]" /><p className="text-sm leading-6 text-slate-700">{point}</p></div>)}</div></div>; }
function TagGroup({ title, tags, blue = false }: { title: string; tags: string[]; blue?: boolean }) { return <div className="rounded-[24px] border border-slate-100 bg-white p-5"><p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400">{title}</p><div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className={`rounded-full px-4 py-2 text-sm font-semibold text-[#071A63] ${blue ? "bg-[#071A63]/10" : "bg-[#FFCA00]/15"}`}>{tag}</span>)}</div></div>; }

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={null}>
      <CaseStudiesContent />
    </Suspense>
  );
}
