import { Box, Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

export default function Footer({ tabs }: { tabs: string[]; }) {
  const currentLocation = tabs.indexOf(useLocation().pathname);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const performAction = () => (
    currentLocation == (tabs.length - 1) // Last tab
      ? alert("Submit") : navigate(tabs[currentLocation + 1])
  );

  return (
    <Box component="footer" bgcolor="white" height="max-content"
      sx={{ m: "auto", mb: 0, width: "100%" }}
    >
      <Stack direction="row" sx={{ p: 2, justifyContent: "space-between" }}>
        <Button
          onClick={goBack}
          sx={{ visibility: !currentLocation ? "hidden" : "visible" }}
        >
          Go Back
        </Button>
        <Button variant="contained" sx={{ borderRadius: 1 / 4 }} onClick={performAction}>
          {currentLocation == (tabs.length - 1) ? "Confirm" : "Next Step"}
        </Button>
      </Stack>
    </Box>
  );
};
