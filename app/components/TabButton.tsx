import { Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router";

export interface TabButtonProps {
  tabNo?: number;
  desc?: string;
  caption?: string;
  path?: string;
}

export default function TabButton(props: TabButtonProps) {
  const btnStyling = (isActive: boolean) => ({
    minWidth: "2.2rem",
    height: "2.2rem",
    p: "0rem",
    color: isActive ? "primary.main" : "neutral.white",
    borderColor: "neutral.white",
    bgcolor: isActive ? "custom.lightBlue.main" : undefined,
    borderRadius: "200px",
    border: isActive ? "none" : undefined,
  });

  return (
    <NavLink to={props.path || "/"} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Stack
          spacing={2}
          direction="row"
          sx={{
            width: "max-content",
            alignItems: "center",
            letterSpacing: 1.5,
          }}
        >
          <Button variant="outlined" sx={btnStyling(isActive)}>
            {props.tabNo}
          </Button>
          <Stack sx={{ display: { xs: "none", md: "flex" } }} spacing={0}>
            <Typography color="custom.pastelBlue.main" variant="caption">
              {props.caption?.toUpperCase()}
            </Typography>
            <Typography color="neutral.white" fontWeight={600} variant="body2">
              {props.desc?.toUpperCase()}
            </Typography>
          </Stack>
        </Stack>
      )}
    </NavLink>
  );
}
