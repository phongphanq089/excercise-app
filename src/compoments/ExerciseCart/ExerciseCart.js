import React from "react";
import "./exerciseCart.scss";
import { Link } from "react-router-dom";
const ExerciseCart = ({ exercise }) => {
  return (
    <Link className="exerciseCart-cart" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="detailed__information">
        <button className="button_bodyPart">{exercise.bodyPart}</button>
        <button className="button_target">{exercise.target}</button>
      </div>
      <div className="name_exercises">{exercise.name}</div>
    </Link>
  );
};

export default ExerciseCart;
