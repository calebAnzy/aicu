"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import StatBox from "./StatBox";

const StatsSection = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   const statsInformation = [
      {
         icon: (
            <svg
               aria-hidden="true"
               width="50"
               className="e-font-icon-svg e-fas-user-check fill-[#4A5DB4]"
               viewBox="0 0 640 512"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
            </svg>
         ),

         value: "400",
         label: "Students Enrolled",
      },
      {
         icon: (
            <svg
               aria-hidden="true"
               className="e-font-icon-svg e-fas-user-check fill-[#4A5DB4]"
               width="50"
               viewBox="0 0 512 512"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 160H64v-84c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v84z"></path>
            </svg>
         ),

         value: "92%",
         label: "Retention",
      },
      {
         icon: (
            <svg
               aria-hidden="true"
               width="50"
               className="e-font-icon-svg e-fas-user-check fill-[#4A5DB4]"
               viewBox="0 0 640 512"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path>
            </svg>
         ),

         value: "82%",
         label: "Completion",
      },
      {
         icon: (
            <svg
               aria-hidden="true"
               width="50"
               className="e-font-icon-svg e-fas-user-check fill-[#4A5DB4]"
               viewBox="0 0 640 512"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path>
            </svg>
         ),

         value: "82%",
         label: "Graduated",
      },
   ];

   return (
      <div
         className="py-16 text-center max-w-[1100px] mx-auto px-[1rem]"
         ref={ref}
      >
         <h1 className="text-pri my-[2rem] uppercase tracking-wide font-light">This is AICU</h1>
         <h2 className="text-[2.5rem] font-bold text-pri mb-[1rem]">By the Numbers</h2>
         <h1 className="text-pri my-[2rem] uppercase tracking-wide font-bold">2022-2023</h1>
         <h2></h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem]">
            {inView && (
               <>
                  {statsInformation.map((stats, idx) => (
                     <StatBox
                        key={idx}
                        icon={stats.icon}
                        value={stats.value}
                        label={stats.label}
                     />
                  ))}
               </>
            )}
         </div>
      </div>
   );
};

export default StatsSection;
