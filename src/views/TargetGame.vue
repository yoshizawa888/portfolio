<script lang="ts" setup>
import Detail from '../components/Detail.vue';
import mainImg from '../assets/img/target_game.jpg';
</script>
<template>
	<Detail :imgUrl="mainImg" siteUrl="https://yoshizawa888.github.io/vue-target-game/" gitUrl="https://github.com/yoshizawa888/vue-target-game">
		<p>
			こちらはVueを一通り学んだ後、最初に作成した物です。<br />
			学んだ内容をなるべく使いたくてVue Router、Vuex、Transitonなど色々使えていると思います。<br />
			何を作ってみようか悩みましたがVueといえばWebアプリ、尚且つVuexを使いたかった都合上値のやり取りが必要だと考え、ゲームを作ってみることにしました。<br />
			また、この時に勉強した内容がVue2でOptionAPIだったためこのアプリのみ、Vue2で作成しています。
		</p>
		<br />
		<p>
			ゲーム内容はエイム練習ができるゲームアプリです。<br />
			とにかく何か1つ作ってみたかったため、ゲームの内容は簡素なものにしました。<br />
			ランキング機能も付けており、リザルト画面で5位まで表示するようにしています。
		</p>
		<br />
		<p>このアプリを作らなかったらVue2で自発的に何か作ることは無かった可能性があったので、Vue2から学び始め、どのように記述していくのかが理解できて良かったと感じてます。</p>
	</Detail>
</template>
