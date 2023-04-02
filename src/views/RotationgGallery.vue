<script lang="ts" setup>
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

import { TransitionLeave, TransitionMount } from '../assets/ts/transition';

import mainImg from '../assets/img/rotating_gallery.jpg';

// gsap.to('.contents', { opacity: 0, duration: 2 });

onMounted(() => {
	// gsap
	//   .timeline()
	//   .to('.wrap', { opacity: 0, duration: 1 })
	//   .to('.wrap', { opacity: 1, duration: 1 });
  const transitionMount = new TransitionMount();
});

onBeforeRouteLeave((to, from) => {
  const transitionLeave = new TransitionLeave();
});
</script>
<template>
	<div class="wrap">
		<div class="inner">
			<img class="main-img" :src="mainImg" alt="" />
			<div class="link-wrap">
				<p><a href="https://yoshizawa888.github.io/rotating-gallery/" target="_blank">View Site</a></p>
				<p><a href="https://github.com/yoshizawa888/rotating-gallery" target="_blank">GitHub</a></p>
			</div>
			<div class="text-wrap">
				<p class="title">このアプリについて</p>
				<p class="text">
					Three.jsを触り始めて何を作ろうかと考えた時に、どこかで見たような複数の画像が回転している物を作ってみたいと思いました。<br />
					参考にしたくて探してみたのですが、同じ様な物は見つけられませんでしたが...<br />
					しかし、オブジェクトが10個円状に並んでいるものがあったのでそれを基盤に作り始めてみました。<br />
					どの様にしたら元のオブジェクトが画像にできるのか、画像を常に外側を向かせて回転させるにはなど、ただ画像を回転させるだけ色々課題がありました。<br />
					ありましたが、ここまでは概ねスムーズに実装できました。<br />
					思いの外早く完成してしまったため、もう少し手を加えようと考えました。<br />
					そこで、画像をクリックできる様にできたら面白そうと思い、その機能も実装してみました。<br />
					クリックしているオブジェクトを取得方法を探したのですが、マウスオーバーしているオブジェクトの取得方法ばかり出てきたのでその方法をクリックイベントに直すところから始まりました。<br />
					うまく動作してもクリックが残ってしまっていたり、画像を前に出した後空いたところにうまく戻る様にする処理など色々と試行錯誤が必要でした。<br />
					また、諸々を実装し終わった後にアニメーションをGSAPで実装してみたいと思いましたが、回転させる都合上サインコサインを使っておりその辺りがイマイチ上手くいかなかったので今回は全てJSでアニメーションさせています。<br />
					機会があればGSAPでサインコサインを使ったアニメーションも実装してみたいです。<br />
					この作品を作るにあたり3Dを扱う上でサインコサインの重要性が理解できました。<br />
					数学の知識はほとんど忘れてしまっていましたが、このアプリの場合はサインはX軸、コサインはZ軸くらいの認識で良かったのは幸いでした。<br />
					使っている画像に関して正直なんでも良かったのですが、せっかくなら好きなものをと思いポケモンにしてみました。<br />
					画像の形や種類が多くて非常に使い勝手も良かったです。<br />
					最後に2段にしてそれでも隙間がとても空いていたのでテキストとパーティクルを散らせてみました。<br />
					拙いコードと拙すぎるデザインですが、ぜひ見てみてください。
				</p>
			</div>
			<router-link class="top-link" to="/">一覧へ戻る</router-link>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/detail.scss';
</style>
