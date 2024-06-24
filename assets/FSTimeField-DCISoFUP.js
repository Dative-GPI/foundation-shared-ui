import{d as U,b as v,c as n,y as b,z as w,A as P,B as p,K as S,m as R,O as y,P as q,L as h,M as $,N as T}from"./vue.esm-bundler-CLWyqtrq.js";import _ from"./FSNumberField-Hev8k8Ih.js";import{F as A}from"./FSSelectField-iDoaqi5b.js";import{F as L}from"./VField-BXxuzAJZ.js";import{_ as k}from"./FSRow-B7tdsi71.js";import{t as f,a as B}from"./time-DShBRzYX.js";import{u as j}from"./useRules-D8GiojYJ.js";import{u as z,C as V}from"./useColors-D61Fe1_L.js";import{u as E}from"./useSlots-YtBg7QOA.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-BJ0CYXhH.js";import"./FSButton-xawrBwn0.js";import"./FSClickable-CX-mXFfM.js";import"./FSCard-CtrctGW7.js";import"./FSCol-B1LPjIXg.js";import"./css-Ca-HPGcF.js";import"./VProgressCircular-D5Exu0y-.js";import"./color-CiZ0sQz8.js";import"./theme-bwyTeVCn.js";import"./useRender-BBsw_RbX.js";import"./resizeObserver-pTuJHNwh.js";import"./VIcon-CTYwU69W.js";import"./tag-CMDXkDN7.js";import"./FSSpan-C4Iz3qX9.js";import"./FSIcon-nvjMvWEC.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./density-BAQxqMxc.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C8D2gGUS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./VSpacer-gQABP9En.js";import"./VLabel-CBBC7WmF.js";import"./loader-BsCFilcr.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./FSDialogMenu-C9Ewv9NN.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-DJ8Wh-Vs.js";import"./FSRadio-YkCJJZtr.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSFadeOut-Cm2RoYLR.js";import"./uuid-DTaye2KM.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./elevation-CB-eCL4u.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VSelect-DovITVmj.js";import"./VMenu-CBjAwdlw.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./useTranslations-BiPIEqtB.js";const N=U({name:"FSTimeField",components:{FSNumberField:_,FSSelectField:A,FSBaseField:L,FSRow:k},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const{validateOn:g,getMessages:F}=j(),{getColors:m}=z(),{slots:a}=E();delete a.label,delete a.description;const u=m(V.Error),i=m(V.Light),d=m(V.Dark),t=v(0),r=v(f[0]);e.modelValue&&(B(e.modelValue)!==0?(r.value=f[B(e.modelValue)],t.value=e.modelValue/r.value.id):t.value=e.modelValue);const s=n(()=>e.editable?{"--fs-time-field-cursor":"text","--fs-time-field-border-color":i.dark,"--fs-time-field-color":d.base,"--fs-time-field-active-border-color":d.dark,"--fs-time-field-error-color":u.base,"--fs-time-field-error-border-color":u.base}:{"--fs-time-field-cursor":"default","--fs-time-field-border-color":i.base,"--fs-time-field-color":i.dark,"--fs-time-field-active-border-color":i.base}),C=n(()=>Object.keys(a).filter(l=>l.startsWith("number-")).reduce((l,o)=>(l[o.substring(7)]=a[o],l),{})),H=n(()=>Object.keys(a).filter(l=>l.startsWith("select-")).reduce((l,o)=>(l[o.substring(7)]=a[o],l),{})),O=n(()=>e.messages??F(e.modelValue,e.rules));return{selectedUnit:r,numberSlots:C,selectSlots:H,validateOn:g,innerTime:t,timeScale:f,messages:O,style:s,onSubmitTimeScale:l=>{r.value=f.find(o=>o.id===l),c("update:modelValue",t.value*r.value.id)},onSubmitValue:l=>{t.value=l,c("update:modelValue",t.value*r.value.id)}}}});function M(e,c,g,F,m,a){const u=b("FSNumberField"),i=b("FSSelectField"),d=b("FSBaseField");return w(),P(d,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:p(()=>[S(k,null,{default:p(()=>[S(u,R({validationValue:e.$props.modelValue,editable:e.$props.editable,validateOn:e.validateOn,rules:e.$props.rules,hideHeader:!0,messages:e.messages,modelValue:e.innerTime,"onUpdate:modelValue":e.onSubmitValue},e.$attrs),y({_:2},[q(e.numberSlots,(t,r)=>({name:r,fn:p(s=>[h(e.$slots,r,$(T(s)))])}))]),1040,["validationValue","editable","validateOn","rules","messages","modelValue","onUpdate:modelValue"]),S(i,{class:"fs-time-field-select",editable:e.$props.editable,hideHeader:!0,clearable:!1,items:e.timeScale,modelValue:e.selectedUnit.id,"onUpdate:modelValue":e.onSubmitTimeScale},y({_:2},[q(e.selectSlots,(t,r)=>({name:r,fn:p(s=>[h(e.$slots,r,$(T(s)))])}))]),1032,["editable","items","modelValue","onUpdate:modelValue"])]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const al=I(N,[["render",M]]);N.__docgenInfo={displayName:"FSTimeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeField.vue"]};export{al as default};