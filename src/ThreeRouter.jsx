import { useLayoutEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import App from "./App";
import BrowseContent from "./components/PlanetsBrowse/browseContent";
import Method1 from "./components/method1/Method1";
import ErrorPage from "./error";

const ThreeRouter = ({ history, router, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ExoPlanets" element={<BrowseContent />} />
        <Route path="/method1" element={<Method1 />} />
        <Route path="*" element={<ErrorPage />} /> {/* Catch-all for errors */}
      </Routes>
    </Router>
  );
};

export default ThreeRouter;
