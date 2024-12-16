// Use the client directive for using usePathname hook.
"use client";
import React from "react";
// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import NavTwo from "@/components/nav2/NavTwo";

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname.startsWith('/dashboard')) {
    return <>{children}</>;
  }

  return (
    <>
      {/* <Navbar /> */}
      <NavTwo />
      {children}
    </>
  );
};
