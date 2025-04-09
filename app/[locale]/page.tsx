import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Features from "@/components/features";
import Partnership from "@/components/partnership";
import Platform from "@/components/platform";
import AppShowcase from "@/components/app-showcase";
import Faq from "@/components/faq";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Features />
      <AppShowcase />
      <Partnership />
      {/* <Platform /> */}
      <CTA />
      <Faq />
    </>
  );
}
