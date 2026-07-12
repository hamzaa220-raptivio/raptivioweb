"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import Network from "./Network";
import Core from "./Core";
import Stars from "./Stars";

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0">

      <Canvas
        camera={{
          position: [0, 0, 14],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        {/* Background */}

        <color
          attach="background"
          args={["#04070F"]}
        />

        {/* Ambient */}

        <ambientLight intensity={0.8} />

        <pointLight
          position={[5, 5, 5]}
          intensity={2}
          color="#FFCA00"
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={1.5}
          color="#263571"
        />

        <Stars />

        <Float
          speed={2}
          rotationIntensity={0.25}
          floatIntensity={0.5}
        >
          <Core />
        </Float>

        <Network />

      </Canvas>

    </div>
  );
}