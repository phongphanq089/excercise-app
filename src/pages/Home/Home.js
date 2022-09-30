import React from "react";
import SearchExercise from "../../compoments/SearchExercise/SearchExercise";
import Herobaner from "../../compoments/Herobaner/Herobaner";
import Exercise from "../../compoments/Exercises/Exercise";
const Home = () => {
  return (
    <div className="Excercise-home">
      <Herobaner />
      <SearchExercise />
      <Exercise />
    </div>
  );
};

export default Home;
