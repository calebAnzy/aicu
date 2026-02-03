import HeaderPage from "@/components/Shared/HeaderPage";
import React from "react";

const contactInfo = {
   title: "Paying for your Education",
   description:
      "It's important to understand the ins and outs of paying for college and make your financial plan. The Financial Aid Office assists prospective students with the application process and financial aid. To request information on AICU's programs, please complete this online inquiry form.",
   contacts: {
      // admissions: {
      //    label: "Admissions",
      //    email: "admissions@AICU.us",
      // },
      financialAid: {
         label: "Financial Aid",
         email: "americanintchristianuniversity@gmail.com",
      },
      phone: "+180337208012",
   },
   address: {
      region: "Columbia",
      university: "American International Christian University",
      office: "Office of Admissions and Financial Aid",
      street: "Usa Office 1201 Main Columbia Sc 39201. Suite 1989",
   },
   buttons: [
      {
         text: "GET MORE INFORMATION",
         link: "mailto:americanintchristianuniversity@gmail.com",
      },
      {
         text: "INTERNATIONAL STUDENTS",
         link: "/admissions/financial-informattion",
      },
   ],
};

const ActionButton = ({ text, link }) => (
   <a
      href={link}
      className="block w-full text-center py-3 px-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 mb-4 rounded"
   >
      {text}
   </a>
);

const ContactSection = ({ content }) => (
   <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-start">
         <div className="relative">
            <img
               src="/new/n-4.jpg"
               alt="Financial Aid"
               className="rounded-lg shadow-lg object-cover w-full h-auto mb-8 lg:mb-0"
            />
         </div>

         <div>
            <h2 className="text-3xl font-bold text-[#4A5DB4] mb-6">{content.title}</h2>
            <p className="text-gray-600 mb-8">{content.description}</p>

            <div className="mb-8">
               {/* <p className="mb-2">
                  <span className="font-semibold">{content?.contacts?.admissions?.label}:</span>{" "}
                  <a
                     href={`mailto:${content?.contacts?.admissions?.email}`}
                     className="text-[#4A5DB4] hover:text-[#4A5DB4]/80"
                  >
                     {content?.contacts?.admissions?.email}
                  </a>
               </p> */}
               <p className="mb-2">
                  <span className="font-semibold">{content?.contacts.financialAid?.label}:</span>{" "}
                  <a
                     href={`mailto:${content.contacts.financialAid.email}`}
                     className="text-[#4A5DB4] hover:text-[#4A5DB4]/80"
                  >
                     {content.contacts.financialAid.email}
                  </a>
               </p>
               <p className="mb-4">
                  <span className="font-semibold">Phone:</span> {content.contacts.phone}
               </p>

               <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Mailing Address:</h3>
                  <p className="text-gray-600">{content.address.region}</p>
                  <p className="text-gray-600">{content.address.university}</p>
                  <p className="text-gray-600">{content.address.office}</p>
                  <p className="text-gray-600">{content.address.street}</p>
                  <p className="text-gray-600">{content.address.location}</p>
               </div>
            </div>

            <div className="space-y-4">
               {content.buttons.map((button, idx) => (
                  <ActionButton
                     key={idx}
                     text={button.text}
                     link={button.link}
                  />
               ))}
            </div>
         </div>
      </div>
   </div>
);

const FinancialAid = () => {
   return (
      <>
         <div className="min-h-screen bg-gray-50">
            <HeaderPage
               text="Financial Aid"
               image="/admission/ad-22.jpg"
            />

            <ContactSection content={contactInfo} />
         </div>
      </>
   );
};

export default FinancialAid;
