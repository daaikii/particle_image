import Particle from "../../particles"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

const Particles = () => {
  const { scene } = useThree()

  useEffect(() => {
    const particles = new Particle()
    if (particles.mesh) scene.add(particles.mesh)
  }, [])


  return null
}

export default Particles