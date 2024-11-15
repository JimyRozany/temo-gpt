 // Use the client directive for using usePathname hook.
 'use client'
import React from "react"
 // Use usePathname for catching route name.
 import { usePathname } from 'next/navigation';
import Navbar from "@/components/navbar/Navbar";
 
 export const LayoutProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
     const pathname = usePathname();
     console.log(pathname);
     if(pathname === "/login"){

      return (
        <>
         {children}
        </>
      )
     }
     
     return (
         <>
          <Navbar />
             {children}
         </>
     )
 };