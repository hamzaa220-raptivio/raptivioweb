import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTA from "@/components/home/cta/CTA";
import ArticleReader from "@/components/intelligence/ArticleReader";
import {
  getIntelligenceArticle,
  intelligenceArticles,
} from "@/components/intelligence/intelligence-data";
import Navbar from "@/components/layout/Navbar";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return intelligenceArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getIntelligenceArticle(slug);

  if (!article) return {};

  const url = `https://www.raptivio.com/intelligence/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      url,
      publishedTime: article.publishedAt,
      siteName: "Raptivio",
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
    },
  };
}

export default async function IntelligenceArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getIntelligenceArticle(slug);

  if (!article) notFound();

  const url = `https://www.raptivio.com/intelligence/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Raptivio",
    },
    publisher: {
      "@type": "Organization",
      name: "Raptivio",
      url: "https://www.raptivio.com",
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F9FC] px-3 pb-20 pt-32 md:px-6 md:pt-40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="mx-auto max-w-5xl">
          <ArticleReader article={article} />
        </div>
      </main>
      <CTA />
    </>
  );
}
