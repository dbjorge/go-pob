import{a0 as j,q as ee,a1 as J,l as w,Y as M,n as ae,L as re,a2 as K,a3 as ne,a4 as U,a5 as b,F as D,C as P,D as Q,E as fe,a6 as k,x as le,a7 as X,a8 as y,w as Z,a9 as O,aa as ie,m as ue,y as z,ab as se,ac as te,ad as ve,_ as _e,Z as de,ae as ce,af as oe,V as he}from"./runtime.LiVz1aeE.js";let L=null;function xe(i,e){return e}function Ee(i,e,a,t){for(var v=[],_=e.length,u=0;u<_;u++)se(e[u].e,v,!0);var p=_>0&&v.length===0&&a!==null;if(p){var E=a.parentNode;te(E),E.append(a),t.clear(),C(i,e[0].prev,e[_-1].next)}ve(v,()=>{for(var h=0;h<_;h++){var c=e[h];p||(t.delete(c.k),C(i,c.prev,c.next)),_e(c.e,!p)}})}function Ie(i,e,a,t,v,_=null){var u=i,p={flags:e,items:new Map,first:null},E=(e&J)!==0;if(E){var h=i;u=w?M(de(h)):h.appendChild(j())}w&&ae();var c=null,n=!1;ee(()=>{var d=a(),l=re(d)?d:d==null?[]:K(d),s=l.length;if(n&&s===0)return;n=s===0;let o=!1;if(w){var T=u.data===ne;T!==(s===0)&&(u=U(),M(u),b(!1),o=!0)}if(w){for(var x=null,A,r=0;r<s;r++){if(D.nodeType===8&&D.data===ce){u=D,o=!0,b(!1);break}var f=l[r],H=t(f,r);A=W(D,p,x,null,f,H,r,v,e),p.items.set(H,A),x=A}s>0&&M(U())}w||pe(l,p,u,v,e,t),_!==null&&(s===0?c?P(c):c=Q(()=>_(u)):c!==null&&fe(c,()=>{c=null})),o&&b(!0),a()}),w&&(u=D)}function pe(i,e,a,t,v,_){var Y,m,q,B;var u=(v&oe)!==0,p=(v&(y|O))!==0,E=i.length,h=e.items,c=e.first,n=c,d,l=null,s,o=[],T=[],x,A,r,f;if(u)for(f=0;f<E;f+=1)x=i[f],A=_(x,f),r=h.get(A),r!==void 0&&((Y=r.a)==null||Y.measure(),(s??(s=new Set)).add(r));for(f=0;f<E;f+=1){if(x=i[f],A=_(x,f),r=h.get(A),r===void 0){var H=n?n.e.nodes_start:a;l=W(H,e,l,l===null?e.first:l.next,x,A,f,t,v),h.set(A,l),o=[],T=[],n=l.next;continue}if(p&&Ae(r,x,f,v),r.e.f&k&&(P(r.e),u&&((m=r.a)==null||m.unfix(),(s??(s=new Set)).delete(r))),r!==n){if(d!==void 0&&d.has(r)){if(o.length<T.length){var R=T[0],I;l=R.prev;var V=o[0],S=o[o.length-1];for(I=0;I<o.length;I+=1)G(o[I],R,a);for(I=0;I<T.length;I+=1)d.delete(T[I]);C(e,V.prev,S.next),C(e,l,V),C(e,S,R),n=R,l=S,f-=1,o=[],T=[]}else d.delete(r),G(r,n,a),C(e,r.prev,r.next),C(e,r,l===null?e.first:l.next),C(e,l,r),l=r;continue}for(o=[],T=[];n!==null&&n.k!==A;)n.e.f&k||(d??(d=new Set)).add(n),T.push(n),n=n.next;if(n===null)continue;r=n}o.push(r),l=r,n=r.next}if(n!==null||d!==void 0){for(var N=d===void 0?[]:K(d);n!==null;)n.e.f&k||N.push(n),n=n.next;var g=N.length;if(g>0){var $=v&J&&E===0?a:null;if(u){for(f=0;f<g;f+=1)(q=N[f].a)==null||q.measure();for(f=0;f<g;f+=1)(B=N[f].a)==null||B.fix()}Ee(e,N,$,h)}}u&&le(()=>{var F;if(s!==void 0)for(r of s)(F=r.a)==null||F.apply()}),X.first=e.first&&e.first.e,X.last=l&&l.e}function Ae(i,e,a,t){t&y&&Z(i.v,e),t&O?Z(i.i,a):i.i=a}function W(i,e,a,t,v,_,u,p,E){var h=L;try{var c=(E&y)!==0,n=(E&ie)===0,d=c?n?ue(v):z(v):v,l=E&O?z(u):u,s={i:l,v:d,k:_,a:null,e:null,prev:a,next:t};return L=s,s.e=Q(()=>p(i,d,l),w),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{L=h}}function G(i,e,a){for(var t=i.next?i.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=i.e.nodes_start;_!==t;){var u=he(_);v.before(_),_=u}}function C(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{Ie as e,xe as i};
