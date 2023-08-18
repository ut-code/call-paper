import MenuBar from "../components/MenuBar";
import TabView from "../components/TabView";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "max-content minmax(0, 1fr)",
        height: "100vh",
      }}
    >
      <MenuBar />
      <TabView />
    </div>
  );
}

export default App;
