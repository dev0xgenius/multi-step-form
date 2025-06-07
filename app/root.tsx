import React, { useReducer } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import CssBaseline from "@mui/material/CssBaseline";
import type { Route } from "./+types/root";

import { Box, Stack, ThemeProvider } from "@mui/system";
import theme from "~/theme";

import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import type { AppFormState } from "./lib/types";
import { reducer } from "./lib/utils";
import { GlobalStyles } from "@mui/material";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Stack
            sx={{
              maxWidth: "900px",
              width: "100%",
              flexDirection: { md: "row" },
              flexGrow: { xs: 1, md: 0 },
              boxShadow: `0rem 1rem 5rem -2rem ${theme.palette.neutral.lightGray}`,
              borderRadius: { md: 1, lg: 2 },
              p: { md: 2, lg: 2 },
              px: 0,
            }}
            bgcolor={{ xs: "neutral.magnolia", md: "neutral.white" }}
          >
            <Header />
            <Stack
              flexGrow={1}
              width={{ xs: "100%", md: "70%" }}
              gap={10}
              m="0 auto"
              maxWidth="540px"
            >
              <Box
                component="main"
                sx={{
                  p: 2,
                  zIndex: 1,
                  width: "100%",
                  height: { md: "100%" },
                }}
              >
                {children}
              </Box>
              <Footer />
            </Stack>
          </Stack>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const globalStyles = (
    <GlobalStyles
      styles={(theme) => ({
        body: {
          minHeight: "100dvh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          [`${theme.breakpoints.up("md")}`]: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.neutral.magnolia,
          },
        },
      })}
    />
  );

  const initialState: AppFormState = {
    contact: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      name: "arcade",
      price: { mo: 1, yr: 4 },
      billingPeriod: "mo",
    },
    extras: {
      "online-service": {
        name: "online-service",
        description: "Access to multiplayer games",
        price: { mo: 1, yr: 10 },
      },
      "larger-storage": {
        name: "larger-storage",
        description: "Extra 1TB of cloud save",
        price: { mo: 2, yr: 20 },
      },
      "customizable-profile": false,
    },
  };

  const [formState, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {globalStyles}
      <Outlet context={{ formState, dispatch }} />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
