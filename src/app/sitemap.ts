import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: "https://aicuedu.org",
         lastModified: new Date(),
         changeFrequency: "yearly",
         priority: 1,
      },
      // Next.js will automatically add all your routes here
   ];
}
