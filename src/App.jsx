import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import Planet from "./components/homePage/Planet";

export default function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "black" }}
      camera={{ position: [0, 0, 10], far: 20000, near: 0.001 }}
    >
      <ScrollControls damping={0.2} pages={2}>
        <Scroll>
          <ambientLight intensity={0.05} />
          <axesHelper args={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <Stars count={1000} depth={700} />
          <Planet />
        </Scroll>
        <Scroll html>
          <div
            style={{
              position: "relative",
              top: "10px",
              left: "10px",
              color: "white",
            }}
          >
            <div
              style={{
                position: "fixed",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              <h1>Main Title</h1>
              <p>This is content from the main App component</p>
            </div>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
