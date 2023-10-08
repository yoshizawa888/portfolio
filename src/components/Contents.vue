<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap, { TweenMax as Tween } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RotationgGallery from '../assets/img/rotating_gallery.jpg';
import SeamlessColorBall from '../assets/img/seamless_color_ball.jpg';
import ParticleWave from '../assets/img/particle_wave.jpg';
import TargetGame from '../assets/img/target_game.jpg';
import TodoList from '../assets/img/todo_list.jpg';
import ResasChart from '../assets/img/resas_chart.jpg';
import ReactPoke from '../assets/img/react_poke.jpg';
const works = [
	{
		img: ReactPoke,
		link: '/react-poke',
		tecs: ['React', 'React Router', 'Redux', 'CSS in JS', 'TypeScript'],
	},
	{
		img: SeamlessColorBall,
		link: '/seamless-color-ball',
		tecs: ['Vue.js', 'Vue Router', 'Three.js', 'TypeScript'],
	},
	{
		img: RotationgGallery,
		link: '/rotationg-gallery',
		tecs: ['Vue.js', 'Three.js', 'TypeScript'],
	},
	{
		img: ParticleWave,
		link: '/particle-wave',
		tecs: ['Vue.js', 'Three.js', 'TypeScript'],
	},
	{
		img: ResasChart,
		link: '/resas-chart',
		tecs: ['Vue.js', 'TypeScript'],
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
];

const item = ref();
const worksList: Tween[] = [];
const onWorkHover = (index: number) => {
	if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
		worksList[index] = gsap.to(`li:nth-child(${index + 1}) .is-hover-text`, { y: 5, opacity: 1, duration: 0.2, stagger: 0.02 });
	}
};

const onWorkLeave = (index: number) => {
	if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
		worksList[index].reverse();
	}
};

gsap.registerPlugin(ScrollTrigger);
const listView = () => {
	const listItems = item.value;
	// li要素ごとにアニメーションを設定
	listItems.forEach((item: HTMLLIElement) => {
		const imgWrap = item.querySelectorAll('.is-img-wrap')[0];
		const tecs = item.querySelectorAll('.is-tec');
		const trigger = ScrollTrigger.create({
			trigger: item,
			start: 'top 85%',
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
				<router-link :to="work.link" class="work-link is-hover" @mouseenter="onWorkHover(index)"
					@mouseleave="onWorkLeave(index)">
					<div class="work-img-wrap is-img-wrap is-hover">
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
					<ul class="tecs-list is-hover">
						<li class="tec is-tec is-hover" v-for="tec in work.tecs">{{ tec }}</li>
					</ul>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/contents.scss';
</style>
