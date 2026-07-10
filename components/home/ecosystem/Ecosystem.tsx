import SectionHeading from "./SectionHeading";
import LargeCard from "./LargeCard";
import AICard from "./AICard";
import MarketingCard from "./MarketingCard";
import SoftwareEngineeringCard from "./SoftwareEngineeringCard";

export default function Ecosystem() {
  return (
    <section id="growth-services" className="relative scroll-mt-32 pt-12 pb-28">
      <div id="solutions" className="mx-auto max-w-7xl scroll-mt-32 px-6">

        <SectionHeading />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <LargeCard />
          </div>

          <div className="flex flex-col gap-6">
            <AICard />
            <MarketingCard />
          </div>

          <div className="lg:col-span-3">
            <SoftwareEngineeringCard />
          </div>

        </div>

      </div>
    </section>
  );
}
