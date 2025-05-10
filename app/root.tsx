import React, { useReducer } from "react";
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
import theme from "~/theme";

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import type { AppFormState } from "./lib/types";
import { reducer } from "./lib/utils";

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
                    <Stack minHeight="100dvh" border={1} bgcolor="whitesmoke">
                        <Header />
                        <Box component="main" p={2}>
                            {children}
                        </Box>
                        <Footer />
                    </Stack>
                </ThemeProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    const initialState: AppFormState = {
        contact: {
            name: "",
            email: "",
            phone: "",
        },
        plan: {
            name: "arcade",
            price: { "mo": 1, "yr": 4 },
            billingPeriod: "mo"
        },
        extras: {
            "online-service": false,
            "larger-storage": false,
            "customizable-profile": false
        }
    };

    const [formState, dispatch] = useReducer(reducer, initialState);

    return (
        <Outlet context={{ formState, dispatch }} />
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
