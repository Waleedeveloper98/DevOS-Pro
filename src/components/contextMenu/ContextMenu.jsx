import React from "react";
import { Item, Menu, Separator } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import "./contextMenu.scss";

const ContextMenu = ({menu, menuId, setWindowsState }) => {
 

  return (
    <>
      <Menu animation="slide" id={menuId} className="os-context-menu">
        {menu.map((item, index) => {
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
              <div>{item.label}</div>
              {item.shortcut && <div>{item.shortcut}</div>}
            </Item>
          );
        })}
      </Menu>
    </>
  );
};

export default ContextMenu;
