import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";

const PhotoPage = () => {
   return (
      <div>
         <HeaderPage
            text="Photo Gallery"
            image="/about/mission-eleven.jpg"
         />

         <div className="grid grid-cols-3 gap-[1rem] max-w-[1100px] mx-auto py-[3rem]">
            <div>
               <img
                  src="grad.jpg"
                  alt=""
               />
               <Link href="/graduation-photos/2024">View Album</Link>
            </div>
         </div>
      </div>
   );
};

export default PhotoPage;
