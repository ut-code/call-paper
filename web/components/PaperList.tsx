import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// eslint-disable-next-line import/no-extraneous-dependencies
import { usePaperInfosContext } from "./contexts";
import BibtexFileReader from "./inputBibtex/dragDropArea";
// import type { PaperInfo } from "../src/App";

type PaperListProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingIndex: (index: number) => void;
  selectedPaperIds: Set<string>;
  setSelectedPaperIds: (selectedPaperIds: Set<string>) => void;
};

export default function PaperList(props: PaperListProps) {
  const paperInfos = usePaperInfosContext();
  // const setPaperInfos = useSetPaperInfosContext();
  const { setOpen, setEditingIndex, selectedPaperIds, setSelectedPaperIds } =
    props;
  // const onDrop = useCallback((acceptedFiles) => {
  //   // Do something with the files
  //   const reader = new FileReader();
  //   // reader.onload = function (e) {
  //   //   const contents = e.target.result;
  //   //   displayContents(contents);
  //   // };
  //   console.log(reader.readAsText(acceptedFiles[0]));
  //   // console.log("acceptedFiles:", URL.createObjectURL(acceptedFiles[0]));
  //   setPaperInfos([...paperInfos, acceptedFiles]);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // const { getRootProps } = useDropzone({ onDrop });
  return (
    <Box
      sx={{
        width: "100%",
        flex: "auto",
        bgcolor: "background.paper",
      }}
    >
      {/* <div {...getRootProps()} style={{ height: "100%" }}> */}
      <BibtexFileReader>
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
      </BibtexFileReader>
      {/* </div> */}
    </Box>
  );
}
