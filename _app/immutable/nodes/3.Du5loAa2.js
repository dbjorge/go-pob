import{a as m,t as I}from"../chunks/disclose-version.BiKuDWK2.js";import"../chunks/legacy.CY-94a-c.js";import{p as A,j as x,e as C,g as o,i as L,r as v,c as d,b as h,K as E}from"../chunks/runtime.BLVj8dz7.js";import{i as _}from"../chunks/lifecycle.BIiKv-Jy.js";import{e as H,i as $}from"../chunks/each.CwAL-BON.js";import{s as p}from"../chunks/attributes.DpYvJWZY.js";import{t as G}from"../chunks/class.COixK-Vz.js";import{p as W}from"../chunks/props.BmCjkDKm.js";import{c as e}from"../chunks/colors.DCgE6yJT.js";import{C as N}from"../chunks/ColoredText.DLVj65km.js";var b=I("<div><!></div>"),w=I('<div class="grid grid-flow-row section p-1.5 text-center svelte-fbyu41"></div>'),S=I('<div class="grid grid-flow-row min-w-[19em] max-w-[25vw] w-fit h-fit border-2"></div>');function f(g,a){A(a,!0);let l=W(a,"sections",19,()=>[]),i=W(a,"color",19,()=>e.WHITE);var r=S();H(r,21,l,$,(u,s)=>{var t=w();H(t,21,()=>o(s).text,$,(c,T)=>{var n=b(),R=L(n);N(R,{get text(){return o(T)}}),v(n),m(c,n)}),v(t),x(()=>{p(t,"style",`--border-color: ${i()??""}; color: ${(o(s).color||"#ffffff")??""}`),G(t,"text-xl",o(s).large),G(t,"italic",o(s).italic)}),m(u,t)}),v(r),x(()=>p(r,"style",`border-color: ${i()??""}`)),m(g,r),C()}var M=I('<h1 class="text-3xl font-bold">TODO</h1> <br> Here are some sample item frames. <div class="p-10 flex flex-wrap gap-10"><!> <!> <!> <!></div>',1);function O(g,a){A(a,!1),_();var l=M(),i=d(h(l),4),r=L(i),u=E(()=>[{large:!0,text:["Hallowed Hybrid Flask"]},{color:e.GRAY,text:[`Recovers ^${e.WHITE}1740^# Life over ^${e.WHITE}5^# Seconds`,`Recovers ^${e.WHITE}480^# Mana over ^${e.WHITE}5^# Seconds`,`Consumes ^${e.WHITE}20^# of ^${e.WHITE}40^# Charges on use`]},{color:e.GRAY,text:[`Requires Level ^${e.WHITE}60`]}]);f(r,{get sections(){return o(u)}});var s=d(r,2),t=E(()=>[{large:!0,color:e.MAGIC,text:["Eternal Life Flask"]},{color:e.GRAY,text:[`Recovers ^${e.WHITE}2080^# Life over ^${e.WHITE}2^# Seconds`,`Consumes ^${e.WHITE}15^# of ^${e.WHITE}45^# Charges on use`]},{color:e.GRAY,text:[`Requires Level ^${e.WHITE}65`]}]);f(s,{get color(){return e.MAGIC},get sections(){return o(t)}});var c=d(s,2),T=E(()=>[{large:!0,color:e.RARE,text:["Hate Caress","Dragonscale Gauntlets"]},{color:e.GRAY,text:[`Armour: ^${e.WHITE}126`,`Evasion Rating: ^${e.WHITE}155`,`Sockets: ^${e.DEXTERITY}G^#=^${e.INTELLIGENCE}B^#=^${e.STRENGTH}R^#=^${e.STRENGTH}R`]},{color:e.GRAY,text:[`Requires Level ^${e.WHITE}68^#, ^${e.WHITE}115^# Str, ^${e.WHITE}108^# Dex, ^${e.WHITE}146^# Int`]},{color:e.MAGIC,text:["+29 to Evasion Rating","+53 to maximum Life","9% increased Rarity of Items found","+45% to Fire Resistance","+48% to Lightning Resistance","Gain 11 Life per Enemy Killed"]}]);f(c,{get color(){return e.RARE},get sections(){return o(T)}});var n=d(c,2),R=E(()=>[{large:!0,color:e.UNIQUE,text:["Beacon of Madness","Two-Toned Boots"]},{color:e.GRAY,text:[`Armour: ^${e.WHITE}143`,`Evasion Rating: ^${e.WHITE}30`,`Sockets: ^${e.INTELLIGENCE}B^#=^${e.INTELLIGENCE}B^# ^${e.STRENGTH}R`]},{color:e.GRAY,text:[`Requires Level ^${e.WHITE}70^#, ^${e.WHITE}62^# Str, ^${e.WHITE}62^# Int`]},{color:e.MAGIC,text:["+9% to Fire and Lightning Resistances"]},{color:e.MAGIC,text:["Grants Level 1 Embrace Madness Skill","30% increased Movement Speed","26% increased Effect of Non-Damaging Ailments","You have Igniting, Chilling and Shocking Conflux while affected by Glorious Madness","Immune to Elemental Ailments while affected by Glorious Madness"]},{color:e.UNIQUE,italic:!0,text:["Nothing spreads as quickly as an idea."]}]);f(n,{get color(){return e.UNIQUE},get sections(){return o(R)}}),v(i),m(g,l),C()}export{O as component};