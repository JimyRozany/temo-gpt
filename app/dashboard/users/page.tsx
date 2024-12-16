import AddUserForm from "@/components/AddUserForm/AddUserForm";
import axios from "axios";

const UsersPage = async () => {
  const response = await axios.get("http://localhost:3000/api/users/all");
  const users = response.data.data;

  console.log(response.data.data);

  return (
    <div className="flex justify-center border border-green-500">
      <div className="">
        <h1>Users page </h1>

        <p>add user form </p>
        <div className="w-96">
          <AddUserForm />
        </div>
        <div className="overflow-x-auto">
          {users !== null ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    className={index % 2 == 0 ? "bg-base-200" : ""}
                    key={index}
                  >
                    <th>{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
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

export default UsersPage;
