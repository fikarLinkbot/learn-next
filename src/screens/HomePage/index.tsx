import { HeroSection, WhoWeAre } from "@/screens/HomePage/content";
// import { faqData } from "@/constant/faqData";
import React from "react";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      {/* <GettingHelp />
      <WhyCallUsFirst />
      <BrandValues />   
      <PracticeAreas />
      <FAQSection faqData={faqData} />
      <ContactForm /> */}
    </>
  );
}
