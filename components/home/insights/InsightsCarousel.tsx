"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import InsightCard from "./InsightCard";
import ExploreCard from "./ExploreCard";
import { blogPosts } from "./blog-data";

export default function InsightsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-16">

      {/* Buttons */}

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-20 -translate-x-6 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-xl transition hover:scale-105"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-20 translate-x-6 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-xl transition hover:scale-105"
      >
        <ChevronRight size={20} />
      </button>

      {/* Cards */}

      <div
        ref={scrollRef}
        className="hide-scrollbar flex overflow-x-auto scroll-smooth pb-4"
      >
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border-r border-slate-200 px-8 last:border-r-0"
          >
            <InsightCard post={post} />
          </div>
        ))}
        <div className="px-8">
          <ExploreCard />
        </div>
      </div>

    </div>
  );
}