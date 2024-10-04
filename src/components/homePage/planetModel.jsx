import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";

export function PlanetModel({ loading, ...props }) {
  const group = useRef();
  const clouds = useRef();
  const { nodes } = useGLTF("/scene.gltf");
  const scrollProggress = useScroll();
  const [lastScrollOffset, setLastScrollOffset] = useState(0);

  // Load textures
  const [cloudTexture, planetTexture, specularTexture] = useLoader(
    THREE.TextureLoader,
    [
      "/textures/clouds_diffuse.png",
      "/textures/planet_diffuse.png",
      "/textures/planet_specularGlossiness.png",
    ]
  );

  // Rotate the planet
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.07;
    }
    if (clouds.current) {
      clouds.current.rotation.y -= delta * 0.02;
    }
    if (scrollProggress) {
      group.current.rotation.y += scrollProggress.offset - lastScrollOffset;
      setLastScrollOffset(scrollProggress.offset);
    }
  });

  // If loading is true, do not render the planet model
  if (loading) return null;

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

useGLTF.preload("/scene.gltf");
