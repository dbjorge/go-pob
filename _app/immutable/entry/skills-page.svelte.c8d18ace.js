import{S as Kt,i as Zt,s as Bt,e as Ut,b as Ee,g as _e,d as Le,f as lt,h as s,J as Nl,o as xt,w as fl,C as pl,k as n,q as b,a as v,y as _l,l as o,m as r,r as k,c as d,z as ml,n as m,D as xl,E as e,F as Gl,A as vl,G as be,H as dl,v as tt,Q as Wt,B as hl,I as at,u as Cl,K as $l,a3 as Al}from"../chunks/index.3d9c3a98.js";import{N as wl}from"../chunks/NumberInput.8e04115a.js";import{I as $t}from"../chunks/Input.4c8b0800.js";import{s as ea,c as tl,U as la}from"../chunks/global.73a57e97.js";import{w as et}from"../chunks/index.6c284d28.js";import{S as ta,a as aa,b as sa}from"../chunks/SelectSelection.cf7c1958.js";import{G as na}from"../chunks/cache.cd7e25ff.js";import{c as Ol}from"../chunks/colors.3bf15b12.js";function Rt(t,c,i){const l=t.slice();return l[44]=c[i],l[45]=c,l[46]=i,l}function qt(t,c,i){const l=t.slice();return l[47]=c[i],l[46]=i,l}function Ht(t){let c,i,l,f,I,M,Y,D,w,C,Q,A,j,H,q,z,T,h,U,me,V,ce,K,p,se,Ne,O,x,Fe,ve,Me,J,Ie,W,Ce,u,L,fe,ee,de,he,Ue,ze,We,Re,ke,a,_,le,g,pe,qe,je,ge,Pe,Ye,ne,G,we,P,N,S,y,Se,oe,Ae,ie,ye,te,R,ue,F,Ge,Je,Ke,He,Ze,Be,Oe,ae,De,xe,ul,rl,$e,Vl,Ql,Dl,Fl,Ml,el,Ul,Rl,El,ql,Hl,Sl,bl,Ve,al,Xl,sl,jl,nl,zl,Wl,Il,Yl,Jl,kl,ol,Kl,cl,Zl,st,gl=t[4],re=[];for(let E=0;E<gl.length;E+=1)re[E]=Xt(qt(t,gl,E));function Yt(E){t[25](E)}let nt={min:1,max:40};t[5].defaultGemLevel!==void 0&&(nt.value=t[5].defaultGemLevel),$e=new wl({props:nt}),fl.push(()=>pl($e,"value",Yt));function Jt(E){t[26](E)}let ot={min:0,max:30};t[5].defaultGemQuality!==void 0&&(ot.value=t[5].defaultGemQuality),el=new wl({props:ot}),fl.push(()=>pl(el,"value",Jt));let Z=t[6]&&jt(t);return{c(){c=n("div"),i=n("div"),l=n("div"),f=n("div"),I=n("span"),M=b("Skill set:"),Y=v(),D=n("div"),w=n("select"),C=n("option"),Q=b("Default"),j=v(),H=n("button"),q=b("Manage..."),z=v(),T=n("div"),h=n("span"),U=b("Socket Groups:"),me=v(),V=n("button"),ce=b("New"),K=v(),p=n("button"),se=b("Delete All"),O=v(),x=n("button"),Fe=b("Delete"),Me=v(),J=n("select");for(let E=0;E<re.length;E+=1)re[E].c();Ie=v(),W=n("p"),Ce=b("Usage Tips:"),u=n("br"),L=b(`
          - You can copy/paste socket groups using Ctrl+C and Ctrl+V.`),fe=n("br"),ee=b(`
          - Ctrl + Click to enable/disable socket groups.`),de=n("br"),he=b(`
          - Ctrl + Right click to include/exclude in FullDPS calculations.`),Ue=n("br"),ze=b(`
          - Right click to set as the Main skill group.`),We=n("br"),Re=v(),ke=n("fieldset"),a=n("legend"),_=b("Gem Options"),le=v(),g=n("div"),pe=n("span"),qe=b("Sort gems by DPS:"),je=v(),ge=n("div"),Pe=n("input"),Ye=v(),ne=n("div"),G=n("select"),we=n("option"),P=b("Full DPS"),N=n("option"),S=b("Combined DPS"),y=n("option"),Se=b("Total DPS"),oe=n("option"),Ae=b("Average Hit"),ie=n("option"),ye=b("DoT DPS"),te=n("option"),R=b("Bleed DPS"),ue=n("option"),F=b("Ignite DPS"),Ge=n("option"),Je=b("Poison DPS"),Ke=v(),He=n("span"),Ze=b("Match gems character level:"),Be=v(),Oe=n("div"),ae=n("input"),De=v(),xe=n("span"),ul=b("Default gem level:"),rl=v(),_l($e.$$.fragment),Ql=v(),Dl=n("span"),Fl=b("Default gem quality:"),Ml=v(),_l(el.$$.fragment),Rl=v(),El=n("span"),ql=b("Show support gems:"),Hl=v(),Sl=n("div"),bl=n("div"),Ve=n("select"),al=n("option"),Xl=b("All"),sl=n("option"),jl=b("Non-Awakened"),nl=n("option"),zl=b("Awakened"),Wl=v(),Il=n("span"),Yl=b("Show gem quality variants:"),Jl=v(),kl=n("div"),ol=n("input"),Kl=v(),Z&&Z.c(),this.h()},l(E){c=o(E,"DIV",{class:!0});var B=r(c);i=o(B,"DIV",{class:!0});var Qe=r(i);l=o(Qe,"DIV",{class:!0});var Te=r(l);f=o(Te,"DIV",{class:!0});var $=r(f);I=o($,"SPAN",{});var Pl=r(I);M=k(Pl,"Skill set:"),Pl.forEach(s),Y=d($),D=o($,"DIV",{class:!0});var it=r(D);w=o(it,"SELECT",{class:!0});var ut=r(w);C=o(ut,"OPTION",{});var rt=r(C);Q=k(rt,"Default"),rt.forEach(s),ut.forEach(s),it.forEach(s),j=d($),H=o($,"BUTTON",{class:!0});var ct=r(H);q=k(ct,"Manage..."),ct.forEach(s),$.forEach(s),z=d(Te),T=o(Te,"DIV",{class:!0});var il=r(T);h=o(il,"SPAN",{class:!0});var ft=r(h);U=k(ft,"Socket Groups:"),ft.forEach(s),me=d(il),V=o(il,"BUTTON",{class:!0});var pt=r(V);ce=k(pt,"New"),pt.forEach(s),K=d(il),p=o(il,"BUTTON",{class:!0});var _t=r(p);se=k(_t,"Delete All"),_t.forEach(s),O=d(il),x=o(il,"BUTTON",{class:!0});var mt=r(x);Fe=k(mt,"Delete"),mt.forEach(s),il.forEach(s),Me=d(Te),J=o(Te,"SELECT",{class:!0,size:!0});var vt=r(J);for(let Bl=0;Bl<re.length;Bl+=1)re[Bl].l(vt);vt.forEach(s),Ie=d(Te),W=o(Te,"P",{class:!0});var Xe=r(W);Ce=k(Xe,"Usage Tips:"),u=o(Xe,"BR",{}),L=k(Xe,`
          - You can copy/paste socket groups using Ctrl+C and Ctrl+V.`),fe=o(Xe,"BR",{}),ee=k(Xe,`
          - Ctrl + Click to enable/disable socket groups.`),de=o(Xe,"BR",{}),he=k(Xe,`
          - Ctrl + Right click to include/exclude in FullDPS calculations.`),Ue=o(Xe,"BR",{}),ze=k(Xe,`
          - Right click to set as the Main skill group.`),We=o(Xe,"BR",{}),Xe.forEach(s),Re=d(Te),ke=o(Te,"FIELDSET",{class:!0});var yl=r(ke);a=o(yl,"LEGEND",{class:!0});var dt=r(a);_=k(dt,"Gem Options"),dt.forEach(s),le=d(yl),g=o(yl,"DIV",{class:!0});var X=r(g);pe=o(X,"SPAN",{});var ht=r(pe);qe=k(ht,"Sort gems by DPS:"),ht.forEach(s),je=d(X),ge=o(X,"DIV",{class:!0});var Tl=r(ge);Pe=o(Tl,"INPUT",{type:!0,class:!0}),Ye=d(Tl),ne=o(Tl,"DIV",{class:!0});var St=r(ne);G=o(St,"SELECT",{class:!0});var ll=r(G);we=o(ll,"OPTION",{});var bt=r(we);P=k(bt,"Full DPS"),bt.forEach(s),N=o(ll,"OPTION",{});var kt=r(N);S=k(kt,"Combined DPS"),kt.forEach(s),y=o(ll,"OPTION",{});var gt=r(y);Se=k(gt,"Total DPS"),gt.forEach(s),oe=o(ll,"OPTION",{});var Gt=r(oe);Ae=k(Gt,"Average Hit"),Gt.forEach(s),ie=o(ll,"OPTION",{});var Dt=r(ie);ye=k(Dt,"DoT DPS"),Dt.forEach(s),te=o(ll,"OPTION",{});var Et=r(te);R=k(Et,"Bleed DPS"),Et.forEach(s),ue=o(ll,"OPTION",{});var It=r(ue);F=k(It,"Ignite DPS"),It.forEach(s),Ge=o(ll,"OPTION",{});var Pt=r(Ge);Je=k(Pt,"Poison DPS"),Pt.forEach(s),ll.forEach(s),St.forEach(s),Tl.forEach(s),Ke=d(X),He=o(X,"SPAN",{});var wt=r(He);Ze=k(wt,"Match gems character level:"),wt.forEach(s),Be=d(X),Oe=o(X,"DIV",{class:!0});var yt=r(Oe);ae=o(yt,"INPUT",{type:!0,class:!0}),yt.forEach(s),De=d(X),xe=o(X,"SPAN",{});var Tt=r(xe);ul=k(Tt,"Default gem level:"),Tt.forEach(s),rl=d(X),ml($e.$$.fragment,X),Ql=d(X),Dl=o(X,"SPAN",{});var Lt=r(Dl);Fl=k(Lt,"Default gem quality:"),Lt.forEach(s),Ml=d(X),ml(el.$$.fragment,X),Rl=d(X),El=o(X,"SPAN",{});var Nt=r(El);ql=k(Nt,"Show support gems:"),Nt.forEach(s),Hl=d(X),Sl=o(X,"DIV",{class:!0});var Ct=r(Sl);bl=o(Ct,"DIV",{class:!0});var At=r(bl);Ve=o(At,"SELECT",{class:!0});var Ll=r(Ve);al=o(Ll,"OPTION",{});var Ot=r(al);Xl=k(Ot,"All"),Ot.forEach(s),sl=o(Ll,"OPTION",{});var Vt=r(sl);jl=k(Vt,"Non-Awakened"),Vt.forEach(s),nl=o(Ll,"OPTION",{});var Qt=r(nl);zl=k(Qt,"Awakened"),Qt.forEach(s),Ll.forEach(s),At.forEach(s),Ct.forEach(s),Wl=d(X),Il=o(X,"SPAN",{});var Ft=r(Il);Yl=k(Ft,"Show gem quality variants:"),Ft.forEach(s),Jl=d(X),kl=o(X,"DIV",{class:!0});var Mt=r(kl);ol=o(Mt,"INPUT",{type:!0,class:!0}),Mt.forEach(s),X.forEach(s),yl.forEach(s),Te.forEach(s),Kl=d(Qe),Z&&Z.l(Qe),Qe.forEach(s),B.forEach(s),this.h()},h(){C.__value="Default",C.value=C.__value,m(w,"class","input"),w.disabled=A=t[3]===1,m(D,"class","container select-wrapper flex-1"),m(H,"class","container"),m(f,"class","flex flex-row items-center gap-2"),m(h,"class","flex-1"),m(V,"class","container"),m(p,"class","container"),p.disabled=Ne=t[4].length<=1,m(x,"class","container"),x.disabled=ve=t[0]<0||t[4].length<=1,m(T,"class","flex flex-row items-center gap-2"),m(J,"class","bg-black border w-full border-neutral-400 flex-1 select-many max-h-[19em]"),m(J,"size","18"),t[0]===void 0&&xl(()=>t[21].call(J)),m(W,"class","text-sm"),m(a,"class","container"),m(Pe,"type","checkbox"),m(Pe,"class","text-2xl"),we.__value="FullDPS",we.value=we.__value,N.__value="CombinedDPS",N.value=N.__value,y.__value="TotalDPS",y.value=y.__value,oe.__value="AverageDamage",oe.value=oe.__value,ie.__value="TotalDot",ie.value=ie.__value,te.__value="BleedDPS",te.value=te.__value,ue.__value="IgniteDPS",ue.value=ue.__value,Ge.__value="TotalPoisonDPS",Ge.value=Ge.__value,m(G,"class","input"),t[5].sortGemsByDPSField===void 0&&xl(()=>t[23].call(G)),m(ne,"class","container select-wrapper"),m(ge,"class","flex flex-row gap-2"),m(ae,"type","checkbox"),m(ae,"class","text-2xl"),m(Oe,"class","flex flex-row gap-2"),al.__value="ALL",al.value=al.__value,sl.__value="NORMAL",sl.value=sl.__value,nl.__value="AWAKENED",nl.value=nl.__value,m(Ve,"class","input"),t[5].showSupportGemTypes===void 0&&xl(()=>t[27].call(Ve)),m(bl,"class","container select-wrapper"),m(Sl,"class","flex flex-row gap-2"),m(ol,"type","checkbox"),m(ol,"class","text-2xl"),m(kl,"class","flex flex-row gap-2"),m(g,"class","side-by-side-max-content"),m(ke,"class","border border-white bg-neutral-900 p-2"),m(l,"class","flex flex-col w-[28em] gap-2"),m(i,"class","flex flex-row gap-4 flex-wrap"),m(c,"class","p-2 px-4 w-full h-full overflow-y-auto")},m(E,B){Ee(E,c,B),e(c,i),e(i,l),e(l,f),e(f,I),e(I,M),e(f,Y),e(f,D),e(D,w),e(w,C),e(C,Q),e(f,j),e(f,H),e(H,q),e(l,z),e(l,T),e(T,h),e(h,U),e(T,me),e(T,V),e(V,ce),e(T,K),e(T,p),e(p,se),e(T,O),e(T,x),e(x,Fe),e(l,Me),e(l,J);for(let Qe=0;Qe<re.length;Qe+=1)re[Qe]&&re[Qe].m(J,null);Gl(J,t[0],!0),e(l,Ie),e(l,W),e(W,Ce),e(W,u),e(W,L),e(W,fe),e(W,ee),e(W,de),e(W,he),e(W,Ue),e(W,ze),e(W,We),e(l,Re),e(l,ke),e(ke,a),e(a,_),e(ke,le),e(ke,g),e(g,pe),e(pe,qe),e(g,je),e(g,ge),e(ge,Pe),Pe.checked=t[5].sortGemsByDPS,e(ge,Ye),e(ge,ne),e(ne,G),e(G,we),e(we,P),e(G,N),e(N,S),e(G,y),e(y,Se),e(G,oe),e(oe,Ae),e(G,ie),e(ie,ye),e(G,te),e(te,R),e(G,ue),e(ue,F),e(G,Ge),e(Ge,Je),Gl(G,t[5].sortGemsByDPSField,!0),e(g,Ke),e(g,He),e(He,Ze),e(g,Be),e(g,Oe),e(Oe,ae),ae.checked=t[5].matchGemLevelToCharacterLevel,e(g,De),e(g,xe),e(xe,ul),e(g,rl),vl($e,g,null),e(g,Ql),e(g,Dl),e(Dl,Fl),e(g,Ml),vl(el,g,null),e(g,Rl),e(g,El),e(El,ql),e(g,Hl),e(g,Sl),e(Sl,bl),e(bl,Ve),e(Ve,al),e(al,Xl),e(Ve,sl),e(sl,jl),e(Ve,nl),e(nl,zl),Gl(Ve,t[5].showSupportGemTypes,!0),e(g,Wl),e(g,Il),e(Il,Yl),e(g,Jl),e(g,kl),e(kl,ol),ol.checked=t[5].showAltQualityGems,e(i,Kl),Z&&Z.m(i,null),cl=!0,Zl||(st=[be(V,"click",t[15]),be(p,"click",t[17]),be(x,"click",t[16]),be(J,"change",t[21]),be(Pe,"change",t[22]),be(G,"change",t[23]),be(ae,"change",t[24]),be(Ve,"change",t[27]),be(ol,"change",t[28])],Zl=!0)},p(E,B){if((!cl||B[0]&8&&A!==(A=E[3]===1))&&(w.disabled=A),(!cl||B[0]&16&&Ne!==(Ne=E[4].length<=1))&&(p.disabled=Ne),(!cl||B[0]&17&&ve!==(ve=E[0]<0||E[4].length<=1))&&(x.disabled=ve),B[0]&2192){gl=E[4];let $;for($=0;$<gl.length;$+=1){const Pl=qt(E,gl,$);re[$]?re[$].p(Pl,B):(re[$]=Xt(Pl),re[$].c(),re[$].m(J,null))}for(;$<re.length;$+=1)re[$].d(1);re.length=gl.length}B[0]&1&&Gl(J,E[0]),B[0]&32&&(Pe.checked=E[5].sortGemsByDPS),B[0]&32&&Gl(G,E[5].sortGemsByDPSField),B[0]&32&&(ae.checked=E[5].matchGemLevelToCharacterLevel);const Qe={};!Vl&&B[0]&32&&(Vl=!0,Qe.value=E[5].defaultGemLevel,dl(()=>Vl=!1)),$e.$set(Qe);const Te={};!Ul&&B[0]&32&&(Ul=!0,Te.value=E[5].defaultGemQuality,dl(()=>Ul=!1)),el.$set(Te),B[0]&32&&Gl(Ve,E[5].showSupportGemTypes),B[0]&32&&(ol.checked=E[5].showAltQualityGems),E[6]?Z?(Z.p(E,B),B[0]&64&&_e(Z,1)):(Z=jt(E),Z.c(),_e(Z,1),Z.m(i,null)):Z&&(tt(),Le(Z,1,1,()=>{Z=null}),lt())},i(E){cl||(_e($e.$$.fragment,E),_e(el.$$.fragment,E),_e(Z),cl=!0)},o(E){Le($e.$$.fragment,E),Le(el.$$.fragment,E),Le(Z),cl=!1},d(E){E&&s(c),Wt(re,E),hl($e),hl(el),Z&&Z.d(),Zl=!1,at(st)}}}function Xt(t){let c,i=t[47].label+"",l,f,I=t[47].enabled?"":" (Disabled)",M,Y,D=t[7]===t[46]?" (Active)":"",w,C,Q=t[47].fullDPS?" (FullDPS)":"",A,j,H,q;function z(...T){return t[20](t[46],...T)}return{c(){c=n("option"),l=b(i),f=v(),M=b(I),Y=v(),w=b(D),C=v(),A=b(Q),j=v(),this.h()},l(T){c=o(T,"OPTION",{});var h=r(c);l=k(h,i),f=d(h),M=k(h,I),Y=d(h),w=k(h,D),C=d(h),A=k(h,Q),j=d(h),h.forEach(s),this.h()},h(){c.__value=t[46],c.value=c.__value},m(T,h){Ee(T,c,h),e(c,l),e(c,f),e(c,M),e(c,Y),e(c,w),e(c,C),e(c,A),e(c,j),H||(q=be(c,"contextmenu",z),H=!0)},p(T,h){t=T,h[0]&16&&i!==(i=t[47].label+"")&&Cl(l,i),h[0]&16&&I!==(I=t[47].enabled?"":" (Disabled)")&&Cl(M,I),h[0]&128&&D!==(D=t[7]===t[46]?" (Active)":"")&&Cl(w,D),h[0]&16&&Q!==(Q=t[47].fullDPS?" (FullDPS)":"")&&Cl(A,Q)},d(T){T&&s(c),H=!1,q()}}}function jt(t){let c,i,l,f,I,M,Y,D,w,C,Q,A,j,H,q,z,T,h,U,me,V,ce,K,p,se,Ne,O,x,Fe,ve,Me,J,Ie,W,Ce,u,L,fe,ee,de,he,Ue,ze,We,Re,ke,a,_,le,g,pe,qe,je,ge;function Pe(P){t[29](P)}let Ye={prefix:"Label:",fullWidth:!0};t[8]!==void 0&&(Ye.value=t[8]),i=new $t({props:Ye}),fl.push(()=>pl(i,"value",Pe));let ne=t[6].Gems,G=[];for(let P=0;P<ne.length;P+=1)G[P]=zt(Rt(t,ne,P));const we=P=>Le(G[P],1,1,()=>{G[P]=null});return{c(){c=n("div"),_l(i.$$.fragment),f=v(),I=n("div"),M=n("div"),Y=n("span"),D=b("Socketed in:"),w=v(),C=n("div"),Q=n("select"),A=n("option"),j=b("None"),H=v(),q=n("div"),z=n("span"),T=b("Enabled:"),h=v(),U=n("input"),me=v(),V=n("div"),ce=n("span"),K=b("Include in Full DPS:"),p=v(),se=n("input"),Ne=v(),O=n("div"),x=n("div"),Fe=v(),ve=n("div"),Me=b("Gem Name"),J=v(),Ie=n("div"),W=b("Level"),Ce=v(),u=n("div"),L=b("Variant"),fe=v(),ee=n("div"),de=b("Quality"),he=v(),Ue=n("div"),ze=b("Enabled"),We=v(),Re=n("div"),ke=b("Count"),a=v();for(let P=0;P<G.length;P+=1)G[P].c();_=v(),le=n("div"),g=n("button"),pe=b("Add Skill Gem"),this.h()},l(P){c=o(P,"DIV",{class:!0});var N=r(c);ml(i.$$.fragment,N),f=d(N),I=o(N,"DIV",{class:!0});var S=r(I);M=o(S,"DIV",{class:!0});var y=r(M);Y=o(y,"SPAN",{});var Se=r(Y);D=k(Se,"Socketed in:"),Se.forEach(s),w=d(y),C=o(y,"DIV",{class:!0});var oe=r(C);Q=o(oe,"SELECT",{class:!0});var Ae=r(Q);A=o(Ae,"OPTION",{});var ie=r(A);j=k(ie,"None"),ie.forEach(s),Ae.forEach(s),oe.forEach(s),y.forEach(s),H=d(S),q=o(S,"DIV",{class:!0});var ye=r(q);z=o(ye,"SPAN",{});var te=r(z);T=k(te,"Enabled:"),te.forEach(s),h=d(ye),U=o(ye,"INPUT",{type:!0,class:!0}),ye.forEach(s),me=d(S),V=o(S,"DIV",{class:!0});var R=r(V);ce=o(R,"SPAN",{});var ue=r(ce);K=k(ue,"Include in Full DPS:"),ue.forEach(s),p=d(R),se=o(R,"INPUT",{type:!0,class:!0}),R.forEach(s),S.forEach(s),Ne=d(N),O=o(N,"DIV",{class:!0});var F=r(O);x=o(F,"DIV",{}),r(x).forEach(s),Fe=d(F),ve=o(F,"DIV",{});var Ge=r(ve);Me=k(Ge,"Gem Name"),Ge.forEach(s),J=d(F),Ie=o(F,"DIV",{});var Je=r(Ie);W=k(Je,"Level"),Je.forEach(s),Ce=d(F),u=o(F,"DIV",{});var Ke=r(u);L=k(Ke,"Variant"),Ke.forEach(s),fe=d(F),ee=o(F,"DIV",{});var He=r(ee);de=k(He,"Quality"),He.forEach(s),he=d(F),Ue=o(F,"DIV",{});var Ze=r(Ue);ze=k(Ze,"Enabled"),Ze.forEach(s),We=d(F),Re=o(F,"DIV",{});var Be=r(Re);ke=k(Be,"Count"),Be.forEach(s),a=d(F);for(let De=0;De<G.length;De+=1)G[De].l(F);_=d(F),le=o(F,"DIV",{class:!0});var Oe=r(le);g=o(Oe,"BUTTON",{class:!0});var ae=r(g);pe=k(ae,"Add Skill Gem"),ae.forEach(s),Oe.forEach(s),F.forEach(s),N.forEach(s),this.h()},h(){A.__value="None",A.value=A.__value,m(Q,"class","input"),m(C,"class","container select-wrapper"),m(M,"class","flex flex-row items-center gap-2"),m(U,"type","checkbox"),m(U,"class","text-2xl"),m(q,"class","flex flex-row items-center gap-2"),m(se,"type","checkbox"),m(se,"class","text-2xl"),m(V,"class","flex flex-row items-center gap-2"),m(I,"class","flex flex-row w-full justify-between"),m(g,"class","container font-bold min-w-full"),m(le,"class","col-span-7 w-full mt-2"),m(O,"class","grid gem-grid gap-1 w-full svelte-10n7688"),m(c,"class","flex flex-col min-w-[30em] gap-2")},m(P,N){Ee(P,c,N),vl(i,c,null),e(c,f),e(c,I),e(I,M),e(M,Y),e(Y,D),e(M,w),e(M,C),e(C,Q),e(Q,A),e(A,j),e(I,H),e(I,q),e(q,z),e(z,T),e(q,h),e(q,U),U.checked=t[6].Enabled,e(I,me),e(I,V),e(V,ce),e(ce,K),e(V,p),e(V,se),se.checked=t[6].IncludeInFullDPS,e(c,Ne),e(c,O),e(O,x),e(O,Fe),e(O,ve),e(ve,Me),e(O,J),e(O,Ie),e(Ie,W),e(O,Ce),e(O,u),e(u,L),e(O,fe),e(O,ee),e(ee,de),e(O,he),e(O,Ue),e(Ue,ze),e(O,We),e(O,Re),e(Re,ke),e(O,a);for(let S=0;S<G.length;S+=1)G[S]&&G[S].m(O,null);e(O,_),e(O,le),e(le,g),e(g,pe),qe=!0,je||(ge=[be(U,"change",t[30]),be(se,"change",t[31]),be(g,"click",t[38])],je=!0)},p(P,N){const S={};if(!l&&N[0]&256&&(l=!0,S.value=P[8],dl(()=>l=!1)),i.$set(S),N[0]&64&&(U.checked=P[6].Enabled),N[0]&64&&(se.checked=P[6].IncludeInFullDPS),N[0]&8258){ne=P[6].Gems;let y;for(y=0;y<ne.length;y+=1){const Se=Rt(P,ne,y);G[y]?(G[y].p(Se,N),_e(G[y],1)):(G[y]=zt(Se),G[y].c(),_e(G[y],1),G[y].m(O,_))}for(tt(),y=ne.length;y<G.length;y+=1)we(y);lt()}},i(P){if(!qe){_e(i.$$.fragment,P);for(let N=0;N<ne.length;N+=1)_e(G[N]);qe=!0}},o(P){Le(i.$$.fragment,P),G=G.filter(Boolean);for(let N=0;N<G.length;N+=1)Le(G[N]);qe=!1},d(P){P&&s(c),hl(i),Wt(G,P),je=!1,at(ge)}}}function zt(t){let c,i,l,f,I,M,Y,D,w,C,Q,A,j,H,q,z,T,h,U,me,V,ce,K,p,se;function Ne(){return t[32](t[46])}function O(u){t[33](u,t[44])}let x={items:t[1],isClearable:!1,placeholder:"",showIndicator:!0,Item:ta,Selection:aa,listOffset:0};t[44].GemListValue!==void 0&&(x.value=t[44].GemListValue),I=new sa({props:x}),fl.push(()=>pl(I,"value",O));function Fe(u){t[34](u,t[44])}let ve={min:1,max:t[44].GemListValue.data.MaxLevel};t[44].Level!==void 0&&(ve.value=t[44].Level),D=new wl({props:ve}),fl.push(()=>pl(D,"value",Fe));function Me(u){t[35](u,t[44])}let J={min:0,max:30};t[44].Quality!==void 0&&(J.value=t[44].Quality),z=new wl({props:J}),fl.push(()=>pl(z,"value",Me));function Ie(){t[36].call(U,t[45],t[46])}function W(u){t[37](u,t[44])}let Ce={min:1,max:99};return t[44].Count!==void 0&&(Ce.value=t[44].Count),V=new wl({props:Ce}),fl.push(()=>pl(V,"value",W)),{c(){c=n("button"),i=b("X"),l=v(),f=n("div"),_l(I.$$.fragment),Y=v(),_l(D.$$.fragment),C=v(),Q=n("div"),A=n("select"),j=n("option"),H=b("Default"),q=v(),_l(z.$$.fragment),h=v(),U=n("input"),me=v(),_l(V.$$.fragment),this.h()},l(u){c=o(u,"BUTTON",{class:!0});var L=r(c);i=k(L,"X"),L.forEach(s),l=d(u),f=o(u,"DIV",{class:!0});var fe=r(f);ml(I.$$.fragment,fe),fe.forEach(s),Y=d(u),ml(D.$$.fragment,u),C=d(u),Q=o(u,"DIV",{class:!0});var ee=r(Q);A=o(ee,"SELECT",{class:!0});var de=r(A);j=o(de,"OPTION",{});var he=r(j);H=k(he,"Default"),he.forEach(s),de.forEach(s),ee.forEach(s),q=d(u),ml(z.$$.fragment,u),h=d(u),U=o(u,"INPUT",{type:!0,class:!0}),me=d(u),ml(V.$$.fragment,u),this.h()},h(){m(c,"class","container font-bold"),m(f,"class","min-w-full themed"),j.__value="Default",j.value=j.__value,m(A,"class","input"),m(Q,"class","container select-wrapper"),m(U,"type","checkbox"),m(U,"class","text-2xl")},m(u,L){Ee(u,c,L),e(c,i),Ee(u,l,L),Ee(u,f,L),vl(I,f,null),Ee(u,Y,L),vl(D,u,L),Ee(u,C,L),Ee(u,Q,L),e(Q,A),e(A,j),e(j,H),Ee(u,q,L),vl(z,u,L),Ee(u,h,L),Ee(u,U,L),U.checked=t[44].Enabled,Ee(u,me,L),vl(V,u,L),K=!0,p||(se=[be(c,"click",Ne),be(U,"change",Ie)],p=!0)},p(u,L){t=u;const fe={};L[0]&2&&(fe.items=t[1]),!M&&L[0]&64&&(M=!0,fe.value=t[44].GemListValue,dl(()=>M=!1)),I.$set(fe);const ee={};L[0]&64&&(ee.max=t[44].GemListValue.data.MaxLevel),!w&&L[0]&64&&(w=!0,ee.value=t[44].Level,dl(()=>w=!1)),D.$set(ee);const de={};!T&&L[0]&64&&(T=!0,de.value=t[44].Quality,dl(()=>T=!1)),z.$set(de),L[0]&64&&(U.checked=t[44].Enabled);const he={};!ce&&L[0]&64&&(ce=!0,he.value=t[44].Count,dl(()=>ce=!1)),V.$set(he)},i(u){K||(_e(I.$$.fragment,u),_e(D.$$.fragment,u),_e(z.$$.fragment,u),_e(V.$$.fragment,u),K=!0)},o(u){Le(I.$$.fragment,u),Le(D.$$.fragment,u),Le(z.$$.fragment,u),Le(V.$$.fragment,u),K=!1},d(u){u&&s(c),u&&s(l),u&&s(f),hl(I),u&&s(Y),hl(D,u),u&&s(C),u&&s(Q),u&&s(q),hl(z,u),u&&s(h),u&&s(U),u&&s(me),hl(V,u),p=!1,at(se)}}}function oa(t){let c,i,l=t[2]&&Ht(t);return{c(){l&&l.c(),c=Ut()},l(f){l&&l.l(f),c=Ut()},m(f,I){l&&l.m(f,I),Ee(f,c,I),i=!0},p(f,I){f[2]?l?(l.p(f,I),I[0]&4&&_e(l,1)):(l=Ht(f),l.c(),_e(l,1),l.m(c.parentNode,c)):l&&(tt(),Le(l,1,1,()=>{l=null}),lt())},i(f){i||(_e(l),i=!0)},o(f){Le(l),i=!1},d(f){l&&l.d(f),f&&s(c)}}}function ia(t,c,i){let l,f,I,M;Nl(t,tl,a=>i(2,l=a));let Y=1,D=1,w=0;const C=et(-1);Nl(t,C,a=>i(7,I=a)),C.subscribe(a=>{var _;a>=0&&((_=ea)==null||_.SetMainSocketGroup(a+1)),tl.set(l)});let Q=!0;const A=et("");Nl(t,A,a=>i(8,M=a)),A.subscribe(a=>{Q||!l||Al(tl,l.Skills.SkillSets[D-1].Skills[w].Label=a,l)});const j=(a,_)=>{_.preventDefault(),_.stopPropagation(),C.set(a)};let H=[];const q={},z={STR:Ol.STRENGTH,DEX:Ol.DEXTERITY,INT:Ol.INTELLIGENCE,NONE:Ol.NORMAL};xt(()=>{na().then(a=>{i(1,H=a.map(_=>({label:"^"+z[_.GemType]+_.Base.Name,value:_.ID,data:_}))),a.forEach(_=>{i(19,q[_.ID]=_,q)})})});let T=!0;const h=et();Nl(t,h,a=>i(6,f=a));let U="";h.subscribe(async a=>{var le;if(T||!a||!l||!l.Skills||!l.Skills.SkillSets||!l.Skills.SkillSets[D-1]||!l.Skills.SkillSets[D-1].Skills||!l.Skills.SkillSets[D-1].Skills[w])return;const _=JSON.stringify(a);U!==_&&(U=_,Al(tl,l.Skills.SkillSets[D-1].Skills[w].Slot=a.Slot,l),Al(tl,l.Skills.SkillSets[D-1].Skills[w].Enabled=a.Enabled,l),Al(tl,l.Skills.SkillSets[D-1].Skills[w].IncludeInFullDPS=a.IncludeInFullDPS,l),a.Gems&&await((le=l==null?void 0:l.SetSocketGroupGems)==null?void 0:le.call(l,D-1,w,a.Gems.map(g=>({...g,GemID:g.GemListValue.value})))),la("currentGemGroup"))});let me=[];const V=a=>{var _;(_=f==null?void 0:f.Gems)==null||_.splice(a,1),h.set(f)},ce=()=>{var _;const a=H[0];(_=f==null?void 0:f.Gems)==null||_.push({GemListValue:a,Quality:0,SkillPart:1,EnableGlobal2:!0,SkillPartCalcs:1,QualityID:"Default",GemID:"Metadata/Items/Gems/SkillGemFireball",Enabled:!0,Count:1,EnableGlobal1:!0,NameSpec:a.value,Level:1,SkillID:a.value,SkillMinionItemSet:1,SkillMinion:"SummonedPhantasm"}),h.set(f)},K=(a,_,le)=>{const g="_"+_;Object.defineProperty(a,_,{get(){return this[g]},set(pe){this[g]!==pe&&l&&(le(pe),this[g]=pe)}})},p={_sortGemsByDPS:!0,_sortGemsByDPSField:"FullDPS",_matchGemLevelToCharacterLevel:!1,_defaultGemLevel:20,_defaultGemQuality:0,_showSupportGemTypes:"ALL",_showAltQualityGems:!1};K(p,"sortGemsByDPS",a=>l==null?void 0:l.SetSortGemsByDPS(a.toString()==="true")),K(p,"sortGemsByDPSField",a=>l==null?void 0:l.SetSortGemsByDPSField(a)),K(p,"matchGemLevelToCharacterLevel",a=>l==null?void 0:l.SetMatchGemLevelToCharacterLevel(a.toString()==="true")),K(p,"defaultGemLevel",a=>l==null?void 0:l.SetDefaultGemLevel(parseInt(a.toString()))),K(p,"defaultGemQuality",a=>l==null?void 0:l.SetDefaultGemQuality(parseInt(a.toString()))),K(p,"showSupportGemTypes",a=>l==null?void 0:l.SetShowSupportGemTypes(a)),K(p,"showAltQualityGems",a=>l==null?void 0:l.SetShowAltQualityGems(a.toString()==="true"));const se=()=>{l==null||l.AddNewSocketGroup(),tl.set(l)},Ne=()=>{l==null||l.DeleteSocketGroup(w),i(0,w=0),tl.set(l)},O=()=>{l==null||l.DeleteAllSocketGroups(),l==null||l.AddNewSocketGroup(),i(0,w=0),C.set(0),tl.set(l)},x=(a,_)=>j(a,_);function Fe(){w=$l(this),i(0,w)}function ve(){p.sortGemsByDPS=this.checked,i(5,p),i(2,l)}function Me(){p.sortGemsByDPSField=$l(this),i(5,p),i(2,l)}function J(){p.matchGemLevelToCharacterLevel=this.checked,i(5,p),i(2,l)}function Ie(a){t.$$.not_equal(p.defaultGemLevel,a)&&(p.defaultGemLevel=a,i(5,p),i(2,l))}function W(a){t.$$.not_equal(p.defaultGemQuality,a)&&(p.defaultGemQuality=a,i(5,p),i(2,l))}function Ce(){p.showSupportGemTypes=$l(this),i(5,p),i(2,l)}function u(){p.showAltQualityGems=this.checked,i(5,p),i(2,l)}function L(a){M=a,A.set(M)}function fe(){f.Enabled=this.checked,h.set(f)}function ee(){f.IncludeInFullDPS=this.checked,h.set(f)}const de=a=>V(a);function he(a,_){t.$$.not_equal(_.GemListValue,a)&&(_.GemListValue=a,h.set(f))}function Ue(a,_){t.$$.not_equal(_.Level,a)&&(_.Level=a,h.set(f))}function ze(a,_){t.$$.not_equal(_.Quality,a)&&(_.Quality=a,h.set(f))}function We(a,_){a[_].Enabled=this.checked,h.set(f)}function Re(a,_){t.$$.not_equal(_.Count,a)&&(_.Count=a,h.set(f))}const ke=()=>ce();return t.$$.update=()=>{var a,_,le,g,pe,qe,je,ge,Pe,Ye,ne,G,we,P,N;t.$$.dirty[0]&4&&((_=(a=l==null?void 0:l.Skills)==null?void 0:a.SkillSets)==null||_.then(S=>i(3,Y=(S==null?void 0:S.length)||0))),t.$$.dirty[0]&4&&((g=(le=l==null?void 0:l.Skills)==null?void 0:le.ActiveSkillSet)==null||g.then(S=>i(18,D=S))),t.$$.dirty[0]&4&&((qe=(pe=l==null?void 0:l.Build)==null?void 0:pe.MainSocketGroup)==null||qe.then(S=>C.set(S-1))),t.$$.dirty[0]&262149&&((Ye=(Pe=(ge=(je=l==null?void 0:l.Skills)==null?void 0:je.SkillSets)==null?void 0:ge[D-1].Skills)==null?void 0:Pe[w])==null||Ye.Label.then(S=>{Q=!0,A.set(S),Q=!1})),t.$$.dirty[0]&262151&&H.length>0&&new Promise(async()=>{var Se,oe,Ae,ie;const S=(ie=(Ae=(oe=(Se=l==null?void 0:l.Skills)==null?void 0:Se.SkillSets)==null?void 0:oe[D-1])==null?void 0:Ae.Skills)==null?void 0:ie[w];if(!S){h.set(void 0);return}const y=[];if(S.Gems&&await S.Gems){const ye=await S.Gems.length;for(let te=0;te<ye;te++){const R=S.Gems[te],ue=await R.GemID;y.push({GemListValue:H.find(F=>F.value===ue),GemID:ue,Quality:await R.Quality,Enabled:await R.Enabled,EnableGlobal1:await R.EnableGlobal1,EnableGlobal2:await R.EnableGlobal2,QualityID:await R.QualityID,Count:await R.Count,Level:await R.Level,SkillPart:await R.SkillPart,SkillPartCalcs:await R.SkillPartCalcs,NameSpec:await R.NameSpec,SkillID:await R.SkillID,SkillMinionItemSet:await R.SkillMinionItemSet,SkillMinion:await R.SkillMinion})}}T=!0,h.set({Gems:y,Enabled:await S.Enabled,IncludeInFullDPS:await S.IncludeInFullDPS,Slot:await S.Slot}),T=!1}),t.$$.dirty[0]&786436&&((P=(we=(G=(ne=l==null?void 0:l.Skills)==null?void 0:ne.SkillSets)==null?void 0:G[D-1])==null?void 0:we.Skills)==null||P.then(async S=>{var Se,oe,Ae,ie,ye,te,R,ue,F,Ge,Je,Ke,He,Ze,Be,Oe;const y=[];for(let ae=0;ae<S.length;ae++){let De=await((ie=(Ae=(oe=(Se=l==null?void 0:l.Skills)==null?void 0:Se.SkillSets)==null?void 0:oe[D-1])==null?void 0:Ae.Skills)==null?void 0:ie[ae].Label);if(De===""){const xe=(ue=(R=(te=(ye=l==null?void 0:l.Skills)==null?void 0:ye.SkillSets)==null?void 0:te[D-1])==null?void 0:R.Skills)==null?void 0:ue[ae].Gems;if(await xe)for(let ul=0;ul<await xe.length;ul++){const rl=q[await xe[ul].GemID];!rl||rl.Support||(De!==""&&(De+=", "),De+=rl.Base.Name)}else De="<No active skills>"}y.push({label:De,enabled:await((Ke=(Je=(Ge=(F=l==null?void 0:l.Skills)==null?void 0:F.SkillSets)==null?void 0:Ge[D-1])==null?void 0:Je.Skills)==null?void 0:Ke[ae].Enabled),fullDPS:await((Oe=(Be=(Ze=(He=l==null?void 0:l.Skills)==null?void 0:He.SkillSets)==null?void 0:Ze[D-1])==null?void 0:Be.Skills)==null?void 0:Oe[ae].IncludeInFullDPS)})}i(4,me=y)})),t.$$.dirty[0]&4&&((N=l==null?void 0:l.Skills)==null||N.then(S=>{i(5,p._sortGemsByDPS=S.SortGemsByDPS,p),i(5,p._sortGemsByDPSField=S.SortGemsByDPSField,p),i(5,p._matchGemLevelToCharacterLevel=S.MatchGemLevelToCharacterLevel,p),i(5,p._defaultGemLevel=S.DefaultGemLevel,p),i(5,p._defaultGemQuality=S.DefaultGemQuality,p),i(5,p._showSupportGemTypes=S.ShowSupportGemTypes,p),i(5,p._showAltQualityGems=S.ShowAltQualityGems,p)}))},[w,H,l,Y,me,p,f,I,M,C,A,j,h,V,ce,se,Ne,O,D,q,x,Fe,ve,Me,J,Ie,W,Ce,u,L,fe,ee,de,he,Ue,ze,We,Re,ke]}class da extends Kt{constructor(c){super(),Zt(this,c,ia,oa,Bt,{},null,[-1,-1])}}export{da as default};