import { Button, Stack } from "@mui/material";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

export const footerStyles = {
  width: "100%",
  p: 2,
  m: "auto",
  mb: 0,
  justifyContent: "space-between",
  bgcolor: "neutral.white",
  zIndex: 1,
} as const;

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <Stack direction="row" {...footerStyles}>
      <Button
        sx={{
          visibility: location?.pathname == "/" ? "hidden" : "initial",
          color: "neutral.coolGray",
        }}
        onClick={goBack}
      >
        Go Back
      </Button>
      <Button
        type="submit"
        variant="contained"
        form="currentForm"
        id="submitBtn"
      >
        {location?.pathname == "/summary" ? "Confirm" : "Next Step"}
      </Button>
    </Stack>
  );
}
