"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BrainModel } from "./BrainModel";

export default function BrainCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 35, near: 0.01, far: 100 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 3]} intensity={1.6} color="#FFFFFF" />
      <directionalLight position={[-4, 2, -3]} intensity={1.0} color="#AD74C3" />

      <Suspense fallback={null}>
        <BrainModel />
      </Suspense>
    </Canvas>
  );
}
