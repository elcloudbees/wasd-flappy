webpackJsonp([0,2],[function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){for(var e=t.width,i=t.height,n=t.remainder,s=t.blocks,r=t.distance,o=void 0===r?10:r,h=t.isRandom,u=void 0!==h&&h,l=[],f=s.length,d=e,_=0;n>0;){var v=void 0;u?v=s[(0,c.random)(0,f-1)]:(v=s[_%f],_++);var p=v.width+a(o);v=v.clone(),v._setStartX(d),n-=p,d+=p,v._setCanvas(e,i),l.push(v)}return l}function a(t){return Array.isArray(t)?c.random.apply(void 0,n(t)):t}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();e.genBlocks=r;var c=i(11),h=0,u=function(){function t(e){var i=e.width,n=void 0===i?30:i,r=e.height,o=void 0===r?30:r,u=e.padding,l=void 0===u?0:u,f=e.placement,d=void 0===f?"random":f,_=e.name,v=void 0===_?"Block":_,p=e.data;s(this,t),this.startX=0,this._width=n,this._height=o,this._padding=l,this.width=a(n),this.height=a(o),this.padding=a(l),this.placement=d,this._direction="random"===d?(0,c.random)(0,1):Number("bottom"===d),this.uid=h++,this.name=v,this._canvasHeight=0,this._canvasWidth=0,this.data=p}return o(t,[{key:"_setStartX",value:function(t){this.startX=t}},{key:"_setCanvas",value:function(t,e){this._canvasWidth=t,this._canvasHeight=e}},{key:"clone",value:function(){return new t({width:this._width,height:this._height,padding:this._padding,placement:this.placement,name:this.name})}},{key:"moveX",value:function(t){this.startX-=t}},{key:"moveY",value:function(t){this.startY+=t}},{key:"endX",get:function(){return this.startX+this.width}},{key:"endY",get:function(){return this.startY+this.height}},{key:"startY",get:function(){var t=this._direction,e=t?-this.padding:this.padding;return(this._canvasHeight-this.height)*t+e}}]),t}();e.default=u},function(t,e,i){"use strict";function n(t){return function(e){if(!t[e])throw Error("[Flappy:"+this.name+"] Unknown state:",e);this._state=this.__state=t[e]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=e.state,s=e.handler;t._action=n(i),Object.defineProperty(t,"_state",{get:function(){return this.__state},set:s})}},,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=i(31),r=n(s),a=i(26),o=n(a),c=i(13),h=n(c),u=/mobile/i.test(navigator.userAgent),l={height:384,width:288,floorHeight:55,fps:50},f=new c.Player({height:26,width:36,startX:50,velocity:10}),d=new c.Block({name:"tube",width:52,height:[100,150]}),_=new h.default({canvas:l,player:f,levels:[{score:0,blocks:[d],blockDistance:[30,60]}]});document.addEventListener("keydown",function(t){"OVER"!==_.state&&(32!==t.keyCode&&38!==t.keyCode&&87!==t.keyCode||("READY"===_.state&&_.start(),f.jump()))}),new r.default({el:"#app",render:function(t){return t(o.default,{props:{player:f,flappy:_,isMobile:u}})}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={QUIET:"QUIET",DEATH:"DEATH",MOTION:"MOTION"};e.default={name:"bird",props:{image:{},ctx:{},data:Object,state:{type:String,default:n.QUIET}},created:function(){this.count=0},render:function(){},watch:{data:{deep:!0,handler:function(){var t=this.data,e=t.startX,i=t.startY,n=t.width,s=t.height,r=t.offset,a=parseInt(++this.count/10,10)%3*n,o=2*r*Math.PI/180,c=Math.cos(o),h=Math.sin(o),u=c*e-h*i,l=c*i+h*e-n/2;this.ctx.save(),this.ctx.rotate(-o),this.ctx.drawImage(this.image,a,0,n,s,u,l,n,s),this.ctx.restore()}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tube",props:{image:{},ctx:{},data:Object},render:function(){},watch:{data:{deep:!0,handler:function(){var t=this.data,e=t.startX,i=t.startY,n=t.width,s=t.height,r=i;i||(r=-s,this.ctx.save(),this.ctx.scale(1,-1)),this.ctx.drawImage(this.image,0,0,n,s,e,r,n,s),!i&&this.ctx.restore()}}}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(5),r=n(s),a=i(6),o=n(a),c=i(27),h=n(c),u=i(24),l=n(u),f=(0,l.default)([i(19),i(20),i(22),i(21)]);e.default={components:{FCanvas:h.default,FBird:r.default,FTube:o.default},props:["flappy","player","isMobile"],data:function(){return{score:0,lastScore:0,gameState:"",birdState:"",bird:{},tubes:[],images:[]}},computed:{highScore:function(){return this.lastScore>this.score?this.lastScore:this.score}},mounted:function(){var t=this;f.then(function(e){var i=t.$refs.canvas;t.images=e,t.flappy.on(["game:progress","game:ready"],function(e){i.reset(),t.bird=e.player,t.tubes=e.blocks,t.score=e.score,t.gameState=e.state}),t.flappy.on(["player:hitblock","player:hitfloor"],function(e){t.flappy.gameover(),t.lastScore=t.score})})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"canvas",props:{width:Number,height:Number,floorHeight:Number,score:Number,groundImage:{},bgImage:{}},data:function(){return{ctx:{}}},created:function(){this.count=0,this.groundY=this.height-this.floorHeight},methods:{reset:function(){var t=3*++this.count%48;this.ctx.clearRect(0,0,this.width,this.height),this.ctx.drawImage(this.bgImage,0,0),this.ctx.drawImage(this.groundImage,t,0,this.width,this.floorHeight,0,this.groundY,this.width,this.floorHeight),this.drawScore()},drawScore:function(){this.ctx.font="bold 14px verdana, sans-serif",this.ctx.fillStyle="#fff",this.ctx.fillText(this.score,10,20)}},mounted:function(){this.ctx=this.$refs.canvas.getContext("2d")}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(14),o=n(a),c=i(1),h=n(c),u=i(0),l={OVER:"OVER",PROGRESS:"PROGRESS",PAUSE:"PAUSE",READY:"READY"},f=function(){function t(e){var i=e.width,n=void 0===i?300:i,r=e.height,a=void 0===r?600:r,o=e.floorHeight,c=void 0===o?0:o,h=e.fps,u=void 0===h?30:h;s(this,t),this.width=n,this.height=a,this.floorHeight=c,this.fps=u}return r(t,[{key:"frames",get:function(){return 1e3/this.fps}}]),t}(),d=function(){function t(e){var i=e.canvas,n=void 0===i?{}:i,r=e.levels,a=void 0===r?[]:r,o=e.player;s(this,t),this._canvas=new f(n),this._levels=[].concat(a),this._score=0,this._player=o,this._init()}return r(t,[{key:"_stateHandler",value:function(t){switch(t){case l.READY:this._player._refresh(),this.emit("game:ready",this._stats);break;case l.PROGRESS:this._refresh(),this.emit("game:progress",this._stats);break;case l.OVER:this.emit("game:over",this._stats);break;case l.PAUSE:}}},{key:"_init",value:function(){var t=this;if(!Array.isArray(this._levels)||!this._levels.length)throw Error("[Flappy] levels is required.");this._levels.forEach(function(t,e){var i=t.blocks;if(!Array.isArray(i)||!i.length)throw Error("[Flappy] levels["+e+"].blocks is required.")}),(0,o.default)(this),(0,h.default)(this,{state:l,handler:this._stateHandler}),this._player._init(this),this.on("_hitfloor",this._onHitFloor),setTimeout(function(e){return t._action(l.READY)},0)}},{key:"_run",value:function(){var t=this;this._action(l.PROGRESS),setTimeout(function(e){t._state===l.PROGRESS&&t._run()},this._canvas.frames)}},{key:"_refresh",value:function(){var t=this;this._player._refresh(),this._blocks.forEach(function(e){return e.moveX(t._level.speed||5)}),this._checkHit()}},{key:"_checkHit",value:function(){for(var t=this._player,e=0,i=this._blocks.length;e<i;e++){var n=this._blocks[e];if(!(n.startX>t.endX||n.endX<t.startX)){if(n._disabled)continue;n.startY>t.endY||n.endY<t.startY?this._score++:this.emit("player:hitblock",{block:n,stats:this._stats}),n._disabled=!0;break}}}},{key:"_onHitFloor",value:function(){this.emit("player:hitfloor",{stats:this._stats})}},{key:"start",value:function(){this._run(),this.emit("game:start",this._stats)}},{key:"restart",value:function(){this._player._reset(),this._player.startY=this._player.startY||this._canvas.height/2,this._score=0,this.start()}},{key:"pause",value:function(){this._action(l.PAUSE)}},{key:"continue",value:function(){this._action(l.PROGRESS)}},{key:"gameover",value:function(){this._action(l.OVER)}},{key:"state",get:function(){return this._state}},{key:"_score",set:function(t){var e=this;if(this.__score===t)return t;this._level=this._levels.find(function(t){return t.score<=e._score})||this._levels[0],this.__score=t},get:function(){return this.__score}},{key:"_blocks",get:function(){this.__blocks=this.__blocks||[];var t=this.__blocks[0];if(t){if(t.endX>=0)return this.__blocks;this.__blocks.shift()}var e=this._level,i=e.blocks,n=e.blockDistance,s=e.blockRandom,r=this.__blocks.length-1,a=0;r>0&&(a=this.__blocks[r].endX);var o=this._canvas.width-a;return this.__blocks=this.__blocks.concat((0,u.genBlocks)({width:this._canvas.width,height:this._canvas.height,remainder:o,blocks:i,distance:n,isRandom:s})),this.__blocks}},{key:"_stats",get:function(){return{player:this._player,blocks:this._blocks,canvas:this._canvas,score:this._score,level:this._level,state:this._state}}}],[{key:"name",get:function(){return"Flappy"}}]),t}();e.default=d},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e){var i=e.velocity,s=void 0===i?15:i,r=e.fps,a=void 0===r?30:r,o=e.g,c=void 0===o?20:o;n(this,t),this._time=0,this._v=s,this.last=0,this.G=c/a}return s(t,[{key:"reset",value:function(){this._time=0,this.last=0}},{key:"decelerate",value:function(){this._time++;var t=this._time*(this._v-this.G*this._time),e=t-this.last;return this.last=t,e}}]),t}();e.default=r},function(t,e,i){"use strict";function n(t,e){return Math.floor(t+Math.random()*(e-t+1))}Object.defineProperty(e,"__esModule",{value:!0}),e.random=n},function(t,e,i){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var i in e)t[i]=e[i];return t}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0);Object.defineProperty(e,"Block",{enumerable:!0,get:function(){return n(s).default}});var r=i(15);Object.defineProperty(e,"Player",{enumerable:!0,get:function(){return n(r).default}});var a=i(9);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n(a).default}})},function(t,e,i){"use strict";function n(t,e){this._listener[t]=this._listener[t]||[],this._listener[t].push(e)}function s(t,e){var i=this;Array.isArray(t)?t.forEach(function(t){i._addListener(t,e)}):this._addListener(t,e)}function r(t){for(var e=this,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];this._listener[t]&&this._listener[t].forEach(function(t){return t&&t.apply(e,n)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){t._listener={},t.on=s,t.emit=r,t._addListener=n}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(10),o=n(a),c=i(1),h=n(c),u=i(12),l={JUMPING:"JUMPING",WAITING:"WAITING"},f=0,d=function(){function t(e){s(this,t),this._options=(0,u.extend)({height:30,width:30,startX:0,startY:0,velocity:15,g:20,name:"Player"},e),this._reset()}return r(t,[{key:"_reset",value:function(){var t=this._options,e=t.startX,i=t.startY,n=t.width,s=t.height,r=t.velocity,a=t.g,o=t.name,c=t.data;this.startX=e,this.startY=i,this.width=n,this.height=s,this.velocity=r,this.g=a,this.uid=f++,this.name=o,this.data=c}},{key:"_stateHandler",value:function(t){switch(t){case l.JUMPING:this._moveUp();break;case l.WAITING:}}},{key:"_init",value:function(t){(0,h.default)(this,{state:l,handler:this._stateHandler});var e=t._canvas;this._parent=t,this._linearMotion=new o.default({velocity:this.velocity,fps:e.fps,g:this.g}),this.startY=this.startY||e.height/2,this._action(l.WAITING)}},{key:"_moveUp",value:function(){this.offset=this._linearMotion.decelerate();var t=this._parent._canvas.height-this._parent._canvas.floorHeight;this.startY-=this.offset,this.endY>t&&(this.startY=t-this.height,this._action(l.WAITING),this._parent.emit("_hitfloor"))}},{key:"_refresh",value:function(){this._action(this._state||l.WAITING)}},{key:"jump",value:function(){this._linearMotion.reset(),this._action(l.JUMPING)}},{key:"endX",get:function(){return this.startX+this.width}},{key:"endY",get:function(){return this.startY+this.height}},{key:"state",get:function(){return this._state}}]),t}();e.default=d},,,function(t,e){},function(t,e,i){t.exports=i.p+"static/bg.f3651b8b.png"},function(t,e,i){t.exports=i.p+"static/bird.89827bdb.png"},function(t,e,i){t.exports=i.p+"static/ground.c0df5efd.png"},function(t,e,i){t.exports=i.p+"static/tube.67df21f3.png"},,,,function(t,e,i){i(18);var n=i(2)(i(7),i(29),null,null);t.exports=n.exports},function(t,e,i){var n=i(2)(i(8),i(28),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas",t._b({ref:"canvas",staticClass:"canvas"},"canvas",t.$props),[t._t("default",null,{ctx:t.ctx})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"app",class:{mobile:t.isMobile}},[t.isMobile?t._e():i("h1",[t._v("Vue.js Flappy Bird")]),t._v(" "),i("p",[t._v("\n    High Score: "+t._s(t.highScore)+"\n    "),"OVER"===t.gameState?i("a",{on:{click:function(e){t.flappy.restart()}}},[t._v("Restart")]):t._e()]),t._v(" "),i("f-canvas",t._b({ref:"canvas",attrs:{"bg-image":t.images[0],"ground-image":t.images[3],score:t.score},scopedSlots:t._u([["default",function(e){return[i("f-bird",{attrs:{image:t.images[1],state:t.birdState,ctx:e.ctx,data:t.bird}}),t._v(" "),t._l(t.tubes,function(n){return i("f-tube",{key:n.id,attrs:{image:t.images[2],ctx:e.ctx,data:n}})})]}]])},"f-canvas",t.flappy._canvas)),t._v(" "),t.isMobile?t._e():i("p",[t._v("Powered by\n    "),i("a",{attrs:{href:"https://github.com/wasd-org/wasd-flappy"}},[t._v("wasd-flappy")])])],1)},staticRenderFns:[]}},,,function(t,e,i){t.exports=i(4)}],[32]);