import React from "react";

const Intro = () => {
   return (
      <div className="py-[4rem] px-[1rem]">
         <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[1rem] items-center justify-center">
            <p>Our admissions process is about finding students whose values align with AICU’s mission.</p>
            <img
               src="/admission/ad-five.jpg"
               alt=""
               className="w-[400px] rounded-[20px]"
            />
         </div>
      </div>
   );
};

export default Intro;
