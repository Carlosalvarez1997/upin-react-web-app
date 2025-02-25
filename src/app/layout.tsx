import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { createClient } from "utils/supabase/server";
import { Analytics } from "@vercel/analytics/react"

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upin Web App",
  description: "Upin Web App",
  keywords: ["upin", 
    "app",
    "upin",
    "event tracking",
    "community app",
    "local events",
    "meetups",
    "social networking",
    "group events",],
  openGraph: {
    title: "Upin Web App",
    description: "Upin - Create. Join. Connect.",
    url: "https://upinweb-beta.vercel.app", // Update with the actual URL
    siteName: "Upin",
    images: [
      {
        url: "/upin.png", // Image for link preview
        width: 1200,
        height: 630,
        alt: "Upin App Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // or "summary" for smaller card
    title: "Upin Web App",
    description: "Upin App - Create. Join. Connect.",
    images: [
      "/upin.png", // Same image as OG
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
     
      <body>
        <Header initialSession={session} />
        {children}
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}