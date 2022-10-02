import React from "react";
import { useState } from "react";
import "./SearchExercise.scss";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import { useEffect } from "react";
const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    // fecth các loại bài  tập trên cơ thể
    const fetchExercisesDatat = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExercisesDatat();
  }, []);

  const handelSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <div className="SearchExercise">
      <div className="SearchExercise_content">
        <div className="text__header">
          <h1>
            Awesome Exersies You <br />
            Should You
          </h1>
        </div>
        <div className="search__content">
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Enter value Exercises"
            className="SearchExercise__input"
            value={search}
            type="text"
          ></input>
          <button className="btn__button" onClick={handelSearch}>
            Search
          </button>
        </div>
      </div>
      <HorizontalScroll
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        bodyParts={bodyParts}
      />
    </div>
  );
};

export default SearchExercise;
