import React, { useEffect } from "react";
import "./exercises.scss";
import ExerciseCart from "../ExerciseCart/ExerciseCart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { useState } from "react";
const Exercise = ({ setExercises, exercises, bodyPart }) => {
  console.log(exercises);
  const exercisesCurrenPage = 12;
  const [curentPage, setCurentpage] = useState(1);
  const indexOflastExercise = curentPage * exercisesCurrenPage;
  const indexofFirtExercise = indexOflastExercise - exercisesCurrenPage;

  const curentExercises = exercises.slice(
    indexofFirtExercise,
    indexOflastExercise
  );
  //0--12  , 12--24, 24--36, 36--48,......

  // console.log(curentExercises);
  const paginate = (e, value) => {
    setCurentpage(value);

    window.scroll({ top: 1800, behavior: "smooth" });
  };

  // ham thuc hien click cac bai tap tren thanh se rander ra cac bai tap
  useEffect(() => {
    const fechtExerciseData = async () => {
      let ExercisesData = [];
      if (bodyPart === "all") {
        ExercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises`,
          exerciseOptions
        );
      } else {
        ExercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(ExercisesData);
    };
    fechtExerciseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart]);

  return (
    <div className="Exercise" id="exercise">
      <h1>Showing Result</h1>
      <div className="Exercises__content">
        {curentExercises.map((exercise, index) => (
          <ExerciseCart exercise={exercise} key={index} />
        ))}
      </div>
      {/* phần này là phần pagination */}
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
