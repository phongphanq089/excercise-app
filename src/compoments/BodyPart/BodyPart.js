import React from "react";
import "./bodyPart.scss";
import gym from "../../accsets/image/gym5.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  console.log(bodyPart);
  // phần này là phần render ra các  loại bài tập bộ phận trên cơ thể
  return (
    <div className="body_Part">
      <img
        className="image-gym"
        src={gym}
        alt=""
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1400, left: 100, behavior: "smooth" });
        }}
      />
      <div className="item-bodyPart">{item}</div>
    </div>
  );
};

export default BodyPart;
