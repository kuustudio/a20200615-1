(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesFood/food_detail/food_detail"],{"12b6":function(t,o,e){"use strict";var a={auth:()=>Promise.all([e.e("common/vendor"),e.e("components/auth/auth")]).then(e.bind(null,"a32a")),bindPhone:()=>Promise.all([e.e("common/vendor"),e.e("components/bindPhone/bindPhone")]).then(e.bind(null,"9bb9"))},i=function(){var t=this,o=t.$createElement;t._self._c},n=[];e.d(o,"b",function(){return i}),e.d(o,"c",function(){return n}),e.d(o,"a",function(){return a})},2888:function(t,o,e){"use strict";var a=e("e6fb"),i=e.n(a);i.a},"370b":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=i(e("37b1"));function i(t){return t&&t.__esModule?t:{default:t}}var n=e("88e4"),s={data:function(){return{$imgurl:this.$imgurl,baseinfo:[],bus_x:0,bus_y:0,showShopCart:!1,totalNum:0,totalPay:0,chooseGoodArr:[],guige_arr:[],guige_show:0,foodInfo:[],realPay:0,guige_chooseed:"",gwcHidden:2,needAuth:!1,needBind:!1}},onPullDownRefresh:function(){this.getFoodInfo(),t.stopPullDownRefresh()},onLoad:function(o){var e=this;this._baseMin(this),this.chooseGoodArr=t.getStorageSync("foodGwc")?t.getStorageSync("foodGwc"):[],this.totalPay=t.getStorageSync("foodTotalPay")?t.getStorageSync("foodTotalPay"):0,this.totalNum=t.getStorageSync("foodTotalNum")?t.getStorageSync("foodTotalNum"):0;o.id&&(this.id=o.id);var a=0;o.fxsid&&(this.fxsid=o.fxsid);var i=t.getStorageSync("suid");i?n.bdLogin(a,function(){e.getFoodInfo()}):this.getFoodInfo()},methods:{getFoodInfo:function(){var o=this;t.request({url:this.$baseurl+"doPageGetFoodInfo",data:{uniacid:this.$uniacid,id:this.id},success:function(e){o.foodInfo=e.data.data.foodInfo,o.realPay=e.data.data.foodInfo.guige_price;var i=o.foodInfo;i.product_txt&&(i.product_txt=i.product_txt.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),i.product_txt=(0,a.default)(i.product_txt));var n="",s=e.data.data.guige_arr;new Array(1,2,3);for(var r in s)n+=s[r]["val"][0]+",";o.guige_chooseed=n.substring(0,n.length-1),o.guige_arr=s,t.setNavigationBarTitle({title:o.foodInfo.title})}})},showShopCartFn:function(t){this.totalPay>0&&(this.showShopCart=!this.showShopCart)},showGuige:function(){this.guige_show=1},closeGuige:function(){this.guige_show=0},chooseed:function(o){var e=this;this.gwcHidden=1;var a=o.currentTarget.dataset.topindex,i=o.currentTarget.dataset.subindex,n=this.guige_arr,s="";for(var r in n)if(r==a)s+=n[r]["val"][i]+",";else{var d=n[r]["ck"];s+=n[r]["val"][d]+","}s=s.substring(0,s.length-1),t.request({url:this.$baseurl+"doPageGetFoodKcPrice",data:{id:this.id,guige_chooseed:s},success:function(o){var a=o.data.data;1==a.flag?a.kc<=0?t.showModal({title:"提示",content:"该规格库存不足，请重新选择规格",showCancel:!1,success:function(t){}}):(e.realPay=a.price,e.gwcHidden=2):t.showModal({title:"提示",content:"该规格商品已不存在，点击刷新",showCancel:!1,success:function(t){e.gwcHidden=2,e.getFoodInfo()}})}}),this.guige_chooseed=s,n[a]["ck"]=i,this.guige_arr=n},addGwc:function(){for(var t=this.chooseGoodArr,o=this.realPay,e=this.guige_chooseed,a=this.foodInfo.title,i=this.foodInfo.id,n=this.totalPay,s=this.totalNum,r=0,d=0;d<t.length;d++)if(i==t[d][0]&&t[d][2]==a){t[d][3]+=1,r=1;break}var u=new Array;u[0]=i,u[1]=o,u[2]=a,u[3]=1,u[5]=e,n=1*o+1*n,s=1*s+1,0==r&&t.push(u),this.chooseGoodArr=t,this.totalPay=n.toFixed(2),this.totalNum=s,this.setStorage()},addGoodToCartFn:function(t){var o=t.currentTarget.dataset.index,e=this.chooseGoodArr,a=this.totalPay,i=this.totalNum;e[o][3]++,a=1*a+1*e[o][1],this.totalPay=a.toFixed(2),this.totalNum=1*i+1,this.chooseGoodArr=e,this.setStorage()},decreaseGoodToCartFn:function(t){var o=t.currentTarget.dataset.index,e=this.chooseGoodArr,a=this.totalPay,i=this.totalNum;i=1*i-1,a=0==i?0:1*a-1*e[o][1],e[o][3]--,0==e[o][3]&&e.splice(o,1),this.totalPay=a.toFixed(2),this.totalNum=i,this.chooseGoodArr=e,this.setStorage()},clearGwc:function(){var o=this;t.showModal({title:"提示",content:"确定要清空购物车",success:function(t){t.confirm?(o.totalPay=0,o.totalNum=0,o.chooseGoodArr=[],o.showShopCart=!1,o.setStorage()):t.cancel}})},setStorage:function(){t.setStorage({key:"foodGwc",data:this.chooseGoodArr}),t.setStorage({key:"foodTotalPay",data:this.totalPay}),t.setStorage({key:"foodTotalNum",data:this.totalNum})},goPayFn:function(o){if(!this.getSuid())return!1;this.totalPay>0&&(t.setStorage({key:"foodGwc",data:this.chooseGoodArr}),t.setStorage({key:"foodTotalPayGwc",data:this.totalPay}),t.navigateTo({url:"/pagesFood/food_order/food_order"}))},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1},getSuid:function(){var o=t.getStorageSync("suid");if(o)return!0;var e="";return e=t.getStorageSync("baidu_userinfo"),e?this.needBind=!0:this.needAuth=!0,!1}}};o.default=s}).call(this,e("5486")["default"])},"4a42":function(t,o,e){"use strict";(function(t){e("d28f");a(e("66fd"));var o=a(e("eddb"));function a(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("5486")["createPage"])},"59af":function(t,o,e){"use strict";e.r(o);var a=e("370b"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(o,t,function(){return a[t]})}(n);o["default"]=i.a},e6fb:function(t,o,e){},eddb:function(t,o,e){"use strict";e.r(o);var a=e("12b6"),i=e("59af");for(var n in i)"default"!==n&&function(t){e.d(o,t,function(){return i[t]})}(n);e("2888");var s,r=e("f0c5"),d=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);o["default"]=d.exports}},[["4a42","common/runtime","common/vendor"]]]);