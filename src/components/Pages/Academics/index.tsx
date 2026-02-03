import HeaderPage from "@/components/Shared/HeaderPage";
import React from "react";

const AcademicsComponent = ({ data }) => {
   return (
      <>
         <title>{data?.headerText}</title>
         <HeaderPage
            text={data?.headerText}
            image="/about/mission-eleven.jpg"
         />
         <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[2rem] py-[3rem] p-[1.4rem]">
            {data.programsData.map((item, idx) => (
               <div
                  key={idx}
                  className="shadow"
               >
                  <img
                     src={item.imageUrl}
                     alt="Page Image"
                     className="w-full "
                  />
                  <div className="p-[2rem]">
                     <h1 className="text-[#4A5DB4] mt-[.7rem] font-bold line-clamp-2">{item.name}</h1>
                     <p className="text-[#000000a8] text-[.8rem] my-[.9rem] line-clamp-3">{item.description}</p>
                     <a
                        href={item.redirect}
                        className="text-[#4A5DB4] text-[.9rem] font-bold"
                     >
                        {item.courseDetails}
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default AcademicsComponent;
