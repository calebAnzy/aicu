"use client";
import { useState } from "react";
import { programs } from "./constants";
import ProgramCard from "@/components/Shared/ProgramCard";

const ProgramsSection = () => {
   const [tiltStyle, setTiltStyle] = useState({});

   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();

      // Calculate the position of the cursor relative to the container center
      const x = (clientX - left - width / 2) / 30; // Adjust division factor to control tilt intensity
      const y = (clientY - top - height / 2) / 30;

      setTiltStyle({
         transform: `rotateY(${x}deg) rotateX(${y}deg)`,
      });
   };

   const handleMouseLeave = () => {
      setTiltStyle({ transform: "rotateY(0deg) rotateX(0deg)" });
   };

   return (
      <div
         style={{
            backgroundImage: `url('program-img.jpg')`, // Replace with actual background image
            perspective: "1000px", // Adds 3D perspective
            position: "relative", // Required for overlay positioning
            overflow: "hidden",
         }}
         className="min-h-screen"
      >
         {/* Overlay */}
         <div
            style={{
               content: '""',
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
               zIndex: 1, // Keeps it above the background but below the content
            }}
         ></div>

         {/* Content */}
         <section
            className="relative bg-cover bg-center px-8 py-16 max-w-[1100px] mx-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
               zIndex: 2, // Places the content above the overlay
            }}
         >
            <div className="text-center mb-12">
               <h1 className="text-4xl font-bold text-white mb-4">AICU PROGRAMS</h1>
            </div>
            <div
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl"
               style={{
                  ...tiltStyle,
                  transition: "transform 0.1s ease-out", // Smooth transition for the tilt
               }}
            >
               {programs.map((program) => (
                  <ProgramCard
                     key={program.id}
                     program={program}
                  />
               ))}
            </div>
         </section>
      </div>
   );
};

export default ProgramsSection;
