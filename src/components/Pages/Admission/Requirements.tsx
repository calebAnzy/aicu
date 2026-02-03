"use client";
import HeaderPage from "@/components/Shared/HeaderPage";
import React, { useState } from "react";
import ApplicationProcedures from "./components/ApplicationProcedures";
import DivinityRequirements from "./components/DivinityRequirements";
import Intro from "./components/Intro";

interface ProgramInfo {
   isExpanded: boolean;
   requirements: string[];
}

interface ProgramsData {
   [key: string]: ProgramInfo;
}

interface ExpandedSections {
   [key: string]: boolean;
}

const programsData: ProgramsData = {
   "Ordination & Certificate Programs": {
      isExpanded: false,
      requirements: ["Proof of Completion of High School", "Proof of Completion of an Associate Degree"],
   },
   "Undergraduate Degree": {
      isExpanded: false,
      requirements: [
         "High School Diploma or equivalent",
         "Minimum GPA of 2.5",
         "Standardized test scores (SAT/ACT)",
         "Letters of recommendation",
      ],
   },
   "Graduate Degrees": {
      isExpanded: false,
      requirements: [
         "Bachelor's degree from accredited institution",
         "Minimum GPA of 3.0",
         "GRE or GMAT scores",
         "Letters of recommendation",
         "Statement of purpose",
      ],
   },
   "Doctoral Degrees": {
      isExpanded: false,
      requirements: [
         "Master's degree in related field",
         "Research proposal",
         "Academic writing sample",
         "Interview with faculty",
         "Professional experience (if applicable)",
      ],
   },
};

const RequirementsComponent: React.FC = () => {
   const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

   const toggleSection = (sectionName: string): void => {
      setExpandedSections((prev) => ({
         ...prev,
         [sectionName]: !prev[sectionName],
      }));
   };

   return (
      <>
         <title>Requirements for Admission</title>
         <HeaderPage
            text="Requirements for Admission"
            image="/admission/ad-two.jpg"
         />
         <Intro />
         <div className="max-w-[1200px] my-[3rem] mx-auto grid grid-cols-2">
            <div>
               <img
                  src="/admission/ad-three.jpg"
                  alt="Requirements"
                  className="w-full rounded-[20px]"
               />
            </div>
            <div className=" p-6">
               <div className="mb-8">
                  <h2 className="text-xl text-blue-600 mb-4">The following requirements apply:</h2>
               </div>

               <div className="space-y-4">
                  {Object.entries(programsData).map(([programName, programInfo]) => (
                     <div
                        key={programName}
                        className="border-b border-gray-200"
                     >
                        <div
                           className="flex items-center justify-between py-4 cursor-pointer"
                           onClick={() => toggleSection(programName)}
                        >
                           <h3 className="text-lg font-semibold">{programName}</h3>
                           <button className="text-blue-600 text-2xl">
                              {expandedSections[programName] ? "−" : "+"}
                           </button>
                        </div>

                        {expandedSections[programName] && (
                           <div className="pb-4">
                              <ul className="list-none space-y-2">
                                 {programInfo.requirements.map((requirement, index) => (
                                    <li
                                       key={index}
                                       className="flex items-start"
                                    >
                                       <span className="text-blue-600 mr-2">✓</span>
                                       <span>{requirement}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <ApplicationProcedures />
         <DivinityRequirements />
      </>
   );
};

export default RequirementsComponent;
