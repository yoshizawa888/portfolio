<script lang="ts" setup>
import Detail from '../components/Detail.vue';
import mainImg from '../assets/img/react_poke.jpg';
</script>
<template>
	<Detail :imgUrl="mainImg" siteUrl="https://yoshizawa888.github.io/react-poke/"
		gitUrl="https://github.com/yoshizawa888/react-poke">
		<p>
			こちらは、Reactの勉強のために作成してみました。<br>
			React RouterとRedux Toolkitを使用しています。<br>
			さらに、APIの勉強も兼ねてPokeAPIというものも使ってみました。
		</p>
		<br>
		<p>
			動作はしていますが、型の指定の仕方やstateの呼び出しなど、まだまだ改善点があるため現在リファクタリングを進めています。
		</p>
	</Detail>
</template>
