import{h as f,A as l,T as u,B as d}from"./vue.esm-bundler-838daa40.js";import{p as b}from"./theme-f9f3e2d4.js";const j=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:o=>o!==!0}},"transition"),O=(o,e)=>{let{slots:s}=e;const{transition:t,disabled:r,group:n,...i}=o,{component:a=n?u:d,...p}=typeof t=="object"?t:{};return f(a,l(typeof t=="string"?{name:r?"":t}:p,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:n}).filter(c=>{let[y,m]=c;return m!==void 0})),i),s)};export{O as M,j as m};