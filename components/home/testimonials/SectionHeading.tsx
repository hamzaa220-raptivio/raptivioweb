import type { ReactNode } from "react";

interface Props {
  badge: string;
  title: ReactNode;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-24 max-w-5xl text-center">
      <div className="inline-flex rounded-full border border-[#263571]/10 bg-[#263571]/5 px-5 py-2">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#263571]">
          {badge}
        </span>
      </div>

      <h2 className="mt-8 whitespace-pre-line text-5xl font-bold leading-tight tracking-[-0.04em] text-[#071A63] md:text-7xl">
        {title}
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
        {description}
      </p>
    </div>
  );
}