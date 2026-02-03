"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const MissionAndVisionFirst = () => {
   const [activeSection, setActiveSection] = useState(null);

   const content = {
      "Mission & Vision": {
         information: [
            "Mission: At AICU, our mission is to cultivate a Christ-centered community that develops leaders as ambassadors of Jesus Christ, promoting spiritual growth, moral integrity, and academic excellence to advance God's Kingdom in a diverse world.",

            "Vision: Our vision is to be a globally recognized institution that shapes Christ-centered leaders who excel academically and advance God's Kingdom through transformative innovation in society.",
         ],
      },
      "Statement of Faith": {
         // intro: "In alignment with the Lausanne Covenant, American International Christian University (AICU) seeks to be a community that glorifies God through academic excellence, spiritual formation, and faithful witness to the world. sAt AICU, we believe in:",
         information: [
            `At AICU, we are guided by a steadfast belief in the transformative power of education and the principles of integrity, compassion, and service. Our faith inspires us to create a community that values diversity, fosters mutual respect, and empowers individuals to achieve their fullest potential.
We are committed to cultivating a culture that reflects the highest ethical standards, promotes social responsibility, and encourages the pursuit of truth and knowledge. At the heart of AICU lies our dedication to shaping leaders who are not only equipped with academic excellence but also grounded in strong moral values to positively impact the world.
`,
         ],
      },
      "Institutional Objectives": {
         information: [
            "Foster Spiritual Growth and Moral Integrity: Cultivate a deep, authentic Christian faith in students, encouraging them to embody Christ's teachings and uphold strong moral and ethical values in their personal and professional lives.",
            "Promote Academic Excellence and Holistic Education: Provide rigorous, intellectually challenging academic programs that integrate Christian principles. These programs will ensure that students are well-prepared to lead while nurturing their spiritual, intellectual, emotional, and physical development.",
            "Develop Effective and Ethical Leaders: Equip students with leadership skills rooted in Christian ethics, enabling them to influence and transform communities, professions, and global missions with integrity and purpose.",
            "Embrace Diversity and Foster a Collaborative Community: Create an inclusive learning environment that celebrates global diversity and builds a supportive, collaborative community among faculty, staff, and students, fostering mutual respect and spiritual growth.",
            "Engage in Research, Innovation, and Community Service: Encourage research and innovative thinking from a Christian worldview while promoting active participation in service and outreach programs that advance God's kingdom and contribute to societal well-being.",
            "Provide Accessible Online Learning Tools: This technology will give students access to teaching resources and allow them to communicate with professors efficiently. Develop a physical library and massive online repository of reading materials, which will be linked with existing online theological libraries and build a media vault with unique picture, video, and audio materials. The goal is to support every student's need for any material that will aid in the study process.",
         ],
      },
   };

   const toggleSection = (section) => {
      setActiveSection((prevSection) => (prevSection === section ? null : section));
   };

   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.2rem] py-[5rem] px-[1rem] max-w-[1200px] mx-auto">
            <div>
               <img
                  src="/about/mission-two.jpg"
                  alt="Mission"
                  className="w-[100%] rounded-[20px]"
               />
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg">
               {Object.entries(content).map(([title, details]) => {
                  return (
                     <div
                        key={title}
                        className="border-b border-gray-200 last:border-b-0"
                     >
                        <div
                           className="flex justify-between items-center cursor-pointer py-4"
                           onClick={() => toggleSection(title)}
                        >
                           <h2 className="text-blue-900 font-bold">
                              <span className="font-bold">{title}:</span>{" "}
                              {title === "Statement of Faith" ? "" : details.mission}
                           </h2>
                           {activeSection === title ? (
                              <ChevronUp className="w-6 h-6 text-blue-900" />
                           ) : (
                              <ChevronDown className="w-6 h-6 text-blue-900" />
                           )}
                        </div>
                        {activeSection === title && (
                           <div className="pb-4">
                              {typeof details === "string" ? (
                                 <p className="text-gray-700">{details.vision}</p>
                              ) : (
                                 <div>
                                    <p className="text-[#000000b7] my-[1.2rem] text-[.9rem]">
                                       {details.intro ? details.intro : ""}
                                    </p>
                                    <ul
                                       className={`${
                                          title == "Mission & Vision" || "Statement of Faith"
                                             ? "list-none"
                                             : "list-decimal pl-6"
                                       }  text-gray-700 space-y-2`}
                                    >
                                       {details.information.map((item, index) => (
                                          <li key={index}>
                                             <span className="font-bold text-[.9rem] text-[#000000b7]">
                                                {item.split(":")[0]}:
                                             </span>{" "}
                                             {item.split(":")[1]}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              )}
                           </div>
                        )}
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="bg-[#00000021] h-[180px] my-[2rem] overflow-hidden max-w-[1200px] mx-auto py-[1.3rem] grid grid-cols-1 md:grid-cols-2 gap-[1rem] p-[1.3rem] items-center">
            <img
               src="/about/mission-three.jpg"
               alt="Mission Three "
               className="object-cover w-[100%!important] h-[180px] rounded-[20px]"
            />
            <p>
               The University is committed to cultivating an atmosphere where students excel
               spiritually and academically. Accordingly, the University has elected to undergo
               institutional accreditation with the Transnational Association of Christian Colleges
               and Schools. We are actively working to meet the necessary standards through a
               comprehensive assessment that will verify compliance.
            </p>
         </div>
      </>
   );
};

export default MissionAndVisionFirst;
