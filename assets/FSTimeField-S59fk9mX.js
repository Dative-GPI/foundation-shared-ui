import{d as I,b as v,c as n,w as L,y as b,z as P,A as R,B as p,L as S,m as j,M as y,N as h,I as q,J as $,K as B}from"./vue.esm-bundler-DjjVIdVI.js";import z from"./FSNumberField-lh3qOAX6.js";import{F as E}from"./FSSelectField-BNF0cunm.js";import{F as M}from"./FSBaseField-CruMavxg.js";import{F as k}from"./FSRow-CpogXLW8.js";import{t as f,a as T}from"./time-ELt5M3Ql.js";import{u as W}from"./useRules-yoa6lFkm.js";import{u as D,C as V}from"./useColors-CdvgF10X.js";import{u as J}from"./useSlots-DzSo5JdB.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-DSbw_bnX.js";import"./FSButton-DS0wrBKk.js";import"./FSClickable-DnsFhA6_.js";import"./FSCard-C9IdgJNY.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./form-B7NlTRtd.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./VSpacer-CrqXaTz-.js";import"./FSDialogMenu-CUwupOm-.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DlNGN2Nb.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-CzRpQEWO.js";import"./FSWrapGroup-D3vzPBUf.js";import"./FSCheckbox-Bu2nWsZZ.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-CNI_FQpM.js";import"./FSLoader-DpMpI5Qw.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-ChOxIOPt.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-DlfHU1SC.js";import"./VMenu-BkqMtGEU.js";import"./useTranslations-f9CWAvtI.js";const N=I({name:"FSTimeField",components:{FSNumberField:z,FSSelectField:E,FSBaseField:M,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=W(),{getColors:m}=D(),{slots:a}=J();delete a.label,delete a.description;const d=m(V.Error),i=m(V.Light),u=m(V.Dark),t=v(0),l=v(f[0]),s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":u.base,"--fs-time-field-active-border-color":u.dark,"--fs-time-field-error-color":d.base,"--fs-time-field-error-border-color":d.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),C=n(()=>Object.keys(a).filter(r=>r.startsWith("number-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),H=n(()=>Object.keys(a).filter(r=>r.startsWith("select-")).reduce((r,o)=>(r[o.substring(7)]=a[o],r),{})),O=n(()=>e.messages??F(e.modelValue,e.rules)),U=r=>{t.value=r,c("update:modelValue",t.value*l.value.id)},w=r=>{l.value=f.find(o=>o.id===r),c("update:modelValue",t.value*l.value.id)},A=()=>{e.modelValue&&(T(e.modelValue)!==0?(l.value=f[T(e.modelValue)],t.value=e.modelValue/l.value.id):t.value=e.modelValue)};return L(()=>e.modelValue,()=>{A()},{immediate:!0}),{selectedUnit:l,numberSlots:C,selectSlots:H,validateOn:g,innerTime:t,timeScale:f,messages:O,style:s,onSubmitTimeScale:w,onSubmitValue:U}}});function _(e,c,g,F,m,a){const d=b("FSNumberField"),i=b("FSSelectField"),u=b("FSBaseField");return P(),R(u,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(d,j({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),y({_:2},[h(e.numberSlots,(t,l)=>({name:l,fn:p(s=>[q(e.$slots,l,$(B(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},y({_:2},[h(e.selectSlots,(t,l)=>({name:l,fn:p(s=>[q(e.$slots,l,$(B(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const dr=K(N,[["render",_]]);N.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{dr as default};