import { useState, type CSSProperties } from "react";
import SearchBar from "./SearchBar";
import PaperList from "./PaperList";
import BottomBar from "./BottomBar";
import RightDrawer from "./RightDrawer";

export type SearchAreaProps = {
  onVisualize(paperIds: string[]): void;
};

export default function SearchArea(props: SearchAreaProps) {
  const { onVisualize } = props;
  const [selectedPaperIds, setSelectedPaperIds] = useState(new Set<string>());
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
    <div
      style={{
        display: "grid",
        gridTemplateRows: "max-content minmax(0, 1fr)",
      }}
    >
      <SearchBar setOpen={setOpen} setEditingIndex={setEditingIndex} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) max-content",
        }}
      >
        <div style={contentStyle}>
          <PaperList
            setOpen={setOpen}
            setEditingIndex={setEditingIndex}
            selectedPaperIds={selectedPaperIds}
            setSelectedPaperIds={setSelectedPaperIds}
          />
          <BottomBar
            onVisualize={() => {
              onVisualize([...selectedPaperIds]);
            }}
          />
        </div>
        <RightDrawer
          open={open}
          setOpen={setOpen}
          editingIndex={editingIndex}
        />
      </div>
    </div>
  );
}
