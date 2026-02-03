"use client";
import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React, { useState } from "react";

const steps = [
   {
      id: 1,
      title: "Complete your application online",
      buttonLabel: "Start Application",
      href: "/apply",
   },
   {
      id: 2,
      title: "Submit all required materials",
      buttonLabel: "View Requirements",
      href: "/admissions/requirements-for-admission",
   },
   {
      id: 3,
      title: "Pay all required fees",
      buttonLabel: "TUITION AND FEES",
      href: "/admissions/tuition-fees",
   },
];

const HowToApply = () => {
   const [hoveredIndex, setHoveredIndex] = useState(null);

   return (
      <>
         <title>HOW TO APPLY</title>
         <HeaderPage
            text="HOW TO APPLY"
            image="/admission/ad-one.jpg"
         />
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[3rem]">
            <h2 className="text-[#2A3E9E] text-2xl sm:text-3xl font-bold mb-8 text-center">
               Applying to AICU is easy!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
               {steps.map((step, index) => (
                  <div
                     key={step.id}
                     className={`relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] transition-all duration-300 rounded-lg flex items-center justify-center ${
                        hoveredIndex === index
                           ? "bg-[#2A3E9E] text-white"
                           : "bg-[#4691a9] text-white"
                     }`}
                     onMouseEnter={() => setHoveredIndex(index)}
                     onMouseLeave={() => setHoveredIndex(null)}
                  >
                     <div className="text-center px-4">
                        {/* Show the button for the currently hovered card */}
                        {hoveredIndex === index ? (
                           <div>
                              <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                                 {step.title}
                              </h1>
                              {step.buttonLabel && (
                                 <Link
                                    href={step.href}
                                    className="bg-white uppercase text-[.8rem] sm:text-[.9rem] text-[#2A3E9E] mt-[1rem] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold inline-block"
                                 >
                                    {step.buttonLabel}
                                 </Link>
                              )}
                           </div>
                        ) : (
                           <div>
                              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{step.id}</h3>
                              <p className="text-base sm:text-lg md:text-xl">{step.title}</p>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default HowToApply;
