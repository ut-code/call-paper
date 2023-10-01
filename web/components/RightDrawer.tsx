import { Box, Button, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditorBlock from "./EditorBlock";
import { useSetPaperInfosContext, usePaperInfosContext } from "./contexts";
import type { PaperInfo } from "../src/App";

type RightDrawerProps = {
  drawerExpansion: boolean;
  setDrawerExpansion: (open: boolean) => void;
  paperIndex: number;
};

function AuthorYearToId(authorYear: string, paperInfos: PaperInfo[]) {
  const authorLastName = authorYear.substring(0, authorYear.length - 4);
  const year = Number(authorYear.slice(authorYear.length - 4));
  const targetPaper = paperInfos.find((paper) => {
    return (
      paper.author.substring(0, authorLastName.length) === authorLastName &&
      paper.year === year
    );
  });
  console.log(authorYear, targetPaper!.id);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return targetPaper!.id;
}
function IdToAuthorYear(id: string, paperInfos: PaperInfo[]) {
  console.log("IdToAuthorYear");
  const targetPaper = paperInfos.find((paper) => {
    return paper.id === id;
  });
  console.log(targetPaper);
  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    targetPaper!.author.substring(0, targetPaper!.author.indexOf(",")) +
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    String(targetPaper!.year)
  );
}

export default function RightDrawer(props: RightDrawerProps) {
  const { drawerExpansion, setDrawerExpansion, paperIndex } = props; // if paperIndex===-2, this is called by "NEW" button.
  const paperInfos = usePaperInfosContext();
  const setPaperInfos = useSetPaperInfosContext();
  const [selectedPaper, setSeletedPaper] = useState({
    id: "",
    author: "",
    title: "",
    year: "",
    journal: "",
    tags: "",
    citations: "",
    citedBy: "",
  });
  useEffect(() => {
    if (paperIndex === -2) {
      setSeletedPaper({
        id: "",
        author: "",
        title: "",
        year: "",
        journal: "",
        tags: "",
        citations: "",
        citedBy: "",
      });
    } else {
      setSeletedPaper({
        id: paperInfos[paperIndex]?.id ?? "",
        author: paperInfos[paperIndex]?.author ?? "",
        title: paperInfos[paperIndex]?.title ?? "",
        year: String(paperInfos[paperIndex]?.year) ?? "",
        journal: paperInfos[paperIndex]?.journal ?? "",
        tags: paperInfos[paperIndex]?.tags.join(",") ?? "",
        citations:
          paperInfos[paperIndex]?.citations
            .map((id) => IdToAuthorYear(id, paperInfos))
            .join(",") ?? "",
        citedBy:
          paperInfos[paperIndex]?.citedBy
            .map((id) => IdToAuthorYear(id, paperInfos))
            .join(",") ?? "",
      });
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
                  ...selectedPaper,
                  title: value,
                });
              }}
            />
            <EditorBlock
              editorTarget="year"
              value={String(selectedPaper.year)}
              onChange={(value) => {
                setSeletedPaper({
                  ...selectedPaper,
                  year: value,
                });
              }}
            />
            <EditorBlock
              editorTarget="author"
              value={selectedPaper.author}
              onChange={(value) => {
                setSeletedPaper({
                  ...selectedPaper,
                  author: value,
                });
              }}
            />
            <EditorBlock
              editorTarget="journal"
              value={selectedPaper.journal}
              onChange={(value) => {
                setSeletedPaper({
                  ...selectedPaper,
                  journal: value,
                });
              }}
            />
            <EditorBlock
              editorTarget="tags"
              value={selectedPaper?.tags}
              onChange={(value) => {
                setSeletedPaper({
                  ...selectedPaper,
                  tags: value,
                });
              }}
            />
            <EditorBlock
              editorTarget="citations"
              value={selectedPaper?.citations}
              onChange={(value) => {
                setSeletedPaper({
                  ...selectedPaper,
                  citations: value,
                });
              }}
            />
            <EditorBlock
              editorTarget="citedBy"
              value={selectedPaper?.citedBy}
              onChange={(value) => {
                setSeletedPaper({
                  ...selectedPaper,
                  citedBy: value,
                });
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
                const uniqueId = uuidv4();
                setPaperInfos([
                  ...paperInfos,
                  {
                    id: uniqueId,
                    author: selectedPaper.author ?? "",
                    title: selectedPaper.title ?? "",
                    year: Number(selectedPaper.year) ?? "",
                    journal: selectedPaper.journal ?? "",
                    tags: selectedPaper.tags.split(",") ?? [],
                    citations:
                      selectedPaper.citations
                        .split(",")
                        .map((authorYear) =>
                          AuthorYearToId(authorYear, paperInfos)
                        ) ?? [],
                    citedBy: selectedPaper.citedBy.split(",") ?? [],
                  },
                ]);
                setSeletedPaper({
                  id: "",
                  author: "",
                  title: "",
                  year: "",
                  journal: "",
                  tags: "",
                  citations: "",
                  citedBy: "",
                });
              } else {
                setPaperInfos(
                  paperInfos.map((paperInfo, index) => {
                    if (index === paperIndex) {
                      return {
                        id: selectedPaper.id ?? "",
                        author: selectedPaper.author ?? "",
                        title: selectedPaper.title ?? "",
                        year: Number(selectedPaper.year) ?? "",
                        journal: selectedPaper.journal ?? "",
                        tags: selectedPaper.tags.split(",") ?? [],
                        citations:
                          selectedPaper.citations.split(",").map((citation) => {
                            return AuthorYearToId(citation, paperInfos);
                          }) ?? [],
                        citedBy: selectedPaper.citedBy.split(",") ?? [],
                      };
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
