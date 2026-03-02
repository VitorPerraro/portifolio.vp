'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const ref = useRef<THREE.Points>(null)
  const count = 800
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFrame((state) => {
    if (!ref.current) return
    const m = mouseRef.current
    const t = state.clock.elapsedTime * 0.05
    ref.current.rotation.x = t * 0.1 + m.y * 0.1
    ref.current.rotation.y = t * 0.15 + m.x * 0.1
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        color="#FF0000"
        opacity={0.4}
      />
    </Points>
  )
}

export default function ParticleScene() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-30 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ParticleField mouseRef={mouseRef} />
      </Canvas>
    </div>
  )
}
