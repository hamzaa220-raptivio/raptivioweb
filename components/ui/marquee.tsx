import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 6,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden [--gap:3rem] p-2",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)] animate-marquee",
            vertical && "flex-col animate-marquee-vertical",
            pauseOnHover &&
              "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}