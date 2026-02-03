import React from "react";

const HeaderPage = ({ text, image }: { text: string; image: string }) => {
   return (
      <section
         className="relative h-[20vh] md:h-[50vh] flex justify-center items-center text-white text-center bg-cover bg-center bg-fixed"
         style={{
            backgroundImage: `url(${image})`,
         }}
      >
         {/* Overlay for darker background effect */}
         <div
            className="absolute inset-0 bg-black opacity-70"
            aria-hidden="true"
         ></div>
         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative z-40 uppercase px-4">{text}</h1>
      </section>
   );
};

export default HeaderPage;
