import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function PlanetModel(props) {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF("/55_Cancri_e_1_24364.glb");

  useEffect(() => {
    const mesh = meshRef.current;
    if (mesh) {
      // Compute bounding box
      const box = new THREE.Box3().setFromObject(mesh);
      const center = box.getCenter(new THREE.Vector3());
      mesh.position.sub(center); // Center the model
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        scale={[0.01, 0.01, 0.01]}
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
      />
    </group>
  );
}

useGLTF.preload("/55_Cancri_e_1_24364.glb");
