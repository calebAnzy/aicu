"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface StatBoxProps {
   icon: React.ReactNode;
   value: string;
   label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, value, label }) => {
   const [count, setCount] = useState<number>(0);

   useEffect(() => {
      let start = 0;
      const end = parseInt(value.substring(0, 3), 10);
      if (start === end) return;

      const totalDuration = 2000;
      const incrementTime = (totalDuration / end) * 2;

      const timer = setInterval(() => {
         start += 1;
         setCount(start);
         if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
   }, [value]);

   return (
      <div className="bg-yellow-400 p-6 rounded-lg text-center shadow-md w-full flex items-center flex-col gap-[2rem]">
         <div className="text-4xl mb-2">{icon}</div>
         <div className="text-4xl font-bold text-blue-700">
            {count}
            {value.includes("%") && "%"}
         </div>
         <div className="text-lg text-blue-700">{label}</div>
      </div>
   );
};

export default StatBox;
