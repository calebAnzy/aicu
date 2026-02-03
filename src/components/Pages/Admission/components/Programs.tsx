import React from "react";
import ApplicationForm from "./ApplicationForm";

const Programs = ({ title, desc, image }: { title: string; desc: string; image: string }) => {
   return (
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12 my-[3rem]">
         <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Graduate Image */}
            <div className="flex-1">
               <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full aspect-w-16 aspect-h-12 bg-gradient-to-r from-emerald-500 to-teal-600 p-1 rounded-lg">
                     <div className="bg-white h-full w-full rounded-lg p-2">
                        <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
                           {/* Placeholder for actual image */}
                           <div className="text-center p-4">
                              <img
                                 src={image}
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 space-y-6">
               <h1 className="text-3xl md:text-3xl font-bold text-pri">{title}</h1>

               <p className="text-gray-600 leading-relaxed">{desc}</p>

               <button className="bg-pri text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
                  Apply Below
               </button>
            </div>
         </div>

         <ApplicationForm />
      </div>
   );
};

export default Programs;
