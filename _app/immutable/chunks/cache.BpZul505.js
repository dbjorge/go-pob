import{Q as v}from"./runtime.BLVj8dz7.js";import{l as m,h as _}from"./props.BmCjkDKm.js";import{s}from"./global.Dt1GEbnv.js";function c(e,r,t){if(e.multiple)return p(e,r);for(var i of e.options){var a=l(i);if(_(a,r)){i.selected=!0;return}}(!t||r!==void 0)&&(e.selectedIndex=-1)}function d(e,r){v(()=>{var t=new MutationObserver(()=>{var i=e.__value;c(e,i)});return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function y(e,r,t=r){var i=!0;m(e,"change",()=>{var a;if(e.multiple)a=[].map.call(e.querySelectorAll(":checked"),l);else{var n=e.querySelector(":checked");a=n&&l(n)}t(a)}),v(()=>{var a=r();if(c(e,a,i),i&&a===void 0){var n=e.querySelector(":checked");n!==null&&(a=l(n),t(a))}e.__value=a,i=!1}),d(e)}function p(e,r){for(var t of e.options)t.selected=~r.indexOf(l(t))}function l(e){return"__value"in e?e.__value:e.value}let o,f;const b=async()=>s?o!==void 0?o:(f===void 0&&(f=new Promise(async e=>{if(!s){e([]);return}const r=await s.GetSkillGems(),t=await r.length,i=[];for(let a=0;a<t;a++)i.push(new Promise(async n=>{const u=r[a];n({Vaal:await u.Vaal,Base:await u.Base,GemType:await u.GemType,ID:await u.ID,MaxLevel:await u.MaxLevel,Support:await u.Support})}));o=await Promise.all(i),e(o)})),f):[];export{b as G,y as b};
