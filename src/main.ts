// import * as THREE from 'three'
// import { createCube } from './scenes/cube'
// import { createBall, updateBall } from './scenes/ball'
// import { createBands, updateBands } from './scenes/bands'
// import { addLighting } from './utils/lighting'

// let scene: THREE.Scene
// let camera: THREE.PerspectiveCamera
// let renderer: THREE.WebGLRenderer
// let cube: THREE.Mesh
// let ball: THREE.Mesh
// let bands: THREE.Mesh[]

// function init() {
//   // Initialize scene, camera, and renderer
//   scene = new THREE.Scene()
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   )
//   camera.position.z = 5

//   renderer = new THREE.WebGLRenderer({ antialias: true })
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   renderer.shadowMap.enabled = true
//   document.body.appendChild(renderer.domElement)

//   // Add objects and lighting
//   cube = createCube(scene)
//   ball = createBall(scene)
//   bands = createBands(scene)
//   addLighting(scene)

//   animate()
// }

// function animate() {
//   requestAnimationFrame(animate)

//   // Rotate the cube
//   cube.rotation.x += 0.01
//   cube.rotation.y += 0.01
//   cube.rotation.z += 0.01

//   // Update the ball and bands
//   updateBall(ball, cube)
//   updateBands(bands)

//   // Render the scene
//   renderer.render(scene, camera)
// }

// init()

// import * as THREE from 'three'
// import { createTransparentCube, updateCubeFace } from './scenes/cube'
// import { createBall, updateBallColor, updateBallPosition } from './scenes/ball'
// import { createSolidBands, updateBands } from './scenes/bands'
// import { addLighting } from './utils/lighting'

// let scene: THREE.Scene
// let camera: THREE.PerspectiveCamera
// let renderer: THREE.WebGLRenderer
// let cube: THREE.Mesh
// let ball: THREE.Mesh
// let bands: THREE.Mesh[]

// function init() {
//   // Initialize scene, camera, and renderer
//   scene = new THREE.Scene()
//   scene.background = new THREE.Color(0x123456) // Replace with any color (e.g., hex, name)

//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   )
//   camera.position.z = 5

//   renderer = new THREE.WebGLRenderer({ antialias: true })
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   renderer.shadowMap.enabled = true
//   document.body.appendChild(renderer.domElement)

//   // Add objects and lighting
//   cube = createTransparentCube(scene)
//   ball = createBall(scene)
//   bands = createSolidBands(scene)
//   addLighting(scene)

//   animate()
// }

// function animate() {
//   requestAnimationFrame(animate)

//   // Rotate the cube
//   cube.rotation.x += 0.01
//   cube.rotation.y += 0.01
//   cube.rotation.z += 0.01

//   // Update ball and bands
//   updateBallPosition(ball, cube, (collidedFaceIndex) => {
//     updateCubeFace(cube, collidedFaceIndex, ball.material.color)
//     updateBallColor(ball)
//   })
//   updateBands(bands)

//   // Render the scene
//   renderer.render(scene, camera)
// }

// init()

// import * as THREE from 'three'
// import { createTransparentCube } from './scenes/cube'
// import { createBall, updateBallColor, updateBallPosition } from './scenes/ball'
// import { createSolidBands } from './scenes/bands'
// import { addLighting } from './utils/lighting'

// let scene: THREE.Scene
// let camera: THREE.PerspectiveCamera
// let renderer: THREE.WebGLRenderer
// let cube: THREE.Mesh
// let ball: THREE.Mesh
// let bands: THREE.Mesh[]

// function init() {
//   // Initialize scene, camera, and renderer
//   scene = new THREE.Scene()
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   )
//   camera.position.z = 5

//   renderer = new THREE.WebGLRenderer({ antialias: true })
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   renderer.shadowMap.enabled = true
//   document.body.appendChild(renderer.domElement)

//   // Add objects and lighting
//   cube = createTransparentCube(scene)
//   ball = createBall(scene)
//   bands = createSolidBands(scene)
//   addLighting(scene)

//   animate()
// }

// function animate() {
//   requestAnimationFrame(animate)

//   // Rotate cube only on the Y-axis
//   cube.rotation.y += 0.01

//   // Update ball position and color
//   updateBallPosition(ball, cube, () => {
//     updateBallColor(ball)
//   })

//   // Rotate the bands on their respective axes
//   bands[0].rotation.z += 0.02 // Horizontal band rotates around Z-axis
//   bands[1].rotation.y += 0.02 // Vertical band rotates around Y-axis

//   // Render the scene
//   renderer.render(scene, camera)
// }

// init()

// import * as THREE from 'three'
// import { createTransparentCube } from './scenes/cube'
// import { createBall, updateBallColor, updateBallPosition } from './scenes/ball'
// import { createSolidBands, updateBands } from './scenes/bands'
// import { addLighting } from './utils/lighting'

// let scene: THREE.Scene
// let camera: THREE.PerspectiveCamera
// let renderer: THREE.WebGLRenderer
// let cube: THREE.Mesh
// let ball: THREE.Mesh
// let bands: THREE.Mesh[]

// function init() {
//   // Initialize scene, camera, and renderer
//   scene = new THREE.Scene()
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   )
//   camera.position.z = 5

//   renderer = new THREE.WebGLRenderer({ antialias: true })
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   renderer.shadowMap.enabled = true

//   // Set the background color to light gray
//   renderer.setClearColor(0xd3d3d3) // Light gray background
//   document.body.appendChild(renderer.domElement)

