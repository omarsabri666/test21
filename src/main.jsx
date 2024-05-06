import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import   "../i18n.js";
import {

  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MyProvider from "./context/MyProvider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <MyProvider>
    <QueryClientProvider client={queryClient}>

      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
      </MyProvider>
  </React.StrictMode>,
);
