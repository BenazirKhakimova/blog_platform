import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import App from "./App/App";
import "./styles/base.scss";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ErrorBoundry>
                    <App />
                </ErrorBoundry>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
