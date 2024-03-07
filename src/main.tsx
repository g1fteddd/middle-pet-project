import React from "react";
import ReactDOM from "react-dom/client";
import "app/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { App } from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>
);
