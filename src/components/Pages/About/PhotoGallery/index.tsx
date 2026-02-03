import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";

const PhotoGallerySection = () => {
   return (
      <div>
         {" "}
         <HeaderPage
            text="PRESIDENT"
            image="/about/al-2.jpg"
         />
         <div>
            <Link href="/2024/06/13/graduation-2024">
               <img
                  src="/about/al-1.jpg"
                  alt="PhotoGallery"
               />
               <h1>Graduation 2024</h1>
               <p>View Album</p>
            </Link>
         </div>
      </div>
   );
};

export default PhotoGallerySection;
