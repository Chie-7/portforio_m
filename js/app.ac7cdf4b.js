(function(t){function e(e){for(var i,a,o=e[0],l=e[1],u=e[2],p=0,v=[];p<o.length;p++)a=o[p],s[a]&&v.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(v.length)v.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},s={app:0},n=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Portfolio"),r("div",{attrs:{id:"works"}},[r("h2",[t._v("Works")]),r("div",{staticClass:"works_inner"},[r("ul",t._l(t.myWorks,function(e){return r("li",{key:e.title},[r("p",{staticClass:"works_img"},[r("a",{attrs:{href:e.href1}},[r("img",{attrs:{src:e.src1,alt:""}})])]),r("h3",[t._v(t._s(e.title))]),r("p",[t._v(t._s(e.lang))]),r("p",[t._v(t._s(e.time1))]),r("p",[t._v(t._s(e.content))])])}),0)])])],1)},n=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("div",{attrs:{id:"profile"}},[r("h2",[t._v("Profile")]),r("div",{staticClass:"prof_inner"},[r("dl",[r("dt",[t._v("Name:")]),r("dd",[t._v("Chieko Muraoka")]),r("dt",[t._v("Birthday:")]),r("dd",[t._v("1987/07/19")]),r("dt",[t._v("Hobby:")]),r("dd",[t._v("tea ceremony")]),r("dd",[t._v("Webアプリ開発を学びながら、Webクリエイターを目指して就職活動に励んでいます。"),r("br"),t._v("\n\t\t\t\t\tJavascript、Vue.js、レスポンシブを勉強中です。"),r("br"),t._v("VueCLIを使い、簡単なwebアプリを作成しました。")])])])]),r("div",{attrs:{id:"skill"}},[r("h2",[t._v("Skill")]),r("div",{staticClass:"skill_inner"},[r("ul",[r("li",[r("p",[r("img",{attrs:{src:"images/vscode.svg",alt:""}})]),r("h3",[t._v("VisualStudioCode")])]),r("li",[r("p",[r("img",{attrs:{src:"images/html-5.svg",alt:""}})]),r("h3",[t._v("HTML5")])]),r("li",[r("p",[r("img",{attrs:{src:"images/css-3.svg",alt:""}})]),r("h3",[t._v("CSS3")])]),r("li",[r("p",[r("img",{attrs:{src:"images/javascript.svg",alt:""}})]),r("h3",[t._v("JavaScript")])]),r("li",[r("p",[r("img",{attrs:{src:"images/vue.svg",alt:""}})]),r("h3",[t._v("Vue.js")])]),r("li",[r("p",[r("img",{attrs:{src:"images/firebase.svg",alt:""}})]),r("h3",[t._v("Firebase")])]),r("li",[r("p",[r("img",{attrs:{src:"images/git.svg",alt:""}})]),r("h3",[t._v("Git")])]),r("li",[r("p",[r("img",{attrs:{src:"images/github.svg",alt:""}})]),r("h3",[t._v("GitHub")])])])])])])}],l={name:"Portfolio",props:{}},u=l,c=r("2877"),p=Object(c["a"])(u,a,o,!1,null,null,null),v=p.exports,f=r("2f62"),d={name:"app",components:{Portfolio:v},computed:Object(f["b"])(["myWorks"]),data:function(){return{title:"",src1:"",lang:"",time1:"",content:"",href1:""}}},g=d,_=Object(c["a"])(g,s,n,!1,null,"24ddfb40",null),h=_.exports;i["a"].use(f["a"]);var m=new f["a"].Store({state:{works:[{title:"新型コロナウイルス状況確認アプリ",src1:"images/works4.png",lang:"開発言語：Vue.js",content:"VueCLIを使い作成しました。新型コロナウイルス感染者のデータは内閣官房のAPI、リアルタイムメッセージ機能については、Firebaseを使用しております。",href1:"https://chie-7.github.io/covid-19_app/"},{title:"toDoメモアプリ",src1:"images/works3.png",lang:"開発言語：Vue.js",href1:"https://chie-7.github.io/todo-app/"}]},getters:{myWorks:function(t){return t.works}}});new i["a"]({store:m,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.ac7cdf4b.js.map