import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error.jsx";
import BrowseContent from "./components/PlanetsBrowse/browseContent.jsx";
import Method1 from "./components/method1/Method1.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ExoPlanets",
    element: <BrowseContent />,
  },
  {
    path: "/method1",
    element: <Method1/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
