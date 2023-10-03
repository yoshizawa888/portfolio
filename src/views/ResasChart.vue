<script lang="ts" setup>
import Detail from '../components/Detail.vue';
import mainImg from '../assets/img/resas_chart.jpg';
</script>
<template>
	<Detail :imgUrl="mainImg" siteUrl="https://yoshizawa888.github.io/resas-chart/"
		gitUrl="https://github.com/yoshizawa888/resas-chart">
		<p>
			こちらは、RESAS APIで都道府県と人口を取得し、vue3-highchartsでグラフを出しています。
		</p>
		<br>
		<p>
			制作した経緯はグラフを使ってみたかったことと、APIのデータ取得の練習です。<br>
			さらに、コマンドでeslintが動くように簡単なコマンドも書いてみました。<br>
		</p>
	</Detail>
</template>
