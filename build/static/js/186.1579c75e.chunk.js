/*! For license information please see 186.1579c75e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkionic_app_base=self.webpackChunkionic_app_base||[]).push([[186],{186:(e,t,n)=>{n.r(t),n.d(t,{startInputShims:()=>w});var o=n(344),i=n(811);const r=new WeakMap,a=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];r.has(e)!==n&&(n?l(e,t,o,i):d(e,t))},s=e=>e===e.getRootNode().activeElement,l=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=t.parentNode,a=t.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),i.appendChild(a),r.set(e,a);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},d=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c="input, textarea, [no-blur], [contenteditable]",u=(e,t,n)=>{var o;const i=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return m(i.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},m=(e,t,n,o)=>{const i=e.top,r=e.bottom,a=t.top,s=a+15,l=.75*Math.min(t.bottom,o-n)-r,d=s-i,c=Math.round(l<0?-l:d>0?-d:0),u=Math.min(c,i-a),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(i-s)}},f=async function(e,t,n,r,s){let l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(!n&&!r)return;const d=u(e,n||r,s);if(n&&Math.abs(d.scrollAmount)<4)t.focus();else if(a(e,t,!0,d.inputSafeY,l),t.focus(),(0,i.r)((()=>e.click())),"undefined"!==typeof window){let i;const r=async()=>{void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),n&&await(0,o.c)(n,0,d.scrollAmount,d.scrollDuration),a(e,t,!1,d.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await(0,o.g)(n),a=e.scrollHeight-e.clientHeight;if(d.scrollAmount>a-e.scrollTop)return"password"===t.type?(d.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(i=setTimeout(r,1e3))}r()}},p=(e,t,n)=>{if(t&&n){const o=t.x-n.x,i=t.y-n.y;return o*o+i*i>e*e}return!1},v="$ionPaddingTimer",h=(e,t)=>{var n,i;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(i=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===i?void 0:i.tagName))return;const r=(0,o.a)(e);if(null===r)return;const a=r[v];a&&clearTimeout(a),t>0?r.style.setProperty("--keyboard-offset",`${t}px`):r[v]=setTimeout((()=>{r.style.setProperty("--keyboard-offset","0px")}),120)},w=(e,t)=>{const n=document,r="ios"===t,l="android"===t,d=e.getNumber("keyboardHeight",290),u=e.getBoolean("scrollAssist",!0),m=e.getBoolean("hideCaretOnScroll",r),v=e.getBoolean("inputBlurring",r),w=e.getBoolean("scrollPadding",!0),g=Array.from(n.querySelectorAll("ion-input, ion-textarea")),y=new WeakMap,E=new WeakMap,b=async e=>{await new Promise((t=>(0,i.c)(e,t)));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),r=(0,o.a)(e),c=r?null:e.closest("ion-footer");if(!n)return;if(r&&m&&!y.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&a(e,t,n)},r=()=>a(e,t,!1),l=()=>o(!0),d=()=>o(!1);return(0,i.a)(n,"ionScrollStart",l),(0,i.a)(n,"ionScrollEnd",d),t.addEventListener("blur",r),()=>{(0,i.b)(n,"ionScrollStart",l),(0,i.b)(n,"ionScrollEnd",d),t.removeEventListener("blur",r)}})(e,n,r);y.set(e,t)}if(!("date"===n.type||"datetime-local"===n.type)&&(r||c)&&u&&!E.has(e)){const t=function(e,t,n,o,r){let a,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const d=e=>{a=(0,i.p)(e)},c=d=>{if(!a)return;const c=(0,i.p)(d);p(6,a,c)||s(t)||f(e,t,n,o,r,l)};return e.addEventListener("touchstart",d,{capture:!0,passive:!0}),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",c,!0)}}(e,n,r,c,d,l);E.set(e,t)}};v&&(()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},r=()=>{e=!0},a=o=>{if(t)return void(t=!1);const i=n.activeElement;if(!i)return;if(i.matches(c))return;const r=o.target;r!==i&&(r.matches(c)||r.closest(c)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};(0,i.a)(n,"ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",a,!1)})(),w&&(e=>{const t=document,n=t=>{h(t.target,e)},o=e=>{h(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)})(d);for(const o of g)b(o);n.addEventListener("ionInputDidLoad",(e=>{b(e.detail)})),n.addEventListener("ionInputDidUnload",(e=>{(e=>{if(m){const t=y.get(e);t&&t(),y.delete(e)}if(u){const t=E.get(e);t&&t(),E.delete(e)}})(e.detail)}))}}}]);
//# sourceMappingURL=186.1579c75e.chunk.js.map