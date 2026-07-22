"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  BookOpen,
  Clock,
  Filter,
  Globe,
  Megaphone,
  Search,
  X,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/home/cta/CTA";
import ArticleReader from "@/components/intelligence/ArticleReader";
import {
  getIntelligenceArticle,
  intelligenceArticles,
  type IntelligenceArticle,
} from "@/components/intelligence/intelligence-data";

const accentStyles = {
  blue: "from-[#071A63] to-[#2A7BFF]",
  yellow: "from-[#FFCA00] to-[#071A63]",
  purple: "from-violet-600 to-[#071A63]",
};

const categoryIcons = {
  Marketing: Megaphone,
  SEO: Search,
  "Web Development": Globe,
};

function IntelligenceContent() {
  const params = useSearchParams();
  const legacyArticle = getIntelligenceArticle(params.get("case") ?? "");
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<IntelligenceArticle | null>(
    legacyArticle ?? null,
  );
  const filtered = useMemo(
    () =>
      category === "All"
        ? intelligenceArticles
        : intelligenceArticles.filter((article) => article.category === category),
    [category],
  );
  const categories = [
    "All",
    ...Array.from(new Set(intelligenceArticles.map((article) => article.category))),
  ];
  const featured = intelligenceArticles[0];

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  useEffect(() => {
    function syncArticleWithHistory() {
      if (window.location.pathname === "/intelligence") {
        setActive(null);
        return;
      }

      const slug = window.location.pathname.split("/").filter(Boolean).at(-1);
      if (slug) setActive(getIntelligenceArticle(slug) ?? null);
    }

    window.addEventListener("popstate", syncArticleWithHistory);
    return () => window.removeEventListener("popstate", syncArticleWithHistory);
  }, []);

  function openArticle(article: IntelligenceArticle) {
    setActive(article);
    window.history.pushState(
      { intelligenceModal: true },
      "",
      `/intelligence/${article.slug}`,
    );
  }

  function closeArticle() {
    setActive(null);
    window.history.replaceState(null, "", "/intelligence");
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[#F8F9FC]">
        <section className="relative px-6 pb-16 pt-40 md:pb-24 md:pt-44">
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.32em] text-[#071A63]">
                Raptivio Intelligence
              </span>
              <h1 className="mt-8 font-manrope text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-[#071A63] md:text-7xl">
                Ideas and growth thinking for modern businesses.
              </h1>
              <p className="mt-7 text-lg leading-8 text-slate-600 md:text-xl">
                Read practical thinking across AI, content, search, web
                development and growth systems.
              </p>
            </div>

            <a
              href={`/intelligence/${featured.slug}`}
              onClick={(event) => {
                event.preventDefault();
                openArticle(featured);
              }}
              className="rounded-[34px] bg-[#071A63] p-8 text-left text-white shadow-2xl transition hover:-translate-y-1"
            >
              <BookOpen />
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-white/45">
                Featured
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 leading-7 text-white/70">{featured.summary}</p>
            </a>
          </div>
        </section>

        <section className="px-6 py-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#FFCA00]">
                  Library
                </p>
                <h2 className="mt-3 font-manrope text-4xl font-bold text-[#071A63]">
                  Pick what you want to read.
                </h2>
              </div>

              <label className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-sm">
                <Filter size={17} className="ml-2 text-[#071A63]" />
                <span className="sr-only">Filter by category</span>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="bg-transparent px-3 py-2 font-semibold text-[#071A63] outline-none"
                >
                  {categories.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((article) => {
                const Icon = categoryIcons[article.category];
                return (
                  <a
                    key={article.id}
                    href={`/intelligence/${article.slug}`}
                    onClick={(event) => {
                      event.preventDefault();
                      openArticle(article);
                    }}
                    className="group min-h-[330px] rounded-[30px] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accentStyles[article.accent]} text-white`}
                    >
                      <Icon />
                    </div>
                    <p className="mt-7 text-xs font-bold uppercase tracking-[0.26em] text-[#FFCA00]">
                      {article.category}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-[#071A63]">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {article.summary}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm text-slate-500">
                      <Clock size={15} /> {article.readTime}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {active && (
          <section
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            data-article-scroll
            className="fixed inset-0 z-[80] overflow-y-auto bg-[#071A63]/45 p-3 backdrop-blur-md md:p-6"
          >
            <button
              type="button"
              onClick={closeArticle}
              aria-label="Close article"
              className="fixed right-5 top-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#071A63] shadow-xl transition hover:scale-105 md:right-8 md:top-8"
            >
              <X />
            </button>
            <div className="mx-auto my-4 max-w-5xl md:my-8">
              <ArticleReader article={active} />
            </div>
          </section>
        )}

        <CTA />
      </main>
    </>
  );
}

export default function IntelligencePage() {
  return (
    <Suspense fallback={null}>
      <IntelligenceContent />
    </Suspense>
  );
}
