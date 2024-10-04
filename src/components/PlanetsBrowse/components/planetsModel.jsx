import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
import { useEffect, useRef, useState } from "react";
export const ExoplanetModel = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const [texture, setTexture] = useState(null);
  const planet = useRef();
  // Traverse the GLTF scene to extract the texture
  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        console.log(gltf);
        if (child.isMesh && child.material && child.material.map) {
          console.log(modelPath);
          console.log(child.material.map);
          setTexture(child.material.map); // Extract the texture
        }
      });
    }
  }, [gltf]);

  useFrame(() => {
    planet.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={planet}>
      {/* Create a sphere geometry with radius 1 */}
      <sphereGeometry args={[3, 32, 32]} />
      {/* Apply the extracted texture to the mesh material */}
      {texture && <meshStandardMaterial map={texture} />}
    </mesh>
  );
};
