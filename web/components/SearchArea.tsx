import { useState, type CSSProperties } from "react";
import SearchBar from "./SearchBar";
import PaperList from "./PaperList";
import BottomBar from "./BottomBar";
import RightDrawer from "./RightDrawer";
import { EditingIndexContext, SetEditingIndexContext } from "./contexts";

export default function SearchArea() {
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);
  const contentStyle: CSSProperties = {
    overflow: "auto",
    marginRight: open ? "324px" : "0",
    transition: "margin-right 0.2s ease-in-out",
    display: "flex",
    flexDirection: "column",
  };
  // const toggleDrawer = (isOpen: boolean) => () => {
  //   setOpen(isOpen);
  // };
  return (
    <EditingIndexContext.Provider value={editingIndex}>
      <SetEditingIndexContext.Provider value={setEditingIndex}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "max-content minmax(0, 1fr)",
          }}
        >
          <SearchBar />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) max-content",
            }}
          >
            <div style={contentStyle}>
              <PaperList setOpen={setOpen} />
              <BottomBar />
            </div>
            <RightDrawer open={open} setOpen={setOpen} />
          </div>
        </div>
      </SetEditingIndexContext.Provider>
    </EditingIndexContext.Provider>
  );
}
