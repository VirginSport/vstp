!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(1),n(!function(){var e=new Error('Cannot find module "./src/scss-overrides/main.scss"');throw e.code="MODULE_NOT_FOUND",e}()),n(3),"function"==typeof requireAll&&requireAll(n(9))},function(e,t){},,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=n(4),o=i(s),r=n(5),u=i(r);(0,o["default"])(),(0,u["default"])()},function(e,t){"use strict";function n(e,t){function n(){u.addClass("vs-user-menu__trigger--active"),a.addClass("vs-user-dropdown--open"),o=!0}function i(){u.removeClass("vs-user-menu__trigger--active"),a.removeClass("vs-user-dropdown--open"),o=!1}var o=!1,r=t.find(".vs-user-menu"),u=r.find(".vs-user-menu__trigger"),a=r.find(".vs-user-dropdown");e.on("click",function(e){o&&!s.contains(r[0],e.target)&&i()}),u.on("click",function(){o?i():n()})}function i(e,t){var n=e.find(".vs-menu-trigger");n.on("click",function(){e.toggleClass("vs-menu-open")})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=s("body"),t=s(".vs-header");n(e,t),i(e,t)};var s=window.jQuery},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){var e=(0,m["default"])(".vs-region").not(".vs-region--found");e.addClass("vs-region--found").each(function(e,t){w.push(new _(t,w[e-1]))})}function r(e,t){var n=.3,i=e*n,s=0,o=e*b;return"M0 "+o+" C "+i+" "+s+", "+(e-i)+" "+s+", "+e+" "+o+" V "+(t+o)+" H 0 V 0 Z"}function u(){return"svg__"+(Math.random().toString(36)+"00000000000000000").slice(2,12)}function a(e,t,n){var i=window.document.createElementNS("http://www.w3.org/2000/svg",t);return n&&p(i,n),e&&e.appendChild(i),i}function p(e,t){for(var n in t)e.setAttribute(n,t[n])}function l(e){for(var t=e.classList,n=0;n<t.length;n++)if(f["default"].hasOwnProperty(t[n]))return f["default"][t[n]];return f["default"]["default"]}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),g=n(6),f=i(g),v=n(7),d=i(v),h=n(8),m=i(h),x=-90,b=.041,w=[];t["default"]=function(){var e=function(){w.forEach(function(e){return e.update()})};(0,d["default"])(e),window.setInterval(e,500),Drupal.behaviors.virginSportCurve={attach:function(){o()}}};var _=function(){function e(t,n){s(this,e),this.el=t,this.lastWidth=0,this.lastHeight=0,this.isCurved=1==t.getAttribute("data-vs-region-curved"),this.previousRegion=n,this.setup(),this.update()}return c(e,[{key:"update",value:function(){var e=this.el.offsetWidth,t=this.el.offsetHeight;if(this.lastWidth!=e||this.lastHeight!=t){this.lastHeight=t,this.lastWidth=e;var n=e*b,i=this.isCurved?t+n:t,s=this.isCurved?n*-1:0;p(this.svg,{viewBox:"0 0 "+e+" "+i,style:"position: absolute; top: "+s+"px; left: 0; bottom: 0; right: 0; z-index: 0"}),p(this.spacer,{style:"height: "+n+"px"}),p(this.path,{d:r(e,t)}),this.isCurved||p(this.svg,{style:"display: none"}),this.previousRegion&&this.previousRegion.spacer&&p(this.previousRegion.spacer,{"data-vs-region-overlap":this.el.getAttribute("data-vs-region-overlap"),"data-vs-region-curved":this.el.getAttribute("data-vs-region-curved")})}}},{key:"setup",value:function(){this.pathID=u(),this.gradientID=u(),p(this.el,{style:"position: relative;"}),this.svg=a(null,"svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMax slice","class":"vs-region__bg"}),this.path=a(this.svg,"path",{id:this.pathID,fill:"url(#"+this.gradientID+")"});var e=l(this.el);this.gradient=a(this.svg,"linearGradient",{id:this.gradientID,gradientUnits:"userSpaceOnUse",gradientTransform:"rotate("+(parseInt(e.rotate)+x)+")",x1:"0%",y1:"0%",x2:"100%",y2:"0%"}),a(this.gradient,"stop",{offset:"0%","stop-color":e.from,"stop-opacity":1}),a(this.gradient,"stop",{offset:"100%","stop-color":e.to,"stop-opacity":1}),this.spacer=window.document.createElement("div"),p(this.spacer,{"class":"vs-region__bg-spacer"}),this.el.appendChild(this.svg),this.el.appendChild(this.spacer)}}]),e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={"default":{from:"#FFFFFF",to:"#FFFFFF",rotate:"90"},"vs-region--gradient-blue":{from:"#1F85FF",to:"#4231CB",rotate:"90"},"vs-region--gradient-teal":{from:"#FF5858",to:"#FFE386",rotate:"90"}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[];window.addEventListener("resize",function(){window.requestAnimationFrame(function(){n.forEach(function(e){return e()})})}),t["default"]=function(e){n.push(e)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=window.jQuery},function(e,t,n){function i(e){return n(s(e))}function s(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./banner-example.png":10,"./basket.png":11,"./basket.svg":12,"./content-block-example.png":13,"./hero-event-card-example.png":14,"./hero-event-card-example@2x.png":15,"./splash-page-pattern.png":16,"./vs-footer-uk-flag.png":17,"./vs-footer-uk-flag.svg":18,"./vs-logo-alternate.png":19,"./vs-logo-alternate.svg":20,"./vs-logo-red.png":21,"./vs-logo-red@2x.png":22,"./vs-logo-small.png":23,"./vs-logo-small.svg":24,"./vs-logo.png":25,"./vs-logo.svg":26,"./vs-region-select-uk.png":27,"./vs-region-select-uk@2x.png":28,"./vs-region-select-us.png":29,"./vs-region-select-us@2x.png":30,"./vs-uk-flag.svg":31,"./vs-us-flag.svg":32};i.keys=function(){return Object.keys(o)},i.resolve=s,e.exports=i,i.id=9},function(e,t,n){e.exports=n.p+"public/img/banner-example.png"},function(e,t,n){e.exports=n.p+"public/img/basket.png"},function(e,t,n){e.exports=n.p+"public/img/basket.svg"},function(e,t,n){e.exports=n.p+"public/img/content-block-example.png"},function(e,t,n){e.exports=n.p+"public/img/hero-event-card-example.png"},function(e,t,n){e.exports=n.p+"public/img/hero-event-card-example@2x.png"},function(e,t,n){e.exports=n.p+"public/img/splash-page-pattern.png"},function(e,t,n){e.exports=n.p+"public/img/vs-footer-uk-flag.png"},function(e,t,n){e.exports=n.p+"public/img/vs-footer-uk-flag.svg"},function(e,t,n){e.exports=n.p+"public/img/vs-logo-alternate.png"},function(e,t,n){e.exports=n.p+"public/img/vs-logo-alternate.svg"},function(e,t,n){e.exports=n.p+"public/img/vs-logo-red.png"},function(e,t,n){e.exports=n.p+"public/img/vs-logo-red@2x.png"},function(e,t,n){e.exports=n.p+"public/img/vs-logo-small.png"},function(e,t,n){e.exports=n.p+"public/img/vs-logo-small.svg"},function(e,t,n){e.exports=n.p+"public/img/vs-logo.png"},function(e,t,n){e.exports=n.p+"public/img/vs-logo.svg"},function(e,t,n){e.exports=n.p+"public/img/vs-region-select-uk.png"},function(e,t,n){e.exports=n.p+"public/img/vs-region-select-uk@2x.png"},function(e,t,n){e.exports=n.p+"public/img/vs-region-select-us.png"},function(e,t,n){e.exports=n.p+"public/img/vs-region-select-us@2x.png"},function(e,t,n){e.exports=n.p+"public/img/vs-uk-flag.svg"},function(e,t,n){e.exports=n.p+"public/img/vs-us-flag.svg"}]);