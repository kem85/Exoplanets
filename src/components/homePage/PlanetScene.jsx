import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import { PlanetModel } from "./planetModel";
import {
  PerspectiveCamera,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";
import HomePageContent from "./homePageContent";

function PlanetScene() {
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef();
  const groupRef = useRef();
  const lightRef = useRef();
  const tooltipRef = useRef();
  const { scene, camera } = useThree();
  const cameraRef = useRef();

  const tooltipTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 128;

    const context = canvas.getContext("2d");
    context.scale(2, 2); // Scale up for retina displays

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Function to draw a rounded rectangle
    function roundRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    // Draw the rounded rectangle background
    context.fillStyle = "#C1D8C3"; // Use palette color for the background
    roundRect(context, 0, 0, canvas.width / 4, canvas.height / 4, 20);
    context.fill();

    // Set up text properties
    context.font = "bold 8px Arial";
    context.fillStyle = "#6A9C89"; // Use palette color for the text
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Use stroke to create an outline effect for sharper text
    context.strokeStyle = "#6A9C89"; // Use the same color for outline
    context.lineWidth = 3;
    context.strokeText("Kepler-186f", canvas.width / 8, canvas.height / 8);

    // Fill the text
    context.fillText("Kepler-186f", canvas.width / 8, canvas.height / 8);

    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    return texture;
  }, []);

  useEffect(() => {
    const tooltipSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: tooltipTexture })
    );
    tooltipSprite.scale.set(0.5, 0.25, 1); // Increased size for visibility
    tooltipSprite.visible = true; // Always visible for debugging
    scene.add(tooltipSprite);
    tooltipRef.current = tooltipSprite;

    return () => {
      if (tooltipSprite) {
        scene.remove(tooltipSprite);
      }
    };
  }, [scene, tooltipTexture]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }

    if (meshRef.current && tooltipRef.current) {
      const planetPosition = new THREE.Vector3();
      meshRef.current.getWorldPosition(planetPosition);
      cameraRef.current.lookAt(planetPosition);

      // Position tooltip directly in front of the camera
      const cameraPosition = new THREE.Vector3();
      camera.getWorldPosition(cameraPosition);
      const direction = new THREE.Vector3()
        .subVectors(planetPosition, cameraPosition)
        .normalize();

      const tooltipPosition = cameraPosition
        .clone()
        .add(direction.multiplyScalar(1));
      tooltipRef.current.position.copy(tooltipPosition);
      tooltipRef.current.visible = isHovered;
    }
  });

  return (
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
            onPointerOver={() => {
              setIsHovered(true);
              console.log("Planet hovered");
            }}
            onPointerOut={() => {
              setIsHovered(false);
              console.log("Planet unhovered");
            }}
          >
            <PlanetModel />
          </group>
        </group>
      </Scroll>

      <Scroll html>
        <HomePageContent />
      </Scroll>
    </ScrollControls>
  );
}

export default PlanetScene;
