import { Button, Stack } from "@mui/material";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

export const footerStyles = {
  width: "100%",
  p: 2,
  px: { md: 4 },
  m: "auto",
  mb: { xs: 0, sm: 2, md: 0 },
  justifyContent: "space-between",
  bgcolor: "neutral.white",
  zIndex: 1,
  borderRadius: { sm: 1 },
} as const;

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  const isOnLastRoute = location?.pathname == "/summary";

  return (
    <Stack direction="row" {...footerStyles}>
      <Button
        sx={{
          visibility: location?.pathname == "/" ? "hidden" : "initial",
          color: "neutral.coolGray",
          fontSize: { md: 17 },
          "&:hover": { color: "primary.main" },
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
        color={isOnLastRoute ? "secondary" : undefined}
        sx={(theme) => ({
          "&:hover": {
            boxShadow: "none",
            opacity: 0.8,
          },
          [`${theme.breakpoints.up("md")}`]: {
            fontSize: 17,
            borderRadius: 1,
            px: 4,
            py: 1.25,
            color: "neutral.alabaster",
          },
        })}
      >
        {isOnLastRoute ? "Confirm" : "Next Step"}
      </Button>
    </Stack>
  );
}
