import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";
import CoreValues from "../SharedAbout/CoreValues";

const AtGlanceComponent = () => {
   const programs = [
      { number: 2, title: "Ordination Tracks" },
      { number: 3, title: "Undergraduate Degree" },
      { number: 5, title: "Graduation Certificates" },
      { number: 4, title: "Graduate Degrees" },
      { number: 2, title: "Doctoral Degrees" },
   ];
   return (
      <>
         <title>AICU at a Glance</title>
         <HeaderPage
            text="AICU at a Glance"
            image="/about/al-5.jpg"
         />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-[1100px] p-4 md:p-8 mx-auto items-center">
            <div className="space-y-4">
               <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#4A5DB4]">
                  The AICU Community
               </h1>
               <p className="text-base md:text-lg leading-relaxed">
                  At American University, you will see individuals from diverse backgrounds united
                  by their faith and shared dedication to positively impacting the world. Our
                  community fosters a sense of closeness and mutual care while providing students
                  with a vast network of peers worldwide. It is our hope that your university
                  experience will be filled with joy, friendship, and transformative educational
                  moments. Throughout your journey at AICU, our faculty and staff will be here to
                  support you.
               </p>
            </div>
            <div className="w-full aspect-video md:aspect-square">
               <img
                  src="/about/al-6.jpg"
                  alt="AIC AT Glance"
                  className="w-full h-full object-cover rounded-xl"
               />
            </div>
         </div>

         <div className="bg-[#336] py-8 md:py-16 px-4">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
               <div className="w-full aspect-video md:aspect-square">
                  <img
                     src="/about/al-7.jpg"
                     alt=""
                     className="w-full h-full object-cover rounded-xl"
                  />
               </div>

               <div className="bg-[#202041] p-4 md:p-8 rounded-xl space-y-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                     The AICU Story
                  </h1>
                  <p className="text-base md:text-lg text-white leading-relaxed">
                     Founded with a vision to provide a transformative education rooted in Christian
                     values, American International Christian University (AICU) has a rich history
                     of academic excellence, spiritual growth, and global engagement. Established in
                     2015, AICU set out to create an institution that would not only prepare
                     students for professional success but also shape them into compassionate,
                     ethical leaders who can make a positive impact in the world. From its humble
                     beginnings, AICU has grown into a renowned university that attracts students
                     from all corners of the globe, united by a shared commitment to knowledge,
                     faith, and service. Over the years, AICU has consistently expanded its academic
                     offerings to meet the changing demands of the global job market while staying
                     true to its core mission of integrating Christian principles into every aspect
                     of education. The university’s faculty and staff have been instrumental in
                     nurturing a diverse, inclusive community that fosters academic achievement,
                     personal growth, and spiritual development. Through innovative teaching,
                     research, and community engagement, AICU has established itself as a leader in
                     higher education, with a strong emphasis on preparing students to lead with
                     integrity and contribute meaningfully to society. Today, AICU stands as a
                     beacon of excellence, continually striving to provide students with the tools
                     and resources they need to succeed in an ever-changing world.
                  </p>

                  <Link
                     className="bg-yellow-500 inline-block mt-4 font-bold rounded-full py-2 px-6 uppercase text-white text-sm md:text-base hover:bg-yellow-600 transition-colors"
                     href="/about/history"
                  >
                     AICU's History
                  </Link>
               </div>
            </div>
         </div>

         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-[1100px] p-4 md:p-8 mx-auto items-center">
            <div className="w-full max-w-[400px] mx-auto md:mx-0">
               <img
                  src="/about/al-8.jpg"
                  alt=""
                  className="w-full rounded-full border-[10px] md:border-[25px] border-[#4A5DB4]"
               />
            </div>
            <div className="space-y-4">
               <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#4A5DB4]">
                  Our President
               </h1>
               <p className="text-base md:text-lg leading-relaxed">
                  Pastor Shola Awobajo is passionate about identifying and empowering youth and
                  young adults and fostering their development as effective leaders within faith
                  communities and in society at large.
               </p>
               <Link
                  className="border-[2px] border-[#4A5DB4] shadow-md inline-block mt-4 font-bold rounded-full py-2 px-6 uppercase text-sm md:text-base hover:bg-[#4A5DB4] hover:text-white transition-colors"
                  href="/about/history"
               >
                  A MESSAGE FROM THE PRESIDENT
               </Link>
            </div>
         </div> */}

         <section className="text-center py-8 md:py-16 bg-white">
            <h2 className="text-lg md:text-xl font-bold text-[#4A5DB4] mb-6">Programs Offered</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
               {programs.map((program, index) => (
                  <div
                     key={index}
                     className="text-center p-4"
                  >
                     <h3 className="text-2xl md:text-4xl font-semibold text-[#4A5DB4]">
                        {program.number}
                     </h3>
                     <p className="text-xs md:text-sm text-gray-600">{program.title}</p>
                  </div>
               ))}
            </div>
         </section>
         <CoreValues />
      </>
   );
};

export default AtGlanceComponent;
