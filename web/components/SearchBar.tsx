import { Button, Input, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "6px 30px 6px 6px",
        gap: "6px",
        height: "36px",
        alignItems: "center",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Button variant="outlined" color="inherit">
        <AddIcon />
        New
      </Button>
      <Input
        id="input-with-icon-textfield"
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        disableUnderline
        style={{
          display: "flex",
          width: "400px",
          height: "36px",
          padding: "0px 8px",
          alignItems: "center",
          gap: "8px",
          flexShrink: "0",
          borderRadius: "4px",
          border: "1px solid #BDBDBD",
        }}
      />
    </div>
  );
}
