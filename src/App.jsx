import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import RightBar from "./components/RightBar";
import VideoTitle from "./components/VideoTitle";
// import Pdf from "./components/Pdf";
import VideoFunc from "./components/VideoFunc";
import CourseInfo from "./components/CourseInfo";
import PDF_player from "./components/PDF_player";
import Chat from "./components/ChatBot/Chat";
import React, { useState } from "react";

// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

function App() {
  const [askButton, setAskButton] = useState(false);
  const [isVideo, setIsVideo] = useState(true);

  return (
    <body className="h-screen overflow-hidden">
      {/* <div className="fixed top-0 w-full bg-white z-15 h- placeHolder">.</div> */}
      <NavBar />

      <div className="z-0 flex justify-center w-full h-screen mt-4 align-middle border-t-[1px]  bg-main ">
        <div className="w-full h-screen p-3 px-10 overflow-x-hidden overflow-y-auto bg-main half:w-2/3">
          <VideoTitle />
          <div
            className="flex-row relative justify-center w-full  aspect-video
         rounded-lg border-[2px] bg-videoborder border-videoborder"
          >
            {<VideoPlayer isVideo={isVideo} />}
            {/* <PDF_player isVideo={isVideo} /> */}

            {/* <Pdf className="w-full h-[1000px] overflow-y-auto" /> */}
          </div>

          <VideoFunc
            setAskButton={setAskButton}
            askButton={askButton}
            setIsVideo={setIsVideo}
            isVideo={isVideo}
          />
          <CourseInfo />
        </div>
        <div className="hidden w-1/3 px-5 overflow-y-auto bg-white half:block RightBarWrapper">
          <RightBar />
          <Chat askButton={askButton} />
        </div>
      </div>
    </body>
  );
}

export default App;
