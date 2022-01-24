import './style.css';
import * as THREE from 'three';


// canvas
const canvas = document.querySelector('.webgl');

// Scene
const scene = new THREE.Scene();

// mesh
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// sizes
const sizes = {
    width: 800,
    height: 500
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

console.log(sizes)
// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize( sizes.width, sizes.height );
renderer.render(scene, camera);
