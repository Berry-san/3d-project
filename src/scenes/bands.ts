// import * as THREE from 'three'

// export function createBands(scene: THREE.Scene): THREE.Mesh[] {
//   const bandGeometries = [
//     new THREE.RingGeometry(1.2, 1.3, 32), // Horizontal band
//     new THREE.RingGeometry(1.2, 1.3, 32), // Vertical band
//   ]

//   const bandMaterials = [
//     new THREE.MeshStandardMaterial({ color: 0x0000ff }),
//     new THREE.MeshStandardMaterial({ color: 0xffff00 }),
//   ]

//   const bands = bandGeometries.map((geometry, index) => {
//     const band = new THREE.Mesh(geometry, bandMaterials[index])
//     band.rotation.x = index === 0 ? Math.PI / 2 : 0 // Align bands
//     scene.add(band)
//     return band
//   })

//   return bands
// }

// export function updateBands(bands: THREE.Mesh[]): void {
//   bands[0].rotation.z += 0.01
//   bands[1].rotation.y += 0.01
// }

// import * as THREE from 'three'

// export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
//   const bandGeometries = [
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Horizontal band
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Vertical band
//   ]

//   const bandMaterials = [
//     new THREE.MeshStandardMaterial({ color: 0x0000ff }),
//     new THREE.MeshStandardMaterial({ color: 0xffff00 }),
//   ]

//   const bands = bandGeometries.map((geometry, index) => {
//     const band = new THREE.Mesh(geometry, bandMaterials[index])
//     band.rotation.x = index === 0 ? Math.PI / 2 : 0 // Align bands
//     scene.add(band)
//     return band
//   })

//   return bands
// }

// export function updateBands(bands: THREE.Mesh[]): void {
//   bands[0].rotation.z += 0.01 // Rotate horizontal band
//   bands[1].rotation.y += 0.01 // Rotate vertical band
// }

// import * as THREE from 'three'

// export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
//   const bandGeometries = [
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Horizontal band
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Vertical band
//   ]

//   const bandMaterials = [
//     new THREE.MeshStandardMaterial({ color: 0x0000ff }), // Blue
//     new THREE.MeshStandardMaterial({ color: 0xffff00 }), // Yellow
//   ]

//   const bands = bandGeometries.map((geometry, index) => {
//     const band = new THREE.Mesh(geometry, bandMaterials[index])
//     if (index === 0) {
//       band.rotation.x = Math.PI / 2 // Align horizontal band (XZ plane)
//     }
//     scene.add(band)
//     return band
//   })

//   return bands
// }

// import * as THREE from 'three'

// export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
//   const bandGeometries = [
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Horizontal band
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Vertical band
//   ]

//   const bandMaterials = [
//     new THREE.MeshStandardMaterial({ color: 0xaaaaaa }), // Light gray
//     new THREE.MeshStandardMaterial({ color: 0x555555 }), // Dark gray
//   ]

//   const bands = bandGeometries.map((geometry, index) => {
//     const band = new THREE.Mesh(geometry, bandMaterials[index])
//     if (index === 0) {
//       band.rotation.x = Math.PI / 2 // Align horizontal band (XZ plane)
//     }
//     scene.add(band)
//     return band
//   })

//   return bands
// }

// export function updateBands(bands: THREE.Mesh[]): void {
//   bands[0].rotation.z += 0.02 // Horizontal band rotates around Z-axis
//   bands[1].rotation.y += 0.02 // Vertical band rotates around Y-axis
// }

// import * as THREE from 'three'

// export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
//   const bandGeometries = [
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // First band
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Second band
//   ]

//   const bandMaterials = [
//     new THREE.MeshStandardMaterial({ color: 0x888888 }), // Light gray
//     new THREE.MeshStandardMaterial({ color: 0x444444 }), // Dark gray
//   ]

//   const bands = bandGeometries.map((geometry, index) => {
//     const band = new THREE.Mesh(geometry, bandMaterials[index])

