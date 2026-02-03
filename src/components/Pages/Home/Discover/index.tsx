import React from "react";
import Image from "next/image";
import { discover } from "./constants";

interface DiscoverItem {
   image: string;
   text: string;
}

const Discover: React.FC = () => {
   return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
         <div className="max-w-[1000px] mx-auto">
            <div className="my-8">
               <h1 className="text-center text-[#4a5db4] text-3xl sm:text-4xl font-bold">Discover AICU</h1>
               <p className="text-[#202020] text-center my-4 text-sm sm:text-base">
                  AICU envisions a teaching team that is focused on serving the nations. We desire to develop others who
                  will be servants to the nations.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {discover.map((item: DiscoverItem, idx: number) => (
                  <div
                     key={idx}
                     className="text-center"
                  >
                     <img
                        className="rounded-2xl shadow-lg hover:grayscale transition-all duration-300"
                        src={item.image}
                        alt={item.text}
                     />
                     <h1 className="uppercase text-[#4a5db4] text-sm sm:text-base mt-4">{item.text}</h1>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Discover;
