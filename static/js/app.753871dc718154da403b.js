webpackJsonp([1],{"3GpM":function(t,e){},"9K9D":function(t,e){},CZOc:function(t,e){},D2O1:function(t,e){},Ekti:function(t,e){},Gs3o:function(t,e){},HuWz:function(t,e){},IeIk:function(t,e){},Ljv2:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},s,!1,function(t){i("HuWz")},null,null).exports,h=i("/ocq"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var r=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){i("Ekti")},"data-v-729ad596",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("router-link",{attrs:{to:{name:"CropPage"}}},[this._v("crop demo")])],1),this._v(" "),e("div",[e("router-link",{attrs:{to:{name:"GalleryPage"}}},[this._v("gallery demo")])],1),this._v(" "),e("div",[e("router-link",{attrs:{to:{name:"ScratchPage"}}},[this._v("scratch demo")])],1),this._v(" "),e("div",[e("router-link",{attrs:{to:{name:"SliderPage"}}},[this._v("slider demo")])],1)])},staticRenderFns:[]};var c=i("VU/8")({name:"Home",data:function(){return{}},methods:{},mounted:function(){}},l,!1,function(t){i("cbec")},"data-v-f8fab6c0",null).exports,u=i("mvHQ"),d=i.n(u),m=i("Zrlr"),g=i.n(m),p=i("wxAW"),v=i.n(p),f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;g()(this,t),this.x=e,this.y=i,this.width=n,this.height=s}return v()(t,[{key:"right",get:function(){return this.x+this.width}},{key:"bottom",get:function(){return this.y+this.height}}]),t}(),y={name:"Crop",props:{src:String},data:function(){return{innerRect:new f(0,0,300,300),lastX:0,lastY:0,lastDistance:0,touching:!1,imgPreviewScrollTop:0,containerWidth:0,containerHeight:0}},computed:{previewStyle:function(){return{left:this.innerRect.x+"px",top:this.innerRect.y+"px",width:this.innerRect.width+"px",height:this.innerRect.height+"px"}},imgPreviewStyle:function(){return{width:this.containerWidth+"px",marginLeft:-this.innerRect.x+"px",marginTop:-this.imgPreviewScrollTop-this.innerRect.y+"px"}}},watch:{src:function(t){this.init(t)}},methods:{init:function(t){var e=this,i=this.$el.querySelector(".img-bg");i.src=t,i.onload=function(t){e.containerWidth=i.clientWidth,e.containerHeight=i.clientHeight}},stopScroll:function(t){t.preventDefault()},calculateXY:function(t,e){var i=this.innerRect,n=this.$el;i.x+=t,i.y+=e,i.right>n.clientWidth?i.x=n.clientWidth-i.width:i.x<0&&(i.x=0),i.bottom>n.clientHeight?i.y=n.clientHeight-i.height:i.y<0&&(i.y=0)},calculateScale:function(t){var e=this.innerRect,i=this.$el,n=t*e.width;n>i.clientWidth||n>i.clientHeight?n=i.clientWidth<i.clientHeight?i.clientWidth:i.clientHeight:n<100&&(n=100),e.width=n,e.height=e.width,this.calculateXY(0,0)},onTouchStart:function(t){this.innerRect;var e=this.stopScroll,i=t.changedTouches[0],n=i.clientX,s=i.clientY;if(document.getElementsByTagName("body")[0].addEventListener("touchstart",e,!1),1==t.targetTouches.length)this.lastX=n,this.lastY=s,console.log("start ===> lastX is "+this.lastX+" && lastY is "+this.lastY);else if(2===t.targetTouches.length){var a=t.targetTouches[0],h=t.targetTouches[1];this.lastDistance=Math.sqrt(Math.pow(a.clientX-h.clientX,2)+Math.pow(a.clientY-h.clientY,2));var o="log : touch1 :("+a.clientX+","+a.clientY+") and touch2 :("+h.clientX+","+h.clientY+");";console.log(o)}this.touching=!0},onTouchMove:function(t){var e=this.innerRect;if(this.touching)if(1==t.targetTouches.length){var i=t.changedTouches[0],n=i.clientX,s=i.clientY;console.log("move ===> deltaX is "+(n-this.lastX)+" && deltaY is "+(s-this.lastY)),this.calculateXY(n-this.lastX,s-this.lastY),this.lastX=i.clientX,this.lastY=i.clientY}else if(2===t.targetTouches.length){var a=t.targetTouches[0],h=t.targetTouches[1],o=Math.sqrt(Math.pow(a.clientX-h.clientX,2)+Math.pow(a.clientY-h.clientY,2)),r=o/this.lastDistance;calculateScale(r),this.lastDistance=o;var l="log2 : touch1 :("+a.clientX+","+a.clientY+") and touch2 :("+h.clientX+","+h.clientY+"); width is "+e.width;console.log(l)}},onTouchEnd:function(t){var e=this.stopScroll;this.touching=!1,this.$emit("stop",{l:this.innerRect.x,t:this.innerRect.y,r:this.innerRect.right,b:this.innerRect.bottom,width:this.containerWidth,height:this.containerHeight}),document.getElementsByTagName("body")[0].removeEventListener("touchstart",e,!1)}},mounted:function(){}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",position:"relative",left:"0",top:"0"}},[i("div",{staticClass:"img-container"},[i("img",{staticClass:"img-bg",attrs:{src:t.src}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"preview",style:t.previewStyle,on:{touchstart:function(e){t.onTouchStart(e)},touchmove:function(e){t.onTouchMove(e)},touchend:function(e){t.onTouchEnd(e)}}},[i("img",{staticClass:"img-preview",style:t.imgPreviewStyle,attrs:{src:t.src}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-modal"},[e("div",{attrs:{id:"confirm"}})])}]};var _={name:"CropPage",data:function(){return{image:"",result:""}},methods:{onStop:function(t){console.log(d()(t));var e=new Image;e.src=this.image,e.onload=function(){var i=document.createElement("canvas"),n=t.r-t.l,s=t.b-t.t;i.width=n,i.height=s;var a=i.getContext("2d"),h=e.width/t.width;a.drawImage(e,t.l*h,t.t*h,n*h,s*h,0,0,n,s),this.result=i.toDataURL("image/jpeg")}.bind(this)},onChange:function(t){var e=t.target.files[0],i=new FileReader;i.onload=function(t){var e=t.target.result;this.image=e}.bind(this),i.readAsDataURL(e)}},components:{crop:i("VU/8")(y,b,!1,function(t){i("3GpM")},"data-v-8e7635c2",null).exports}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("label",{attrs:{for:"crop-file"}},[t._v("点击选择图片")]),t._v(" "),i("input",{staticStyle:{display:"none"},attrs:{name:"file",id:"crop-file",type:"file"},on:{change:t.onChange}})]),t._v(" "),i("div",[i("crop",{attrs:{src:t.image},on:{stop:t.onStop}})],1),t._v(" "),i("div",{staticStyle:{"font-size":"0.3rem"}},[t._v("下面是截取出来的结果")]),t._v(" "),i("img",{attrs:{src:t.result}})])},staticRenderFns:[]};var X=i("VU/8")(_,x,!1,function(t){i("Ljv2")},"data-v-cccb781e",null).exports,T={name:"Gallery",props:{defaultIndex:{default:0},images:Array},data:function(){return{itemWidth:Number,itemHeight:Number,maxItemWidth:Number,maxItemHeight:Number,maxItemIndex:0,lastX:0,animating:!1,items:[]}},computed:{firstItem:function(){return this.items[0]},lastItem:function(){return this.items[this.items.length-1]},width:function(){return this.$el.clientWidth}},methods:{getStyle:function(t){var e=this.items[t],i={transform:"translateX("+e.midline+"px)","-webkit-transform":"translateX("+e.midline+"px)",width:this.itemWidth*e.ratio+"px",height:this.itemHeight*e.ratio+"px",backgroundImage:"url("+e.image+")",backgroundSize:"cover",visibility:e.visible};return t===this.maxItemIndex?i.ZIndex=this.items.length+1:i.ZIndex=this.items.length-Math.abs(this.maxItemIndex-t),i},stopScroll:function(t){t.preventDefault()},touchStart:function(t,e){if(!this.animating){document.body.addEventListener("touchstart",this.stopScroll,!1);var i=e.touches[0];this.lastX=i.clientX}},touchMove:function(t,e){if(!this.animating){var i=e.touches[0],n=i.clientX-this.lastX;this.lastItem.midline+n<0?n=0-this.lastItem.midline:this.firstItem.midline+n>0&&(n=0-this.firstItem.midline),this.items.forEach(function(t,e){this.moveTo(e,t.midline+n),Math.abs(this.items[this.maxItemIndex].midline)>t.midline&&(this.maxItemIndex=e)}.bind(this)),this.lastX=i.clientX}},touchEnd:function(t,e){if(!this.animating){document.body.removeEventListener("touchstart",this.stopScroll,!1);var i=this.items[this.maxItemIndex],n=i.midline/10;setTimeout(function t(){this.animating=!0,Math.abs(i.midline)<Math.abs(n)&&(n=i.midline),this.items.forEach(function(t,e){this.moveTo(e,t.midline-n)}.bind(this)),0!==i.midline?setTimeout(t.bind(this),16):this.animating=!1}.bind(this),16)}},moveTo:function(t,e){var i=this.width-this.itemWidth,n=this.items[t];n.visible=e<-i||e>i?"hidden":"visible",n.midline=e,n.ratio=this.getRatio(e)},getRatio:function(t){var e=(this.width-this.itemWidth)/2,i=(e-Math.abs(t))/e*(this.maxItemWidth-this.itemWidth)/this.itemWidth;return i<0&&(i=0),i+1}},mounted:function(){this.maxItemWidth=this.$el.clientWidth/2,this.maxItemHeight=this.$el.clientHeight,this.itemWidth=this.maxItemWidth/2,this.itemHeight=this.maxItemHeight/2;var t=[];this.images.forEach(function(e,i){t.push({image:e,midline:0,ratio:1,visible:"visible"})}),this.$set(this,"items",t),this.items.forEach(function(t,e){var i=(e-this.defaultIndex)*(this.width-this.itemWidth)/2;this.moveTo(e,t.midline+i),Math.abs(this.items[this.maxItemIndex].midline)>t.midline&&(this.maxItemIndex=e)}.bind(this))}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery-container"},t._l(t.items,function(e,n){return i("div",{staticClass:"gallery-item",class:{current:t.maxItemIndex===n},style:t.getStyle(n),on:{touchstart:function(e){t.touchStart(n,e)},touchmove:function(e){t.touchMove(n,e)},touchend:function(e){t.touchEnd(n,e)}}})}))},staticRenderFns:[]};var w={name:"GalleryPage",data:function(){return{imageList:["https://appios.tengqingyang.com/Uploads/ad/5a72b10ddd68f.jpg","https://appios.tengqingyang.com/Uploads/ad/5a74031ab385f.jpg","https://appios.tengqingyang.com/Uploads/ad/5a7ad2c63fb94.jpg","https://appios.tengqingyang.com/Uploads/ad/5a7d5d6a5ccde.jpg","https://appios.tengqingyang.com/Uploads/ad/5a59de4bbc564.png"]}},components:{gallery:i("VU/8")(T,S,!1,function(t){i("D2O1")},"data-v-718136d6",null).exports}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"2.6rem"}},[e("gallery",{attrs:{images:this.imageList,"default-index":0}})],1)},staticRenderFns:[]};var R=i("VU/8")(w,I,!1,function(t){i("9K9D")},"data-v-5afc3eb8",null).exports,W=i("Gu7T"),E=i.n(W),C={name:"Scratch",data:function(){return{}},props:{},methods:{getPaint:function(){return this.$el.lastElementChild.getContext("2d")},fillLayer:function(){var t=this.getPaint();t.fillStyle="#d3d3d3",t.fillRect(0,0,canvas.width,canvas.height)},erase:function(t,e){var i=this.getPaint();i.globalCompositeOperation="destination-out",console.log("("+t+","+e+")"),i.moveTo(t,e),i.arc(t,e,100,0,2*Math.PI,!0),i.fill()},computeXY:function(t){var e=t.clientX,i=t.clientY,n=this.$el.getBoundingClientRect();return[e-n.x,i-n.y]},onTouchStart:function(t){var e=t.changedTouches[0];this.erase.apply(this,E()(this.computeXY(e)))},onTouchMove:function(t){var e=t.changedTouches[0];this.erase.apply(this,E()(this.computeXY(e)))},onTouchEnd:function(t){this.computeTransparentPercent()>.85&&(this.$el.lastElementChild.style.display="none")},computeTransparentPercent:function(){for(var t=this.$el.lastElementChild,e=this.getPaint().getImageData(0,0,t.width,t.height).data,i=[],n=0,s=e.length;n<s;n+=4){e[n+3]<128&&i.push(n)}return i.length/(e.length/4)}},mounted:function(){var t=this.$el.lastElementChild;t.width=this.$el.clientWidth,t.height=this.$el.clientHeight;var e=t.getContext("2d");e.fillStyle="#d3d3d3",e.fillRect(0,0,t.width,t.height)}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"100%",position:"relative",overflow:"hidden"}},[this._t("default",[this._v("谢谢惠顾")]),this._v(" "),e("canvas",{staticStyle:{position:"absolute",top:"0",left:"0",background:"rgba(0,0,0,0.01)"},on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd}})],2)},staticRenderFns:[]};var k={name:"ScratchPage",data:function(){return{}},components:{scratch:i("VU/8")(C,$,!1,function(t){i("Gs3o")},"data-v-057072de",null).exports}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"1.5rem"}},[e("scratch",[e("div",[this._v("This is scratch")])])],1)},staticRenderFns:[]};var M=i("VU/8")(k,H,!1,function(t){i("CZOc")},"data-v-0c514227",null).exports,Y={name:"CommonSlider",data:function(){return{startTime:0,startX:0,lastX:0,translateX:0,itemHeight:0,scrolling:!1,timeoutId:0,pos:0}},props:{images:{type:Array,required:!0,default:[]},index:{type:Number,default:0},autoRun:{type:Boolean,default:!1},interval:{type:Number,default:2e3},loop:{type:Boolean,default:!1},updateDate:{type:Number,default:0},bgSize:{type:String,default:"contain"}},computed:{imageList:function(){var t=["","",""];return t[1]=this.images[this.pos],this.images.length===this.pos+1?t[2]=this.images[0]:t[2]=this.images[this.pos+1],this.pos-1<0?t[0]=this.images[this.images.length-1]:t[0]=this.images[this.pos-1],t},itemWidth:function(){return this.$el.getBoundingClientRect().width}},watch:{autoRun:function(t){t?this.startRun():clearTimeout(this.timeoutId)},index:function(t){this.pos=t},updateDate:function(t){this.pos=this.index}},methods:{itemStyle:function(t){var e=t%this.images.length;return{backgroundPosition:"center",backgroundSize:this.bgSize,backgroundRepeat:"no-repeat",width:"100%",height:"100%",position:"absolute",left:"0",top:"0",backgroundImage:"url("+this.imageList[e]+")"}},touchStart:function(t){if(this.interval>0&&clearTimeout(this.timeoutId),!this.scrolling){document.getElementsByTagName("body")[0].addEventListener("touchstart",this.stopScroll,{passive:!1,capture:!1});var e=t.changedTouches[0];this.startTime=t.timeStamp,this.startX=e.clientX,this.lastX=this.startX}},touchMove:function(t){if(!this.scrolling){var e=t.changedTouches[0].clientX;if(!this.loop){if(0==this.pos&&e>this.lastX)return;if(this.images.length-1==this.pos&&e<this.lastX)return}this.moveBy(this.lastX-e),this.lastX=e}},touchEnd:function(t){document.getElementsByTagName("body")[0].removeEventListener("touchstart",this.stopScroll,!1);var e=t.changedTouches[0],i=t.timeStamp,n=e.clientX;if(!this.scrolling){i-this.startTime<300&&Math.abs(n-this.startX)<30&&this.$emit("slider-tap",this.pos),n<0?n=0:n>this.itemWidth&&(n=this.itemWidth);var s=n-this.startX;i-this.startTime<360?Math.abs(n-this.startX)>0?(this.translateX<0?this.animateTo(-this.itemWidth,function(){this.increaseIndex(!0),this.autoRun&&this.startRun()}.bind(this)):this.translateX>0&&this.animateTo(this.itemWidth,function(){this.increaseIndex(!1),this.autoRun&&this.startRun()}.bind(this)),this.log=n+" - "+this.startX+" = "+s+" and translateX is "+this.translateX):this.autoRun&&this.startRun():this.translateX<-this.itemWidth/2?this.animateTo(-this.itemWidth,function(){this.increaseIndex(!0),this.autoRun&&this.startRun()}.bind(this)):this.translateX<0?this.animateTo(0,function(){this.autoRun&&this.startRun()}.bind(this)):this.translateX>0&&this.translateX<=this.itemWidth/2?this.animateTo(0,function(){this.autoRun&&this.startRun()}.bind(this)):this.translateX>this.itemWidth/2&&this.animateTo(this.itemWidth,function(){this.increaseIndex(!1),this.autoRun&&this.startRun()}.bind(this))}},moveBy:function(t){var e=this.$el.getElementsByClassName("item");this.translateX-=t,e[0].style.transform="translateX("+(-this.itemWidth+this.translateX)+"px)",e[1].style.transform="translateX("+this.translateX+"px)",e[2].style.transform="translateX("+(this.itemWidth+this.translateX)+"px)"},moveTo:function(t){var e=this.$el.getElementsByClassName("item");this.translateX=t,e[0].style.transform="translateX("+(-this.itemWidth+this.translateX)+"px)",e[1].style.transform="translateX("+this.translateX+"px)",e[2].style.transform="translateX("+(this.itemWidth+this.translateX)+"px)"},animateTo:function(t,e){this.scrolling=!0;var i=function(){if(t!=this.translateX){var n=Math.min(this.itemWidth/12,Math.abs(t-this.translateX));this.translateX<t?this.moveTo(this.translateX+n):this.translateX>t&&this.moveTo(this.translateX-n),t!==this.translateX?setTimeout(i,16):(this.scrolling=!1,void 0!==e&&e())}}.bind(this);setTimeout(i,16)},increaseIndex:function(t){t?(this.pos++,this.images.length-1<this.pos&&(this.pos=0)):(this.pos--,this.pos<0&&(this.pos=this.images.length-1)),this.moveTo(0),this.$emit("slider-update",this.pos)},stopScroll:function(t){t.cancelable&&(t.defaultPrevented||t.preventDefault())},startRun:function(){if(this.interval>0){var t=function(){(this.loop||this.images.length-1!=this.pos)&&this.animateTo(-this.itemWidth,function(){this.increaseIndex(!0),this.timeoutId=setTimeout(t,this.interval)}.bind(this))}.bind(this);this.timeoutId=setTimeout(t,this.interval)}}},mounted:function(){this.autoRun&&this.startRun()}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative",width:"100%",height:"100%",top:"0",left:"0"}},[i("div",{staticClass:"item",staticStyle:{transform:"translateX(-100%)"},style:t.itemStyle(0)}),t._v(" "),i("div",{staticClass:"item",style:t.itemStyle(1),on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)}}}),t._v(" "),i("div",{staticClass:"item",staticStyle:{transform:"translateX(100%)"},style:t.itemStyle(2)})])},staticRenderFns:[]};var U={name:"SliderPage",data:function(){return{imageList:["https://appios.tengqingyang.com/Uploads/ad/5a72b10ddd68f.jpg","https://appios.tengqingyang.com/Uploads/ad/5a74031ab385f.jpg","https://appios.tengqingyang.com/Uploads/ad/5a7ad2c63fb94.jpg","https://appios.tengqingyang.com/Uploads/ad/5a7d5d6a5ccde.jpg","https://appios.tengqingyang.com/Uploads/ad/5a59de4bbc564.png"],itemWidth:0,itemHeight:0,maxItemWidth:0,maxItemHeight:0}},components:{"common-slider":i("VU/8")(Y,P,!1,function(t){i("IeIk")},"data-v-a6f6ca2a",null).exports}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"3.6rem"}},[e("common-slider",{attrs:{images:this.imageList,index:0,autoRun:!0,interval:5e3,loop:!0}})],1)},staticRenderFns:[]};var L=i("VU/8")(U,j,!1,function(t){i("ZJek")},"data-v-9428eb52",null).exports;n.a.use(h.a);var D=new h.a({routes:[{path:"/",name:"Home",component:c},{path:"/hello",name:"HelloWorld",component:r},{path:"/crop",name:"CropPage",component:X},{path:"/gallery",name:"GalleryPage",component:R},{path:"/scratch",name:"ScratchPage",component:M},{path:"/slider",name:"SliderPage",component:L}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:D,components:{App:a},template:"<App/>"})},ZJek:function(t,e){},cbec:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.753871dc718154da403b.js.map