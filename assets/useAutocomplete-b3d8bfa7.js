import{j as c,g as x,w as i,o as D}from"./vue.esm-bundler-cd768bc3.js";import{_ as E}from"./lodash-569b8a6d.js";import{u as L}from"./useDebounce-8f204f15.js";const _=(n,p,g,d,t=null,v=a=>a.id,h=a=>a.label,b=!1,A=!0,w=5,y=1e3)=>{const{debounce:a}=L(),l=c(""),s=c(0),r=c(!0),j=x(()=>A&&s.value>0&&s.value<=w),m=()=>a(()=>d(l.value),y),q=e=>{if(t)if(Array.isArray(e)){const u=e.map(o=>n.value.find(f=>v(f)===o)||null).filter(o=>o!==null);t(u)}else t(e&&n.value.find(u=>v(u)===e)||null);else g("update:modelValue",e)};return i(p,(e,u)=>{E.isEqual(e,u)||m()}),i(l,(e,u)=>{e!==u&&b&&!n.value.map(f=>h(f)).includes(l.value)&&(!l.value||!l.value.length||l.value.length>2)&&m()}),i(n,()=>{r.value&&(r.value=!1,s.value=n.value.length)}),D(()=>{d(l.value)}),{toggleSet:j,search:l,init:r,onUpdate:q}};export{_ as u};