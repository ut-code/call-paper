import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { usePaperInfosContext } from "./contexts";
// import type { PaperInfo } from "../src/App";

type PaperListProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingIndex: (index: number) => void;
  // editingPaperInfo: PaperInfo | null;
  // setEditingPaperInfo: (paperInfo: PaperInfo) => void;
};

export default function PaperList(props: PaperListProps) {
  const paperInfos = usePaperInfosContext();
  const { setOpen, setEditingIndex } = props;
  return (
    <Box
      sx={{
        width: "100%",
        flex: "auto",
        bgcolor: "background.paper",
      }}
    >
      <nav>
        <List sx={{ p: 0, m: 0 }}>
          {paperInfos.map((paperInfo, index) => {
            return (
              <ListItem disablePadding key={paperInfo.id}>
                <ListItemButton
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setEditingIndex(index);
                    setOpen(true);
                  }}
                >
                  <ListItemText
                    primary={`${paperInfo.author} ${paperInfo.title} ${paperInfo.year}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
