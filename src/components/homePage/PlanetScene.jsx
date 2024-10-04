import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { PlanetModel } from "./planetModel";
import {
  PerspectiveCamera,
  ScrollControls,
  Scroll,
  Html,
} from "@react-three/drei";
import HomePageContent from "./homePageContent";
import Loader from "./loader";
import { Link } from "react-router-dom";

function PlanetScene() {
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef();
  const groupRef = useRef();
  const lightRef = useRef();
  const { scene, camera } = useThree();
  const cameraRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }

    if (meshRef.current) {
      const planetPosition = new THREE.Vector3();
      meshRef.current.getWorldPosition(planetPosition);
      cameraRef.current.lookAt(planetPosition);
    }
  });

  return (
    <Suspense fallback={<Loader />}>
      <ScrollControls pages={3} damping={0.25}>
        <Scroll>
          <pointLight
            ref={lightRef}
            intensity={15}
            color={0xf5ded0}
            position={[1, 0, 0]}
          />

          <group position={[1, 0, 0]} rotation={[0, 0, 0]} ref={groupRef}>
            <group position={[-4, 0, 0]}>
              <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                far={20000}
                near={0.001}
                position={[2, 1, 2]}
              />
            </group>
            <group
              ref={meshRef}
              position={[-4, 0, 0]}
              onPointerOver={() => setIsHovered(true)}
              onPointerOut={() => setIsHovered(false)}
            >
              <PlanetModel />
            </group>
          </group>
        </Scroll>

        <Scroll html>
          <HomePageContent />
        </Scroll>
      </ScrollControls>
    </Suspense>
  );
}

export default PlanetScene;
