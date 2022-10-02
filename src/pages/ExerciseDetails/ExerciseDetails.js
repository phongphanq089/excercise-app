import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ExerciseDetails.scss";
import Detail from "../../compoments/Detail/Detail";
import ExercicesVideo from "../../compoments/ExercisesVideo/ExercisesVideo";
import SimilarExercises from "../../compoments/SimilarExercises/SimilarExercises";
import {
  fetchData,
  exerciseOptions,
  youtubeOptions,
} from "../../utils/fetchData";

const ExerciseDetailsf = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [ExerciseVideos, setExerciseVideos] = useState([]);
  const [targetExercise, setTargetExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseURL = "https://exercisedb.p.rapidapi.com";
      const exerciseVideo =
        "https://youtube-search-and-download.p.rapidapi.com";
      // data cac bai tap
      const ExercisesDetailData = await fetchData(
        `${exerciseURL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      // console.log(ExercisesDetailData);
      setExerciseDetail(ExercisesDetailData);

      //  data cac video bai tap tren youtube
      const ExercisesYoutube = await fetchData(
        `${exerciseVideo}/search?query=${ExercisesDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(ExercisesYoutube.contents);

      // cac bai tap co name target
      const TargetExercisesDetailData = await fetchData(
        `${exerciseURL}/exercises/target/${ExercisesDetailData.target}`,
        exerciseOptions
      );
      // console.log(TargetExercisesDetailData);
      setTargetExercise(TargetExercisesDetailData);

      const equipmentExercisesDetailData = await fetchData(
        `${exerciseURL}/exercises/equipment/${ExercisesDetailData.equipment}`,
        exerciseOptions
      );
      // console.log(equipmentExercisesDetailData);
      setEquipmentExercise(equipmentExercisesDetailData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <div className="ExerciseDetails">
      <Detail exerciseDetail={exerciseDetail} />
      <ExercicesVideo
        ExerciseVideos={ExerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetExercise={targetExercise}
        equipmentExercise={equipmentExercise}
      />
    </div>
  );
};

export default ExerciseDetailsf;
