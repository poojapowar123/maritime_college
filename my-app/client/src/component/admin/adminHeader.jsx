import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminHeader({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post("http://localhost:5000/admin/logout", {}, { withCredentials: true })
      .then(() => {
        sessionStorage.removeItem("admin");
        navigate("/login");
      })
      .catch(err => console.log("Logout failed:", err));
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ddd",
      padding: "10px 20px"
    }}>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span>{user.name} ({user.email})</span>
        <button 
          onClick={handleLogout}
          style={{
            backgroundColor: "#ff4d4f",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >Logout</button>
      </div>
    </div>
  );
}
