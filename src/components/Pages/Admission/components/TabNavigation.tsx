"use client";
import { Button } from "@/components/ui/button";
import React from "react";

interface TabNavigationProps {
   activeTab: "year1" | "fullProgram";
   setActiveTab: React.Dispatch<React.SetStateAction<"year1" | "fullProgram">>;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
   return (
      <div className="flex justify-center mb-8 max-w-[1100px] mx-auto gap-[.7rem]">
         <Button
            onClick={() => setActiveTab("year1")}
            className={`px-[3rem] py-8  ${
               activeTab === "year1" ? "bg-blue-700 text-white" : "bg-[#eee] text-gray-700"
            } rounded-l-lg focus:outline-none`}
         >
            Year 1 Only Cost
         </Button>
         <Button
            onClick={() => setActiveTab("fullProgram")}
            className={`px-[3rem] py-8 ${
               activeTab === "fullProgram" ? "bg-blue-700 text-white" : "bg-[#eee] text-gray-700"
            } rounded-r-lg focus:outline-none`}
         >
            Full Program Cost
         </Button>
      </div>
   );
};

export default TabNavigation;