//     // Align the bands to the respective planes
//     if (index === 0) {
//       band.rotation.x = Math.PI / 2 // Align to XZ plane
//     } else {
//       band.rotation.z = Math.PI / 2 // Align to YZ plane
//     }

//     scene.add(band)
//     return band
//   })

//   return bands
// }

// export function updateBands(bands: THREE.Mesh[]): void {
//   // Rotate the first band on the Z-axis
//   bands[0].rotation.z += 0.02

//   // Rotate the second band on the Y-axis
//   bands[1].rotation.y += 0.02
// }

// import * as THREE from 'three'

// export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
//   const bandGeometries = [
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Band on XZ plane
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Band on YZ plane
//   ]

//   const bandMaterials = [
//     new THREE.MeshStandardMaterial({ color: 0x888888 }), // Light gray
//     new THREE.MeshStandardMaterial({ color: 0x444444 }), // Dark gray
//   ]

//   const bands = bandGeometries.map((geometry, index) => {
//     const band = new THREE.Mesh(geometry, bandMaterials[index])

//     // Align the bands to the respective planes
//     if (index === 0) {
//       band.rotation.x = Math.PI / 2 // Align to XZ plane
//     } else {
//       band.rotation.z = Math.PI / 2 // Align to YZ plane
//     }

//     band.castShadow = true // Enable shadow casting
//     band.receiveShadow = true // Enable shadow receiving
//     scene.add(band)
//     return band
//   })

//   return bands
// }

// export function updateBands(bands: THREE.Mesh[]): void {
//   bands[0].rotation.z += 0.02 // Rotate horizontal band
//   bands[1].rotation.y += 0.02 // Rotate vertical band
// }

// import * as THREE from 'three'

// export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
//   const bandGeometries = [
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Band for XZ plane
//     new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Band for YZ plane
//   ]

//   const bandMaterials = [
//     new THREE.MeshStandardMaterial({ color: 0x888888 }), // Light gray
//     new THREE.MeshStandardMaterial({ color: 0x444444 }), // Dark gray
//   ]

//   const bands = bandGeometries.map((geometry, index) => {
//     const band = new THREE.Mesh(geometry, bandMaterials[index])

//     // Align the bands to the respective planes
//     if (index === 0) {
//       band.rotation.x = Math.PI / 2 // XZ plane
//     } else if (index === 1) {
//       band.rotation.y = Math.PI / 2 // YZ plane
//     }

//     band.castShadow = true // Enable shadow casting
//     band.receiveShadow = true // Enable shadow receiving
//     scene.add(band)
//     return band
//   })

//   return bands
// }

// export function updateBands(bands: THREE.Mesh[]): void {
//   if (bands.length === 2) {
//     bands[0].rotation.z += 0.02 // Rotate the first band (XZ plane) on Z-axis
//     bands[1].rotation.x += 0.02 // Rotate the second band (YZ plane) on X-axis
//   }
// }

import * as THREE from 'three'

export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
  const bandGeometries = [
    new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Band for XZ plane
    new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Band for YZ plane
  ]

  const bandMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xc0c0c0 }), // Light gray for XZ band
    new THREE.MeshStandardMaterial({ color: 0x444444 }), // Dark gray for YZ band
  ]

  const bands = bandGeometries.map((geometry, index) => {
    const band = new THREE.Mesh(geometry, bandMaterials[index])

    // Align the bands to the respective planes
    if (index === 0) {
      band.rotation.x = Math.PI / 2 // XZ plane
    } else if (index === 1) {
      band.rotation.y = Math.PI / 2 // YZ plane
    }

    band.castShadow = true // Enable shadow casting
    band.receiveShadow = true // Enable shadow receiving
    scene.add(band)
    return band
  })

  return bands
}

export function updateBands(bands: THREE.Mesh[]): void {
  if (bands.length === 2) {
    bands[0].rotation.x += 0.02 // Rotate the first band (XZ plane) on Z-axis
    bands[1].rotation.y += 0.02 // Rotate the second band (YZ plane) on Y-axis
  }
}
