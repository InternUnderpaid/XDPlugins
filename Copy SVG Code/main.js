module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("uxp")},function(t,e,n){const r=n(0).storage.localFileSystem,a=n(2),i=n(3),o=n(4),{createDialog:l,error:s}=n(5);t.exports={commands:{copySvgCode:async function(t){if(!t.hasArtwork)return void s("No SVG selected","Please select an SVG before running.");t.items.length>=2&&o.group();const e=await r.getTemporaryFolder(),n=await e.createFile("export.svg",{overwrite:!0}),c=[{node:t.items[0],outputFile:n,type:a.RenditionType.SVG,minify:!0,embedImages:!1}];await a.createRenditions(c);const u=await n.read(),p=u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");i.copyText(u),await l({title:"SVG Output",template:()=>`<input value="${p}">`})}}}},function(t,e){t.exports=require("application")},function(t,e){t.exports=require("clipboard")},function(t,e){t.exports=require("commands")},function(t,e,n){const{getManifest:r,getNearestIcon:a}=n(6);let i;async function o({title:t,icon:e="plugin-icon",msgs:n,prompt:o,multiline:l=!1,render:s,template:c,isError:u=!1,buttons:p=[{label:"Close",variant:"cta",type:"submit"}]}={},m=360,f="auto",d=18){let g=Array.isArray(n)?n:[n];try{i||(i=await r())}catch(t){}let y=!1;"plugin-icon"===e&&i.icons&&(y=!0,e=a(i,d=24));const b=document.createElement("dialog");b.innerHTML=`\n<style>\n    form {\n        width: ${m}px;\n    }\n    .h1 {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n    }\n    .h1 img {\n        width: ${d}px;\n        height: ${d}px;\n        flex: 0 0 ${d}px;\n        padding: 0;\n        margin: 0;\n    }\n    img.plugin-icon {\n        border-radius: 4px;\n        overflow: hidden;\n    }\n    .list {\n        display: flex;\n        flex-direction: row;\n    }\n    .list .margin {\n        margin-bottom: 0;\n        margin-left: 0;\n    }\n    .list span {\n        flex: 0 0 auto;\n        border: 1px solid transparent;\n    }\n    .list .bullet {\n        text-align: center;\n    }\n    .list + .list {\n        margin-top: 0;\n    }\n    textarea {\n        height: 200px;\n    }\n    .container {\n        zoverflow-x: hidden;\n        overflow-y: auto;\n        height: ${"auto"===f?f:`${f}px`};\n    }\n</style>\n<form method="dialog">\n    <h1 class="h1">\n        <span ${u?'class="color-red"':""}>${t}</span>\n        ${e?`<img ${y?`class="plugin-icon" title="${i.name}"`:""} src="${e}" />`:""}\n    </h1>\n    <hr />\n    <div class="container">\n        ${!s&&(c?c():g.map(t=>(function t(e){if(Array.isArray(e))return e.map(e=>t(e)).join("");if("string"!=typeof e)return t(`${e}`);let n=e;n="##"===n.substr(0,2)?`<h3>${n.substr(2).trim().toUpperCase()}</h3>`:"#"===n.substr(0,1)?`<h2>${n.substr(1).trim()}</h2>`:"* "===n.substr(0,2)?`<p class="list"><span class="bullet margin">•</span><span class="margin">${n.substr(2).trim()}</span></p>`:"----"===n.substr(0,4)?`<hr class="small"/>${n.substr(5).trim()}`:"---"===n.substr(0,3)?`<hr/>${n.substr(4).trim()}`:`<p>${n.trim()}</p>`;const r=/\[([^\]]*)\]\(([^\)]*)\)/,a=e.match(r);if(a){const t=a[1];n=`<p><a href="${a[2]}">${n.replace(r,t).replace(/\<\|?p\>/g,"")}</a></p>`}return n})(t)).join("")+(o?`<label>${l?`<textarea id="prompt" placeholder="${o}"></textarea>`:`<input type="text" id="prompt" placeholder="${o}" />`}</label>`:""))}\n    </div>\n    <footer>\n        ${p.map(({label:t,type:e,variant:n}={},r)=>`<button id="btn${r}" type="${e}" uxp-variant="${n}">${t}</button>`).join("")}\n    </footer>\n</form>\n    `,s&&b.querySelector(".container").appendChild(s());let h=-1,x=-1,v=-1;b.querySelector("form").onsubmit=()=>b.close("ok"),p.forEach(({type:t,variant:e}={},n)=>{const r=b.querySelector(`#btn${n}`);"submit"!==t&&"cta"!==e||(h=n),"reset"===t&&(x=n),r.onclick=t=>{t.preventDefault(),v=n,b.close(n===x?"reasonCanceled":"ok")}});try{return document.appendChild(b),"reasonCanceled"===await b.showModal()?{which:x,value:""}:(-1===v&&(v=h),{which:v,value:o?b.querySelector("#prompt").value:""})}catch(t){return{which:x,value:""}}finally{b.remove()}}t.exports={createDialog:o,alert:async function(t,...e){return o({title:t,msgs:e})},error:async function(t,...e){return o({title:t,isError:!0,msgs:e})},confirm:async function(t,e,n=["Cancel","OK"]){return o({title:t,msgs:[e],buttons:[{label:n[0],type:"reset",variant:"primary"},{label:n[1],type:"submit",variant:"cta"}]})},warning:async function(t,e,n=["Cancel","OK"]){return o({title:t,msgs:[e],buttons:[{label:n[0],type:"submit",variant:"primary"},{label:n[1],type:"button",variant:"warning"}]})},prompt:async function(t,e,n,r=["Cancel","OK"],a=!1){return o({title:t,msgs:[e],prompt:n,multiline:a,buttons:[{label:r[0],type:"reset",variant:"primary"},{label:r[1],type:"submit",variant:"cta"}]})}}},function(t,e,n){let r;t.exports={getManifest:async function(){if(!r){const t=n(0).storage.localFileSystem,e=await t.getPluginFolder(),a=await e.getEntry("manifest.json");if(a){const t=await a.read();r=JSON.parse(t)}}return r},getNearestIcon:function(t,e){if(t&&t.icons)return t.icons.sort((t,e)=>{const n=t.width,r=e.width;return n<r?1:n>r?-1:0}).reduce((t,n)=>(t?n.width>=e&&(t=n):t=n,t)).path}}}]);