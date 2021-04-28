<template>
  <div id="app">
    
    <Portfolio /><!--コンポーネント「Portfolio.vue」の内容がここに表示される-->

    <!--ここから作品-->
    <div id="works"><!--ここからworks-->
			<h2>Works</h2>
			<div class="works_inner">
				<ul>
					<li v-for="works of myWorks" v-bind:key="works.title"><!--ここから作品一つ目-->
						<p class="works_img"><a v-bind:href="works.href1"><img v-bind:src="works.src1" alt=""></a></p>
						<h3>{{works.title}}</h3>
						<p>{{works.lang}}</p>
						<p>{{works.time1}}</p>
						<p>{{works.content}}</p>
					</li><!--ここまで作品一つ目-->
				</ul>
			</div><!--ここまでinner-->
    </div><!--ここまでworks-->
  </div>
</template>

<style scoped>

</style>


<script>
//「components」フォルダーの「Portfolio.vue」を読み込み「Portfolio」の名前で略して覚えておく
import Portfolio from './components/Portfolio.vue'
//ストアを取得するための「mapGetters」関数を有効にする
import { mapGetters } from 'vuex'

export default {//importしたものを画面に出力する
  name: 'app',//<div id="app">の出力場所指定
  components: {
    Portfolio//importで「Portfolio」と略して覚えた中身が出力する内容だと定義する
  },
  computed: mapGetters(['myWorks']),//「index.js」の中の「myWorks」の名のゲッターを呼び出す
  data() {//ストアの中の各データの型を文字列型と定義しておく
    return {
      title: '',
      src1: '',
      lang: '',
      time1: '',
      content: '',
      href1: ''
    }
  }
}
</script>

<style>
</style>
