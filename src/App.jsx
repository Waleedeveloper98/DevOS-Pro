import React, { useEffect, useState } from "react";
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
import { useContextMenu } from "react-contexify";
import ContextMenu from "./components/contextMenu/ContextMenu";

const App = () => {
  const DEFAULT_WALLPAPER = "/wallpaper.webp";

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    wallpaper: false,
    cli: false,
  });
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [appliedWallpaper, setAppliedWallpaper] = useState(() => {
    const savedWall = localStorage.getItem("wallpaper");
    return savedWall ? JSON.parse(savedWall) : null;
  });

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
    if (selectedWallpaper) {
      setSelectedWallpaper(null);
    }
   localStorage.removeItem("wallpaper")
  };

  const MENU_ID = "main-menu";

  const { show } = useContextMenu({ id: MENU_ID });

  const MENU_ITEMS = [
    { label: "Open GitHub", window: "github", shortcut: "⌘ G", key: "g" },
    { label: "Open Notes", window: "note", shortcut: "⌘ M", key: "m" },
    { label: "View Resume", window: "resume", shortcut: "⌘ R", key: "r" },
    { label: "Open Spotify", window: "spotify", shortcut: "⌘ S", key: "s" },

    { type: "separator" },

    { label: "Change Wallpaper", window: "wallpaper" },
    { label: "Open Terminal", window: "cli", shortcut: "⌘ Q", key: "q" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!e.metaKey && !e.ctrlKey) return;

      const key = e.key.toLowerCase();

      const currentItem = MENU_ITEMS.find((i) => i.key === key);

      if (currentItem) {
        e.preventDefault();
        setWindowsState((prev) => ({
          ...prev,
          [currentItem.window]: true,
        }));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [MENU_ITEMS]);

  useEffect(() => {
    if (appliedWallpaper) {
      localStorage.setItem("wallpaper", JSON.stringify(appliedWallpaper));
    }
  }, [appliedWallpaper]);

  return (
    <main
      onContextMenu={(e) => {
        e.preventDefault();
        show({ event: e });
      }}
      style={{
        backgroundImage: `url(${appliedWallpaper || DEFAULT_WALLPAPER})`,
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
        />
      )}

      <ContextMenu
        menuId={MENU_ID}
        setWindowsState={setWindowsState}
        menu={MENU_ITEMS}
      />
    </main>
  );
};

export default App;
