import React from "react";
import "./Detail.scss";
import bodyPartimg from "../../accsets/icons/body-part.png";
import equimpentimg from "../../accsets/icons/equipment.png";
import targetimg from "../../accsets/icons/target.png";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartimg,
      name: bodyPart,
    },
    {
      icon: targetimg,
      name: target,
    },
    {
      icon: equimpentimg,
      name: equipment,
    },
  ];
  return (
    <div className="Detai_content">
      <div className="Detail-image__content">
        <img src={gifUrl} alt="" />
      </div>
      <div className="about-detail__content">
        <div className="text__about">
          <h5>{name}</h5>
          <p>
            Exercises keep you strong.{name} bup is one of the best exercises to
            target your {target}. It will help you improve your mood and gain
            energy.
          </p>
        </div>

        {extraDetail.map((extra, index) => (
          <div className="extraDetal" key={index}>
            <button>
              <img src={extra.icon} alt="extra" />
            </button>
            <h4>{extra.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
