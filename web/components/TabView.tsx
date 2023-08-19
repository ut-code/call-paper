import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBase from "@mui/material/ButtonBase";
import SearchArea from "./SearchArea";
import GraphArea from "./GraphArea";

const buttonStyle = {
  borderRight: "1px solid #757575",
  display: "flex",
  padding: "12px 12px 12px 20px",
  alignItems: "center",
  gap: "12px",
};

type Tab = { type: "search" } | { type: "graph"; paperIds: string[] };

function TabComponent() {
  const [tabs, setTabs] = useState<Tab[]>([{ type: "search" }]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];
  if (!activeTab) throw new Error("No tabs are selected.");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "max-content minmax(0, 1fr)",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "auto",
          backgroundColor: "#e0e0e0",
          borderTop: "1px solid #757575",
          borderBottom: "1px solid #757575",
        }}
      >
        {tabs.map((tab, i) => (
          <ButtonBase
            onClick={() => setActiveTabIndex(i)}
            type="button"
            style={{
              backgroundColor: i === activeTabIndex ? "#ffffff" : "#e0e0e0",
              ...buttonStyle,
            }}
          >
            {{ search: "Search", graph: "Graph" }[tab.type]}
            <ButtonBase onClick={() => setTabs(tabs.filter((_, j) => i !== j))}>
              <CloseIcon />
            </ButtonBase>
          </ButtonBase>
        ))}
      </div>
      {activeTab.type === "search" && (
        <SearchArea
          onVisualize={(paperIds) => {
            setTabs([...tabs, { type: "graph", paperIds }]);
            setActiveTabIndex(tabs.length);
          }}
        />
      )}
      {activeTab.type === "graph" && (
        <GraphArea paperIds={activeTab.paperIds} />
      )}
    </div>
  );
}

export default TabComponent;
