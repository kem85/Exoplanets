import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { PlanetModel } from "./planetModel";
import { Html, PerspectiveCamera } from "@react-three/drei";

function Planet() {
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef();
  const groupRef = useRef();
  const lightRef = useRef();
  const lightHelperRef = useRef();
  const { scene } = useThree();
  const camera = useRef();

  useEffect(() => {
    if (lightRef.current) {
      lightHelperRef.current = new THREE.PointLightHelper(
        lightRef.current,
        0.5,
        0xffcda5
      );
      scene.add(lightHelperRef.current);
    }

    return () => {
      if (lightHelperRef.current) {
        scene.remove(lightHelperRef.current);
      }
    };
  }, [scene]);

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }

    if (lightHelperRef.current) {
      lightHelperRef.current.update();
    }

    if (meshRef.current) {
      const planetPosition = new THREE.Vector3();
      meshRef.current.getWorldPosition(planetPosition);
      camera.current.lookAt(planetPosition);
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        intensity={15}
        color={0xf5ded0}
        position={[1, 0, 0]}
      />

      <group position={[1, 0, 0]} rotation={[0, 0, 0]} ref={groupRef}>
        <Html
          position={[-4, 0, 0]}
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Planet Info
          </h1>
          <p>This is content from the Planet component</p>
        </Html>
        <group position={[-4, 0, 0]}>
          <PerspectiveCamera
            ref={camera}
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
    </>
  );
}

export default Planet;
