import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Cube from "./components/cube";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Cube />
    </Canvas>
  );
}

export default App;
