!function(d){function e(e){for(var t,a,r=e[0],n=e[1],s=e[2],o=0,i=[];o<r.length;o++)a=r[o],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&i.push(u[a][0]),u[a]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(d[t]=n[t]);for(h&&h(e);i.length;)i.shift()();return l.push.apply(l,s||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==u[s]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var a={},u={209:0},l=[];function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return d[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=d,o.c=a,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var h=r;l.push([741,0]),c()}({145:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e,t){e.keypress(function(e){13==e.which&&(t.trigger("click"),e.preventDefault())})}},17:function(e,t){e.exports=jQuery},741:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(1),o=a.n(s),i=a(145),d=a(4),c=$(".js-time-left"),u=$(".js-sms-send"),l=$(".js-fetch-btn-text"),h=function e(){var t=c.text();c.html(t-1),0<t-1?(u.attr("disabled",!0),setTimeout(e,1e3)):(c.html(""),l.html(Translator.trans("oauth.send.validate_message")),u.removeAttr("disabled"))},p=a(85),m=a(92);new(function(){function e(){n()(this,e),this.$form=$("#third-party-create-account-form"),this.$btn=$(".js-submit-btn"),this.validator=null,this.dragCaptchaToken="",this.smsToken=null,this.$sendBtn=$(".js-sms-send"),this.drag=!!$("#drag-btn").length&&new m.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"bind_register"}),this.init()}return o()(e,[{key:"init",value:function(){this.setValidateRule(),this.initValidator(),this.smsSend(),this.submitForm(),this.removeSmsErrorTip(),this.dragEvent()}},{key:"setValidateRule",value:function(){$.validator.addMethod("spaceNoSupport",function(e,t){return e.indexOf(" ")<0},$.validator.format(Translator.trans("validate.have_spaces")))}},{key:"dragEvent",value:function(){var t=this;this.drag&&this.drag.on("success",function(e){t.$sendBtn.attr("disabled",!1),t.dragCaptchaToken=e.token}),$(".js-drag-jigsaw").hasClass("hidden")||this.addDragCaptchaRules()}},{key:"initValidator",value:function(){this.rules={username:{required:!0,byte_minlength:4,byte_maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}},invitedCode:{required:!1,reg_inviteCode:!0,es_remote:{type:"get"}},password:{required:!0,minlength:5,maxlength:20,spaceNoSupport:!0},confirmPassword:{required:!0,equalTo:"#password"},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6]},agree_policy:{required:!0}},this.validator=this.$form.validate({rules:this.rules,messages:{sms_code:{required:Translator.trans("site.captcha_code.required"),rangelength:Translator.trans("validate.sms_code.message")},agree_policy:{required:Translator.trans("validate.valid_policy_input.message")}}})}},{key:"smsSend",value:function(){var a=this,r=this,n=$("#captcha_code");this.$sendBtn.length&&this.$sendBtn.click(function(e){r.smsSended||($.ajaxSetup({global:!1}),r.smsSended=!0),r.$sendBtn.attr("disabled",!0);var t={type:"register",mobile:$(".js-account").text(),dragCaptchaToken:a.dragCaptchaToken,phrase:n.val()};p.a.sms.send({data:t}).then(function(e){var t;$.ajaxSetup({global:!0}),a.smsToken=e.smsToken,t=120,c.html(t),l.html(Translator.trans("site.data.get_sms_code_again_btn")),Object(d.a)("success",Translator.trans("site.data.get_sms_code_success_hint")),h()}).catch(function(e){r.drag&&($.ajaxSetup({global:!0}),r.addDragCaptchaRules(),r.drag.initDragCaptcha(),$(".js-drag-jigsaw").removeClass("hidden"))})})}},{key:"submitForm",value:function(){var n=this;this.$btn.click(function(e){var t,a,r=$(e.target);n.validator.form()&&(r.button("loading"),t={nickname:$("#username").val(),password:$("#password").val(),mobile:$(".js-account").html(),smsToken:n.smsToken,smsCode:$("#sms-code").val(),captchaToken:n.captchaToken,phrase:$("#captcha_code").val(),dragCaptchaToken:$('[name="dragCaptchaToken"]').val(),invitedCode:0<$("#invitedCode").length?$("#invitedCode").val():""},a=Translator.trans("oauth.send.sms_code_error_tip"),$.post(r.data("url"),t,function(e){r.button("reset"),1===e.success?window.location.href=e.url:$(".js-password-error").length||r.prev().addClass("has-error").append('<p id="password-error" class="form-error-message js-password-error">'.concat(a,"</p>"))}).error(function(e){r.button("reset")}))}),Object(i.a)(this.$form,this.$btn)}},{key:"addDragCaptchaRules",value:function(){$('[name="dragCaptchaToken"]').rules("add",{required:!0,messages:{required:Translator.trans("auth.register.drag_captcha_tips")}})}},{key:"removeSmsErrorTip",value:function(){$("#sms-code").focus(function(){var e=$(".js-password-error");e.length&&e.remove()})}}]),e}())}});