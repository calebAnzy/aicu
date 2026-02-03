"use client";
import Link from "next/link";
import { useState } from "react";

const ProgramCard = ({
   program,
}: {
   program: { title: string; image: string; description: string; credits: string; link: string };
}) => {
   return (
      <div className="bg-white border border-[#ffffff2a] bg-opacity-10 backdrop-blur-md text-white relative p-8 rounded-xl shadow-2xl transition-all duration-300 transform">
         <div className="absolute top-0 flex items-center justify-center w-full left-0">
            <h3 className="text-[130px] font-bold opacity-10 mb-2 ">{program.credits}</h3>
         </div>

         <h2 className="text-[16px] text-center font-semibold mb-4 mt-[4rem]">{program.title}</h2>
         <p className="text-[13px] opacity-75 mb-6 text-center">{program.description}</p>
         <div className="w-full flex justify-center">
            <Link
               href={program.link}
               className="text-blue-500 inline-block bg-white py-2 text-[.7rem] px-4 rounded-full hover:bg-blue-600 transition"
            >
               Learn More
            </Link>
         </div>
      </div>
   );
};

export default ProgramCard;
