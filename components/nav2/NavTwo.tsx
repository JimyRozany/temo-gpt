import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { PiCrownSimpleFill } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import LogoutBtn from "../navbar/LogoutBtn";
import { HiMenuAlt1 } from "react-icons/hi";

const NavTwo = () => {
  const pathname = usePathname();

  // function to close the dropdown after click any item 
  const handleClick = () => {
    
  };
  return (
    <div className="navbar bg-base-100 md:px-32">
      <div className="navbar-start">
        <div className="dropdown " >
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HiMenuAlt1 className="text-2xl " />
          </div>
          <ul
            // tabIndex={0}
            className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li
              dir="rtl"
              className={`text-md flex items-center gap-2  hover:text-primary duration-300 ${
                pathname === "/" ? "text-primary" : "text-secondary"
              }`}
              
            >
              <FaLaptopCode className="text-2xl" />
              <Link href="/">تعلم مهارات البرمجة</Link>
            </li>

            <li
              dir="rtl"
              className={`text-md flex items-center gap-2  hover:text-primary duration-300 ${
                pathname === "/chat" ? "text-primary" : "text-secondary"
              }`}
         
            >
              <FiCpu className="text-2xl" />
              <Link href="/chat">تحدث مع TemoGPT</Link>
            </li>
            <li
              dir="rtl"
              className={`text-md flex items-center gap-2  hover:text-primary duration-300 ${
                pathname === "/quiz" ? "text-primary" : "text-secondary"
              }`}
          
            >
              <HiOutlineLightBulb className="text-2xl" />
              <Link href="/quiz">اختبر نفسك</Link>
            </li>
          </ul>
        </div>
        {/* logo */}
        <div className="flex items-center gap-2">
          <PiCrownSimpleFill className="text-6xl text-primary " />
          <span className="text-xl md:text-2xl text-secondary font-bold">
            TemoGPT
          </span>
        </div>
      </div>
      {/* nav links when large and medium screens */}
      <div className="navbar-center hidden lg:flex" >
        <ul className="flex items-center gap-3 px-1 ">
          <li
            dir="rtl"
            className={`text-xl flex items-center gap-2  hover:text-primary duration-300 ${
              pathname === "/quiz" ? "text-primary" : "text-secondary"
            }`}
            // onClick={handleClick}
          >
            <HiOutlineLightBulb className="text-2xl" />
            <Link href="/quiz">اختبر نفسك</Link>
          </li>

          <li
            dir="rtl"
            className={`text-xl flex items-center gap-2  hover:text-primary duration-300 ${
              pathname === "/chat" ? "text-primary" : "text-secondary"
            }`}
          >
            <FiCpu className="text-2xl" />
            <Link href="/chat">تحدث مع TemoGPT</Link>
          </li>
          <li
            dir="rtl"
            className={`text-xl flex items-center gap-2  hover:text-primary duration-300 ${
              pathname === "/" ? "text-primary" : "text-secondary"
            }`}
          >
            <FaLaptopCode className="text-2xl" />
            <Link href="/">تعلم مهارات البرمجة</Link>
          </li>
        </ul>
      </div>
      {/* profile button */}
      <div className="navbar-end">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="m-1">
            <FaRegUserCircle className="text-2xl text-primary" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="hover:text-primary duration-300">
              <Link  href="/profile">Profile</Link>
            </li>
            <li>
              <LogoutBtn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;