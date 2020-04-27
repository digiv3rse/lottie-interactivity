function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var a={player:"lottie-player"},i=function(){function i(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,y=o.actions,c=o.container,u=o.mode,f=o.player,m=r(o,["actions","container","mode","player"]);if(t(this,i),s.set(this,{writable:!0,value:function(){try{var e=n.boundingBoxUtils().action;"loop"===e.type?!0===n.player.isPaused&&n.player.playSegments(e.frames,!0):"play"===e.type?(!0===n.player.isPaused&&n.player.resetSegments(),n.player.playSegments(e.frames)):"stop"===e.type&&(n.player.goToAndStop(e.frames[0]),n.player.stop())}catch(e){}}}),l.set(this,{writable:!0,value:function(){try{var e=n.boundingBoxUtils().action;"loop"===e.type||"play"===e.type?n.player.stop():"stop"===e.type&&n.player.playSegments(e.frames,!0)}catch(e){}}}),p.set(this,{writable:!0,value:function(){try{var e=n.boundingBoxUtils(),t=e.currentPercent,r=e.action;n.player.loop=!0,"seek"===r.type?(n.player.playSegments(r.frames,!0),n.player.goToAndStop(Math.ceil((t-r.start)/(r.end-r.start)*n.player.totalFrames),!0)):"loop"===r.type?!0===n.player.isPaused&&n.player.playSegments(r.frames,!0):"play"===r.type?(!0===n.player.isPaused&&n.player.resetSegments(),n.player.play()):"stop"===r.type&&(n.player.goToAndStop(r.frames[0]),n.player.stop())}catch(e){}}}),"object"!==e(f)||"AnimationItem"!==f.constructor.name){if("string"==typeof f){var d=document.querySelector(f);d&&"LOTTIE-PLAYER"===d.nodeName&&(f=d.getLottie())}else f instanceof HTMLElement&&"LOTTIE-PLAYER"===f.nodeName&&(f=f.getLottie());if(!f)throw new Error("".concat("[lottieInteractivity]:"," Specified player is invalid."),f)}"string"==typeof c&&(c=document.querySelector(c)),c||(c=f.wrapper),this.player=f,this.container=c,this.mode=u,this.actions=y,this.options=m}var y,c,u;return y=i,(c=[{key:"boundingBoxUtils",value:function(){var e=this.container.getBoundingClientRect(),t=e.top,n=e.height,r=(window.innerHeight-t)/(window.innerHeight+n);if(!(r<0||r>1)){var o=this.actions.find((function(e){var t=e.start,n=e.end;return r>=t&&r<=n}));if(o)return{currentPercent:r,action:o}}}},{key:"start",value:function(){"scroll"===this.mode&&window.addEventListener("scroll",o(this,p)),"hover"===this.mode&&(this.container.addEventListener("mouseenter",o(this,s)),this.container.addEventListener("mouseleave",o(this,l)))}},{key:"stop",value:function(){"scroll"===this.mode&&window.removeEventListener("scroll",o(this,p)),"hover"===this.mode&&(this.container.removeEventListener("mouseenter",o(this,s)),this.container.removeEventListener("mouseleave",o(this,l)))}}])&&n(y.prototype,c),u&&n(y,u),i}(),s=new WeakMap,l=new WeakMap,p=new WeakMap,y=function(e){var t=new i(e);return t.start(),t};export default y;export{i as LottieInteractivity,y as create};
//# sourceMappingURL=lottie-interactivity.es.js.map
