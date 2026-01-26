import React from "react";
import "./dock.scss";
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
import Pet from "../lottiePet/Pet";

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
        data-tooltip-id="my-tooltip"
        data-tooltip-content="github"
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
        data-tooltip-id="my-tooltip"
        data-tooltip-content="notes"
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
        data-tooltip-id="my-tooltip"
        data-tooltip-content="pdf"
        className="icon pdf"
      >
        <img src="./dock-icons/pdf.png" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com", "_blank");
        }}
        className="icon calendar"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="calendar"
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
        data-tooltip-id="my-tooltip"
        data-tooltip-content="spotify"
      >
        <img src="./dock-icons/spotify.png" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("mailto:waleedeveloper100@gmail.com");
        }}
        className="icon mail"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="mail"
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
        data-tooltip-id="my-tooltip"
        data-tooltip-content="linkedIn"
      >
        <img src="./dock-icons/link.png" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((prev) => ({
            ...prev,
            wallpaper: true,
          }));
        }}
        title="walls"
        className="icon walls"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="wallpapers"
      >
        <img src="./dock-icons/walls.png" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowsState((prev) => ({
            ...prev,
            cli: true,
          }))
        }
        className="icon cli"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="cli"
      >
        <img src="./dock-icons/cli.png" alt="" />
      </div>
      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "black",
        }}
        opacity={0.6}
      />

      {/* lottie dog */}
      <Pet />
    </footer>
  );
};

export default Dock;
