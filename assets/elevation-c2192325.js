import{g as n,q as o}from"./vue.esm-bundler-838daa40.js";import{p as r}from"./theme-f9f3e2d4.js";const u=r({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function v(e){return{elevationClasses:n(()=>{const s=o(e)?e.value:e.elevation,a=[];return s==null||a.push(`elevation-${s}`),a})}}export{u as m,v as u};