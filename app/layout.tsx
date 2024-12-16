import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Tajawal } from "next/font/google";
import "./globals.css";

import { LayoutProvider } from "@/utils/LayoutProvider";
import { Toaster } from "sonner";
const tajawal = Tajawal({
  weight: ["200", "400", "500", "700"],
  style: "normal",
  subsets: ["arabic"],
  variable: "--font-tajawal",
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "TemoGPT",
  description:
    "TemoGPT is an application for learning programming for students with artificial intelligence based on OpenAI.",
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
        className={`${tajawal.className} !scroll-smooth `}
      >
        <LayoutProvider>{children}</LayoutProvider>
        <Toaster
          toastOptions={{
            unstyled: false,
            classNames: {
              error: "bg-red-400",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
      </body>
    </html>
  );
}
