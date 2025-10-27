import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/adminAuth/change-password",
        { oldPassword, newPassword }
      );
      setMessage(res.data.message);
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setMessage(err.response?.data?.error || "Password change failed");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Change Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
