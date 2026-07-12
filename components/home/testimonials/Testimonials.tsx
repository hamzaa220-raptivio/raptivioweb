import SectionHeading from "./SectionHeading";
import TestimonialsGrid from "./TestimonialsGrid";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-[1600px] px-8">

        <SectionHeading
          badge="Client Testimonials"
          title={
            <>
              Real partnerships
              <br />
              Real measurable growth
            </>
          }
          description="Businesses trust Raptivio to deliver measurable growth through digital advertising, AI-powered automation and software engineering."
        />

        <TestimonialsGrid />

        <div className="mx-auto mt-24 h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      </div>
    </section>
  );
}