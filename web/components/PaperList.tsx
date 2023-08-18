import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const paperTitles = [
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
  "Liang Fu C. Kane Proxity effect of s wave superconductor 2007",
];

export default function PaperList() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "560px", // todo: 動的に決定する
        bgcolor: "background.paper",
        overflow: "scroll",
      }}
    >
      <nav>
        <List sx={{ p: 0, m: 0 }}>
          {paperTitles.map((paperTitle) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={paperTitle} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
