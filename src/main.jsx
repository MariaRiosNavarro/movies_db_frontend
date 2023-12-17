import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppFavoritesFetchProvider } from "./context/AppFavoritesFetchProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppFavoritesFetchProvider>
      <App />
    </AppFavoritesFetchProvider>
  </React.StrictMode>
);
