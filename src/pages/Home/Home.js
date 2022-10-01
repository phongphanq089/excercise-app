import React, { useState } from "react";
import SearchExercise from "../../compoments/SearchExercise/SearchExercise";
import Herobaner from "../../compoments/Herobaner/Herobaner";
import Exercise from "../../compoments/Exercises/Exercise";
const Home = () => {
  const [exercises, setExercises] = useState([]);

  const [bodyPart, setBodyPart] = useState("all");
  return (
    <div className="Excercise-home">
      <Herobaner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        setExercises={setExercises}
        exercises={exercises}
        setBodyPart={setBodyPart}
      />
    </div>
  );
};

export default Home;
