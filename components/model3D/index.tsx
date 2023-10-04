import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { memo, Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ModelEarth = () => {
  const gltf = useLoader(GLTFLoader, '/earth/scene.gltf', (error) => {
    console.error(error)
  })

  return (
    <Canvas
      style={{ display: 'block', width: '600px', height: '600px', touchAction: 'none' }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 50 }}
    >
      <ambientLight intensity={0.01} />
      <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[100, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={0.0168} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default memo(ModelEarth)
