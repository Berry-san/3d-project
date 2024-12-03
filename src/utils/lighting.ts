// import * as THREE from 'three'

// export function addLighting(scene: THREE.Scene): void {
//   const pointLight = new THREE.PointLight(0xffffff, 1)
//   pointLight.position.set(5, 5, 5)
//   pointLight.castShadow = true
//   scene.add(pointLight)

//   const ambientLight = new THREE.AmbientLight(0x404040)
//   scene.add(ambientLight)
// }

// import * as THREE from 'three'

// export function addLighting(scene: THREE.Scene): void {
//   const pointLight = new THREE.PointLight(0xffffff, 1)
//   pointLight.position.set(5, 5, 5)
//   pointLight.castShadow = true
//   scene.add(pointLight)

//   const ambientLight = new THREE.AmbientLight(0x404040)
//   scene.add(ambientLight)
// }

import * as THREE from 'three'

export function addLighting(scene: THREE.Scene): void {
  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(5, 5, 5)
  pointLight.castShadow = true
  scene.add(pointLight)

  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)
}
