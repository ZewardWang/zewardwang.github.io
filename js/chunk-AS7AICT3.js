import{a as I}from"./chunk-3VMQCGY7.js";import{a as oe}from"./chunk-6UOORFWE.js";var de=()=>h("main > .inner").offsetHeight,h=(e,s=document)=>e[0]==="#"?s.getElementById(e.substring(1)):s.querySelector(e);h.all=(e,s=document)=>s.querySelectorAll(e),h.each=(e,s,i)=>{h.all(e,i).forEach(s)};var j=function(e,s){let i=e.parentNode;i.lastChild===e?i.appendChild(s):i.insertBefore(s,e.nextSibling)},g=function(e,s,i,u){let r=document.createElement(s);switch(Object.assign(r,i),u){case"after":j(e,r);break;case"replace":e.innerHTML="",e.appendChild(r);break;default:e.appendChild(r)}return r},ce=function(e,s){let i=document.createElement("div");Object.assign(i,s),e.parentNode.insertBefore(i,e),e.parentNode.removeChild(e),i.appendChild(e)},ue=function(e){return e.getBoundingClientRect().height},H=function(e,s){e.style.width=typeof s=="number"?s+"rem":s},B=function(e){return e.getBoundingClientRect().width},pe=function(e){return e.getBoundingClientRect().top},D=function(e){return e.getBoundingClientRect().left},me=function(e){return e.style.display},k=function(e,s){return e.style.display=s,e},he=function(e,s){return h(s,e)};function R(){Object.assign(HTMLElement.prototype,{child(e){return h(e,this)},find(e){return h.all(e,this)},_class(e,s,i){(s.indexOf(" ")?s.split(" "):[s]).forEach(u=>{e==="toggle"?this.classList.toggle(u,i):this.classList[e](u)})},addClass(e){return this._class("add",e),this},removeClass(e){return this._class("remove",e),this},toggleClass(e,s){return this._class("toggle",e,s),this},hasClass(e){return this.classList.contains(e)}})}var C=oe;R();var ve=C.statics.indexOf("//")>0?C.statics:C.root,X={x:0,y:0},$=0,E,F,O=document.getElementsByTagName("body")[0],ge=document.documentElement,ye=h("#container"),fe=h("#loading"),J=h("#nav"),be=h("#header"),we=J.child(".toggle"),xe=h("#quick"),Me=h("#sidebar"),Ce=h("#brand"),U=h("#tool"),V,W,Y,Q,Ze=h("#search"),G,z,K,Te=window.innerHeight,Z=window.innerWidth,_=0,N=window.location.href,ke;function Ee(e){G=e}function Le(e){z=e}function Ne(e){K=e}function Ae(e){Te=e}function Se(e){Z=e}function He(e){$=e}function Oe(e){F=e}function q(e){_=e}function _e(e){N=e}function qe(e){ke=e}function Pe(e){E=e}function Ie(e){V=e}function je(e){W=e}function Be(e){Y=e}function De(e){Q=e}function Re(e){U=e}var Xe=(e,s,i,u)=>{let r,m="none";switch(s){case 0:r={opacity:[1,0]};break;case 1:r={opacity:[0,1]},m="block";break;case"bounceUpIn":r={begin(o){k(e,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},m="block";break;case"shrinkIn":r={begin(o){k(e,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},m="block";break;case"slideRightIn":r={begin(o){k(e,"block")},translateX:["100%","0%"],opacity:[0,1]},m="block";break;case"slideRightOut":r={translateX:["0%","100%"],opacity:[1,0]};break;default:r=s,m=s.display;break}I(Object.assign({targets:e,duration:200,easing:"linear",begin(){u&&u()},complete(){k(e,m),i&&i()}},r)).play()},L=(e,s,i)=>{I({targets:typeof s=="number"&&typeof e!="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:s||(typeof e=="number"?e:e?pe(e)+document.documentElement.scrollTop-G:0),complete(){i&&i()}}).play()},f={set(e,s){localStorage.setItem(e,s)},get(e){return localStorage.getItem(e)},del(e){localStorage.removeItem(e)}},ee=e=>{if(!e)return;let s=g(O,"div",{innerHTML:e,className:"tip"});setTimeout(()=>{s.addClass("hide"),setTimeout(()=>{O.removeChild(s)},300)},3e3)},$e=()=>{C.auto_scroll&&f.set(N,String(X.y))},Fe=e=>{let s=window.location.hash,i=null;if(_){f.del(N);return}s?i=h(decodeURI(s)):i=C.auto_scroll?parseInt(f.get(N)):0,i&&(L(i),q(1)),e&&s&&!_&&(L(i),q(1))},Je=(e,s)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).then(()=>{s&&s(!0)},()=>{s&&s(!1)}):(console.error("Too old browser, clipborad API not supported."),s&&s(!1))},te=()=>{let e;h.each("div.tab",s=>{if(s.getAttribute("data-ready"))return;let i=s.getAttribute("data-id"),u=s.getAttribute("data-title"),r=h("#"+i);r?e=!1:(r=document.createElement("div"),r.className="tabs",r.id=i,r.innerHTML='<div class="show-btn"></div>',r.child(".show-btn").addEventListener("click",()=>{L(r)}),s.parentNode.insertBefore(r,s),e=!0);let m=r.child(".nav ul");m||(m=g(r,"div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul"));let o=g(m,"li",{innerHTML:u});e&&(o.addClass("active"),s.addClass("active")),o.addEventListener("click",d=>{let w=d.currentTarget;r.find(".active").forEach(b=>{b.removeClass("active")}),s.addClass("active"),w.addClass("active")}),r.appendChild(s),s.setAttribute("data-ready",String(!0))})},A=null,P=/mobile/i.test(window.navigator.userAgent),Ue=(e,s)=>{let i={el:{},create(){e.player.options.btns&&e.player.options.btns.forEach(t=>{i.el[t]||(i.el[t]=g(e,"div",{className:t+" btn",onclick(n){e.player.fetch().then(()=>{e.player.options.events[t](n)})}}))})}},u={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!e.player.options.controls)return;let t=u;e.player.options.controls.forEach(n=>{if(t.btns[n])return;let a={onclick(p){t.events[n]?t.events[n](p):e.player.options.events[n](p)}};switch(n){case"volume":a.className=" "+(o.muted?"off":"on"),a.innerHTML='<div class="bar"></div>',a["on"+v.nameMap.dragStart]=t.events.volume,a.onclick=null;break;case"mode":a.className=" "+e.player.options.mode;break;default:a.className="";break}a.className=n+a.className+" btn",t.btns[n]=g(t.el,"div",a)}),t.btns.volume.bar=t.btns.volume.child(".bar")},events:{mode(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}u.btns.mode.className="mode "+e.player.options.mode+" btn",f.set("_PlayerMode",e.player.options.mode)},volume(t){t.preventDefault();let n=t.currentTarget,a=!1,p=c=>{c.preventDefault(),e.player.volume(u.percent(c,n)),a=!0},l=c=>{c.preventDefault(),n.removeEventListener(v.nameMap.dragEnd,l),n.removeEventListener(v.nameMap.dragMove,p),a?(e.player.muted(),e.player.volume(u.percent(c,n))):o.muted?(e.player.muted(),e.player.volume(o.volume)):(e.player.muted("muted"),u.update(0))};n.addEventListener(v.nameMap.dragMove,p),n.addEventListener(v.nameMap.dragEnd,l)},backward(t){u.step="prev",e.player.mode()},forward(t){u.step="next",e.player.mode()}},update(t){u.btns.volume.className="volume "+(!o.muted&&t>0?"on":"off")+" btn",H(u.btns.volume.bar,Math.floor(t*100)+"%")},percent(t,n){let a=((t.clientX||t.changedTouches[0].clientX)-D(n))/B(n);return a=Math.max(a,0),Math.min(a,1)}},r={el:null,bar:null,create(){let t=d.current().el;t&&(r.el&&(r.el.parentNode.removeClass("current").removeEventListener(v.nameMap.dragStart,r.drag),r.el.remove()),r.el=g(t,"div",{className:"progress"}),r.el.setAttribute("data-dtime",v.secondToTime(0)),r.bar=g(r.el,"div",{className:"bar"}),t.addClass("current"),t.addEventListener(v.nameMap.dragStart,r.drag),d.scroll())},update(t){H(r.bar,Math.floor(t*100)+"%"),r.el.setAttribute("data-ptime",v.secondToTime(t*o.duration))},seeking(t){t?r.el.addClass("seeking"):r.el.removeClass("seeking")},percent(t,n){let a=((t.clientX||t.changedTouches[0].clientX)-D(n))/B(n);return a=Math.max(a,0),Math.min(a,1)},drag(t){t.preventDefault();let n=d.current().el,a=l=>{l.preventDefault();let c=r.percent(l,n);r.update(c),S.update(c*o.duration)},p=l=>{l.preventDefault(),n.removeEventListener(v.nameMap.dragEnd,p),n.removeEventListener(v.nameMap.dragMove,a);let c=r.percent(l,n);r.update(c),e.player.seek(c*o.duration),o.disableTimeupdate=!1,r.seeking(!1)};o.disableTimeupdate=!0,r.seeking(!0),n.addEventListener(v.nameMap.dragMove,a),n.addEventListener(v.nameMap.dragEnd,p)}},m={el:null,create(){let t=d.current();m.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+'</span><div class="lrc"></div></div>',m.el.child(".cover").addEventListener("click",e.player.options.events["play-pause"]),S.create(m.el.child(".lrc"))}},o,d={el:null,data:[],index:-1,errnum:0,add:(t,n)=>{n.forEach(a=>{a.group=t,a.name=a.name||a.title||"Meida name",a.artist=a.artist||a.author||"Anonymous",a.cover=a.cover||a.pic,a.type=a.type||"normal",d.data.push(a)})},clear(){d.data=[],d.el.innerHTML="",d.index!==-1&&(d.index=-1,e.player.fetch())},create(){let t=d.el;d.data.map((n,a)=>{if(n.el)return null;let p="list-"+e.player._id+"-"+n.group,l=h("#"+p);return l||(l=g(t,"div",{id:p,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"}),e.player.group&&(l.setAttribute("data-title",e.player.options.rawList[n.group].title),l.setAttribute("data-id",e.player._id))),n.el=g(l.child("ol"),"li",{title:n.name+" - "+n.artist,innerHTML:'<span class="info"><span>'+n.name+"</span><span>"+n.artist+"</span></span>",onclick(c){let x=c.currentTarget;if(d.index===a&&r.el){o.paused?e.player.play():e.player.seek(o.duration*r.percent(c,x));return}e.player.switch(a),e.player.play()}}),n}),te()},current(){return this.data[this.index]},scroll(){let t=this.current(),n=this.el.child("li.active");n&&n.removeClass("active");let a=this.el.child(".tab.active");return a&&a.removeClass("active"),n=this.el.find(".nav li")[t.group],n&&n.addClass("active"),a=this.el.find(".tab")[t.group],a&&a.addClass("active"),L(t.el,t.el.offsetTop),this},title(){if(o.paused)return;let t=this.current();document.title="Now Playing..."+t.name+" - "+t.artist+" | "+E},error(){let t=this.current();t.el.removeClass("current").addClass("error"),t.error=!0,this.errnum++}},w={el:null,create(){this.el||(this.el=g(e,"div",{className:"player-info",innerHTML:(e.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),m.el=this.el.child(".preview"),d.el=this.el.child(".playlist"),u.el=this.el.child(".controller"))},hide(){let t=this.el;t.addClass("hide"),window.setTimeout(()=>{t.removeClass("show hide")},300)}},b={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(t){o.paused?e.player.play():e.player.pause()},music(t){w.el.hasClass("show")?w.hide():(w.el.addClass("show"),d.scroll().title())}}},v={random(t){return Math.floor(Math.random()*t)},parse(t){let n=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(a=>{let p=new RegExp(a[0]).exec(t);p!==null&&(n=[a[1],a[2],p[1]])}),n},fetch(t){let n=[];return new Promise((a,p)=>{t.forEach(l=>{let c=v.parse(l);if(c[0]){let x=JSON.stringify(c),M=f.get(x);M?(n.push(...JSON.parse(M)),a(n)):fetch(`${C.playerAPI}/meting/?server=`+c[0]+"&type="+c[1]+"&id="+c[2]+"&r="+Math.random()).then(y=>y.json()).then(y=>{f.set(x,JSON.stringify(y)),n.push(...y),a(n)}).catch(y=>{})}else n.push(l),a(n)})})},secondToTime(t){let n=c=>isNaN(c)?"00":c<10?"0"+c:""+c,a=Math.floor(t/3600),p=Math.floor((t-a*3600)/60),l=Math.floor(t-a*3600-p*60);return(a>0?[a,p,l]:[p,l]).map(n).join(":")},nameMap:{dragStart:P?"touchstart":"mousedown",dragMove:P?"touchmove":"mousemove",dragEnd:P?"touchend":"mouseup"}};o=null,e.player={_id:v.random(999999),group:!0,load(t){let n="";t&&t.length>0?this.options.rawList!==t&&(this.options.rawList=t,d.clear(),this.fetch()):(n="none",this.pause());for(let a in i.el)k(i.el[a],n);return this},fetch(){return new Promise((t,n)=>{if(d.data.length>0)t(!0);else if(this.options.rawList){let a=[];this.options.rawList.forEach((p,l)=>{a.push(new Promise((c,x)=>{let M=l,y;p.list?(this.group=!0,y=p.list):(M=0,this.group=!1,y=[p]),v.fetch(y).then(T=>{d.add(M,T),c(0)})}))}),Promise.all(a).then(()=>{t(!0)})}}).then(t=>{t&&(d.create(),u.create(),this.mode())})},mode(){let t=d.data.length;if(!t||d.errnum===t)return;let n=u.step==="next"?1:-1,a=()=>{let l=d.index+n;(l>t||l<0)&&(l=u.step==="next"?0:t-1),d.index=l},p=()=>{let l=v.random(t);d.index!==l?d.index=l:a()};switch(this.options.mode){case"random":p();break;case"order":a();break;case"loop":u.step&&a(),d.index===-1&&p();break}this.init()},switch(t){typeof t=="number"&&t!==d.index&&d.current()&&!d.current().error&&(d.index=t,this.init())},init(){let t=d.current();if(!t||t.error){this.mode();return}let n=!1;o.paused||(n=!0,this.stop()),o.setAttribute("src",t.url),o.setAttribute("title",t.name+" - "+t.artist),this.volume(f.get("_PlayerVolume")||"0.7"),this.muted(f.get("_PlayerMuted")),r.create(),this.options.type==="audio"&&m.create(),n===!0&&this.play()},play(){if(A&&A.player.pause(),d.current().error){this.mode();return}o.play().then(()=>{d.scroll()}).catch(t=>{})},pause(){o.pause(),document.title=E},stop(){o.pause(),o.currentTime=0,document.title=E},seek(t){t=Math.max(t,0),t=Math.min(t,o.duration),o.currentTime=t,r.update(t/o.duration)},muted(t){t==="muted"?(o.muted=t,f.set("_PlayerMuted",t),u.update(0)):(f.del("_PlayerMuted"),o.muted=!1,u.update(o.volume))},volume(t){isNaN(t)||(u.update(t),f.set("_PlayerVolume",t),o.volume=t)},mini(){w.hide()}};let S={el:null,data:null,index:0,create(t){let n=d.index,a=d.current().lrc,p=l=>{if(n!==d.index)return;this.data=this.parse(l);let c="";this.data.forEach((x,M)=>{c+="<p"+(M===0?' class="current"':"")+">"+x[1]+"</p>"}),this.el=g(t,"div",{className:"inner",innerHTML:c},"replace"),this.index=0};a.startsWith("http")?this.fetch(a,p):p(a)},update(t){if(this.data&&(this.index>this.data.length-1||t<this.data[this.index][0]||!this.data[this.index+1]||t>=this.data[this.index+1][0])){for(let n=0;n<this.data.length;n++)if(t>=this.data[n][0]&&(!this.data[n+1]||t<this.data[n+1][0])){this.index=n;let a=-(this.index-1);this.el.style.transform="translateY("+a+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[n].addClass("current")}}},parse(t){if(t){t=t.replace(/([^\]^\n])\[/g,(l,c)=>c+`
[`);let n=t.split(`
`),a=[],p=n.length;for(let l=0;l<p;l++){let c=n[l].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),x=n[l].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(c){let M=c.length;for(let y=0;y<M;y++){let T=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(c[y]),se=T[1]*60,re=parseInt(T[2]),ie=T[4]?parseInt(T[4])/((T[4]+"").length===2?100:1e3):0,le=se+re+ie;a.push([le,x])}}}return a=a.filter(l=>l[1]),a.sort((l,c)=>l[0]-c[0]),a}else return[]},fetch(t,n){fetch(t).then(a=>a.text()).then(a=>{n(a)}).catch(a=>{})}},ne={onerror(){d.error(),e.player.mode()},ondurationchange(){o.duration!==1&&r.el.setAttribute("data-dtime",v.secondToTime(o.duration))},onloadedmetadata(){e.player.seek(0),r.el.setAttribute("data-dtime",v.secondToTime(o.duration))},onplay(){e.parentNode.addClass("playing"),ee(this.getAttribute("title")),A=e},onpause(){e.parentNode.removeClass("playing"),A=null},ontimeupdate(){this.disableTimeupdate||(r.update(this.currentTime/this.duration),S.update(this.currentTime))},onended(t){e.player.mode(),e.player.play()}};return(t=>{e.player.created||(e.player.options=Object.assign(b,t),e.player.options.mode=f.get("_PlayerMode")||e.player.options.mode,i.create(),o=g(e,e.player.options.type,ne),w.create(),e.parentNode.addClass(e.player.options.type),e.player.created=!0)})(s),e};function Ve(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running(rocket & minify)","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}var We=(e,s,i)=>{if(i)s();else{let u=document.createElement("script");u.onload=function(r,m){(m||!u.readyState)&&(console.log("abort!"),u.onload=null,u=void 0,!m&&s&&setTimeout(s,0))},u.src=e,document.head.appendChild(u)}},Ye=e=>{let{text:s,parentNode:i,id:u,className:r,type:m,src:o,dataset:d}=e,w=s||e.textContent||e.innerHTML||"";i.removeChild(e);let b=document.createElement("script");u&&(b.id=u),r&&(b.className=r),m&&(b.type=m),o&&(b.src=o,b.async=!1),d.pjax!==void 0&&(b.dataset.pjax=""),w!==""&&b.appendChild(document.createTextNode(w)),i.appendChild(b)},ae=(e,s)=>{let i=C[e][s];return i.includes("http")?i:i.includes("gh")||i.includes("combine")?`https://cdn.jsdelivr.net/${i}`:i.includes("npm")?`https://cdn.jsdelivr.net/${i}`:`/${i}`},Qe=(e,s,i)=>{LOCAL[e]&&We(ae("js",e),s||function(){window[e]=!0},i||window[e])},Ge=(e,s)=>{window["css"+e]||LOCAL[e]&&(g(document.head,"link",{rel:"stylesheet",href:ae("css",e)}),window["css"+e]=!0)};export{de as a,h as b,j as c,g as d,ce as e,ue as f,H as g,me as h,k as i,he as j,R as k,C as l,ve as m,X as n,$ as o,E as p,F as q,O as r,ge as s,ye as t,fe as u,J as v,be as w,we as x,xe as y,Me as z,Ce as A,U as B,V as C,W as D,Y as E,Q as F,z as G,K as H,Z as I,Ee as J,Le as K,Ne as L,Ae as M,Se as N,He as O,Oe as P,q as Q,_e as R,qe as S,Pe as T,Ie as U,je as V,Be as W,De as X,Re as Y,Xe as Z,L as _,f as $,ee as aa,$e as ba,Fe as ca,Je as da,te as ea,Ue as fa,Ve as ga,Ye as ha,Qe as ia,Ge as ja};/*! For license information please see chunk-AS7AICT3.js.LEGAL.txt */
