import React from "react";
import "./ExercisesVideo.scss";
import Loading from "../../compoments/Loading/Loading";
const ExercisesVideo = ({ ExerciseVideos, name }) => {
  console.log(ExerciseVideos);
  if (!ExerciseVideos.length) return <Loading />;
  return (
    <div className="ExercisesVideo">
      <h2 className="content__header">
        Watch <span style={{ fontSize: "2rem", color: "red" }}>{name}</span>
        Exercises Videos
      </h2>
      <div className="ExerciesVideo__content">
        {ExerciseVideos &&
          ExerciseVideos.slice(0, 6).map((item, index) => (
            <div key={index}>
              <a
                className="exercise__video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{ borderTopLeftRadius: "20px" }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
              </a>
              <h4>{item.video.title}</h4>
              <p>{item.video.channelName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExercisesVideo;
