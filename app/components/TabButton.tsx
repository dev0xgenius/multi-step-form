import { Button, Stack, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router";

export interface TabButtonProps {
  tabNo: number;
  desc?: string;
  caption?: string;
  path?: string;
}

export default function TabButton(props: TabButtonProps) {
  const theme = useTheme();

  return (
    <NavLink to={props.path || "/"} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Stack
          spacing={theme.spacing(1)}
          direction="row"
          sx={{ width: "max-content", alignItems: "center" }}
        >
          <Button
            variant="outlined"
            sx={{
              p: "0rem",
              minWidth: "2.5rem",
              width: "2.5rem",
              height: "2.5rem",
              color: isActive ? "primary.main" : "neutral.white",
              borderColor: "neutral.white",
              bgcolor: isActive ? "custom.lightBlue.main" : undefined,
              borderRadius: "200px",
              border: isActive ? "none" : undefined,
            }}
          >
            {props.tabNo}
          </Button>
          <Stack
            sx={{
              display: "none",
              [theme.breakpoints.up("md")]: {
                display: "flex",
              },
            }}
          >
            <Typography variant="caption">
              {props.caption?.toUpperCase()}
            </Typography>
            <Typography variant="body2">{props.desc?.toUpperCase()}</Typography>
          </Stack>
        </Stack>
      )}
    </NavLink>
  );
}
