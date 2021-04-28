<template>
<div class="hello">
    <div id="profile"><!--ここからprofile-->
			<h2>Profile</h2>
			<div class="prof_inner">
				<!-- <p><img src="images/profile.jpg" alt=""></p> -->
				<dl>
					<dt>Name:</dt>
					<dd>Chieko Muraoka</dd>
          <dt>Birthday:</dt>
          <dd>1987/07/19</dd>
					<dt>Hobby:</dt>
					<dd>tea ceremony</dd>
					<dd>Webアプリ開発を学びながら、Webクリエイターを目指して就職活動に励んでいます。<br>
					Javascript、Vue.js、レスポンシブを勉強中です。<br>VueCLIを使い、簡単なwebアプリを作成しました。</dd>
				</dl>
			</div><!--ここまでinner-->
    </div><!--ここまでprofile-->

    <div id="skill"><!--ここからskill-->
			<h2>Skill</h2>
			<div class="skill_inner">
				<ul>
					<li><!--ここからVS codeのスキル-->
						<p><img src="images/skill_icon02.jpg" alt=""></p>
						<h3>VisualStudioCode</h3>
						Webサイトやアプリ開発のコーディングに使用。<br>
					</li><!--ここまでVS codeのスキル-->
					<li><!--ここからHTML5のスキル-->
						<p><img src="images/skill_icon03.jpg" alt=""></p>
						<h3>HTML5/CSS3</h3>
						レスポンシブなど基本的なコーディングは出来ます。<br>
					</li><!--ここまでHTML5のスキル-->
					<li><!--ここからJSのスキル-->
						<p><img src="images/skill_icon04.jpg" alt=""></p>
						<h3>JavaScript</h3>
						あまり複雑なコードは出来ませんがライブラリの実装は出来ます。<br>
					</li><!--ここまでJSのスキル-->
					<li><!--ここからvueのスキル-->
						<p><img src="images/skill_icon05.jpg" alt=""></p>
						<h3>Vue.js</h3>
						<!-- <p>学習歴1年。<br> -->
						高度なプログラムは出来ませんが簡単なアプリ開発は出来ます。<br>
						<!-- <img src="images/skill2.png"></p> -->
					</li><!--ここまでVueのスキル-->
				</ul>
			</div><!--ここまでinner-->
    </div><!--ここまでskill-->
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
