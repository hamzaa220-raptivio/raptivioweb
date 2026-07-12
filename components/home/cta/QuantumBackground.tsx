"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
}

function StarField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 2000;
    const points = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const base = i * 3;
      points[base] = (seededRandom(i + 1) - 0.5) * 100;
      points[base + 1] = (seededRandom(i + 2) - 0.5) * 100;
      points[base + 2] = (seededRandom(i + 3) - 0.5) * 100;
    }

    return points;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

function CosmicGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const smoothMouse = useRef(new THREE.Vector2(0, 0));

  const geometry = useMemo(() => new THREE.PlaneGeometry(40, 40, 60, 60), []);

  const originalPositions = useMemo(
    () =>
      new Float32Array(
        geometry.attributes.position.array as ArrayLike<number>
      ),
    [geometry]
  );

  const { pointer } = useThree();

  useFrame(() => {
    smoothMouse.current.lerp(pointer, 0.1);

    const positions = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];

      const dx = x - smoothMouse.current.x * 15;
      const dy = y - smoothMouse.current.y * 10;
      const distance = Math.sqrt(dx * dx + dy * dy);

      positions[i] = x;
      positions[i + 1] = y;

      if (distance < 6) {
        positions[i + 2] = Math.pow(6 - distance, 1.5) * 0.5;
      } else {
        positions[i + 2] = 0;
      }
    }

    geometry.attributes.position.needsUpdate = true;
  });

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.5, 0, 0]}
      position={[0, -2, 0]}
    >
      <meshBasicMaterial
        color="#2244ff"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function CosmicCore() {
  return (
    <group position={[0, 0, -10]}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#4f93ff"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  const smoothMouse = useRef(new THREE.Vector2(0, 0));

  useFrame(() => {
    smoothMouse.current.lerp(pointer, 0.05);

    camera.position.x += (smoothMouse.current.x * 2 - camera.position.x) * 0.05;
    camera.rotation.y = -smoothMouse.current.x * 0.1;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function QuantumBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 12],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
      >
        <color attach="background" args={["#020408"]} />
        <StarField />
        <CosmicGrid />
        <CosmicCore />
        <CameraRig />
      </Canvas>
    </div>
  );
}