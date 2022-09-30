import React from "react";
import { useState } from "react";
import "./SearchExercise.scss";
const SearchExercise = () => {
  const [search, setSearch] = useState("");
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
          <button className="btn__button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchExercise;
