// import * as THREE from 'three'

// const velocity = new THREE.Vector3(0.02, 0.03, 0.01)

// export function createBall(scene: THREE.Scene): THREE.Mesh {
//   const geometry = new THREE.SphereGeometry(0.2, 32, 32)
//   const material = new THREE.MeshStandardMaterial({
//     color: 0xff0000,
//     metalness: 0.7,
//     roughness: 0.2,
//   })
//   const ball = new THREE.Mesh(geometry, material)
//   ball.castShadow = true
//   ball.receiveShadow = true
//   scene.add(ball)
//   return ball
// }

// export function updateBall(ball: THREE.Mesh, cube: THREE.Mesh): void {
//   ball.position.add(velocity)

//   const halfSize = 0.5 // Half size of the cube
//   if (
//     Math.abs(ball.position.x) > halfSize ||
//     Math.abs(ball.position.y) > halfSize ||
//     Math.abs(ball.position.z) > halfSize
//   ) {
//     velocity.multiplyScalar(-1) // Reverse direction
//   }
// }

// import * as THREE from 'three'

// const velocity = new THREE.Vector3(0.02, 0.03, 0.01)

// export function createBall(scene: THREE.Scene): THREE.Mesh {
//   const geometry = new THREE.SphereGeometry(0.2, 32, 32)
//   const material = new THREE.MeshStandardMaterial({
//     color: 0x0000ff,
//     metalness: 0.7,
//     roughness: 0.2,
//   })
//   const ball = new THREE.Mesh(geometry, material)
//   ball.castShadow = true
//   ball.receiveShadow = true
//   scene.add(ball)
//   return ball
// }

// export function updateBallPosition(
//   ball: THREE.Mesh,
//   cube: THREE.Mesh,
//   onCollision: (faceIndex: number) => void
// ): void {
//   ball.position.add(velocity)

//   const halfSize = 0.5 // Half size of the cube
//   for (let i = 0; i < 3; i++) {
//     if (Math.abs(ball.position.getComponent(i)) > halfSize) {
//       velocity.setComponent(i, -velocity.getComponent(i)) // Reverse direction
//       const collidedFaceIndex = i * 2 + (velocity.getComponent(i) > 0 ? 0 : 1)
//       onCollision(collidedFaceIndex)
//     }
//   }
// }

// export function updateBallColor(ball: THREE.Mesh): void {
//   const material = ball.material as THREE.MeshStandardMaterial
//   material.color.setHex(Math.random() * 0xffffff) // Set a random color
// }

import * as THREE from 'three'

const velocity = new THREE.Vector3(0.02, 0.03, 0.01)

export function createBall(scene: THREE.Scene): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(0.2, 32, 32)
  const material = new THREE.MeshStandardMaterial({
    color: 0x808080, // Initial gray color
    metalness: 0.7,
    roughness: 0.2,
  })
  const ball = new THREE.Mesh(geometry, material)
  ball.castShadow = true
  ball.receiveShadow = true
  scene.add(ball)
  return ball
}

export function updateBallPosition(
  ball: THREE.Mesh,
  cube: THREE.Mesh,
  onCollision: (faceIndex: number) => void
): void {
  ball.position.add(velocity)

  const halfSize = 0.5 // Half size of the cube
  for (let i = 0; i < 3; i++) {
    if (Math.abs(ball.position.getComponent(i)) > halfSize) {
      velocity.setComponent(i, -velocity.getComponent(i)) // Reverse direction
      const collidedFaceIndex = i * 2 + (velocity.getComponent(i) > 0 ? 0 : 1)
      onCollision(collidedFaceIndex)
    }
  }
}

export function updateBallColor(ball: THREE.Mesh): void {
  const material = ball.material as THREE.MeshStandardMaterial
  const grayShade = Math.random() * 0xffffff // Random gray shade
  const grayColor = new THREE.Color(grayShade)
    .convertSRGBToLinear()
    .lerp(new THREE.Color(0x000000), 0.5) // Ensure it's gray
  material.color.copy(grayColor)
}
