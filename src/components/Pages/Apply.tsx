import React from "react";
import HeaderPage from "../Shared/HeaderPage";

const navigationLinks = [
   {
      title: "Admissions Requirements",
      href: "/admissions/requirements-for-admission",
   },
   { title: "Application Deadlines", href: "/admissions/add-drop-date-refunds" },
   { title: "International Students", href: "#" },
   { title: "FAQs", href: "#" },
];

const programCards = [
   {
      title: "Ordination Track",
      image: "/new/n-12.jpg",
      alt: "Person reading a book",
   },
   {
      title: "Undergraduate & Masters",
      image: "/new/n-13.jpg",
      alt: "Professor in discussion",
   },
   {
      title: "Doctoral",
      image: "/new/n-14.jpg",
      alt: "Graduate in cap and gown",
   },
];

const NavLink = ({ title, href }) => (
   <a
      href={href}
      className="block border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-colors duration-300 py-2 px-4 text-center"
      style={{ minWidth: "200px" }}
   >
      {title}
   </a>
);

const ProgramCard = ({ title, image, alt }) => (
   <div className="flex flex-col">
      <div className="relative h-[250px] overflow-hidden rounded-t-lg">
         <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
         />
      </div>
      <button className="py-3 px-6 bg-[#4CAF50] text-white hover:bg-[#45a049] transition-colors duration-300 rounded-b-lg text-center">
         {title}
      </button>
   </div>
);
const ApplyComponent = () => {
   return (
      <>
         <title>AICU | Apply</title>
         <HeaderPage
            text="Apply"
            image="/admission/ad-eleven.jpg"
         />
         <div className="max-w-7xl mx-auto py-16 px-4">
            <p className="text-center text-gray-700 mb-8">
               Find out more about our application process and your specific steps toward joining
               the RUNA community.
            </p>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
               {navigationLinks.map((link, index) => (
                  <NavLink
                     key={index}
                     {...link}
                  />
               ))}
            </div>

            {/* Program Selection Header */}
            <h2 className="text-center text-gray-700 text-xl mb-12">
               Ready to get started? Select your desired program below:
            </h2>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {programCards.map((card, index) => (
                  <ProgramCard
                     key={index}
                     {...card}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default ApplyComponent;
