import React from "react";
import "./window.scss";
import { Rnd } from "react-rnd";

const MacWindow = ({ children }) => {
  return (
    <Rnd>
      <div className="window">
        <div className="window-nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <p className="title">muhammadwaleed - temp</p>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
