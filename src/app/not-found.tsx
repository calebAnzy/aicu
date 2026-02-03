import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";

const NotFound = () => {
   return (
      <>
         <HeaderPage
            text="Oops! Page Not Found"
            image="/admission/ad-eight.jpg"
         />
         <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
               We can't seem to find the page you're looking for.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
               It might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* CTA Button to Redirect Home */}
            <Link
               href="/"
               passHref
            >
               <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                  Back to Home
               </button>
            </Link>

            {/* Optional Links for Better Navigation */}
            <div className="mt-6 space-x-4">
               <Link
                  href="/about/welcome"
                  className="text-blue-600 hover:underline"
                  passHref
               >
                  Learn more about us
               </Link>
               <span className="text-gray-400">|</span>
               <Link
                  href="/contact"
                  passHref
                  className="text-blue-600 hover:underline"
               >
                  Contact Support
               </Link>
            </div>
         </div>
      </>
   );
};

export default NotFound;
