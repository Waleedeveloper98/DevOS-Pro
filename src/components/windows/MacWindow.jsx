import React from "react";
import "./window.scss";
import { Rnd } from "react-rnd";

const MacWindow = ({
  children,
  width = "40vw",
  height = "40vw",
  windowName,
  setWindowsState,
  title
}) => {
  
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 200,
        y: 100,
      }}
    >
      <div className="window">
        <div className="window-nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowsState((prev) => ({ ...prev, [windowName]: false }))
              }
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <p className="title">muhammadwaleed - {title}</p>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
