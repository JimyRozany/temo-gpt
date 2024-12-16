"use client";
import axios from "axios";

import { useRouter } from "next/navigation";
const LogoutBtn = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/users/logout");
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutBtn;
