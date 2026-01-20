import "./nav.scss";
import DateTime from "../dateTime/DateTime";

const Nav = () => {

  return (
    <nav>
      <div className="left">
        <div className="nav-icon">
          <img src="./nav-icons/apple.svg" alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">M Waleed</li>
          <li className="nav-item">File</li>
          <li className="nav-item">Window</li>
          <li className="nav-item">Terminal</li>
        </ul>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="./nav-icons/wifi.svg" alt="" />
        </div>
        <DateTime />
      </div>
    </nav>
  );
};

export default Nav;
