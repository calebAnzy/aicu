import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";

const AcademicCalendarSection: React.FC = () => {
   return (
      <>
         <title>Academic Calendar</title>
         <HeaderPage
            text="Academic Calendar"
            image="/admission/ad-eleven.jpg"
         />
         <div className="py-12 px-4 md:px-6 lg:px-8 max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] my-[3rem]  items-center">
               <img
                  src="/admission/ad-twelve.jpg"
                  alt="Admission Image"
                  className="rounded-[20px]"
               />

               <div className="mt-8 text-gray-700">
                  <p>
                     AICU operates on a student-centric calendar (SCP). Each semester consists of 16
                     weeks of instruction and exams; classes are scheduled in two eight-week
                     sessions each semester. An individual's SCP is based on his/her initial
                     enrollment date into a degree-seeking program or on the date studies are
                     resumed following readmission to the University. This results in two
                     overlapping calendars referred to as "cycles." The two overlapping calendar
                     cycles designate months corresponding to AICU's summer, fall, and spring
                     semesters.
                  </p>
                  <Link
                     href="/"
                     className="text-[#4052B5] font-medium hover:underline mt-4 block"
                  >
                     VIEW THE ADD / DROP DATES
                  </Link>
               </div>
            </div>
            <div className="max-w-6xl mx-auto">
               <h2 className="text-2xl md:text-3xl font-bold text-[#4052B5] mb-8">
                  Academic Calendar
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                     <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-fas-file-pdf w-[50px]"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path>
                     </svg>
                     <h3 className="text-xl font-semibold my-2">Academic Calendar 2023-24</h3>
                     <a
                        target="_blank"
                        href="/"
                        className="text-[#4052B5] font-medium hover:underline"
                     >
                        Click here to Download
                     </a>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                     <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-fas-file-pdf w-[50px]"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path>
                     </svg>
                     <h3 className="text-xl font-semibold my-2">Academic Calendar 2024-25</h3>
                     <a
                        target="_blank"
                        href="/"
                        className="text-[#4052B5] font-medium hover:underline"
                     >
                        Click here to Download
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AcademicCalendarSection;
