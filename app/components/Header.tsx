import { AppBar, Box, Container, Stack, useMediaQuery } from "@mui/material";
import TabButton, { type TabButtonProps } from "./TabButton";

export interface TabButtonsProps {
  tabs: TabButtonProps[];
}

export function TabButtons({ tabs }: TabButtonsProps) {
  const tabButtons = tabs.map((tab, index) => (
    <TabButton {...tab} key={index} tabNo={index + 1} />
  ));

  const stackProps = {
    direction: { xs: "row", md: "column" },
    spacing: { xs: 2.5, md: 3.5 },
    sx: {
      maxWidth: "78%",
      p: 0,
      m: "0 auto",
      pt: { md: 0.2 },
      position: { xs: "absolute", md: "static" },
      top: "20%",
      left: 0,
      right: 0,
      justifyContent: "center",
    },
  } as const;

  return <Stack {...stackProps}>{tabButtons}</Stack>;
}

export default function Header() {
  const tabs = [
    { path: "/", caption: "step 1", desc: "your info" },
    { path: "/billing", caption: "step 2", desc: "select plan" },
    { path: "/extras", caption: "step 3", desc: "add-ons" },
    { path: "/summary", caption: "step 4", desc: "summary" },
  ];

  const matchMedia = useMediaQuery("(min-width: 768px)");
  return (
    <AppBar
      position="relative"
      component="header"
      sx={() => ({
        width: { md: "30%" },
        p: 0,
        m: 0,
        flexShrink: 1,
        height: "auto",
        bgcolor: "secondary.main",
        borderRadius: { xs: 0, md: 1 },
        boxShadow: 0,
        overflow: "hidden",
      })}
    >
      <Box
        component="span"
        sx={(theme) => ({
          display: "block",
          width: "100%",
          [`${theme.breakpoints.up("md")}`]: {
            position: "absolute",
            bottom: 0,
          },
          "& > img": {
            display: "block",
            maxWidth: "100%",
            height: "auto",
          },
        })}
      >
        <img
          src={
            matchMedia
              ? "/images/bg-sidebar-desktop.svg"
              : "/images/bg-sidebar-mobile.svg"
          }
          width="100%"
        />
      </Box>
      <Container
        disableGutters
        sx={{
          mt: { md: 4 },
          zIndex: 1,
        }}
      >
        <TabButtons tabs={tabs} />
      </Container>
    </AppBar>
  );
}
