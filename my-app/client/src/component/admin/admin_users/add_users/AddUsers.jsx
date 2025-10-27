import React, { useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [form, setForm] = useState({
    name: "", email_id: "", contact_no: "", designation: "",
    department: "", password: "", role: "user", created_by: null
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/admin_users", form);
    alert("User Added!");
    setForm({ name: "", email_id: "", contact_no: "", designation: "", department: "", password: "", role: "user" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br/>
        <input name="email_id" placeholder="Email" value={form.email_id} onChange={handleChange} required /><br/>
        <input name="contact_no" placeholder="Contact No" value={form.contact_no} onChange={handleChange} /><br/>
        <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} /><br/>
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} /><br/>
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br/>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
