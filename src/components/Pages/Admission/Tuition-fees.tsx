"use client";
import React, { useState } from "react";
import { programsData } from "./constants";
import TabNavigation from "./components/TabNavigation";
import PricingCard from "./components/PricingCard";
import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";

interface PricingData {
   program: string;
   perCredit: number;
   year: string;
   tuition: number;
   applicationFee: number;
   adminFee: number;
   libraryFee: number;
   techFee: number;
   totalFees: number;
   miscExp: number;
   costOfLiving: number;
   booksInsurance: number;
   total: number;
}

const Tuition: React.FC = () => {
   const [activeTab, setActiveTab] = useState<"year1" | "fullProgram">("year1");

   // Determine which data to display based on the active tab
   const displayedData =
      activeTab === "year1" ? programsData.year1Costs : programsData.fullProgramCosts;

   return (
      <>
         <title>Tuition & Fees</title>
         <HeaderPage
            text="Tuition & Fees"
            image="/admission/ad-16.jpg"
         />{" "}
         <div className="min-h-screen max-w-[1200px] mx-auto py-[4rem] px-[1rem]">
            <div className="my-[2rem] text-center">
               <p className="font-bold text-[20px]">
                  Questions about tuition, financial aid and funding your education?
               </p>
               <Link
                  className="underline uppercase"
                  href="/"
               >
                  ASK ABOUT FINANCIAL AID
               </Link>
            </div>
            <TabNavigation
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
               {displayedData.map((item, index) => (
                  <PricingCard
                     key={index}
                     data={item}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default Tuition;
