import axios from "axios";
import * as cheerio from "cheerio";

export async function fetchImages() {
   const url = "https://runa.us/2024/06/13/graduation-2024/";

   try {
      const { data: html } = await axios.get(url);
      const $ = cheerio.load(html);

      // Extract image sources
      const images = [];
      $("img.attachment-thumbnail").each((_, element) => {
         const src = $(element).attr("src");
         const alt = $(element).attr("alt") || ""; // Optional alt text
         if (src) {
            images.push({ src, alt });
         }
      });

      return images;
   } catch (error) {
      console.log("Error fetching images:", error.message);
      throw new Error("Failed to fetch images.");
   }
}
