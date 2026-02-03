"use client";

import { programs_main } from "@/components/Pages/Admission/Programs/constants";
import ProgramsPage from "@/components/Pages/Admission/Programs/ProgramsPage";
import { notFound, usePathname, useRouter } from "next/navigation";
import React from "react";

const ProgramsPageMain = () => {
   const params = usePathname().split("/")[4];

   const filterResearch = programs_main[params];
   const router = useRouter();
   if (!filterResearch) {
      notFound();
   }
   return <ProgramsPage data={filterResearch} />;
};

export default ProgramsPageMain;
