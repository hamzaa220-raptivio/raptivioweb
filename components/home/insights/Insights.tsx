import SectionHeading from "./SectionHeading";
import InsightsCarousel from "./InsightsCarousel";

export default function Insights() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="mx-auto max-w-[1600px] px-8">

        <SectionHeading />

        <div className="mt-14">
          <InsightsCarousel />
        </div>

      </div>

    </section>
  );
}