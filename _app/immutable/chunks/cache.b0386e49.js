import{s as i}from"./global.7ba42d8d.js";let e,s;const c=async()=>i?e!==void 0?e:(s===void 0&&(s=new Promise(async l=>{if(!i){l([]);return}const r=await i.GetSkillGems(),o=await r.length,n=[];for(let t=0;t<o;t++)n.push(new Promise(async m=>{const a=r[t];m({Vaal:await a.Vaal,Base:await a.Base,GemType:await a.GemType,ID:await a.ID,MaxLevel:await a.MaxLevel,Support:await a.Support})}));e=await Promise.all(n),l(e)})),s):[];export{c as G};