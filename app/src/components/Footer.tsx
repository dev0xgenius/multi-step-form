import { Box, Button, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" bgcolor="white" height="max-content"
      sx={{
        m: "auto",
        mb: 0,
        width: "100%"
      }}>
      <Stack direction="row" sx={{ p: 2, justifyContent: "space-between" }}>
        <Button>Go Back</Button>
        <Button variant="contained" sx={{ borderRadius: 1 / 4 }}>Next Step</Button>
      </Stack >
    </Box >
  );
};
