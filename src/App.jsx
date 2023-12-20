import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import RightBar from "./components/RightBar/RightBar";
import VideoTitle from "./components/VideoTitle";
// import Pdf from "./components/Pdf";
import VideoFunc from "./components/VideoFunc";
import CourseInfo from "./components/videoBelow/CourseInfo";
import PDF_player from "./components/PDF_player";
import Chat from "./components/ChatBot/Chat";
import Quiz from "./components/videoBelow/Quiz";
import Comments from "./components/videoBelow/Comments";
import React, { useState } from "react";
import Notes from "./components/Notes";
// import Test from "./components/api/test";

// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

function App() {
  const [askButton, setAskButton] = useState(false);
  const [noteButton, setNoteButton] = useState(false);
  const [isVideo, setIsVideo] = useState(true);
  const [currentTimeVideo, setCurrentTimeVideo] = useState(null);
  const handleVideoSwitch = (currentTime) => {
    // console.log("Current video play time:", currentTime);
    setCurrentTimeVideo(currentTime);
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* <div className="fixed top-0 w-full bg-white z-15 h- placeHolder">.</div> */}
      <NavBar />

      <div className="z-0 flex justify-center w-full h-screen mt-0 align-middle border-t-[1px]  bg-main ">
        <div className="w-full h-screen p-3 px-10 overflow-x-hidden overflow-y-auto half:w-2/3">
          {/* <VideoTitle /> */}
          <div
            className="z-10 flex-row relative mt-8 justify-center w-full  aspect-video
         rounded-lg border-[2px]  bg-videoborder border-videoborder overflow-hidden"
          >
            {
              <VideoPlayer
                isVideo={isVideo}
                onVideoSwitch={handleVideoSwitch}
              />
            }
            <PDF_player isVideo={isVideo} time={currentTimeVideo} />

            {/* <Pdf className="w-full h-[1000px] overflow-y-auto" /> */}
          </div>

          <div className="hidden sm:block">
            <VideoFunc
              setAskButton={setAskButton}
              askButton={askButton}
              setIsVideo={setIsVideo}
              isVideo={isVideo}
              setNoteButton={setNoteButton}
              noteButton={noteButton}
            />
          </div>
          <CourseInfo />
          <Quiz />
          <Comments />
          <Comments />
          <Comments />

          {/* <Test /> */}
          <Comments />
          <Comments />

          <div className="h-12"></div>
        </div>
        <div className="hidden w-1/3 px-5 overflow-y-auto bg-white half:block RightBarWrapper">
          <RightBar />
          <Notes noteButton={noteButton} time={currentTimeVideo} />
          <Chat askButton={askButton} time={currentTimeVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
