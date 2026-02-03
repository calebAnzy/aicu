import React from "react";

const AdvisorSection = () => {
   return (
      <div className="relative bg-[#FFCC00] my-[3rem]">
         <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               <div className="order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                     Got Questions?
                     <br />
                     Speak with One of Our Advisors
                  </h2>
                  <p className="text-gray-700 mb-8">Talk to us today to discover course options available to you.</p>
                  <button className="bg-gray-800 text-white font-medium py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">Get in Touch</button>
               </div>
               <div className="order-1 md:order-2 relative">
                  <div className="absolute inset-0 bg-gray-100 -z-10 rounded-xl"></div>
                  <img
                     src="/ai.jpg"
                     alt="Advisor meeting"
                     className="rounded-xl shadow-lg w-full h-auto"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdvisorSection;
