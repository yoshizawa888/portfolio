<script lang="ts" setup>
import mainImg from '../assets/img/seamless_color_ball.jpg';
</script>
<template>
	<div class="wrap">
		<div class="inner">
			<img class="main-img" :src="mainImg" alt="" />
			<div class="link-wrap">
				<p><a href="https://yoshizawa888.github.io/seamless-color-ball/" target="_blank">View Site</a></p>
				<p><a href="https://github.com/yoshizawa888/seamless-color-ball" target="_blank">GitHub</a></p>
			</div>
			<div class="text-wrap">
				<p class="title">このアプリについて</p>
				<p class="text">
					このアプリはシームレスな画面遷移はどのように実装するのだろうかと言う疑問から出来上がりました。<br />
					Vue Routerを使いページ遷移しつつも真ん中のボールはそれを感じさせないように実装しています。<br />
					最初は動かないオブジェクトにページによって色がフワッとつくだけの物でした。<br />
					それで原理自体はわかったのですが、せっかくならもう少し凝った物にしようともう少し手を加えてみました。<br />
					Three.jsの勉強をしていく中でShaderという物を使うと複雑な動きも実装できることを知ったので、そちらも合わせて実装することにしました。<br />
					このShaderはGLSLという言語を使用します。<br />
					波を実装しただけだとせっかくの3Dにもかかわらず立体感が全くなかったので、波の高さに応じての色と影をつけることで立体感を出しています。<br />
					また、Noiseを使ってみたく、Redの色とGreenの動きは適当なNoiseを使っています。<br />
					このようにShaderを使うにあたり、最初はJSで付けていた色をGLSL側でつけるようになり、その影響で色や動きが上手くシームレスにならなくなってしまいました。<br />
					これを解消するのにGLSLのmixという関数を使いました。<br />
					mixは第1、第2引数を第3引数によって割合を決めるという関数です。<br />
					この関数と第3引数をGSAPで操作することでシームレスな挙動にする事ができました。<br />
					現状の実装方法が最適なのかはわかりませんが、上手く実装できて幸いでした。<br />
					最後に、このアプリはボールをマウスやタッチで回転させる事ができるようにしてあります。<br />
					RedはNoiseを使っている関係でわかりにくいですが、ぜひ触ってみてください。
				</p>
			</div>
			<router-link class="top-link" to="/">一覧へ戻る</router-link>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/detail.scss';
</style>
