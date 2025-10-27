import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserForm({ refresh, editingUser, setEditingUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setRole(editingUser.role);
    } else {
      setName(""); setEmail(""); setRole("user");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      axios
        .put(`http://localhost:5000/users/${editingUser.id}`, { name, email, role })
        .then(() => {
          refresh();
          setEditingUser(null);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:5000/users", { name, email, role, password: "default123" })
        .then(() => refresh())
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />{" "}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />{" "}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>{" "}
      <button type="submit">{editingUser ? "Update" : "Add"}</button>{" "}
      {editingUser && <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>}
    </form>
  );
}
