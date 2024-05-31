import{g as n,p as J,y as K,x as u,M as v,s as w,j as O,A as D,a0 as z,a1 as Q,J as W,e as X,n as Y}from"./vue.esm-bundler-838daa40.js";import{m as R,g as U,p as Z,u as _}from"./useRender-f6a4770d.js";import{m as p,u as ee}from"./density-e1cdced2.js";import{I as T}from"./tag-d73e64d5.js";import{u as j}from"./proxiedModel-3239cc3c.js";import{p as h,d as le,G as te,o as M,K as ae,w as I,P as oe}from"./theme-f9f3e2d4.js";import{a as ne,b as ue}from"./color-3e53cf3d.js";import{R as re}from"./index-a755b9d6.js";import{V as ie}from"./VIcon-281b119b.js";import{V as ce}from"./VLabel-907d1b92.js";const $=Symbol.for("vuetify:selection-control-group"),E=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:T,trueIcon:T,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:le},...R(),...p(),...te()},"SelectionControlGroup"),se=h({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");U()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:f}=r;const l=j(e,"modelValue"),a=M(),C=n(()=>e.id||`v-selection-control-group-${a}`),c=n(()=>e.name||C.value),t=new Set;return J($,{modelValue:l,forceUpdate:()=>{t.forEach(o=>o())},onForceUpdate:o=>{t.add(o),K(()=>{t.delete(o)})}}),Z({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),_(()=>{var o;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(o=f.default)==null?void 0:o.call(f)])}),{}}});const de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...R(),...E()},"VSelectionControl");function ve(e){const r=X($,void 0),{densityClasses:f}=ee(e),l=j(e,"modelValue"),a=n(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),C=n(()=>e.falseValue!==void 0?e.falseValue:!1),c=n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=n({get(){const m=r?r.modelValue.value:l.value;return c.value?I(m).some(i=>e.valueComparator(i,a.value)):e.valueComparator(m,a.value)},set(m){if(e.readonly)return;const i=m?a.value:C.value;let y=i;c.value&&(y=m?[...I(l.value),i]:I(l.value).filter(s=>!e.valueComparator(s,a.value))),r?r.modelValue.value=y:l.value=y}}),{textColorClasses:o,textColorStyles:V}=ne(n(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:g}=ue(n(()=>t.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=n(()=>t.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:f,trueValue:a,falseValue:C,model:t,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,icon:k}}const he=U()({name:"VSelectionControl",directives:{Ripple:re},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:f,slots:l}=r;const{group:a,densityClasses:C,icon:c,model:t,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,trueValue:k}=ve(e),m=M(),i=w(!1),y=w(!1),s=O(),S=n(()=>e.id||`input-${m}`),x=n(()=>!e.disabled&&!e.readonly);a==null||a.onForceUpdate(()=>{s.value&&(s.value.checked=t.value)});function A(d){x.value&&(i.value=!0,oe(d.target,":focus-visible")!==!1&&(y.value=!0))}function P(){i.value=!1,y.value=!1}function L(d){d.stopPropagation()}function N(d){if(!x.value){s.value&&(s.value.checked=t.value);return}e.readonly&&a&&Y(()=>a.forceUpdate()),t.value=d.target.checked}return _(()=>{var F,G;const d=l.label?l.label({label:e.label,props:{for:S.value}}):e.label,[q,H]=ae(f),B=v("input",D({ref:s,checked:t.value,disabled:!!e.disabled,id:S.value,onBlur:P,onFocus:A,onInput:N,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},H),null);return v("div",D({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":i.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},C.value,e.class]},q,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",o.value],style:V.value},[(F=l.default)==null?void 0:F.call(l,{backgroundColorClasses:b,backgroundColorStyles:g}),z(v("div",{class:["v-selection-control__input"]},[((G=l.input)==null?void 0:G.call(l,{model:t,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,inputNode:B,icon:c.value,props:{onFocus:A,onBlur:P,id:S.value}}))??v(W,null,[c.value&&v(ie,{key:"icon",icon:c.value},null),B])]),[[Q("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&v(ce,{for:S.value,onClick:L},{default:()=>[d]})])}),{isFocused:i,input:s}}});export{he as V,de as m};