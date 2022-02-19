(()=>{"use strict";var n={28:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(81),o=r.n(t),a=r(645),i=r.n(a),c=r(667),s=r.n(c),l=new URL(r(504),r.b),d=i()(o());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);"]);var u=s()(l);d.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --stone: #e7e5e4;\n  --gray: #f9fafb;\n  --zinc: #71717a;\n  --neutral: #404040;\n  font-size: 14px;\n  font-family: 'Raleway', sans-serif;\n  color: var(--neutral);\n  box-sizing: border-box;\n}\n\n.container {\n  min-height: 100vh;\n  background: url("+u+") var(--stone);\n  background-size: cover;\n  background-blend-mode: multiply;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n.search,\n.search__input,\n.search__selection {\n  display: flex;\n  align-items: center;\n}\n\n.search {\n  background-color: var(--gray);\n  width: 35rem;\n  flex-direction: column;\n  justify-content: center;\n  padding: 2rem 0.5rem;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: 0.2rem 0.2rem 1rem var(--neutral);\n}\n\n.search__title {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n#search__input,\n#search__selection {\n  width: 24rem;\n  font-family: 'Raleway', sans-serif;\n  font-size: 1rem;\n  border: 0.1rem solid var(--zinc);\n  border-radius: 0.2rem;\n}\n\n#search__input {\n  box-sizing: border-box;\n  margin-left: 2.9rem;\n  padding: 0.1rem 0.1rem 0.1rem 0.5rem;\n}\n\n#search__selection {\n  margin-left: 1rem;\n  padding: 0.1rem 0.1rem 0.1rem 0.25rem;\n  background-color: var(--stone);\n}\n\n.button {\n  text-decoration: none;\n  color: var(--neutral);\n  background-color: var(--stone);\n  border: 0.1rem solid var(--zinc);\n  border-radius: 0.2rem;\n  padding: 0.2rem 1rem;\n  margin-top: 0.5rem;\n}\n\n.weather {\n  display: flex;\n  gap: 5rem;\n}\n\n.card {\n  background-color: var(--gray);\n  border-radius: 0.5rem;\n  box-shadow: 0.2rem 0.2rem 1rem var(--neutral);\n  width: 20rem;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card__title {\n  font-size: 3.5rem;\n  font-weight: 400;\n}\n\n.card__copy {\n  font-size: 2rem;\n}\n\n.card__copy--temp {\n  font-size: 6rem;\n  font-weight: 700;\n}\n\n.card__selection {\n  background-color: var(--stone);\n  border: 0.1rem solid var(--zinc);\n  border-radius: 0.2rem;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 500px) {\n\n  .container {\n    padding-bottom: 10rem;\n  }\n  .search {\n    width: 25rem;\n    padding: 1rem 0rem;\n    margin-top: 15rem;\n  }\n\n  .search__input,\n  .search__selection {\n    flex-direction: column;\n  }\n\n  #search__input,\n  #search__selection {\n    margin: 0;\n  }\n\n  .weather {\n    flex-direction: column;\n  }\n}\n\n",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},504:(n,e,r)=>{n.exports=r.p+"1f60ef94b3ff5a258703.jpg"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),s=r.n(c),l=r(216),d=r.n(l),u=r(589),p=r.n(u),m=r(28),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h="1fc5e4a9ac0b4336295c10a6462503b1";document.querySelector(".button").addEventListener("click",(()=>{(async()=>{const n=await(async()=>{const n=await(async()=>{const n=await fetch("https://restcountries.com/v3.1/all?fields=name,cca2",{mode:"cors"}),e=await n.json(),r=document.querySelector("#search__selection").value;let t="";for(let n=0;n<e.length;n+=1)r===e[n].name.common&&(t=e[n].cca2);return t})(),e=document.querySelector("#search__input").value,r=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}, ${n}&limit=1&appid=${h}`,{mode:"cors"}),t=await r.json();return[t[0].lat,t[0].lon]})(),e=n[0],r=n[1],t=await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${r}&appid=${h}`,{mode:"cors"}),o=await t.json();console.log(o)})()})),(async()=>{const n=await fetch("https://restcountries.com/v3.1/all?fields=name",{mode:"cors"}),e=await n.json(),r=document.querySelector("#search__selection"),t=[];for(let n=0;n<e.length;n+=1)t.push(e[n].name.common);const o=t.sort();for(let n=0;n<o.length;n+=1){const e=document.createElement("option");e.textContent=o[n],r.appendChild(e)}})()})()})();