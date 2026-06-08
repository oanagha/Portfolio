import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.5;
      // Add pulsing scale effect
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <Sphere ref={meshRef} position={position} args={[0.6, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedBox({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.z += speed * 0.3;
      meshRef.current.rotation.y += speed * 0.7;
      // Add breathing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.9}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </Box>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed;
      meshRef.current.rotation.x += speed * 0.2;
      meshRef.current.rotation.z += speed * 0.1;
      // Add oscillating effect
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={4}>
      <Torus ref={meshRef} position={position} args={[0.8, 0.3, 16, 100]}>
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.85}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </Torus>
    </Float>
  );
}

export default function FloatingObjects() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[0, 15, 5]} intensity={0.6} color="#8b5cf6" />
      <spotLight position={[5, 5, 5]} intensity={1} angle={0.3} penumbra={0.5} color="#06b6d4" />
      
      {/* Floating geometric shapes with more variety */}
      <AnimatedSphere position={[-6, 3, -1]} color="#3b82f6" speed={0.012} />
      <AnimatedBox position={[5, -2, -3]} color="#8b5cf6" speed={0.01} />
      <AnimatedTorus position={[3, 4, -2]} color="#06b6d4" speed={0.015} />
      <AnimatedSphere position={[-3, -4, 2]} color="#10b981" speed={0.011} />
      <AnimatedBox position={[6, 2, 1]} color="#f59e0b" speed={0.009} />
      <AnimatedTorus position={[-6, -2, -4]} color="#ef4444" speed={0.013} />
      <AnimatedSphere position={[2, -1, 3]} color="#ec4899" speed={0.008} />
      <AnimatedBox position={[-4, 5, 0]} color="#14b8a6" speed={0.014} />
    </Canvas>
  );
}