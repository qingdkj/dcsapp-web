webpackJsonp([1],{"242K":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),a={name:"App",data:function(){return{}},methods:{clickTitle:function(){window.open("/")}}},r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"right"},[n("center",[n("router-view",{staticClass:"showRouterPage"})],1)],1)])},staticRenderFns:[]};var s=e("VU/8")(a,r,!1,function(t){e("p8SH")},null,null).exports,c=e("/ocq"),i={name:"HelloWorld",data:function(){return{}},methods:{Dream:function(){window.open("http://www.shenmo.tech:420/?p=91","_self","")},FeedBack:function(){window.open("http://www.shenmo.tech:420/?p=419","_self","")},Proposal:function(){window.open("http://www.shenmo.tech:420/?p=422","_self","")},Search:function(){this.$router.push({name:"Search"})}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("center",[e("br"),e("br"),t._v(" "),e("h1",{staticClass:"title"},[t._v("Spark Store")]),t._v(" "),e("h3",{staticClass:"more-info"},[t._v("\n      Have more.\n    ")]),t._v(" "),e("div",{staticClass:"buttons"},[e("button",{staticClass:"bt-feedback",attrs:{disabled:""},on:{click:t.Search}},[t._v("搜索应用(暂未开放)")]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"bt-feedback",on:{click:t.Dream}},[t._v("愿望墙")]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"bt-feedback",on:{click:t.FeedBack}},[t._v("问题反馈")]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"bt-feedback",on:{click:t.Proposal}},[t._v("APP建议")]),t._v(" "),e("br")])])],1)},staticRenderFns:[]};var m=e("VU/8")(i,u,!1,function(t){e("uLvj")},"data-v-08b2a748",null).exports,d=e("mtWM"),p=e.n(d),l={name:"categoryComponent",props:["category"],data:function(){return{list:[],downloadContent:"DOWNLOAD"}},methods:{getInfo:function(){var t=this;p.a.get("http://dcstore.shenmo.tech/store/"+this.category+"/applist.json").then(function(n){t.list=n.data})},GotoJson:function(t){console.log("http://dcstore.shenmo.tech/store/"+this.category+"/"+t+"/app.json"),window.open("http://dcstore.shenmo.tech/store/"+this.category+"/"+t+"/app.json","_self","")}},mounted:function(){this.getInfo()}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app"},[e("br"),t._v(" "),e("br"),t._v(" "),e("center",[e("div",{staticClass:"list"},t._l(t.list,function(n){return e("div",{key:n.tip,staticClass:"item"},[e("span",{staticClass:"show"},[e("img",{staticClass:"icon-m",attrs:{src:"http://dcstore.shenmo.tech/store/"+t.category+"/"+n.Pkgname+"/icon.png",alt:"icon"},on:{click:function(e){return t.GotoJson(n.Pkgname)}}}),t._v(" "),e("span",{staticClass:"app-title"},[e("h3",{staticClass:"app-name"},[t._v(t._s(n.Name))])]),t._v(" "),e("a",{attrs:{target:"_blank"}},[e("button",{staticClass:"download-bt",attrs:{title:t.downloadContent},on:{click:function(e){return t.GotoJson(n.Pkgname)}}},[t._v("\n                详情>>\n              ")])])])])}),0)])],1)},staticRenderFns:[]};var h=e("VU/8")(l,f,!1,function(t){e("zFXJ")},"data-v-b953a75a",null).exports,v={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"development"}})],1)},staticRenderFns:[]};var _=e("VU/8")(v,g,!1,function(t){e("cP9Q")},"data-v-077f1d1f",null).exports,C={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},y={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"themes"}})],1)},staticRenderFns:[]};var b=e("VU/8")(C,y,!1,function(t){e("e7qu")},"data-v-225da88d",null).exports,w={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},k={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"music"}})],1)},staticRenderFns:[]};var F=e("VU/8")(w,k,!1,function(t){e("SuLb")},"data-v-4c765360",null).exports,U={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},E={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"games"}})],1)},staticRenderFns:[]};var x=e("VU/8")(U,E,!1,function(t){e("xepN")},"data-v-5172fef0",null).exports,R={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},V={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"image_graphics"}})],1)},staticRenderFns:[]};var G=e("VU/8")(R,V,!1,function(t){e("YS1h")},"data-v-3a89f04a",null).exports,$={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},P={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"chat"}})],1)},staticRenderFns:[]};var S=e("VU/8")($,P,!1,function(t){e("242K")},"data-v-888a6cb4",null).exports,J={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},L={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"tools"}})],1)},staticRenderFns:[]};var N=e("VU/8")(J,L,!1,function(t){e("dEOg")},"data-v-53214a7e",null).exports,O={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},H={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"network"}})],1)},staticRenderFns:[]};var I=e("VU/8")(O,H,!1,function(t){e("Uq1Y")},"data-v-33067b0a",null).exports,q={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},A={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"office"}})],1)},staticRenderFns:[]};var j=e("VU/8")(q,A,!1,function(t){e("UGrX")},"data-v-817ebda0",null).exports,D={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},X={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"others"}})],1)},staticRenderFns:[]};var W=e("VU/8")(D,X,!1,function(t){e("kE1F")},"data-v-b38833e0",null).exports,M={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},T={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"reading"}})],1)},staticRenderFns:[]};var Y=e("VU/8")(M,T,!1,function(t){e("iLJ5")},"data-v-0d31e363",null).exports,z={name:"Games",components:{categoryComponent:h},data:function(){return{}},methods:{},mounted:function(){}},B={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("categoryComponent",{attrs:{category:"video"}})],1)},staticRenderFns:[]};var K=e("VU/8")(z,B,!1,function(t){e("gqvo")},"data-v-7d1b2c76",null).exports,Q={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("br"),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{placeholder:"搜索您想要的应用"},domProps:{value:t.searchInput},on:{input:function(n){n.target.composing||(t.searchInput=n.target.value)}}}),t._v(" "),e("button",{staticClass:"search-button",on:{click:t.search}},[t._v("搜索")])])},staticRenderFns:[]};var Z=e("VU/8")({name:"Search",data:function(){return{list:[],searchInput:"",downloadContent:"DOWNLOAD"}},methods:{search:function(){this.searchInput.split(" ")},getJsonList:function(){return[]}},mounted:function(){}},Q,!1,function(t){e("aUyH"),e("X0CV")},"data-v-3b0b8281",null).exports;o.a.use(c.a);var tt=new c.a({routes:[{path:"/",name:"MainPage",component:m},{path:"/programming",name:"Programming",component:_},{path:"/themes",name:"Themes",component:b},{path:"/musicandsound",name:"MusicAndSound",component:F},{path:"/games",name:"Games",component:x},{path:"/photos",name:"Photos",component:G},{path:"/relations",name:"Relations",component:S},{path:"/tools",name:"Tools",component:N},{path:"/network",name:"Network",component:I},{path:"/office",name:"Office",component:j},{path:"/others",name:"Others",component:W},{path:"/reading",name:"Reading",component:Y},{path:"/videos",name:"Videos",component:K},{path:"/search",name:"Search",component:Z}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:tt,components:{App:s},template:"<App/>"})},SuLb:function(t,n){},UGrX:function(t,n){},Uq1Y:function(t,n){},X0CV:function(t,n){},YS1h:function(t,n){},aUyH:function(t,n){},cP9Q:function(t,n){},dEOg:function(t,n){},e7qu:function(t,n){},gqvo:function(t,n){},iLJ5:function(t,n){},kE1F:function(t,n){},p8SH:function(t,n){},uLvj:function(t,n){},xepN:function(t,n){},zFXJ:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.fe481804b0ea71952f90.js.map