import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./usersForm";

axios.defaults.withCredentials = true;

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from backend
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/users") // match backend route
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete a user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`http://localhost:5000/users/${id}`)
        .then(() => fetchUsers())
        .catch((err) => console.log(err));
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Users</h2>

      {/* Add/Edit form */}
      <UserForm
        refresh={fetchUsers}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />

      {/* Users list */}
      <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => setEditingUser(u)}>Edit</button>{" "}
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
