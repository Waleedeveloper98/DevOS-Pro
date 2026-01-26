import React from "react";
import MacWindow from "./MacWindow";
import "./github.scss";


const Github = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      title={"GitHub"}
      windowName={windowName}
      setWindowsState={setWindowsState}
      height="60vh"
    >
      <div className="github-page">
        <button>
          <a href="https://github.com/Waleedeveloper98" target="_blank">Visit GitHub Profile</a>
        </button>
        <div className="video-box">
          <video src="./github.mp4" muted autoPlay loop></video>
        </div>
      </div>
    </MacWindow>
  );
};

export default Github;
