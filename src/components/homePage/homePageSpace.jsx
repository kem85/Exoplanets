import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import PlanetScene from "./PlanetScene";
import { Canvas } from "@react-three/fiber";
import { Router } from "react-router-dom";
function HomePageSpace() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "black" }}
      camera={{ position: [0, 0, 10], far: 20000, near: 0.001 }}
    >
      <ambientLight intensity={0.05} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Stars count={1500} depth={200} />
      <PlanetScene />
    </Canvas>
  );
}

export default HomePageSpace;
