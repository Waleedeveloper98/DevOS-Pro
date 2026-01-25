import React, { useState } from "react";
import "./app.scss";
import "react-tooltip/dist/react-tooltip.css";
import Dock from "./components/dock/Dock";
import Nav from "./components/nav/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import Walls from "./components/windows/Walls";

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    wallpaper: false,
    cli: false,
  });
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [appliedWallpaper, setAppliedWallpaper] = useState(null);
  const [defaultWallpaper, setDefaultWallpaper] = useState(null);

  const setWall = (imgSrc) => {
    if (selectedWallpaper) {
      setSelectedWallpaper(null);
    }
    setSelectedWallpaper(imgSrc);
  };

  const handleApplyWallpaper = () => {
    if (selectedWallpaper) {
      setAppliedWallpaper(selectedWallpaper);
    }
  };
  const handleDefaultWallpaper = () => {
    if (appliedWallpaper) {
      setAppliedWallpaper(null);
    }
    if(selectedWallpaper){
      setSelectedWallpaper(null)
    }
    setDefaultWallpaper("url(/public/wallpaper.webp)");
  };

  return (
    <main
      style={{
        backgroundImage: `${appliedWallpaper ? `url(${appliedWallpaper})` : "url(/public/wallpaper.webp)"}`,
      }}
    >
      <Nav />
      <Dock setWindowsState={setWindowsState} />
      {windowsState.github && (
        <Github windowName="github" setWindowsState={setWindowsState} />
      )}
      {windowsState.note && (
        <Note windowName="note" setWindowsState={setWindowsState} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.spotify && (
        <Spotify windowName="spotify" setWindowsState={setWindowsState} />
      )}
      {windowsState.cli && (
        <Cli windowName="cli" setWindowsState={setWindowsState} />
      )}
      {windowsState.wallpaper && (
        <Walls
          setSelectedWallpaper={setSelectedWallpaper}
          selectedWallpaper={selectedWallpaper}
          setWall={setWall}
          handleApplyWallpaper={handleApplyWallpaper}
          windowName="wallpaper"
          setWindowsState={setWindowsState}
          handleDefaultWallpaper={handleDefaultWallpaper}
          defaultWallpaper={defaultWallpaper}
        />
      )}
    </main>
  );
};

export default App;
