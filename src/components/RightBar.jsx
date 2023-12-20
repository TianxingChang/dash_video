import React, { useState } from "react";
import Transcript from "./RightBar/Transcript";

const RightBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full">
      <div className="sticky top-0 z-10 flex justify-between w-full py-4 pt-6 font-medium bg-white selection-bar text-purplelight">
        <div
          className={`option ${selectedOption === "option1" ? "active" : ""}`}
          onClick={() => handleOptionClick("option1")}
        >
          Transcript
        </div>
        <div
          className={`option ${selectedOption === "option2" ? "active" : ""}`}
          onClick={() => handleOptionClick("option2")}
        >
          Knowledge
        </div>
        <div
          className={`option ${selectedOption === "option3" ? "active" : ""}`}
          onClick={() => handleOptionClick("option3")}
        >
          Dicussion
        </div>
      </div>

      <div className="w-full h-96 ">
        {(selectedOption === "option1" || selectedOption == null) && (
          <>
            <Transcript />
            <Transcript />
            <Transcript />
          </>
        )}
        {selectedOption === "option2" && <div>View for Option 2</div>}
        {selectedOption === "option3" && <div>Discussion +</div>}
      </div>
    </div>
  );
};

export default RightBar;
