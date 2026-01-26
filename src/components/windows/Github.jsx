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
          <a
            href="https://github.com/Waleedeveloper98"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            Visit GitHub Profile
          </a>
        <div className="video-box">
          <video src="./github.mp4" muted autoPlay loop></video>
        </div>
        <p id="credit">
          Credit goes to{" "}
          <a href="https://gitstory.pankajk.tech/" target="_blank">
            gitstory
          </a>
        </p>
      </div>
    </MacWindow>
  );
};

export default Github;
