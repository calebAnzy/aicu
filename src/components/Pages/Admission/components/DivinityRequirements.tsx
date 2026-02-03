"use client";
import React from "react";

interface DivinityRequirement {
   title: string;
   description: string;
}

const divinityRequirements: DivinityRequirement[] = [
   {
      title: "Statement of Faith",
      description: "Please share how you became a follower of Christ",
   },
   {
      title: '"My Most Memorable Ministry Experience" Essay',
      description:
         "Describe a ministry experience that left an impact on you. Submit a maximum 750-word double-spaced document in the style and tone of a formal academic paper.",
   },
   {
      title: "Pastoral Recommendation",
      description: "The letter should come from someone who knows you and your relationship with God",
   },
];

const DivinityRequirements: React.FC = () => {
   return (
      <div className="max-w-[1200px] mx-auto py-8 ">
         <h2 className="text-2xl md:text-3xl font-bold text-[#C17F24] mb-8">
            Additional requirements for Divinity Programs
         </h2>

         <div className="space-y-8">
            {divinityRequirements.map((requirement, index) => (
               <div
                  key={index}
                  className="space-y-2"
               >
                  <h3 className="text-lg font-semibold text-[#4052B5]">{requirement.title}</h3>
                  <div className="flex items-start gap-2">
                     <span className="text-[#4052B5] mt-1">✓</span>
                     <p className="text-gray-700">{requirement.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default DivinityRequirements;
