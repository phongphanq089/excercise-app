import React from "react";
import "./herobaner.scss";
import banner from "../../accsets/image/banner1.jpg";
const Herobaner = () => {
  return (
    <div className="Herrobaner">
      <div className="Herobaner_text-content">
        <h3>Fitness Club</h3>
        <h2>
          Sweat,SMILE <br />
          and Repeat
        </h2>
        <p>Check out the most effective exercises</p>
        <button className="btn btn-color">EXPLORE EXERCIES</button>
        <h1 className="hero_text">EXERCISES</h1>
      </div>

      <div className="Herobanner_image">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Herobaner;
