import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBase from "@mui/material/ButtonBase";
import SearchArea from "./SearchArea";
import GraphArea from "./GraphArea";

type tab = "searchTab" | "graphTab";

const buttonStyle = {
  borderRight: "1px solid #757575",
  display: "flex",
  padding: "12px 12px 12px 20px",
  alignItems: "center",
  gap: "12px",
};

function TabComponent() {
  const [existTabs, setExistTabs] = useState<{
    searchTab: boolean;
    graphTab: boolean;
  }>({
    searchTab: true,
    graphTab: true,
  });
  const [activeTab, setActiveTab] = useState<tab>("searchTab");

  const handleTabClick = (tab: tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#e0e0e0",
          borderTop: "1px solid #757575",
          borderBottom: "1px solid #757575",
        }}
      >
        {existTabs.searchTab && (
          <ButtonBase
            onClick={() => handleTabClick("searchTab")}
            type="button"
            style={
              activeTab === "searchTab"
                ? { backgroundColor: "#ffffff", ...buttonStyle }
                : { backgroundColor: "#e0e0e0", ...buttonStyle }
            }
          >
            Search
            <ButtonBase
              onClick={() => setExistTabs({ ...existTabs, searchTab: false })}
            >
              <CloseIcon />
            </ButtonBase>
          </ButtonBase>
        )}
        {existTabs.graphTab && (
          <ButtonBase
            onClick={() => handleTabClick("graphTab")}
            type="button"
            style={
              activeTab === "graphTab"
                ? { backgroundColor: "#ffffff", ...buttonStyle }
                : { backgroundColor: "#e0e0e0", ...buttonStyle }
            }
          >
            Graph
            <ButtonBase
              onClick={() => setExistTabs({ ...existTabs, graphTab: false })}
            >
              <CloseIcon />
            </ButtonBase>
          </ButtonBase>
        )}
      </div>
      {activeTab === "searchTab" && <SearchArea />}
      {activeTab === "graphTab" && <GraphArea />}
    </div>
  );
}

export default TabComponent;
