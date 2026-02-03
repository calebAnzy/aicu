import HeaderPage from "@/components/Shared/HeaderPage";
import ApplicationForm from "./components/ApplicationForm";
import Programs from "./components/Programs";

const DegreePrograms = () => {
   return (
      <>
         <title>Apply for Undergraduate and Masters</title>
         <HeaderPage
            text="Apply for Undergraduate and Masters"
            image="/admission/ad-22.jpg"
         />
         <Programs
            image="/admission/ad-19.jpg"
            desc="By applying to the undergraduate or graduate Degree program at AICU you have made the bold decision
                     to dedicate your time to learning both academically and spiritually. You are applying to an
                     institution that is committed to guiding you towards your future and onwards in God's service."
            title="Undergraduate & Graduate Degrees"
         />
      </>
   );
};

export default DegreePrograms;
