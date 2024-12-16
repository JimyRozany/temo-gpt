import LogoutBtn from "@/components/navbar/LogoutBtn";
import Link from "next/link";
import React from "react";
import { RiMenuFold4Line } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineArticle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-screen p-6 flex items-start gap-2">
      <div className="drawer lg:drawer-open w-60  rounded overflow-hidden z-50">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  fixed top-10 left-0 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-primary hover:bg-secondary text-white drawer-button lg:hidden "
          >
            <RiMenuFold4Line />
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-mainGray text-white min-h-full w-80 p-4 ">
            {/* Sidebar content here */}
            <div className="flex items-center bg-white w-min px-4 rounded">
              <PiCrownSimpleFill className="text-3xl text-primary" />
              <span className="text-secondary font-medium">TemoGPT</span>
            </div>
            <li className="text-xl font-medium ">
              <Link href="/dashboard">
                {" "}
                <FaUsers className="text-white text-xl" /> Users
              </Link>
            </li>
            <li className="text-xl font-medium ">
              <a>
                <MdOutlineArticle /> content
              </a>
            </li>
            <li>
              <div className="text-xl font-medium ">
                <LogoutBtn />
                <IoIosLogOut />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full rounded ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
