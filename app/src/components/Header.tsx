import { AppBar, Stack } from "@mui/material";
import TabButton from "./TabButton";

import bgImage from "../assets/images/bg-sidebar-mobile.svg";

export interface TabButtonsProps {
  tabs: string[];
};

export function TabButtons({ tabs }: TabButtonsProps) {
  const tabButtons = tabs.map((tab, index) => (
    <TabButton
      tabNo={index + 1}
      path={tab}
      key={index}
    />
  ));

  return tabButtons;
};

export default function Header() {
  return (
    <AppBar position="static" component="header" sx={
      (theme) =>
      ({
        p: 4, pb: 16,
        bgcolor: theme.palette.secondary.main,
        boxShadow: 0,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("${bgImage}")`
      })
    }>
      <Stack direction="row" spacing={3} justifyContent="center">
        <TabButtons tabs={["/", "/billing", "/add-ons", "/summary"]} />
      </Stack>
    </AppBar>
  );
};
