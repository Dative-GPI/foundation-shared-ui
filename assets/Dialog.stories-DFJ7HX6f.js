import{d as w,e as t,c as B,J as f,B as g,D as o,G as j,U as E,P as F,q as u,H as V,K as X,L as Y,F as Z,I as v,m as W,C as Ce,Q as Oe,R as Ie,w as Ke}from"./vue.esm-bundler-D5n7z5qz.js";import{a as Qe,b as je}from"./properties-Qw-O9fbT.js";import{F as Le}from"./FSTranslateField-DGvptx67.js";import{F as Xe}from"./FSPagination-C7JQj1u4.js";import{_ as $}from"./FSFadeOut-YXyyFCAB.js";import{F as m}from"./FSButton-M9GMz66l.js";import{F as Te}from"./FSForm-Bvdkm9sz.js";import{F as q}from"./FSCol-D_lbFmZy.js";import{_ as b}from"./FSRow-DIk8KFbG.js";import{_ as D}from"./FSSpan-BN7wkmby.js";import{_ as Re,a as Me}from"./FSTab-Dn7S9kSa.js";import{F as x}from"./FSIcon-DFkRD0af.js";import{_ as Pe}from"./FSWindow-B_NnUx3E.js";import{D as Ye,b as Ze,F as xe}from"./FSCard-DENSLTM_.js";import{C as y}from"./useColors-COEXNh00.js";import{u as Ne}from"./useBreakpoints-CEzKC_o8.js";import{u as Ae}from"./useTranslations-CFCS6HA-.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as h,a as _e}from"./FSDialog-dI-hxJaf.js";import{F as z}from"./FSTextField-DVC6JxU9.js";import{F as ea}from"./FSDialogSubmit-B04Ucw_W.js";import{F as aa}from"./FSDialogRemove-Bm5W1YyN.js";import{F as ta}from"./FSChip-BmAEKlmX.js";import{F as la}from"./FSText-015IEZHy.js";import"./useAppLanguages-Bn8V9U-N.js";import"./useSlots-CoecqEnp.js";import"./css-CxcvJboa.js";import"./uuid-DTaye2KM.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./density-BTT1solu.js";import"./dimensions-D_nx6Jbk.js";import"./forwardRefs-C-GTDzx5.js";import"./VWindowItem-BmOp3Vtj.js";import"./group-Cx5pids1.js";import"./lazy-Bqido2cx.js";import"./ssrBoot-C79LbZhX.js";import"./VBtn-DtRd7_Uc.js";import"./border-5JTJ2U38.js";import"./elevation-62d6MvS5.js";import"./rounded-BSNeeq4o.js";import"./variant-CRuOwF35.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./position-DfaaINa4.js";import"./router-R_WRJyUs.js";import"./index-C2v-jVLO.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./VSlideGroup-BJAU1y7G.js";import"./display-DvHDH61C.js";import"./goto-nADK4Ssb.js";import"./scopeId-DI6aT8IG.js";import"./easing-DY7PVvcf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./dialog-transition-CBLjbvr6.js";import"./FSBaseField-C_kMSpMl.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./VLabel-DPXmEVvJ.js";import"./index-u79WnTSR.js";const He=w({name:"FSDialogMultiFormBody",components:{FSPagination:Xe,FSFadeOut:$,FSButton:m,FSForm:Te,FSCol:q,FSRow:b,FSSpan:D,FSTabs:Me,FSTab:Re,FSIcon:x,FSWindow:Pe},props:{subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:Ze.Submit},steps:{type:Number,required:!0},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:y.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:y.Primary},load:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},mode:{type:String,required:!1,default:Ye.Pagination},tabsColor:{type:String,required:!1,default:y.Primary}},emits:["click:cancelButton","click:submitButton"],setup(e,{emit:a,slots:l}){const{isMobileSized:r}=Ne(),{$tr:i}=Ae(),s=t(1),p=t(!1),c=t(Array.from({length:e.steps},()=>!1)),d=k=>!!l[k],n=B(()=>{const k={};for(let O=1;O<=e.steps;O++)k[`tab-${O}-icon`]=d(`tab-${O}-icon`);return k}),S=B(()=>`calc(100vh - 42px - ${48+(r.value?24:32)+24+(e.subtitle?(r.value?16:20)+8:0)+(e.steps>1?28:0)+(r.value?36:40)+24}px)`),J=B(()=>s.value==1?e.cancelButtonLabel??i("ui.common.cancel","Cancel"):i("ui.common.back","Back")),K=B(()=>s.value==e.steps?e.submitButtonLabel??i("ui.common.validate","Validate"):i("ui.common.next","Next")),Q=B(()=>s.value==e.steps?e.submitButtonVariant??"full":"standard");return{previousButtonLabel:J,nextButtonVariant:Q,nextButtonLabel:K,currentStep:s,ColorEnum:y,maxHeight:S,valids:c,valid:p,tabIconSlots:n,onPrevious:()=>{s.value>1?s.value--:a("click:cancelButton")},onSubmit:()=>{if(p.value)switch(s.value){case e.steps:a("click:submitButton");break;default:s.value++;break}}}}});function na(e,a,l,r,i,s){const p=v("FSPagination"),c=v("FSForm");return f(),g(q,{gap:"24px"},{default:o(()=>[e.$props.mode==="pagination"?(f(),g(p,{key:0,width:"calc(100% - 16px)",pages:e.$props.steps,modelValue:e.currentStep-1},null,8,["pages","modelValue"])):e.$props.mode==="tabs"?(f(),g(Me,{key:1,tab:e.currentStep-1,color:e.$props.tabsColor,"onUpdate:tab":a[0]||(a[0]=d=>e.currentStep=d+1)},{default:o(()=>[(f(!0),j(Z,null,E(e.$props.steps,(d,n)=>(f(),g(Re,{key:n},{default:o(()=>[F(e.$slots,`tab-${n+1}`,{},()=>[u(b,null,{default:o(()=>[e.tabIconSlots[`tab-${n+1}-icon`]?(f(),g(x,{key:0},{default:o(()=>[F(e.$slots,`tab-${n+1}-icon`)]),_:2},1024)):V("",!0),u(D,{font:n+1===e.currentStep?"text-button":"text-body"},{default:o(()=>[F(e.$slots,`tab-${n+1}-label`,{},()=>[X(Y(e.$tr("ui.tabs.step.default","Step {0}",d)),1)])]),_:2},1032,["font"])]),_:2},1024)])]),_:2},1024))),128))]),_:3},8,["tab","color"])):V("",!0),u(Pe,{width:"100%",modelValue:e.currentStep-1},{default:o(()=>[(f(!0),j(Z,null,E(e.$props.steps,(d,n)=>(f(),g(c,{variant:e.$props.variant,key:n,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[2]||(a[2]=S=>e.valid=S)},{default:o(()=>[u(q,{gap:"24px"},{default:o(()=>[u($,{maxHeight:e.maxHeight},{default:o(()=>[F(e.$slots,`step-${d}`)]),_:2},1032,["maxHeight"]),u(b,null,{default:o(()=>[F(e.$slots,"left-footer"),u(b,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:o(()=>[e.$props.showCancelButton||e.currentStep>1?(f(),g(m,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.previousButtonLabel,onClick:a[1]||(a[1]=S=>e.onPrevious())},null,8,["prependIcon","appendIcon","variant","color","label"])):V("",!0),e.$props.showSubmitButton||e.currentStep<e.$props.steps?(f(),g(m,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,color:e.$props.submitButtonColor,variant:e.nextButtonVariant,disabled:e.$props.disabled,label:e.nextButtonLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","color","variant","disabled","label","load"])):V("",!0)]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])]),_:3})}const oa=C(He,[["render",na]]);He.__docgenInfo={displayName:"FSDialogMultiFormBody",exportName:"default",description:"",tags:{},props:[{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",type:{name:"DialogMultiFormVariant"},required:!1,defaultValue:{func:!1,value:"DialogMultiFormVariants.Submit"}},{name:"steps",type:{name:"number"},required:!0},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"mode",type:{name:"DialogMultiFormMode"},required:!1,defaultValue:{func:!1,value:"DialogMultiFormModes.Pagination"}},{name:"tabsColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"}],slots:[{name:"`tab-${index + 1}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`tab-${index + 1}-icon`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`tab-${index + 1}-label`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiFormBody.vue"]};const Ue=w({name:"FSDialogMultiForm",components:{FSDialogMultiFormBody:oa,FSDialog:h},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0}},emits:["update:modelValue","click:submitButton"],setup(){return{}}});function ra(e,a,l,r,i,s){const p=v("FSDialogMultiFormBody"),c=v("FSDialog");return f(),g(c,W({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=d=>e.$emit("update:modelValue",d))},e.$attrs),{body:o(()=>[u(p,W({subtitle:e.$props.subtitle,steps:e.$props.steps,"onClick:submitButton":a[0]||(a[0]=d=>e.$emit("click:submitButton")),"onClick:cancelButton":a[1]||(a[1]=d=>e.$emit("update:modelValue",!1))},e.$attrs),Ce({_:2},[E(e.$slots,(d,n)=>({name:n,fn:o(S=>[F(e.$slots,n,Oe(Ie(S)))])}))]),1040,["subtitle","steps"])]),_:3},16,["subtitle","title","width","modelValue"])}const Ee=C(Ue,[["render",ra]]);Ue.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};const We=w({name:"FSDialogFormBody",components:{FSFadeOut:$,FSButton:m,FSForm:Te,FSRow:b},props:{variant:{type:String,required:!1,default:"submit"},subtitle:{type:String,required:!1,default:null},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:y.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:y.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:y.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},emits:["click:cancelButton","click:submitButton","click:validateButton","update:isValidForm"],setup(e,{emit:a}){const{isMobileSized:l}=Ne(),{$tr:r}=Ae(),i=t(null),s=t(null),p=B(()=>`calc(100vh - 42px - ${48+(l.value?24:32)+24+(e.subtitle?(l.value?16:20)+8:0)+(l.value?36:40)+24}px)`),c=B(()=>e.cancelButtonLabel??r("ui.common.cancel","Cancel")),d=B(()=>e.submitButtonLabel??r("ui.common.submit","Submit")),n=B(()=>e.validateButtonLabel??r("ui.common.validate","Validate")),S=()=>{i.value&&i.value.resetValidation()},J=async()=>{if(i.value)return await i.value.validate()},K=()=>{s.value&&a("click:submitButton")},Q=()=>{a("click:validateButton")};return Ke(()=>s.value,()=>{a("update:isValidForm",s.value)},{immediate:!0}),{resetFormValidation:S,validateLabel:n,validateForm:J,isValidForm:s,cancelLabel:c,submitLabel:d,onValidate:Q,ColorEnum:y,maxHeight:p,onSubmit:K,formRef:i}}});function ia(e,a,l,r,i,s){const p=v("FSForm");return e.$props.validation?(f(),g(q,{key:1,gap:"24px"},{default:o(()=>[u($,{maxHeight:e.maxHeight},{default:o(()=>[F(e.$slots,"validation")]),_:3},8,["maxHeight"]),u(b,null,{default:o(()=>[F(e.$slots,"left-footer"),u(b,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:o(()=>[u(m,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(f(),g(p,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.isValidForm,"onUpdate:modelValue":a[1]||(a[1]=c=>e.isValidForm=c)},{default:o(()=>[u(q,{gap:"24px"},{default:o(()=>[u($,{maxHeight:e.maxHeight},{default:o(()=>[F(e.$slots,"body")]),_:3},8,["maxHeight"]),u(b,null,{default:o(()=>[F(e.$slots,"left-footer"),e.$props.showCancelButton||e.$props.showSubmitButton?(f(),g(b,{key:0,class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:o(()=>[e.$props.showCancelButton?(f(),g(m,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"])):V("",!0),e.$props.showSubmitButton?(f(),g(m,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,disabled:e.$props.disabled,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","disabled","label","load"])):V("",!0)]),_:1})):V("",!0)]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const ua=C(We,[["render",ia]]);We.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"},{name:"update:isValidForm"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const ze=w({name:"FSDialogForm",components:{FSDialogFormBody:ua,FSDialog:h},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){const l=t(null),r=t(!1);return{resetFormValidation:()=>{l.value&&l.value.resetFormValidation()},validateForm:async()=>{if(l.value)return await l.value.validateForm()},isValidForm:r,onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},bodyRef:l,onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function sa(e,a,l,r,i,s){const p=v("FSDialogFormBody"),c=v("FSDialog");return f(),g(c,W({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:o(()=>[u(p,W({ref:"bodyRef"},e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=d=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=d=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate,"onUpdate:isValidForm":a[2]||(a[2]=d=>e.isValidForm=d)}),Ce({_:2},[E(e.$slots,(d,n)=>({name:n,fn:o(S=>[F(e.$slots,n,Oe(Ie(S)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const G=C(ze,[["render",sa]]);ze.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const Ge=w({name:"DialogFormRef",components:{FSDialogForm:G,FSTranslateField:Le,FSButton:m,FSText:la},setup(){const e=t(null),a=t(null),l=t(!1),r=t("");return{resetValidation:()=>{e.value&&e.value.resetFormValidation()},isValidForm:a,dialogRef:e,validate:async()=>{if(e.value){if(!(await e.value.validateForm()).valid)return;console.log("validated")}},value:l,label:r}}});function da(e,a,l,r,i,s){const p=v("FSTranslateField"),c=v("FSText"),d=v("FSDialogForm");return f(),j(Z,null,[u(m,{color:"primary",label:"Manual validation dialog",onClick:a[0]||(a[0]=()=>e.value=!0)}),u(d,{ref:"dialogRef",width:"500px",title:"Manual validation dialog",modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=n=>e.value=n),"onUpdate:isValidForm":a[5]||(a[5]=n=>e.isValidForm=n)},{body:o(()=>[u(p,{label:"Label 5",required:!0,rules:[n=>!!n||"Label is required"],modelValue:e.label,"onUpdate:modelValue":a[1]||(a[1]=n=>e.label=n)},null,8,["rules","modelValue"]),u(m,{label:"ValidateForm",onClick:a[2]||(a[2]=n=>e.validate())}),u(m,{label:"ResetFormValidation",onClick:a[3]||(a[3]=n=>e.resetValidation())}),u(c,null,{default:o(()=>[X(" The current validity of the form is: "+Y(e.isValidForm==!0),1)]),_:1}),u(c,null,{default:o(()=>[X(" The dialogRef is null : "+Y(e.dialogRef==null),1)]),_:1})]),_:1},8,["modelValue"])],64)}const ma=C(Ge,[["render",da]]);Ge.__docgenInfo={displayName:"DialogFormRef",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/dialogs/DialogFormRef.vue"]};const Pt={title:"Foundation/Shared/Dialog",component:h,tags:["autodocs"],argTypes:{...je([_e],h),...Qe(h)}},I={render:e=>({components:{FSDialog:h},setup(){return{args:e}},template:`
      <FSDialog
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!0,title:"Basic dialog",width:"500px"}},L={render:e=>({components:{FSDialogSubmit:ea,FSSpan:D,FSButton:m},setup(){const a=t(!1);return{args:e,dialogOpen:a}},template:`
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="dialogOpen = true"
      />
      <FSDialogSubmit
        v-model="dialogOpen"
        v-bind="args"
      >
        <template #body>
          <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    `}),args:{width:"500px",title:"Form 1",showCancelButton:!0,showSubmitButton:!0}},T={render:e=>({components:{FSDialogForm:G,FSTextField:z,FSButton:m,FSRow:b},setup(){const a=t(!1),l=t("");return{args:e,dialogOpen:a,label:l}},template:`
      <FSButton
        color="primary"
        label="Dialog form"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
      >
        <template #body>
          <FSTextField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
      </FSDialogForm>
    `}),args:{width:"500px",title:"Form 1",subtitle:"Fill the form"}},R={render:e=>({components:{FSDialogForm:G,FSTextField:z,FSSpan:D,FSButton:m},setup(){const a=t(!1),l=t(!1),r=t("");return{args:e,dialogOpen:a,validation:l,label:r}},template:`
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
        :validation="validation"
        @click:submitButton="validation = true"
        @click:validateButton="() => { validation = false; dialogOpen = false; }"
      >
        <template #body>
          <FSTextField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
        <template #validation>
          <FSSpan color="success">
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
    `}),args:{width:"500px",title:"Form with validation",subtitle:"Fill the form"}},M={render:e=>({components:{FSDialogForm:G,FSTranslateField:Le,FSButton:m},setup(){const a=t(!1),l=t("");return{args:e,dialogOpen:a,label:l}},template:`
      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
      >
        <template #body>
          <FSTranslateField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
      </FSDialogForm>
    `}),args:{width:"500px",title:"No buttons dialog",showCancelButton:!1,showSubmitButton:!1}},P={render:()=>({components:{DialogFormRef:ma},template:"<DialogFormRef />"})},N={render:e=>({components:{FSDialogMultiForm:Ee,FSTextField:z,FSButton:m},setup(){const a=t(!1),l=t(""),r=t(""),i=t("");return{args:e,dialogOpen:a,label1:l,label2:r,label3:i}},template:`
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="dialogOpen = true"
      />
      <FSDialogMultiForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
      >
        <template #step-1>
          <FSTextField label="Label 1" v-model="label1" />
        </template>
        <template #step-2>
          <FSTextField label="Label 2" v-model="label2" />
        </template>
        <template #step-3>
          <FSTextField label="Label 3" v-model="label3" />
        </template>
      </FSDialogMultiForm>
    `}),args:{width:"500px",title:"Form 1",subtitle:"3 pages form",showCancelButton:!0,showSubmitButton:!0,steps:3}},A={render:e=>({components:{FSDialogRemove:aa,FSButton:m,FSRow:b},setup(){const a=t(!1),l=t(!1),r=t(!1),i=t(!1),s=t(!1),p=t(!1);return{args:e,dialog1:a,removing1:l,dialog2:r,removing2:i,dialog3:s,removing3:p}},template:`
      <FSRow gap="10px">
        <FSButton
          label="Dialog - singular"
          @click="dialog1 = true"
        />
        <FSButton
          label="Dialog - plural"
          @click="dialog2 = true"
        />
        <FSButton
          label="Dialog - large number"
          @click="dialog3 = true"
        />

        <FSDialogRemove
          v-model="dialog1"
          :removeTotal="1"
          :removing="removing1"
          @click:submitButton="removing1 = true"
        />
        <FSDialogRemove
          v-model="dialog2"
          :removeTotal="12"
          :removing="removing2"
          @click:submitButton="removing2 = true"
        />
        <FSDialogRemove
          v-model="dialog3"
          :removeTotal="9999999"
          :removing="removing3"
          @click:submitButton="removing3 = true"
        />
      </FSRow>
    `}),args:{}},H={render:e=>({components:{FSDialog:h,FSFadeOut:$,FSCard:xe,FSCol:q,FSSpan:D,FSButton:m},setup(){const a=t(!1);return{args:e,dialogOpen:a}},template:`
      <FSButton
        color="primary"
        label="Dialog fullscreen"
        @click="dialogOpen = true"
      />
      <FSDialog
        v-model="dialogOpen"
        v-bind="args"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="dialogOpen = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialog>
    `}),args:{title:"Form 1",fullscreen:!0,width:"100%"}},U={render:e=>({components:{FSDialogMultiForm:Ee,FSTextField:z,FSButton:m,FSRow:b,FSSpan:D,FSIcon:x,FSChip:ta},setup(){const a=t(!1),l=t(""),r=t(""),i=t("");return{args:e,dialogOpen:a,label1:l,label2:r,label3:i}},template:`
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="dialogOpen = true"
      />
      <FSDialogMultiForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
      >
        <template #tab-1>
          <FSRow gap="8px">
            <FSIcon>mdi-cog</FSIcon>
            <FSSpan>Configuration</FSSpan>
            <FSChip label="2" />
          </FSRow>
        </template>
        <template #tab-2-icon>mdi-home</template>
        <template #tab-2-label>Home</template>
        <template #step-1>
          <FSTextField label="Label 1" v-model="label1" />
        </template>
        <template #step-2>
          <FSTextField label="Label 2" v-model="label2" />
        </template>
        <template #step-3>
          <FSTextField label="Label 3" v-model="label3" />
        </template>
      </FSDialogMultiForm>
    `}),args:{width:"500px",title:"Form 1",subtitle:"3 pages form",showCancelButton:!0,showSubmitButton:!0,steps:3,mode:"tabs"}};var _,ee,ae;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialog
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDialog
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: true,
    title: "Basic dialog",
    width: "500px"
  }
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,le,ne;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogSubmit,
      FSSpan,
      FSButton
    },
    setup() {
      const dialogOpen = ref(false);
      return {
        args,
        dialogOpen
      };
    },
    template: \`
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="dialogOpen = true"
      />
      <FSDialogSubmit
        v-model="dialogOpen"
        v-bind="args"
      >
        <template #body>
          <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    \`
  }),
  args: {
    width: "500px",
    title: "Form 1",
    showCancelButton: true,
    showSubmitButton: true
  }
}`,...(ne=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,re,ie;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogForm,
      FSTextField,
      FSButton,
      FSRow
    },
    setup() {
      const dialogOpen = ref(false);
      const label = ref("");
      return {
        args,
        dialogOpen,
        label
      };
    },
    template: \`
      <FSButton
        color="primary"
        label="Dialog form"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
      >
        <template #body>
          <FSTextField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
      </FSDialogForm>
    \`
  }),
  args: {
    width: "500px",
    title: "Form 1",
    subtitle: "Fill the form"
  }
}`,...(ie=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ue,se,de;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogForm,
      FSTextField,
      FSSpan,
      FSButton
    },
    setup() {
      const dialogOpen = ref(false);
      const validation = ref(false);
      const label = ref("");
      return {
        args,
        dialogOpen,
        validation,
        label
      };
    },
    template: \`
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
        :validation="validation"
        @click:submitButton="validation = true"
        @click:validateButton="() => { validation = false; dialogOpen = false; }"
      >
        <template #body>
          <FSTextField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
        <template #validation>
          <FSSpan color="success">
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
    \`
  }),
  args: {
    width: "500px",
    title: "Form with validation",
    subtitle: "Fill the form"
  }
}`,...(de=(se=R.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var me,pe,fe;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogForm,
      FSTranslateField,
      FSButton
    },
    setup() {
      const dialogOpen = ref(false);
      const label = ref("");
      return {
        args,
        dialogOpen,
        label
      };
    },
    template: \`
      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
      >
        <template #body>
          <FSTranslateField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
      </FSDialogForm>
    \`
  }),
  args: {
    width: "500px",
    title: "No buttons dialog",
    showCancelButton: false,
    showSubmitButton: false
  }
}`,...(fe=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ce,ge,be;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DialogFormRef
    },
    template: \`<DialogFormRef />\`
  })
}`,...(be=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Fe,Se,ve;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogMultiForm,
      FSTextField,
      FSButton
    },
    setup() {
      const dialogOpen = ref(false);
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");
      return {
        args,
        dialogOpen,
        label1,
        label2,
        label3
      };
    },
    template: \`
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="dialogOpen = true"
      />
      <FSDialogMultiForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
      >
        <template #step-1>
          <FSTextField label="Label 1" v-model="label1" />
        </template>
        <template #step-2>
          <FSTextField label="Label 2" v-model="label2" />
        </template>
        <template #step-3>
          <FSTextField label="Label 3" v-model="label3" />
        </template>
      </FSDialogMultiForm>
    \`
  }),
  args: {
    width: "500px",
    title: "Form 1",
    subtitle: "3 pages form",
    showCancelButton: true,
    showSubmitButton: true,
    steps: 3
  }
}`,...(ve=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var Be,ye,Ve;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogRemove,
      FSButton,
      FSRow
    },
    setup() {
      const dialog1 = ref(false);
      const removing1 = ref(false);
      const dialog2 = ref(false);
      const removing2 = ref(false);
      const dialog3 = ref(false);
      const removing3 = ref(false);
      return {
        args,
        dialog1,
        removing1,
        dialog2,
        removing2,
        dialog3,
        removing3
      };
    },
    template: \`
      <FSRow gap="10px">
        <FSButton
          label="Dialog - singular"
          @click="dialog1 = true"
        />
        <FSButton
          label="Dialog - plural"
          @click="dialog2 = true"
        />
        <FSButton
          label="Dialog - large number"
          @click="dialog3 = true"
        />

        <FSDialogRemove
          v-model="dialog1"
          :removeTotal="1"
          :removing="removing1"
          @click:submitButton="removing1 = true"
        />
        <FSDialogRemove
          v-model="dialog2"
          :removeTotal="12"
          :removing="removing2"
          @click:submitButton="removing2 = true"
        />
        <FSDialogRemove
          v-model="dialog3"
          :removeTotal="9999999"
          :removing="removing3"
          @click:submitButton="removing3 = true"
        />
      </FSRow>
    \`
  }),
  args: {}
}`,...(Ve=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Ve.source}}};var he,$e,qe;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialog,
      FSFadeOut,
      FSCard,
      FSCol,
      FSSpan,
      FSButton
    },
    setup() {
      const dialogOpen = ref(false);
      return {
        args,
        dialogOpen
      };
    },
    template: \`
      <FSButton
        color="primary"
        label="Dialog fullscreen"
        @click="dialogOpen = true"
      />
      <FSDialog
        v-model="dialogOpen"
        v-bind="args"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="dialogOpen = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialog>
    \`
  }),
  args: {
    title: "Form 1",
    fullscreen: true,
    width: "100%"
  }
}`,...(qe=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var De,ke,we;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogMultiForm,
      FSTextField,
      FSButton,
      FSRow,
      FSSpan,
      FSIcon,
      FSChip
    },
    setup() {
      const dialogOpen = ref(false);
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");
      return {
        args,
        dialogOpen,
        label1,
        label2,
        label3
      };
    },
    template: \`
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="dialogOpen = true"
      />
      <FSDialogMultiForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
      >
        <template #tab-1>
          <FSRow gap="8px">
            <FSIcon>mdi-cog</FSIcon>
            <FSSpan>Configuration</FSSpan>
            <FSChip label="2" />
          </FSRow>
        </template>
        <template #tab-2-icon>mdi-home</template>
        <template #tab-2-label>Home</template>
        <template #step-1>
          <FSTextField label="Label 1" v-model="label1" />
        </template>
        <template #step-2>
          <FSTextField label="Label 2" v-model="label2" />
        </template>
        <template #step-3>
          <FSTextField label="Label 3" v-model="label3" />
        </template>
      </FSDialogMultiForm>
    \`
  }),
  args: {
    width: "500px",
    title: "Form 1",
    subtitle: "3 pages form",
    showCancelButton: true,
    showSubmitButton: true,
    steps: 3,
    mode: "tabs"
  }
}`,...(we=(ke=U.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};const Nt=["Default","Submit","Form","FormWithValidation","FormNoButtons","FormRef","MultipleForm","Remove","FullScreen","TabsForm"];export{I as Default,T as Form,M as FormNoButtons,P as FormRef,R as FormWithValidation,H as FullScreen,N as MultipleForm,A as Remove,L as Submit,U as TabsForm,Nt as __namedExportsOrder,Pt as default};
