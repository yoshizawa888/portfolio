<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

import { WebGLRenderer, Scene, PerspectiveCamera, EdgesGeometry, ShaderMaterial, Mesh, BoxGeometry, LineSegments, LineBasicMaterial, PlaneGeometry } from 'three';

import MainVisual from '../components/MainVisual.vue';
import Contents from '../components/Contents.vue';

import { TransitionLeave, TransitionMount } from '../assets/ts/transition';

import fragmentSource from '../assets/shaders/waveShader.frag?raw';
import vertexSource from '../assets/shaders/waveShader.vert?raw';

const canvas = ref<HTMLDivElement>();

let w = innerWidth;
let h = innerHeight;

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
renderer.setPixelRatio(devicePixelRatio);

const fov = 500;
const fovRad = (fov / 2) * (Math.PI / 180);
let distance = h / 2 / Math.tan(fovRad);

const camera = new PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.set(0, 0, 7);
camera.position.z = distance;

const scene = new Scene();

// 波波
const waveGeometry = new PlaneGeometry(344, 1, 256, 256);
const uniform = {
	uTime: { value: 0 },
};
const waveMaterial = new ShaderMaterial({
	vertexShader: vertexSource,
	fragmentShader: fragmentSource,
	uniforms: uniform,
});
const waveMesh = new Mesh(waveGeometry, waveMaterial);
scene.add(waveMesh);

// 箱
const geometry = new BoxGeometry(30, 30, 30);
const edges = new EdgesGeometry(geometry);
const boxCount = 5;
const meshArray = new Array<LineSegments>(boxCount);
const lineMaterial = new LineBasicMaterial({ color: 0xffffff });
const yPosition: number[] = [];
const boxPositionX = [-80, 90, -30, 90, -100];
const boxPositionY = [0, 70, 140, 200, 220];
const boxPositionZ = [70, 20, -20, 50, 40];
for (let i = 0; i < boxCount; i++) {
	meshArray[i] = new LineSegments(edges!, lineMaterial);
	meshArray[i].position.set(boxPositionX[i], -i * boxPositionY[i] - h * 0.15, boxPositionZ[i]);

	meshArray[i].rotation.x = Math.random() * 2;
	meshArray[i].rotation.y = Math.random() * 2;
	meshArray[i].rotation.z = Math.random() * 2;

	yPosition[i] = meshArray[i].position.y;
	scene.add(meshArray[i]);
}
window.addEventListener('resize', () => {
	w = innerWidth;
	h = innerHeight;
	renderer.setSize(w, h);
	distance = h / 2 / Math.tan(fovRad);
	camera.position.z = distance;
	camera.aspect = w / h;
	camera.updateProjectionMatrix();
});

for (let i = 0; i < boxCount; i++) {
	meshArray[i].position.y = window.pageYOffset + yPosition[i];
}
window.addEventListener('scroll', () => {
	for (let i = 0; i < boxCount; i++) {
		meshArray[i].position.y = (window.pageYOffset + yPosition[i] - i * boxPositionY[i] - h * 0.9) * 0.15;
		waveMesh.position.y = window.pageYOffset * 0.3;
	}
});

const render = () => {
	requestAnimationFrame(() => {
		render();
	});
	renderer.render(scene, camera);
	for (let i = 0; i < boxCount; i++) {
		meshArray[i].rotation.y += 0.005;
	}

	uniform.uTime.value += 0.1;
};

onMounted(() => {
	const transitionMount = new TransitionMount();
	canvas.value!.appendChild(renderer.domElement);
	render();
});

onBeforeRouteLeave((to, from) => {
  const transitionLeave = new TransitionLeave();
});
</script>

<template>
	<div class="wrap">
		<div ref="canvas" class="canvas"></div>
		<MainVisual />
		<Contents />
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/canvas.scss';
</style>
