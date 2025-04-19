import { AppBar, Stack } from "@mui/material";
import TabButton from "./TabButton";

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
        ({ p: 4, pb: 16, bgcolor: theme.palette.secondary.main })
    }>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <TabButtons tabs={["/", "/billing", "/add-ons", "/summary"]} />
      </Stack>
    </AppBar>
  );
};
