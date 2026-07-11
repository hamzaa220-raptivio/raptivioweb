import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero/Hero";
import Ecosystem from "@/components/home/ecosystem/Ecosystem";
import CaseStudies from "@/components/home/casestudies/CaseStudies";
import ContactCTA from "@/components/home/ContactCTA";
import Insights from "@/components/home/insights/Insights";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <CaseStudies />
      <ContactCTA />
      <Insights />
    </>
  );
}
