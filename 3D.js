import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/loaders/GLTFLoader.js';


// --- ここから下は先ほどのJSのまま ---
let scene, camera, renderer, model, mixer, clock;
let headBone = null;
const mouse = new THREE.Vector2(); // マウス座標をグローバルで保持

function init3D() {
    const container = document.querySelector('.a');
    if (!container) {
        console.error('3Dモデルを表示するコンテナ(.a)が見つかりません。');
        return;
    }
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0.5, 2.5);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 2, 3);
    scene.add(directionalLight);

    clock = new THREE.Clock();

    const loader = new GLTFLoader();
    loader.load('model.glb', (gltf) => {
        model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);
        model.position.y = -1.5;
        scene.add(model);
        if (gltf.animations.length) {
            mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
        }
        model.traverse((obj) => {
            if (obj.isBone && obj.name === 'Head') {
                headBone = obj;
            }
        });
        animate();
    }, undefined, (error) => {
        console.error('3Dモデルの読み込みに失敗しました:', error);
    });

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);
}

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    if (headBone) {
        headBone.rotation.y += (mouse.x * 0.4 - headBone.rotation.y) * 0.05;
        headBone.rotation.x += (mouse.y * 0.4 - headBone.rotation.x) * 0.05;
    }
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

init3D();
