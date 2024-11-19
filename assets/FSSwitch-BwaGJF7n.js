import{d as x,c as i,b as ee,N as t,m as S,G as ae,z as r,A as n,C as f,F as m,K as A,P as U,J as te,H as z,I as D}from"./vue.esm-bundler-Ddr6MgcY.js";import{_ as I}from"./FSSpan-Bh1X02mE.js";import{F as M}from"./FSCol-D8gLxM2E.js";import{_ as T}from"./FSRow-CSQtiyAx.js";import{C as p,u as le}from"./useColors-DnoeDx-P.js";import{u as se}from"./useRules-BfiZMl38.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as re}from"./index-B-qTxNvr.js";import{V as ne}from"./VDefaultsProvider-B6zOjuu3.js";import{m as ie,u as ue,V as R}from"./VInput-D-xdUwRR.js";import{m as de,V as L}from"./VSelectionControl-DbX2q5FD.js";import{u as ce,L as fe}from"./loader-CNy9VCwd.js";import{u as _}from"./proxiedModel-BYnu2EOK.js";import{V as me}from"./VIcon-zho7mIKV.js";import{V as pe}from"./VProgressCircular-PqDihA6U.js";import{p as he,e as ve,u as ge}from"./theme-D55tBrU4.js";import{g as ye,a as Ve}from"./color-DdAXPAA0.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./css-CxoeZkpP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./locale-CA7yUTVs.js";import"./transition-BtBp4lzQ.js";import"./density-B5LNz2JK.js";import"./form-vji0TmoR.js";import"./index-BF2Ge4Ib.js";import"./VLabel-DauhzWNW.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./resizeObserver-wyIwxSZb.js";const G=x({name:"FSSwitch",components:{FSSpan:I,FSCol:M,FSRow:T},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},variant:{type:String,required:!1,default:"left"},color:{type:String,required:!1,default:p.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:h}){const{validateOn:v,getMessages:a}=se(),{getColors:l}=le(),s=i(()=>l(e.color)),u=l(p.Background),C=l(p.Error),d=l(p.Light),g=l(p.Dark),y=i(()=>e.editable?V.value.length?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":C.base,"--fs-switch-thumb-color":u.base,"--fs-switch-color":g.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?s.value.base:d.dark,"--fs-switch-thumb-color":u.base,"--fs-switch-color":g.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":e.modelValue?s.value.light:d.base,"--fs-switch-thumb-color":u.base,"--fs-switch-color":d.dark}),$=i(()=>e.modelValue?"text-button":"text-body"),V=i(()=>e.messages??a(e.modelValue,e.rules));return{validateOn:v,messages:V,style:y,font:$,onToggle:()=>{e.editable&&h("update:modelValue",!e.modelValue)}}}}),we=he({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ie(),...de()},"VSwitch"),E=ye()({name:"VSwitch",inheritAttrs:!1,props:we(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,h){let{attrs:v,slots:a}=h;const l=_(e,"indeterminate"),s=_(e,"modelValue"),{loaderClasses:u}=ce(e),{isFocused:C,focus:d,blur:g}=ue(e),y=ee(),$=i(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),V=ve(),N=i(()=>e.id||`switch-${V}`);function H(){l.value&&(l.value=!1)}function J(w){var k,b;w.stopPropagation(),w.preventDefault(),(b=(k=y.value)==null?void 0:k.input)==null||b.click()}return Ve(()=>{const[w,k]=ge(v),b=R.filterProps(e),K=L.filterProps(e);return t(R,S({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},u.value,e.class]},w,b,{modelValue:s.value,"onUpdate:modelValue":F=>s.value=F,id:N.value,focused:C.value,style:e.style}),{...a,default:F=>{let{id:j,messagesId:Q,isDisabled:W,isReadonly:X,isValid:O}=F;const q={model:s,isValid:O};return t(L,S({ref:y},K,{modelValue:s.value,"onUpdate:modelValue":[c=>s.value=c,H],id:j.value,"aria-describedby":Q.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:W.value,readonly:X.value,onFocus:d,onBlur:g},k),{...a,default:c=>{let{backgroundColorClasses:P,backgroundColorStyles:o}=c;return t("div",{class:["v-switch__track",...P.value],style:o.value,onClick:J},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](q)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](q)])])},input:c=>{let{inputNode:P,icon:o,backgroundColorClasses:Y,backgroundColorStyles:Z}=c;return t(ae,null,[P,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":o||e.loading},e.inset?void 0:Y.value],style:e.inset?void 0:Z.value},[a.thumb?t(ne,{defaults:{VIcon:{icon:o,size:"x-small"}}},{default:()=>[a.thumb({...q,icon:o})]}):t(re,null,{default:()=>[e.loading?t(fe,{name:"v-switch",active:!0,color:O.value===!1?void 0:$.value},{default:B=>a.loader?a.loader(B):t(pe,{active:B.isActive,color:B.color,indeterminate:!0,size:"16",width:"2"},null)}):o&&t(me,{key:String(o),icon:o,size:"x-small"},null)]})])])}})}})}),{}}});function ke(e,h,v,a,l,s){return r(),n(T,{width:"hug",align:"top-left",gap:"16px",padding:"8px 0px",wrap:!1},{default:f(()=>[e.variant=="left"?(r(),n(E,S({key:0,class:"fs-switch","hide-details":"",inset:"",validateOn:e.validateOn,rules:e.$props.rules,ripple:!1,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["validateOn","rules","style","modelValue","onUpdate:modelValue"])):m("",!0),A(e.$slots,"default",{},()=>[e.$props.label||e.$props.description||e.$slots.description?(r(),n(M,{key:0,width:"hug"},{default:f(()=>[e.$props.label?(r(),n(I,{key:0,class:"fs-switch-label",style:U(e.style),font:e.font,onClick:te(e.onToggle,["stop"])},{default:f(()=>[z(D(e.$props.label),1)]),_:1},8,["style","font","onClick"])):m("",!0),A(e.$slots,"description",{},()=>[e.$props.description?(r(),n(I,{key:0,class:"fs-switch-description",font:"text-overline",style:U(e.style)},{default:f(()=>[z(D(e.$props.description),1)]),_:1},8,["style"])):m("",!0)]),A(e.$slots,"footer")]),_:3})):m("",!0)]),e.variant=="right"?(r(),n(T,{key:1,align:"center-right"},{default:f(()=>[t(E,S({class:"fs-switch","hide-details":"",inset:"",validateOn:e.validateOn,rules:e.$props.rules,ripple:!1,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["validateOn","rules","style","modelValue","onUpdate:modelValue"])]),_:1})):m("",!0)]),_:3})}const xe=oe(G,[["render",ke]]);G.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean | null"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"variant",values:["left","right"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"left"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"},{name:"footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};export{xe as default};