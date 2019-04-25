!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-scratchcard",[],e):"object"==typeof exports?exports["vue-scratchcard"]=e():t["vue-scratchcard"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";function i(t,e,n,i){(!i||i<1)&&(i=1);for(var r=t.getImageData(0,0,e,n),s=r.data.length/i,o=0,a=0;a<r.data.length;a+=i)0===parseInt(r.data[a],10)&&o++;return Math.round(o/s*100)}function r(t,e){var n=e.getBoundingClientRect(),i=n.left,r=n.top,s=t.touches&&t.touches[0];if(s)return{x:s.clientX-i,y:s.clientY-r};var o=window.pageYOffset||document.documentElement.scrollTop,a=window.pageXOffset||document.documentElement.scrollLeft;return{x:t.pageX-i-a,y:t.pageY-r-o}}function s(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function o(t,e){return Math.atan2(e.x-t.x,e.y-t.y)}var a=n(8),h=n.n(a);e.a={name:"ScratchCard",props:{imageUrl:String,brushUrl:String,finishPercent:Number,forceReveal:Boolean,onComplete:Function},data:function(){return{overlayLoaded:!1,isDrawing:!1,isFinished:!1,canvas:void 0,ctx:void 0,lastPoint:void 0,cardWidth:void 0,cardHeight:void 0,brush:new Image,image:new Image}},methods:{setSize:function(t){var e=this.$refs.content.getBoundingClientRect();this.cardWidth!==e.width&&(this.cardWidth=this.canvas.width=e.width,this.cardHeight=this.canvas.height=e.height,this.drawOverlay())},initCanvas:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d")},drawOverlay:function(){var t=this;this.image.src?h()(this.image,0,0,this.cardWidth,this.cardHeight).render(this.ctx):(this.image.crossOrigin="Anonymous",this.image.src=this.imageUrl,this.image.onload=function(){h()(t.image,0,0,t.cardWidth,t.cardHeight).render(t.ctx),t.overlayLoaded=!0})},prepBrush:function(){this.brushUrl&&(this.brush.crossOrigin="Anonymous",this.brush.src=this.brushUrl)},scratchAt:function(t,e){this.brushUrl?this.ctx.drawImage(this.brush,t-this.brush.width/2,e-this.brush.height/2):(this.ctx.beginPath(),this.ctx.arc(t,e,25,0,2*Math.PI,!1),this.ctx.fill())},handleMouseDown:function(t){this.isDrawing=!0,this.lastPoint=r(t,this.canvas)},handleMouseUp:function(){this.isDrawing=!1},handleMouseMove:function(t){if(this.isDrawing){t.preventDefault();for(var e=r(t,this.canvas),n=s(this.lastPoint,e),a=o(this.lastPoint,e),h=void 0,c=void 0,u=0;u<n;u++)h=this.lastPoint.x+Math.sin(a)*u,c=this.lastPoint.y+Math.cos(a)*u,this.ctx.globalCompositeOperation="destination-out",this.scratchAt(h,c);this.lastPoint=e,this.handlePercentage(i(this.ctx,this.cardWidth,this.cardHeight,32))}},handlePercentage:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)>this.finishPercent&&this.reveal()},reveal:function(){this.isFinished||(this.canvas.parentNode.removeChild(this.canvas),this.onComplete&&this.onComplete()),this.isFinished=!0}},watch:{forceReveal:function(t){t&&this.reveal()}},mounted:function(){window.addEventListener("resize",this.setSize),this.initCanvas(),this.setSize(),this.drawOverlay(),this.prepBrush()},beforeDestroy:function(){window.removeEventListener("resize",this.setSize)}}},function(t,e,n){"use strict";function i(t){o||n(2)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),s=n(9),o=!1,a=n(7),h=i,c=a(r.a,s.a,!1,h,"data-v-565bbe18",null);c.options.__file="src\\ScratchCard.vue",e.default=c.exports},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("11ad9c07",i,!1)},function(t,e,n){e=t.exports=n(4)(!1),e.push([t.i,"\n.scratchcard[data-v-565bbe18] {\r\n  position: relative;\r\n  display: block;\r\n  overflow: hidden;\n}\n.scratchcard-content[data-v-565bbe18] {\r\n  display: inline-block;\r\n  max-width: 100%;\n}\n.scratchcard-overlay[data-v-565bbe18] {\r\n  position: absolute;\r\n  z-index: 1;\n}\r\n",""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(s(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(s(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:o}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function s(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(g){var s=l++;i=f||(f=r()),e=o.bind(null,i,s,!1),n=o.bind(null,i,s,!0)}else i=r(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function o(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function a(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(6),u={},d=h&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var r=c(t,e);return i(r),function(e){for(var n=[],s=0;s<r.length;s++){var o=r[s],a=u[o.id];a.refs--,n.push(a)}e?(r=c(t,e),i(r)):r=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete u[a.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var s=e[r],o=s[0],a=s[1],h=s[2],c=s[3],u={id:t+":"+r,css:a,media:h,sourceMap:c};i[o]?i[o].parts.push(u):n.push(i[o]={id:o,parts:[u]})}return n}},function(t,e){t.exports=function(t,e,n,i,r,s){var o,a=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(o=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=i),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(t,e){return u.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:o,exports:a,options:c}}},function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,i,r,s,o){n(this,t);var a=e.width/e.height,h=s/o;this.img=e,this.x=i,this.y=r,this.width=s,this.height=o,this.bounds=[{width:e.width,height:e.height,sx:0,sy:0}],this.sw=a<h?e.width:e.height*h,this.sh=a<h?e.width/h:e.height,this.pan(.5,.5)}return i(t,[{key:"crop",value:function(){var t=this.sw,e=this.sh,n=this.sx,i=this.sy;return this.bounds.push({width:t,height:e,sx:n,sy:i}),this}},{key:"pan",value:function(t,e){if(t<0||t>1)throw new Error("make sure 0 < cx < 1 ");if(e<0||e>1)throw new Error("make sure 0 < cy < 1 ");var n=this.bounds[this.bounds.length-1],i=n.width,r=n.height,s=n.sx,o=n.sy;return this.sx=s+(i-this.sw)*t,this.sy=o+(r-this.sh)*e,this}},{key:"zoom",value:function(t){if(t<1)throw new Error("zoom not >= 1");return this.sx+=(this.sw-this.sw/t)/2,this.sy+=(this.sh-this.sh/t)/2,this.sw/=t,this.sh/=t,this}},{key:"render",value:function(t){return t.drawImage(this.img,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.width,this.height),this}}]),t}();t.exports=function(t,e,n,i,s){return new r(t,e,n,i,s)}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scratchcard",style:"height:"+t.cardHeight+"px"},[n("canvas",{ref:"canvas",staticClass:"scratchcard-overlay",on:{mousedown:t.handleMouseDown,mousemove:t.handleMouseMove,mouseup:t.handleMouseUp,touchstart:t.handleMouseDown,touchmove:t.handleMouseMove,touchend:t.handleMouseUp}}),t._v(" "),n("div",{ref:"content",staticClass:"scratchcard-content",style:{visibility:t.overlayLoaded?"visible":"hidden"}},[t._t("default")],2)])},r=[];i._withStripped=!0;var s={render:i,staticRenderFns:r};e.a=s}])});