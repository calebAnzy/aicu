"use client";
import React from "react";

interface ApplicationRequirement {
   title: string;
   items: string[];
}

const applicationData: ApplicationRequirement[] = [
   {
      title: "Application Fee",
      items: [
         "Application Fee $50 fee must be submitted at the time you apply. Payment can be made through the online portal. Alternatively money orders and checks can be made payable to RCCGNA SEMINARY and attached to the application.",
         "The application fee for the doctoral program is $75.",
      ],
   },
   {
      title: "Standard Passport Photo",
      items: ["Submit two copies of the identification pages of your passport"],
   },
   {
      title: "Admission Essay",
      items: [
         "In 250-300 words, describe how your personal faith and beliefs align with the mission of Redeemers University",
      ],
   },
   {
      title: "Letters of Recommendation",
      items: [
         "Professional Recommendation: The letter should come from a supervisor who is able to speak to your professional work",
         "You cannot be related to any person writing a letter of recommendation on your behalf",
      ],
   },
   {
      title: "Transcripts",
      items: [
         "Provide a notarized copy of an undergraduate transcript. If the application is for a post-graduate program, you must also include a notarized copy of a graduate transcript and/or professional certificates",
      ],
   },
];

const ApplicationProcedures: React.FC = () => {
   return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
         <h1 className="text-3xl md:text-4xl text-center font-bold text-[#4052B5] mb-8">Application Procedures</h1>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
               <p className="text-gray-700 mb-6">
                  All applicants should complete the application in its entirety and submit it to the Office of
                  Admission and Records at admissions@rccgnaseminary.org. The application must be accompanied by the
                  following:
               </p>

               {applicationData.map((section, index) => (
                  <div
                     key={index}
                     className="space-y-3"
                  >
                     <h2 className="text-xl font-semibold text-[#4052B5]">{section.title}</h2>
                     <ul className="space-y-3">
                        {section.items.map((item, idx) => (
                           <li
                              key={idx}
                              className="flex items-start gap-2"
                           >
                              <span className="text-[#4052B5] mt-1">✓</span>
                              <span className="text-gray-700">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <div className="hidden lg:block">
               <div className="relative h-full w-full">
                  <img
                     src="/admission/ad-four.jpg"
                     alt="Students in classroom"
                     className="rounded-lg object-cover h-full w-full"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ApplicationProcedures;