//   // Add objects and lighting
//   cube = createTransparentCube(scene)
//   ball = createBall(scene)
//   bands = createSolidBands(scene)
//   addLighting(scene)

//   animate()
// }

// // function animate() {
// //   requestAnimationFrame(animate)

// //   // Rotate cube only on the Y-axis
// //   cube.rotation.y += 0.01

// //   // Update ball position and color
// //   updateBallPosition(ball, cube, (collidedFaceIndex) => {
// //     // Change the color of the collided face to the ball's color
// //     ;(cube.material as THREE.MeshStandardMaterial[])[
// //       collidedFaceIndex
// //     ].color.copy(ball.material.color)
// //     // Change the ball's color to a new random shade of gray
// //     updateBallColor(ball)
// //   })

// //   // Rotate the bands on their respective axes
// //   bands[0].rotation.z += 0.02 // Horizontal band rotates around Z-axis
// //   bands[1].rotation.y += 0.02 // Vertical band rotates around Y-axis

// //   // Render the scene
// //   renderer.render(scene, camera)
// // }

// function animate() {
//   requestAnimationFrame(animate)

//   // Rotate cube only on the Y-axis
//   cube.rotation.y += 0.01

//   // Update ball position and handle collisions
//   updateBallPosition(ball, cube, (collidedFaceIndex) => {
//     // Change the color of the collided face to the ball's color
//     ;(cube.material as THREE.MeshStandardMaterial[])[
//       collidedFaceIndex
//     ].color.copy(ball.material.color)
//     // Change the ball's color to a new random shade of gray
//     updateBallColor(ball)
//   })

//   // Rotate the bands on their respective axes
//   bands[0].rotation.z += 0.02 // Horizontal band rotates around Z-axis
//   bands[1].rotation.y += 0.02 // Vertical band rotates around Y-axis

//   // Render the scene
//   renderer.render(scene, camera)
// }

// init()

// import * as THREE from 'three'
// import { createTransparentCube } from './scenes/cube'
// import { createBall, updateBallPosition, updateBallColor } from './scenes/ball'
// import { createSolidBands, updateBands } from './scenes/bands'
// import { addLighting } from './utils/lighting'

// let scene: THREE.Scene
// let camera: THREE.PerspectiveCamera
// let renderer: THREE.WebGLRenderer
// let cube: THREE.Mesh
// let ball: THREE.Mesh
// let bands: THREE.Mesh[]

// function init() {
//   // Initialize scene, camera, and renderer
//   scene = new THREE.Scene()
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   )
//   camera.position.z = 5

//   renderer = new THREE.WebGLRenderer({ antialias: true })
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   renderer.shadowMap.enabled = true

//   // Set the background color to light gray
//   renderer.setClearColor(0xd3d3d3)
//   document.body.appendChild(renderer.domElement)

//   // Add objects and lighting
//   cube = createTransparentCube(scene)
//   ball = createBall(scene)
//   bands = createSolidBands(scene)
//   addLighting(scene)

//   animate()
// }

// function animate() {
//   requestAnimationFrame(animate)

//   // Rotate cube only on the Y-axis
//   cube.rotation.y += 0.01

//   // Update ball position and handle collisions
//   updateBallPosition(ball, cube, (collidedFaceIndex) => {
//     // Change the color of the collided face to the ball's color
//     ;(cube.material as THREE.MeshStandardMaterial[])[
//       collidedFaceIndex
//     ].color.copy(ball.material.color)
//     // Change the ball's color to a new random shade of gray
//     updateBallColor(ball)
//   })

//   // Rotate the bands on their respective axes
//   updateBands(bands)

//   // Render the scene
//   renderer.render(scene, camera)
// }

// init()

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { createTransparentCube } from './scenes/cube'
import { createBall, updateBallPosition, updateBallColor } from './scenes/ball'
import { createSolidBands, updateBands } from './scenes/bands'
import { addLighting } from './utils/lighting'

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let cube: THREE.Mesh
let ball: THREE.Mesh
let bands: THREE.Mesh[]
let controls: OrbitControls

function init() {
  // Initialize scene, camera, and renderer
  scene = new THREE.Scene()

  // Set up perspective camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(3, 3, 5) // Place camera at an angle
  camera.lookAt(0, 0, 0) // Point the camera to the center of the scene

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true

  // Set the background color to light gray
  renderer.setClearColor(0xd3d3d3)
  document.body.appendChild(renderer.domElement)

  // Add OrbitControls for user interaction
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // Smooth movement
  controls.dampingFactor = 0.05

  // Add objects and lighting
  cube = createTransparentCube(scene)
  ball = createBall(scene)
  bands = createSolidBands(scene)
  addLighting(scene)

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  animate()
}

function animate() {
  requestAnimationFrame(animate)

  // Rotate cube on all axes
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  cube.rotation.z += 0.01

  // Update ball position and handle collisions
  updateBallPosition(ball, cube, (collidedFaceIndex) => {
    // Change the color of the collided face to the ball's color
    ;(cube.material as THREE.MeshStandardMaterial[])[
      collidedFaceIndex
    ].color.copy(ball.material.color)
    // Change the ball's color to a new random shade of gray
    updateBallColor(ball)
  })

  // Rotate the bands on their respective axes
  updateBands(bands)

  // Update OrbitControls
  controls.update()

  // Render the scene
  renderer.render(scene, camera)
}

init()
