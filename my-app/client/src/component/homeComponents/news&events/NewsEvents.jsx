import React from "react";
import "./NewsEvents.css";

const admissionsData = [
  {
    date: "21",
    month: "DEC",
    content:
      "Admissions for the A.Y. 2025-26 for B.Sc. Nautical Science, DNS, B. Tech. Marine Engineering and Lateral Entry are closed.",
    linkText: "Apply Here",
    link: "#",
  },
  {
    date: "21",
    month: "DEC",
    content:
      "DGS Training Circular No. 21 Of 2025 : Consideration For Multiple Admission Pathways In Maritime Education And Mechanism For Filling Unfilled Seats Due To IMU CET. For Details",
    linkText: "For More Details",
    link: "#",
  },
   {
    date: "21",
    month: "DEC",
    content:
      "Admissions for the A.Y. 2025-26 for B.Sc. Nautical Science, DNS, B. Tech. Marine Engineering and Lateral Entry are closed.",
    linkText: "Apply Here",
    link: "#",
  },
  {
    date: "21",
    month: "DEC",
    content:
      "DGS Training Circular No. 21 Of 2025 : Consideration For Multiple Admission Pathways In Maritime Education And Mechanism For Filling Unfilled Seats Due To IMU CET. For Details",
    linkText: "For More Details",
    link: "#",
  },
];

const academicsData = [
  {
    date: "21",
    month: "DEC",
    content:
      "Theory Time Table of Makeup Examinations August-2025 :",
    linkText: "For More Details",
    link: "#",
  },
  {
    date: "21",
    month: "DEC",
    content:
      "Notice Of Soft Copy & Revaluation Of June-2025 Exam :",
    linkText: "For More Details",
    link: "#",
  },
  {
    date: "21",
    month: "DEC",
    content:
      "Notice Of Soft Copy & Revaluation Of June-2025 Exam :",
    linkText: "For More Details",
    link: "#",
  },
];

const happeningsData = [
  {
    image: "https://via.placeholder.com/300x180",
    title:
      "7th National Conference on Marine Engineering, Nautical Science & Port and Shipping .....",
  },
  {
    image: "https://via.placeholder.com/300x180",
    title:
      "Faculty Development Program (FDP) on Empowering Educators – Embark-4.0",
  },
   {
    image: "https://via.placeholder.com/300x180",
    title:
      "7th National Conference on Marine Engineering, Nautical Science & Port and Shipping .....",
  },
  {
    image: "https://via.placeholder.com/300x180",
    title:
      "Faculty Development Program (FDP) on Empowering Educators – Embark-4.0",
  },
   {
    image: "https://via.placeholder.com/300x180",
    title:
      "7th National Conference on Marine Engineering, Nautical Science & Port and Shipping .....",
  },
  {
    image: "https://via.placeholder.com/300x180",
    title:
      "Faculty Development Program (FDP) on Empowering Educators – Embark-4.0",
  },
];

const NewsEvents = () => {
  return (
    <div className="news-main-container">
      <div className="news-left-container">
        <h2 className="news-main-title">Latest News & Announcement</h2>
        <p className="news-main-subtitle">
          From campus highlights to student success stories — all in one place.
        </p>

        <div className="news-columns">
          {/* Admissions */}
          <div className="news-column">
            <h3 className="news-column-title">Admissions</h3>
            <div className="news-list scrollable">
              {admissionsData.map((item, idx) => (
                <div key={idx} className="news-item">
                  <div className="news-date">
                    <span className="month">{item.month}</span>
                    <span className="day">{item.date}</span>
                  </div>
                  <div className="news-content">
                    {item.content}
                    <a href={item.link} className="news-link">
                      {item.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all"><button className="view-all-btn">View All</button></div>
          
          </div>

          {/* Academics & Exams */}
          <div className="news-column">
            <h3 className="news-column-title">Academics & Exams</h3>
            <div className="news-list scrollable">
              {academicsData.map((item, idx) => (
                <div key={idx} className="news-item">
                  <div className="news-date">
                    <span className="month">{item.month}</span>
                    <span className="day">{item.date}</span>
                  </div>
                  <div className="news-content">
                    {item.content}
                    <a href={item.link} className="news-link">
                      {item.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all"><button className="view-all-btn">View All</button></div>
          </div>
        </div>
      </div>

      {/* Happenings Right */}
      <div className="news-right-container" id="news-right-container">
        <h3 className="happenings-title">Happenings</h3>
        <p className="happenings-subtitle">
          Catch every event for shaping our journey
        </p>
        <div className="happenings-list scrollable">
          {happeningsData.map((item, idx) => (
            <div key={idx} className="happening-item">
              <img src={item.image} alt={item.title} className="happening-image" />
              <p className="happening-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
