var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var g=0;g<e.length-1;g++){var h=e[g];if(!(h in d))return;d=d[h]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=
$jscomp.propertyToPolyfillSymbol[e],$jscomp.defineProperty(d,e,{configurable:!0,writable:!0,value:b})))};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(c){}return!1};$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;
$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.generator={};
$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};
$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};
$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype["return"]=function(a){this.abruptCompletion_={"return":a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};
$jscomp.generator.Context.prototype.yieldAll=function(a,b){var c=$jscomp.makeIterator(a),d=c.next();$jscomp.generator.ensureIteratorResultIsObject_(d);if(d.done)this.yieldResult=d.value,this.nextAddress=b;else return this.yieldAllIterator_=c,this.yield(d.value,b)};$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,c){c?this.finallyContexts_[c]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){var c=this.finallyContexts_.splice(b||0)[0];if(c=this.abruptCompletion_=this.abruptCompletion_||c){if(c.isException)return this.jumpToErrorHandler_();void 0!=c.jumpTo&&this.finallyAddress_<c.jumpTo?(this.nextAddress=c.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(c){return{value:c,done:!0}},a,this.context_["return"]);this.context_["return"](a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,c){try{var d=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(d);if(!d.done)return this.context_.stop_(),d;var e=d.value}catch(g){return this.context_.yieldAllIterator_=null,this.context_.throw_(g),this.nextStep_()}this.context_.yieldAllIterator_=null;c.call(this.context_,e);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a["return"],done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this["throw"]=function(b){return a.throw_(b)};this["return"]=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){var c=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&a.prototype&&$jscomp.setPrototypeOf(c,a.prototype);return c};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(d){return a.next(d)}function c(d){return a["throw"](d)}return new Promise(function(d,e){function g(h){h.done?d(h.value):Promise.resolve(h.value).then(b,c).then(g,e)}g(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
var application=require("application"),$jscomp$destructuring$var0=require("application"),editDocument=$jscomp$destructuring$var0.editDocument,$jscomp$destructuring$var1=require("scenegraph"),selection=$jscomp$destructuring$var1.selection,Artboard=$jscomp$destructuring$var1.Artboard,Color=$jscomp$destructuring$var1.Color,scenegraph=require("scenegraph"),fs=require("uxp").storage,panel,renditionTimer,previewTimer,keydownDelay,GIFObject,GIFDelay=200,GIFLoop=0,url="https://gifmaker.xdplugins.co",primaryBtnLabel=
"Save as GIF",secondaryBtnLabel="Learn more",waitBtnLabel="Saving GIF...",initiallMessage='Select at least two artboards that will become frames in the GIF.<br/><br/><a href="#" id="btn-select-artboards">Select all artboards</a>',maxAllowedFrameSize=500,saveInProgress=!1,saveRequestTimeout=18E4;
function create(){var a='<style>\n            h1 {margin-left: 0;}\n            button {}\n            .container {display: flex; justify-content: center; align-items: center; width: 100%; margin-top: 10px; overflow: hidden; border: 1px solid #ddd; background: #efefef;}\n            .container #message {text-align: center; margin: 20px 15px; line-height: 150%;}\n            .container #images {display: none; max-width: 100%; overflow: hidden; flex-direction: row; border:}\n            .container #images img {width: 100%; position: absolute; left: -9999px}\n            .container #images img.in-focus {position: relative; left: 0;}\n            .row {width: 100%; display: flex; flex-direction: column; align-items: flex-start;}\n            .controls {width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: top;}\n            .controls .stylelized-slider {width: 90%;}\n            .controls .stylelized-slider input {width: 100%;}\n            .controls .stylelized-slider .values {display: flex; justify-content: space-between;}\n            .controls .stylized-checkbox {width: 14px; height: 14px; display: inline-block; position: relative; margin-top: 6px;}\n            .controls .stylized-checkbox input {display: inline; margin: 0; position: absolute; opacity: 0;}\n            .controls .stylized-checkbox .icon {width: 100%; height: 100%; background: #ccc; position: absolute; background: url(images/icon-repeat.svg) no-repeat; background-size: contain;}\n            footer {display: flex; flex-direction: column;}\n            #ourDialog {width: 500px; line-height: 150%;}\n        </style>\n        <form method="dialog" id="main">\n            <div class="main">\n                <div class="preview">\n                    <h1>PREVIEW</h1>\n                    <div class="container">\n                        <div id="message">'+initiallMessage+
'</div>\n                        <div id="images"></div>\n                    </div>\n                </div>\n                <br/>\n                <div class="row">\n                    <h1>DELAY</h1>\n                    <div class="controls">\n                        <div class="stylelized-slider">\n                            <input type="range" min=50 max=1000 step=50 value='+GIFDelay+' name="delay" />\n                            <span class="values"><span>50ms</span><span>1000ms</span></span>\n                        </div>\n                        <div class="stylized-checkbox">\n                            <span class="icon"></span>\n                            <input type="checkbox" name="loop" checked title="Loop" />\n                        </div>\n                    </div>\n                </div>\n                <footer>\n                    <button id="btn-make" type="submit" uxp-variant="cta" disabled>'+
primaryBtnLabel+'</button>\n                    <button id="btn-learn" uxp-variant="secondary">'+secondaryBtnLabel+"</button>\n                </footer>\n            </div>\n        </form>\n        ";panel=document.createElement("div");panel.innerHTML=a;var b=panel.querySelector('input[name="loop"]');b.addEventListener("click",function(){GIFLoop=b.checked?0:1;this.parentNode.style.opacity=b.checked?1:.5;0==GIFLoop&&previewGIF()});var c=panel.querySelector('input[name="delay"]');c.addEventListener("change",
function(){keydownDelay&&clearTimeout(keydownDelay);keydownDelay=setTimeout(function(){GIFDelay=c.value;previewGIF()},1E3)});panel.querySelector("#btn-make").addEventListener("click",function(){var d=this,e,g,h;return $jscomp.asyncExecutePromiseGeneratorProgram(function(f){switch(f.nextAddress){case 1:d.setAttribute("disabled");d.textContent=waitBtnLabel;saveInProgress=!0;e=new FormData;if(!(maxSelectedFrameSize()>maxAllowedFrameSize)){f.jumpTo(2);break}return f.yield(showDialog("<b>Info:</b> Your artboards are bigger than the maximum allowed frame size of "+
maxAllowedFrameSize+"x"+maxAllowedFrameSize+"px and the GIF will be scalled down.",300),2);case 2:return f.yield(fs.localFileSystem.getFileForSaving("gifmaker.gif",{types:["gif"]}),4);case 4:g=f.yieldResult;if(!g){f.jumpTo(5);break}e.append("delay",GIFDelay);e.append("loop",GIFLoop);e.append("random",(new Date).getTime());h=document.querySelector("#images");h.children.forEach(function(k){e.append("image[]",k.src.match(/,(.*)$/)[1])});return f.yield(makeGIF(url,e)["catch"](function(k){showDialog(k,
300);d.removeAttribute("disabled");d.textContent=primaryBtnLabel;saveInProgress=!1}),6);case 6:return GIFObject=f.yieldResult,f.yield(g.write(GIFObject),7);case 7:showDialog("GIF saved at <b>"+g.nativePath+"</b>",300);case 5:0<selection.items.length&&d.removeAttribute("disabled"),d.textContent=primaryBtnLabel,saveInProgress=!1,f.jumpToEnd()}})});panel.querySelector("#btn-learn").addEventListener("click",function(){showDialog('\n            <h2>The basics</h2>\n            <p>At least two artboards need to be selected and they need to have the same dimensions. Use SHIFT + click to select multiple artboards or use the built in "Select all artboards" feature. Using a marquee (click + drag) selection may mess up the frame order.</p>\n            <br/>\n            <h2>Delay and loop</h2>\n            <p>Delay is the time that each frame stays on screen before next frame is displayed. The lowest you choose, the faster the animation will be. The \u201cLoop\u201d option, when enabled, it repeats the same animation forever on infinite loop.</p>\n            <br/>\n            <h2>Privacy and limitations</h2>\n            <p>Since GIF file creation is not natively available, each frame is encoded in base64 and sent remotely to gifmaker.xdplugins.co to be merged into a single GIF file and returned back locally in real-time. The contents of the frames are not kept on server, but make sure you don\u2019t include any sensitive information. There is also a limit of 500x500px per artboard size and there is no support for transparency.\n            </p>\n            <br/>\n            <p>More information on our website <a href="https://gifmaker.xdplugins.co">gifmaker.xdplugins.co</a>.</p>\n            <br/>\n        ',
500)});panel.querySelector("#btn-select-artboards").addEventListener("click",function(){selectAllArtboards()});a=document.createElement("dialog");a.setAttribute("id","ourDialog");a.innerHTML='<div id="body"></div><footer><button id="btnClose" uxp-variant="primary">Close</button></footer>';document.appendChild(a);return panel}
function showDialog(a,b){var c;return $jscomp.asyncExecutePromiseGeneratorProgram(function(d){c=document.querySelector("#ourDialog");document.querySelector("#ourDialog #body").innerHTML=a;document.querySelector("#ourDialog #btnClose").onclick=function(){c.close()};null!=b&&(c.style.width=b+"px");return d.yield(c.showModal(),0)})}function show(a){panel||a.node.appendChild(create())}function hide(a){previewTimer&&(clearInterval(previewTimer),previewTimer=null)}
function update(){var a,b,c;return $jscomp.asyncExecutePromiseGeneratorProgram(function(d){a=document.querySelector("#images");b=document.querySelector("#message");c=panel.querySelector("#btn-make");a.style.display="none";b.style.display="block";for(c.setAttribute("disabled");a.firstChild;)a.removeChild(a.firstChild);renditionTimer&&clearTimeout(renditionTimer);renditionTimer=setTimeout(function(){var e,g,h,f,k,m;return $jscomp.asyncExecutePromiseGeneratorProgram(function(l){switch(l.nextAddress){case 1:l.setCatchFinallyBlocks(2);
if(!(void 0!==selection.items[0]&&selection.items[0]instanceof Artboard&&1<selection.items.length)){clearInterval(previewTimer);l.jumpTo(4);break}a.style.width=selection.items[0].width;return l.yield(createRenditions(),5);case 5:e=l.yieldResult,g=0;case 6:if(!(g<e.length)){l.jumpTo(8);break}return l.yield(e[g].read({format:fs.formats.binary}),9);case 9:h=l.yieldResult;f=document.createElement("img");k=base64ArrayBuffer(h);f.setAttribute("src","data:image/png;base64,"+k);0==g&&f.setAttribute("class",
"in-focus");a.appendChild(f);g++;l.jumpTo(6);break;case 8:a.style.display="flex",b.style.display="none",previewGIF(),0==saveInProgress&&c.removeAttribute("disabled");case 4:l.leaveTryBlock(0);break;case 2:m=l.enterCatchBlock(),showDialog(m,300),c.removeAttribute("disabled"),c.textContent=primaryBtnLabel,l.jumpToEnd()}})},1E3);d.jumpToEnd()})}
function makeGIF(a,b){return new Promise(function(c,d){var e=new XMLHttpRequest;e.onload=function(){if(200===e.status)try{var g=new Uint8Array(e.response);c(g)}catch(h){d("Couldn't parse response. "+h.message+", "+e.response)}else d("Request had an error: "+e.status)};e.ontimeout=function(){d("The server couldn't process your request in a timely manner and it was terminated. Waited for "+saveRequestTimeout/1E3+" seconds.")};e.onerror=function(){d("Network request failed.")};e.onabort=function(){d("Network request was aborted.")};
e.open("POST",a+"/make-gif/?"+(new Date).getTime(),!0);e.responseType="arraybuffer";e.timeout=saveRequestTimeout;e.setRequestHeader("cache-control","no-cache, must-revalidate, post-check=0, pre-check=0");e.setRequestHeader("cache-control","max-age=0");e.setRequestHeader("expires","0");e.setRequestHeader("expires","Tue, 01 Jan 1980 1:00:00 GMT");e.setRequestHeader("pragma","no-cache");e.send(b)})}
function previewGIF(){var a=document.querySelector("#images");previewTimer&&clearInterval(previewTimer);var b=0;previewTimer=setInterval(function(){a.children.forEach(function(c,d){d==b?c.setAttribute("class","in-focus"):c.removeAttribute("class")});1==GIFLoop&&b==a.children.length-1?clearInterval(previewTimer):b=b==a.children.length-1?0:b+1},GIFDelay)}
function createRenditions(){var a,b,c,d,e;return $jscomp.asyncExecutePromiseGeneratorProgram(function(g){switch(g.nextAddress){case 1:return g.yield(fs.localFileSystem.getTemporaryFolder(),2);case 2:a=g.yieldResult,b=[],c=0;case 3:return c<selection.items.length?g.yield(a.createFile(selection.items[c].guid+".png",{overwrite:!0}).then(function(h){var f=selection.items[c].width>selection.items[c].height?selection.items[c].width:selection.items[c].height;f=f<maxAllowedFrameSize?1:maxAllowedFrameSize/
f;var k={};k.node=selection.items[c];k.outputFile=h;k.type="png";k.background=new Color("#ffffff",0);k.scale=f;b.push(k)}),4):g.yield(application.createRenditions(b),7);case 4:c++;g.jumpTo(3);break;case 7:return d=g.yieldResult,e=d.map(function(h){return h.outputFile}),g["return"](e)}})}function maxSelectedFrameSize(){var a=0;selection.items.forEach(function(b){b.width>a&&(a=b.width);b.height>a&&(a=b.height)});return a}
function selectAllArtboards(){editDocument({editLabel:"Selecting all artboards"},function(){for(var a=[],b=0;b<scenegraph.root.children.length;b++){var c=scenegraph.root.children.at(b);c instanceof Artboard&&a.push(c)}0<a.length&&(a.sort(function(d,e){return d.globalBounds.x-e.globalBounds.x}),a.sort(function(d,e){return d.globalBounds.y-e.globalBounds.y}),selection.items=a)})}
function base64ArrayBuffer(a){var b="";a=new Uint8Array(a);var c=a.byteLength,d=c%3;c-=d;for(var e,g,h,f,k=0;k<c;k+=3)f=a[k]<<16|a[k+1]<<8|a[k+2],e=(f&16515072)>>18,g=(f&258048)>>12,h=(f&4032)>>6,f&=63,b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[f];1==d?(f=a[c],b+=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&252)>>2]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&3)<<4]+"=="):2==d&&(f=a[c]<<8|a[c+1],b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&64512)>>10]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&1008)>>4]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&15)<<2]+"=");return b}module.exports={panels:{makeGIF:{show:show,hide:hide,update:update}}};