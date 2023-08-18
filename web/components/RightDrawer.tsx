import { Box, Button, Drawer, TextField, Typography } from "@mui/material";

type RightDrawerProps = {
  open: boolean;
  toggleDrawer: (isOpen: boolean) => () => void;
};

export default function RightDrawer(props: RightDrawerProps) {
  const { open, toggleDrawer } = props;

  return (
    <Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          style={{
            width: "300px",
            display: "flex",
            padding: "12px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            flex: "1 0 0",
            alignSelf: "stretch",
            overflow: "scroll",
          }}
        >
          <Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                TITLE
              </Typography>
              <TextField multiline maxRows={4} />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                YEAR
              </Typography>
              <TextField />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                AUTHOR
              </Typography>
              <TextField />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                JOURNAL
              </Typography>
              <TextField />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                TAGS
              </Typography>
              <TextField />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                CITATIONS
              </Typography>
              <TextField />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                CITED BY
              </Typography>
              <TextField />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "36px",
            px: 2,
            py: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <Button variant="contained">SAVE</Button>
          <Button variant="outlined" onClick={toggleDrawer(false)}>
            CANCEL
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
