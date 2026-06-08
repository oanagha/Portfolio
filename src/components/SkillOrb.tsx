import { Canvas } from '@react-three/fiber';
import { Float, Center } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SkillSphere({ skill, position, color }: { skill: string, position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.02 : 0.008;
      meshRef.current.rotation.x += 0.003;
      const scale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.15);
      
      // Add pulsing effect when hovered
      if (hovered) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 8) * 0.05;
        meshRef.current.scale.multiplyScalar(pulse);
      }
    }
  });

  return (
    <Float speed={hovered ? 4 : 2.5} rotationIntensity={hovered ? 2 : 1} floatIntensity={hovered ? 3 : 1.5}>
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={hovered ? 1 : 0.8}
          wireframe={!hovered}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function SkillOrb({ skills }: { skills: string[] }) {
  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
  
  return (
    <div className="w-full h-64 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ 
          width: '100%', 
          height: '100%'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, 0, 15]} intensity={0.7} color="#8b5cf6" />
        <spotLight position={[0, 10, 0]} intensity={1.2} angle={0.5} penumbra={0.3} color="#06b6d4" />
        
        {skills.slice(0, 6).map((skill, index) => {
          const angle = (index / 6) * Math.PI * 2;
          const radius = 3;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(index * 0.5) * 0.5;
          
          return (
            <SkillSphere 
              key={skill}
              skill={skill}
              position={[x, y, z]}
              color={colors[index % colors.length]}
            />
          );
        })}
      </Canvas>
      
      {/* Skill Labels Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="flex flex-wrap justify-center items-center h-full gap-4 p-4">
          {skills.slice(0, 6).map((skill, index) => (
            <div 
              key={skill}
              className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}