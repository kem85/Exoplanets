import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { PlanetModel } from "./planetModel";
function Planet() {
  const meshRef = useRef();
  const groupRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.add(camera);
      camera.position.set(3, 1, 0); // Adjust these values to change camera position relative to the planet
      camera.lookAt(0, 0, 0); // Make the camera look at the center of the orbit
    }
  }, [camera]);
  useFrame((state, delta) => {
    // Rotate the planet
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.009;
    }

    // Rotate the group (orbit around the center)
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }

    // Update camera position
    if (meshRef.current) {
      const planetPosition = new THREE.Vector3();
      meshRef.current.getWorldPosition(planetPosition);

      // Make the camera look at the planet
      camera.lookAt(planetPosition);
    }
  });
  return (
    <group position={[-5, 0, 0]} rotation={[0, 0, 0]} ref={groupRef}>
      <PlanetModel ref={meshRef} />
    </group>
  );
}
export default Planet;
