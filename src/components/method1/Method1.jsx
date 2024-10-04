// Method1.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
//import 'Method1.CSS';
import Explain from './Method1Exp';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';



const Sun = () => {
  const sun = useRef();
  useFrame(() =>{
    sun.current.rotation.y += 0.02;
  })
    // Load textures
    const sunTexture = useLoader(TextureLoader, '/textures/8k_sun.jpg');
    

    return (
      
      <mesh ref={sun}>
      {/* Sun Geometry */}
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial emissive="yellow" emissiveIntensity={1} map={sunTexture} />
      
    </mesh>
  );
};

const Exoplanet = () => {
  const planetRef = useRef();
  
  // Rotate the planet around the Sun
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Set position of exoplanet in a circular orbit
    planetRef.current.position.x = Math.sin(t) * 8;
    planetRef.current.position.z = Math.cos(t) * 8;
    // Rotate the planet on its own axis
    planetRef.current.rotation.y += 0.02;
  });
  const exoplanetTexture1 = useLoader(TextureLoader, '/textures/4k_makemake_fictional.jpg');
  return (
    <mesh ref={planetRef}>
      {/* Exoplanet Geometry */}
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial  roughness={0.7} metalness={0.3} map={exoplanetTexture1} />
   
    </mesh>
  );
};

const Exoplanet2 = () => {
  const planetRef2 = useRef();
  
  // Rotate the planet around the Sun
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Set position of exoplanet in a circular orbit
    planetRef2.current.position.x = Math.sin(t) * 20;
    planetRef2.current.position.z = Math.cos(t) * -14;
    // Rotate the planet on its own axis
    planetRef2.current.rotation.y -= 0.02;
  });
  const exoplanetTexture2 = useLoader(TextureLoader, '/textures/4k_eris_fictional.jpg');
  return (
    <mesh position={[100,0,100]} ref={planetRef2}>
      {/* Exoplanet Geometry */}

      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial  roughness={0.7} metalness={0.3} map={exoplanetTexture2} />
      
   
    </mesh>
  );
};







const Method1 = () => {
  return (
    <>
    <div style={{display: 'flex',flexDirection:'row',height:'100vh',width:'100vw'  }}>

    <Canvas style={{ background: 'black',height:'100%',width:'60%' }} camera={{ position: [10, 5, 10] }}>
      {/* Lighting */}
      <pointLight position={[0, 0, 0]} intensity={100} color="white" />
      <ambientLight intensity={0} />
      <axesHelper/>

      {/* Sun */}
      <Sun />

      {/* Exoplanet */}
      <Exoplanet />
      
      {/* Exoplanet 2 */}
      <Exoplanet2 />

      {/* Orbit Controls for camera interaction */}
      <OrbitControls enableZoom={true} />

      {/* Add a starry background */}
      <Stars
        radius={50}    // Radius of the inner sphere where stars are placed
        depth={50}     // Star field thickness
        count={5000}   // Number of stars
        factor={4}     // Star size factor
        saturation={0} // Color saturation
        fade={true}    // Fade in the distance
        speed={1}      // Star speed movement for realism
        />
    </Canvas>
        <Explain/>
        </div>

      </>
  );
};

export default Method1;


