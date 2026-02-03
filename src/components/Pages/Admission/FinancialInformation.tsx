import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";

interface Contact {
   name: string;
   email: string;
}

interface HeroContent {
   title: string;
   subtitle: string;
   description: string;
   availability: string;
   contact: Contact;
}

interface InformationSection {
   title: string;
   content: string[];
}

const heroContent: HeroContent = {
   title: "Federal Financial Aid is now Available.",
   subtitle: "Congratulations and good news to all our students.",
   description: "You can now apply for financial aid to study at AICU.",
   availability: "This opportunity is available for both enrolled and prospective students.",
   contact: {
      name: "Dr. Danielle Okoro",
      email: "finaid@rccgnaseminary.org",
   },
};

const informationSections: InformationSection[] = [
   {
      title: "Financial Support Information",
      content: [
         "Below are the estimated expenses for F-1 based on a full 12-month term (fall, spring, and summer semesters). Please note this is an estimate of expenses for one full year of study and students may pay an amount other than what is listed below based on the number of hours enrolled, housing options, and academic major.",
         "Students are required to provide proof of funding for one year of study at AICU prior to admission, before an I- 20/DS-2019 can be issued, and at the visa interview with the U.S. Department of State.",
      ],
   },
];

const HeroSection: React.FC<{ content: HeroContent }> = ({ content }) => (
   <div>
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <p>{content.description}</p>
      <p>{content.availability}</p>
      <p>
         Contact: {content.contact.name} - {content.contact.email}
      </p>
   </div>
);

const InformationSection: React.FC<{ section: InformationSection }> = ({ section }) => (
   <div>
      <h3>{section.title}</h3>
      {section.content.map((paragraph, index) => (
         <p key={index}>{paragraph}</p>
      ))}
   </div>
);

const FinancialInformation: React.FC = () => (
   <div>
      <HeaderPage
         text="Financial Information"
         image="/admission/ad-22.jpg"
      />
      <HeroSection content={heroContent} />
      {informationSections.map((section, index) => (
         <InformationSection
            key={index}
            section={section}
         />
      ))}
   </div>
);

export default FinancialInformation;
