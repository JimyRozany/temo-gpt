import Image from "next/image";
import logo from "@/public/images/logo.png";

import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="w-full px-20 py-2 border-b">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="flex items-end gap-2">
          <Image src={logo} width={50} height={50} alt="logo" />
          <span className="text-4xl text-secondary font-bold">TemoGPT</span>
        </div>
        {/* links */}
        {/* <ul className="flex items-center gap-4" dir="rtl">
                <li className="flex items-center gap-2">
                <Image src={codingIcon} alt="coding" width={22} height={22}  />

                    <Link href="#" className="text-xl hover:text-primary ">تعلم مهارات البرمجة</Link>
                </li>
                <li className="flex items-start gap-2">
                     <Image src={cpuIcon} alt="cpu" width={20} height={20} />

                    <Link href="#" className="text-xl hover:text-primary " dir="rtl">تحدث مع TemoGPT</Link>
                </li>
                <li className="flex items-start gap-2">
                <Image src={ideaIcon} alt="idea" width={20} height={20} />

                    <Link href="#" className="text-xl hover:text-primary ">اختبر نفسك</Link>
                </li>
            </ul> */}
        <NavLinks />
        {/* profile icon  */}
        {/* <Image src={userIcon} alt="user" width={35} height={35} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
