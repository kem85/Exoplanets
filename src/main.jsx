import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error.jsx";
import BrowseContent from "./components/PlanetsBrowse/browseContent.jsx";
import Method1 from "./components/method1/Method1.jsx";
import ThreeRouter from "./ThreeRouter.jsx";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThreeRouter history={history} />
  </StrictMode>
);
