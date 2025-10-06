import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, CloseIcon } from "../icons";
import "./Topbar.css";
import "./TopbarMob.css";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <div className="top-bar">
        <div className="top-row">

          {/* Hamburger Toggle */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseIcon style={{ color: "#dadee2ff ", fontSize: "28px", }} />
            ) : (
              <MenuIcon style={{ color: "#e7eaeeff ", fontSize: "28px" }} />
            )}
          </div>

          <div className="right">
            <a href="#" className="btn">DG Approved Doctors List</a>
            <a href="#" className="btn highlight">Admission Open for A.Y. 2025-26</a>
          </div>
        </div>

        <div className="center">
          <img src="/logo.png" alt="MANET Logo Left" className="logo" />

          <div className="college-name">
            <h1>Maharashtra Academy of</h1>
            <h1>Naval Education and Training, Pune</h1>
            <p>
              Approved by Directorate General of Shipping Govt. of India |
              CIP Grade "A1" Outstanding | ISO 9001:2015 Certified
            </p>
          </div>

          <img src="/logo.png" alt="MANET Logo Right" className="logo" />
        </div>

      </div>


      <div className="navbar">

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/academics" onClick={() => setIsOpen(false)}>Academics</Link></li>
          <li><Link to="/exams" onClick={() => setIsOpen(false)}>Examinations</Link></li>
          <li><Link to="/admissions" onClick={() => setIsOpen(false)}>Admissions</Link></li>
          <li><Link to="/placements" onClick={() => setIsOpen(false)}>Placements</Link></li>
            <li><Link to="/placements" onClick={() => setIsOpen(false)}>Life@ Manet</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>

    </>
  );
}
