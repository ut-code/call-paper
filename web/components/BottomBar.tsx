import { ButtonBase } from "@mui/material";
import FlareIcon from "@mui/icons-material/Flare";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const buttonStyle = {
  display: "flex",
  padding: "0px 16px",
  alignItems: "center",
  gap: "6px",
  alignSelf: "stretch",
};

export default function BottomBar() {
  return (
    <Box
      style={{
        height: "24px",
        position: "sticky",
        bottom: 0,
        display: "flex",
        padding: "12px",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        color: "#ffffff",
        backgroundColor: "#0D47A1",
        flexGrow: "1",
      }}
    >
      <span style={{ flex: "auto" }}>12 item(s) selected</span>
      <ButtonBase type="button" style={buttonStyle}>
        <FlareIcon />
        VISUALIZE
      </ButtonBase>
      <ButtonBase type="button">
        <DeleteIcon />
        DELETE
      </ButtonBase>
    </Box>
  );
}
