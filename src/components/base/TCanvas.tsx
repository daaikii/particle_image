import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import Particle from '../object3D/Particles'

const TCanvas = () => {
  return (
    <Canvas camera={{ fov: 50, near: 1, far: 1000, position: [0, 0, 300] }}>
      <color attach="background" args={[0, 0, 0]} />
      <Particle />
      <Stats />
      <OrbitControls />
    </Canvas>
  )
}

export default TCanvas