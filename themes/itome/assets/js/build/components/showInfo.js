var app=function(){"use strict";return function(){document.querySelectorAll(".team_card").forEach((e=>{const t=e.querySelector("[data-btn-more-show]"),c=e.querySelector("[data-btn-more-close]");t.addEventListener("click",(()=>{e.classList.add("is-opened")})),c.addEventListener("click",(()=>{e.classList.remove("is-opened")}))}))}}();