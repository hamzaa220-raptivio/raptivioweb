import CTAContent from "./CTAContent";
import QuantumBackground from "./QuantumBackground";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative min-h-[780px] overflow-hidden bg-[#010204] py-36"
    >
      <QuantumBackground />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(58,134,255,0.18),transparent_30%),linear-gradient(90deg,rgba(1,2,4,0.78),rgba(1,2,4,0.34)_48%,rgba(1,2,4,0.15))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#010204] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-8">
        <div className="max-w-4xl">
          <CTAContent />
        </div>
      </div>
    </section>
  );
}