"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const modalScroller = target.closest("[data-article-scroll]") as HTMLElement | null;
    const scroller: Window | HTMLElement = modalScroller ?? window;

    function updateProgress() {
      if (modalScroller) {
        const max = modalScroller.scrollHeight - modalScroller.clientHeight;
        setProgress(max > 0 ? (modalScroller.scrollTop / max) * 100 : 0);
        return;
      }

      const rect = target!.getBoundingClientRect();
      const start = window.scrollY + rect.top - 120;
      const end = start + target!.offsetHeight - window.innerHeight;
      const current = ((window.scrollY - start) / Math.max(end - start, 1)) * 100;
      setProgress(Math.min(100, Math.max(0, current)));
    }

    updateProgress();
    scroller.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      scroller.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [targetId]);

  return (
    <div className="sticky top-0 z-30 h-1 overflow-hidden bg-slate-200/70">
      <div
        className="h-full bg-gradient-to-r from-[#FFCA00] via-[#2A7BFF] to-[#071A63] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
