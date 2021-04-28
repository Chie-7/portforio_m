import Vue from 'vue'//Vueを有効にする
import App from './App.vue'//App.vueを読み込む
import store from './store'//ストアの利用を有効にする

//Vue.config.productionTip = false
//Vue.config.ignoredElements = [/^Hello/]
//Vue.config.performance = true
new Vue({
  store,//ストアの読み込み
  render: h => h(App)//App.vueをHTMLに変換
}).$mount('#app')//変換がmount(完了)したらid="app"の場所に表示させる
