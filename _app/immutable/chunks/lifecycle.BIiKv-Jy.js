import{u as d,a as i,G as g,P as m,au as v,av as l,g as p,S as b,k}from"./runtime.BLVj8dz7.js";function x(n=!1){const s=g,e=s.l.u;if(!e)return;let f=()=>b(s.s);if(n){let a=0,t={};const _=k(()=>{let c=!1;const r=s.s;for(const o in r)r[o]!==t[o]&&(t[o]=r[o],c=!0);return c&&a++,a});f=()=>p(_)}e.b.length&&d(()=>{u(s,f),l(e.b)}),i(()=>{const a=m(()=>e.m.map(v));return()=>{for(const t of a)typeof t=="function"&&t()}}),e.a.length&&i(()=>{u(s,f),l(e.a)})}function u(n,s){if(n.l.s)for(const e of n.l.s)p(e);s()}export{x as i};