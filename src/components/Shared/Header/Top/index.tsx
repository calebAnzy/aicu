"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
   return (
      <nav className="bg-[#0d0c37]  py-4 px-8">
         <div className="max-w-[1000px] mx-auto flex items-center md:justify-between gap-y-[2rem] flex-wrap justify-center">
            {" "}
            {/* Left side - Logo or title */}
            <div className="text-white font-medium text-sm">Students Achievements</div>
            {/* Middle - Search bar and button */}
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
               {/* Search bar */}
               <div className="flex items-center gap-3 pl-3 pr-4 py-2 text-gray-300 bg-[#0d0c37] border border-[#af9e5a] rounded-full outline-none placeholder-gray-500 w-full">
                  <Search
                     className=" text-gray-500"
                     size={16}
                  />
                  <input
                     type="text"
                     placeholder="Search"
                     className="bg-transparent outline-none border-none placeholder:text-[.8rem] pr-[2rem] w-full"

                     //  className="pl-8 pr-4 py-2 text-gray-300 bg-[#0d0c37] border border-[#af9e5a] rounded-full outline-none placeholder-gray-500"
                  />
               </div>

               {/* Button */}
               <Button className="bg-transparent px-8 py-2 text-xs font-bold text-white hover:bg-[#CAA71D] border border-[#af9e5a] rounded-full">
                  GIVE TO AICU
               </Button>
            </div>
            {/* Right side - Links */}
            <div className="flex items-center gap-4 text-white text-xs font-medium">
               <Link
                  href="#"
                  className="hover:text-[#CAA71D] transition-colors"
               >
                  Sign In
               </Link>
               <span className="text-gray-500">|</span>
               <Link
                  href="/contact"
                  className="hover:text-[#CAA71D] transition-colors"
               >
                  Contact Us
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
