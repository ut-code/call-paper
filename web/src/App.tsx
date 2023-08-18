import { useState } from "react";
import MenuBar from "../components/MenuBar";
import TabView from "../components/TabView";
import "./App.css";
import defaultPaperInfos from "../components/defaultPaperInfos";
import {
  PaperInfosContext,
  SetPaperInfosContext,
} from "../components/contexts";

export type PaperInfo = {
  id: string;
  author: string;
  title: string;
  year: string;
  journal: string;
  tags: string[];
  citations: string[];
  citedBy: string[];
};

function App() {
  const [paperInfos, setPaperInfos] = useState<PaperInfo[]>(defaultPaperInfos);

  return (
    <PaperInfosContext.Provider value={paperInfos}>
      <SetPaperInfosContext.Provider value={setPaperInfos}>
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
      </SetPaperInfosContext.Provider>
    </PaperInfosContext.Provider>
  );
}

export default App;
