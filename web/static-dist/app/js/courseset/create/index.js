!function(a){function e(e){for(var t,r,n=e[0],i=e[1],o=e[2],u=0,s=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&s.push(c[r][0]),c[r]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(a[t]=i[t]);for(f&&f(e);s.length;)s.shift()();return p.push.apply(p,o||[]),l()}function l(){for(var e,t=0;t<p.length;t++){for(var r=p[t],n=!0,i=1;i<r.length;i++){var o=r[i];0!==c[o]&&(n=!1)}n&&(p.splice(t--,1),e=u(u.s=r[0]))}return e}var r={},c={151:0},p=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=a,u.c=r,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var f=n;p.push([763,0]),l()}({763:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(1),u=r.n(o);new(function(){function t(e){i()(this,t),this.$element=e,this.$courseSetType=this.$element.find(".js-courseSetType"),this.$currentCourseSetType=this.$element.find(".js-courseSetType.active"),this.init()}return u()(t,[{key:"init",value:function(){var n=this;this.validator=this.$element.validate({rules:{title:{byte_maxlength:200,required:!0,trim:!0,course_title:!0}},messages:{title:{required:Translator.trans("course_set.title_required_error_hint"),trim:Translator.trans("course_set.title_required_error_hint")}}}),this.$courseSetType.click(function(e){n.$courseSetType.removeClass("active"),n.$currentCourseSetType=$(e.currentTarget).addClass("active");var t=n.$currentCourseSetType.data("type");$('input[name="type"]').val(t);var r=$("#course_title");"live"===t&&(r.rules("remove"),r.rules("add",{required:!0,byte_maxlength:200,trim:!0,open_live_course_title:!0}))})}}]),t}())($("#courseset-create-form"))}});