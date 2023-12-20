import Iframe from "react-iframe";
import React, { useEffect, useRef, useState } from "react";
const PDF_player = ({ isVideo }) => {
  const z_index = isVideo ? "z-0" : "z-20";
  console.log(z_index);
  return (
    <div className={`absolute top-0 ${z_index} h-full aspect-video `}>
      <Iframe
        className="bg-white"
        src={"./9.pdf#toolbar=0&page=9&embedded=true"}
        width="100%"
        height="100%"
        frameBorder="0"
      ></Iframe>
    </div>
  );
};
export default PDF_player;
