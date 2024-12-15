var dn=Object.defineProperty;var hn=Object.getPrototypeOf;var gn=Reflect.get;var Mt=t=>{throw TypeError(t)};var yn=(t,e,n)=>e in t?dn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ct=(t,e,n)=>yn(t,typeof e!="symbol"?e+"":e,n),st=(t,e,n)=>e.has(t)||Mt("Cannot "+n);var g=(t,e,n)=>(st(t,e,"read from private field"),n?n.call(t):e.get(t)),M=(t,e,n)=>e.has(t)?Mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),G=(t,e,n,s)=>(st(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n),z=(t,e,n)=>(st(t,e,"access private method"),n);var Ot=(t,e,n,s)=>({set _(r){G(t,e,r,n)},get _(){return g(t,e,s)}}),_t=(t,e,n)=>gn(hn(t),n,e);import{a as he,t as ze,c as mn}from"../chunks/disclose-version.BiKuDWK2.js";import"../chunks/legacy.CY-94a-c.js";import{Q as vn,P as Xt,V as wn,s as b,y as ue,g as d,ar as bn,h as N,as as xn,a as K,at as Pn,p,b as bt,c as ne,i as ft,I as kn,r as dt,j as Ft,e as Z,k as Ae,$ as Ke}from"../chunks/runtime.BLVj8dz7.js";import{b as ht,i as Ht}from"../chunks/this.Dx7VmjCJ.js";import{i as Sn}from"../chunks/lifecycle.BIiKv-Jy.js";import{a as R,p as De,n as Dt,s as Gt,f as it,c as Ce}from"../chunks/props.BmCjkDKm.js";import{b as En,s as Ut}from"../chunks/attributes.DpYvJWZY.js";import{s as Tn}from"../chunks/snippet.Dba1K6CO.js";import{a as It,o as je}from"../chunks/index-client.CWFbZt41.js";import{w as Ze,g as An}from"../chunks/index.Bnwk7SW7.js";import{s as fe,l as Me,c as at}from"../chunks/global.O_lnPexJ.js";function ot(t,e,n,s){var r=t.__styles??(t.__styles={});r[e]!==n&&(r[e]=n,n==null?t.style.removeProperty(e):t.style.setProperty(e,n,""))}var $,ge,Ne,$e,Jt;const et=class et{constructor(e){M(this,$e);M(this,$,new WeakMap);M(this,ge);M(this,Ne);G(this,Ne,e)}observe(e,n){var s=g(this,$).get(e)||new Set;return s.add(n),g(this,$).set(e,s),z(this,$e,Jt).call(this).observe(e,g(this,Ne)),()=>{var r=g(this,$).get(e);r.delete(n),r.size===0&&(g(this,$).delete(e),g(this,ge).unobserve(e))}}};$=new WeakMap,ge=new WeakMap,Ne=new WeakMap,$e=new WeakSet,Jt=function(){return g(this,ge)??G(this,ge,new ResizeObserver(e=>{for(var n of e){et.entries.set(n.target,n);for(var s of g(this,$).get(n.target)||[])s(n)}}))},Ct(et,"entries",new WeakMap);let gt=et;var Mn=new gt({box:"border-box"});function Nt(t,e,n){var s=Mn.observe(t,()=>n(t[e]));vn(()=>(Xt(()=>n(t[e])),s))}function Cn(t,e,n,s,r){var a=()=>{s(n[t])};n.addEventListener(e,a),a(),(n===document.body||n===window||n===document)&&wn(()=>{n.removeEventListener(e,a)})}function Ee(t){b(t,t.v+1)}const On=t=>{const e=t*2,n=e>>16&255,s=e>>8&255,r=e&255;return[n,s,r]},_n=([t,e,n])=>{const s=(t<<16|e<<8|n)/2;return s%1?0:s},In=["filter","shadowBlur","globalCompositeOperation","globalAlpha","fillStyle","strokeStyle"],Nn=(t,e,{rgbToId:n=_n,idToRgb:s=On}={})=>{const r=t.getContext("2d",e),a=new OffscreenCanvas(t.width,t.height),o=a.getContext("2d",{willReadFrequently:!0,alpha:(e==null?void 0:e.alpha)??!0});let i=t.width,l=t.height;return new Proxy(r,{get(c,u){if((t.width!==i||t.height!==l)&&(i=a.width=t.width,l=a.height=t.height),u==="getLayerIdAt")return(h,m)=>{const[v,E,k]=o.getImageData(h,m,1,1).data;return n([v,E,k])};if(u==="setCurrentLayerId")return h=>{const[m,v,E]=s(h),k=`rgb(${m},${v},${E})`;o.fillStyle=k,o.strokeStyle=k};const f=c[u];return typeof f!="function"?f:(...h)=>{let m=u,v=h;return u==="drawImage"&&(m="fillRect",v=h.slice(-4)),o[m](...v),Reflect.apply(f,c,h)}},set(c,u,f){return c[u]=f,In.includes(u)||(o[u]=f),!0}})};var U,J,q,ye,qe;const xt=class xt extends Map{constructor(n){super();M(this,ye);M(this,U,new Map);M(this,J,ue(0));M(this,q,ue(0));if(n){for(var[s,r]of n)super.set(s,r);g(this,q).v=super.size}}has(n){var s=g(this,U),r=s.get(n);if(r===void 0){var a=super.get(n);if(a!==void 0)r=ue(0),s.set(n,r);else return d(g(this,J)),!1}return d(r),!0}forEach(n,s){z(this,ye,qe).call(this),super.forEach(n,s)}get(n){var s=g(this,U),r=s.get(n);if(r===void 0){var a=super.get(n);if(a!==void 0)r=ue(0),s.set(n,r);else{d(g(this,J));return}}return d(r),super.get(n)}set(n,s){var f;var r=g(this,U),a=r.get(n),o=super.get(n),i=super.set(n,s),l=g(this,J);if(a===void 0)r.set(n,ue(0)),b(g(this,q),super.size),Ee(l);else if(o!==s){Ee(a);var c=l.reactions===null?null:new Set(l.reactions),u=c===null||!((f=a.reactions)!=null&&f.every(h=>c.has(h)));u&&Ee(l)}return i}delete(n){var s=g(this,U),r=s.get(n),a=super.delete(n);return r!==void 0&&(s.delete(n),b(g(this,q),super.size),b(r,-1),Ee(g(this,J))),a}clear(){if(super.size!==0){super.clear();var n=g(this,U);b(g(this,q),0);for(var s of n.values())b(s,-1);Ee(g(this,J)),n.clear()}}keys(){return d(g(this,J)),super.keys()}values(){return z(this,ye,qe).call(this),super.values()}entries(){return z(this,ye,qe).call(this),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return d(g(this,q)),super.size}};U=new WeakMap,J=new WeakMap,q=new WeakMap,ye=new WeakSet,qe=function(){d(g(this,J));var n=g(this,U);if(g(this,q).v!==n.size)for(var s of _t(xt.prototype,this,"keys").call(this))n.has(s)||n.set(s,ue(0));for(var[,r]of g(this,U))d(r)};let Oe=xt;const Bn=t=>{if(window.TouchEvent&&t instanceof TouchEvent){const{left:s,top:r}=t.target.getBoundingClientRect(),{clientX:a,clientY:o}=t.changedTouches[0];return{x:a-s,y:o-r}}const{offsetX:e,offsetY:n}=t;return{x:e,y:n}},Bt=(t,e)=>{var n,s;t instanceof MouseEvent&&((n=t.target)==null||n.dispatchEvent(new PointerEvent(`layer.pointer${e}`,t)),(s=t.target)==null||s.dispatchEvent(new MouseEvent(`layer.mouse${e}`,t)))},Rn=["onclick","oncontextmenu","ondblclick","onauxclick","onmousedown","onmouseenter","onmouseleave","onmouseup","onmousemove","onwheel","ontouchstart","ontouchcancel","ontouchend","ontouchmove","onpointerenter","onpointerleave","onpointerdown","onpointerup","onpointermove","onpointercancel","onlayer.mouseenter","onlayer.mouseleave","onlayer.pointerenter","onlayer.pointerleave","onfocus","onblur","onfullscreenchange","onfullscreenerror","onscroll","oncut","oncopy","onpaste","onkeydown","onkeypress","onkeyup","onmouseover","onmouseout","onselect","ondrag","ondragend","ondragenter","ondragstart","ondragleave","ondragover","ondrop","onpointerover","onpointerout","ongotpointercapture","onlostpointercapture"],Ln=t=>console.warn("[svelte-canvas] %s",t),Vt=Symbol("register"),zn=t=>bn(Vt)(t);var me,ve,we,tt,nt,Be,ie,F,be,xe,Re,Le,Pe,I,Kt,qt,pt,Zt,yt,Qt,$t,en;class jn{constructor(e){M(this,I);M(this,me,new Oe);M(this,ve,new Oe);M(this,we,new Oe);M(this,tt,1);M(this,nt,Date.now());M(this,Be,N(0));M(this,ie);M(this,F);M(this,be);M(this,xe);M(this,Re,N(R([])));M(this,Le,0);M(this,Pe);G(this,F,e),xn(Vt,this.register.bind(this))}init(e,n){G(this,ie,e),z(this,I,Zt).call(this,n),K(()=>z(this,I,yt).call(this)),K(()=>z(this,I,pt).call(this)),K(()=>(d(g(this,Be)),z(this,I,Qt).call(this))),It(()=>z(this,I,en).call(this))}redraw(){Pn(g(this,Be))}register({setup:e,render:n,...s}){const r=z(this,I,Kt).call(this);return e&&g(this,me).set(r,e),g(this,ve).set(r,n),Object.keys(s).length&&(g(this,F).layerEvents?g(this,we).set(r,s):Ln("Canvas must have layerEvents={true} in order to use layer-level event handlers")),It(()=>z(this,I,qt).call(this,r)),r}createEventHandlers(){const e=r=>{const a=`on${r.type}`,o=g(this,F).handlers[a];o==null||o(r)},n=r=>{const{pixelRatio:a}=g(this,F),{x:o,y:i}=Bn(r);if(["touchstart","pointermove"].includes(r.type)){const u=g(this,ie).getLayerIdAt(o*a,i*a);z(this,I,$t).call(this,u,r)}if(!g(this,Pe))return;const l=`on${r.type.replace("layer.","")}`,c=g(this,Pe)[l];c==null||c({x:o,y:i,originalEvent:r})},s=r=>{e(r),g(this,F).layerEvents&&n(r)};return Rn.reduce((r,a)=>({...r,[a]:s}),{})}}me=new WeakMap,ve=new WeakMap,we=new WeakMap,tt=new WeakMap,nt=new WeakMap,Be=new WeakMap,ie=new WeakMap,F=new WeakMap,be=new WeakMap,xe=new WeakMap,Re=new WeakMap,Le=new WeakMap,Pe=new WeakMap,I=new WeakSet,Kt=function(){return Ot(this,tt)._++},qt=function(e){g(this,ve).delete(e),g(this,we).delete(e)},pt=function(){const{onresize:e,width:n,height:s,pixelRatio:r}=g(this,F);e==null||e({width:n,height:s,pixelRatio:r})},Zt=function(e){const n=()=>{const s=[...e.children];b(g(this,Re),R(s.map(r=>+r.dataset.layerId)))};G(this,xe,new MutationObserver(()=>n())),g(this,xe).observe(e,{childList:!0}),n()},yt=function(){g(this,F).autoplay?(Xt(()=>this.redraw()),G(this,be,requestAnimationFrame(()=>z(this,I,yt).call(this)))):cancelAnimationFrame(g(this,be))},Qt=function(){var l,c,u;const e=g(this,ie),{width:n,height:s,pixelRatio:r,autoclear:a}=g(this,F),o=Date.now()-g(this,nt),i={context:e,width:n,height:s,time:o};e.setTransform(r,0,0,r,0,0),a&&e.clearRect(0,0,n,s);for(const[f,h]of g(this,me))h(i),g(this,me).delete(f);for(const f of d(g(this,Re)))(c=(l=g(this,ie)).setCurrentLayerId)==null||c.call(l,f),(u=g(this,ve).get(f))==null||u(i)},$t=function(e,n){g(this,Le)!==e&&(Bt(n,"leave"),G(this,Le,e),G(this,Pe,g(this,we).get(e)),Bt(n,"enter"))},en=function(){var e;typeof window>"u"||((e=g(this,xe))==null||e.disconnect(),cancelAnimationFrame(g(this,be)))};/*!
 * canvas-size
 * v1.2.6
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2023 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */function Wn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var s,r,a,o,i=[],l=!0,c=!1;try{if(a=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(s=a.call(n)).done)&&(i.push(s.value),i.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return i}}function Rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,s)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rt(Object(n),!0).forEach(function(s){Yn(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Yn(t,e,n){return e=Kn(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xn(t,e){if(t==null)return{};var n={},s=Object.keys(t),r,a;for(a=0;a<s.length;a++)r=s[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Fn(t,e){if(t==null)return{};var n=Xn(t,e),s,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)s=a[r],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function Lt(t,e){return Dn(t)||Wn(t,e)||tn(t,e)||Jn()}function Ge(t){return Hn(t)||Gn(t)||tn(t)||Un()}function Hn(t){if(Array.isArray(t))return mt(t)}function Dn(t){if(Array.isArray(t))return t}function Gn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tn(t,e){if(t){if(typeof t=="string")return mt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mt(t,e)}}function mt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function Un(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vn(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Kn(t){var e=Vn(t,"string");return typeof e=="symbol"?e:String(e)}function _e(t){var e=t.sizes.shift(),n=Math.max(Math.ceil(e[0]),1),s=Math.max(Math.ceil(e[1]),1),r=[n-1,s-1,1,1],a=Date.now(),o=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,i,l;o?(i=new OffscreenCanvas(1,1),l=new OffscreenCanvas(n,s)):(i=document.createElement("canvas"),i.width=1,i.height=1,l=document.createElement("canvas"),l.width=n,l.height=s);var c=i.getContext("2d"),u=l.getContext("2d");u&&(u.fillRect.apply(u,r),c.drawImage(l,n-1,s-1,1,1,0,0,1,1));var f=c&&c.getImageData(0,0,1,1).data[3]!==0,h=Date.now()-a;return[i,l].forEach(function(m){m.height=0,m.width=0}),o?(postMessage({width:n,height:s,benchmark:h,isTestPass:f}),!f&&t.sizes.length&&_e(t)):f?t.onSuccess(n,s,h):(t.onError(n,s,h),t.sizes.length&&_e(t)),f}var lt={area:[16384,14188,11402,11180,10836,8192,4096,1],height:[8388607,65535,32767,16384,8192,4096,1],width:[4194303,65535,32767,16384,8192,4096,1]},qn=["onError","onSuccess"],de={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},Te={};function ct(t){var e=t.width===t.height,n=t.height===1,s=t.width===1,r=[];if(!t.width||!t.height)t.sizes.forEach(function(u){var f=e||n?u:1,h=e||s?u:1;r.push([f,h])});else for(var a=t.min||de.min,o=t.step||de.step,i=Math.max(t.width,t.height);i>=a;){var l=e||n?i:1,c=e||s?i:1;r.push([l,c]),i-=o}return r}function Ue(t){var e=window&&"HTMLCanvasElement"in window,n=window&&"OffscreenCanvas"in window,s=Date.now(),r=t.onError,a=t.onSuccess,o=Fn(t,qn),i=null;if(!e)return!1;if(t.useWorker&&n){var l=`
            var canvasTest = `.concat(_e.toString(),`;
            onmessage = function(e) {
                canvasTest(e.data);
            };
        `),c=new Blob([l],{type:"application/javascript"}),u=URL.createObjectURL(c);i=new Worker(u),URL.revokeObjectURL(u),i.onmessage=function(f){var h=f.data,m=h.width,v=h.height,E=h.benchmark,k=h.isTestPass;k?(Te[s].onSuccess(m,v,E),delete Te[s]):Te[s].onError(m,v,E)}}if(t.usePromise)return new Promise(function(f,h){var m=j(j({},t),{},{onError:function(w,x,P){var B;if(t.sizes.length===0)B=!0;else{var Y=t.sizes.slice(-1),L=Lt(Y,1),X=Lt(L[0],2),C=X[0],le=X[1];B=w===C&&x===le}r(w,x,P),B&&h({width:w,height:x,benchmark:P})},onSuccess:function(w,x,P){a(w,x,P),f({width:w,height:x,benchmark:P})}});if(i){var v=m.onError,E=m.onSuccess;Te[s]={onError:v,onSuccess:E},i.postMessage(o)}else _e(m)});if(i)Te[s]={onError:r,onSuccess:a},i.postMessage(o);else return _e(t)}var pn={maxArea:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=ct({width:e.max,height:e.max,min:e.min,step:e.step,sizes:Ge(lt.area)}),s=j(j(j({},de),e),{},{sizes:n});return Ue(s)},maxHeight:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=ct({width:1,height:e.max,min:e.min,step:e.step,sizes:Ge(lt.height)}),s=j(j(j({},de),e),{},{sizes:n});return Ue(s)},maxWidth:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=ct({width:e.max,height:1,min:e.min,step:e.step,sizes:Ge(lt.width)}),s=j(j(j({},de),e),{},{sizes:n});return Ue(s)},test:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=j(j({},de),e);return n.sizes=Ge(n.sizes),n.width&&n.height&&(n.sizes=[[n.width,n.height]]),Ue(n)}};const Zn=(t,e,n,s=.1)=>{if(typeof window>"u")return n;for(;!pn.test({sizes:[[t*n,e*n]]});)n-=s;return n};var Qn=ze("<canvas></canvas> <div><!></div>",1);function $n(t,e){p(e,!0);let n=De(e,"style",3,""),s=De(e,"autoplay",3,!1),r=De(e,"autoclear",3,!0),a=De(e,"layerEvents",3,!1),o=Dt(e,["$$slots","$$events","$$legacy","width","height","pixelRatio","class","style","autoplay","autoclear","layerEvents","onresize","contextSettings","children"]),i,l,c,u=N(2),f=N(0),h=N(0);const m=Ae(()=>e.width??d(f)),v=Ae(()=>e.height??d(h)),E=Ae(()=>d(u)&&e.pixelRatio==="auto"?Zn(d(m),d(v),d(u)):e.pixelRatio&&e.pixelRatio!=="auto"?e.pixelRatio:d(u)),k=new jn({get width(){return d(m)},get height(){return d(v)},get pixelRatio(){return d(E)},get autoplay(){return s()},get autoclear(){return r()},get layerEvents(){return a()},get onresize(){return e.onresize},handlers:o});je(()=>{a()?l=Nn(i,e.contextSettings):l=i.getContext("2d",e.contextSettings),k.init(l,c)});const w=()=>k.redraw();var x=Qn(),P=bt(x);const B=Ae(()=>k.createEventHandlers());let Y;ht(P,C=>i=C,()=>i);var L=ne(P,2);ot(L,"display","none");var X=ft(L);return Tn(X,()=>e.children??kn),dt(L),ht(L,C=>c=C,()=>c),Ft(()=>{Y=En(P,Y,{class:e.class,width:d(m)*d(E),height:d(v)*d(E),style:n(),...d(B)}),ot(P,"width",e.width?`${e.width}px`:"100%"),ot(P,"height",e.height?`${e.height}px`:"100%")}),Cn("devicePixelRatio","resize",Ke,C=>b(u,R(C))),Nt(P,"clientWidth",C=>b(f,C)),Nt(P,"clientHeight",C=>b(h,C)),he(t,x),Z({redraw:w,get canvas(){return i},set canvas(C){i=C},get context(){return l},set context(C){l=C}})}var er=ze("<div></div>");function ae(t,e){p(e,!0);const n=Dt(e,["$$slots","$$events","$$legacy"]),s=zn(n);var r=er();Ut(r,"data-layer-id",s),he(t,r),Z()}const nn=Ze(void 0),rn=Ze(void 0);let O;const Ie=new Map,ee=new Map,Q={},sn=new Set,pe={},Qe={},re={},se={},_={};let Je=.3835;const zt={Juggernaut:{x:-10400,y:5200},Berserker:{x:-10400,y:3700},Chieftain:{x:-10400,y:2200},Raider:{x:10200,y:5200},Deadeye:{x:10200,y:2200},Pathfinder:{x:10200,y:3700},Occultist:{x:-1500,y:-9850},Elementalist:{x:0,y:-9850},Necromancer:{x:1500,y:-9850},Slayer:{x:1500,y:9800},Gladiator:{x:-1500,y:9800},Champion:{x:0,y:9800},Inquisitor:{x:-10400,y:-2200},Hierophant:{x:-10400,y:-3700},Guardian:{x:-10400,y:-5200},Assassin:{x:10200,y:-5200},Trickster:{x:10200,y:-3700},Saboteur:{x:10200,y:-2200},Ascendant:{x:-7800,y:7200}},oe={},tr=async t=>{var n,s,r,a;if(!fe)return;const e=await fe.GetTree(t);O=JSON.parse(e),console.log("Loaded skill tree",O),O.imageZoomLevels&&(Je=O.imageZoomLevels[O.imageZoomLevels.length-1]),Object.keys(O.groups).forEach(o=>{var c;const i=O.groups[o],l=parseInt(o);Ie.set(l,i),(c=i.nodes)==null||c.forEach(u=>{const f=O.nodes[u];if(ee.set(parseInt(u),f),f.classStartIndex!==void 0){pe[l]=f.classStartIndex;for(const h of[...f.out||[],...f.in||[]]){const m=O.nodes[h];m.skill&&m.ascendancyName===void 0&&(Qe[f.classStartIndex]=[...Qe[f.classStartIndex]||[],m.skill])}}f.ascendancyName!==void 0&&(Q[l]=f.ascendancyName),f.isAscendancyStart&&(sn.add(l),f.ascendancyName&&(oe[f.ascendancyName]={x:zt[f.ascendancyName].x-i.x,y:zt[f.ascendancyName].y-i.y}))})});for(const o of["keystoneInactive","notableInactive","normalInactive","masteryInactive"]){const i=(n=O.sprites[o])==null?void 0:n[Je];Object.keys((i==null?void 0:i.coords)||{}).forEach(l=>i&&(re[l]=i))}for(const o of["keystoneActive","notableActive","normalActive","masteryActiveSelected"]){const i=(s=O.sprites[o])==null?void 0:s[Je];Object.keys(i.coords).forEach(l=>i&&(se[l]=i))}for(const o of["background","mastery","masteryConnected","ascendancyBackground","ascendancy","startNode","groupBackground","frame","jewel","line","jewelRadius"]){let i=(r=O.sprites[o])==null?void 0:r[Je];i||(i=(a=O.sprites[o])==null?void 0:a[Object.keys(O.sprites[o])[0]]),Object.keys((i==null?void 0:i.coords)||{}).forEach(l=>i&&(_[l]=i))}nn.set(O),rn.set(t)},rt=(t,e,n,s,r)=>({x:(Math.abs(O.min_x)+t+n)/r,y:(Math.abs(O.min_y)+e+s)/r}),nr=(t,e,n)=>{const s=Math.PI/180*n,r=Math.cos(s),a=Math.sin(s),o=r*(e.x-t.x)+a*(e.y-t.y)+t.x,i=r*(e.y-t.y)-a*(e.x-t.x)+t.y;return{x:o,y:i}},jt=[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330],Wt=[0,10,20,30,40,45,50,60,70,80,90,100,110,120,130,135,140,150,160,170,180,190,200,210,220,225,230,240,250,260,270,280,290,300,310,315,320,330,340,350],vt=(t,e)=>{var s;const n=(s=O.constants.skillsPerOrbit)==null?void 0:s[t];return n==16?jt[jt.length-e]||0:n==40?Wt[Wt.length-e]||0:360-360/(n||1)*e},Ve={},wt=(t,e,n,s)=>{var r,a;if(t.group===void 0||t.orbit===void 0||t.orbitIndex===void 0||t.skill===void 0||!O.groups||!O.constants.orbitRadii)return{x:0,y:0};if(!(t.skill in Ve)){const o=O.groups[t.group],i=(t.ascendancyName&&((r=oe[t.ascendancyName])==null?void 0:r.x)||0)+o.x,l=(t.ascendancyName&&((a=oe[t.ascendancyName])==null?void 0:a.y)||0)+o.y,c=vt(t.orbit,t.orbitIndex);Ve[t.skill]=nr({x:i,y:l},{x:i,y:l-O.constants.orbitRadii[t.orbit]},c)}return rt(Ve[t.skill].x,Ve[t.skill].y,e,n,s)},rr=(t,e)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)),te={},ut={},Yt=2.6,S=(t,e,n,s,r,a,o=!1,i=!1,l=!1)=>{const c=s[e];if(!c)return;const u=c.filename;if(!(u in te)){const w=new URL(u).pathname,x=w.substring(w.lastIndexOf("/")+1),B=a+"/tree/assets/"+x;te[u]=new Image,te[u].src=B}const f=c.coords[e],h=f.w/r*Yt,m=f.h/r*Yt,v=n.x-h/2,E=n.y-m/2;let k=E;if(o&&(k=E-m/2),i&&te[u].complete){const w=u+":"+e+";"+(l?"active":"");if(!(w in ut)){const x=document.createElement("canvas"),P=x.getContext("2d");x.width=f.w,x.height=f.h,P.save(),P.beginPath(),P.arc(f.w/2,f.h/2,f.w/2,0,Math.PI*2,!0),P.closePath(),P.clip(),l||(P.filter="brightness(50%) opacity(50%)"),P.drawImage(te[u],f.x,f.y,f.w,f.h,0,0,f.w,f.h),ut[w]=x}t.drawImage(ut[w],0,0,f.w,f.h,v,k,h,m)}else t.drawImage(te[u],f.x,f.y,f.w,f.h,v,k,h,m);o&&(t.save(),t.translate(v,E),t.rotate(Math.PI),t.drawImage(te[u],f.x,f.y,f.w,f.h,-h,-(m/2),h,-m),t.restore())},sr=(t,e,n)=>{const s=[];let r="";return t.split(" ").forEach(a=>{e.measureText(r+a).width<n?r+=" "+a:(s.push(r.trim()),r=a)}),r.length>0&&s.push(r.trim()),s};function ir(t,e){p(e,!0);const n=new Map;je(()=>{ee.keys().forEach(r=>{const a=ee.get(r);a.isAscendancyStart?n.set(r,{node:a,nNodeId:r,draw(o,i,l){S(o,"AscendancyMiddle",i,_,l,e.cdnBase)}}):a.isKeystone?n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){S(o,a.icon,i,c?se:re,l,e.cdnBase),c||u?S(o,"KeystoneFrameAllocated",i,_,l,e.cdnBase):S(o,"KeystoneFrameUnallocated",i,_,l,e.cdnBase)}}):a.isNotable?a.ascendancyName?n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){S(o,a.icon,i,c?se:re,l,e.cdnBase),c||u?S(o,"AscendancyFrameLargeAllocated",i,_,l,e.cdnBase):S(o,"AscendancyFrameLargeNormal",i,_,l,e.cdnBase)}}):n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){S(o,a.icon,i,c?se:re,l,e.cdnBase),c||u?S(o,"NotableFrameAllocated",i,_,l,e.cdnBase):S(o,"NotableFrameUnallocated",i,_,l,e.cdnBase)}}):a.isJewelSocket?a.expansionJewel?n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){c||u?S(o,"JewelSocketAltActive",i,_,l,e.cdnBase):S(o,"JewelSocketAltNormal",i,_,l,e.cdnBase)}}):n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){c||u?S(o,"JewelFrameAllocated",i,_,l,e.cdnBase):S(o,"JewelFrameUnallocated",i,_,l,e.cdnBase)}}):a.isMastery?n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){c||u?S(o,a.activeIcon,i,se,l,e.cdnBase):S(o,a.inactiveIcon,i,re,l,e.cdnBase)}}):a.ascendancyName?n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){S(o,a.icon,i,c?se:re,l,e.cdnBase),c||u?S(o,"AscendancyFrameSmallAllocated",i,_,l,e.cdnBase):S(o,"AscendancyFrameSmallNormal",i,_,l,e.cdnBase)}}):n.set(r,{node:a,nNodeId:r,draw(o,i,l,c,u){S(o,a.icon,i,c?se:re,l,e.cdnBase),c||u?S(o,"PSSkillFrameActive",i,_,l,e.cdnBase):S(o,"PSSkillFrame",i,_,l,e.cdnBase)}})})}),ae(t,{render:({context:r})=>{const a=new Set(e.hoverPath),o=new Set(e.activeNodes);e.visibleNodePos.forEach((i,l)=>{const c=n.get(l),u=o.has(l),f=a.has(l)||e.hoveredNode===c;c.draw(r,i,e.scaling,u,f)})}}),Z()}function ar(t,e){p(e,!0);const n=[];je(()=>{const r={};ee.keys().forEach(a=>{var l;const o=ee.get(a);if(o.classStartIndex!==void 0)return;const i=vt(o.orbit,o.orbitIndex);(l=o.out)==null||l.forEach(c=>{var E,k;if(!ee.get(parseInt(c)))return;const u=Math.min(parseInt(c),a),f=Math.max(parseInt(c),a),h=u+":"+f;if(h in r)return;r[h]=!0;const m=ee.get(parseInt(c));if(m.isMastery||o.ascendancyName!==m.ascendancyName||m.classStartIndex!==void 0)return;const v=vt(m.orbit,m.orbitIndex);if(o.group!=m.group||o.orbit!=m.orbit)n.push({node:o,targetNode:m,draw(w,x,P){w.moveTo(x.x,x.y),w.lineTo(P.x,P.y)}});else{let w=Math.PI/180-Math.PI/180*i,x=Math.PI/180-Math.PI/180*v;w-=Math.PI/2,x-=Math.PI/2;const P=Math.abs(Math.max(w,x)-Math.min(w,x)),B=P>Math.PI?Math.max(w,x):Math.min(w,x),Y=P>Math.PI?Math.min(w,x):Math.max(w,x),L=Ie.get(o.group),X=(o.ascendancyName&&((E=oe[o.ascendancyName])==null?void 0:E.x)||0)+L.x,C=(o.ascendancyName&&((k=oe[o.ascendancyName])==null?void 0:k.y)||0)+L.y;n.push({node:o,targetNode:m,draw(le,Pt,kt,We,Ye,ke,Xe){const ce=rt(X,C,We,Ye,ke);le.arc(ce.x,ce.y,Xe.constants.orbitRadii[o.orbit]/ke+1,B,Y)}})}})})}),ae(t,{render:({context:r,width:a,height:o})=>{if(!n)return;const i=new Set(e.hoverPath),l=new Set(e.activeNodes);n.forEach(c=>{const u=wt(c.node,e.offsetX,e.offsetY,e.scaling),f=wt(c.targetNode,e.offsetX,e.offsetY,e.scaling);if((u.x<e.cullingPadding||u.x>a-e.cullingPadding||u.y<e.cullingPadding||u.y>o-e.cullingPadding)&&(f.x<e.cullingPadding||f.x>a-e.cullingPadding||f.y<e.cullingPadding||f.y>o-e.cullingPadding))return;r.beginPath(),c.draw(r,u,f,e.offsetX,e.offsetY,e.scaling,e.skillTree);let h=6;l.has(c.node.skill)&&l.has(c.targetNode.skill)?(r.strokeStyle="#e9deb6",h=12):i.has(c.node.skill)&&i.has(c.targetNode.skill)?r.strokeStyle="#c89c01":r.strokeStyle="#524518",r.lineWidth=h/e.scaling,r.stroke()})}}),Z()}function or(t,e){p(e,!0),ae(t,{render:({context:s,width:r,height:a})=>{Ie.forEach((o,i)=>{var h,m;const l=(i in Q&&((h=oe[Q[i]])==null?void 0:h.x)||0)+o.x,c=(i in Q&&((m=oe[Q[i]])==null?void 0:m.y)||0)+o.y,u=rt(l,c,e.offsetX,e.offsetY,e.scaling);if(u.x<e.cullingPadding||u.x>r-e.cullingPadding||u.y<e.cullingPadding||u.y>a-e.cullingPadding)return;const f=Math.max(...o.orbits);i in pe?e.currentClass===e.skillTree.classes[pe[i]].name?S(s,"center"+e.skillTree.classes[pe[i]].name.toLowerCase(),u,_,e.scaling,e.cdnBase):S(s,"PSStartNodeBackgroundInactive",u,_,e.scaling,e.cdnBase,!1,!0):i in Q?sn.has(i)&&S(s,"Classes"+Q[i],u,_,e.scaling,e.cdnBase,!1,!0,e.currentAscendancy===Q[i]):f==1?S(s,"PSGroupBackground1",u,_,e.scaling,e.cdnBase):f==2?S(s,"PSGroupBackground2",u,_,e.scaling,e.cdnBase):(f==3||o.orbits.length>1)&&S(s,"PSGroupBackground3",u,_,e.scaling,e.cdnBase,!0)})}}),Z()}function lr(t,e){p(e,!0);const n=R({});ae(t,{render:({context:r,width:a,height:o})=>{if(e.currentClass){const i=e.skillTree.classes.findIndex(l=>l.name===e.currentClass);if(i in e.skillTree.extraImages){const l=e.skillTree.extraImages[i];if(l.image in n||(n[l.image]=new Image,n[l.image].src=e.cdnBase+"/raw/"+l.image),n[l.image].complete){const c=rt(l.x,l.y,e.offsetX,e.offsetY,e.scaling),u=n[l.image].width/e.scaling*e.drawScaling*.5,f=n[l.image].height/e.scaling*e.drawScaling*.5,h=c.x+u,m=c.y+f,v=c.x<e.cullingPadding||c.x>a-e.cullingPadding||c.y<e.cullingPadding||c.y>o-e.cullingPadding,E=h<e.cullingPadding||h>a-e.cullingPadding||c.y<e.cullingPadding||c.y>o-e.cullingPadding,k=c.x<e.cullingPadding||c.x>a-e.cullingPadding||m<e.cullingPadding||m>o-e.cullingPadding,w=h<e.cullingPadding||h>a-e.cullingPadding||m<e.cullingPadding||m>o-e.cullingPadding;if(v&&E&&k&&w)return;r.drawImage(n[l.image],0,0,n[l.image].width,n[l.image].height,c.x,c.y,u,f)}}}}}),Z()}function cr(t,e){p(e,!0);const n="25px Roboto Flex",s="17px Roboto Flex";ae(t,{render:({context:a})=>{if(e.hoveredNode){const o=e.hoveredNode.name||"N/A",i=(e.hoveredNode.stats||[]).map(v=>({text:v,special:!1}));a.font=n;const l=a.measureText(o),c=Math.max(l.width+50,600);a.font=s;const u=[],f=30;let h=85;i&&i.length>0?i.forEach(v=>{u.length>0&&(h+=5),v.text.split(`
`).forEach(E=>{u.length>0&&(h+=10),sr(E,a,c-f).forEach(w=>{u.push({text:w,offset:h,special:v.special}),h+=20})})}):e.hoveredNode.isJewelSocket&&(u.push({text:"Click to select this socket",offset:h,special:!0}),h+=20);const m=55;a.fillStyle="rgba(75,63,24,0.9)",a.fillRect(e.mousePos.x,e.mousePos.y,c,m),a.fillStyle="#ffffff",a.font=n,a.textAlign="center",a.fillText(o,e.mousePos.x+c/2,e.mousePos.y+35),a.fillStyle="rgba(0,0,0,0.8)",a.fillRect(e.mousePos.x,e.mousePos.y+m,c,h-m),a.font=s,a.textAlign="left",u.forEach(v=>{v.special?a.fillStyle="#8cf34c":a.fillStyle="#ffffff",a.fillText(v.text,e.mousePos.x+f/2,e.mousePos.y+v.offset)})}}}),Z()}var ur=ze("<!> <!> <!> <!> <!> <!> <!>",1),fr=ze("<div><!></div>"),dr=ze('<div class="w-full h-full max-w-full max-h-full overflow-hidden"><!></div>');function hr(t,e){p(e,!0);const n=Gt(),s=()=>Ce(at,"$currentBuild",n),r=()=>Ce(C,"$hoveredNode",n),a=()=>Ce(x,"$hoverPath",n);let o=N(void 0);K(()=>{var y;(y=s())==null||y.Build.ClassName.then(T=>b(o,R(T))).catch(Me)});let i=N(void 0);K(()=>{var y;(y=s())==null||y.Build.AscendClassName.then(T=>b(i,R(T))).catch(Me)});const l=-150;let c=N(10),u=N(0),f=N(0),h=N(void 0);K(()=>{var y,T,A;(A=(T=(y=s())==null?void 0:y.Build)==null?void 0:T.PassiveNodes)==null||A.then(H=>b(h,R(H))).catch(Me)});let m=y=>{var A,H,D;const T=y.skill??-1;if((A=d(h))!=null&&A.includes(T))(H=fe)==null||H.DeallocateNodes(T),at.set(s());else{const W=Qe[e.skillTree.classes.findIndex(V=>V.name===d(o))];(D=fe)==null||D.CalculateTreePath(e.skillTreeVersion||"3_18",[...W,...d(h)??[]],T).then(V=>{var Se;if(!V)return;const He=W.includes(V[0]);(Se=fe)==null||Se.AllocateNodes(He?V:V.slice(1)),at.set(s())})}};const v=2.6;let E=Ae(()=>`https://go-pob-data.pages.dev/data/${(e.skillTreeVersion||"3_18").replace("_",".")}`),k=N(R({x:Number.MIN_VALUE,y:Number.MIN_VALUE})),w=N("unset");const x=Ze([]);let P,B=N(void 0),Y=N(0),L=N(0);const X=()=>{d(B)&&(b(Y,R(d(B).offsetWidth)),b(L,R(d(B).offsetHeight)))},C=Ze();let le=N(R(new Map));K(()=>{let y=!1;const T=new Map;ee.forEach((A,H)=>{const D=wt(A,d(u),d(f),d(c));if(!y){let W=0;A.classStartIndex!==void 0||A.isAscendancyStart||(A.isKeystone?W=110:A.isNotable||A.isJewelSocket?W=70:A.isMastery?W=85:W=50),rr(D,d(k))<W/d(c)&&(C.set(A),y=!0)}D.x<l||D.x>d(Y)-l||D.y<l||D.y>d(L)-l||T.set(H,D)}),y||C.set(void 0),b(le,R(T))}),K(()=>{if(e.skillTree)if(r()!==void 0&&d(o)){const y=Qe[e.skillTree.classes.findIndex(A=>A.name===d(o))],T=r().skill;fe.CalculateTreePath(e.skillTreeVersion||"3_18",[...y,...d(h)??[]],T).then(A=>{A&&An(C)&&x.set(A)}).catch(Me)}else x.set([])});const Pt=({context:y,width:T,height:A})=>{P=window.performance.now(),y.fillStyle="#080c11",y.fillRect(0,0,T,A)},kt=({context:y,width:T,height:A})=>{r()?b(w,"pointer"):b(w,"unset"),y.fillStyle="#ffffff",y.textAlign="right",y.font="12px Roboto Mono";const H=window.performance.now();y.fillText(`${(H-P).toFixed(1)}ms`,T-5,17),y.strokeStyle="red",y.strokeRect(l,l,T-l*2,A-l*2)};let We=0,Ye=0,ke=0,Xe=0,ce=!1;const an=y=>{y instanceof MouseEvent&&(ce=!0,We=y.offsetX,Ye=y.offsetY,ke=d(u),Xe=d(f),b(k,R({x:y.offsetX,y:y.offsetY})),r()&&m(r()))},on=y=>{y.type==="pointerup"&&(ce=!1),b(k,R({x:y.offsetX,y:y.offsetY}))},ln=y=>{ce&&(b(u,ke-(We-y.offsetX)*d(c)),b(f,Xe-(Ye-y.offsetY)*d(c))),b(k,R({x:y.offsetX,y:y.offsetY}))},cn=y=>{y instanceof WheelEvent&&(y.deltaY>0?d(c)<30&&(b(u,d(u)+y.offsetX),b(f,d(f)+y.offsetY)):d(c)>3&&(b(u,d(u)-y.offsetX),b(f,d(f)-y.offsetY)),b(c,R(Math.min(30,Math.max(3,d(c)+y.deltaY/100)))),y.preventDefault(),y.stopPropagation(),y.stopImmediatePropagation())};let St=N(!1);K(()=>{!d(St)&&e.skillTree&&(b(St,!0),b(u,e.skillTree.min_x+window.innerWidth/2*d(c)),b(f,e.skillTree.min_y+window.innerHeight/2*d(c))),X()}),je(()=>{new ResizeObserver(X).observe(d(B)),X()});var Fe=dr();it("pointerup",Ke,on),it("pointermove",Ke,ln),it("resize",Ke,X);var un=ft(Fe);Ht(un,()=>d(Y)&&d(L),y=>{var T=fr(),A=ft(T);$n(A,{get width(){return d(Y)},get height(){return d(L)},onpointerdown:an,onwheel:cn,children:(H,D)=>{var W=ur(),V=bt(W);ae(V,{render:Pt});var He=ne(V,2);lr(He,{get scaling(){return d(c)},get offsetX(){return d(u)},get offsetY(){return d(f)},cullingPadding:l,drawScaling:v,get currentClass(){return d(o)},get cdnBase(){return d(E)},get skillTree(){return e.skillTree}});var Se=ne(He,2);or(Se,{get scaling(){return d(c)},get offsetX(){return d(u)},get offsetY(){return d(f)},cullingPadding:l,get currentAscendancy(){return d(i)},get currentClass(){return d(o)},get cdnBase(){return d(E)},get skillTree(){return e.skillTree}});var Et=ne(Se,2);ar(Et,{get scaling(){return d(c)},get offsetX(){return d(u)},get offsetY(){return d(f)},cullingPadding:l,get hoverPath(){return a()},get skillTree(){return e.skillTree},get activeNodes(){return d(h)}});var Tt=ne(Et,2);ir(Tt,{get hoveredNode(){return r()},get cdnBase(){return d(E)},get scaling(){return d(c)},get offsetX(){return d(u)},get offsetY(){return d(f)},cullingPadding:l,get hoverPath(){return a()},get visibleNodePos(){return d(le)},get activeNodes(){return d(h)}});var At=ne(Tt,2);cr(At,{get hoveredNode(){return r()},get mousePos(){return d(k)}});var fn=ne(At,2);ae(fn,{render:kt}),he(H,W)},$$slots:{default:!0}}),dt(T),Ft(()=>Ut(T,"style",`touch-action: none; cursor: ${d(w)??""}`)),he(y,T)}),dt(Fe),ht(Fe,y=>b(B,y),()=>d(B)),he(t,Fe),Z()}function Ar(t,e){p(e,!1);const n=Gt(),s=()=>Ce(nn,"$skillTree",n),r=()=>Ce(rn,"$skillTreeVersion",n);je(()=>{(!s()||!r()||Ie.size===0)&&tr("3_18").catch(Me)}),Sn();var a=mn(),o=bt(a);Ht(o,()=>s()&&r()&&Ie.size>0,i=>{hr(i,{get skillTree(){return s()},get skillTreeVersion(){return r()}})}),he(t,a),Z()}export{Ar as component};
