import "../styles/App.scss";
import Feed from "./Feed";
import Header from "./Header";
import Menu from "./Menu";
import Stories from "./Stories";

function App() {
  return (
    <div className="app">
      <Header />
      <Stories />
      <Feed />
      <Menu />
    </div>
  );
}

export default App;
