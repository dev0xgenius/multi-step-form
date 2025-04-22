import React, { useReducer, useState } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "react-router";

import CssBaseline from "@mui/material/CssBaseline";
import type { Route } from "./+types/root";

import { Box, Stack, ThemeProvider } from "@mui/system";
import theme from "~/src/theme";

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";


export function Layout({ children }: { children: React.ReactNode }) {
  const [tabs, _] = useState(["/", "/billing", "/add-ons", "/summary"]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Stack minHeight="100dvh" border={1} bgcolor="whitesmoke">
            <CssBaseline />
            <Header tabs={tabs} />
            <Box component="main" p={2}>
              {children}
            </Box>
            <Footer tabs={tabs} />
          </Stack>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html >
  );
}

export default function App() {
  const [formState, dispatch] = useReducer(() => undefined, {
    contact: {
      name: "",
      email: "",
      phone: null,
    },
    currentPlan: {
      category: "",
      price: null,
      billingPeriod: "month",
    },
    extras: []
  });

  return (
    <>
      <Outlet />
    </>
  )
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
