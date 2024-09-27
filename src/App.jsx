import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import * as THREE from "three";
import Planet from "./components/homePage/Planet";
import { PlanetModel } from "./components/homePage/planetModel";

// function CubeBackground() {
//   const { scene } = useThree();
//   const meshRef = useRef();

//   React.useEffect(() => {
//     const loader = new THREE.CubeTextureLoader();
//     // Replace these paths with your actual image paths
//     const texture = loader.load([
//       "/stars.jpg",
//       "/stars.jpg",
//       "/stars.jpg",
//       "/stars.jpg",
//       "/stars.jpg",
//       "/stars.jpg",
//     ]);

//     scene.background = texture;
//   }, [scene]);

//   return null;
// }

export default function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "black" }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.1} />
      <Planet />
      <axesHelper args={[10, 10, 10]} />
      <OrbitControls />
    </Canvas>
  );
}
