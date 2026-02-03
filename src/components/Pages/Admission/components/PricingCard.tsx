"use client";
import { CircleCheck } from "lucide-react";
import React from "react";

interface PricingCardProps {
   data: {
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
   };
}

const PricingCard: React.FC<PricingCardProps> = ({ data }) => {
   return (
      <div className="bg-white shadow-md  rounded-[15px] overflow-hidden">
         <div className="text-center  bg-[#00A0A7] p-[2rem]">
            <h2 className="text-[30px] font-semibold text-white">{data.program}</h2>
            <p className="text-sm text-white">{data.year}</p>
         </div>
         <div className="p-[1.4rem]">
            {" "}
            <p className=" text-3xl text-center mb-[1.3rem] font-bold text-[#000000a4]">
               ${data.perCredit} <span className="text-sm block ">Per Credit</span>
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
               <li className="flex items-center gap-[1rem]">
                  {" "}
                  <CircleCheck className="w-4" /> Tuition: ${data.tuition}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> Application Fee: ${data.applicationFee}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> Admin Fee: ${data.adminFee}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> Library Fee: ${data.libraryFee}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> Technology Fee: ${data.techFee}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> TOTAL - Tuition & Fees: ${data.totalFees}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> Miscellaneous Exps (Intensive): ${data.miscExp}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> Cost of Living: ${data.costOfLiving}
               </li>
               <li className="flex items-center gap-[1rem]">
                  <CircleCheck className="w-4" /> Books & Insurance: ${data.booksInsurance}
               </li>
            </ul>
            <div className="mt-6 text-center bg-red-500 rounded-full py-[.7rem]">
               <p className="text-xl font-bold text-white">${data.total}</p>
            </div>
         </div>
      </div>
   );
};

export default PricingCard;
