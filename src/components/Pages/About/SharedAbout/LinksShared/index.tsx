import Link from "next/link";
import React from "react";

const LinksShared = () => {
   return (
      <>
         {/* Links */}
         <div className="max-w-[1100px] mx-auto my-[3rem] p-[1rem]">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
               <Link
                  href="/about/pro-chancellor"
                  className="bg-[#60C087] text-center py-[.8rem] px-[3rem] rounded text-white uppercase"
               >
                  Pro-Chancellor
               </Link>
               <Link
                  className="bg-[#60C087] text-center py-[.8rem] px-[3rem] rounded text-white uppercase"
                  href="/about/president"
               >
                  President
               </Link>
               <Link
                  className="bg-[#60C087] text-center py-[.8rem] px-[3rem] rounded text-white uppercase"
                  href="/about/board-of-trustees"
               >
                  Board Of Trustees
               </Link>
            </div>
         </div>
      </>
   );
};

export default LinksShared;
