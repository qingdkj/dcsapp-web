webpackJsonp([1],{"1MwX":function(t,e){},5231:function(t,e){},"83Xn":function(t,e){},COfK:function(t,e){},CqgO:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a={name:"App",data:function(){return{}},methods:{clickTitle:function(){window.open("/")}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"right"},[e("center",[e("router-view",{staticClass:"showRouterPage"})],1)],1)])},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(t){n("5231")},null,null).exports,c=n("/ocq"),i={name:"HelloWorld",data:function(){return{}},methods:{Dream:function(){window.open("http://www.shenmo.tech:420/?p=91","_self","")},FeedBack:function(){window.open("http://www.shenmo.tech:420/?p=419","_self","")},Proposal:function(){window.open("http://www.shenmo.tech:420/?p=422","_self","")},Search:function(){this.$router.push({name:"Search"})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("center",[n("br"),n("br"),t._v(" "),n("h1",{staticClass:"title"},[t._v("Spark Store")]),t._v(" "),n("h3",{staticClass:"more-info"},[t._v("\n        Have more.\n      ")]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"bt-feedback",attrs:{disabled:""},on:{click:t.Search}},[t._v("搜索应用(暂未开放)")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Dream}},[t._v("愿望墙")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.FeedBack}},[t._v("问题反馈")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Proposal}},[t._v("APP建议")]),t._v(" "),n("br")])])],1)},staticRenderFns:[]};var m=n("VU/8")(i,l,!1,function(t){n("83Xn")},"data-v-a3768dba",null).exports,p=n("mtWM"),u=n.n(p),d={name:"categoryComponent",props:["category"],data:function(){return{list:[],downloadContent:"DOWNLOAD"}},methods:{getInfo:function(){var t=this;u.a.get("http://img.shenmo.tech:38324/store/"+this.category+"/applist.json").then(function(e){t.list=e.data})},GotoJson:function(t){console.log("http://img.shenmo.tech:38324/store/"+this.category+"/"+t+"/app.json"),window.open("http://img.shenmo.tech:38324/store/"+this.category+"/"+t+"/app.json","_self","")}},mounted:function(){this.getInfo()}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("br"),t._v(" "),n("br"),t._v(" "),n("center",[n("div",{staticClass:"list"},t._l(t.list,function(e){return n("div",{key:e.tip,staticClass:"item",on:{click:function(n){return t.GotoJson(e.Pkgname)}}},[n("span",{staticClass:"show"},[n("img",{staticClass:"icon-m",attrs:{src:"http://img.shenmo.tech:38324/store/"+t.category+"/"+e.Pkgname+"/icon.png",alt:"icon"},on:{click:function(n){return t.GotoJson(e.Pkgname)}}}),t._v(" "),n("span",{staticClass:"app-title"},[n("h3",{staticClass:"app-name",attrs:{title:""+e.Name}},[t._v(t._s(e.Name))])])])])}),0)])],1)},staticRenderFns:[]};var f=n("VU/8")(d,h,!1,function(t){n("1MwX")},"data-v-8d2fb59a",null).exports,v={name:"Games",components:{categoryComponent:f}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"development"}})],1)},staticRenderFns:[]},_=n("VU/8")(v,g,!1,null,null,null).exports,C={name:"Games",components:{categoryComponent:f}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"themes"}})],1)},staticRenderFns:[]},y=n("VU/8")(C,k,!1,null,null,null).exports,b={name:"Games",components:{categoryComponent:f}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"music"}})],1)},staticRenderFns:[]},R=n("VU/8")(b,w,!1,null,null,null).exports,F={name:"Games",components:{categoryComponent:f}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"games"}})],1)},staticRenderFns:[]},x=n("VU/8")(F,V,!1,null,null,null).exports,$={name:"Games",components:{categoryComponent:f}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"image_graphics"}})],1)},staticRenderFns:[]},U=n("VU/8")($,E,!1,null,null,null).exports,P={name:"Games",components:{categoryComponent:f}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"chat"}})],1)},staticRenderFns:[]},O=n("VU/8")(P,G,!1,null,null,null).exports,S={name:"Games",components:{categoryComponent:f}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"tools"}})],1)},staticRenderFns:[]},I=n("VU/8")(S,N,!1,null,null,null).exports,A={name:"Games",components:{categoryComponent:f}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"network"}})],1)},staticRenderFns:[]},M=n("VU/8")(A,D,!1,null,null,null).exports,j={name:"Games",components:{categoryComponent:f}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"office"}})],1)},staticRenderFns:[]},T=n("VU/8")(j,W,!1,null,null,null).exports,q={name:"Games",components:{categoryComponent:f}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"others"}})],1)},staticRenderFns:[]},H=n("VU/8")(q,J,!1,null,null,null).exports,B={name:"Games",components:{categoryComponent:f}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"reading"}})],1)},staticRenderFns:[]},X=n("VU/8")(B,L,!1,null,null,null).exports,K={name:"Games",components:{categoryComponent:f},data:function(){return{}},methods:{},mounted:function(){}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"video"}})],1)},staticRenderFns:[]},z=n("VU/8")(K,Z,!1,null,null,null).exports,Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{placeholder:"搜索您想要的应用"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),n("button",{staticClass:"search-button",on:{click:t.search}},[t._v("搜索")])])},staticRenderFns:[]};var Y=n("VU/8")({name:"Search",data:function(){return{list:[],searchInput:"",downloadContent:"DOWNLOAD"}},methods:{search:function(){}},mounted:function(){}},Q,!1,function(t){n("CqgO"),n("qfqr")},"data-v-59488643",null).exports,tt={name:"darkMainpage",data:function(){return{}},methods:{Dream:function(){window.open("http://www.shenmo.tech:420/?p=91","_self","")},FeedBack:function(){window.open("http://www.shenmo.tech:420/?p=419","_self","")},Proposal:function(){window.open("http://www.shenmo.tech:420/?p=422","_self","")},Search:function(){this.$router.push({name:"Search"})}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("center",[n("br"),n("br"),t._v(" "),n("h1",{staticClass:"title"},[t._v("Spark Store")]),t._v(" "),n("h3",{staticClass:"more-info"},[t._v("\n        Have more.\n      ")]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"bt-feedback",attrs:{disabled:""},on:{click:t.Search}},[t._v("搜索应用(暂未开放)")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Dream}},[t._v("愿望墙")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.FeedBack}},[t._v("问题反馈")]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bt-feedback",on:{click:t.Proposal}},[t._v("APP建议")]),t._v(" "),n("br")])])],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("W8jp")},"data-v-364ba3b8",null).exports,ot={name:"categoryComponent",props:["category"],data:function(){return{list:[],downloadContent:"DOWNLOAD"}},methods:{getInfo:function(){var t=this;u.a.get("http://img.shenmo.tech:38324/store/"+this.category+"/applist.json").then(function(e){t.list=e.data})},GotoJson:function(t){console.log("http://img.shenmo.tech:38324/store/"+this.category+"/"+t+"/app.json"),window.open("http://img.shenmo.tech:38324/store/"+this.category+"/"+t+"/app.json","_self","")}},mounted:function(){this.getInfo()}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("br"),t._v(" "),n("br"),t._v(" "),n("center",[n("div",{staticClass:"list"},t._l(t.list,function(e){return n("div",{key:e.tip,staticClass:"item",on:{click:function(n){return t.GotoJson(e.Pkgname)}}},[n("span",{staticClass:"show"},[n("img",{staticClass:"icon-m",attrs:{src:"http://img.shenmo.tech:38324/store/"+t.category+"/"+e.Pkgname+"/icon.png",alt:"icon"},on:{click:function(n){return t.GotoJson(e.Pkgname)}}}),t._v(" "),n("span",{staticClass:"app-title"},[n("h3",{staticClass:"app-name",attrs:{title:""+e.Name}},[t._v(t._s(e.Name))])])])])}),0)])],1)},staticRenderFns:[]};var rt=n("VU/8")(ot,at,!1,function(t){n("COfK")},"data-v-788f9aa6",null).exports,st={name:"darkProgramming",components:{categoryComponent:rt}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"development"}})],1)},staticRenderFns:[]},it=n("VU/8")(st,ct,!1,null,null,null).exports,lt={name:"darkThemes",components:{categoryComponent:rt}},mt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"themes"}})],1)},staticRenderFns:[]},pt=n("VU/8")(lt,mt,!1,null,null,null).exports,ut={name:"darkMusicAndSound",components:{categoryComponent:rt}},dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"music"}})],1)},staticRenderFns:[]},ht=n("VU/8")(ut,dt,!1,null,null,null).exports,ft={name:"darkGames",components:{categoryComponent:rt}},vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"games"}})],1)},staticRenderFns:[]},gt=n("VU/8")(ft,vt,!1,null,null,null).exports,_t={name:"darkPhotos",components:{categoryComponent:rt}},Ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"image_graphics"}})],1)},staticRenderFns:[]},kt=n("VU/8")(_t,Ct,!1,null,null,null).exports,yt={name:"darkRelations",components:{categoryComponent:rt}},bt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"chat"}})],1)},staticRenderFns:[]},wt=n("VU/8")(yt,bt,!1,null,null,null).exports,Rt={name:"darkTools",components:{categoryComponent:rt}},Ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"tools"}})],1)},staticRenderFns:[]},Vt=n("VU/8")(Rt,Ft,!1,null,null,null).exports,xt={name:"darkNetwork",components:{categoryComponent:rt}},$t={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"network"}})],1)},staticRenderFns:[]},Et=n("VU/8")(xt,$t,!1,null,null,null).exports,Ut={name:"darkOffice",components:{categoryComponent:rt}},Pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"office"}})],1)},staticRenderFns:[]},Gt=n("VU/8")(Ut,Pt,!1,null,null,null).exports,Ot={name:"darkOthers",components:{categoryComponent:rt}},St={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"others"}})],1)},staticRenderFns:[]},Nt=n("VU/8")(Ot,St,!1,null,null,null).exports,It={name:"darkReading",components:{categoryComponent:rt}},At={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"reading"}})],1)},staticRenderFns:[]},Dt=n("VU/8")(It,At,!1,null,null,null).exports,Mt={name:"darkVideos",components:{categoryComponent:rt},data:function(){return{}},methods:{},mounted:function(){}},jt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("categoryComponent",{attrs:{category:"video"}})],1)},staticRenderFns:[]},Wt=n("VU/8")(Mt,jt,!1,null,null,null).exports,Tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("br"),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{placeholder:"搜索您想要的应用"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),n("button",{staticClass:"search-button",on:{click:t.search}},[t._v("搜索")])])},staticRenderFns:[]};var qt=n("VU/8")({name:"darkSearch",data:function(){return{list:[],searchInput:"",downloadContent:"DOWNLOAD"}},methods:{search:function(){}},mounted:function(){}},Tt,!1,function(t){n("Zml6")},"data-v-3fd6df6f",null).exports;o.a.use(c.a);var Jt=new c.a({routes:[{path:"/",name:"MainPage",component:m},{path:"/dark",name:"darkMainPage",component:nt},{path:"/programming",name:"Programming",component:_},{path:"/darkprogramming",name:"darkProgramming",component:it},{path:"/themes",name:"Themes",component:y},{path:"/darkthemes",name:"darkThemes",component:pt},{path:"/musicandsound",name:"MusicAndSound",component:R},{path:"/darkmusicandsound",name:"darkMusicAndSound",component:ht},{path:"/games",name:"Games",component:x},{path:"/darkgames",name:"darkGames",component:gt},{path:"/photos",name:"Photos",component:U},{path:"/darkphotos",name:"darkPhotos",component:kt},{path:"/relations",name:"Relations",component:O},{path:"/darkrelations",name:"darkRelations",component:wt},{path:"/tools",name:"Tools",component:I},{path:"/darktools",name:"darkTools",component:Vt},{path:"/network",name:"Network",component:M},{path:"/darknetwork",name:"darkNetwork",component:Et},{path:"/office",name:"Office",component:T},{path:"/darkoffice",name:"darkOffice",component:Gt},{path:"/others",name:"Others",component:H},{path:"/darkothers",name:"darkOthers",component:Nt},{path:"/reading",name:"Reading",component:X},{path:"/darkreading",name:"darkReading",component:Dt},{path:"/videos",name:"Videos",component:z},{path:"/darkvideos",name:"darkVideos",component:Wt},{path:"/search",name:"Search",component:Y},{path:"/darksearch",name:"darkSearch",component:qt}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:Jt,components:{App:s},template:"<App/>"})},W8jp:function(t,e){},Zml6:function(t,e){},qfqr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5b928008a2e5abeb09f1.js.map