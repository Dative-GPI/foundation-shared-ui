import{b as Z,c as d}from"./vue.esm-bundler-Zcuj-zyO.js";const r=Z(void 0),T=()=>{const l=e=>{r.value=e},u=()=>new Intl.DateTimeFormat(void 0,{timeZone:r.value||Intl.DateTimeFormat().resolvedOptions().timeZone,timeZoneName:"longOffset"}),N=()=>new Intl.DateTimeFormat(void 0,{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,timeZoneName:"longOffset"}),m=(e=null)=>{var a;return((a=u().formatToParts(e?new Date(e):new Date).find(s=>s.type==="timeZoneName"))==null?void 0:a.value)||"UTC+00:00"},i=(e=null)=>{const o=m(e),[t,n]=o.slice(3).split(":");return isNaN(parseInt(t))||isNaN(parseInt(n))?0:(parseInt(t)*60+parseInt(n))*60*1e3},f=(e=null)=>{var a;return((a=N().formatToParts(e?new Date(e):new Date).find(s=>s.type==="timeZoneName"))==null?void 0:a.value)||"UTC+00:00"},c=(e=null)=>{const o=f(e),[t,n]=o.slice(3).split(":");return isNaN(parseInt(t))||isNaN(parseInt(n))?0:(parseInt(t)*60+parseInt(n))*60*1e3},p=()=>i()-c();return{ready:d(()=>r.value!==null),timeZone:r,setAppTimeZone:l,getUserOffset:i,getUserOffsetName:m,getMachineOffset:c,getMachineOffsetName:f,getOffsetDifference:p}};export{T as u};