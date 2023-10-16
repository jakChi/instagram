import "../styles/Stories.scss";
import ProfileIcon from "./ProfileIcon";

const Stories = () => {
  return (
    <div className="stories">
      <ul className="list">
        <li><ProfileIcon /></li>
        <li><ProfileIcon /></li>
        <li><ProfileIcon /></li>
        <li><ProfileIcon /></li>
      </ul>
    </div>
  );
};

export default Stories;
