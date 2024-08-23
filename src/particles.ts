import * as THREE from "three"

import src from "../public/image/image3.jpg"
import vertex from "./glsl/particleVShader.glsl"
import fragment from "./glsl/particleFShader.glsl"



export default class Particles {
  public mesh: THREE.Points | null
  constructor() {
    this.mesh = null

    this.initParticles()
  }
  initParticles() {
    const loader = new THREE.TextureLoader()
    const texture = loader.load(src)

    const geometry = new THREE.BufferGeometry()

    const multiplier = 18;
    const columns = 16 * multiplier;
    const liners = 9 * multiplier;

    const vertices = [];
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < liners; y++) {
        const point = [x, y, 0];

        vertices.push(...point)
      }
    }

    const vertices32 = new Float32Array(vertices);

    geometry.setAttribute("position", new THREE.BufferAttribute(vertices32, 3));
    geometry.center()

    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uPointSize: { value: 5 },
        uColumns: { value: columns },
        uLiners: { value: liners },
        uTexture: { value: texture }
      },
      transparent: true
    })

    const mesh = new THREE.Points(geometry, material)
    this.mesh = mesh;
  }
}