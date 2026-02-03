import Link from "next/link";
import React from "react";

const History = () => {
   return (
      <div className=" py-[4rem] px-[1rem]">
         <div className="max-w-[1100px] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
            <div>
               <h1 className="text-pri text-[2rem] font-bold ">Our History</h1>

               <p className="text-[#00000094] mt-[1rem] leading-relaxed">
                  Founded with a vision to provide a transformative education rooted in Christian
                  values, American International Christian University (AICU) has a rich history of
                  academic excellence, spiritual growth, and global engagement. Established in 2015,
                  AICU set out to create an institution that would not only prepare students for
                  professional success but also shape them into compassionate, ethical leaders who
                  can make a positive impact in the world. From its humble beginnings, AICU has
                  grown into a renowned university that attracts students from all corners of the
                  globe, united by a shared commitment to knowledge, faith, and service.
               </p>
               <p className="text-[#00000094] mt-[1rem] leading-relaxed">
                  Over the years, AICU has consistently expanded its academic offerings to meet the
                  changing demands of the global job market while staying true to its core mission
                  of integrating Christian principles into every aspect of education. The
                  university’s faculty and staff have been instrumental in nurturing a diverse,
                  inclusive community that fosters academic achievement, personal growth, and
                  spiritual development. Through innovative teaching, research, and community
                  engagement, AICU has established itself as a leader in higher education, with a
                  strong emphasis on preparing students to lead with integrity and contribute
                  meaningfully to society. Today, AICU stands as a beacon of excellence, continually
                  striving to provide students with the tools and resources they need to succeed in
                  an ever-changing world.
               </p>

               <Link
                  className="border border-black py-[1rem] px-[3rem] text-pri rounded-full inline-block mt-[1rem]"
                  href="/about/mission"
               >
                  Mission Statement
               </Link>
            </div>

            <div className="w-full flex items-center justify-center my-[3rem]">
               {" "}
               <img
                  src="/about/mission-four.png"
                  alt="Mission FOur"
                  className="rounded-[20px] hover:grayscale"
               />
            </div>
         </div>
      </div>
   );
};

export default History;
