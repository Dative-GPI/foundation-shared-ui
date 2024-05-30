import{g as y,j as h,e as A,s as M,p as O,w as S,B as g,A as p,n as I}from"./vue.esm-bundler-cd768bc3.js";import{m as K,V as U,a as E,b as V}from"./VOverlay-5f00a78b.js";import{f as F}from"./forwardRefs-e658ad70.js";import{u as L}from"./proxiedModel-80cf7d0e.js";import{u as R}from"./scopeId-7a393669.js";import{p as j,C as N,s as $,D as B,E as w,F as G,G as C}from"./theme-33f5ac1a.js";import{V as H}from"./VDefaultsProvider-ff78bc14.js";import{g as q,u as z}from"./useRender-d216bc3f.js";const J=j({id:String,...N(K({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:U}}),["absolute"])},"VMenu"),oe=q()({name:"VMenu",props:J(),emits:{"update:modelValue":o=>!0},setup(o,k){let{slots:i}=k;const l=L(o,"modelValue"),{scopeId:P}=R(),b=$(),d=y(()=>o.id||`v-menu-${b}`),s=h(),t=A(E,null),c=M(0);O(E,{register(){++c.value},unregister(){--c.value},closeParents(e){setTimeout(()=>{!c.value&&!o.persistent&&(e==null||e&&!B(e,s.value.contentEl))&&(l.value=!1,t==null||t.closeParents())},40)}});async function v(e){var r,u,f;const n=e.relatedTarget,a=e.target;await I(),l.value&&n!==a&&((r=s.value)!=null&&r.contentEl)&&((u=s.value)!=null&&u.globalTop)&&![document,s.value.contentEl].includes(a)&&!s.value.contentEl.contains(a)&&((f=w(s.value.contentEl)[0])==null||f.focus())}S(l,e=>{e?(t==null||t.register(),document.addEventListener("focusin",v,{once:!0})):(t==null||t.unregister(),document.removeEventListener("focusin",v))});function x(e){t==null||t.closeParents(e)}function D(e){var n,a,r;if(!o.disabled)if(e.key==="Tab"||e.key==="Enter"&&!o.closeOnContentClick){if(e.key==="Enter"&&e.target instanceof HTMLTextAreaElement)return;e.key==="Enter"&&e.preventDefault(),G(w((n=s.value)==null?void 0:n.contentEl,!1),e.shiftKey?"prev":"next",f=>f.tabIndex>=0)||(l.value=!1,(r=(a=s.value)==null?void 0:a.activatorEl)==null||r.focus())}else["Enter"," "].includes(e.key)&&o.closeOnContentClick&&(l.value=!1,t==null||t.closeParents())}function m(e){var a;if(o.disabled)return;const n=(a=s.value)==null?void 0:a.contentEl;n&&l.value?e.key==="ArrowDown"?(e.preventDefault(),C(n,"next")):e.key==="ArrowUp"&&(e.preventDefault(),C(n,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(l.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const T=y(()=>g({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":d.value,onKeydown:m},o.activatorProps));return z(()=>{const e=V.filterProps(o);return p(V,g({ref:s,id:d.value,class:["v-menu",o.class],style:o.style},e,{modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,absolute:!0,activatorProps:T.value,"onClick:outside":x,onKeydown:D},P),{activator:i.activator,default:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return p(H,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...a)]}})}})}),F({id:d,ΨopenChildren:c},s)}});export{oe as V};