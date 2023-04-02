import { createRouter, createWebHistory } from 'vue-router';
import Top from '../views/Top.vue';
import RotationgGallery from '../views/RotationgGallery.vue';
import SeamlessColorBall from '../views/SeamlessColorBall.vue';
import ParticleWave from '../views/ParticleWave.vue';
import TargetGame from '../views/TargetGame.vue';
import TodoList from '../views/TodoList.vue';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

const routes = [
	{
		path: '/',
		component: Top,
	},
	{
		path: '/rotationg-gallery',
		component: RotationgGallery,
	},
	{
		path: '/seamless-color-ball',
		component: SeamlessColorBall,
	},
	{
		path: '/particle-wave',
		component: ParticleWave,
	},
	{
		path: '/target-game',
		component: TargetGame,
	},
	{
		path: '/todo-list',
		component: TodoList,
	},
];

const router = createRouter({
	history: createWebHistory('/portfolio/'),
	routes,
});

// router.beforeEach((to, from, next) => {
//   ScrollTrigger.getAll().forEach(trigger => {
//     trigger.kill();
//   });
//   next();
// });

export default router;
