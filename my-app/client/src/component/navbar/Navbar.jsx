import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import { MenuIcon, CloseIcon } from "../icons";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="navbar">

 {/* Hamburger Toggle */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CloseIcon style={{ color: "#072040 ", fontSize: "28px",}} />
        ) : (
          <MenuIcon style={{ color: "#072040 ", fontSize: "28px" }} />
        )}
      </div>
      
      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/academics" onClick={() => setIsOpen(false)}>Academics</Link></li>
        <li><Link to="/exams" onClick={() => setIsOpen(false)}>Examinations</Link></li>
        <li><Link to="/admissions" onClick={() => setIsOpen(false)}>Admissions</Link></li>
        <li><Link to="/placements" onClick={() => setIsOpen(false)}>Placements</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
      </ul>
    </div>
    
    
  </>
   
  );
}

