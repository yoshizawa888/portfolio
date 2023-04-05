<script lang="ts" setup>
import Detail from '../components/Detail.vue';
import mainImg from '../assets/img/particle_wave.jpg';
</script>
<template>
	<Detail :imgUrl="mainImg" siteUrl="https://yoshizawa888.github.io/particle-wave/" gitUrl="https://github.com/yoshizawa888/particle-wave">
		<p>
			こちらを作成しようと思ったきっかけは、学生の頃に卒業制作でUnityのVFXでパーティクルを触れたことがきっかけです。<br />
			作っていて楽しくとても綺麗だったのでWebでもパーティクルがメインのものを作成してみました。
		</p>
		<br />
		<p>
			構造は比較的シンプルです。<br>
			パーティクルが生成される2本の領域を生成し、左から右に流してサイン、コサイン、タンジェントで動きをつけています。<br>
			色は赤を固定値にして青と緑は座標によって色が変わるようにしてグラデーションにしてみました。<br>
			本当はもっとパーティクルを細かくして数を増やしたかったのですが、PCへの負荷を鑑みて今の形になっています。
		</p>
	</Detail>
</template>
