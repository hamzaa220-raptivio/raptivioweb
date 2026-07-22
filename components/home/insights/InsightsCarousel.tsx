"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import InsightCard from "./InsightCard";
import ExploreCard from "./ExploreCard";
import { blogPosts } from "./blog-data";

export default function InsightsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollControls = useCallback(() => {
    const carousel = scrollRef.current;

    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(carousel.scrollLeft > 4);
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const carousel = scrollRef.current;

    if (!carousel) return;

    const frame = requestAnimationFrame(updateScrollControls);

    window.addEventListener("resize", updateScrollControls);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateScrollControls);
    };
  }, [updateScrollControls]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        direction === "right"
          ? scrollRef.current.clientWidth
          : -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-16">

      {/* Buttons */}

      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="View previous article"
          className="absolute left-2 top-[125px] z-20 flex -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur transition hover:scale-105 sm:top-[135px] md:left-3 md:top-1/2 md:p-3"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="View next article"
          className="absolute right-2 top-[125px] z-20 flex -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur transition hover:scale-105 sm:top-[135px] md:right-3 md:top-1/2 md:p-3"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Cards */}

      <div
        ref={scrollRef}
        onScroll={updateScrollControls}
        className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth overscroll-x-contain pb-4 touch-pan-x md:snap-none md:gap-0"
      >
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="w-full shrink-0 snap-start md:w-auto md:snap-none md:border-r md:border-slate-200 md:px-8 md:last:border-r-0"
          >
            <InsightCard post={post} />
          </div>
        ))}
        <div className="w-full shrink-0 snap-start md:w-auto md:snap-none md:px-8">
          <ExploreCard />
        </div>
      </div>

    </div>
  );
}
