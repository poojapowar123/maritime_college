import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div style={{
      width: "200px",
      background: "#f5f5f5",
      padding: "20px",
      height: "100vh",
      boxSizing: "border-box"
    }}>
      <h3>Admin Panel</h3>
      <nav style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "30px" }}>
        <NavLink 
          to="/dashboard" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >Home</NavLink>
        <NavLink 
          to="/tasks" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >Tasks</NavLink>
        <NavLink 
          to="/users" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >Users</NavLink>
         <NavLink 
          to="/ad-users-list" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >Admin Users List</NavLink>
         <NavLink 
          to="/add-users" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >Add Users</NavLink>
           <NavLink 
          to="/add-courses" 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >Add Courses</NavLink>
      </nav>
    </div>
  );
}
