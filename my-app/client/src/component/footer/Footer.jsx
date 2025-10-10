import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP SECTIONS */}
      <div className="footer-top">

        {/* Section 1: Logos + Address + Map */}
        <div className="footer-section">
          <div className="footer-logos">
            <img src="assets/manet_logo.jpg"  alt="Logo 1" />
            <img src="assets/MIT-ADT-new-logo-2025.webp" alt="Logo 2" />
          </div>
          <p className="footer-address">
            123, Example Street, City, State, 123456
          </p>
          <div className="footer-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/place/Maharashtra+Academy+of+Naval+Education+%26+Training/@18.490903,74.0241958,1078m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bc2e8040d345ce5:0x802d5bc789cf40d5!2sMaharashtra+Academy+of+Naval+Education+%26+Training!8m2!3d18.490903!4d74.0241958!16s%2Fg%2F11g817dy77!3m5!1s0x3bc2e8040d345ce5:0x802d5bc789cf40d5!8m2!3d18.490903!4d74.0241958!16s%2Fg%2F11g817dy77?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

 <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/placements">Placements</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/placements">Placements</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

        {/* Section 2: Quick Links + Social Connect */}
        <div className="footer-section">
          <div className="footer-subsection">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/placements">Placements</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Section 3: Quick Links + Visitor Count */}
        <div className="footer-section">
          <div className="footer-subsection">
            <h4 className="footer-title">More Links</h4>
            <ul className="footer-links">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h4 className="footer-title">Site Visitors</h4>
            <p className="visitor-count">1 2 3 4 5</p>
          </div>
        </div>


      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
