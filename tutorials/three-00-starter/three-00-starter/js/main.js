// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
let scene, camera, renderer, cube;

function init(){
    scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xfffff, 3);
    light.position.set(1,1,5);
    scene.add(light);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const x = 0, y = 0;

    const heartShape = new THREE.Shape();

    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    const geometry = new THREE.ShapeGeometry( heartShape );
    const material = new THREE.MeshBasicMaterial({color: 0xff0000});
    const heart = new THREE.Mesh(geometry, material);
    scene.add(heart);
    
    const texture = new THREE.TextureLoader().load('textures/moon_1024.jpg');
    const material2 = new THREE.MeshBasicMaterial({map: texture});
    const geometry2 = new THREE.BoxGeometry(1,1,1);
    cube = new THREE.Mesh(geometry2, material2);
    scene.add(cube);
    
    camera.position.z= 5;
};

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
init();
animate();


// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models
loader.load('scorpion.gltf', function(gltf) {
    const scorpion = gltf.scene;
    scene.add(scorpion)
});

