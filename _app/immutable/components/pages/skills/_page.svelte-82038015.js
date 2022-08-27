import{S as Jt,i as Kt,s as Zt,e as Ut,b as Ee,f as _e,t as Le,d as lt,h as s,C as Nl,o as xt,Q as fl,V as pl,k as n,q as S,a as v,v as _l,l as o,m as r,r as b,c as m,w as dl,n as d,E as xl,B as e,F as Gl,x as vl,G as be,W as ml,g as tt,H as jt,y as hl,I as at,u as Cl,a8 as Al,D as $l}from"../../../chunks/index-2adee431.js";import{c as tl,N as wl,U as $t}from"../../../chunks/global-e286b813.js";import{I as ea}from"../../../chunks/Input-9142d553.js";import{w as et}from"../../../chunks/index-1da45bac.js";import{s as la}from"../../../chunks/worker-3adb5701.js";import{S as ta,a as aa,b as sa}from"../../../chunks/SelectSelection-e84bb7d9.js";import{G as na}from"../../../chunks/cache-4189339c.js";import{c as Ol}from"../../../chunks/colors-7fb82586.js";function Rt(t,c,i){const l=t.slice();return l[44]=c[i],l[45]=c,l[46]=i,l}function qt(t,c,i){const l=t.slice();return l[47]=c[i],l[46]=i,l}function Bt(t){let c,i,l,f,I,M,Y,G,w,C,Q,A,W,B,q,X,T,h,U,de,V,re,J,p,se,Ne,O,x,Qe,ve,Fe,z,Ie,j,Ce,u,L,ce,ee,me,he,Me,Xe,je,Ue,ke,a,_,le,k,fe,Re,We,ge,Pe,Ye,ne,D,we,P,N,g,y,Se,oe,Ae,ie,ye,te,R,ue,F,Ge,ze,Je,qe,Ke,Ze,Oe,ae,De,xe,ul,rl,$e,Vl,Ql,Dl,Fl,Ml,el,Ul,Rl,El,ql,Bl,Sl,bl,Ve,al,Hl,sl,Wl,nl,Xl,jl,Il,Yl,zl,kl,ol,Jl,cl,Kl,st,gl=t[4],pe=[];for(let E=0;E<gl.length;E+=1)pe[E]=Ht(qt(t,gl,E));function Yt(E){t[25](E)}let nt={min:1,max:40};t[5].defaultGemLevel!==void 0&&(nt.value=t[5].defaultGemLevel),$e=new wl({props:nt}),fl.push(()=>pl($e,"value",Yt));function zt(E){t[26](E)}let ot={min:0,max:30};t[5].defaultGemQuality!==void 0&&(ot.value=t[5].defaultGemQuality),el=new wl({props:ot}),fl.push(()=>pl(el,"value",zt));let K=t[6]&&Wt(t);return{c(){c=n("div"),i=n("div"),l=n("div"),f=n("div"),I=n("span"),M=S("Skill set:"),Y=v(),G=n("div"),w=n("select"),C=n("option"),Q=S("Default"),W=v(),B=n("button"),q=S("Manage..."),X=v(),T=n("div"),h=n("span"),U=S("Socket Groups:"),de=v(),V=n("button"),re=S("New"),J=v(),p=n("button"),se=S("Delete All"),O=v(),x=n("button"),Qe=S("Delete"),Fe=v(),z=n("select");for(let E=0;E<pe.length;E+=1)pe[E].c();Ie=v(),j=n("p"),Ce=S("Usage Tips:"),u=n("br"),L=S(`
          - You can copy/paste socket groups using Ctrl+C and Ctrl+V.`),ce=n("br"),ee=S(`
          - Ctrl + Click to enable/disable socket groups.`),me=n("br"),he=S(`
          - Ctrl + Right click to include/exclude in FullDPS calculations.`),Me=n("br"),Xe=S(`
          - Right click to set as the Main skill group.`),je=n("br"),Ue=v(),ke=n("fieldset"),a=n("legend"),_=S("Gem Options"),le=v(),k=n("div"),fe=n("span"),Re=S("Sort gems by DPS:"),We=v(),ge=n("div"),Pe=n("input"),Ye=v(),ne=n("div"),D=n("select"),we=n("option"),P=S("Full DPS"),N=n("option"),g=S("Combined DPS"),y=n("option"),Se=S("Total DPS"),oe=n("option"),Ae=S("Average Hit"),ie=n("option"),ye=S("DoT DPS"),te=n("option"),R=S("Bleed DPS"),ue=n("option"),F=S("Ignite DPS"),Ge=n("option"),ze=S("Poison DPS"),Je=v(),qe=n("span"),Ke=S("Match gems character level:"),Ze=v(),Oe=n("div"),ae=n("input"),De=v(),xe=n("span"),ul=S("Default gem level:"),rl=v(),_l($e.$$.fragment),Ql=v(),Dl=n("span"),Fl=S("Default gem quality:"),Ml=v(),_l(el.$$.fragment),Rl=v(),El=n("span"),ql=S("Show support gems:"),Bl=v(),Sl=n("div"),bl=n("div"),Ve=n("select"),al=n("option"),Hl=S("All"),sl=n("option"),Wl=S("Non-Awakened"),nl=n("option"),Xl=S("Awakened"),jl=v(),Il=n("span"),Yl=S("Show gem quality variants:"),zl=v(),kl=n("div"),ol=n("input"),Jl=v(),K&&K.c(),this.h()},l(E){c=o(E,"DIV",{class:!0});var Z=r(c);i=o(Z,"DIV",{class:!0});var Be=r(i);l=o(Be,"DIV",{class:!0});var Te=r(l);f=o(Te,"DIV",{class:!0});var $=r(f);I=o($,"SPAN",{});var Pl=r(I);M=b(Pl,"Skill set:"),Pl.forEach(s),Y=m($),G=o($,"DIV",{class:!0});var it=r(G);w=o(it,"SELECT",{class:!0});var ut=r(w);C=o(ut,"OPTION",{});var rt=r(C);Q=b(rt,"Default"),rt.forEach(s),ut.forEach(s),it.forEach(s),W=m($),B=o($,"BUTTON",{class:!0});var ct=r(B);q=b(ct,"Manage..."),ct.forEach(s),$.forEach(s),X=m(Te),T=o(Te,"DIV",{class:!0});var il=r(T);h=o(il,"SPAN",{class:!0});var ft=r(h);U=b(ft,"Socket Groups:"),ft.forEach(s),de=m(il),V=o(il,"BUTTON",{class:!0});var pt=r(V);re=b(pt,"New"),pt.forEach(s),J=m(il),p=o(il,"BUTTON",{class:!0});var _t=r(p);se=b(_t,"Delete All"),_t.forEach(s),O=m(il),x=o(il,"BUTTON",{class:!0});var dt=r(x);Qe=b(dt,"Delete"),dt.forEach(s),il.forEach(s),Fe=m(Te),z=o(Te,"SELECT",{class:!0,size:!0});var vt=r(z);for(let Zl=0;Zl<pe.length;Zl+=1)pe[Zl].l(vt);vt.forEach(s),Ie=m(Te),j=o(Te,"P",{class:!0});var He=r(j);Ce=b(He,"Usage Tips:"),u=o(He,"BR",{}),L=b(He,`
          - You can copy/paste socket groups using Ctrl+C and Ctrl+V.`),ce=o(He,"BR",{}),ee=b(He,`
          - Ctrl + Click to enable/disable socket groups.`),me=o(He,"BR",{}),he=b(He,`
          - Ctrl + Right click to include/exclude in FullDPS calculations.`),Me=o(He,"BR",{}),Xe=b(He,`
          - Right click to set as the Main skill group.`),je=o(He,"BR",{}),He.forEach(s),Ue=m(Te),ke=o(Te,"FIELDSET",{class:!0});var yl=r(ke);a=o(yl,"LEGEND",{class:!0});var mt=r(a);_=b(mt,"Gem Options"),mt.forEach(s),le=m(yl),k=o(yl,"DIV",{class:!0});var H=r(k);fe=o(H,"SPAN",{});var ht=r(fe);Re=b(ht,"Sort gems by DPS:"),ht.forEach(s),We=m(H),ge=o(H,"DIV",{class:!0});var Tl=r(ge);Pe=o(Tl,"INPUT",{type:!0,class:!0}),Ye=m(Tl),ne=o(Tl,"DIV",{class:!0});var St=r(ne);D=o(St,"SELECT",{class:!0});var ll=r(D);we=o(ll,"OPTION",{});var bt=r(we);P=b(bt,"Full DPS"),bt.forEach(s),N=o(ll,"OPTION",{});var kt=r(N);g=b(kt,"Combined DPS"),kt.forEach(s),y=o(ll,"OPTION",{});var gt=r(y);Se=b(gt,"Total DPS"),gt.forEach(s),oe=o(ll,"OPTION",{});var Gt=r(oe);Ae=b(Gt,"Average Hit"),Gt.forEach(s),ie=o(ll,"OPTION",{});var Dt=r(ie);ye=b(Dt,"DoT DPS"),Dt.forEach(s),te=o(ll,"OPTION",{});var Et=r(te);R=b(Et,"Bleed DPS"),Et.forEach(s),ue=o(ll,"OPTION",{});var It=r(ue);F=b(It,"Ignite DPS"),It.forEach(s),Ge=o(ll,"OPTION",{});var Pt=r(Ge);ze=b(Pt,"Poison DPS"),Pt.forEach(s),ll.forEach(s),St.forEach(s),Tl.forEach(s),Je=m(H),qe=o(H,"SPAN",{});var wt=r(qe);Ke=b(wt,"Match gems character level:"),wt.forEach(s),Ze=m(H),Oe=o(H,"DIV",{class:!0});var yt=r(Oe);ae=o(yt,"INPUT",{type:!0,class:!0}),yt.forEach(s),De=m(H),xe=o(H,"SPAN",{});var Tt=r(xe);ul=b(Tt,"Default gem level:"),Tt.forEach(s),rl=m(H),dl($e.$$.fragment,H),Ql=m(H),Dl=o(H,"SPAN",{});var Lt=r(Dl);Fl=b(Lt,"Default gem quality:"),Lt.forEach(s),Ml=m(H),dl(el.$$.fragment,H),Rl=m(H),El=o(H,"SPAN",{});var Nt=r(El);ql=b(Nt,"Show support gems:"),Nt.forEach(s),Bl=m(H),Sl=o(H,"DIV",{class:!0});var Ct=r(Sl);bl=o(Ct,"DIV",{class:!0});var At=r(bl);Ve=o(At,"SELECT",{class:!0});var Ll=r(Ve);al=o(Ll,"OPTION",{});var Ot=r(al);Hl=b(Ot,"All"),Ot.forEach(s),sl=o(Ll,"OPTION",{});var Vt=r(sl);Wl=b(Vt,"Non-Awakened"),Vt.forEach(s),nl=o(Ll,"OPTION",{});var Qt=r(nl);Xl=b(Qt,"Awakened"),Qt.forEach(s),Ll.forEach(s),At.forEach(s),Ct.forEach(s),jl=m(H),Il=o(H,"SPAN",{});var Ft=r(Il);Yl=b(Ft,"Show gem quality variants:"),Ft.forEach(s),zl=m(H),kl=o(H,"DIV",{class:!0});var Mt=r(kl);ol=o(Mt,"INPUT",{type:!0,class:!0}),Mt.forEach(s),H.forEach(s),yl.forEach(s),Te.forEach(s),Jl=m(Be),K&&K.l(Be),Be.forEach(s),Z.forEach(s),this.h()},h(){C.__value="Default",C.value=C.__value,d(w,"class","input"),w.disabled=A=t[3]===1,d(G,"class","container select-wrapper flex-1"),d(B,"class","container"),d(f,"class","flex flex-row items-center gap-2"),d(h,"class","flex-1"),d(V,"class","container"),d(p,"class","container"),p.disabled=Ne=t[4].length<=1,d(x,"class","container"),x.disabled=ve=t[0]<0||t[4].length<=1,d(T,"class","flex flex-row items-center gap-2"),d(z,"class","bg-black border w-full border-neutral-400 flex-1 select-many max-h-[300px]"),d(z,"size","18"),t[0]===void 0&&xl(()=>t[21].call(z)),d(j,"class","text-sm"),d(a,"class","container"),d(Pe,"type","checkbox"),d(Pe,"class","text-2xl"),we.__value="FullDPS",we.value=we.__value,N.__value="CombinedDPS",N.value=N.__value,y.__value="TotalDPS",y.value=y.__value,oe.__value="AverageDamage",oe.value=oe.__value,ie.__value="TotalDot",ie.value=ie.__value,te.__value="BleedDPS",te.value=te.__value,ue.__value="IgniteDPS",ue.value=ue.__value,Ge.__value="TotalPoisonDPS",Ge.value=Ge.__value,d(D,"class","input"),t[5].sortGemsByDPSField===void 0&&xl(()=>t[23].call(D)),d(ne,"class","container select-wrapper"),d(ge,"class","flex flex-row gap-2"),d(ae,"type","checkbox"),d(ae,"class","text-2xl"),d(Oe,"class","flex flex-row gap-2"),al.__value="ALL",al.value=al.__value,sl.__value="NORMAL",sl.value=sl.__value,nl.__value="AWAKENED",nl.value=nl.__value,d(Ve,"class","input"),t[5].showSupportGemTypes===void 0&&xl(()=>t[27].call(Ve)),d(bl,"class","container select-wrapper"),d(Sl,"class","flex flex-row gap-2"),d(ol,"type","checkbox"),d(ol,"class","text-2xl"),d(kl,"class","flex flex-row gap-2"),d(k,"class","side-by-side-max-content"),d(ke,"class","border border-white bg-neutral-900 p-2"),d(l,"class","flex flex-col w-[450px] gap-2"),d(i,"class","flex flex-row gap-4 flex-wrap"),d(c,"class","p-2 px-4")},m(E,Z){Ee(E,c,Z),e(c,i),e(i,l),e(l,f),e(f,I),e(I,M),e(f,Y),e(f,G),e(G,w),e(w,C),e(C,Q),e(f,W),e(f,B),e(B,q),e(l,X),e(l,T),e(T,h),e(h,U),e(T,de),e(T,V),e(V,re),e(T,J),e(T,p),e(p,se),e(T,O),e(T,x),e(x,Qe),e(l,Fe),e(l,z);for(let Be=0;Be<pe.length;Be+=1)pe[Be].m(z,null);Gl(z,t[0]),e(l,Ie),e(l,j),e(j,Ce),e(j,u),e(j,L),e(j,ce),e(j,ee),e(j,me),e(j,he),e(j,Me),e(j,Xe),e(j,je),e(l,Ue),e(l,ke),e(ke,a),e(a,_),e(ke,le),e(ke,k),e(k,fe),e(fe,Re),e(k,We),e(k,ge),e(ge,Pe),Pe.checked=t[5].sortGemsByDPS,e(ge,Ye),e(ge,ne),e(ne,D),e(D,we),e(we,P),e(D,N),e(N,g),e(D,y),e(y,Se),e(D,oe),e(oe,Ae),e(D,ie),e(ie,ye),e(D,te),e(te,R),e(D,ue),e(ue,F),e(D,Ge),e(Ge,ze),Gl(D,t[5].sortGemsByDPSField),e(k,Je),e(k,qe),e(qe,Ke),e(k,Ze),e(k,Oe),e(Oe,ae),ae.checked=t[5].matchGemLevelToCharacterLevel,e(k,De),e(k,xe),e(xe,ul),e(k,rl),vl($e,k,null),e(k,Ql),e(k,Dl),e(Dl,Fl),e(k,Ml),vl(el,k,null),e(k,Rl),e(k,El),e(El,ql),e(k,Bl),e(k,Sl),e(Sl,bl),e(bl,Ve),e(Ve,al),e(al,Hl),e(Ve,sl),e(sl,Wl),e(Ve,nl),e(nl,Xl),Gl(Ve,t[5].showSupportGemTypes),e(k,jl),e(k,Il),e(Il,Yl),e(k,zl),e(k,kl),e(kl,ol),ol.checked=t[5].showAltQualityGems,e(i,Jl),K&&K.m(i,null),cl=!0,Kl||(st=[be(V,"click",t[15]),be(p,"click",t[17]),be(x,"click",t[16]),be(z,"change",t[21]),be(Pe,"change",t[22]),be(D,"change",t[23]),be(ae,"change",t[24]),be(Ve,"change",t[27]),be(ol,"change",t[28])],Kl=!0)},p(E,Z){if((!cl||Z[0]&8&&A!==(A=E[3]===1))&&(w.disabled=A),(!cl||Z[0]&16&&Ne!==(Ne=E[4].length<=1))&&(p.disabled=Ne),(!cl||Z[0]&17&&ve!==(ve=E[0]<0||E[4].length<=1))&&(x.disabled=ve),Z[0]&2192){gl=E[4];let $;for($=0;$<gl.length;$+=1){const Pl=qt(E,gl,$);pe[$]?pe[$].p(Pl,Z):(pe[$]=Ht(Pl),pe[$].c(),pe[$].m(z,null))}for(;$<pe.length;$+=1)pe[$].d(1);pe.length=gl.length}Z[0]&1&&Gl(z,E[0]),Z[0]&32&&(Pe.checked=E[5].sortGemsByDPS),Z[0]&32&&Gl(D,E[5].sortGemsByDPSField),Z[0]&32&&(ae.checked=E[5].matchGemLevelToCharacterLevel);const Be={};!Vl&&Z[0]&32&&(Vl=!0,Be.value=E[5].defaultGemLevel,ml(()=>Vl=!1)),$e.$set(Be);const Te={};!Ul&&Z[0]&32&&(Ul=!0,Te.value=E[5].defaultGemQuality,ml(()=>Ul=!1)),el.$set(Te),Z[0]&32&&Gl(Ve,E[5].showSupportGemTypes),Z[0]&32&&(ol.checked=E[5].showAltQualityGems),E[6]?K?(K.p(E,Z),Z[0]&64&&_e(K,1)):(K=Wt(E),K.c(),_e(K,1),K.m(i,null)):K&&(tt(),Le(K,1,1,()=>{K=null}),lt())},i(E){cl||(_e($e.$$.fragment,E),_e(el.$$.fragment,E),_e(K),cl=!0)},o(E){Le($e.$$.fragment,E),Le(el.$$.fragment,E),Le(K),cl=!1},d(E){E&&s(c),jt(pe,E),hl($e),hl(el),K&&K.d(),Kl=!1,at(st)}}}function Ht(t){let c,i=t[47].label+"",l,f,I=t[47].enabled?"":" (Disabled)",M,Y,G=t[7]===t[46]?" (Active)":"",w,C,Q=t[47].fullDPS?" (FullDPS)":"",A,W,B,q;function X(...T){return t[20](t[46],...T)}return{c(){c=n("option"),l=S(i),f=v(),M=S(I),Y=v(),w=S(G),C=v(),A=S(Q),W=v(),this.h()},l(T){c=o(T,"OPTION",{});var h=r(c);l=b(h,i),f=m(h),M=b(h,I),Y=m(h),w=b(h,G),C=m(h),A=b(h,Q),W=m(h),h.forEach(s),this.h()},h(){c.__value=t[46],c.value=c.__value},m(T,h){Ee(T,c,h),e(c,l),e(c,f),e(c,M),e(c,Y),e(c,w),e(c,C),e(c,A),e(c,W),B||(q=be(c,"contextmenu",X),B=!0)},p(T,h){t=T,h[0]&16&&i!==(i=t[47].label+"")&&Cl(l,i),h[0]&16&&I!==(I=t[47].enabled?"":" (Disabled)")&&Cl(M,I),h[0]&128&&G!==(G=t[7]===t[46]?" (Active)":"")&&Cl(w,G),h[0]&16&&Q!==(Q=t[47].fullDPS?" (FullDPS)":"")&&Cl(A,Q)},d(T){T&&s(c),B=!1,q()}}}function Wt(t){let c,i,l,f,I,M,Y,G,w,C,Q,A,W,B,q,X,T,h,U,de,V,re,J,p,se,Ne,O,x,Qe,ve,Fe,z,Ie,j,Ce,u,L,ce,ee,me,he,Me,Xe,je,Ue,ke,a,_,le,k,fe,Re,We,ge;function Pe(P){t[29](P)}let Ye={prefix:"Label:",fullWidth:!0};t[8]!==void 0&&(Ye.value=t[8]),i=new ea({props:Ye}),fl.push(()=>pl(i,"value",Pe));let ne=t[6].Gems,D=[];for(let P=0;P<ne.length;P+=1)D[P]=Xt(Rt(t,ne,P));const we=P=>Le(D[P],1,1,()=>{D[P]=null});return{c(){c=n("div"),_l(i.$$.fragment),f=v(),I=n("div"),M=n("div"),Y=n("span"),G=S("Socketed in:"),w=v(),C=n("div"),Q=n("select"),A=n("option"),W=S("None"),B=v(),q=n("div"),X=n("span"),T=S("Enabled:"),h=v(),U=n("input"),de=v(),V=n("div"),re=n("span"),J=S("Include in Full DPS:"),p=v(),se=n("input"),Ne=v(),O=n("div"),x=n("div"),Qe=v(),ve=n("div"),Fe=S("Gem Name"),z=v(),Ie=n("div"),j=S("Level"),Ce=v(),u=n("div"),L=S("Variant"),ce=v(),ee=n("div"),me=S("Quality"),he=v(),Me=n("div"),Xe=S("Enabled"),je=v(),Ue=n("div"),ke=S("Count"),a=v();for(let P=0;P<D.length;P+=1)D[P].c();_=v(),le=n("div"),k=n("button"),fe=S("Add Skill Gem"),this.h()},l(P){c=o(P,"DIV",{class:!0});var N=r(c);dl(i.$$.fragment,N),f=m(N),I=o(N,"DIV",{class:!0});var g=r(I);M=o(g,"DIV",{class:!0});var y=r(M);Y=o(y,"SPAN",{});var Se=r(Y);G=b(Se,"Socketed in:"),Se.forEach(s),w=m(y),C=o(y,"DIV",{class:!0});var oe=r(C);Q=o(oe,"SELECT",{class:!0});var Ae=r(Q);A=o(Ae,"OPTION",{});var ie=r(A);W=b(ie,"None"),ie.forEach(s),Ae.forEach(s),oe.forEach(s),y.forEach(s),B=m(g),q=o(g,"DIV",{class:!0});var ye=r(q);X=o(ye,"SPAN",{});var te=r(X);T=b(te,"Enabled:"),te.forEach(s),h=m(ye),U=o(ye,"INPUT",{type:!0,class:!0}),ye.forEach(s),de=m(g),V=o(g,"DIV",{class:!0});var R=r(V);re=o(R,"SPAN",{});var ue=r(re);J=b(ue,"Include in Full DPS:"),ue.forEach(s),p=m(R),se=o(R,"INPUT",{type:!0,class:!0}),R.forEach(s),g.forEach(s),Ne=m(N),O=o(N,"DIV",{class:!0});var F=r(O);x=o(F,"DIV",{}),r(x).forEach(s),Qe=m(F),ve=o(F,"DIV",{});var Ge=r(ve);Fe=b(Ge,"Gem Name"),Ge.forEach(s),z=m(F),Ie=o(F,"DIV",{});var ze=r(Ie);j=b(ze,"Level"),ze.forEach(s),Ce=m(F),u=o(F,"DIV",{});var Je=r(u);L=b(Je,"Variant"),Je.forEach(s),ce=m(F),ee=o(F,"DIV",{});var qe=r(ee);me=b(qe,"Quality"),qe.forEach(s),he=m(F),Me=o(F,"DIV",{});var Ke=r(Me);Xe=b(Ke,"Enabled"),Ke.forEach(s),je=m(F),Ue=o(F,"DIV",{});var Ze=r(Ue);ke=b(Ze,"Count"),Ze.forEach(s),a=m(F);for(let De=0;De<D.length;De+=1)D[De].l(F);_=m(F),le=o(F,"DIV",{class:!0});var Oe=r(le);k=o(Oe,"BUTTON",{class:!0});var ae=r(k);fe=b(ae,"Add Skill Gem"),ae.forEach(s),Oe.forEach(s),F.forEach(s),N.forEach(s),this.h()},h(){A.__value="None",A.value=A.__value,d(Q,"class","input"),d(C,"class","container select-wrapper"),d(M,"class","flex flex-row items-center gap-2"),d(U,"type","checkbox"),d(U,"class","text-2xl"),d(q,"class","flex flex-row items-center gap-2"),d(se,"type","checkbox"),d(se,"class","text-2xl"),d(V,"class","flex flex-row items-center gap-2"),d(I,"class","flex flex-row w-full justify-between"),d(k,"class","container font-bold min-w-full"),d(le,"class","col-span-7 w-full mt-2"),d(O,"class","grid gem-grid gap-1 w-full svelte-1ehf173"),d(c,"class","flex flex-col min-w-[500px] gap-2")},m(P,N){Ee(P,c,N),vl(i,c,null),e(c,f),e(c,I),e(I,M),e(M,Y),e(Y,G),e(M,w),e(M,C),e(C,Q),e(Q,A),e(A,W),e(I,B),e(I,q),e(q,X),e(X,T),e(q,h),e(q,U),U.checked=t[6].Enabled,e(I,de),e(I,V),e(V,re),e(re,J),e(V,p),e(V,se),se.checked=t[6].IncludeInFullDPS,e(c,Ne),e(c,O),e(O,x),e(O,Qe),e(O,ve),e(ve,Fe),e(O,z),e(O,Ie),e(Ie,j),e(O,Ce),e(O,u),e(u,L),e(O,ce),e(O,ee),e(ee,me),e(O,he),e(O,Me),e(Me,Xe),e(O,je),e(O,Ue),e(Ue,ke),e(O,a);for(let g=0;g<D.length;g+=1)D[g].m(O,null);e(O,_),e(O,le),e(le,k),e(k,fe),Re=!0,We||(ge=[be(U,"change",t[30]),be(se,"change",t[31]),be(k,"click",t[38])],We=!0)},p(P,N){const g={};if(!l&&N[0]&256&&(l=!0,g.value=P[8],ml(()=>l=!1)),i.$set(g),N[0]&64&&(U.checked=P[6].Enabled),N[0]&64&&(se.checked=P[6].IncludeInFullDPS),N[0]&8258){ne=P[6].Gems;let y;for(y=0;y<ne.length;y+=1){const Se=Rt(P,ne,y);D[y]?(D[y].p(Se,N),_e(D[y],1)):(D[y]=Xt(Se),D[y].c(),_e(D[y],1),D[y].m(O,_))}for(tt(),y=ne.length;y<D.length;y+=1)we(y);lt()}},i(P){if(!Re){_e(i.$$.fragment,P);for(let N=0;N<ne.length;N+=1)_e(D[N]);Re=!0}},o(P){Le(i.$$.fragment,P),D=D.filter(Boolean);for(let N=0;N<D.length;N+=1)Le(D[N]);Re=!1},d(P){P&&s(c),hl(i),jt(D,P),We=!1,at(ge)}}}function Xt(t){let c,i,l,f,I,M,Y,G,w,C,Q,A,W,B,q,X,T,h,U,de,V,re,J,p,se;function Ne(){return t[32](t[46])}function O(u){t[33](u,t[44])}let x={items:t[1],isClearable:!1,placeholder:"",showIndicator:!0,Item:ta,Selection:aa,listOffset:0};t[44].GemListValue!==void 0&&(x.value=t[44].GemListValue),I=new sa({props:x}),fl.push(()=>pl(I,"value",O));function Qe(u){t[34](u,t[44])}let ve={min:1,max:t[44].GemListValue.data.MaxLevel};t[44].Level!==void 0&&(ve.value=t[44].Level),G=new wl({props:ve}),fl.push(()=>pl(G,"value",Qe));function Fe(u){t[35](u,t[44])}let z={min:0,max:30};t[44].Quality!==void 0&&(z.value=t[44].Quality),X=new wl({props:z}),fl.push(()=>pl(X,"value",Fe));function Ie(){t[36].call(U,t[45],t[46])}function j(u){t[37](u,t[44])}let Ce={min:1,max:99};return t[44].Count!==void 0&&(Ce.value=t[44].Count),V=new wl({props:Ce}),fl.push(()=>pl(V,"value",j)),{c(){c=n("button"),i=S("X"),l=v(),f=n("div"),_l(I.$$.fragment),Y=v(),_l(G.$$.fragment),C=v(),Q=n("div"),A=n("select"),W=n("option"),B=S("Default"),q=v(),_l(X.$$.fragment),h=v(),U=n("input"),de=v(),_l(V.$$.fragment),this.h()},l(u){c=o(u,"BUTTON",{class:!0});var L=r(c);i=b(L,"X"),L.forEach(s),l=m(u),f=o(u,"DIV",{class:!0});var ce=r(f);dl(I.$$.fragment,ce),ce.forEach(s),Y=m(u),dl(G.$$.fragment,u),C=m(u),Q=o(u,"DIV",{class:!0});var ee=r(Q);A=o(ee,"SELECT",{class:!0});var me=r(A);W=o(me,"OPTION",{});var he=r(W);B=b(he,"Default"),he.forEach(s),me.forEach(s),ee.forEach(s),q=m(u),dl(X.$$.fragment,u),h=m(u),U=o(u,"INPUT",{type:!0,class:!0}),de=m(u),dl(V.$$.fragment,u),this.h()},h(){d(c,"class","container font-bold"),d(f,"class","min-w-full themed"),W.__value="Default",W.value=W.__value,d(A,"class","input"),d(Q,"class","container select-wrapper"),d(U,"type","checkbox"),d(U,"class","text-2xl")},m(u,L){Ee(u,c,L),e(c,i),Ee(u,l,L),Ee(u,f,L),vl(I,f,null),Ee(u,Y,L),vl(G,u,L),Ee(u,C,L),Ee(u,Q,L),e(Q,A),e(A,W),e(W,B),Ee(u,q,L),vl(X,u,L),Ee(u,h,L),Ee(u,U,L),U.checked=t[44].Enabled,Ee(u,de,L),vl(V,u,L),J=!0,p||(se=[be(c,"click",Ne),be(U,"change",Ie)],p=!0)},p(u,L){t=u;const ce={};L[0]&2&&(ce.items=t[1]),!M&&L[0]&64&&(M=!0,ce.value=t[44].GemListValue,ml(()=>M=!1)),I.$set(ce);const ee={};L[0]&64&&(ee.max=t[44].GemListValue.data.MaxLevel),!w&&L[0]&64&&(w=!0,ee.value=t[44].Level,ml(()=>w=!1)),G.$set(ee);const me={};!T&&L[0]&64&&(T=!0,me.value=t[44].Quality,ml(()=>T=!1)),X.$set(me),L[0]&64&&(U.checked=t[44].Enabled);const he={};!re&&L[0]&64&&(re=!0,he.value=t[44].Count,ml(()=>re=!1)),V.$set(he)},i(u){J||(_e(I.$$.fragment,u),_e(G.$$.fragment,u),_e(X.$$.fragment,u),_e(V.$$.fragment,u),J=!0)},o(u){Le(I.$$.fragment,u),Le(G.$$.fragment,u),Le(X.$$.fragment,u),Le(V.$$.fragment,u),J=!1},d(u){u&&s(c),u&&s(l),u&&s(f),hl(I),u&&s(Y),hl(G,u),u&&s(C),u&&s(Q),u&&s(q),hl(X,u),u&&s(h),u&&s(U),u&&s(de),hl(V,u),p=!1,at(se)}}}function oa(t){let c,i,l=t[2]&&Bt(t);return{c(){l&&l.c(),c=Ut()},l(f){l&&l.l(f),c=Ut()},m(f,I){l&&l.m(f,I),Ee(f,c,I),i=!0},p(f,I){f[2]?l?(l.p(f,I),I[0]&4&&_e(l,1)):(l=Bt(f),l.c(),_e(l,1),l.m(c.parentNode,c)):l&&(tt(),Le(l,1,1,()=>{l=null}),lt())},i(f){i||(_e(l),i=!0)},o(f){Le(l),i=!1},d(f){l&&l.d(f),f&&s(c)}}}function ia(t,c,i){let l,f,I,M;Nl(t,tl,a=>i(2,l=a));let Y=1,G=1,w=0;const C=et(-1);Nl(t,C,a=>i(7,I=a)),C.subscribe(a=>{var _;a>=0&&((_=la)==null||_.SetMainSocketGroup(a+1)),tl.set(l)});let Q=!0;const A=et("");Nl(t,A,a=>i(8,M=a)),A.subscribe(a=>{Q||!l||Al(tl,l.Skills.SkillSets[G-1].Skills[w].Label=a,l)});const W=(a,_)=>{_.preventDefault(),_.stopPropagation(),C.set(a)};let B=[];const q={},X={STR:Ol.STRENGTH,DEX:Ol.DEXTERITY,INT:Ol.INTELLIGENCE,NONE:Ol.NORMAL};xt(()=>{na().then(a=>{i(1,B=a.map(_=>({label:"^"+X[_.GemType]+_.Base.Name,value:_.ID,data:_}))),a.forEach(_=>{i(19,q[_.ID]=_,q)})})});let T=!0;const h=et();Nl(t,h,a=>i(6,f=a));let U="";h.subscribe(async a=>{var le;if(T||!a||!l||!l.Skills||!l.Skills.SkillSets||!l.Skills.SkillSets[G-1]||!l.Skills.SkillSets[G-1].Skills||!l.Skills.SkillSets[G-1].Skills[w])return;const _=JSON.stringify(a);U!==_&&(U=_,Al(tl,l.Skills.SkillSets[G-1].Skills[w].Slot=a.Slot,l),Al(tl,l.Skills.SkillSets[G-1].Skills[w].Enabled=a.Enabled,l),Al(tl,l.Skills.SkillSets[G-1].Skills[w].IncludeInFullDPS=a.IncludeInFullDPS,l),a.Gems&&await((le=l==null?void 0:l.SetSocketGroupGems)==null?void 0:le.call(l,G-1,w,a.Gems.map(k=>({...k,GemID:k.GemListValue.value})))),$t("currentGemGroup"))});let de=[];const V=a=>{var _;(_=f==null?void 0:f.Gems)==null||_.splice(a,1),h.set(f)},re=()=>{var _;const a=B[0];(_=f==null?void 0:f.Gems)==null||_.push({GemListValue:a,Quality:0,SkillPart:1,EnableGlobal2:!0,SkillPartCalcs:1,QualityID:"Default",GemID:"Metadata/Items/Gems/SkillGemFireball",Enabled:!0,Count:1,EnableGlobal1:!0,NameSpec:a.value,Level:1,SkillID:a.value,SkillMinionItemSet:1,SkillMinion:"SummonedPhantasm"}),h.set(f)},J=(a,_,le)=>{const k="_"+_;Object.defineProperty(a,_,{get(){return this[k]},set(fe){this[k]!==fe&&l&&(le(fe),this[k]=fe)}})},p={_sortGemsByDPS:!0,_sortGemsByDPSField:"FullDPS",_matchGemLevelToCharacterLevel:!1,_defaultGemLevel:20,_defaultGemQuality:0,_showSupportGemTypes:"ALL",_showAltQualityGems:!1};J(p,"sortGemsByDPS",a=>l.SetSortGemsByDPS(a.toString()==="true")),J(p,"sortGemsByDPSField",a=>l.SetSortGemsByDPSField(a)),J(p,"matchGemLevelToCharacterLevel",a=>l.SetMatchGemLevelToCharacterLevel(a.toString()==="true")),J(p,"defaultGemLevel",a=>l.SetDefaultGemLevel(parseInt(a.toString()))),J(p,"defaultGemQuality",a=>l.SetDefaultGemQuality(parseInt(a.toString()))),J(p,"showSupportGemTypes",a=>l.SetShowSupportGemTypes(a)),J(p,"showAltQualityGems",a=>l.SetShowAltQualityGems(a.toString()==="true"));const se=()=>{l==null||l.AddNewSocketGroup(),tl.set(l)},Ne=()=>{l==null||l.DeleteSocketGroup(w),i(0,w=0),tl.set(l)},O=()=>{l==null||l.DeleteAllSocketGroups(),l==null||l.AddNewSocketGroup(),i(0,w=0),C.set(0),tl.set(l)},x=(a,_)=>W(a,_);function Qe(){w=$l(this),i(0,w)}function ve(){p.sortGemsByDPS=this.checked,i(5,p),i(2,l)}function Fe(){p.sortGemsByDPSField=$l(this),i(5,p),i(2,l)}function z(){p.matchGemLevelToCharacterLevel=this.checked,i(5,p),i(2,l)}function Ie(a){t.$$.not_equal(p.defaultGemLevel,a)&&(p.defaultGemLevel=a,i(5,p),i(2,l))}function j(a){t.$$.not_equal(p.defaultGemQuality,a)&&(p.defaultGemQuality=a,i(5,p),i(2,l))}function Ce(){p.showSupportGemTypes=$l(this),i(5,p),i(2,l)}function u(){p.showAltQualityGems=this.checked,i(5,p),i(2,l)}function L(a){M=a,A.set(M)}function ce(){f.Enabled=this.checked,h.set(f)}function ee(){f.IncludeInFullDPS=this.checked,h.set(f)}const me=a=>V(a);function he(a,_){t.$$.not_equal(_.GemListValue,a)&&(_.GemListValue=a,h.set(f))}function Me(a,_){t.$$.not_equal(_.Level,a)&&(_.Level=a,h.set(f))}function Xe(a,_){t.$$.not_equal(_.Quality,a)&&(_.Quality=a,h.set(f))}function je(a,_){a[_].Enabled=this.checked,h.set(f)}function Ue(a,_){t.$$.not_equal(_.Count,a)&&(_.Count=a,h.set(f))}const ke=()=>re();return t.$$.update=()=>{var a,_,le,k,fe,Re,We,ge,Pe,Ye,ne,D,we,P,N;t.$$.dirty[0]&4&&((_=(a=l==null?void 0:l.Skills)==null?void 0:a.SkillSets)==null||_.then(g=>i(3,Y=(g==null?void 0:g.length)||0))),t.$$.dirty[0]&4&&((k=(le=l==null?void 0:l.Skills)==null?void 0:le.ActiveSkillSet)==null||k.then(g=>i(18,G=g))),t.$$.dirty[0]&4&&((Re=(fe=l==null?void 0:l.Build)==null?void 0:fe.MainSocketGroup)==null||Re.then(g=>C.set(g-1))),t.$$.dirty[0]&262149&&((Ye=(Pe=(ge=(We=l==null?void 0:l.Skills)==null?void 0:We.SkillSets)==null?void 0:ge[G-1].Skills)==null?void 0:Pe[w])==null||Ye.Label.then(g=>{Q=!0,A.set(g),Q=!1})),t.$$.dirty[0]&262151&&B.length>0&&new Promise(async()=>{var Se,oe,Ae,ie;const g=(ie=(Ae=(oe=(Se=l==null?void 0:l.Skills)==null?void 0:Se.SkillSets)==null?void 0:oe[G-1])==null?void 0:Ae.Skills)==null?void 0:ie[w];if(!g){h.set(void 0);return}const y=[];if(g.Gems&&await g.Gems){const ye=await g.Gems.length;for(let te=0;te<ye;te++){const R=g.Gems[te],ue=await R.GemID;y.push({GemListValue:B.find(F=>F.value===ue),GemID:ue,Quality:await R.Quality,Enabled:await R.Enabled,EnableGlobal1:await R.EnableGlobal1,EnableGlobal2:await R.EnableGlobal2,QualityID:await R.QualityID,Count:await R.Count,Level:await R.Level,SkillPart:await R.SkillPart,SkillPartCalcs:await R.SkillPartCalcs,NameSpec:await R.NameSpec,SkillID:await R.SkillID,SkillMinionItemSet:await R.SkillMinionItemSet,SkillMinion:await R.SkillMinion})}}T=!0,h.set({Gems:y,Enabled:await g.Enabled,IncludeInFullDPS:await g.IncludeInFullDPS,Slot:await g.Slot}),T=!1}),t.$$.dirty[0]&786436&&((P=(we=(D=(ne=l==null?void 0:l.Skills)==null?void 0:ne.SkillSets)==null?void 0:D[G-1])==null?void 0:we.Skills)==null||P.then(async g=>{var Se,oe,Ae,ie,ye,te,R,ue,F,Ge,ze,Je,qe,Ke,Ze,Oe;const y=[];for(let ae=0;ae<g.length;ae++){let De=await((ie=(Ae=(oe=(Se=l==null?void 0:l.Skills)==null?void 0:Se.SkillSets)==null?void 0:oe[G-1])==null?void 0:Ae.Skills)==null?void 0:ie[ae].Label);if(De===""){const xe=(ue=(R=(te=(ye=l==null?void 0:l.Skills)==null?void 0:ye.SkillSets)==null?void 0:te[G-1])==null?void 0:R.Skills)==null?void 0:ue[ae].Gems;if(await xe)for(let ul=0;ul<await xe.length;ul++){const rl=q[await xe[ul].GemID];!rl||rl.Support||(De!==""&&(De+=", "),De+=rl.Base.Name)}else De="<No active skills>"}y.push({label:De,enabled:await((Je=(ze=(Ge=(F=l==null?void 0:l.Skills)==null?void 0:F.SkillSets)==null?void 0:Ge[G-1])==null?void 0:ze.Skills)==null?void 0:Je[ae].Enabled),fullDPS:await((Oe=(Ze=(Ke=(qe=l==null?void 0:l.Skills)==null?void 0:qe.SkillSets)==null?void 0:Ke[G-1])==null?void 0:Ze.Skills)==null?void 0:Oe[ae].IncludeInFullDPS)})}i(4,de=y)})),t.$$.dirty[0]&4&&((N=l==null?void 0:l.Skills)==null||N.then(g=>{i(5,p._sortGemsByDPS=g.SortGemsByDPS,p),i(5,p._sortGemsByDPSField=g.SortGemsByDPSField,p),i(5,p._matchGemLevelToCharacterLevel=g.MatchGemLevelToCharacterLevel,p),i(5,p._defaultGemLevel=g.DefaultGemLevel,p),i(5,p._defaultGemQuality=g.DefaultGemQuality,p),i(5,p._showSupportGemTypes=g.ShowSupportGemTypes,p),i(5,p._showAltQualityGems=g.ShowAltQualityGems,p)}))},[w,B,l,Y,de,p,f,I,M,C,A,W,h,V,re,se,Ne,O,G,q,x,Qe,ve,Fe,z,Ie,j,Ce,u,L,ce,ee,me,he,Me,Xe,je,Ue,ke]}class ma extends Jt{constructor(c){super(),Kt(this,c,ia,oa,Zt,{},null,[-1,-1])}}export{ma as default};
