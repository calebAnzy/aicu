import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";

const ProgramsPage = ({ data }) => {
   return (
      <>
         <title>{data?.headerText}</title>
         <HeaderPage
            text={data?.headerText}
            image={data?.headerImage ?? "/admission/ad-eight.jpg"}
         />

         <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto py-[4rem] gap-[2rem] px-[1rem]">
            <img
               src={data?.pageImage}
               alt=""
               className=""
            />
            <div>
               <div className="flex flex-col gap-[1rem]">
                  {data?.pageNotes.map((p: any, idx: number) => (
                     <p key={idx}>{p}</p>
                  ))}
               </div>
               <Link
                  className="border-[#2C6695] border-[1px] rounded-full py-[.8rem] inline-block text-[#2C6695] uppercase px-[2rem] mt-[1rem]"
                  href={data?.redirect ?? ""}
               >
                  {data?.linkText}
               </Link>
            </div>
         </div>
      </>
   );
};

export default ProgramsPage;
