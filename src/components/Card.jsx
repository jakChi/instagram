import ProfileIcon from "./ProfileIcon";
import "../styles/Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComments } from "@fortawesome/free-solid-svg-icons";

const COMMENT_ICON = <FontAwesomeIcon icon={faComments} />;
const HEART_ICON = <FontAwesomeIcon icon={faHeart} />;

//minda ro sxva foto mqonds renderisas mara ertidaigivea yvelaferi imito ro yvela pirvel renderze iqmneba
const feedPicSrc = "https://picsum.photos/200 ";

const Card = ({name}) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <img src={feedPicSrc} alt="profile picture" />
        <p>{name}</p>
      </div>
      <div className="cardBody">
        <div className="feedPic">
          <ProfileIcon />
        </div>
      </div>
      <div className="cardFooter">
        <i>{HEART_ICON}</i>
        <i>{COMMENT_ICON}</i>
      </div>
    </div>
  );
};

export default Card;
