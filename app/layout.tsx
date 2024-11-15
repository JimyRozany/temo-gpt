import type { Metadata } from "next";
import localFont from "next/font/local";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { LayoutProvider } from "@/utlis/LayoutProvider";

const tajawal = Tajawal({
  weight: ["200","400", "500", "700"],
  style: "normal",
  subsets: ["arabic"],
  variable:'--font-tajawal'
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TemoGPT",
  description: "TemoGPT is an application for learning programming for students with artificial intelligence based on OpenAI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" dir="ltr">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${tajawal.className}`}
      >
      
        <LayoutProvider>
        {children}

        </LayoutProvider>
      </body>
    </html>
  );
}
