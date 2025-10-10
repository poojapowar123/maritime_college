import React from "react";
import "./placement.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef , useState} from "react";

// Sample data arrays
const students = [
  {
    name: "John Doe",
    program: "B.Tech CSE",
    passout: "2023",
    company: "Google",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    program: "MBA",
    passout: "2022",
    company: "Amazon",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Alex Johnson",
    program: "B.Tech ECE",
    passout: "2024",
    company: "Microsoft",
    photo: "https://via.placeholder.com/100",
  },
  {
    name: "Emily Davis",
    program: "BBA",
    passout: "2023",
    company: "Facebook",
    photo: "https://via.placeholder.com/100",
  },
];

const companies = [
  { name: "Google", logo: "https://via.placeholder.com/80x40?text=G" },
  { name: "Amazon", logo: "https://via.placeholder.com/80x40?text=A" },
  { name: "Microsoft", logo: "https://via.placeholder.com/80x40?text=M" },
  { name: "Facebook", logo: "https://via.placeholder.com/80x40?text=F" },
  { name: "Apple", logo: "https://via.placeholder.com/80x40?text=Ap" },
  { name: "Netflix", logo: "https://via.placeholder.com/80x40?text=N" },
];

const Placement = () => {
  // Duplicate arrays to allow seamless scrolling
  const studentScroll = [...students, ...students];
  const companyScroll = [...companies, ...companies];

  const studentRef = useRef(null);

  // State for active dot
  const [activeDot, setActiveDot] = useState(0);

  // Scroll to card when clicking a dot
  const handleDotClick = (index) => {
    const cardWidth = 320 + 20; // card width + gap
    studentRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  // Update active dot while scrolling
  const handleScroll = () => {
    const scrollLeft = studentRef.current.scrollLeft;
    const cardWidth = 320 + 20;
    setActiveDot(Math.round(scrollLeft / cardWidth));
  };

  return (
    <div className="placement-section">
      {/* Section 1: Student Placements */}
      <section className="placement-students">
        <h2 className="section-title">Our Successful Placements</h2>
        <p className="section-subtitle">Meet our bright stars!</p>
        <div className="cards-wrapper">
          <button
            className="scroll-btn left"
            onClick={() =>
              studentRef.current.scrollBy({ left: -320, behavior: "smooth" })
            }
          >
            <FaArrowLeft />
          </button>

          <div className="cards-container scroll-continuous" ref={studentRef}>
            {studentScroll.map((student, index) => (
              <div key={index} className="placement-card">
                <div className="card-left">
                  <p>
                    <strong>Name:</strong> {student.name}
                  </p>
                  <p>
                    <strong>Program:</strong> {student.program}
                  </p>
                  <p>
                    <strong>Passout:</strong> {student.passout}
                  </p>
                  <p>
                    <strong>Company:</strong> {student.company}
                  </p>
                </div>
                <div
                  className="card-right"
                  style={{ backgroundImage: `url(${student.photo})` }}
                ></div>
              </div>
            ))}
          </div>

          <button
            className="scroll-btn right"
            onClick={() =>
              studentRef.current.scrollBy({ left: 320, behavior: "smooth" })
            }
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="dots-container">
          {studentScroll.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeDot ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Section 2: Companies */}
      <section className="placement-companies">
        <h2 className="section-title">Our Hiring Companies</h2>
        <p className="section-subtitle">Trusted by top companies</p>

        <div className="company-container scroll-continuous">
          {companyScroll.map((company, index) => (
            <div key={index} className="company-card">
              <img src={company.logo} alt={company.name} />
              <p>{company.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Placement;
