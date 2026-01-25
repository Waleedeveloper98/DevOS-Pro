import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      title={"Resume"}
      windowName={windowName}
      setWindowsState={setWindowsState}
      height="60vh"
    >
      <div className="resume-window">
        <iframe src="./resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;
