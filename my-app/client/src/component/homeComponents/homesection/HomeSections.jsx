import React from "react";
import "./HomeSections.css";

// Material UI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";

const HomeSections = () => {
  const cards = [
    { img: "https://via.placeholder.com/80", title: "A1", subtitle: "CIP Grade Outstanding" },
    { img: "https://via.placeholder.com/80", title: "23+", subtitle: "Glorious Years" },
    { img: "https://via.placeholder.com/80", title: "30+", subtitle: "Recruiters On Board" },
    { img: "https://via.placeholder.com/80", title: "1000+", subtitle: "Placement Assistance" },
    { img: "https://via.placeholder.com/80", title: "3500+", subtitle: "Benefited Alumini" },
  ];

  return (
    <div className="home-sections">

      {/* Section 1 */}
      <section className="section-one-vedio">
        <div className="video-container">
          <video autoPlay loop muted>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Items */}
          <div className="overlay">
            <div className="enquiry">
              <button>Enquiry</button>
            </div>
            <div className="social-icons">
              <WhatsAppIcon className="whatsapp" style={{ color: "#25D366" }} />
              <FacebookIcon style={{ color: "#1877F2" }} />
              <TwitterIcon style={{ color: "#1DA1F2" }} />
              <InstagramIcon style={{ color: "#E1306C" }} />
              <LinkedInIcon style={{ color: "#0077B5" }} />
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-two-imp-notice">
        <h3 className="notice-title">Important Notice</h3>
        <marquee className="notice-text">
          This is a running text for important notice. Keep updated with the latest news!
        </marquee>
        <Button variant="contained" color="primary" className="apply-btn"   sx={{ textTransform: 'none'}}>
          Apply Now
        </Button>
      </section>

      {/* Section 3 */}
      <section className="section-three-metric">
        <h1>25 Years Of Legacy Of Maritime Education</h1>
        <h2>A Institute Of Life Transformation</h2>

        <div className="metric-card-container">
          {cards.map((card, index) => (
            <div className="metric-card" key={index}>
              <img src={card.img} alt={card.title} />
              <h1>{card.title}</h1>
              <h2>{card.subtitle}</h2>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomeSections;
