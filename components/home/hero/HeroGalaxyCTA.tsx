import { ArrowRight } from "lucide-react";
import Link from "next/link";
import QuantumBackground from "../cta/QuantumBackground";

export default function HeroGalaxyCTA() {
  return (
    <section className="relative mt-20 min-h-[620px] overflow-hidden bg-[#010204] py-28">
      <QuantumBackground />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(58,134,255,0.18),transparent_30%),linear-gradient(90deg,rgba(1,2,4,0.86),rgba(1,2,4,0.46)_48%,rgba(1,2,4,0.12))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#010204] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="mb-8 h-[2px] w-16 bg-[#2A7BFF]" />

          <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
            Activate your growth core.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you&apos;re launching a startup, scaling an established business
            or modernising your operations with AI, Raptivio helps ambitious
            companies build intelligent software, powerful digital experiences
            and predictable growth systems.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#FFCA00] px-8 py-4 text-base font-semibold text-[#071A63] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(255,202,0,.35)]"
          >
            Get Started Today
            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
