define("echo.js/1.7.0/index",[],function(t,e,n){"use strict";var o,r,c,a,d,l=window,u={},i=function(){},f=function(t){return null===t.offsetParent},s=function(t,e){if(f(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},h=function(){(a||!r)&&(clearTimeout(r),r=setTimeout(function(){u.render(),r=null},c))};u.init=function(t){t=t||{};var e=t.offset||0,n=t.offsetVertical||e,r=t.offsetHorizontal||e,f=function(t,e){return parseInt(t||e,10)};o={t:f(t.offsetTop,n),b:f(t.offsetBottom,n),l:f(t.offsetLeft,r),r:f(t.offsetRight,r)},c=f(t.throttle,250),a=t.debounce!==!1,d=!!t.unload,i=t.callback||i,u.render(),document.addEventListener?(l.addEventListener("scroll",h,!1),l.addEventListener("load",h,!1)):(l.attachEvent("onscroll",h),l.attachEvent("onload",h))},u.render=function(){for(var t,e,n=document.querySelectorAll("img[data-echo], [data-echo-background]"),r=n.length,c={l:0-o.l,t:0-o.t,b:(l.innerHeight||document.documentElement.clientHeight)+o.b,r:(l.innerWidth||document.documentElement.clientWidth)+o.r},a=0;r>a;a++)e=n[a],s(e,c)?(d&&e.setAttribute("data-echo-placeholder",e.src),null!==e.getAttribute("data-echo-background")?e.style.backgroundImage="url("+e.getAttribute("data-echo-background")+")":e.src=e.getAttribute("data-echo"),d||(e.removeAttribute("data-echo"),e.removeAttribute("data-echo-background")),i(e,"load")):d&&(t=e.getAttribute("data-echo-placeholder"))&&(null!==e.getAttribute("data-echo-background")?e.style.backgroundImage="url("+t+")":e.src=t,e.removeAttribute("data-echo-placeholder"),i(e,"unload"));r||u.detach()},u.detach=function(){document.removeEventListener?l.removeEventListener("scroll",h):l.detachEvent("onscroll",h),clearTimeout(r)},n.exports=u});