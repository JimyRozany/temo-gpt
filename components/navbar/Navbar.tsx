import Image from "next/image";
import logo from "@/public/images/logo.png";

import NavLinks from "./NavLinks";
import LogoutBtn from "./LogoutBtn";
import Link from "next/link";

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
        <NavLinks />
        {/* profile icon  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="m-1">
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
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href="#">profile</Link>
            </li>
            <li>
              <LogoutBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
