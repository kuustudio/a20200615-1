(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesExchange/order/order"],{"33a5":function(t,e,n){"use strict";(function(t){n("d28f");a(n("66fd"));var e=a(n("cd3d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("5486")["createPage"])},"49ef":function(t,e,n){"use strict";var a={copyright:()=>n.e("components/copyright/copyright").then(n.bind(null,"cb0f")),myfooter:()=>n.e("components/myfooter/myfooter").then(n.bind(null,"6bab"))},o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"905c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("88e4"),o={data:function(){return{page_signs:"/pagesExchange/order/order",$imgurl:this.$imgurl,baseinfo:[],orderlist:[],orderlist_length:0}},onPullDownRefresh:function(){var e=this;e.getList(),t.stopPullDownRefresh()},onLoad:function(e){var n=this;t.setNavigationBarTitle({title:"我的积分订单"}),e.type&&(n.type=e.type);var o=0;e.fxsid&&(o=e.fxsid,n.fxsid=e.fxsid),this._baseMin(this);t.getStorageSync("suid");a.bdLogin(o,function(){n.getList()})},methods:{redirectto:function(t){var e=t.currentTarget.dataset.link,n=t.currentTarget.dataset.linktype;this._redirectto(e,n)},getList:function(e){var n=this;t.request({url:n.$baseurl+"doPagemyscoreorder",data:{uniacid:n.$uniacid,suid:t.getStorageSync("suid")},success:function(t){n.orderlist=t.data.data,n.orderlist_length=t.data.data.length},fail:function(t){}})},makePhoneCall:function(e){var n=this,a=n.baseinfo.tel;t.makePhoneCall({phoneNumber:a})},makePhoneCallB:function(e){var n=this,a=n.baseinfo.tel_b;t.makePhoneCall({phoneNumber:a})},openMap:function(e){var n=this;t.openLocation({latitude:parseFloat(n.baseinfo.latitude),longitude:parseFloat(n.baseinfo.longitude),name:n.baseinfo.name,address:n.baseinfo.address,scale:22})}}};e.default=o}).call(this,n("5486")["default"])},9870:function(t,e,n){"use strict";n.r(e);var a=n("905c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},c1df:function(t,e,n){},cd3d:function(t,e,n){"use strict";n.r(e);var a=n("49ef"),o=n("9870");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("db57");var r,u=n("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=s.exports},db57:function(t,e,n){"use strict";var a=n("c1df"),o=n.n(a);o.a}},[["33a5","common/runtime","common/vendor"]]]);