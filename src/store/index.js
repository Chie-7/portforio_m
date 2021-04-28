//VueとVuexを読み込んで有効化する
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//データを格納するストアを作成する
export default new Vuex.Store({
  //stateオプションに具体的にデータを書いていく
  state: {
    works:[ //「works」の名で連想配列を作る
      {
        title: '新型コロナウイルス状況確認アプリ',//作品名
        src1: 'images/works4.png',//作品の画像のファイル名
        lang: '開発言語：Vue.js',
        // time1: '',
        content: 'VueCLIを使い作成しました。新型コロナウイルス感染者のデータは内閣官房のAPI、リアルタイムメッセージ機能については、Firebaseを使用しております。',
        href1: 'http://mu7799.starfree.jp/covid-app/'//作品をサーバーへアップロードし、そのURLを書く
      },
      {
        title: 'toDoメモアプリ',//作品名
        src1: 'images/works3.png',//作品の画像のファイル名
        lang: '開発言語：Vue.js',
        // time1: '',
        // content: '',
        href1: 'http://mu7799.starfree.jp/todo/todo.html'//作品をサーバーへアップロードし、そのURLを書く
      },
      {
        title: 'デジタル時計',//作品名
        src1: 'images/works2.png',//作品の画像のファイル名
        lang: '開発言語：Javascript/Vue.js',
        // time1: '',
        // content: '',
        href1: 'http://mu7799.starfree.jp/watch/watch.html'//作品をサーバーへアップロードし、そのURLを書く
      },
      {
        title: '電卓アプリ',//作品名
        src1: 'images/works1.png',//作品の画像のファイル名
        lang: '開発言語：Vue.js',
        // time1: '',
        // content: '。',
        href1: 'http://mu7799.starfree.jp/calc/dentaku.html'//作品をサーバーへアップロードし、そのURLを書く
      }
    ]
  },
  //state
  getters: {
    myWorks(state) { //「myWorks」の名でゲッターを作成
      return state.works //stateの中の「works」名の配列の値を取得して呼ばれたところへ渡す

    }
  }
})
