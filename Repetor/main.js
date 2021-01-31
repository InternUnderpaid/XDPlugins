const moment=require("../lib/moment");Array.prototype.shuffle=function(){for(var e,t,r=this.length;0!==r;)t=Math.floor(Math.random()*r),e=this[r-=1],this[r]=this[t],this[t]=e;return this},Array.prototype.numSort=function(e){return this.sort(function(t,r){let o,n;return e?(o=t[e].toString().match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function(e){return+e})[0],n=r[e].toString().match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function(e){return+e})[0]):(o=t.toString().match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function(e){return+e})[0],n=r.toString().match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function(e){return+e})[0]),o>n?1:o<n?-1:0}),this},Array.prototype.dateSort=function(e,t){return this.sort(function(r,o){let n,i;return e?(n=r[e],i=o[e]):(n=r,i=o),t&&(n=moment(new Date(n)),i=moment(new Date(i))),n.isAfter(i)?1:n.isBefore(i)?-1:0}),this},Array.prototype.textSort=function(e){return this.sort(function(t,r){let o,n;return e?(o=t[e],n=r[e]):(o=t,n=r),o.toLowerCase()>n.toLowerCase()?1:o.toLowerCase()<n.toLowerCase()?-1:0}),this},Array.prototype.groupBy=function(e){return this.reduce(function(t,r){return(t[r[e]]=t[r[e]]||[]).push(r),t},{})},window.$first=function(e){return document.querySelector(e)},window.$all=function(e){return document.querySelectorAll(e)},window.$create=function(e){return document.createElement(e)},window.$addClass=function(e,t){-1==e.className.split(" ").indexOf(t)&&(e.className+=" "+t)},window.$removeClass=function(e,t){let r=new RegExp(`'\b${t}\b`,"g");e.className=e.className.replace(r,"")};const Generate=require("./module/Generate"),Reorder=require("./module/Reorder"),Resize=require("./module/Resize");module.exports={panels:{generate:{show:Generate.Show,hide:Generate.Hide,update:Generate.Update},reorder:{show:Reorder.Show,hide:Reorder.Hide,update:Reorder.Update},resize:{show:Resize.Show,hide:Resize.Hide,update:Resize.Update}}};