import MenuBar from "./MenuBar";
import ArticleNode from "./ArticleNode";
import "./App.css";

function App() {
  return (
    <>
      <MenuBar />
      <svg width="100%" height="500">
        <ArticleNode x={10} y={20} />
        <ArticleNode x={500} y={150} />
      </svg>
    </>
  );
}

export default App;
