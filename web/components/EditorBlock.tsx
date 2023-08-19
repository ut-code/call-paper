import { Box, TextField, Typography } from "@mui/material";
import { usePaperInfosContext, useSetPaperInfosContext } from "./contexts";
import type { PaperInfo } from "../src/App";

type EditorBlockProps = {
  editorTarget: keyof PaperInfo;
  maxRows: number;
  editingIndex: number;
};

export default function EditorBlock(props: EditorBlockProps) {
  const paperInfos = usePaperInfosContext();
  const setPaperInfos = useSetPaperInfosContext();
  const { editorTarget, maxRows, editingIndex } = props;

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6" gutterBottom>
        {/* citedBy のみスペース区切りが必要なため */}
        {editorTarget === "citedBy" ? "CITED BY" : editorTarget.toUpperCase()}
      </Typography>
      <TextField
        multiline
        maxRows={maxRows}
        defaultValue={paperInfos[editingIndex]?.[editorTarget]}
        onChange={(e) => {
          setPaperInfos(
            paperInfos.map((paperInfo, index) => {
              if (index === editingIndex) {
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
