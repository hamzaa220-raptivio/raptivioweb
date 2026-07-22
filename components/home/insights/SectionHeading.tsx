import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SectionHeading() {
  return (
    <div className="flex items-end justify-between gap-8">

      <div className="max-w-3xl">

        <span className="inline-flex rounded-full border border-[#071A63]/10 bg-[#071A63]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#071A63]">
          Insights & Intelligence
        </span>

        <h2 className="mt-6 font-manrope text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[#071A63]">
          Ideas that help businesses
          <br />
          grow smarter.
        </h2>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">
          Discover practical insights on AI, digital marketing, software
          engineering and business growth from the Raptivio team.
        </p>

      </div>

      <Link
        href="/intelligence"
        className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-[#071A63] shadow-sm transition hover:shadow-lg lg:flex"
      >
        View all articles

        <ArrowUpRight size={18} />
      </Link>

    </div>
  );
}
