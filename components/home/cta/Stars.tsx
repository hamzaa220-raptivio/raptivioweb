"use client";

import { useMemo } from "react";
import { Points } from "@react-three/drei";

function seededRandom(seed: number) {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
}

export default function Stars() {
  const positions = useMemo(() => {
    const points = new Float32Array(2500 * 3);

    for (let i = 0; i < points.length; i++) {
      points[i] = (seededRandom(i + 1) - 0.5) * 90;
    }

    return points;
  }, []);

  return (
    <Points
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <pointsMaterial
        transparent
        color="#ffffff"
        size={0.05}
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
