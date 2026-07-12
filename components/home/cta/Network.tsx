"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GRID_X = 26;
const GRID_Y = 18;
const SPACING = 0.75;

export default function Network() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const mouse = useRef(new THREE.Vector2(999, 999));

  const positions = useMemo(() => {
    const vertices: number[] = [];

    for (let y = 0; y < GRID_Y; y++) {
      for (let x = 0; x < GRID_X; x++) {
        vertices.push(
          (x - GRID_X / 2) * SPACING,
          (y - GRID_Y / 2) * SPACING,
          0
        );
      }
    }

    return new Float32Array(vertices);
  }, []);

  const linePositions = useMemo(() => {
    const lines: number[] = [];

    for (let y = 0; y < GRID_Y; y++) {
      for (let x = 0; x < GRID_X; x++) {
        const px = (x - GRID_X / 2) * SPACING;
        const py = (y - GRID_Y / 2) * SPACING;

        if (x < GRID_X - 1) {
          lines.push(
            px,
            py,
            0,
            px + SPACING,
            py,
            0
          );
        }

        if (y < GRID_Y - 1) {
          lines.push(
            px,
            py,
            0,
            px,
            py + SPACING,
            0
          );
        }
      }
    }

    return new Float32Array(lines);
  }, []);

  useMemo(() => {
    window.addEventListener("pointermove", (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (pointsRef.current) {
      const arr = pointsRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < arr.length; i += 3) {
        const x = arr[i];
        const y = arr[i + 1];

        arr[i + 2] =
          Math.sin(t * 2 + x * 0.8 + y * 0.8) * 0.08;

        const dx = x / 8 - mouse.current.x;
        const dy = y / 6 - mouse.current.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 0.7) {
          arr[i + 2] += (0.7 - dist) * 0.7;
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate =
        true;
    }

    if (linesRef.current) {
      linesRef.current.rotation.z =
        Math.sin(t * 0.12) * 0.02;

      linesRef.current.rotation.x =
        Math.sin(t * 0.15) * 0.03;
    }
  });

  return (
    <group position={[0, -1.5, -3]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#4D6FFF"
          size={0.05}
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#263571"
          transparent
          opacity={0.25}
        />
      </lineSegments>
    </group>
  );
}