import { Box, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import {
  ClickedIndexContext,
  PaperInfosContext,
  SetPaperInfosContext,
} from "./contexts";
import type { PaperInfo } from "../src/App";

type EditorBlockProps = {
  editorTarget: keyof PaperInfo;
  maxRows: number;
};

export default function EditorBlock(props: EditorBlockProps) {
  const paperInfos = useContext(PaperInfosContext);
  const setPaperInfos = useContext(SetPaperInfosContext);
  const clickedIndex = useContext(ClickedIndexContext);
  const { editorTarget, maxRows } = props;

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6" gutterBottom>
        {/* citedBy のみスペース区切りが必要なため */}
        {editorTarget === "citedBy" ? "CITED BY" : editorTarget.toUpperCase()}
      </Typography>
      <TextField
        multiline
        maxRows={maxRows}
        defaultValue={paperInfos[clickedIndex]?.[editorTarget]}
        onChange={(e) => {
          setPaperInfos(
            paperInfos.map((paperInfo, index) => {
              if (index === clickedIndex) {
                return {
                  ...paperInfo,
                  [editorTarget]: e.target.value,
                };
              }
              return paperInfo;
            })
          );
        }}
      />
    </Box>
  );
}
