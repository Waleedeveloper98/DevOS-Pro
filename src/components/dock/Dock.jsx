import React from "react";
import "./dock.scss";

const Dock = ({ setWindowsState }) => {
  return (
    <footer id="dock">
      <div
        onClick={() =>
          setWindowsState((prev) => ({
            ...prev,
            github: true,
          }))
        }
        className="icon github"
      >
        <img src="./dock-icons/github.png" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowsState((prev) => ({
            ...prev,
            note: true,
          }))
        }
        className="icon notes"
      >
        <img src="./dock-icons/notes.png" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowsState((prev) => ({
            ...prev,
            resume: true,
          }))
        }
        className="icon pdf"
      >
        <img src="./dock-icons/pdf.png" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com", "_blank");
        }}
        className="icon calendar"
      >
        <img src="./dock-icons/calendar.png" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowsState((prev) => ({
            ...prev,
            spotify: true,
          }))
        }
        className="icon spotify"
      >
        <img src="./dock-icons/spotify.png" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("mailto:waleedeveloper100@gmail.com");
        }}
        className="icon mail"
      >
        <img src="./dock-icons/mail.png" alt="" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/waleed-web-developer/",
            "_blank",
          );
        }}
        className="icon link"
      >
        <img src="./dock-icons/link.png" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowsState((prev) => ({
            ...prev,
            cli: true,
          }))
        }
        className="icon cli"
      >
        <img src="./dock-icons/cli.png" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
