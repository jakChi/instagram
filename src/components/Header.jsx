import "../styles/Header.scss";
import InstaLogo from "../assets/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const NOTIFICATIONS = <FontAwesomeIcon icon={faHeart} />;
const ADD = <FontAwesomeIcon icon={faSquarePlus} />;

const Header = () => {
  return (
    <nav>
      <header className="header">
        <img className="logo" src={InstaLogo} alt="instagram logo" />
        <div className="headerIcons">
          <i>{NOTIFICATIONS}</i>
          <i>{ADD}</i>
        </div>
      </header>
    </nav>
  );
};

export default Header;
