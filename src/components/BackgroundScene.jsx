"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const ZONES = ["#ff6b47", "#ff8a5c", "#ffab73", "#ff7550", "#ffbe8a", "#ff9a68"];
const lerp = (a, b, t) => new THREE.Color(a).lerp(new THREE.Color(b), t);

function Panels({ targetRef, count }) {
  const group = useRef(null);
  const mats = useRef([]);
  const cur = useRef(0);
  const panels = useMemo(
    () => Array.from({ length: 11 }, (_, i) => ({
      pos: [(i % 4 - 1.5) * 2.4, Math.sin(i * 1.3) * 2.2, -1 - (i % 4)],
      rot: [Math.sin(i) * 0.4, Math.cos(i) * 0.5, i * 0.2],
      scale: 0.7 + (i % 3) * 0.25,
    })),
    []
  );
  useFrame((_, delta) => {
    const t = targetRef.current / Math.max(count - 1, 1);
    cur.current += (t - cur.current) * 0.05;
    if (group.current) {
      group.current.rotation.y += delta * 0.03;
      group.current.position.x = -cur.current * 3;
    }
    const i = Math.min(Math.floor(cur.current * (ZONES.length - 1)), ZONES.length - 2);
    const col = lerp(ZONES[i], ZONES[i + 1], cur.current * (ZONES.length - 1) - i);
    mats.current.forEach((m) => m && m.color.copy(col));
  });
  return (
    <group ref={group}>
      {panels.map((p, i) => (
        <Float key={i} speed={1.4} rotationIntensity={0.3} floatIntensity={0.9}>
          <mesh position={p.pos} rotation={p.rot} scale={p.scale}>
            <boxGeometry args={[1.5, 2, 0.06]} />
            <meshPhysicalMaterial ref={(el) => (mats.current[i] = el)} color={ZONES[0]} transmission={0.9} thickness={0.5} roughness={0.15} metalness={0} transparent opacity={0.5} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function BackgroundScene({ activeRef, count }) {
  const targetRef = useRef(0);
  const [ok, setOk] = useState(true);
  useEffect(() => { targetRef.current = activeRef; }, [activeRef]);
  if (!ok) return null;
  return (
    <div className="bg-canvas">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} onCreated={({ gl }) => gl.setClearColor(0x000000, 0)} onError={() => setOk(false)} dpr={[1, 1.5]}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} color="#fff1e8" />
        <Panels targetRef={targetRef} count={count} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}