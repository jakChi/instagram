import Card from "./Card.jsx";
import "../styles/Feed.scss";

const Data = ["koba", "tako", "toko"];

const Feed = () => {
  return (
    <div className="feed">
      {Data.map((person, i) => (
        <Card name={person} key={i} />
      ))}
    </div>
  );
};

export default Feed;
