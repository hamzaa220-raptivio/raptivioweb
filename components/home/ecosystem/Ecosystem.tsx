import SectionHeading from "./SectionHeading";
import LargeCard from "./LargeCard";
import AICard from "./AICard";
import MarketingCard from "./MarketingCard";
import SoftwareEngineeringCard from "./SoftwareEngineeringCard";

export default function Ecosystem() {
  return (
    <section
      id="growth-services"
      className="relative scroll-mt-32 overflow-hidden bg-[#F8F9FC] py-20 md:py-28"
    >
      <div id="solutions" className="mx-auto max-w-7xl scroll-mt-32 px-6">
        <SectionHeading />

        <div className="mt-14 lg:mt-20">
          <div className="space-y-8 lg:space-y-0">
            <div className="relative z-10 lg:sticky lg:top-28 lg:pb-[18vh]">
              <LargeCard />
            </div>

            <div className="relative z-20 lg:sticky lg:top-32 lg:-mt-[10vh] lg:pb-[18vh]">
              <div className="grid gap-6 lg:grid-cols-2">
                <AICard />
                <MarketingCard />
              </div>
            </div>

            <div className="relative z-30 lg:sticky lg:top-36 lg:-mt-[10vh]">
              <SoftwareEngineeringCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}