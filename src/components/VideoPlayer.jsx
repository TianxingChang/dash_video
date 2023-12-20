import ReactPlayer from "react-player";
import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ isVideo, onVideoSwitch }) => {
  const playerRef = useRef(null); // Create a reference to the ReactPlayer component

  const handleButtonClick = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      onVideoSwitch(currentTime);
    }
  };

  setInterval(handleButtonClick, 500);

  useEffect(() => {
    handleButtonClick();
  }, [isVideo]);

  return (
    <>
      <div className="relative z-10 w-full rounded-md aspect-video ">
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          // url="https://www.youtube.com/watch?v=bNb2fEVKeEo&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv&index=5"
          // url="https://ptz143.ust.hk/rvcsecured/mp4:23FA_COMP3511-L1_231129_KtKBJvNWmY.mp4/chunklist_w272797293_tkcnZjdG9rZW5lbmR0aW1lPTE3MDI4MDkxMTMmcnZjdG9rZW5oYXNoPWtPcXVYa2gyNHd6WlJhQTdPelFYXzAzeG50d0MwSjlLQW5LRHN3ZDYxMFE9.m3u8"
          url="./test_fyp.mp4"
          className="absolute top-0 left-0 overflow-hidden rounded-md"
          controls="true"
        />
      </div>
    </>
  );
};

export default VideoPlayer;
