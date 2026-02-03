import History from "@/components/Pages/About/History";
import HeaderPage from "@/components/Shared/HeaderPage";
import React from "react";

const HistoryPage = () => {
   return (
      <>
         <HeaderPage
            text="History"
            image="/about/mission-five.jpg"
         />
         <History />
      </>
   );
};

export default HistoryPage;
