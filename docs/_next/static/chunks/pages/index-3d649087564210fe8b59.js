(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},1334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),o=n(7294);async function i(e,...t){for(const n of t)switch(typeof n){case"string":await a(e,n);break;case"number":await s(n);break;case"function":await n(e,...t);break;default:await n}}async function a(e,t){const n=function(e,[...t]){return[...e,NaN].findIndex(((e,n)=>t[n]!==e))}(e.textContent,t);await async function(e,t,n=60){for(const r of function*(e){for(const t of e)yield e=>requestAnimationFrame((()=>e.textContent=t))}(t))r(e),await s(n+n*(Math.random()-.5))}(e,[...f(e.textContent,n),...c(t,n)])}async function s(e){await new Promise((t=>setTimeout(t,e)))}function*c([...e],t=0,n=e.length){for(;t<n;)yield e.slice(0,++t).join("")}function*f([...e],t=0,n=e.length){for(;n>t;)yield e.slice(0,--n).join("")}var u="styles_typicalWrapper__1_Uvh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var p=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(0,o.memo)((function(e){var t=e.steps,n=e.loop,r=e.className,a=e.wrapper,s=void 0===a?"p":a,c=(0,o.useRef)(null),f=s,d=[u];return r&&d.unshift(r),(0,o.useEffect)((function(){n===1/0?i.apply(void 0,[c.current].concat(p(t),[i])):"number"===typeof n?i.apply(void 0,[c.current].concat(p(Array(n).fill(t).flat()))):i.apply(void 0,[c.current].concat(p(t)))})),o.createElement(f,{ref:c,className:d.join(" ")})})),l=n(9163),m=n(2557),h=l.ZP.div.withConfig({displayName:"pages__Root",componentId:"wp8vpb-0"})(["text-align:center;"]),y=l.ZP.div.withConfig({displayName:"pages__AppHeader",componentId:"wp8vpb-1"})(["background-color:#000000;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(20px + 1vmin);color:white;"]),_=l.ZP.img.attrs({alt:"logo",src:(0,m.uH)("/instadeeds.png")}).withConfig({displayName:"pages__AppLogo",componentId:"wp8vpb-2"})(["height:5vmin;pointer-events:none;@media (prefers-reduced-motion:no-preference){height:15vmin;border-radius:50%;margin-bottom:30px;border:1vh solid rgb(77,109,62);}@keyframes App-logo-spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]),v=function(){return(0,r.jsx)("h2",{children:"Actions matters"})},g=function(){return(0,r.jsxs)("p",{children:[" ","Stand up for"," ",(0,r.jsx)(d,{loop:1/0,wrapper:"b",steps:["peace",4e3,"equity",2e3,"education \ud83d\udcd6",2e3,"water ",1500,"food",1500,"health",1500,"instadeeds \ud83e\udd0d",4e3,"\ud83d\udc9a",6e4]})]})},w=function(){return(0,r.jsx)(h,{children:(0,r.jsxs)(y,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(_,{}),(0,r.jsx)(g,{})]})})},x=function(){return(0,r.jsx)("main",{children:(0,r.jsx)(w,{})})}},2557:function(e,t,n){"use strict";n.d(t,{uH:function(){return o}});var r=n(4155).env.ASSET_PREFIX,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return"".concat(r).concat(e)}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1334)}])}},function(e){e.O(0,[774,163],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);