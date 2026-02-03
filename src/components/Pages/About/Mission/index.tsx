import HeaderPage from "@/components/Shared/HeaderPage";
import React from "react";
import MissionAndVisionFirst from "./First";
import GodlyExcellence from "./GodlyEx";

const MissionStatement = () => {
   return (
      <div>
         <HeaderPage
            text="MISSION STATEMENT"
            image="/about/mission.jpg"
         />
         <MissionAndVisionFirst />
         <GodlyExcellence />
      </div>
   );
};

export default MissionStatement;
