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

type PaperListProps = {
  toggleDrawer: (isOpen: boolean) => () => void;
};

export default function PaperList(props: PaperListProps) {
  const { toggleDrawer } = props;
  return (
    <Box
      sx={{
        width: "100%",
        flex: "auto",
        bgcolor: "background.paper",
      }}
    >
      <nav>
        <List sx={{ p: 0, m: 0 }}>
          {paperTitles.map((paperTitle) => {
            return (
              <ListItem disablePadding>
                <ListItemButton onClick={toggleDrawer(true)}>
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
