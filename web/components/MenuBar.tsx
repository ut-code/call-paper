import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 5 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#ffffff", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#000000" }}
          >
            Call Paper
          </Typography>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
