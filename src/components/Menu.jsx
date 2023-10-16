import "../styles/Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCompass,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import PrifileIcon from "./ProfileIcon";

const HOME = <FontAwesomeIcon icon={faHouse} />;
const EXPLORE = <FontAwesomeIcon icon={faCompass} />;
const MESSAGES = <FontAwesomeIcon icon={faPaperPlane} />;
const SEARCH = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const Menu = () => {
  return (
    <div className="menu">
      <ul className="icons">
        <li className="icon">{HOME}</li>
        <li className="icon">{SEARCH}</li>
        <li className="icon">{MESSAGES}</li>
        <li className="icon">{EXPLORE}</li>
        <li className="icon">
          <PrifileIcon />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
