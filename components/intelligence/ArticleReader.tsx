import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Lightbulb,
  List,
  Quote,
} from "lucide-react";
import type { IntelligenceArticle } from "./intelligence-data";
import SummarizeWithAI from "./SummarizeWithAI";

const accentStyles = {
  blue: "from-[#071A63] via-[#123b9d] to-[#2A7BFF]",
  yellow: "from-[#071A63] via-[#1c347f] to-[#b88d00]",
  purple: "from-[#071A63] via-violet-800 to-violet-500",
};

export default function ArticleReader({
  article,
}: {
  article: IntelligenceArticle;
}) {
  const readerId = `article-reader-${article.id}`;
  const articleUrl = `https://www.raptivio.com/intelligence/${article.slug}`;

  return (
    <article
      id={readerId}
      className="relative rounded-[34px] border border-slate-200 bg-white shadow-2xl"
    >
      <header
        className={`relative overflow-hidden rounded-t-[34px] bg-gradient-to-br ${accentStyles[article.accent]} px-6 py-10 text-white md:px-10 md:py-12`}
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[90px]" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/70">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 uppercase tracking-[0.2em]">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={15} /> {article.readTime}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={15} /> {article.displayDate}
            </span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#FFCA00]">
            {article.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-manrope text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            {article.summary}
          </p>
        </div>
      </header>

      <div className="p-5 md:p-10">
        <section className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[28px] border border-[#FFCA00]/30 bg-[#FFCA00]/10 p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFCA00] text-[#071A63]">
                <Lightbulb size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#071A63]/55">
                  Start here
                </p>
                <h2 className="mt-1 text-2xl font-bold text-[#071A63]">
                  Key Takeaways
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {article.takeaways.map((takeaway) => (
                <div
                  key={takeaway}
                  className="flex gap-3 rounded-2xl bg-white/80 p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#071A63]"
                  />
                  <p className="text-sm leading-6 text-slate-700">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>

          <SummarizeWithAI
            articleTitle={article.title}
            articleUrl={articleUrl}
          />
        </section>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_250px]">
          <div className="space-y-10">
            {article.sections.map((section, index) => (
              <section
                key={section.heading}
                id={`${article.slug}-section-${index + 1}`}
                className="scroll-mt-32"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071A63] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold leading-tight text-[#071A63] md:text-3xl">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                      {section.body}
                    </p>
                  </div>
                </div>

                {index === 0 && (
                  <blockquote className="mt-8 rounded-[26px] bg-[#071A63] p-6 text-white md:p-8">
                    <Quote className="text-[#FFCA00]" size={28} />
                    <p className="mt-4 text-xl font-semibold leading-8 md:text-2xl">
                      {article.pullQuote}
                    </p>
                  </blockquote>
                )}
              </section>
            ))}

            <section className="rounded-[28px] border border-[#071A63]/10 bg-slate-50 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFCA00]">
                Practical perspective
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#071A63]">
                What this means for your business
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {article.businessImpact}
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#071A63]"
              >
                Discuss it with Raptivio <ArrowRight size={17} />
              </a>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-[#071A63]">
                <List size={18} />
                <p className="font-bold">In this article</p>
              </div>
              <nav className="mt-5 grid gap-3">
                {article.sections.map((section, index) => (
                  <a
                    key={section.heading}
                    href={`#${article.slug}-section-${index + 1}`}
                    className="text-sm leading-5 text-slate-600 transition hover:text-[#071A63]"
                  >
                    {index + 1}. {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
