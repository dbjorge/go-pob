function u(o){return o.endsWith("capture")&&o!=="gotpointercapture"&&o!=="lostpointercapture"}const e=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function r(o){return e.includes(o)}const t={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function i(o){return o=o.toLowerCase(),t[o]??o}const n=["touchstart","touchmove"];function s(o){return n.includes(o)}export{u as a,r as b,s as i,i as n};