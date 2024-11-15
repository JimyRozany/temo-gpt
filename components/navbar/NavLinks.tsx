"use client";
import Image from "next/image";
import cpuIcon from "@/public/images/cpu-icon.svg";
import codingIcon from "@/public/images/coding-icon.svg";
import ideaIcon from "@/public/images/idea-icon.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-4" dir="rtl">
      <li className="flex items-center gap-2 hover:text-primary cursor-pointer text-secondary duration-300 duration-300 duration-300">
        {/* <Image src={codingIcon} alt="coding" width={22} height={22} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${pathname === "/" && "text-primary"} `}

        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          />
        </svg>

        <Link
          href="/"
          className={`text-xl hover:text-primary ${
            pathname === "/" && "text-primary"
          }`}
        >
          تعلم مهارات البرمجة
        </Link>
      </li>
      <li className="flex items-start gap-2 hover:text-primary cursor-pointer text-secondary duration-300 duration-300">
        {/* <Image src={cpuIcon} alt="cpu" width={20} height={20} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${pathname === "/chat" && "text-primary"} `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
          />
        </svg>

        <Link
          href="/chat"
          className={`text-xl hover:text-primary ${
            pathname === "/chat" && "text-primary"
          }`}
          dir="rtl"
        >
          تحدث مع TemoGPT
        </Link>
      </li>
      <li className="flex items-start gap-2 hover:text-primary cursor-pointer text-secondary duration-300">
        {/* <Image src={ideaIcon} alt="idea" width={20} height={20} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6  ${pathname === "/quiz" && "text-primary"} `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>

        <Link
          href="/quiz"
          className={`text-xl hover:text-primary ${
            pathname === "/quiz" && "text-primary"
          }`}
        >
          اختبر نفسك
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
