import React from "react";
import { Phone, Mail } from "lucide-react";
import HeaderPage from "@/components/Shared/HeaderPage";

interface StaffMember {
   image: string;
   name: string;
   link?: string;
}

const staffMembers: StaffMember[] = [
   {
      image: "/new/n-1.jpg",
      name: "Dr. Akinsola Kings Ojo",
      link: "#",
   },
   {
      image: "/new/n-2.jpg",
      name: "Dr. Douglas Barnett",
      link: "#",
   },
];

const ContactSection: React.FC = () => {
   return (
      <>
         <title>Our Admissions Team</title>
         <HeaderPage
            text="Our Admissions Team"
            image="/admission/ad-eight.jpg"
         />
         <div className="max-w-6xl mx-auto px-4 py-12 md:px-6 lg:px-8">
            {/* Staff Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
               {staffMembers.map((member, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center"
                  >
                     <div className="w-64 h-64 mb-4">
                        <img
                           src={member.image}
                           alt={member.name}
                           className="w-full h-full object-cover rounded-lg"
                        />
                     </div>
                     <p className="text-[#4052B5] text-lg font-medium hover:underline">
                        {member.name}
                     </p>
                  </div>
               ))}
            </div>
            <div className="bg-black h-[1px] w-[800px] my-[2rem] mx-auto"></div>
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
               {/* Phone */}
               <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#C17F24] flex items-center justify-center mb-3">
                     <Phone className="w-6 h-6 text-white" />
                  </div>
                  <a
                     href="tel:80337208012"
                     className="text-gray-700 hover:text-[#4052B5]"
                  >
                     803 372 08012
                  </a>
               </div>

               {/* Email */}
               <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#C17F24] flex items-center justify-center mb-3">
                     <Mail className="w-6 h-6 text-white" />
                  </div>
                  <a
                     href="/"
                     className="text-gray-700 hover:text-[#4052B5]"
                  >
                     aicuglobalcampusreignition@gmail.com
                  </a>
               </div>
            </div>

            {/* Divider Line */}
            <div className="max-w-3xl mx-auto mt-12">
               <hr className="border-gray-200" />
            </div>
         </div>
      </>
   );
};

export default ContactSection;
