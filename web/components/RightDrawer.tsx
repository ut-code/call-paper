import { Box, Button, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import EditorBlock from "./EditorBlock";
import type { PaperInfo } from "../src/App";
import { useSetPaperInfosContext, usePaperInfosContext } from "./contexts";

type RightDrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  editingIndex: number;
};

export default function RightDrawer(props: RightDrawerProps) {
  const { open, setOpen, editingIndex } = props;
  const paperInfos = usePaperInfosContext();
  const setPaperInfos = useSetPaperInfosContext();
  const [editingPaper, setEditingPaper] = useState<PaperInfo>({
    id: "",
    author: "",
    title: "",
    year: "",
    journal: "",
    tags: [""],
    citations: [""],
    citedBy: [""],
  });

  useEffect(() => {
    if (!paperInfos[editingIndex]) {
      setEditingPaper({
        id: "",
        author: "",
        title: "",
        year: "",
        journal: "",
        tags: [""],
        citations: [""],
        citedBy: [""],
      });
    } else {
      setEditingPaper(paperInfos[editingIndex] as PaperInfo);
    }
  }, [paperInfos, editingIndex, open]);

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
            <EditorBlock
              editorTarget="title"
              value={editingPaper.title}
              onChange={(value) => {
                setEditingPaper({
                  ...paperInfos[editingIndex],
                  title: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="year"
              value={editingPaper.year}
              onChange={(value) => {
                setEditingPaper({
                  ...paperInfos[editingIndex],
                  year: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="author"
              value={editingPaper.author}
              onChange={(value) => {
                setEditingPaper({
                  ...paperInfos[editingIndex],
                  author: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="journal"
              value={editingPaper.journal}
              onChange={(value) => {
                setEditingPaper({
                  ...paperInfos[editingIndex],
                  journal: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="tags"
              value={editingPaper.tags}
              onChange={(value) => {
                setEditingPaper({
                  ...paperInfos[editingIndex],
                  tags: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="citations"
              value={editingPaper.citations}
              onChange={(value) => {
                setEditingPaper({
                  ...paperInfos[editingIndex],
                  citations: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="citedBy"
              value={editingPaper.citedBy}
              onChange={(value) => {
                setEditingPaper({
                  ...paperInfos[editingIndex],
                  citedBy: value,
                } as PaperInfo);
              }}
            />
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
          <Button
            variant="contained"
            onClick={() => {
              setPaperInfos(
                paperInfos.map((paperInfo, index) => {
                  if (index === editingIndex) {
                    return editingPaper;
                  }
                  return paperInfo;
                })
              );
              setOpen(false);
            }}
          >
            SAVE
          </Button>
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
