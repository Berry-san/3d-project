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

// import * as THREE from 'three'

// export function createTransparentCube(scene: THREE.Scene): THREE.Mesh {
//   const geometry = new THREE.BoxGeometry(1, 1, 1)
//   const materials = Array.from(
//     { length: 6 },
//     () =>
//       new THREE.MeshStandardMaterial({
//         color: 0xffffff, // White
//         transparent: true,
//         opacity: 0.5, // Semi-transparent
//       })
//   )
//   const cube = new THREE.Mesh(geometry, materials)
//   cube.castShadow = true
//   cube.receiveShadow = true
//   scene.add(cube)
//   return cube
// }

// import * as THREE from 'three'

// export function createTransparentCube(scene: THREE.Scene): THREE.Mesh {
//   const geometry = new THREE.BoxGeometry(1, 1, 1)

//   // Textured material for cube faces
//   const loader = new THREE.TextureLoader()
//   const texture = loader.load('/textures/cube-texture.jpg') // Replace with your texture file
//   const materials = Array.from(
//     { length: 6 },
//     () =>
//       new THREE.MeshStandardMaterial({
//         map: texture,
//         transparent: true,
//         opacity: 0.5, // Semi-transparent
//       })
//   )

//   const cube = new THREE.Mesh(geometry, materials)
//   cube.castShadow = true
//   cube.receiveShadow = true
//   scene.add(cube)
//   return cube
// }

// THIS IS THE MOST IMPORTANT ONE

// import * as THREE from 'three'

// export function createTransparentCube(scene: THREE.Scene): THREE.Mesh {
//   const geometry = new THREE.BoxGeometry(1, 1, 1)

//   // Individual materials for each face
//   // const materials = Array.from(
//   //   { length: 6 },
//   //   () =>
//   //     new THREE.MeshStandardMaterial({
//   //       color: 0xffffff, // Initial white color
//   //       transparent: true,
//   //       opacity: 0.8, // Semi-transparent
//   //     })
//   // )

//   const materials = Array.from(
//     { length: 6 },
//     () =>
//       new THREE.MeshPhysicalMaterial({
//         color: 0xffffff, // Initial white color
//         transparent: true,
//         opacity: 0.4, // Semi-transparent
//         roughness: 0.8, // Smooth surface
//         metalness: 0.2, // Slightly metallic
//         ior: 1.5, // Index of refraction for glass
//         reflectivity: 0.9, // Reflective surface
//         transmission: 1.0, // Fully allow light to pass through
//       })
//   )

//   const cube = new THREE.Mesh(geometry, materials)
//   cube.castShadow = true // Enable shadow casting
//   cube.receiveShadow = true // Enable shadow receiving
//   scene.add(cube)
//   return cube
// }

// import * as THREE from 'three'

// export function createTransparentCube(scene: THREE.Scene): THREE.Group {
//   const geometry = new THREE.BoxGeometry(1, 1, 1)

//   // Glass-like material with double-sided rendering
//   const material = new THREE.MeshPhysicalMaterial({
//     color: 0xffffff, // White color
//     transparent: true,
//     opacity: 0.3, // Adjust transparency
//     roughness: 0.1, // Smooth surface
//     metalness: 0.5, // Slightly reflective
//     side: THREE.DoubleSide, // Render both front and back faces
//   })

//   const cube = new THREE.Mesh(geometry, material)
//   cube.castShadow = true
//   cube.receiveShadow = true

//   // Add wireframe
//   const wireframe = new THREE.WireframeGeometry(geometry)
//   const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }) // Black wireframe
//   const wireframeLines = new THREE.LineSegments(wireframe, lineMaterial)

//   // Group the cube and wireframe together
//   const group = new THREE.Group()
//   group.add(cube)
//   group.add(wireframeLines)

//   scene.add(group)
//   return group
// }

// import * as THREE from 'three'

// export function createTransparentCube(scene: THREE.Scene): THREE.Group {
//   const geometry = new THREE.BoxGeometry(1, 1, 1)

//   // Glass-like material with double-sided rendering
//   const material = new THREE.MeshPhysicalMaterial({
//     color: 0xffffff, // White color
//     transparent: true,
//     opacity: 0.3, // Adjust transparency
//     roughness: 0.1, // Smooth surface
//     metalness: 0.5, // Slightly reflective
//     side: THREE.DoubleSide, // Render both front and back faces
//   })

//   const cube = new THREE.Mesh(geometry, material)
//   cube.castShadow = true
//   cube.receiveShadow = true

//   // Add edges (without diagonals)
//   const edges = new THREE.EdgesGeometry(geometry) // Extract only the edges
//   const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }) // Black edges
//   const edgeLines = new THREE.LineSegments(edges, edgeMaterial)

//   // Group the cube and edges together
//   const group = new THREE.Group()
//   group.add(cube)
//   group.add(edgeLines)

//   scene.add(group)
//   return group
// }

import * as THREE from 'three'

export function createTransparentCube(scene: THREE.Scene): THREE.Group {
  const geometry = new THREE.BoxGeometry(1, 1, 1)

  // Create individual materials for each face of the cube
  const faceMaterials = Array.from(
    { length: 6 },
    () =>
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff, // Default color: white
        transparent: true,
        opacity: 0.7, // Adjust transparency
        roughness: 0.1,
        metalness: 0.5,
        side: THREE.DoubleSide, // Render both front and back faces
      })
  )

  const cube = new THREE.Mesh(geometry, faceMaterials)
  cube.castShadow = true
  cube.receiveShadow = true

  // Add edges for visual clarity
  const edges = new THREE.EdgesGeometry(geometry)
  const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 })
  const edgeLines = new THREE.LineSegments(edges, edgeMaterial)

  // Group the cube and its edges
  const group = new THREE.Group()
  group.add(cube)
  group.add(edgeLines)

  scene.add(group)
  return group
}
