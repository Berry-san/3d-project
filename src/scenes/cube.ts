// import * as THREE from 'three'

// export function createCube(scene: THREE.Scene): THREE.Mesh {
//   const geometry = new THREE.BoxGeometry(1, 1, 1)
//   const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
//   const cube = new THREE.Mesh(geometry, material)
//   cube.castShadow = true
//   cube.receiveShadow = true
//   scene.add(cube)
//   return cube
// }

// import * as THREE from 'three'

// export function createTransparentCube(scene: THREE.Scene): THREE.Mesh {
//   const geometry = new THREE.BoxGeometry(1, 1, 1)
//   const materials = Array.from(
//     { length: 6 },
//     () =>
//       new THREE.MeshStandardMaterial({
//         color: 0xff0000, // Initial red color
//         transparent: true,
//         opacity: 0.8, // Semi-transparent
//       })
//   )
//   const cube = new THREE.Mesh(geometry, materials)
//   cube.castShadow = true
//   cube.receiveShadow = true
//   scene.add(cube)
//   return cube
// }

// export function updateCubeFace(
//   cube: THREE.Mesh,
//   faceIndex: number,
//   color: THREE.Color
// ): void {
//   const faceMaterial = (cube.material as THREE.Material[])[faceIndex]
//   if (faceMaterial instanceof THREE.MeshStandardMaterial) {
//     faceMaterial.color.set(color) // Change the face color to the ball's color
//   }
// }

import * as THREE from 'three'

export function createTransparentCube(scene: THREE.Scene): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const materials = Array.from(
    { length: 6 },
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xffffff, // White
        transparent: true,
        opacity: 0.5, // Semi-transparent
      })
  )
  const cube = new THREE.Mesh(geometry, materials)
  cube.castShadow = true
  cube.receiveShadow = true
  scene.add(cube)
  return cube
}
