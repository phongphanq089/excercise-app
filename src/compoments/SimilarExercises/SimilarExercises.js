import React from "react";
import "./SimilarExercises.scss";
import Loading from "../Loading/Loading";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
const SimilarExercises = ({ targetExercise, equipmentExercise }) => {
  return (
    <div className="SimilarExercises">
      <div>
        <h2 className="SimilarExercises__header">
          Exercises that target the same muscle group
        </h2>
        <div className="SimilarExercises__content">
          {targetExercise.length !== 0 ? (
            <HorizontalScroll className="item" data={targetExercise} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div>
        <h2 className="SimilarExercises__header">
          Exercises that you the same equipment
        </h2>
        <div className="SimilarExercises__content">
          {equipmentExercise.length !== 0 ? (
            <HorizontalScroll data={equipmentExercise} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarExercises;
