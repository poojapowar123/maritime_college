import React from "react";
import "./box.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">

        {/* Group 1 */}
        <div className="group-item">
          <img className="hourglass" src="/assets/crown.png" alt="Hourglass" />
          <div className="text-wrapper">A1</div>
          <div className="CIP-grade">
            CIP Grade <br /> Outstanding
          </div>
        </div>

        {/* Group 2 */}
        <div className="group-item">
          <img className="candidate" src="/assets/calendar.png" alt="Candidate" />
          <div className="text-wrapper-2">23+</div>
          <div className="text-wrapper-3">Glorious Years</div>
        </div>

        {/* Group 3 */}
        <div className="group-item">
          <div className="text-wrapper-4">30+</div>
          <div className="text-wrapper-5">Recruiters on Board</div>
          <img className="graduation-cap" src="/assets/people.png" alt="Graduation cap" />
        </div>

        {/* Group 4 */}
        <div className="group-item">
          <img className="img" src="/assets/suitcase.png" alt="Education" />
          <div className="text-wrapper-6">100%</div>
          <div className="text-wrapper-7">Placement Assistance</div>
        </div>

        {/* Group 5 */}
        <div className="group-item">
          <img className="graduation-cap-2" src="/assets/students.png" alt="Graduation cap" />
          <div className="text-wrapper-8">3500+</div>
          <div className="text-wrapper-9">Benefited Alumni</div>
        </div>

        <p className="element-years-of-legacy">
          25 Years Of Legacy Of Maritime Education
        </p>

        <p className="p">A Institute of Life Transformation</p>

      </div>
    </div>
  );
};
