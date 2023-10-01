import { useState } from "react";
import MenuBar from "../components/MenuBar";
import TabView from "../components/TabView";
import "./App.css";
import defaultPaperInfos from "../components/defaultPaperInfos";

import {
  PaperInfosContextProvider,
  SetPaperInfosContextProvider,
} from "../components/contexts";

export type PaperInfo = {
  id: string;
  author: string;
  title: string;
  year: number;
  journal: string;
  tags: string[];
  citations: string[];
  citedBy: string[];
};

function App() {
  const [paperInfos, setPaperInfos] = useState<PaperInfo[]>(defaultPaperInfos);

  console.log(paperInfos);
  return (
    <PaperInfosContextProvider value={paperInfos}>
      <SetPaperInfosContextProvider value={setPaperInfos}>
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
      </SetPaperInfosContextProvider>
    </PaperInfosContextProvider>
  );
}

export default App;
