import React from "react";
import "./exerciseCart.scss";
import { Link } from "react-router-dom";
const ExerciseCart = ({ exercise }) => {
  // phần này là phần list ra cá bài tập
  return (
    <Link
      className="exerciseCart-cart"
      to={`/exercise/${exercise.id}`}
      id="exerciseCart"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        id="#exercises"
      />
      <div className="detailed__information">
        <button className="button_bodyPart">{exercise.bodyPart}</button>
        <button className="button_target">{exercise.target}</button>
      </div>
      <div className="name_exercises">{exercise.name}</div>
    </Link>
  );
};

export default ExerciseCart;
