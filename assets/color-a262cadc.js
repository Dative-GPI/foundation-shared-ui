import{g as s,v as r}from"./vue.esm-bundler-6f923154.js";import{d as c,i as u,b as C,e as d,f as g}from"./theme-a8226b2e.js";function n(e){return c(()=>{const t=[],o={};if(e.value.background)if(u(e.value.background)){if(o.backgroundColor=e.value.background,!e.value.text&&C(e.value.background)){const l=d(e.value.background);if(l.a==null||l.a===1){const a=g(l);o.color=a,o.caretColor=a}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(u(e.value.text)?(o.color=e.value.text,o.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:o}})}function v(e,t){const o=s(()=>({text:r(e)?e.value:t?e[t]:null})),{colorClasses:l,colorStyles:a}=n(o);return{textColorClasses:l,textColorStyles:a}}function f(e,t){const o=s(()=>({background:r(e)?e.value:t?e[t]:null})),{colorClasses:l,colorStyles:a}=n(o);return{backgroundColorClasses:l,backgroundColorStyles:a}}export{v as a,f as b,n as u};