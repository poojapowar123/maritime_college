import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./LifeAtManet.css";
import { Link } from "react-router-dom";

const LifeAtManet = () => {
  const cards = [
    {
      buttons: [
        { text: "Conduct at campus", link: "/explore" },
        { text: "Accomodation", link: "/join" },
        { text: "Library", link: "/learn" },
      ],
    },
    {
      buttons: [
        { text: "Sports", link: "/programs" },
        { text: "National Maritime Day", link: "/clubs" },
        { text: "Campus Life", link: "/campus" },
      ],
    },
    {
      buttons: [
        { text: "Placements", link: "/placements" },
        { text: "Conduct at campus", link: "/events" },
        { text: "Gallery", link: "/gallery" },
      ],
    },
  ];

  return (
    <section className="lifeatmanet-section">
      <div className="container" id="lifeatmanet-container">
        <h2 className="lifeatmanet-title">Life @ MANET</h2>
        <p className="lifeatmanet-subtitle">
          Experience the culture, opportunities, and inspiration that make MANET unique.
        </p>

        <div className="lifeatmanet-cards-container">
          {cards.map((card, idx) => (
            <div key={idx} className="lifeatmanet-card">
              <div className="lifeatmanet-btn-container">
                {card.buttons.map((btn, i) => (
                  <Link to={btn.link} key={i}>
                    <button className="lifeatmanet-card-btn">
                      <FaArrowRight className="arrow-icon" />
                      <span>{btn.text}</span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtManet;
