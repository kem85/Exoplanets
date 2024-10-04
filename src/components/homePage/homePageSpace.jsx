import React from "react";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import PlanetScene from "./PlanetScene";
import { Canvas } from "@react-three/fiber";
import { BrowserRouter, createBrowserRouter, Link } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../error";
import BrowseContent from "../PlanetsBrowse/browseContent";
import Method1 from "../method1/Method1";
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
    path: "/methodOne",
    element: <Method1 />,
  },
]);
function HomePageSpace() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "black" }}
      camera={{ position: [0, 0, 10], far: 20000, near: 0.001 }}
      mode="concurrent"
    >
      <ambientLight intensity={0.05} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Stars count={1500} depth={200} />
      <PlanetScene />
    </Canvas>
  );
}

export default HomePageSpace;
