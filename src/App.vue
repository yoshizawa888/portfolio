<script setup lang="ts">
import { ref } from 'vue';
const isPC = ref(window.innerWidth >= 769);
const handleResize = () => {
	isPC.value = window.innerWidth >= 768;
};
window.addEventListener('resize', handleResize);
</script>

<template>
	<div id="content">
		<sf-vue-animated-cursor v-if="isPC" :width="40" :height="40" borderColor="#fff" bgColor="transparent" :borderWidth="1" hoverable="is-hover" :scaleOnHover="2" :clickAnimation="false"></sf-vue-animated-cursor>
		<router-view v-slot="{ Component }">
			<transition mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<style leng="scss" scoped>
@import './assets/scss/app.scss';
</style>
