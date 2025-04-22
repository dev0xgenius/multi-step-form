import { Button, Stack, Typography, useTheme } from "@mui/material";
import { css } from "@mui/material/styles";
import { NavLink, useLocation } from "react-router";

export interface TabButtonProps {
  tabNo: number;
  desc?: string;
  caption?: string;
  path?: string;
}

export default function TabButton({ caption, desc = "", tabNo, path = "/" }: TabButtonProps) {
  const theme = useTheme();

  return (
    <NavLink to={path} style={{ textDecoration: "none" }}>
      <Stack spacing={theme.spacing(1)} direction="row"
        sx={{ width: "max-content", alignItems: "center" }}
      >
        <Button variant="outlined" sx={{
          p: "0rem",
          minWidth: "2.8rem",
          width: "2.8rem",
          height: "2.8rem",
          color: "custom.lightBlue.main",
          borderColor: "custom.pastelBlue.main",
          borderRadius: "200px",
        }}>{tabNo}</Button>
        <Stack sx={{
          display: "none",
          [theme.breakpoints.up("md")]: {
            display: "flex",
          }
        }}
        >
          <Typography variant="caption">{caption?.toUpperCase()}</Typography>
          <Typography variant="body2">{desc?.toUpperCase()}</Typography>
        </Stack>
      </Stack >
    </NavLink >
  );
}
