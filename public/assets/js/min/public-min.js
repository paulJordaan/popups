(function(){function t(){}function e(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function n(t){return function(){return this[t].apply(this,arguments)}}var i=t.prototype,r=this,o=r.EventEmitter;i.getListeners=function(t){var e,n,i=this._getEvents();if("object"==typeof t){e={};for(n in i)i.hasOwnProperty(n)&&t.test(n)&&(e[n]=i[n])}else e=i[t]||(i[t]=[]);return e},i.flattenListeners=function(t){var e,n=[];for(e=0;t.length>e;e+=1)n.push(t[e].listener);return n},i.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&(e={},e[t]=n),e||n},i.addListener=function(t,n){var i,r=this.getListenersAsObject(t),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===e(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(t){return this.getListeners(t),this},i.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},i.removeListener=function(t,n){var i,r,o=this.getListenersAsObject(t);for(r in o)o.hasOwnProperty(r)&&(i=e(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},i.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},i.manipulateListeners=function(t,e,n){var i,r,o=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(i=n.length;i--;)o.call(this,e,n[i]);else for(i in e)e.hasOwnProperty(i)&&(r=e[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(t){var e,n=typeof t,i=this._getEvents();if("string"===n)delete i[t];else if("object"===n)for(e in i)i.hasOwnProperty(e)&&t.test(e)&&delete i[e];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(t,e){var n,i,r,o,s=this.getListenersAsObject(t);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(t,n.listener),o=n.listener.apply(this,e||[]),o===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},i.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return r.EventEmitter=o,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}).call(this),function(t){function e(e){var n=t.event;return n.target=n.target||n.srcElement||e,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(t,e,n){t.addEventListener(e,n,!1)}:n.attachEvent&&(i=function(t,n,i){t[n+i]=i.handleEvent?function(){var n=e(t);i.handleEvent.call(i,n)}:function(){var n=e(t);i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var r=function(){};n.removeEventListener?r=function(t,e,n){t.removeEventListener(e,n,!1)}:n.detachEvent&&(r=function(t,e,n){t.detachEvent("on"+e,t[e+n]);try{delete t[e+n]}catch(i){t[e+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):t.eventie=o}(this),function(t,e){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return e(t,n,i)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.imagesLoaded=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,n){function i(t,e){for(var n in e)t[n]=e[n];return t}function r(t){return"[object Array]"===p.call(t)}function o(t){var e=[];if(r(t))e=t;else if("number"==typeof t.length)for(var n=0,i=t.length;i>n;n++)e.push(t[n]);else e.push(t);return e}function s(t,e,n){if(!(this instanceof s))return new s(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=o(t),this.options=i({},this.options),"function"==typeof e?n=e:i(this.options,e),n&&this.on("always",n),this.getImages(),c&&(this.jqDeferred=new c.Deferred);var r=this;setTimeout(function(){r.check()})}function a(t){this.img=t}function u(t){this.src=t,h[t]=this}var c=t.jQuery,f=t.console,d=void 0!==f,p=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;e>t;t++){var n=this.elements[t];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var a=r[o];this.addImage(a)}}},s.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},s.prototype.check=function(){function t(t,r){return e.options.debug&&d&&f.log("confirm",t,r),e.progress(t),n++,n===i&&e.complete(),!0}var e=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return void this.complete();for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",t),o.check()}},s.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var n=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[n](e)}})},c&&(c.fn.imagesLoaded=function(t,e){var n=new s(this,t,e);return n.jqDeferred.promise(c(this))}),a.prototype=new e,a.prototype.check=function(){var t=h[this.img.src]||new u(this.img.src);if(t.isConfirmed)return void this.confirm(t.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var e=this;t.on("confirm",function(t,n){return e.confirm(t.isLoaded,n),!0}),t.check()},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var h={};return u.prototype=new e,u.prototype.check=function(){if(!this.isChecked){var t=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},u.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},u.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},u.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},u.prototype.unbindProxyEvents=function(t){n.unbind(t.target,"load",this),n.unbind(t.target,"error",this)},s}),function($){"use strict";function t(t,e,n,i,r){var o={url:spuvar.ajax_url,data:t,cache:!1,type:"POST",dataType:"json",timeout:3e4},r=r||!1,n=n||!1,i=i||!1;e&&(o.url=e),n&&(o.success=n),i&&(o.error=i),r&&(o.dataType=r),$.ajax(o)}function e(t,e,n){if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var r="; expires="+i.toGMTString()}else var r="";document.cookie=t+"="+e+r+"; path=/"}function n(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return null}function i(){try{FB.Event.subscribe("edge.create",function(t,e){var n=$(e).parents(".spu-box").data("box-id");n&&SPU.hide(n)})}catch(t){}h=!0,clearInterval(l)}function r(t){var e=$(t.target).parents(".spu-box").data("box-id");e&&SPU.hide(e)}function o(t){if("on"==t.state){var e=jQuery(".spu-gogl").data("box-id");e&&SPU.hide(e)}}function s(t){if("confirm"==t.type){var e=jQuery(".spu-gogl").data("box-id");e&&SPU.hide(e)}}function a(){if(spuvar_social.facebook)try{FB.XFBML.parse()}catch(t){}if(spuvar_social.google)try{gapi.plusone.go()}catch(t){}if(spuvar_social.twitter)try{twttr.widgets.load()}catch(t){}}function u(){$(".spu-box form").each(function(){var t=$(this).attr("action");t&&$(this).attr("action",t.replace("?spu_action=spu_load",""))}),$.fn.wpcf7InitForm&&$(".spu-box div.wpcf7 > form").wpcf7InitForm()}var c=function(){function i(t){var e=f[t],n=$(window).width(),i=$(window).height(),r=e.outerHeight(),o=e.outerWidth(),s=e.data("width"),a=0,u=i/2-r/2,c="fixed",d=$(document).scrollTop();e.hasClass("spu-centered")&&(n>s&&(a=n/2-o/2),e.css({left:a,position:c,top:u})),r+50>i&&(c="absolute",u=d,e.css({position:c,top:u,bottom:"auto"}))}function r(t){var e=$(t).find(".spu-facebook");if(e.length){var n=e.find(".fb-like > span").width();if(0==n){var i=e.find(".fb-like").data("layout");"box_count"==i?e.append('<style type="text/css"> #'+$(t).attr("id")+" .fb-like iframe, #"+$(t).attr("id")+" .fb_iframe_widget span, #"+$(t).attr("id")+" .fb_iframe_widget{ height: 63px !important;width: 80px !important;}</style>"):e.append('<style type="text/css"> #'+$(t).attr("id")+" .fb-like iframe, #"+$(t).attr("id")+" .fb_iframe_widget span, #"+$(t).attr("id")+" .fb_iframe_widget{ height: 20px !important;width: 80px !important;}</style>")}}}function o(t){var e=t,n=e.data("total");if(n){a();var i=0,r=0,o=e.outerWidth(),s=e.find(".spu-content").width();!spuvar.disable_style&&$(window).width()>o&&(e.find(".spu-shortcode").wrapAll('<div class="spu_shortcodes"/>'),e.find(".spu-shortcode").each(function(){i+=$(this).outerWidth()}),r=s-i-20*n),r>0&&(e.find(".spu-shortcode").each(function(){$(this).css("margin-left",r/2)}),2==n?e.find(".spu-shortcode").last().css("margin-left",0):3==n&&e.find(".spu-shortcode").first().css("margin-left",0))}}function s(t,n,r){var s=f[t],a=$("#spu-bg-"+t),u=s.data("bgopa");if(s.is(":animated"))return!1;if(n===!0&&s.is(":visible")||n===!1&&s.is(":hidden"))return!1;if(n===!1){var c=parseInt(s.data("cookie"));c>0&&e("spu_box_"+t,!0,c),s.trigger("spu.box_close",[t])}else setTimeout(function(){o(s)},1500),s.trigger("spu.box_open",[t]),$(window).resize(function(){i(t)}),i(t);var d=s.data("spuanimation"),p=s.data("close-on-conversion");return"fade"===d?n===!0?s.fadeIn("slow"):n===!1&&(p&&r||!r)&&s.fadeOut("slow"):n===!0?s.slideDown("slow"):n===!1&&(p&&r||!r)&&s.slideUp("slow"),n===!0&&u>0?a.fadeIn():n===!1&&(p&&r||!r)&&a.fadeOut(),n}var u=$(window).height(),c=spuvar.is_admin,f=[];return $(".spu-content").children().first().css({"margin-top":0,"padding-top":0}).end().last().css({"margin-bottom":0,"padding-bottom":0}),$(".spu-box").each(function(){spuvar.safe_mode&&$(this).prependTo("body");var e=$(this),i=e.data("trigger"),o=0,a=1===parseInt(e.data("test-mode")),d=e.data("box-id"),p=1===parseInt(e.data("auto-hide")),h=parseInt(e.data("seconds-close")),l=parseInt(e.data("trigger-number"),10),m="percentage"==i?parseInt(e.data("trigger-number"),10)/100:.8,v=m*$(document).height();r(e),$(document).keyup(function(t){27==t.keyCode&&s(d,!1,!1)});var g=navigator.userAgent,y=g.match(/iPad/i)||g.match(/iPhone/i)?"touchstart":"click";$("body").on(y,function(t){void 0!==t.originalEvent&&s(d,!1,!1)}),$("body").on(y,".spu-box,.spu-clickable",function(t){t.stopPropagation()}),e.hide().css("left",""),f[d]=e;var b=function(){o&&clearTimeout(o),o=window.setTimeout(function(){var t=$(window).scrollTop(),e=t+u>=v;e?(p||$(window).unbind("scroll",b),s(d,!0,!1)):s(d,!1,!1)},100)},w=function(){o&&clearTimeout(o),o=window.setTimeout(function(){s(d,!0,!1)},1e3*l)},_=n("spu_box_"+d);if((void 0==_||""==_||c&&a)&&("seconds"==i&&w(),"percentage"==i&&($(window).bind("scroll",b),b()),window.location.hash&&window.location.hash.length>0)){var x=window.location.hash,E;x.substring(1)===e.attr("id")&&setTimeout(function(){s(d,!0,!1)},100)}e.on("click",".spu-close-popup",function(){s(d,!1,!1),"percentage"==i&&$(window).unbind("scroll",b)}),$('a[href="#spu-'+d+'"]').on("click",function(t){t.preventDefault(),s(d,!0,!1)}).css("cursor","pointer").addClass("spu-clickable"),e.find(".gform_wrapper form").addClass("gravity-form");var L=e.find("form");if(L.length){if(!L.is(".wpcf7-form, .gravity-form, .infusion-form, .widget_wysija, .ninja-forms-form")){var j=L.attr("action"),k=new RegExp(spuvar.site_url,"i");j&&j.length&&(k.test(j)||L.addClass("spu-disable-ajax"))}$(".spu-disable-ajax form").length&&$(".spu-disable-ajax form").addClass("spu-disable-ajax"),e.on("submit","form.spu-disable-ajax",function(){e.trigger("spu.form_submitted",[d]),s(d,!1,!0)}),e.on("submit",'form:not(".wpcf7-form, .gravity-form, .infusion-form, .spu-disable-ajax, .widget_wysija, .ninja-forms-form")',function(n){n.preventDefault();var i=!0,r=$(this),o=r.serialize(),a=r.attr("action"),u=function(t,e,n){console.log("Spu Form error: "+e+" - "+n)},c=function(t){var e=$(t).filter("#spu-"+d).html();$("#spu-"+d).html(e),$("#spu-"+d).find(".mc4wp-form-error").length||setTimeout(function(){s(d,!1,!0)},1e3*spuvar.seconds_confirmation_close)};return t(o,a,c,u,"html"),e.trigger("spu.form_submitted",[d]),i}),$("body").on("mailsent.wpcf7",function(){e.trigger("spu.form_submitted",[d]),s(d,!1,!0)}),$(document).on("gform_confirmation_loaded",function(){e.trigger("spu.form_submitted",[d]),s(d,!1,!0)}),e.on("submit",".infusion-form",function(t){t.preventDefault(),e.trigger("spu.form_submitted",[d]),s(d,!1,!0),this.submit()})}}),{show:function(t){return s(t,!0,!1)},hide:function(t){return s(t,!1,!1)},request:function(e,n,i,r){return t(e,n,i,r)}}};if(spuvar.ajax_mode){var f={pid:spuvar.pid,referrer:document.referrer,is_category:spuvar.is_category,is_archive:spuvar.is_archive},d=function(t){$("body").append(t),$(".spu-box").imagesLoaded(function(){window.SPU=c(),u()})},p=function(t,e,n){console.log("Problem loading popups - error: "+e+" - "+n)};t(f,spuvar.ajax_mode_url,d,p,"html")}else $(".spu-box").imagesLoaded(function(){window.SPU=c()});var h=!1,l=setInterval(function(){"undefined"==typeof FB||h||i()},1e3);if("undefined"!=typeof twttr)try{twttr.ready(function(t){t.events.bind("tweet",r),t.events.bind("follow",r)})}catch(m){}}(jQuery);