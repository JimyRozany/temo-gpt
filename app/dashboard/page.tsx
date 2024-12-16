import Link from "next/link";
import AddUserForm from "@/components/AddUserForm/AddUserForm";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import DeleteBtn from "@/components/DeleteBtn/DeleteBtn";

const DashboardPage = async () => {
  const response = await axios.get("http://localhost:3000/api/users/all");
  const users = response.data.data;

  const handleDelete = async (e, userId) => {
console.log(userId);

    // const response = await axios.delete("http://localhost:3000/api/users/");
  }





  return (
    <div className="w-full  p-2 flex justify-center">
    <div className="container ">
      <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-secondary">Users Page</h1>
      <Link href={"/dashboard/create-user"} className="flex items-center gap-2 hover:gap-4 duration-300 ease-in-out font-medium">
      
      <span>Create New User</span>

      <FaArrowRight />
      </Link>
      </div>
      <div className="h-[calc(100vh_-_100px)]  overflow-y-auto ">
      {users !== null ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>learn</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    className={`${index % 2 == 0 ? "bg-base-200" : ""} text-xl font-medium `}
                    key={index}
                  >
                    <th>{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    {/* TODO : create three checkbox  and save button */}
                    <td>برمجة | تعلم PHP | تعلم HTML</td>
                    <td><Link href={`/dashboard/edit-user/${user.id}`} className="btn bg-yellow-600 text-white hover:text-yellow-600 text-2xl font-medium">edit</Link> | <DeleteBtn user={user} /> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="text-3xl">users not found</h1>
          )}
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;
