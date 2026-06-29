import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'

function Gear({ position, rotationSpeed, size, color }) {
  const meshRef = useRef(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={[0, 0, 0]}>
      <cylinderGeometry args={[size, size, 0.3, 24]} />
      <MeshTransmissionMaterial
        backside
        thickness={0.5}
        chromaticAberration={0.3}
        anisotropy={0.5}
        distortion={0.2}
        color={color}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function GearTeeth({ position, rotationSpeed, size }) {
  const groupRef = useRef(null)
  const teeth = useMemo(() => {
    const arr = []
    const count = 12
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      arr.push({
        x: Math.cos(angle) * size * 0.85,
        y: Math.sin(angle) * size * 0.85,
        rot: angle,
      })
    }
    return arr
  }, [size])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * rotationSpeed
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {teeth.map((t, i) => (
        <mesh key={i} position={[t.x, t.y, 0]} rotation={[0, 0, t.rot]}>
          <boxGeometry args={[size * 0.25, size * 0.55, 0.2]} />
          <meshStandardMaterial
            color="#ff6b35"
            metalness={0.9}
            roughness={0.3}
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingParticles({ count = 30 }) {
  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2
    }
    return pos
  }, [count])

  const ref = useRef(null)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ff6b35"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

export default function ThreeBackground() {
  return (
    <div className="three-bg">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#ff6b35" />
        <pointLight position={[-5, -3, 2]} intensity={0.4} color="#4a90d9" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Gear position={[-2.5, 1.2, -1]} rotationSpeed={0.3} size={0.8} color="#ff6b35" />
          <GearTeeth position={[-2.5, 1.2, -0.85]} rotationSpeed={-0.3} size={0.8} />
        </Float>

        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
          <Gear position={[2.8, -1.5, -0.5]} rotationSpeed={-0.2} size={0.6} color="#4a90d9" />
          <GearTeeth position={[2.8, -1.5, -0.35]} rotationSpeed={0.2} size={0.6} />
        </Float>

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <Gear position={[1.5, 2.2, -2]} rotationSpeed={0.25} size={0.5} color="#ff6b35" />
        </Float>

        <FloatingParticles count={40} />
      </Canvas>

      <style>{`
        .three-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .three-bg {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  )
}
