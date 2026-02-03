"use client";
import { usePathname } from "next/navigation";
import React from "react";

const GenPage = () => {
   const params = usePathname();

   console.log(params);
   return <div>GenPage</div>;
};

export default GenPage;
