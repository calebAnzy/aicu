import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrdinationSection: React.FC = () => {
   return (
      <div className="relative h-[400px] w-full overflow-hidden lg:h-[500px]">
         {/* Fixed background image container */}
         <div
            className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat w-full lg:w-[50%] z-10"
            style={{
               backgroundImage: `url('/ai.jpg')`,
               backgroundAttachment: "fixed",
               clipPath: "polygon(0 0, 100% 0, 45% 100%, 0 100%)",
            }}
         />

         {/* White overlay section with content */}
         <div className="absolute top-0 right-0 h-full w-full bg-white lg:w-[60%] lg:right-0">
            {/* Content container */}
            <div className="h-full flex flex-col justify-center px-6 py-8 sm:px-12 lg:px-16">
               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  2 Ordination Tracks
               </h2>
               <p className="text-gray-600 mb-6 max-w-full sm:max-w-lg">
                  The Diploma in Ministry program is designed for men and women who are serving in a
                  leadership role in their local church or another ministry position. The diploma
                  provides a depth of training in the Bible, theology, and a broad range of ministry
                  skills.
               </p>
               <Link
                  href={"/about/aicu-at-glance"}
                  className="bg-blue-800 hover:bg-blue-900 w-full sm:w-32 inline-block py-3 px-7 text-white"
               >
                  Learn More
               </Link>
            </div>
         </div>
      </div>
   );
};

export default OrdinationSection;
