"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { carousel } from "./constants";

// Type for Carousel Slide Data
interface CarouselSlide {
   imageUrl: string;
   title: string;
   description: string;
   ctaText: string;
   ctaUrl: string;
}

const HeroSection: React.FC = () => {
   return (
      <div className="h-screen">
         <div className="h-full">
            <Carousel
               className="rounded-md max-w-full relative"
               plugins={[
                  Autoplay({
                     delay: 4000,
                  }),
               ]}
            >
               <CarouselContent className="w-full h-full flex items-center">
                  {carousel.map((slide: CarouselSlide, index: number) => (
                     <CarouselItem
                        key={index}
                        className="w-full h-screen flex items-center relative bg-cover bg-center"
                        style={{
                           backgroundImage: `url(${slide.imageUrl})`,
                        }}
                     >
                        {/* Dark overlay */}
                        <div
                           className="absolute inset-0 bg-black opacity-70"
                           aria-hidden="true"
                        ></div>

                        {/* Slide content */}
                        <div className="relative z-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] mx-auto text-white px-4">
                           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                              {slide.title}
                           </h1>
                           <p className="w-full sm:w-[80%]  text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                              {slide.description}
                           </p>
                           <Link
                              href={slide.ctaUrl}
                              className="inline-block border transition-all border-white text-white px-6 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black"
                           >
                              {slide.ctaText}
                           </Link>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-20" />
               <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-20" />
            </Carousel>
         </div>
      </div>
   );
};

export default HeroSection;
