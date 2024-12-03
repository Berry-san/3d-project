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
  // Main point light
  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(5, 5, 5)
  pointLight.castShadow = true // Enable shadow casting
  pointLight.shadow.mapSize.width = 1024 // Shadow resolution
  pointLight.shadow.mapSize.height = 1024
  scene.add(pointLight)

  // Ambient light for balanced illumination
  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)
}
