import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ExoplanetModel } from "./planetsModel";

export const PlanetCard = ({ planet }) => {
  return (
    <div className="w-72 border border-gray-300 rounded-lg shadow-lg p-4 m-4">
      <div className="h-40 mb-4">
        <Canvas className="h-full">
          <ambientLight intensity={0.2} />
          <pointLight intensity={15} color={0xf5ded0} position={[0, 0, 4]} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <ExoplanetModel modelPath={planet.modelPath} />
        </Canvas>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{planet.name}</h2>
        <p className="text-sm opacity-5000 text-green-300 mb-2">{planet.description}</p>
        <p className="text-sm">
          <strong>Distance from Earth:</strong> {planet.distance}
        </p>
        <p className="text-sm">
          <strong>Type:</strong> {planet.type}
        </p>
      </div>
    </div>
  );
};
