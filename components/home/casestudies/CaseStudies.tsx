"use client";

import { useMemo, useState } from "react";

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

export default function CaseStudies() {
  const defaultStudy =
    caseStudies.find((study) => study.featured) ?? caseStudies[0];

  const [selectedIndustry, setSelectedIndustry] =
    useState<Industry>("All");

  const [featuredStudy, setFeaturedStudy] =
    useState<CaseStudy>(defaultStudy);

  const filteredStudies = useMemo(() => {
    if (selectedIndustry === "All") {
      return caseStudies;
    }

    return caseStudies.filter(
      (study) => study.industry === selectedIndustry
    );
  }, [selectedIndustry]);

  function handleIndustryChange(industry: Industry) {
    setSelectedIndustry(industry);

    if (industry === "All") {
      setFeaturedStudy(defaultStudy);
      return;
    }

    const firstStudy = caseStudies.find(
      (study) => study.industry === industry
    );

    if (firstStudy) {
      setFeaturedStudy(firstStudy);
    }
  }

  function handleStudySelect(study: CaseStudy) {
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

      </div>

    </section>
  );
}