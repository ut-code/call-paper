import { Box, TextField, Typography } from "@mui/material";
import type { PaperInfo } from "../src/App";

type EditorBlockProps = {
  editorTarget: keyof PaperInfo;
  value: string;
  onChange(value: string): void;
};

// type Props2 = {
//   label: string;
//   value: string;
//   onChange(value: string): void;
// }

export default function EditorBlock(props: EditorBlockProps) {
  const { editorTarget, value, onChange } = props;
  let displayedValue = "";
  if (editorTarget === "year") {
    if (value === "0") {
      displayedValue = "";
    } else {
      displayedValue = value;
    }
  } else {
    displayedValue = value;
  }
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6" gutterBottom>
        {/* citedBy のみスペース区切りが必要なため */}
        {editorTarget === "citedBy" ? "CITED BY" : editorTarget.toUpperCase()}
      </Typography>
      <TextField
        multiline={false}
        rows={1}
        value={displayedValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}
