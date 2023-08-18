import { useState, type CSSProperties } from "react";
import SearchBar from "./SearchBar";
import PaperList from "./PaperList";
import BottomBar from "./BottomBar";
import RightDrawer from "./RightDrawer";

export default function SearchArea() {
  const [open, setOpen] = useState<boolean>(false);
  const contentStyle: CSSProperties = {
    overflow: "auto",
    marginRight: open ? "324px" : "0",
    transition: "margin-right 0.2s ease-in-out",
    display: "flex",
    flexDirection: "column",
  };
  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };
  return (
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
          <PaperList toggleDrawer={toggleDrawer} />
          <BottomBar />
        </div>
        <RightDrawer open={open} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
}
