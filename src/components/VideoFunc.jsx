import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const VideoFunc = ({
  askButton,
  setAskButton,
  setIsVideo,
  isVideo,
  setNoteButton,
  noteButton,
}) => {
  const handleAskButtonClick = () => {
    setAskButton(!askButton);
  };

  // const handleSwitchVideoClick = () => {
  //   setIsVideo(!isVideo);
  //   if (playerRef.current) {
  //     const currentTime = playerRef.current.getCurrentTime();
  //     setCurrentTime(currentTime);
  //     console.log(currentTime);
  //   }
  // };

  return (
    <div className="relative align-middle h-14 top-2">
      {/* <div className="absolute inset-y-0 left-0 grid items-center">
        <a
          href="#"
          className="grid w-10 h-10 transition bg-purple-500 rounded-full ring-4 ring-white place-items-center hover:bg-purple-400"
        >
          <span className="sr-only">Watch the video</span>
          <svg
            className="w-4 ml-1"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
              fill="white"
            />
          </svg>
        </a>
      </div> */}
      <div className="right-0 flex justify-between top-2">
        <div>
          <button
            onClick={() => {
              setIsVideo(!isVideo);
            }}
            type="button"
            className="px-3 py-2 text-sm font-semibold text-indigo-600 rounded-md shadow-sm left-2 bg-indigo-50 hover:bg-indigo-100"
          >
            {!isVideo && "Switch to Video"}
            {isVideo && "Switch to Slide"}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setNoteButton(!noteButton);
            }}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Take Notes
          </button>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={handleAskButtonClick}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Ask AI
            </span>
          </button>
        </div>

        {/* <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Ask AI
        </button> */}
      </div>
    </div>
  );
};

export default VideoFunc;
