import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function SearchArea() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "6px 30px 6px 6px",
        gap: "6px",
        height: "36px",
        alignItems: "center",
      }}
    >
      <Button variant="outlined" color="inherit">
        <AddIcon />
        New
      </Button>
    </div>
  );
}
