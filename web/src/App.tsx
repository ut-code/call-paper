import MenuBar from "./MenuBar";
import GraphArea from "./GraphArea";
import "./App.css";

function App() {
  return (
    <>
      <MenuBar />
      <GraphArea x={10} y={20} />
      <GraphArea x={100} y={40} />
    </>
  );
}

export default App;
