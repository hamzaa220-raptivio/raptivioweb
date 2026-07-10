import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function GlassCard({
  className,
  children,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}