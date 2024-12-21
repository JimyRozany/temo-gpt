import { FiCpu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const ProfilePage = () => {
  const cookieSroe = cookies();
  const token = cookieSroe.get("auth-token").value;

  const user = jwt.verify(token, process.env.JWT_SECRET as string);
  console.log(user);

  return (
    <div className="">
      {/* user info */}
      <div className="flex flex-col items-center  mt-10">
        <FaRegUserCircle className="text-8xl text-primary my-1" />
        <h3 className="text-3xl text-secondary font-bold mb-1" dir="rtl">
          الطالب : {user.username}
        </h3>
        <p className="text-md font-medium text-primary">الصف الثاني الثانوي</p>
      </div>
      {/* user class */}
      <div className="flex flex-col items-center gap-5 my-2">
        {user.role === "READER" ? (
          <div dir="rtl" className="flex items-center gap-2 text-mainGray">
            <FaLaptopCode className="text-2xl" />
            <h3 className="text-xl ">تعلم مهارات البرمجة</h3>
          </div>
        ) : user.role === "CHATTING" ? (
          <div dir="rtl" className="flex items-center gap-2 text-mainGray">
            <FiCpu className="text-2xl" />
            <h3 className="text-xl ">تحدث مع TemoGPT</h3>
          </div>
        ) : null}

        {/* three buttons */}
        <div className=" flex items-center gap-4">
          <div className="indicator shadow-md rounded-lg">
            <IoMdCheckmarkCircleOutline className="indicator-item text-3xl text-primary hidden" />
            <button
              dir="rtl"
              className="border border-mainGray text-mainGray text-md font-medium px-4 py-2 rounded-lg"
            >
              لغة PHP
            </button>
          </div>
          <div className="indicator shadow-md rounded-lg">
            <IoMdCheckmarkCircleOutline className="indicator-item text-3xl text-primary" />
            <button
              dir="rtl"
              className="border border-mainGray text-mainGray text-md font-medium px-4 py-2 rounded-lg"
            >
              لغة HTML
            </button>
          </div>
          <div className="indicator shadow-md rounded-lg">
            <IoMdCheckmarkCircleOutline className="indicator-item text-3xl text-primary " />
            <button className="border border-mainGray text-mainGray text-md font-medium px-4 py-2 rounded-lg">
              البرمجة
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Gauge Component --> */}
      <div className=" flex justify-center mt-6  ">
        <div className="border border-mainGray p-2 w-60 rounded-md">
          {/* title */}
          <div className="w-full flex justify-end items-center gap-1 ">
            <h1 className="text-mainGray">مؤشر الاداء </h1>
            <div className="h-3 w-3 bg-primary rounded"></div>
          </div>

          {/* <!-- Gauge Component --> */}
          <div className="relative size-40">
            <svg
              className="rotate-[135deg] size-full"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <!-- Background Circle (Gauge) --> */}
              {/* <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="1.5" strokeDasharray="75 100" strokeLinecap="round"></circle> */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-primary/30 opacity-45 shadow-md "
                strokeWidth="1"
                strokeDasharray="75 100"
                strokeLinecap="round"
              ></circle>

              {/* <!-- Gauge Progress --> */}
              {/* <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600" strokeWidth="1.5" strokeDasharray="37.5 100" strokeLinecap="round"></circle> */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-primary"
                strokeWidth="1.5"
                strokeDasharray="15 100"
                strokeLinecap="round"
              ></circle>
            </svg>

            {/* <!-- Value Text --> */}
            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-bold text-blue-600">25%</span>
              <span className="text-blue-600 block">نقاطك</span>
            </div>
          </div>
          {/* <!-- End Gauge Component --> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
