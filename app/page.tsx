import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero/Hero";
import Ecosystem from "@/components/home/ecosystem/Ecosystem";
import CaseStudies from "@/components/home/casestudies/CaseStudies";
import Insights from "@/components/home/insights/Insights";
import Testimonials from "@/components/home/testimonials/Testimonials";
import CTA from "@/components/home/cta/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <CaseStudies />
      <Insights />
      <Testimonials />
      <CTA />
    </>
  );
}
