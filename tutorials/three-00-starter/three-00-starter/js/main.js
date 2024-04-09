// import * as THREE from 'three';
// import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';

// const monkeyUrl = new URL


// let scene, camera, renderer;

// let mixer;
// assetLoader.load(monkeyUrl.href, function (gltf) {
//     const model = gltf.scene;
//     scene.add(model);
//     mixer - new THREE.AnimationMixer(model)
//     const clips = gltf.animations;
//     const clip = THREE.AnimationClip.findByName(clips, 'HeartAction.002')
//     const action = mixer.clipAction(clip);
//     action.play();
// }, undefined, function(error){
//     console.error(error);
// });


// function init() {
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffa3cc);
//     const light = new THREE.DirectionalLight(0xfffff, 3);
//     light.position.set(1, 1, 5);
//     scene.add(light);
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     camera.position.z = 5;
// };

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize, false);
// init();
// animate();

// const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader();
// loader.load('NewHeart.gltf', function (gltf) {
//     const Heart = gltf.scene;
//     scene.add(Heart);
// });


import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, mixer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffa3cc);
    const light = new THREE.DirectionalLight(0xfffff, 3);
    light.position.set(1, 1, 5);
    scene.add(light);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 5;
};

function animate() {
    requestAnimationFrame(animate);
    if (mixer) {
        mixer.update(0.01); // Adjust time delta as needed
    }
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
init();
animate();

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();
loader.load('NewHeart.gltf', function (gltf) {
    const heart = gltf.scene;
    scene.add(heart);
    mixer = new THREE.AnimationMixer(heart);
    const clips = gltf.animations;
    const clip = THREE.AnimationClip.findByName(clips, 'HeartAction.002'); // Adjust animation name as needed
    if (clip) {
        const action = mixer.clipAction(clip);
        action.play();
    } else {
        console.error('Animation clip not found.');
    }
});
