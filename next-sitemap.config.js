/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: "https://aicuedu.org", // Replace with your actual domain
   generateRobotsTxt: true,
   exclude: ["/admin/*", "/dashboard/*"],
   // Optional: custom transformations
   transform: async (config, url) => {
      return {
         loc: url,
         changefreq: "daily",
         priority: 0.7,
         lastmod: new Date().toISOString(),
      };
   },
};
