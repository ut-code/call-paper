import { Box, Button, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import EditorBlock from "./EditorBlock";
import type { PaperInfo } from "../src/App";
import { useSetPaperInfosContext, usePaperInfosContext } from "./contexts";

type RightDrawerProps = {
  drawerExpansion: boolean;
  setDrawerExpansion: (open: boolean) => void;
  paperIndex: number;
};

export default function RightDrawer(props: RightDrawerProps) {
  const { drawerExpansion, setDrawerExpansion, paperIndex } = props;
  const paperInfos = usePaperInfosContext();
  const setPaperInfos = useSetPaperInfosContext();
  const [selectedPaper, setSeletedPaper] = useState<PaperInfo>({
    id: "",
    author: "",
    title: "",
    year: 0,
    journal: "",
    tags: [""],
    citations: [""],
    citedBy: [""],
  });
  useEffect(() => {
    if (paperIndex === -2) {
      setSeletedPaper({
        id: "",
        author: "",
        title: "",
        year: 0,
        journal: "",
        tags: [""],
        citations: [""],
        citedBy: [""],
      });
    } else {
      setSeletedPaper(paperInfos[paperIndex] as PaperInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paperIndex]);

  return (
    <Box>
      <Drawer
        anchor="right"
        open={drawerExpansion}
        onClose={() => {
          setDrawerExpansion(false);
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
              value={selectedPaper.title}
              onChange={(value) => {
                setSeletedPaper({
                  ...(paperIndex === -2
                    ? selectedPaper
                    : paperInfos[paperIndex]),
                  title: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="year"
              value={String(selectedPaper.year)}
              onChange={(value) => {
                setSeletedPaper({
                  ...(paperIndex === -2
                    ? selectedPaper
                    : paperInfos[paperIndex]),
                  year: Number(value),
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="author"
              value={selectedPaper.author}
              onChange={(value) => {
                setSeletedPaper({
                  ...(paperIndex === -2
                    ? selectedPaper
                    : paperInfos[paperIndex]),
                  author: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="journal"
              value={selectedPaper.journal}
              onChange={(value) => {
                setSeletedPaper({
                  ...(paperIndex === -2
                    ? selectedPaper
                    : paperInfos[paperIndex]),
                  journal: value,
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="tags"
              value={selectedPaper?.tags?.join(" ")}
              onChange={(value) => {
                setSeletedPaper({
                  ...(paperIndex === -2
                    ? selectedPaper
                    : paperInfos[paperIndex]),
                  tags: value.split(","),
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="citations"
              value={selectedPaper?.citations?.join(" ")}
              onChange={(value) => {
                setSeletedPaper({
                  ...(paperIndex === -2
                    ? selectedPaper
                    : paperInfos[paperIndex]),
                  citations: value.split(","),
                } as PaperInfo);
              }}
            />
            <EditorBlock
              editorTarget="citedBy"
              value={selectedPaper?.citedBy?.join(" ")}
              onChange={(value) => {
                setSeletedPaper({
                  ...(paperIndex === -2
                    ? selectedPaper
                    : paperInfos[paperIndex]),
                  citedBy: value.split(","),
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
              if (paperIndex === -2) {
                setPaperInfos([
                  ...paperInfos,
                  {
                    id: String(paperInfos.length + 1),
                    author: selectedPaper.author ?? "",
                    title: selectedPaper.title ?? "",
                    year: selectedPaper.year ?? "",
                    journal: selectedPaper.journal ?? "",
                    tags: selectedPaper.tags ?? [],
                    citations: selectedPaper.citations ?? [],
                    citedBy: selectedPaper.citedBy ?? [],
                  },
                ]);
              } else {
                setPaperInfos(
                  paperInfos.map((paperInfo, index) => {
                    if (index === paperIndex) {
                      return selectedPaper;
                    }
                    return paperInfo;
                  })
                );
              }
              setDrawerExpansion(false);
            }}
          >
            SAVE
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setDrawerExpansion(false);
            }}
          >
            CANCEL
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
