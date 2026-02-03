import React from "react";
import Programs from "./components/Programs";
import HeaderPage from "@/components/Shared/HeaderPage";

const DoctoralPrograms = () => {
   return (
      <>
         <title>Apply for Doctoral Programs</title>
         <HeaderPage
            text="Apply for Doctoral Programs"
            image="/admission/ad-20.jpg"
         />
         <Programs
            image="/admission/ad-21.jpg"
            desc="By applying to the Doctoral Degree in Ministry or Transformational Leadership programs at AICU, you have made a bold decision to invest in your academic and spiritual growth. You are joining an institution dedicated to advancing your future and supporting your journey in service to God."
            title="Doctoral Degrees"
         />
      </>
   );
};

export default DoctoralPrograms;
