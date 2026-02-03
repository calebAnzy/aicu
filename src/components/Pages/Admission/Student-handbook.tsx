import HeaderPage from "@/components/Shared/HeaderPage";
import React from "react";

const StudentHandbook: React.FC = () => {
   return (
      <>
         <title>Student Handbook</title>
         <HeaderPage
            text="Student Handbook"
            image="/admission/ad-14.jpg"
         />{" "}
         <div className="flex items-center py-[3rem] px-[1rem] max-w-[1100px] mx-auto">
            {/* Image Section */}
            <div className="mr-5">
               <img
                  src="/admission/ad-15.jpg"
                  alt="Student Reading"
                  className="w-72 rounded-md"
               />
            </div>

            {/* Handbook Link Section */}
            <div className="flex items-center">
               <a
                  href="/sign-in"
                  className="flex items-center text-gray-800 no-underline"
               >
                  <div className="text-4xl text-blue-600 mr-3">&#10145;</div>{" "}
                  {/* Right Arrow Unicode */}
                  <div>
                     <h2 className="text-xl text-blue-600 font-semibold">AICU Student Handbook</h2>
                     <p className="text-gray-600">Click here to Sign in to access the handbook</p>
                  </div>
               </a>
            </div>
         </div>
      </>
   );
};

export default StudentHandbook;
