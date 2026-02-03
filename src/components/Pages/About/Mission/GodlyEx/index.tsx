import React from "react";

const GodlyExcellence = () => {
   const excellenceCategories = [
      {
         title: "Excellence in Teaching",
         description:
            "World Class Professors who are global leaders teach every course at AICU. These professors are spirit-controlled, and a large percentage possess earned doctorates from accredited institutions.",
      },
      {
         title: "Excellence of Access to Teaching Resource",
         description:
            "AICU deploys various online tools to create a robust, synchronous tool for students to access teaching resources. Students from all over the nation can interact directly with our professors and are given every resource needed to be trained as God’s true ambassadors.",
      },
      {
         title: "Excellence of Access to Study Material",
         description:
            "AICU is developing both a physical library and a massive online repository of reading materials. The college has partnered with existing online theological libraries and is building a media vault with unique picture, video, and audio materials to support every need of students in the study process.",
      },
      {
         title: "Excellence of Accreditation",
         description:
            "AICU is committed to a process of accreditation, a public statement affirming our dedication to serving society with the highest level of accountability. This includes a rigorous commitment to internal standards and evaluation by an external body, protecting the value of the service which students receive.",
      },
      {
         title: "Excellence in Commitment to the Root",
         description:
            "AICU is dedicated to holiness and an eternal focus, serving communities and seeking the prosperity of people. AICU confronts complex faith questions, including what it means to be holy in 21st-century America, planting community-impacting churches, and delivering effective messages. This commitment is renewed continually.",
      },
   ];

   return (
      <div className="my-[2rem] py-[2rem] px-[1rem]">
         <div className="max-w-[1200px] mx-auto">
            <h1 className="text-[#4A5DB4] text-center text-[2.5rem] font-bold my-[2rem]">Godly Excellence</h1>

            {/* Excellence Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
               {excellenceCategories.map((item, idx) => (
                  <div className="bg-lightGray p-[2rem] rounded-md">
                     <h1 className="font-bold">{item.title}</h1>
                     <p className="text-[.9rem] leading-relaxed mt-[1rem]">{item.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default GodlyExcellence;
