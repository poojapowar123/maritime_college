import React, { useRef, useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./AlumniSpeak.css";

const alumniData = [
  {
    name: "John Doe",
    designation: "Software Engineer, Google",
    message: "My experience at MANET shaped my confidence and gave me great opportunities.",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    designation: "Data Analyst, Microsoft",
    message: "The mentors were amazing and helped me achieve more than I expected.",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Mark Wilson",
    designation: "DevOps Engineer, Amazon",
    message: "A perfect blend of learning and personal growth. MANET truly inspired me.",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Lisa Brown",
    designation: "UI Designer, Adobe",
    message: "MANET helped me unlock my potential and grow as a creative professional.",
    photo: "https://via.placeholder.com/100",
  },
    {
    name: "Mark Wilson",
    designation: "DevOps Engineer, Amazon",
    message: "A perfect blend of learning and personal growth. MANET truly inspired me.",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Lisa Brown",
    designation: "UI Designer, Adobe",
    message: "MANET helped me unlock my potential and grow as a creative professional.",
    photo: "https://via.placeholder.com/100",
  },
];

const AlumniSpeak = () => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const cardsPerPage = 2;

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector(".alumni-card").offsetWidth + 20;
    container.scrollBy({
      left: direction === "left" ? -cardWidth * cardsPerPage : cardWidth * cardsPerPage,
      behavior: "smooth",
    });
  };

  // Update active dot based on scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.querySelector(".alumni-card").offsetWidth + 20;
    const currentPage = Math.round(scrollLeft / (cardWidth * cardsPerPage));
    setActiveDot(currentPage);
  };

  // Dot click scroll
  const handleDotClick = (index) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector(".alumni-card").offsetWidth + 20;
    container.scrollTo({
      left: index * cardWidth * cardsPerPage,
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  const totalPages = Math.ceil(alumniData.length / cardsPerPage);

  return (
    <section className="alumni-section">
      <h2 className="alumni-title">Our Alumni</h2>
      <p className="alumni-subtitle">Inspiring journeys from our proud graduates</p>

      <div className="alumni-carousel">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8249;
        </button>

        <div className="alumni-cards-wrapper" ref={scrollRef} onScroll={handleScroll}>
          {alumniData.map((alumni, index) => (
            <div className="alumni-card" key={index}>
              <div className="alumni-top">
                <div className="alumni-photo">
                  <img src={alumni.photo} alt={alumni.name} />
                </div>
                <div className="alumni-info">
                  <h3>{alumni.name}</h3>
                  <p className="designation">{alumni.designation}</p>
                </div>
              </div>

              <div className="message">
                <FaQuoteLeft className="quote-icon left" />
                <p>{alumni.message}</p>
                <FaQuoteRight className="quote-icon right" />
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="dots-container">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeDot ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default AlumniSpeak;
