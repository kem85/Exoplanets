import React from "react";
import { Canvas } from "@react-three/fiber";
import HomePageSpace from "./components/homePage/homePageSpace.jsx";

export default function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "black" }}
      camera={{ position: [0, 0, 10], far: 20000, near: 0.001 }}
    >
      <HomePageSpace />
    </Canvas>
  );
}
