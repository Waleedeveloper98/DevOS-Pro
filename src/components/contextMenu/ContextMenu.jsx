import React from "react";
import { Item, Menu, Separator } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import "./contextMenu.scss";

const ContextMenu = ({ menuId, setWindowsState }) => {
  const MENU_ITEMS = [
    { label: "Open GitHub", window: "github" },
    { label: "Open Notes", window: "note" },
    { label: "View Resume", window: "resume" },
    { label: "Open Spotify", window: "spotify" },

    // separator marker
    { type: "separator" },

    { label: "Change Wallpaper", window: "wallpaper" },
    { label: "Open Terminal", window: "cli" },
  ];

  return (
    <>
      <Menu  animation="slide" id={menuId} className="os-context-menu">
        {MENU_ITEMS.map((item, index) => {
          if (item.type === "separator") {
            return <Separator key={index} />;
          }
          return (
            <Item 
              onClick={() =>
                setWindowsState((prev) => ({
                  ...prev,
                  [item.window]: true,
                }))
              }
            >
              {item.label}
            </Item>
          );
        })}
      </Menu>
    </>
  );
};

export default ContextMenu;
