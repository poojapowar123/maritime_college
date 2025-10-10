import React from "react";
import "./whymanet.css";

// Sample card data
const cardData = [
  {
    logo: "https://via.placeholder.com/80",
    description: "MANET is approved by Directorate General of Shipping (DG Shipping), Ministry of Shipping, Government of India.",
  },
  {
    logo: "https://via.placeholder.com/80",
    description: "MANET is approved by Directorate General of Shipping (DG Shipping), Ministry of Shipping, Government of India.",
  },
  {
    logo: "https://via.placeholder.com/80",
    description: "MANET is approved by Directorate General of Shipping (DG Shipping), Ministry of Shipping, Government of India.",
  },
  {
    logo: "https://via.placeholder.com/80",
    description: "MANET is approved by Directorate General of Shipping (DG Shipping), Ministry of Shipping, Government of India.",
  },
  {
    logo: "https://via.placeholder.com/80",
    description: "MANET is approved by Directorate General of Shipping (DG Shipping), Ministry of Shipping, Government of India.",
  },
  {
    logo: "https://via.placeholder.com/80",
    description: "MANET is approved by Directorate General of Shipping (DG Shipping), Ministry of Shipping, Government of India.",
  },
];

const WhyManet = () => {
  return (
    <section className="whymanetin-section">
      <h2 className="section-title">Why Choose Manet?</h2>
      <p className="section-subtitle">Here’s what makes us special</p>

      <div className="cards-grid">
        {cardData.map((card, index) => (
          <div key={index} className="whymanetin-card">
            <img src={card.logo} alt={card.title} className="card-logo" />
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyManet;
