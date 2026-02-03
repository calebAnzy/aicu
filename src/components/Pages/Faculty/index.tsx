import HeaderPage from "@/components/Shared/HeaderPage";
import React from "react";

type facultyType = "faculty-handbook";

const FacultyComponent = ({ fType, data }: { fType: facultyType }) => {
   if (fType == "faculty-handbook") {
      return (
         <>
            <title>{data.headerText}</title>
            <HeaderPage
               text={data.headerText}
               image="/about/mission-eleven.jpg"
            />
            <div className="max-w-[1100px] mx-auto flex flex-wrap gap-3 py-[3rem]">
               <img
                  src={data.pageImage}
                  alt="Page Image"
                  className="w-[200px]"
               />
               <div className="flex items-center">
                  <a
                     href={data.linkHref}
                     className="flex items-center text-gray-800 no-underline"
                  >
                     <div className="text-4xl text-blue-600 mr-3">&#10145;</div>{" "}
                     {/* Right Arrow Unicode */}
                     <div>
                        <h2 className="text-xl text-blue-600 font-semibold">{data.linkText}</h2>
                        <p className="text-gray-600">{data.linkDesc}</p>
                     </div>
                  </a>
               </div>
            </div>
         </>
      );
   }
   if (fType == "faculty-directory") {
      return (
         <>
            <title>{data.headerText}</title>
            <HeaderPage
               text={data.headerText}
               image={data.headerImage}
            />
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[2rem] py-[3rem] p-[1.4rem]">
               {data.doctors.map((item, idx) => (
                  <div
                     key={idx}
                     className="text-center"
                  >
                     <img
                        src={item.imageUrl}
                        alt="Page Image"
                        className="w-full rounded-[10px]"
                     />
                     <div className="">
                        <h1 className="text-[#4A5DB4] mt-[.7rem] font-bold">{item.name}</h1>
                        <p className="text-[#000000a8]">{item.degree}</p>
                     </div>
                  </div>
               ))}
            </div>
         </>
      );
   }
   if (fType == "faculty-news") {
      return (
         <>
            <title>{data.headerText}</title>
            <HeaderPage
               text={data.headerText}
               image={data.headerImage}
            />
            <div className="my-[4rem] max-w-[1100px] mx-auto">
               <p>{data.tempText}</p>
            </div>
         </>
      );
   }
};

export default FacultyComponent;
