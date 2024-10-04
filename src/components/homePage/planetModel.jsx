import React, { useCallback, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll, useTexture } from "@react-three/drei";

export function PlanetModel({ ...props }) {
  const group = useRef();
  const clouds = useRef();
  const { nodes } = useGLTF("/scene.gltf");
  const scrollProgress = useScroll();
  const [lastScrollOffset, setLastScrollOffset] = useState(0);

  // Load textures
  const [cloudTexture, planetTexture, specularTexture] = useTexture([
    "/textures/clouds_diffuse.png",
    "/textures/planet_diffuse.png",
    "/textures/planet_specularGlossiness.png",
  ]);

  // Memoize the rotation calculation
  const calculateRotation = useCallback(
    (delta) => {
      if (group.current) {
        group.current.rotation.y += delta * 0.07;
      }
      if (clouds.current) {
        clouds.current.rotation.y -= delta * 0.02;
      }
      if (scrollProgress) {
        const scrollOffset = scrollProgress.offset;
        group.current.rotation.y += scrollOffset - lastScrollOffset;
        setLastScrollOffset(scrollOffset);
      }
    },
    [scrollProgress, lastScrollOffset]
  );

  // Rotate the planet
  useFrame((state, delta) => {
    calculateRotation(delta);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        rotation={[Math.PI, -1.107, Math.PI]}
        scale={1.032}
        ref={clouds}
      >
        <meshStandardMaterial map={cloudTexture} transparent opacity={0.5} />
      </mesh>
      <mesh
        geometry={nodes.Object_6.geometry}
        rotation={[Math.PI, -1.107, Math.PI]}
        scale={0.97}
      >
        <meshStandardMaterial map={specularTexture} />
      </mesh>
      <mesh
        geometry={nodes.Object_8.geometry}
        rotation={[-Math.PI, -0.708, -Math.PI]}
        scale={0.981}
      >
        <meshStandardMaterial map={planetTexture} />
      </mesh>
    </group>
  );
}
