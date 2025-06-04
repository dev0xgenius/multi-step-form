import { AppBar, Box, Stack } from "@mui/material";
import TabButton from "./TabButton";

export interface TabButtonsProps {
  tabs: string[];
}

export function TabButtons({ tabs }: TabButtonsProps) {
  const tabButtons = tabs.map((tab, index) => (
    <TabButton tabNo={index + 1} path={tab} key={index} />
  ));

  return tabButtons;
}

export default function Header() {
  return (
    <AppBar
      position="relative"
      component="header"
      sx={{
        p: 0,
        m: 0,
        height: "auto",
        bgcolor: "secondary.main",
        boxShadow: 0,
      }}
    >
      <Box
        component="span"
        sx={{ height: "100%", "& img": { display: "block" } }}
      >
        <img src="/images/bg-sidebar-mobile.svg" width="100%" height="auto" />
      </Box>
      <Stack
        direction="row"
        spacing={2.4}
        sx={{
          p: 0,
          position: "absolute",
          top: 30,
          left: 0,
          right: 0,
          justifyContent: "center",
        }}
      >
        <TabButtons tabs={["/", "/billing", "/extras", "/summary"]} />
      </Stack>
    </AppBar>
  );
}
