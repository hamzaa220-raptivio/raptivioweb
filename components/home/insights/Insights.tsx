import SectionHeading from "./SectionHeading";
import InsightsCarousel from "./InsightsCarousel";

export default function Insights() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16 xl:px-20">

        <SectionHeading />

        <div className="mt-14">
          <InsightsCarousel />
        </div>

      </div>

    </section>
  );
}
