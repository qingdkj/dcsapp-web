webpackJsonp([1],{CqgO:function(t,e){},"J+vt":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a={name:"App",data:function(){return{}},methods:{clickTitle:function(){window.open("/")}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"right"},[e("center",[e("router-view",{staticClass:"showRouterPage"})],1)],1)])},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(t){n("Q/QU")},null,null).exports,c=n("/ocq"),i={name:"HelloWorld",data:function(){return{}},methods:{FeedBack:function(){window.open("https://www.deepinos.org/t/spark-feedback","_self","")},Wishwall:function(){window.open("https://www.deepinos.org/t/Wish-wall","_self","")},Monitor:function(){window.open("https://status.spark-app.store","_self","")},officialwebsite:function(){window.open(" https://www.spark-app.store/","_self","")},distrowatch:function(){window.open("https://distrowatch.com/table.php?distribution=deepin","_self","")},GiteeFeedBack:function(){window.open("https://gitee.com/deepin-community-store/feedback","_self","")},Contri:function(){window.open("https://gitee.com/deepin-community-store","_self","")},Donate:function(){window.open("https://spark.deepinos.org.cn/","_self","")},Search:function(){this.$router.push({name:"Search"})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("center",[n("br"),n("br"),t._v(" "),n("h1",{staticClass:"title"},[t._v("Spark Store")]),t._v(" "),n("h3",{staticClass:"more-info"},[t._v("\n        Have more.\n      ")]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"bt-feedback",on:{click:t.distrowatch}},[n("b",[t._v("Deepin国际排名")])]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Wishwall}},[t._v("愿望墙")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.FeedBack}},[t._v("反馈中心")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Contri}},[t._v("参与贡献")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Donate}},[t._v("随喜捐赠")]),t._v(" "),n("br")])])],1)},staticRenderFns:[]};var p=n("VU/8")(i,l,!1,function(t){n("Vrbv")},"data-v-60cfef7d",null).exports,m=n("mtWM"),u=n.n(m),d={name:"categoryComponent",props:["category"],data:function(){return{list:[],downloadContent:"DOWNLOAD",source:"https://json.jerrywang.top",imgSource:"https://cdn.jsdelivr.net/gh/Jerrywang959/jsonpng@master"}},methods:{getInfo:function(){var t=this;u.a.get(this.source+"/store/"+this.category+"/applist.json").then(function(e){t.list=e.data})},GotoJson:function(t){console.log(this.source+"/store/"+this.category+"/"+t+"/app.json"),window.open(this.source+"/store/"+this.category+"/"+t+"/app.json","_self","")}},mounted:function(){this.getInfo()}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("br"),t._v(" "),n("br"),t._v(" "),n("center",[n("div",{staticClass:"list"},t._l(t.list,function(e){return n("div",{key:e.tip,staticClass:"item",on:{click:function(n){return t.GotoJson(e.Pkgname)}}},[n("span",{staticClass:"show"},[n("img",{staticClass:"icon-m",attrs:{src:t.imgSource+"/store/"+t.category+"/"+e.Pkgname+"/icon.png",alt:"icon"},on:{click:function(n){return t.GotoJson(e.Pkgname)}}}),t._v(" "),n("span",{staticClass:"app-title"},[n("div",[n("h3",{staticClass:"app-name",attrs:{title:""+e.Name}},[t._v(t._s(e.Name))])]),t._v(" "),n("div",[n("h4",{staticClass:"app-more",attrs:{title:""+e.More}},[t._v(t._s(e.More))])])])])])}),0)])],1)},staticRenderFns:[]};var f=n("VU/8")(d,h,!1,function(t){n("J+vt")},"data-v-79807570",null).exports,v={name:"Games",components:{categoryComponent:f}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"development"}})],1)},staticRenderFns:[]},_=n("VU/8")(v,g,!1,null,null,null).exports,k={name:"Games",components:{categoryComponent:f}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"themes"}})],1)},staticRenderFns:[]},y=n("VU/8")(k,C,!1,null,null,null).exports,w={name:"Games",components:{categoryComponent:f}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"music"}})],1)},staticRenderFns:[]},F=n("VU/8")(w,b,!1,null,null,null).exports,R={name:"Games",components:{categoryComponent:f}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"games"}})],1)},staticRenderFns:[]},x=n("VU/8")(R,V,!1,null,null,null).exports,U={name:"Games",components:{categoryComponent:f}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"image_graphics"}})],1)},staticRenderFns:[]},E=n("VU/8")(U,$,!1,null,null,null).exports,G={name:"Games",components:{categoryComponent:f}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"chat"}})],1)},staticRenderFns:[]},S=n("VU/8")(G,O,!1,null,null,null).exports,P={name:"Games",components:{categoryComponent:f}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"tools"}})],1)},staticRenderFns:[]},N=n("VU/8")(P,j,!1,null,null,null).exports,D={name:"Games",components:{categoryComponent:f}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"network"}})],1)},staticRenderFns:[]},M=n("VU/8")(D,I,!1,null,null,null).exports,W={name:"Games",components:{categoryComponent:f}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"office"}})],1)},staticRenderFns:[]},A=n("VU/8")(W,J,!1,null,null,null).exports,T={name:"Games",components:{categoryComponent:f}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"others"}})],1)},staticRenderFns:[]},B=n("VU/8")(T,q,!1,null,null,null).exports,H={name:"Games",components:{categoryComponent:f}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"reading"}})],1)},staticRenderFns:[]},Q=n("VU/8")(H,L,!1,null,null,null).exports,Z={name:"Games",components:{categoryComponent:f},data:function(){return{}},methods:{},mounted:function(){}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"video"}})],1)},staticRenderFns:[]},K=n("VU/8")(Z,z,!1,null,null,null).exports,X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{placeholder:"搜索您想要的应用"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),n("button",{staticClass:"search-button",on:{click:t.search}},[t._v("搜索")])])},staticRenderFns:[]};var Y=n("VU/8")({name:"Search",data:function(){return{list:[],searchInput:"",downloadContent:"DOWNLOAD"}},methods:{search:function(){}},mounted:function(){}},X,!1,function(t){n("CqgO"),n("qfqr")},"data-v-59488643",null).exports,tt={name:"darkMainpage",data:function(){return{}},methods:{FeedBack:function(){window.open("https://www.deepinos.org/t/spark-feedback","_self","")},Wishwall:function(){window.open("https://www.deepinos.org/t/Wish-wall","_self","")},Monitor:function(){window.open("https://status.spark-app.store","_self","")},officialwebsite:function(){window.open(" https://www.spark-app.store/","_self","")},distrowatch:function(){window.open("https://distrowatch.com/table.php?distribution=deepin","_self","")},GiteeFeedBack:function(){window.open("https://gitee.com/deepin-community-store/feedback","_self","")},Contri:function(){window.open("https://gitee.com/deepin-community-store","_self","")},Donate:function(){window.open("https://spark.deepinos.org.cn/","_self","")},Search:function(){this.$router.push({name:"Search"})}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("center",[n("br"),n("br"),t._v(" "),n("h1",{staticClass:"title"},[t._v("Spark Store")]),t._v(" "),n("h3",{staticClass:"more-info"},[t._v("\n        Have more.\n      ")]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"bt-feedback",on:{click:t.distrowatch}},[n("b",[t._v("Deepin国际排名")])]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Wishwall}},[t._v("愿望墙")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.FeedBack}},[t._v("反馈中心")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Contri}},[t._v("参与贡献")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Donate}},[t._v("随喜捐赠")]),t._v(" "),n("br")])])],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("Zzhy")},"data-v-c4aebae6",null).exports,ot={name:"categoryComponent",props:["category"],data:function(){return{list:[],downloadContent:"DOWNLOAD",source:"https://json.jerrywang.top",imgSource:"https://cdn.jsdelivr.net/gh/Jerrywang959/jsonpng@master"}},methods:{getInfo:function(){var t=this;u.a.get(this.source+"/store/"+this.category+"/applist.json").then(function(e){t.list=e.data})},GotoJson:function(t){console.log(this.source+"/store/"+this.category+"/"+t+"/app.json"),window.open(this.source+"/store/"+this.category+"/"+t+"/app.json","_self","")}},mounted:function(){this.getInfo()}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("br"),t._v(" "),n("br"),t._v(" "),n("center",[n("div",{staticClass:"list"},t._l(t.list,function(e){return n("div",{key:e.tip,staticClass:"item",on:{click:function(n){return t.GotoJson(e.Pkgname)}}},[n("span",{staticClass:"show"},[n("img",{staticClass:"icon-m",attrs:{src:t.imgSource+"/store/"+t.category+"/"+e.Pkgname+"/icon.png",alt:"icon"},on:{click:function(n){return t.GotoJson(e.Pkgname)}}}),t._v(" "),n("span",{staticClass:"app-title"},[n("div",[n("h3",{staticClass:"app-name",attrs:{title:""+e.Name}},[t._v(t._s(e.Name))])]),t._v(" "),n("div",[n("h4",{staticClass:"app-more",attrs:{title:""+e.More}},[t._v(t._s(e.More))])])])])])}),0)])],1)},staticRenderFns:[]};var rt=n("VU/8")(ot,at,!1,function(t){n("oOTF")},"data-v-46772fdd",null).exports,st={name:"darkProgramming",components:{categoryComponent:rt}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"development"}})],1)},staticRenderFns:[]},it=n("VU/8")(st,ct,!1,null,null,null).exports,lt={name:"darkThemes",components:{categoryComponent:rt}},pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"themes"}})],1)},staticRenderFns:[]},mt=n("VU/8")(lt,pt,!1,null,null,null).exports,ut={name:"darkMusicAndSound",components:{categoryComponent:rt}},dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"music"}})],1)},staticRenderFns:[]},ht=n("VU/8")(ut,dt,!1,null,null,null).exports,ft={name:"darkGames",components:{categoryComponent:rt}},vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"games"}})],1)},staticRenderFns:[]},gt=n("VU/8")(ft,vt,!1,null,null,null).exports,_t={name:"darkPhotos",components:{categoryComponent:rt}},kt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"image_graphics"}})],1)},staticRenderFns:[]},Ct=n("VU/8")(_t,kt,!1,null,null,null).exports,yt={name:"darkRelations",components:{categoryComponent:rt}},wt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"chat"}})],1)},staticRenderFns:[]},bt=n("VU/8")(yt,wt,!1,null,null,null).exports,Ft={name:"darkTools",components:{categoryComponent:rt}},Rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"tools"}})],1)},staticRenderFns:[]},Vt=n("VU/8")(Ft,Rt,!1,null,null,null).exports,xt={name:"darkNetwork",components:{categoryComponent:rt}},Ut={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"network"}})],1)},staticRenderFns:[]},$t=n("VU/8")(xt,Ut,!1,null,null,null).exports,Et={name:"darkOffice",components:{categoryComponent:rt}},Gt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"office"}})],1)},staticRenderFns:[]},Ot=n("VU/8")(Et,Gt,!1,null,null,null).exports,St={name:"darkOthers",components:{categoryComponent:rt}},Pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"others"}})],1)},staticRenderFns:[]},jt=n("VU/8")(St,Pt,!1,null,null,null).exports,Nt={name:"darkReading",components:{categoryComponent:rt}},Dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"reading"}})],1)},staticRenderFns:[]},It=n("VU/8")(Nt,Dt,!1,null,null,null).exports,Mt={name:"darkVideos",components:{categoryComponent:rt},data:function(){return{}},methods:{},mounted:function(){}},Wt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"video"}})],1)},staticRenderFns:[]},Jt=n("VU/8")(Mt,Wt,!1,null,null,null).exports,At={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{placeholder:"搜索您想要的应用"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),n("button",{staticClass:"search-button",on:{click:t.search}},[t._v("搜索")])])},staticRenderFns:[]};var Tt=n("VU/8")({name:"darkSearch",data:function(){return{list:[],searchInput:"",downloadContent:"DOWNLOAD"}},methods:{search:function(){}},mounted:function(){}},At,!1,function(t){n("Zml6")},"data-v-3fd6df6f",null).exports;o.a.use(c.a);var qt=new c.a({routes:[{path:"/",name:"MainPage",component:p},{path:"/dark",name:"darkMainPage",component:nt},{path:"/programming",name:"Programming",component:_},{path:"/darkprogramming",name:"darkProgramming",component:it},{path:"/themes",name:"Themes",component:y},{path:"/darkthemes",name:"darkThemes",component:mt},{path:"/musicandsound",name:"MusicAndSound",component:F},{path:"/darkmusicandsound",name:"darkMusicAndSound",component:ht},{path:"/games",name:"Games",component:x},{path:"/darkgames",name:"darkGames",component:gt},{path:"/photos",name:"Photos",component:E},{path:"/darkphotos",name:"darkPhotos",component:Ct},{path:"/relations",name:"Relations",component:S},{path:"/darkrelations",name:"darkRelations",component:bt},{path:"/tools",name:"Tools",component:N},{path:"/darktools",name:"darkTools",component:Vt},{path:"/network",name:"Network",component:M},{path:"/darknetwork",name:"darkNetwork",component:$t},{path:"/office",name:"Office",component:A},{path:"/darkoffice",name:"darkOffice",component:Ot},{path:"/others",name:"Others",component:B},{path:"/darkothers",name:"darkOthers",component:jt},{path:"/reading",name:"Reading",component:Q},{path:"/darkreading",name:"darkReading",component:It},{path:"/videos",name:"Videos",component:K},{path:"/darkvideos",name:"darkVideos",component:Jt},{path:"/search",name:"Search",component:Y},{path:"/darksearch",name:"darkSearch",component:Tt}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:qt,components:{App:s},template:"<App/>"})},"Q/QU":function(t,e){},Vrbv:function(t,e){},Zml6:function(t,e){},Zzhy:function(t,e){},oOTF:function(t,e){},qfqr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c891c873a01ddc94f0a6.js.map