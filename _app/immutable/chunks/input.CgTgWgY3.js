import{o as c,R as u,l as d}from"./runtime.BLVj8dz7.js";import{l as o}from"./props.BmCjkDKm.js";function m(e,a,l=a){var v=c();o(e,"input",()=>{var r=f(e)?n(e.value):e.value;l(r),v&&r!==(r=a())&&(e.value=r??"")}),u(()=>{var r=a();if(d&&e.defaultValue!==e.value){l(f(e)?n(e.value):e.value);return}f(e)&&r===n(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function b(e,a,l=a){o(e,"change",()=>{var v=e.checked;l(v)}),a()==null&&l(!1),u(()=>{var v=a();e.checked=!!v})}function f(e){var a=e.type;return a==="number"||a==="range"}function n(e){return e===""?null:+e}export{b as a,m as b};
