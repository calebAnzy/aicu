"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Head from "next/head";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      setIsLoaded(true);
   }, []);

   return (
      <html lang="en">
         <body>
            <title>American International Christian University | AICU</title>
            <meta
               name="description"
               content="Welcome to American International Christian University (AICU), a leading Christian institution dedicated to providing quality education and transformational leadership. Explore our unique programs, discover our mission, and join us as we grow together."
            />
            {/* Open Graph Metadata */}
            <meta
               property="og:title"
               content="American International Christian University | AICU"
            />
            <meta
               property="og:description"
               content="Welcome to AICU, a leading Christian institution dedicated to quality education and transformational leadership."
            />
            <meta
               property="og:image"
               content="/logo-uni.png"
            />
            <meta
               property="og:url"
               content="https://aicuedu.org"
            />
            <meta
               property="og:type"
               content="website"
            />

            {/* Twitter Card Metadata */}
            <meta
               name="twitter:card"
               content="summary_large_image"
            />
            <meta
               name="twitter:title"
               content="American International Christian University | AICU"
            />
            <meta
               name="twitter:description"
               content="Welcome to AICU, a leading Christian institution dedicated to quality education and transformational leadership."
            />
            <meta
               name="twitter:image"
               content="/logo-uni.png"
            />
            <meta
               name="google-site-verification"
               content="lAHQ7mxq9KohBtYqsbyz_re5rp6-2RHPWc2giu8IfIk"
            />

            {/* Favicon */}
            <link
               rel="icon"
               href="/logo-uni.png"
            />
            {isLoaded && (
               <div>
                  <Header />
                  {children}
                  <Footer />
               </div>
            )}
         </body>
      </html>
   );
}
