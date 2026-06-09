import { Canvas } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const THEME_PRIMARY = "#6666ff"; // hsl(240 100% 70%)

function Project3DCard({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += isHovered ? 0.03 : 0.008;
      meshRef.current.rotation.x += isHovered ? 0.008 : 0.003;
      meshRef.current.rotation.z += isHovered ? 0.005 : 0.001;
      const scale = isHovered ? 1.15 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.12);
      
      // Add wave effect when hovered
      if (isHovered) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.1;
      }
    }
  });

  return (
    <Float speed={isHovered ? 3 : 2} rotationIntensity={isHovered ? 1.5 : 0.8} floatIntensity={isHovered ? 2.5 : 1.2}>
      <mesh ref={meshRef}>
        <Box args={[2.2, 1.4, 0.4]}>
          <meshStandardMaterial 
            color={isHovered ? THEME_PRIMARY : "#ffffff"} 
            transparent 
            opacity={isHovered ? 1 : 0.85}
            wireframe
            emissive={isHovered ? THEME_PRIMARY : "#ffffff"}
            emissiveIntensity={isHovered ? 0.45 : 0.15}
            roughness={0.4}
            metalness={0.7}
          />
        </Box>
      </mesh>
    </Float>
  );
}

export default function ProjectCard3D({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-full h-48 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent',
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.3} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color={THEME_PRIMARY} />
        <pointLight position={[0, 8, 3]} intensity={0.6} color="#8b5cf6" />
        <spotLight position={[3, 3, 8]} intensity={1} angle={0.4} penumbra={0.4} color="#06b6d4" />
        
        <Project3DCard isHovered={isHovered} />
      </Canvas>
    </div>
  );
}