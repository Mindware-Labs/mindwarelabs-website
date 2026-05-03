"use client";

import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import type { Group, Mesh } from "three";

const MODEL_URL = "/models/brain.glb";

// Target diameter (world units) after auto-fit. Camera at z=5 / fov 35 shows ~3.15 units; 3.0 fills most of view.
const TARGET_SIZE = 3.0;

function BrainModelInner() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  const fitScale = useMemo(() => {
    scene.traverse((obj) => {
      const m = obj as Mesh;
      if (m.isMesh) m.frustumCulled = false;
    });

    const bbox = new Box3().setFromObject(scene);
    const size = new Vector3();
    bbox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return TARGET_SIZE / maxDim;
  }, [scene]);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = t * 0.08;
    g.position.y = Math.sin(t * 0.6) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <group scale={fitScale}>
        <Center>
          <primitive object={scene} />
        </Center>
      </group>
    </group>
  );
}

export const BrainModel = memo(BrainModelInner);

useGLTF.preload(MODEL_URL);
