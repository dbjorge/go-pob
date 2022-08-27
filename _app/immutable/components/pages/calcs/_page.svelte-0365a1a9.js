import{S as V,i as Q,s as K,k as _,l as T,m as R,h as f,n as S,p as I,b as h,A as y,H as P,a as v,c as H,N as G,B as p,q as D,v as W,r as Y,w as A,x as L,f as b,t as w,y as C}from"../../../chunks/index-2adee431.js";import{c as o,f as q}from"../../../chunks/colors-7fb82586.js";function B(c,e,a){const l=c.slice();return l[2]=e[a],l}function F(c,e,a){const l=c.slice();return l[5]=e[a],l}function U(c){let e,a=q(c[5])+"";return{c(){e=_("div")},l(l){e=T(l,"DIV",{});var t=R(e);t.forEach(f)},m(l,t){h(l,e,t),e.innerHTML=a},p(l,t){t&1&&a!==(a=q(l[5])+"")&&(e.innerHTML=a)},d(l){l&&f(e)}}}function O(c){let e,a,l=c[2].text,t=[];for(let n=0;n<l.length;n+=1)t[n]=U(F(c,l,n));return{c(){e=_("div");for(let n=0;n<t.length;n+=1)t[n].c();a=v(),this.h()},l(n){e=T(n,"DIV",{class:!0,style:!0});var r=R(e);for(let s=0;s<t.length;s+=1)t[s].l(r);a=H(r),r.forEach(f),this.h()},h(){S(e,"class","grid grid-flow-row section p-1.5 text-center svelte-fbyu41"),I(e,"--border-color",c[1]),I(e,"color",c[2].color||"#ffffff"),G(e,"text-xl",c[2].large),G(e,"italic",c[2].italic)},m(n,r){h(n,e,r);for(let s=0;s<t.length;s+=1)t[s].m(e,null);p(e,a)},p(n,r){if(r&1){l=n[2].text;let s;for(s=0;s<l.length;s+=1){const d=F(n,l,s);t[s]?t[s].p(d,r):(t[s]=U(d),t[s].c(),t[s].m(e,a))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}r&2&&I(e,"--border-color",n[1]),r&1&&I(e,"color",n[2].color||"#ffffff"),r&1&&G(e,"text-xl",n[2].large),r&1&&G(e,"italic",n[2].italic)},d(n){n&&f(e),P(t,n)}}}function X(c){let e,a=c[0],l=[];for(let t=0;t<a.length;t+=1)l[t]=O(B(c,a,t));return{c(){e=_("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=T(t,"DIV",{class:!0,style:!0});var n=R(e);for(let r=0;r<l.length;r+=1)l[r].l(n);n.forEach(f),this.h()},h(){S(e,"class","grid grid-flow-row min-w-[200px] max-w-[400px] w-fit h-fit border-2"),I(e,"border-color",c[1])},m(t,n){h(t,e,n);for(let r=0;r<l.length;r+=1)l[r].m(e,null)},p(t,[n]){if(n&3){a=t[0];let r;for(r=0;r<a.length;r+=1){const s=B(t,a,r);l[r]?l[r].p(s,n):(l[r]=O(s),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=a.length}n&2&&I(e,"border-color",t[1])},i:y,o:y,d(t){t&&f(e),P(l,t)}}}function j(c,e,a){let{sections:l=[]}=e,{color:t=o.WHITE}=e;return c.$$set=n=>{"sections"in n&&a(0,l=n.sections),"color"in n&&a(1,t=n.color)},[l,t]}class N extends V{constructor(e){super(),Q(this,e,j,X,K,{sections:0,color:1})}}function z(c){let e,a,l,t,n,r,s,d,g,M,E,k,$,x;return s=new N({props:{sections:[{large:!0,text:["Hallowed Hybrid Flask"]},{color:o.GRAY,text:[`Recovers ^${o.WHITE}1740^# Life over ^${o.WHITE}5^# Seconds`,`Recovers ^${o.WHITE}480^# Mana over ^${o.WHITE}5^# Seconds`,`Consumes ^${o.WHITE}20^# of ^${o.WHITE}40^# Charges on use`]},{color:o.GRAY,text:[`Requires Level ^${o.WHITE}60`]}]}}),g=new N({props:{color:o.MAGIC,sections:[{large:!0,color:o.MAGIC,text:["Eternal Life Flask"]},{color:o.GRAY,text:[`Recovers ^${o.WHITE}2080^# Life over ^${o.WHITE}2^# Seconds`,`Consumes ^${o.WHITE}15^# of ^${o.WHITE}45^# Charges on use`]},{color:o.GRAY,text:[`Requires Level ^${o.WHITE}65`]}]}}),E=new N({props:{color:o.RARE,sections:[{large:!0,color:o.RARE,text:["Hate Caress","Dragonscale Gauntlets"]},{color:o.GRAY,text:[`Armour: ^${o.WHITE}126`,`Evasion Rating: ^${o.WHITE}155`,`Sockets: ^${o.DEXTERITY}G^#=^${o.INTELLIGENCE}B^#=^${o.STRENGTH}R^#=^${o.STRENGTH}R`]},{color:o.GRAY,text:[`Requires Level ^${o.WHITE}68^#, ^${o.WHITE}115^# Str, ^${o.WHITE}108^# Dex, ^${o.WHITE}146^# Int`]},{color:o.MAGIC,text:["+29 to Evasion Rating","+53 to maximum Life","9% increased Rarity of Items found","+45% to Fire Resistance","+48% to Lightning Resistance","Gain 11 Life per Enemy Killed"]}]}}),$=new N({props:{color:o.UNIQUE,sections:[{large:!0,color:o.UNIQUE,text:["Beacon of Madness","Two-Toned Boots"]},{color:o.GRAY,text:[`Armour: ^${o.WHITE}143`,`Evasion Rating: ^${o.WHITE}30`,`Sockets: ^${o.INTELLIGENCE}B^#=^${o.INTELLIGENCE}B^# ^${o.STRENGTH}R`]},{color:o.GRAY,text:[`Requires Level ^${o.WHITE}70^#, ^${o.WHITE}62^# Str, ^${o.WHITE}62^# Int`]},{color:o.MAGIC,text:["+9% to Fire and Lightning Resistances"]},{color:o.MAGIC,text:["Grants Level 1 Embrace Madness Skill","30% increased Movement Speed","26% increased Effect of Non-Damaging Ailments","You have Igniting, Chilling and Shocking Conflux while affected by Glorious Madness","Immune to Elemental Ailments while affected by Glorious Madness"]},{color:o.UNIQUE,italic:!0,text:["Nothing spreads as quickly as an idea."]}]}}),{c(){e=_("h1"),a=D("TODO"),l=v(),t=_("br"),n=D(`
Here are some sample item frames.

`),r=_("div"),W(s.$$.fragment),d=v(),W(g.$$.fragment),M=v(),W(E.$$.fragment),k=v(),W($.$$.fragment),this.h()},l(i){e=T(i,"H1",{class:!0});var m=R(e);a=Y(m,"TODO"),m.forEach(f),l=H(i),t=T(i,"BR",{}),n=Y(i,`
Here are some sample item frames.

`),r=T(i,"DIV",{class:!0});var u=R(r);A(s.$$.fragment,u),d=H(u),A(g.$$.fragment,u),M=H(u),A(E.$$.fragment,u),k=H(u),A($.$$.fragment,u),u.forEach(f),this.h()},h(){S(e,"class","text-3xl font-bold"),S(r,"class","p-10 flex flex-wrap gap-10")},m(i,m){h(i,e,m),p(e,a),h(i,l,m),h(i,t,m),h(i,n,m),h(i,r,m),L(s,r,null),p(r,d),L(g,r,null),p(r,M),L(E,r,null),p(r,k),L($,r,null),x=!0},p:y,i(i){x||(b(s.$$.fragment,i),b(g.$$.fragment,i),b(E.$$.fragment,i),b($.$$.fragment,i),x=!0)},o(i){w(s.$$.fragment,i),w(g.$$.fragment,i),w(E.$$.fragment,i),w($.$$.fragment,i),x=!1},d(i){i&&f(e),i&&f(l),i&&f(t),i&&f(n),i&&f(r),C(s),C(g),C(E),C($)}}}class ee extends V{constructor(e){super(),Q(this,e,null,z,K,{})}}export{ee as default};
