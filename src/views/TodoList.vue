<script lang="ts" setup>
import Detail from '../components/Detail.vue';
import mainImg from '../assets/img/todo_list.jpg';
</script>
<template>
	<Detail :imgUrl="mainImg" siteUrl="https://yoshizawa888.github.io/vue-todo-list/" gitUrl="https://github.com/yoshizawa888/vue-todo-list">
		<p>
			こちらはVue3でCompositionAPIを使って作成しています。<br />
			Vueの勉強の過程で色々調べていると、練習でTODOリストを作っているサイトをいくつも見ました。<br />
			詳細を見ていくとテキストボックスに文字を入力して、ボタンを押すと下にリストで表示され、リロードすると消えてしまうという簡素なものが殆どでした。<br />
			そこでリロードしても消えず、もう少し使い勝手が良いものをと思い制作を始めました。
		</p>
		<br />
		<p>
			どのような形にしようかと考えた時に、昔使っていたAsanaというTODOリストのWebアプリを思い出し、それを参考に作ってみようと思いました。<br />
			そのため、子リストはドラックで移動できるようにしています。<br />
			また、このアプリは敢えてCookieを使って実装しています。<br />
			元々localStorage等を使用した方がいいと考えており、そのように実装しようとしました。<br />
			しかし、localStorageだとブラウザにデータが残ってしまいます。<br />
			サービスとしてリリースするならその実装がいいかと思います。<br />
			ですが、ポートフォリオとして見ていただくことを想定していたため、データが残ってしまうのが心苦しくそのままブラウザを閉じても勝手に消えるCookieを採用しました。
		</p>
	</Detail>
</template>
