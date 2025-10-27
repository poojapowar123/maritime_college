import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [team, setTeam] = useState([]);
  const [editingMember, setEditingMember] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = () => {
    axios.get("http://localhost:5000/users", { withCredentials: true })
      .then((res) => setTeam(res.data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMember) {
      axios
        .put(`http://localhost:5000/users/${editingMember.id}`, formData, { withCredentials: true })
        .then((res) => {
          alert(res.data.message);
          resetForm();
          fetchTeam();
          setEditingMember(null);
        });
    } else {
      axios
        .post("http://localhost:5000/users", formData, { withCredentials: true })
        .then((res) => {
          alert(res.data.message);
          resetForm();
          fetchTeam();
        });
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", role: "" });
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      email: member.email,
      role: member.role
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      axios.delete(`http://localhost:5000/users/${id}`, { withCredentials: true })
        .then((res) => {
          alert(res.data.message);
          fetchTeam();
        });
    }
  };

  return (
    <div className="team-container">
      <h2>{editingMember ? "Edit Member" : "Add Team Member"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Role:</label>
        <input type="text" name="role" value={formData.role} onChange={handleChange} />

        <button type="submit">{editingMember ? "Update Member" : "Add Member"}</button>
      </form>

      <h2>Team Members List</h2>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {team.length > 0 && team.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
              <td>
                <button onClick={() => handleEdit(member)}>Edit</button>
                <button onClick={() => handleDelete(member.id)}>Delete</button>
              </td>
            </tr>
          ))}

          {team.length === 0 && (
            <tr>
              <td colSpan="5" align="center">No team members found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
