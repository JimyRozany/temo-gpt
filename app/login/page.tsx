"use client";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import userIcon from "@/public/images/user-icon.svg";
import passwordIcon from "@/public/images/password-icon.svg";

import { useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") return toast.error("email is requier");
    if (password === "") return toast.error("password is requier");
    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });
      router.replace("/");
      router.refresh()
    } catch (error) {
      console.log(error);
      toast.error(` ${error.response.data.message}`);
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center h-[100vh]">
      <div className="flex flex-col md:justify-center items-center ">
        <div className="">
          <Image src={logo} width={150} height={150} alt="logo" />
        </div>
        <h2 className="text-6xl text-secondary font-extrabold">TemoGPT</h2>
        <h2 className={`text-2xl  `}>تسجيل الدخول</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          {/* email input */}
          <label
            className="input input-bordered flex items-center gap-2 rounded-full"
            dir="rtl"
          >
            <Image src={userIcon} width={24} height={24} alt="user icon" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="grow text-xl text-secondary placeholder:text-gray-400"
              placeholder="البريد الالكتروني"
            />
          </label>
          {/* password input */}
          <label
            className="input input-bordered flex items-center gap-2 rounded-full mt-2"
            dir="rtl"
          >
            <Image
              src={passwordIcon}
              width={24}
              height={24}
              alt="password icon"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="grow text-xl"
              placeholder="كلمة المرور"
            />
          </label>

          <div className="flex justify-center mt-4">
            <button
              disabled={loading}
              className={`btn btn-neutral bg-primary text-white font-tajawal font-thin text-2xl inline-block px-10 rounded-full border-none outline-none hover:bg-secondary ${
                loading && "opacity-50 cursor-not-allowed"
              }  `}
            >
              {loading ? (
                <span className="loading loading-dots loading-md text-primary"></span>
              ) : (
                "دخول"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
