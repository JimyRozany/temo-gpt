"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { FaKey } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/${userId}`)
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // call api to send data
    try {
      setLoading(true);
      await axios.put(`http://localhost:3000/api/users/update`, user);

      router.push("/dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-secondary mt-4">Edit user</h1>
      <div className="w-1/2 mt-10 ">
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => handleSubmit(e)}
          dir="rtl"
        >
          <label className="input input-bordered flex items-center gap-2">
            <CiUser />
            <input
              type="text"
              className="grow"
              placeholder="الاسم"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
            />
          </label>
          <label className="input input-bordered   flex items-center gap-2">
            <MdEmail />
            <input
              type="email"
              className="grow"
              placeholder="البريد الالكتروني"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
          </label>
          {/* <label className="input input-bordered flex items-center gap-2">
         <FaKey />
         <input
           type="text"
           className="grow"
           placeholder="كلمة المرور"
           onChange={(e) => setUser({...user , username: e.target.value})}
           value={user.username}
         />
       </label> */}
          <select
            className="select w-full max-w-xs border border-secondary"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            value={user.role}
          >
            <option>طريقة التعلم</option>
            <option value={"CHATTING"}>موجة بالمستخدم</option>
            <option value={"READER"}>موجة بالمحتوي</option>
          </select>

          <button
            disabled={loading}
            className={`btn btn-neutral bg-primary text-white font-tajawal font-thin text-2xl inline-block px-10 rounded-full border-none outline-none hover:bg-secondary ${
              loading && "opacity-50 cursor-not-allowed"
            }  `}
          >
            {loading ? (
              <span className="loading loading-dots loading-md text-primary"></span>
            ) : (
              "حفظ"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
