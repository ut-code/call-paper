import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { usePaperInfosContext } from "./contexts";

type PaperListProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingIndex: (index: number) => void;
  selectedPaperIds: Set<string>;
  setSelectedPaperIds: (selectedPaperIds: Set<string>) => void;
};

export default function PaperList(props: PaperListProps) {
  const paperInfos = usePaperInfosContext();
  const { setOpen, setEditingIndex, selectedPaperIds, setSelectedPaperIds } =
    props;
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
                  onClick={() => {
                    const newSelectedPaperIds = new Set(selectedPaperIds);
                    if (selectedPaperIds.has(paperInfo.id)) {
                      newSelectedPaperIds.delete(paperInfo.id);
                    } else {
                      newSelectedPaperIds.add(paperInfo.id);
                    }
                    setSelectedPaperIds(newSelectedPaperIds);
                  }}
                  sx={{
                    background: selectedPaperIds.has(paperInfo.id)
                      ? "gray"
                      : undefined,
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
