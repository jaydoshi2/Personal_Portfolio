// Ball.jsx
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";

const Ball = ({ icon }) => {
  const meshRef = useRef();
  const [decal] = useTexture([icon]);

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <meshStandardMaterial attach="material" />
      <meshBasicMaterial attach="material">
        <spriteMaterial map={decal} />
      </meshBasicMaterial>
    </mesh>
  );
};

export default Ball;
