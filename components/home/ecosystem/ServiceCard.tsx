interface Props {
  type: "ai" | "marketing" | "software" | "branding";
}

export default function ServiceCard({ type }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 h-14 w-14 rounded-2xl bg-[#071A63]/10" />

      <h3 className="text-2xl font-semibold text-[#071A63] capitalize">
        {type}
      </h3>

      <p className="mt-4 text-slate-600">
        Content coming in the next step...
      </p>

    </div>
  );
}