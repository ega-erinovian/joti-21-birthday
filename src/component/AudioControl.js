import React from "react";
import BirthdaySong from "../audio/hbd-song.mp3";

const AudioControl = () => {
  return (
    <>
      <div className="audio-control-wrapper">
        <button className="btn">
          <div className="icon">
            <audio src={BirthdaySong} id="music" controls></audio>
          </div>
        </button>
      </div>
    </>
  );
};

export default AudioControl;
