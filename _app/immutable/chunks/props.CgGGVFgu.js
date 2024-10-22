import{ax as N,N as k,ay as z,y as I,az as G,s as p,ap as L,aA as _,g as P,a7 as T,aB as H,M as W,L as Y,al as Z,x as $,A,z as D,d as J,aC as j,aD as V,aE as Q,aF as X,aG as ee,aH as re,aI as te,aJ as ae,aK as ne,aL as ie,O as fe,k as C,K as ue,aM as se,aN as le,m as oe,aO as x}from"./runtime.LiVz1aeE.js";function R(e,r=null,f){if(typeof e!="object"||e===null||N in e)return e;const i=W(e);if(i!==k&&i!==z)return e;var n=new Map,o=Y(e),h=I(0);o&&n.set("length",I(e.length));var y;return new Proxy(e,{defineProperty(s,t,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&G();var l=n.get(t);return l===void 0?(l=I(a.value),n.set(t,l)):p(l,R(a.value,y)),!0},deleteProperty(s,t){var a=n.get(t);if(a===void 0)t in s&&n.set(t,I(_));else{if(o&&typeof t=="string"){var l=n.get("length"),u=Number(t);Number.isInteger(u)&&u<l.v&&p(l,u)}p(a,_),F(h)}return!0},get(s,t,a){var d;if(t===N)return e;var l=n.get(t),u=t in s;if(l===void 0&&(!u||(d=L(s,t))!=null&&d.writable)&&(l=I(R(u?s[t]:_,y)),n.set(t,l)),l!==void 0){var c=P(l);return c===_?void 0:c}return Reflect.get(s,t,a)},getOwnPropertyDescriptor(s,t){var a=Reflect.getOwnPropertyDescriptor(s,t);if(a&&"value"in a){var l=n.get(t);l&&(a.value=P(l))}else if(a===void 0){var u=n.get(t),c=u==null?void 0:u.v;if(u!==void 0&&c!==_)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return a},has(s,t){var c;if(t===N)return!0;var a=n.get(t),l=a!==void 0&&a.v!==_||Reflect.has(s,t);if(a!==void 0||T!==null&&(!l||(c=L(s,t))!=null&&c.writable)){a===void 0&&(a=I(l?R(s[t],y):_),n.set(t,a));var u=P(a);if(u===_)return!1}return l},set(s,t,a,l){var b;var u=n.get(t),c=t in s;if(o&&t==="length")for(var d=a;d<u.v;d+=1){var g=n.get(d+"");g!==void 0?p(g,_):d in s&&(g=I(_),n.set(d+"",g))}u===void 0?(!c||(b=L(s,t))!=null&&b.writable)&&(u=I(void 0),p(u,R(a,y)),n.set(t,u)):(c=u.v!==_,p(u,R(a,y)));var O=Reflect.getOwnPropertyDescriptor(s,t);if(O!=null&&O.set&&O.set.call(l,a),!c){if(o&&typeof t=="string"){var E=n.get("length"),w=Number(t);Number.isInteger(w)&&w>=E.v&&p(E,w+1)}F(h)}return!0},ownKeys(s){P(h);var t=Reflect.ownKeys(s).filter(u=>{var c=n.get(u);return c===void 0||c.v!==_});for(var[a,l]of n)l.v!==_&&!(a in s)&&t.push(a);return t},setPrototypeOf(){H()}})}function F(e,r=1){p(e,e.v+r)}function K(e){return e!==null&&typeof e=="object"&&N in e?e[N]:e}function ge(e,r){return Object.is(K(e),K(r))}const ce=new Set,de=new Set;function ve(e,r,f,i){function n(o){if(i.capture||_e.call(r,o),!o.cancelBubble){var h=j,y=T;A(null),D(null);try{return f.call(this,o)}finally{A(h),D(y)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$(()=>{r.addEventListener(e,n,i)}):r.addEventListener(e,n,i),n}function be(e,r,f,i,n){var o={capture:i,passive:n},h=ve(e,r,f,o);(r===document.body||r===window||r===document)&&Z(()=>{r.removeEventListener(e,h,o)})}function we(e){for(var r=0;r<e.length;r++)ce.add(e[r]);for(var f of de)f(e)}function _e(e){var w;var r=this,f=r.ownerDocument,i=e.type,n=((w=e.composedPath)==null?void 0:w.call(e))||[],o=n[0]||e.target,h=0,y=e.__root;if(y){var s=n.indexOf(y);if(s!==-1&&(r===document||r===window)){e.__root=r;return}var t=n.indexOf(r);if(t===-1)return;s<=t&&(h=s)}if(o=n[h]||e.target,o!==r){J(e,"currentTarget",{configurable:!0,get(){return o||f}});var a=j,l=T;A(null),D(null);try{for(var u,c=[];o!==null;){var d=o.assignedSlot||o.parentNode||o.host||null;try{var g=o["__"+i];if(g!==void 0&&!o.disabled)if(Y(g)){var[O,...E]=g;O.apply(o,[e,...E])}else g.call(o,e)}catch(b){u?c.push(b):u=b}if(e.cancelBubble||d===r||d===null)break;o=d}if(u){for(let b of c)queueMicrotask(()=>{throw b});throw u}}finally{e.__root=r,delete e.currentTarget,A(a),D(l)}}}const he={get(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(x(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(x(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=L(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){for(let f of e.props)if(x(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){x(f)&&(f=f());for(const i in f)r.includes(i)||r.push(i)}return r}};function pe(...e){return new Proxy({props:e},he)}function U(e){for(var r=T,f=T;r!==null&&!(r.f&(re|te));)r=r.parent;try{return D(r),e()}finally{D(f)}}function Pe(e,r,f,i){var q;var n=(f&ae)!==0,o=(f&ne)!==0,h=(f&ie)!==0,y=(f&le)!==0,s=e[r],t=(q=L(e,r))==null?void 0:q.set,a=i,l=!0,u=!1,c=()=>(u=!0,l&&(l=!1,y?a=fe(i):a=i),a);s===void 0&&i!==void 0&&(t&&o&&V(),s=c(),t&&t(s));var d;if(o)d=()=>{var v=e[r];return v===void 0?c():(l=!0,u=!1,v)};else{var g=U(()=>(n?C:ue)(()=>e[r]));g.f|=Q,d=()=>{var v=P(g);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(f&X))return d;if(t){var O=e.$$legacy;return function(v,S){return arguments.length>0?((!o||!S||O)&&t(S?d():v),v):d()}}var E=!1,w=!1,b=oe(s),m=U(()=>C(()=>{var v=d(),S=P(b),B=j;return E||v===void 0&&B.f&se?(E=!1,w=!0,S):(w=!1,b.v=v)}));return n||(m.equals=ee),function(v,S){var B=P(m);if(arguments.length>0){const M=S?P(m):o&&h?R(v):v;return m.equals(M)||(E=!0,p(b,M),u&&a!==void 0&&(a=M),P(m)),v}return B}}export{R as a,ce as b,ve as c,we as d,be as e,_e as h,ge as i,Pe as p,de as r,pe as s};
