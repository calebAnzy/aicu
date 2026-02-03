"use client";
import React from "react";
import { notFound, usePathname, useRouter } from "next/navigation";
import { faculty } from "@/components/Pages/Faculty/constants";
import { programsAc } from "@/components/Pages/Academics/constant";
import AcademicsComponent from "@/components/Pages/Academics";

const AcademicsPage = () => {
   const params = usePathname().split("/")[2];

   const filterResearch = programsAc[params];
   const router = useRouter();
   if (!filterResearch) {
      notFound();
   }

   return <AcademicsComponent data={filterResearch} />;
};

export default AcademicsPage;
