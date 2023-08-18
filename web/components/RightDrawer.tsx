import { Box, Button, Drawer } from "@mui/material";
import EditorBlock from "./EditorBlock";

type RightDrawerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RightDrawer(props: RightDrawerProps) {
  const { open, setOpen } = props;
  return (
    <Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          style={{
            width: "300px",
            display: "flex",
            padding: "12px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            flex: "1 0 0",
            alignSelf: "stretch",
            overflow: "scroll",
          }}
        >
          <Box>
            <EditorBlock editorTarget="title" maxRows={4} />
            <EditorBlock editorTarget="year" maxRows={1} />
            <EditorBlock editorTarget="author" maxRows={1} />
            <EditorBlock editorTarget="journal" maxRows={1} />
            <EditorBlock editorTarget="tags" maxRows={1} />
            <EditorBlock editorTarget="citations" maxRows={1} />
            <EditorBlock editorTarget="citedBy" maxRows={1} />
          </Box>
        </Box>
        <Box
          sx={{
            height: "36px",
            px: 2,
            py: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <Button variant="contained">SAVE</Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            CANCEL
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
