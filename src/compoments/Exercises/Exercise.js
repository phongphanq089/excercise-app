import React from "react";
import "./exercises.scss";
import ExerciseCart from "../ExerciseCart/ExerciseCart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { useState } from "react";
const Exercise = ({ setExercises, exercises, setBodyPart }) => {
  console.log(exercises);
  const exercisesCurrenPage = 12;
  const [curentPage, setCurentpage] = useState(1);
  const indexOflastExercise = curentPage * exercisesCurrenPage;
  const indexofFirtExercise = indexOflastExercise - exercisesCurrenPage;

  const curentExercises = exercises.slice(
    indexofFirtExercise,
    indexOflastExercise
  );
  console.log(curentExercises);
  const paginate = (e, value) => {
    setCurentpage(value);

    window.scroll({ top: 1800, behavior: "smooth" });
  };

  return (
    <div className="Exercise">
      <h1>Showing Result</h1>
      <div className="Exercises__content">
        {curentExercises.map((exercise, index) => (
          <ExerciseCart exercise={exercise} key={index} />
        ))}
      </div>
      <Stack m=" 7rem 0" spacing={2} className="panginations">
        {exercises.length > 9 && (
          <Pagination
            color="secondary"
            size="large"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesCurrenPage)}
            page={curentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </div>
  );
};

export default Exercise;
