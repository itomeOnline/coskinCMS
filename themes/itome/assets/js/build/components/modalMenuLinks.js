var app=function(){"use strict";class e{constructor(e){this.el=e,this.needOverlay=!e.dataset.modalNoOverlay,this.parentModal=e.dataset.parentModal,this.clickedToggle=null,this.firstInput=this.el.querySelector("input, textarea")}get isActive(){return this.el.classList.contains("is-active")}set isActive(e){e?(this.el.classList.add("is-active"),this.firstInput&&setTimeout((()=>{this.firstInput.focus()}),100)):(this.el.classList.remove("is-active"),this.clickedToggle&&this.clickedToggle.classList.remove("is-clicked"),this.el.querySelector(".on-success")&&setTimeout((e=>{this.el.querySelector(".on-success").classList.remove("on-success")}),500))}get isOnActiveChild(){return this.el.classList.contains("on-active-child")}set isOnActiveChild(e){e?this.el.classList.add("on-active-child"):this.el.classList.remove("on-active-child")}}let t=function(){let t,s,l,a,o=null,d=document.querySelector(".modals"),n={};function i(t){let s=t.dataset.modal;(function(e){return void 0!==n[e]})(s)||(n[s]=new e(t))}function c(e){o&&(o===n[e.parentModal]?n[e.parentModal].isOnActiveChild=!0:(o.parentModal&&n[o.parentModal].isActive&&r(n[o.parentModal]),r())),e.el.dataset.addBodyClass&&document.body.classList.add(e.el.dataset.addBodyClass),(a&&!e.el.hasAttribute("data-add-body-class")||e.el.hasAttribute("data-add-body-class")&&a!==e.el.dataset.addBodyClass)&&document.body.classList.remove(a),e.el.dataset.addBodyClass&&(a=e.el.dataset.addBodyClass),e.isActive=!0,o=e,v()}function r(e){o.parentModal?(n[o.parentModal].isOnActiveChild=!1,o.isActive=!1,o=n[o.parentModal]):m(),v()}function u(e=null){e?r():m()}function m(e){if((!e||1===e.which)&&o){if(o.isActive=!1,n[o.parentModal]&&(n[o.parentModal].isActive=!1,n[o.parentModal].isOnActiveChild=!1),o.el.querySelector("video")&&o.el.querySelector("video").pause(),o.el.dataset.addBodyClass){const e=o.el.dataset.addBodyClass;setTimeout((t=>{o&&o.el.dataset.addBodyClass!==e?document.body.classList.remove(e):o||document.body.classList.remove(e)}),500)}o=null,v()}}function v(){t&&(o&&o.needOverlay?(t.classList.add("is-active"),document.querySelector("html").style.overflowY="hidden",document.querySelector("html").style.touchAction="none",l&&(l.style.willChange="transform")):(t.classList.remove("is-active"),document.querySelector("html").style.overflowY="unset",document.querySelector("html").style.touchAction="",l&&(l.style.willChange="")))}function y(e){let t=e.pageX,a=e.pageY,o=s.left,d=s.top,n=t-o-l.offsetWidth/2,i=a-d-l.offsetHeight/2;l.style.transform="translate3d("+n+"px, "+i+"px, 0)"}function h(){l.style.display="none"}function f(){l.style.display=""}function p(){document.addEventListener("click",(function(e){if(console.log("test"),1===e.which){let l=e.target.closest("[data-linked-modal]");l&&n[l.dataset.linkedModal]&&(l.classList.add("is-clicked"),n[l.dataset.linkedModal].clickedToggle=l,c(n[l.dataset.linkedModal]),e.stopPropagation(),e.preventDefault(),l.dataset.modalSetInputs&&function(e,t){const s=e.el.querySelector("form")?e.el.querySelector("form"):e.el.closest("form");t.forEach((t=>{console.log(e.el);const l=s.querySelector(`[name="${t.key}"]`);l&&(l.value=t.value)}))}(n[l.dataset.linkedModal],JSON.parse(l.dataset.modalSetInputs)),l.dataset.modalFormId&&(t=n[l.dataset.linkedModal],s=l.dataset.modalFormId,t.el.querySelector("form").dataset.formId=s))}var t,s})),document.addEventListener("mousedown",(function(e){if(1===e.which){let t=e.target.closest("[data-modal-close]");if(t)u(n[t.closest("[data-modal]").dataset.modal])}})),document.addEventListener("keyup",(function(e){27==(e=e||window.event).keyCode&&u(o)})),document.addEventListener("needModal",(({detail:e})=>{c(n[e])})),document.addEventListener("needCloseModal",(({detail:e})=>{r(n[e])})),t&&(t.addEventListener("mousedown",m),l&&(s=t.getBoundingClientRect(),t.addEventListener("mousemove",Utils.throttle(y,10)),t.addEventListener("mouseleave",h),t.addEventListener("mouseenter",f)))}return setTimeout((e=>{d.style.opacity=""}),1e3),{init:function(){t=document.getElementById("commonModalOverlay"),l=document.getElementById("commonCloseButton"),function(){n={};let e=document.querySelectorAll("[data-modal]");[].forEach.call(e,i)}(),p()},closeAll:m}}();return function(){document.querySelectorAll('[data-menu-link=""]').forEach((e=>{e.addEventListener("click",(e=>{t.closeAll()}))}))}}();