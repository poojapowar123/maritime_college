import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin_users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await axios.delete(`http://localhost:5000/admin_users/${id}`);
    setUsers(users.filter(u => u.user_id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 Users List</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Role</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.user_id}>
              <td>{u.user_id}</td>
              <td>{u.name}</td>
              <td>{u.email_id}</td>
              <td>{u.department}</td>
              <td>{u.role}</td>
              <td>{u.status}</td>
              <td>
                <button onClick={() => deleteUser(u.user_id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
