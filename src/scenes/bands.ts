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

import * as THREE from 'three'

export function createSolidBands(scene: THREE.Scene): THREE.Mesh[] {
  const bandGeometries = [
    new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Horizontal band
    new THREE.TorusGeometry(1.5, 0.1, 16, 100), // Vertical band
  ]

  const bandMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xaaaaaa }), // Light gray
    new THREE.MeshStandardMaterial({ color: 0x555555 }), // Dark gray
  ]

  const bands = bandGeometries.map((geometry, index) => {
    const band = new THREE.Mesh(geometry, bandMaterials[index])
    if (index === 0) {
      band.rotation.x = Math.PI / 2 // Align horizontal band (XZ plane)
    }
    scene.add(band)
    return band
  })

  return bands
}

export function updateBands(bands: THREE.Mesh[]): void {
  bands[0].rotation.z += 0.02 // Horizontal band rotates around Z-axis
  bands[1].rotation.y += 0.02 // Vertical band rotates around Y-axis
}
