import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const spherePositions = random.inSphere(new Float32Array(3000), { radius: 2 }) as Float32Array;

 
useFrame((_state, delta) => {
  if (pointsRef.current) {
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.02;
  }
});
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={spherePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.35}
        />
      </Points>
    </group>
  );
}

function GoldenOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
      // Soft breathing scale animation
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.03;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[0.3, 3]} />
      <meshStandardMaterial
        color="#D4AF37"
        wireframe
        roughness={0.1}
        metalness={0.9}
        emissive="#AA7C11"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

export default function Scene3D({ showOrb = false }: { showOrb?: boolean }) {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 1.2], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#FFE07D" />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#D4AF37" />
        <FloatingParticles />
        {showOrb && <GoldenOrb />}
      </Canvas>
      {/* Dynamic Depth Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.95)_100%]" />
    </div>
  );
}