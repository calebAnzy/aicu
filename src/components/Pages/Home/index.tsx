"use client";
import Head from "next/head";
import HeroSection from "./Hero";
import Discover from "./Discover";
import Programs from "./Programs";
import OrdinationSection from "./Ordination";
import AdvisorSection from "./AdvisorSection";

const HomePage = () => {
   return (
      <>
         <HeroSection />
         <Discover />
         <Programs />
         <OrdinationSection />
         <AdvisorSection />
      </>
   );
};

export default HomePage;
