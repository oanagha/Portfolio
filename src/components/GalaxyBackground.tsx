import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

function Stars({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 50;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 50;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return temp;
  }, [count]);

  const colors = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        // Blue stars
        temp[i * 3] = 0.4 + Math.random() * 0.4;
        temp[i * 3 + 1] = 0.6 + Math.random() * 0.4;
        temp[i * 3 + 2] = 1;
      } else if (colorChoice < 0.6) {
        // Purple stars
        temp[i * 3] = 0.6 + Math.random() * 0.4;
        temp[i * 3 + 1] = 0.4 + Math.random() * 0.3;
        temp[i * 3 + 2] = 1;
      } else {
        // White/yellow stars
        temp[i * 3] = 0.9 + Math.random() * 0.1;
        temp[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        temp[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      }
    }
    return temp;
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      // Gentle rotation
      mesh.current.rotation.x += 0.0001;
      mesh.current.rotation.y += 0.0002;
      
      // Mouse parallax effect
      mesh.current.rotation.x += (mouse.y * 0.1 - mesh.current.rotation.x) * 0.02;
      mesh.current.rotation.y += (mouse.x * 0.1 - mesh.current.rotation.y) * 0.02;
      
      // Twinkling effect
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function NebulaParticles({ count = 500 }) {
  const mesh = useRef<THREE.Points>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 30;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 30;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return temp;
  }, [count]);

  const colors = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Nebula colors - purples, blues, pinks
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Purple nebula
        temp[i * 3] = 0.5 + Math.random() * 0.3;
        temp[i * 3 + 1] = 0.2 + Math.random() * 0.3;
        temp[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else if (colorChoice < 0.7) {
        // Blue nebula
        temp[i * 3] = 0.2 + Math.random() * 0.3;
        temp[i * 3 + 1] = 0.4 + Math.random() * 0.3;
        temp[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      } else {
        // Pink nebula
        temp[i * 3] = 0.8 + Math.random() * 0.2;
        temp[i * 3 + 1] = 0.3 + Math.random() * 0.3;
        temp[i * 3 + 2] = 0.6 + Math.random() * 0.2;
      }
    }
    return temp;
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      // Slower movement for parallax depth
      mesh.current.rotation.x += 0.00005;
      mesh.current.rotation.y += 0.0001;
      
      // Mouse parallax effect (more subtle than stars)
      mesh.current.rotation.x += (mouse.y * 0.05 - mesh.current.rotation.x) * 0.01;
      mesh.current.rotation.y += (mouse.x * 0.05 - mesh.current.rotation.y) * 0.01;
      
      // Floating motion
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;
        positions[i + 1] += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.002;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowingSphere({ position, color, intensity }: { position: [number, number, number], color: string, intensity: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      // Gentle pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      mesh.current.scale.setScalar(scale);
      
      // Mouse influence
      const mouseInfluenceX = mouse.x * 0.3;
      const mouseInfluenceY = mouse.y * 0.3;
      
      mesh.current.position.x = position[0] + mouseInfluenceX;
      mesh.current.position.y = position[1] + mouseInfluenceY;
      
      // Gentle rotation
      mesh.current.rotation.x += 0.001;
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.1}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function GalaxyBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#8b5cf6" />
      <pointLight position={[0, 15, 5]} intensity={0.2} color="#06b6d4" />
      
      {/* Background stars */}
      <Stars count={3000} />
      
      {/* Nebula particles */}
      <NebulaParticles count={800} />
      
      {/* Glowing cosmic elements */}
      <GlowingSphere position={[-8, 4, -5]} color="#3b82f6" intensity={0.3} />
      <GlowingSphere position={[7, -3, -8]} color="#8b5cf6" intensity={0.4} />
      <GlowingSphere position={[3, 6, -6]} color="#06b6d4" intensity={0.2} />
      <GlowingSphere position={[-5, -5, -4]} color="#ec4899" intensity={0.3} />
      <GlowingSphere position={[9, 2, -7]} color="#10b981" intensity={0.2} />
    </Canvas>
  );
}