import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

export default function MenuBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 5 }}>
      <AppBar position="static" color="primary">
        call-paper
      </AppBar>
    </Stack>
  );
}
