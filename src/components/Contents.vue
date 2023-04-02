<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap, { TweenMax as Tween } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import RotationgGallery from '../assets/img/rotating_gallery.jpg';
import SeamlessColorBall from '../assets/img/seamless_color_ball.jpg';
import ParticleWave from '../assets/img/particle_wave.jpg';
import TargetGame from '../assets/img/target_game.jpg';
import TodoList from '../assets/img/todo_list.jpg';
const works = [
	{
		img: SeamlessColorBall,
		link: '/seamless-color-ball',
		tecs: ['Vue.js', 'Vue Router', 'Three.js'],
	},
	{
		img: RotationgGallery,
		link: '/rotationg-gallery',
		tecs: ['Vue.js', 'Three.js'],
	},
	{
		img: ParticleWave,
		link: '/particle-wave',
		tecs: ['Vue.js', 'Three.js'],
	},
	{
		img: TargetGame,
		link: '/target-game',
		tecs: ['Vue.js', 'Vue Router', 'Vuex'],
	},
	{
		img: TodoList,
		link: '/todo-list',
		tecs: ['Vue.js'],
	},
	{
		img: SeamlessColorBall,
		link: '',
		tecs: ['Vue.js', 'Vue Router', 'Three.js'],
	},
	{
		img: RotationgGallery,
		link: '',
		tecs: ['Vue.js', 'Three.js'],
	},
	{
		img: SeamlessColorBall,
		link: '',
		tecs: ['Vue.js', 'Three.js'],
	},
	{
		img: SeamlessColorBall,
		link: '',
		tecs: ['Vue.js', 'Vue Router', 'Three.js'],
	},
	{
		img: RotationgGallery,
		link: '',
		tecs: ['Vue.js', 'Three.js'],
	},
	{
		img: SeamlessColorBall,
		link: '',
		tecs: ['Vue.js', 'Three.js'],
	},
];

const item = ref();

// const activeIndex = ref<number | null>(null);
// const setActiveIndex = (index: number | null) => {
// 	activeIndex.value = index;
// 	gsap.from('._active .is-hover-text', { opacity: 0.1, duration: 0.5 });
// 	console.log(11);
// };

const worksList: Tween[] = [];
const onWorkHover = (index: number) => {
	// const timeline = gsap.timeline();
	// gsap.to(`li:nth-child(${index + 1}) .is-hover-text`, { duration: 0.3, opacity: 0.1 });
	if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
		worksList[index] = gsap.to(`li:nth-child(${index + 1}) .is-hover-text`, { y: 5, opacity: 1, duration: 0.2, stagger: 0.02 });
	}

	// const listItems = item.value;
	// // li要素ごとにアニメーションを設定
	// listItems.forEach((item: HTMLLIElement) => {
	// 	const imgWrap = item.querySelectorAll('img')[0];
	// 	const img = imgWrap.cloneNode(true);
	// 	const tecs = item.querySelectorAll('.is-tec');
	// 	console.log(img)
	// 	tecs[0].appendChild(img);
	// });
};

const onWorkLeave = (index: number) => {
	if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
		worksList[index].reverse();
	}
};

gsap.registerPlugin(ScrollTrigger);
// let trigger: ScrollTrigger;
const listView = () => {
	const listItems = item.value;
	// li要素ごとにアニメーションを設定
	listItems.forEach((item: HTMLLIElement) => {
		const imgWrap = item.querySelectorAll('.is-img-wrap')[0];
		const tecs = item.querySelectorAll('.is-tec');
			const trigger = ScrollTrigger.create({
			trigger: item,
			start: 'top 80%',
			toggleActions: 'play none none none',
		});
		const tl = gsap.timeline({
			scrollTrigger: trigger,
		});
		tl.fromTo(imgWrap, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.3 });
		tl.fromTo(tecs, { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.2 });
	});
};
onMounted(() => {
	listView();
});
</script>
<template>
	<div class="contents">
		<ul class="list">
			<li class="item" ref="item" v-for="(work, index) in works">
				<!-- <a :href="work.link" class="work-link"> -->
				<!-- <a :href="work.link" class="work-link" :class="{ _active: activeIndex === index }" @mouseleave="setActiveIndex(null)" @mouseenter.stop="setActiveIndex(index)"> -->
				<router-link :to="work.link" class="work-link" @mouseenter="onWorkHover(index)" @mouseleave="onWorkLeave(index)">
					<div class="work-img-wrap is-img-wrap">
						<img class="work-img" :src="work.img" alt="" />
						<div class="split-str-wrap">
							<span class="split-str is-hover-text">V</span>
							<span class="split-str is-hover-text">i</span>
							<span class="split-str is-hover-text">e</span>
							<span class="split-str is-hover-text">w</span>
							<span class="split-str is-hover-text">&nbsp;</span>
							<span class="split-str is-hover-text">W</span>
							<span class="split-str is-hover-text">o</span>
							<span class="split-str is-hover-text">r</span>
							<span class="split-str is-hover-text">k</span>
						</div>
					</div>
					<ul class="tecs-list">
						<li class="tec is-tec" v-for="tec in work.tecs">{{ tec }}</li>
					</ul>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/contents.scss';
</style>
