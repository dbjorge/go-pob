function g(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function L(){return Object.create(null)}function x(t){t.forEach(D)}function M(t){return typeof t=="function"}function mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function B(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t){let e;return B(t,n=>e=n)(),e}function yt(t,e,n){t.$$.on_destroy.push(B(e,n))}function gt(t,e,n,i){if(t){const s=q(t,e,n,i);return t[0](s)}}function q(t,e,n,i){return t[1]&&i?K(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function xt(t,e,n,i,s,c){if(s){const r=q(e,n,i,c);t.p(r,s)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){const e={};for(const n in t)e[n]=!0;return e}function wt(t,e,n){return t.set(n),e}function Et(t){return t&&M(t.destroy)?t.destroy:g}const Tt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let E=!1;function V(){E=!0}function X(){E=!1}function Y(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:Y(1,s,$=>e[n[$]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function tt(t,e){if(E){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function et(t,e,n){t.insertBefore(e,n||null)}function nt(t,e,n){E&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function At(){return S(" ")}function kt(){return S("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function it(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const st=["width","height"];function Ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&st.indexOf(i)===-1?t[i]=e[i]:it(t,i,e[i])}function Lt(t){return t===""?null:+t}function rt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,s=!1){z(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function R(t,e,n,i){return F(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Pt(t,e,n){return R(t,e,n,G)}function Ht(t,e,n){return R(t,e,n,I)}function ot(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function Ot(t){return ot(t," ")}function P(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Dt(t,e){const n=P(t,"HTML_TAG_START",0),i=P(t,"HTML_TAG_END",n);if(n===i)return new H(void 0,e);z(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(c,e)}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e){t.value=e??""}function Gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function It(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function zt(t){const e=t.querySelector(":checked");return e&&e.__value}function Ft(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class lt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=I(n.nodeName):this.e=G(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class H extends lt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)nt(this.t,this.n[n],e)}}function Rt(t,e){return new t(e)}let b;function y(t){b=t}function d(){if(!b)throw new Error("Function called outside component initialization");return b}function Ut(t){d().$$.before_update.push(t)}function Wt(t){d().$$.on_mount.push(t)}function Jt(t){d().$$.after_update.push(t)}function Kt(t){d().$$.on_destroy.push(t)}function Qt(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ct(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Vt(t,e){return d().$$.context.set(t,e),e}function Xt(t){return d().$$.context.get(t)}function Yt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],O=[];let p=[];const N=[],U=Promise.resolve();let A=!1;function W(){A||(A=!0,U.then(J))}function Zt(){return W(),U}function k(t){p.push(t)}function te(t){N.push(t)}const T=new Set;let h=0;function J(){if(h!==0)return;const t=b;do{try{for(;h<m.length;){const e=m[h];h++,y(e),ut(e.$$)}}catch(e){throw m.length=0,h=0,e}for(y(null),m.length=0,h=0;O.length;)O.pop()();for(let e=0;e<p.length;e+=1){const n=p[e];T.has(n)||(T.add(n),n())}p.length=0}while(m.length);for(;N.length;)N.pop()();A=!1,T.clear(),y(t)}function ut(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}function at(t){const e=[],n=[];p.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),p=e}const v=new Set;let _;function ee(){_={r:0,c:[],p:_}}function ne(){_.r||x(_.c),_=_.p}function ft(t,e){t&&t.i&&(v.delete(t),t.i(e))}function ie(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function se(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function re(t){return typeof t=="object"&&t!==null?t:{}}function oe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ce(t){t&&t.c()}function le(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||k(()=>{const r=t.$$.on_mount.map(D).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...r):x(r),t.$$.on_mount=[]}),c.forEach(k)}function dt(t,e){const n=t.$$;n.fragment!==null&&(at(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(m.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,s,c,r,l=[-1]){const o=b;y(t);const u=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,$,...j)=>{const C=j.length?j[0]:$;return u.ctx&&s(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&ht(t,a)),$}):[],u.update(),f=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){V();const a=rt(e.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&ft(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),X(),J()}y(o)}class ae{$destroy(){dt(this,1),this.$destroy=g}$on(e,n){if(!M(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{bt as $,qt as A,Lt as B,x as C,Bt as D,ne as E,yt as F,Tt as G,ee as H,H as I,kt as J,Dt as K,Wt as L,k as M,It as N,zt as O,wt as P,Gt as Q,Qt as R,ae as S,Kt as T,Jt as U,Rt as V,gt as W,St as X,M as Y,xt as Z,$t as _,rt as a,Vt as a0,Xt as a1,Yt as a2,Zt as a3,I as a4,Ht as a5,K as a6,Ct as a7,Et as a8,se as a9,vt as aa,Ut as ab,jt as ac,pt as ad,re as ae,ot as b,Pt as c,w as d,G as e,it as f,nt as g,tt as h,ue as i,O as j,oe as k,At as l,ce as m,g as n,Ot as o,le as p,_t as q,Mt as r,mt as s,S as t,te as u,ft as v,ie as w,dt as x,Nt as y,Ft as z};