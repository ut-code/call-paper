import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBase from "@mui/material/ButtonBase";
import { IconButton } from "@mui/material";
import SearchArea from "./SearchArea";
import GraphArea from "./GraphArea";

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
          height: "50px",
          backgroundColor: "#e0e0e0",
          borderTop: "1px solid #757575",
          borderBottom: "1px solid #757575",
        }}
      >
        {tabs.map((tab, i) => (
          <div style={{ position: "relative" }}>
            <ButtonBase
              onClick={() => setActiveTabIndex(i)}
              type="button"
              style={{
                height: "100%",
                backgroundColor: i === activeTabIndex ? "#ffffff" : "#e0e0e0",
                borderRight: "1px solid #757575",
                padding: "0 20px",
                paddingRight: tabs.length > 1 ? "40px" : "20px",
              }}
            >
              {{ search: "Search", graph: "Graph" }[tab.type]}
            </ButtonBase>
            {tabs.length > 1 && (
              <IconButton
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "calc(50% - 15px)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => {
                  setActiveTabIndex(
                    activeTabIndex >= i && activeTabIndex < tabs.length - 1
                      ? activeTabIndex
                      : activeTabIndex - 1
                  );
                  setTabs(tabs.filter((_, j) => i !== j));
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </div>
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
