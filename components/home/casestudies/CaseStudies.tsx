"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import SectionHeading from "./SectionHeading";
import IndustryFilter from "./IndustryFilter";
import FeaturedCase from "./FeaturedCase";
import RelatedCases from "./RelatedCases";

import {
  caseStudies,
  industries,
  Industry,
  CaseStudy,
} from "./case-study-data";

const homeStudyIds = new Set([
  "flexpoint",
  "zhouse",
  "upzone",
  "fatima-dental",
  "kama-uae",
  "reliable-accounting-website",
]);
const homeStudies = caseStudies.filter((study) => homeStudyIds.has(study.id));

export default function CaseStudies() {
  const defaultStudy =
    homeStudies.find((study) => study.featured) ?? homeStudies[0];

  const [selectedIndustry, setSelectedIndustry] =
    useState<Industry>("All");

  const [featuredStudy, setFeaturedStudy] =
    useState<CaseStudy>(defaultStudy);

  const filteredStudies = useMemo(() => {
    if (selectedIndustry === "All") {
      return homeStudies;
    }

    return homeStudies.filter(
      (study) => study.industry === selectedIndustry
    );
  }, [selectedIndustry]);

  function handleIndustryChange(industry: Industry) {
    setSelectedIndustry(industry);

    if (industry === "All") {
      setFeaturedStudy(defaultStudy);
      return;
    }

    const firstStudy = homeStudies.find(
      (study) => study.industry === industry
    );

    if (firstStudy) {
      setFeaturedStudy(firstStudy);
    }
  }

  function handleStudySelect(study: CaseStudy) {
    const intelligenceCase =
      study.id === "flexpoint"
        ? "flex"
        : study.id === "zhouse"
          ? "zhouse"
          : null;

    if (intelligenceCase) {
      window.location.href = `/intelligence?case=${intelligenceCase}`;
      return;
    }

    setFeaturedStudy(study);

    if (selectedIndustry === "All") return;

    setSelectedIndustry(study.industry);
  }

  const relatedStudies = filteredStudies.filter(
    (study) => study.id !== featuredStudy.id
  );

  return (
    <section className="relative overflow-hidden py-28">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading />

        <IndustryFilter
          industries={industries}
          selected={selectedIndustry}
          onChange={handleIndustryChange}
        />

        <div className="mt-14">

          <FeaturedCase
            study={featuredStudy}
          />

        </div>

        {relatedStudies.length > 0 && (

          <RelatedCases
            studies={relatedStudies}
            activeId={featuredStudy.id}
            onSelect={handleStudySelect}
          />

        )}

        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#071A63] px-7 py-9 text-center text-white shadow-[0_20px_60px_rgba(7,26,99,0.16)] sm:px-10 md:py-11">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#2A7BFF]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#FFCA00]/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
              Request a case study from your industry.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              Tell us what you’re building, and we’ll share the most relevant
              experience from our work.
            </p>

            <a
            href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFCA00] px-6 py-3.5 text-sm font-bold text-[#071A63] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,202,0,0.28)]"
            >
              Contact us
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
