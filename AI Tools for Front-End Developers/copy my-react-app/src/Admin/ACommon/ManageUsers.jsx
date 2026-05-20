import { useEffect, useState } from "react";
import axios from "axios";
import "./ManageUsers.css";
export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // 🔥 Block / Unblock
  const toggleStatus = async (id, status) => {
    const newStatus = status === "blocked" ? "unblock" : "blocked";

    await axios.patch(`http://localhost:3000/users/${id}`, {
      status: newStatus,
    });

    getUsers();
  };

  return (
    <div>
      <h3 className="mb-4 text-warning">👤 Manage Users</h3>

      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`badge ${user.role === "admin" ? "bg-danger" : "bg-primary"}`}>
                  {user.role}
                </span>
              </td>

              <td>
                <span className={`badge ${user.status === "blocked" ? "bg-danger" : "bg-success"}`}>
                  {user.status}
                </span>
              </td>

              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => toggleStatus(user.id, user.status)}
                >
                  {user.status === "blocked" ? "Unblock" : "Block"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}