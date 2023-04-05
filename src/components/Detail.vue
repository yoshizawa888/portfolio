<script lang="ts" setup>
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { TransitionLeave, TransitionMount } from '../assets/ts/transition';
defineProps({
	imgUrl: String,
	siteUrl: String,
	gitUrl: String,
	text: String,
});
onMounted(() => {
  const transitionMount = new TransitionMount();
});

onBeforeRouteLeave((to, from) => {
  const transitionLeave = new TransitionLeave();
});
</script>
<template>
	<div class="wrap">
		<div class="inner">
			<img class="main-img" :src="imgUrl" alt="" />
			<div class="link-wrap">
				<p><a :href="siteUrl" target="_blank">View Site</a></p>
				<p><a :href="gitUrl" target="_blank">GitHub</a></p>
			</div>
			<div class="text-wrap">
				<p class="title">このアプリについて</p>
				<div class="text">
					<slot></slot>
				</div>
			</div>
			<router-link class="top-link" to="/">一覧へ戻る</router-link>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/detail.scss';
</style>
