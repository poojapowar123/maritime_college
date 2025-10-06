import React from "react";
import Slider from "react-slick"; // Carousel library
import "./Programs.css"; // Custom CSS

// Example data
const programs = [
  {
    title: "B.Tech Marine Engneering",
    description: " cargo handling, chart work, meteorology, ship maintenance, seamanship, collision prevention, watch keeping, ship stability, equipment handling and marine signaling. The educational objectives of our graduate program are to produce graduates with good mental health and psychological capacity which plays a vital role as cadets are needed to be mentally strong to be on sailing for a lengthy period. Being a physically and mentally demanding field of work, the department train the cadets to achieve a high levels of tolerance, adaptability and bodily and cognitive endurance.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "B.Tech Marine Engneering",
    description: " cargo handling, chart work, meteorology, ship maintenance, seamanship, collision prevention, watch keeping, ship stability, equipment handling and marine signaling. The educational objectives of our graduate program are to produce graduates with good mental health and psychological capacity which plays a vital role as cadets are needed to be mentally strong to be on sailing for a lengthy period. Being a physically and mentally demanding field of work, the department train the cadets to achieve a high levels of tolerance, adaptability and bodily and cognitive endurance.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "B.Tech Marine Engneering",
    description: "cargo handling, chart work, meteorology, ship maintenance, seamanship, collision prevention, watch keeping, ship stability, equipment handling and marine signaling. The educational objectives of our graduate program are to produce graduates with good mental health and psychological capacity which plays a vital role as cadets are needed to be mentally strong to be on sailing for a lengthy period. Being a physically and mentally demanding field of work, the department train the cadets to achieve a high levels of tolerance, adaptability and bodily and cognitive endurance.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "B.Tech Marine Engneering",
    description: "cargo handling, chart work, meteorology, ship maintenance, seamanship, collision prevention, watch keeping, ship stability, equipment handling and marine signaling. The educational objectives of our graduate program are to produce graduates with good mental health and psychological capacity which plays a vital role as cadets are needed to be mentally strong to be on sailing for a lengthy period. Being a physically and mentally demanding field of work, the department train the cadets to achieve a high levels of tolerance, adaptability and bodily and cognitive endurance.",
    image: "https://via.placeholder.com/150",
  },
];

const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2, dots: true },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1, dots: true },
      },
    ],
  };

  return (
    <div className="programs-container">
      <h2 className="programs-title">Programs That Shape Futures</h2>
      <p className="programs-subtitle">
        From design to technology, our programs deliver measurable success
      </p>

      <Slider {...settings}>
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <div className="card-top">
              <div className="card-left">
                <img src={program.image} alt={program.title} />
              </div>
              <h3 className="card-title">{program.title}</h3>
            </div>

            <div className="card-description">
              <p>{program.description}</p>
              {/* <button className="read-more">Read More</button> */}
            </div>
               <button className="explore-program">Explore Program</button>
          </div>
        ))}
      </Slider >
    </div >
  );
};

export default Programs;
