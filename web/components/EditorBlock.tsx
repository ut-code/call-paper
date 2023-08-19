import { Box, TextField, Typography } from "@mui/material";
import type { PaperInfo } from "../src/App";

type EditorBlockProps = {
  editorTarget: keyof PaperInfo;
  value: string | string[];
  onChange(value: string | string[]): void;
};

// type Props2 = {
//   label: string;
//   value: string;
//   onChange(value: string): void;
// }

export default function EditorBlock(props: EditorBlockProps) {
  const { editorTarget, value, onChange } = props;

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6" gutterBottom>
        {/* citedBy のみスペース区切りが必要なため */}
        {editorTarget === "citedBy" ? "CITED BY" : editorTarget.toUpperCase()}
      </Typography>
      <TextField
        multiline
        rows={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}
