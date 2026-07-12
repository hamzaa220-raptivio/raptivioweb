import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonial-data";

export default function TestimonialsGrid() {
  return (
    <div className="mt-20">
      <div className="grid gap-8 lg:grid-cols-3">

        {testimonials.slice(0, 3).map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}

      </div>
    </div>
  );
}