import MacWindow from "./MacWindow";
import "./walls.scss";
import wallpapersData from "../../assets/wallpapers.json";

const Walls = ({
  selectedWallpaper,
  setWall,
  handleApplyWallpaper,
  windowName,
  setWindowsState,
  handleDefaultWallpaper,
}) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      height="50vh"
      title={"Wallpapers"}
    >
      <div className="walls-window">
        <div className="walls-top">
          {wallpapersData.wallpapers.map((wallpaper) => {
            return (
              <div className="wall">
                <img
                  onClick={() => setWall(wallpaper.src)}
                  id="wall6"
                  src={wallpaper.src}
                  alt=""
                  className={
                    selectedWallpaper === wallpaper.src
                      ? "selectedWall"
                      : "notSelectedWall"
                  }
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
        <div className="walls-bottom">
          <button
            onClick={handleApplyWallpaper}
            style={{
              backgroundColor: `${selectedWallpaper ? "rgb(66, 66, 255)" : "#898989"}`,
              cursor: `${selectedWallpaper ? "pointer" : "not-allowed"}`,
            }}
          >
            Set Wallpaper
          </button>
          <button
            style={{
              cursor: `${selectedWallpaper ? "pointer" : "not-allowed"}`,
            }}
            onClick={handleDefaultWallpaper}
          >
            Set Default
          </button>
        </div>
      </div>
    </MacWindow>
  );
};

export default Walls;
