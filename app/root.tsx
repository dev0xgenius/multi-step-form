import React, { useCallback, useReducer } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLocation,
  useNavigate
} from "react-router";

import CssBaseline from "@mui/material/CssBaseline";
import type { Route } from "./+types/root";

import { Box, Stack, ThemeProvider } from "@mui/system";
import theme from "~/src/theme";

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import routes from "./routes";
import Header from "./src/components/Header";

export function HydrateFallback() {
  return <CircularProgress />
};

export function Layout({ children }: { children: React.ReactNode }) {
  const fetcher = useFetcher();
  const form = useForm();
  const tabs = Array.from(new Set(routes.map(route =>
    (route.path !== undefined) ? route.path : "/")));

  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentTabIndex = () => tabs.indexOf(location.pathname);
  const goBack = useCallback(() => { navigate(-1) }, []);

  const nextStep = useCallback(() => {
    location.pathname == tabs[tabs.length - 1]
      ? alert("Submitting...")
      : navigate(tabs[getCurrentTabIndex() + 1]);
  }, [location]);

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
            <Stack direction={"row"} sx={{ m: "auto", mb: 0 }}>
              {
                location.pathname != "/" &&
                <Button onClick={goBack}>Go Back</Button>}
              <Button onClick={nextStep}>Next Step</Button>
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
  const [formStates, dispatch] = useReducer((prevState, action) => ({ ...prevState }), {
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
