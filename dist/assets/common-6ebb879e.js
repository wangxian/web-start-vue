function m(t){if(t===null||typeof t!="object")return t;let o;Array.isArray(t)?o=[]:o=Object.create(null);for(const n of Object.keys(t))o[n]=m(t[n]);return o}function s(){const t=[64,128,256],o=t[Math.floor(Math.random()*t.length)],n=t[Math.floor(Math.random()*t.length)],r=t[Math.floor(Math.random()*t.length)],a=Math.floor(Math.random()*o).toString(16).padStart(2,"0"),e=Math.floor(Math.random()*(n===256?n*.8:n)).toString(16).padStart(2,"0"),c=Math.floor(Math.random()*r).toString(16).padStart(2,"0");return`#${a}${e}${c}`}function l(t,o){const n={};return Object.keys(t).forEach(r=>{const a=r;t[a]!==void 0&&o[a]!==void 0&&(n[a]=o[a])}),n}function d(t,o=100){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{t.apply(this,r)},o)}}function i(){const o=Math.random().toString().split(".")[1],n=o.length;return Number(o)/10**n}export{i as a,d as b,s as c,m as d,l as g};