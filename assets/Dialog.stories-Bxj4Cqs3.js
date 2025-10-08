import{F as fe}from"./FSTranslateField-D_9C7THl.js";import{d as q,b as v,c as y,B as g,J as s,E as l,H as w,k as n,I as S,C as W,S as A,O as b,A as J,K,F as Q,m as H,D as ce,P as ge,Q as be,w as Te}from"./vue.esm-bundler-CocPPKUI.js";import{F as Le}from"./FSPagination-fR6FUjCx.js";import{_ as $}from"./FSFadeOut-BaaWP8Xe.js";import{F as d}from"./FSButton-VjwKfCr9.js";import{F as ve}from"./FSForm-DtfEUZJL.js";import{F as B}from"./FSCol-79-COv64.js";import{_ as c}from"./FSRow-BvJ7lU5E.js";import{_ as V}from"./FSSpan-DrSEJIpr.js";import{a as Fe,_ as Se}from"./FSTab-DFPQ5bpA.js";import{F as G}from"./FSIcon-CKNHHVc2.js";import{_ as Be}from"./FSWindow-D3STb6jq.js";import{C as h}from"./useColors-DUufJJPH.js";import{u as ye}from"./useBreakpoints-DZlz3-56.js";import{u as he}from"./useTranslations-DJaIYmO0.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSDialog-Da78Hskl.js";import{F as D}from"./FSTextField-CrSrBFtk.js";import{F as Re}from"./FSDialogSubmit-na6ulupt.js";import{F as Pe}from"./FSDialogRemove-Cam0k-Pi.js";import{F as I}from"./FSCard-JQNJPDhp.js";import{F as Me}from"./FSText-U805njuH.js";import{F as Oe}from"./FSChip-FYuzsxJw.js";import"./useAppLanguages-YxeLYIRF.js";import"./useSlots-D4bv69lA.js";import"./css-mt76hoAn.js";import"./uuid-DTaye2KM.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./theme-DhcBBMcp.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./VInput-DhPQv4YC.js";import"./locale-_fONYh-8.js";import"./index-DfBdMsnv.js";import"./transition-BuKnRONq.js";import"./density-DZuLaB-B.js";import"./dimensions-C9PuMYcl.js";import"./proxiedModel-DvocDLKO.js";import"./forwardRefs-C-GTDzx5.js";import"./VWindowItem-Dr9-Ppmb.js";import"./group-CbiZXdYV.js";import"./lazy-CpkO2kQj.js";import"./ssrBoot-B-cFki3l.js";import"./VBtn-Cjbcb1KM.js";import"./border-B0huqYee.js";import"./elevation-CsFMJmSN.js";import"./rounded-Cjf6r1y4.js";import"./loader-B3-0Tc48.js";import"./anchor-C7UfIAXa.js";import"./router-Btsphvl6.js";import"./index-BgX1FNqJ.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./VSlideGroup-D3ZQzm0f.js";import"./display-BmuJHlI4.js";import"./scopeId-LQkRlG9f.js";import"./easing-DY7PVvcf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./FSBaseField-BHCTmkg_.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./VLabel-HvE-XSAC.js";import"./index-lkzvYdnq.js";const Ve=q({name:"FSDialogMultiFormBody",components:{FSPagination:Le,FSFadeOut:$,FSButton:d,FSForm:ve,FSCol:B,FSRow:c,FSSpan:V,FSTabs:Se,FSTab:Fe,FSIcon:G,FSWindow:Be},props:{subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},steps:{type:Number,required:!0},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:h.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:h.Primary},load:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},mode:{type:String,required:!1,default:"pagination"},tabsColor:{type:String,required:!1,default:h.Primary}},emits:["click:cancelButton","click:submitButton"],setup(e,{emit:a,slots:u}){const{isMobileSized:m}=ye(),{$tr:i}=he(),r=v(1),p=v(!1),f=v(Array.from({length:e.steps},()=>!1)),o=k=>!!u[k],t=y(()=>{const k={};for(let T=1;T<=e.steps;T++)k[`tab-${T}-icon`]=o(`tab-${T}-icon`);return k}),F=y(()=>`calc(100vh - 42px - ${48+(m.value?24:32)+24+(e.subtitle?(m.value?16:20)+8:0)+(e.steps>1?28:0)+(m.value?36:40)+24}px)`),E=y(()=>r.value==1?e.cancelButtonLabel??i("ui.common.cancel","Cancel"):i("ui.common.back","Back")),U=y(()=>r.value==e.steps?e.submitButtonLabel??i("ui.common.validate","Validate"):i("ui.common.next","Next")),z=y(()=>r.value==e.steps?e.submitButtonVariant??"full":"standard");return{previousButtonLabel:E,nextButtonVariant:z,nextButtonLabel:U,currentStep:r,ColorEnum:h,maxHeight:F,valids:f,valid:p,tabIconSlots:t,onPrevious:()=>{r.value>1?r.value--:a("click:cancelButton")},onSubmit:()=>{if(p.value)switch(r.value){case e.steps:a("click:submitButton");break;default:r.value++;break}}}}});function Ne(e,a,u,m,i,r){const p=S("FSPagination"),f=S("FSForm");return s(),g(B,{gap:"24px"},{default:l(()=>[e.$props.mode==="pagination"?(s(),g(p,{key:0,width:"calc(100% - 16px)",pages:e.$props.steps,modelValue:e.currentStep-1},null,8,["pages","modelValue"])):e.$props.mode==="tabs"?(s(),g(Se,{key:1,tab:e.currentStep-1,color:e.$props.tabsColor,"onUpdate:tab":a[0]||(a[0]=o=>e.currentStep=o+1)},{default:l(()=>[(s(!0),W(Q,null,A(e.$props.steps,(o,t)=>(s(),g(Fe,{key:t},{default:l(()=>[b(e.$slots,`tab-${t+1}`,{},()=>[n(c,null,{default:l(()=>[e.tabIconSlots[`tab-${t+1}-icon`]?(s(),g(G,{key:0},{default:l(()=>[b(e.$slots,`tab-${t+1}-icon`)]),_:2},1024)):w("",!0),n(V,{font:t+1===e.currentStep?"text-button":"text-body"},{default:l(()=>[b(e.$slots,`tab-${t+1}-label`,{},()=>[J(K(e.$tr("ui.tabs.step.default","Step {0}",o)),1)])]),_:2},1032,["font"])]),_:2},1024)])]),_:2},1024))),128))]),_:3},8,["tab","color"])):w("",!0),n(Be,{width:"100%",modelValue:e.currentStep-1},{default:l(()=>[(s(!0),W(Q,null,A(e.$props.steps,(o,t)=>(s(),g(f,{variant:e.$props.variant,key:t,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[2]||(a[2]=F=>e.valid=F)},{default:l(()=>[n(B,{gap:"24px"},{default:l(()=>[n($,{maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,`step-${o}`)]),_:2},1032,["maxHeight"]),n(c,null,{default:l(()=>[b(e.$slots,"left-footer"),n(c,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[e.$props.showCancelButton||e.currentStep>1?(s(),g(d,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.previousButtonLabel,onClick:a[1]||(a[1]=F=>e.onPrevious())},null,8,["prependIcon","appendIcon","variant","color","label"])):w("",!0),e.$props.showSubmitButton||e.currentStep<e.$props.steps?(s(),g(d,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,color:e.$props.submitButtonColor,variant:e.nextButtonVariant,disabled:e.$props.disabled,label:e.nextButtonLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","color","variant","disabled","label","load"])):w("",!0)]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])]),_:3})}const Ae=C(Ve,[["render",Ne]]);Ve.__docgenInfo={displayName:"FSDialogMultiFormBody",exportName:"default",description:"",tags:{},props:[{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"steps",type:{name:"number"},required:!0},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"mode",values:["pagination","tabs"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"pagination"'}},{name:"tabsColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"}],slots:[{name:"`tab-${index + 1}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`tab-${index + 1}-icon`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`tab-${index + 1}-label`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiFormBody.vue"]};const we=q({name:"FSDialogMultiForm",components:{FSDialogMultiFormBody:Ae,FSDialog:j},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0}},emits:["update:modelValue","click:submitButton"],setup(){return{}}});function He(e,a,u,m,i,r){const p=S("FSDialogMultiFormBody"),f=S("FSDialog");return s(),g(f,H({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=o=>e.$emit("update:modelValue",o))},e.$attrs),{body:l(()=>[n(p,H({subtitle:e.$props.subtitle,steps:e.$props.steps,"onClick:submitButton":a[0]||(a[0]=o=>e.$emit("click:submitButton")),"onClick:cancelButton":a[1]||(a[1]=o=>e.$emit("update:modelValue",!1))},e.$attrs),ce({_:2},[A(e.$slots,(o,t)=>({name:t,fn:l(F=>[b(e.$slots,t,ge(be(F)))])}))]),1040,["subtitle","steps"])]),_:3},16,["subtitle","title","width","modelValue"])}const $e=C(we,[["render",He]]);we.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};const ke=q({name:"FSDialogFormBody",components:{FSFadeOut:$,FSButton:d,FSForm:ve,FSRow:c},props:{variant:{type:String,required:!1,default:"submit"},subtitle:{type:String,required:!1,default:null},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:h.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:h.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:h.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},emits:["click:cancelButton","click:submitButton","click:validateButton","update:isValidForm"],setup(e,{emit:a}){const{isMobileSized:u}=ye(),{$tr:m}=he(),i=v(null),r=v(null),p=y(()=>`calc(100vh - 42px - ${48+(u.value?24:32)+24+(e.subtitle?(u.value?16:20)+8:0)+(u.value?36:40)+24}px)`),f=y(()=>e.cancelButtonLabel??m("ui.common.cancel","Cancel")),o=y(()=>e.submitButtonLabel??m("ui.common.submit","Submit")),t=y(()=>e.validateButtonLabel??m("ui.common.validate","Validate")),F=()=>{i.value&&i.value.resetValidation()},E=async()=>{if(i.value)return await i.value.validate()},U=()=>{r.value&&a("click:submitButton")},z=()=>{a("click:validateButton")};return Te(()=>r.value,()=>{a("update:isValidForm",r.value)},{immediate:!0}),{resetFormValidation:F,validateLabel:t,validateForm:E,isValidForm:r,cancelLabel:f,submitLabel:o,onValidate:z,ColorEnum:h,maxHeight:p,onSubmit:U,formRef:i}}});function je(e,a,u,m,i,r){const p=S("FSForm");return e.$props.validation?(s(),g(B,{key:1,gap:"24px"},{default:l(()=>[n($,{maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"validation")]),_:3},8,["maxHeight"]),n(c,null,{default:l(()=>[b(e.$slots,"left-footer"),n(c,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[n(d,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(s(),g(p,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.isValidForm,"onUpdate:modelValue":a[1]||(a[1]=f=>e.isValidForm=f)},{default:l(()=>[n(B,{gap:"24px"},{default:l(()=>[n($,{maxHeight:e.maxHeight},{default:l(()=>[b(e.$slots,"body")]),_:3},8,["maxHeight"]),n(c,null,{default:l(()=>[b(e.$slots,"left-footer"),n(c,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[e.$props.showCancelButton?(s(),g(d,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"])):w("",!0),e.$props.showSubmitButton?(s(),g(d,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,disabled:e.$props.disabled,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","disabled","label","load"])):w("",!0)]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const Ee=C(ke,[["render",je]]);ke.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"},{name:"update:isValidForm"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const qe=q({name:"FSDialogForm",components:{FSDialogFormBody:Ee,FSDialog:j},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){const u=v(null),m=v(!1);return{resetFormValidation:()=>{u.value&&u.value.resetFormValidation()},validateForm:async()=>{if(u.value)return await u.value.validateForm()},isValidForm:m,onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},bodyRef:u,onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function Ue(e,a,u,m,i,r){const p=S("FSDialogFormBody"),f=S("FSDialog");return s(),g(f,H({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:l(()=>[n(p,H({ref:"bodyRef"},e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=o=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=o=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate,"onUpdate:isValidForm":a[2]||(a[2]=o=>e.isValidForm=o)}),ce({_:2},[A(e.$slots,(o,t)=>({name:t,fn:l(F=>[b(e.$slots,t,ge(be(F)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const Ce=C(qe,[["render",Ue]]);qe.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const De=q({name:"DialogFormRef",components:{FSDialogForm:Ce,FSTranslateField:fe,FSButton:d,FSText:Me},setup(){const e=v(null),a=v(null),u=v(!1),m=v("");return{resetValidation:()=>{e.value&&e.value.resetFormValidation()},isValidForm:a,dialogRef:e,validate:async()=>{if(e.value){if(!(await e.value.validateForm()).valid)return;console.log("validated")}},value:u,label:m}}});function ze(e,a,u,m,i,r){const p=S("FSTranslateField"),f=S("FSText"),o=S("FSDialogForm");return s(),W(Q,null,[n(d,{color:"primary",label:"Manual validation dialog",onClick:a[0]||(a[0]=()=>e.value=!0)}),n(o,{ref:"dialogRef",width:"500px",title:"Manual validation dialog",modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=t=>e.value=t),"onUpdate:isValidForm":a[5]||(a[5]=t=>e.isValidForm=t)},{body:l(()=>[n(p,{label:"Label 5",required:!0,rules:[t=>!!t||"Label is required"],modelValue:e.label,"onUpdate:modelValue":a[1]||(a[1]=t=>e.label=t)},null,8,["rules","modelValue"]),n(d,{label:"ValidateForm",onClick:a[2]||(a[2]=t=>e.validate())}),n(d,{label:"ResetFormValidation",onClick:a[3]||(a[3]=t=>e.resetValidation())}),n(f,null,{default:l(()=>[J(" The current validity of the form is: "+K(e.isValidForm==!0),1)]),_:1}),n(f,null,{default:l(()=>[J(" The dialogRef is null : "+K(e.dialogRef==null),1)]),_:1})]),_:1},8,["modelValue"])],64)}const We=C(De,[["render",ze]]);De.__docgenInfo={displayName:"DialogFormRef",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/dialogs/DialogFormRef.vue"]};const ut={title:"Foundation/Shared/Dialog",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},L={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0},render:(e,{argTypes:a})=>({components:{FSDialogSubmit:Re,FSTextField:D,FSButton:d,FSCard:I,FSSpan:V,FSCol:B,FSRow:c},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        width="500px"
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="args.value1"
      >
        <template #body>
          <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    </div>`})},R={args:{value1:!1,value2:!1,value4:!1,validation2:!1,label1:"",label2:"",label4:""},render:(e,{argTypes:a})=>({components:{FSTranslateField:fe,FSDialogForm:Ce,FSTextField:D,FSButton:d,FSCard:I,FSSpan:V,FSCol:B,FSRow:c,DialogFormRef:We},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog form"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 1"
        subtitle="Fill the form"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #body>
          <FSTextField
            label="Label 1"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label1"
          />
        </template>
      </FSDialogForm>
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="() => args.value2 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 2"
        subtitle="Fill the form"
        :validation="args.validation2"
        @click:submitButton="() => {
          args.validation2 = true;
        }"
        @click:validateButton="() => {
          args.validation2 = false;
          args.value2 = false;
        }"
        v-model="args.value2"
      >
        <template #body>
          <FSTextField
            label="Label 2"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label2"
          />
        </template>
        <template #validation>
          <FSSpan
            color="success"
          >
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
      

      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="() => args.value4 = true"
      />
      <FSDialogForm
        width="500px"
        title="No buttons dialog"
        :showCancelButton="false"
        :showSubmitButton="false"
        v-model="args.value4"
      >
        <template #body>
          <FSTranslateField
            label="Label 4"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label4"
          />
        </template>
      </FSDialogForm>
      <DialogFormRef/> 
    </div>`})},P={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0,label11:"",label12:""},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:$e,FSTextField:D,FSButton:d,FSCard:I,FSSpan:V,FSCol:B,FSRow:c},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        title="Form 1"
        subtitle="3 pages form"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        :steps="3"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #step-1>
          <FSTextField
            label="Label 1"
            v-model="args.label1"
          />
        </template>
        <template #step-2>
          <FSTextField
            label="Label 2"
            v-model="args.label2"
          />
        </template>
        <template #step-3>
          <FSTextField
            label="Label 3"
            v-model="args.label3"
          />
        </template>
      </FSDialogMultiForm>
    </div>`})},M={args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1},render:(e,{argTypes:a})=>({components:{FSDialogRemove:Pe,FSButton:d,FSCard:I,FSSpan:V,FSCol:B,FSRow:c},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSDialogRemove
        :removeTotal="1"
        :removing="args.removing1"
        @click:submitButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:submitButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:submitButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>`})},O={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0},render:(e,{argTypes:a})=>({components:{FSDialog:j,FSTextField:D,FSButton:d,FSCard:I,FSSpan:V,FSCol:B,FSRow:c,FSFadeOut:$},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialog
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="value1"
        :fullscreen="true"
        width="100%"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="() => args.value1 = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialogForm>
    </div>`})},N={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0,label1:"",label2:"",label3:""},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:$e,FSTextField:D,FSButton:d,FSRow:c,FSSpan:V,FSIcon:G,FSChip:Oe},props:Object.keys(a),setup(){return{args:e}},template:`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        title="Form 1"
        subtitle="3 pages form"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        :steps="3"
        mode="tabs"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
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
          <FSTextField
            label="Label 1"
            v-model="args.label1"
          />
        </template>
        <template #step-2>
          <FSTextField
            label="Label 2"
            v-model="args.label2"
          />
        </template>
        <template #step-3>
          <FSTextField
            label="Label 3"
            v-model="args.label3"
          />
        </template>
      </FSDialogMultiForm>
    </div>`})};var X,Y,Z;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogSubmit,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialogSubmit
        width="500px"
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="args.value1"
      >
        <template #body>
          <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    </div>\`
  })
}`,...(Z=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var x,_,ee;R.parameters={...R.parameters,docs:{...(x=R.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value1: false,
    value2: false,
    value4: false,
    validation2: false,
    label1: "",
    label2: "",
    label4: ""
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateField,
      FSDialogForm,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow,
      DialogFormRef
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog form"
        @click="() => args.value1 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 1"
        subtitle="Fill the form"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #body>
          <FSTextField
            label="Label 1"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label1"
          />
        </template>
      </FSDialogForm>
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="() => args.value2 = true"
      />
      <FSDialogForm
        width="500px"
        title="Form 2"
        subtitle="Fill the form"
        :validation="args.validation2"
        @click:submitButton="() => {
          args.validation2 = true;
        }"
        @click:validateButton="() => {
          args.validation2 = false;
          args.value2 = false;
        }"
        v-model="args.value2"
      >
        <template #body>
          <FSTextField
            label="Label 2"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label2"
          />
        </template>
        <template #validation>
          <FSSpan
            color="success"
          >
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
      

      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="() => args.value4 = true"
      />
      <FSDialogForm
        width="500px"
        title="No buttons dialog"
        :showCancelButton="false"
        :showSubmitButton="false"
        v-model="args.value4"
      >
        <template #body>
          <FSTranslateField
            label="Label 4"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="args.label4"
          />
        </template>
      </FSDialogForm>
      <DialogFormRef/> 
    </div>\`
  })
}`,...(ee=(_=R.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,te,le;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true,
    label11: "",
    label12: ""
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogMultiForm,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        title="Form 1"
        subtitle="3 pages form"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        :steps="3"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
      >
        <template #step-1>
          <FSTextField
            label="Label 1"
            v-model="args.label1"
          />
        </template>
        <template #step-2>
          <FSTextField
            label="Label 2"
            v-model="args.label2"
          />
        </template>
        <template #step-3>
          <FSTextField
            label="Label 3"
            v-model="args.label3"
          />
        </template>
      </FSDialogMultiForm>
    </div>\`
  })
}`,...(le=(te=P.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,oe,re;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    value1: false,
    removing1: false,
    value2: false,
    removing2: false,
    value3: false,
    removing3: false
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogRemove,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        label="Dialog - singular"
        @click="() => args.value1 = true"
      />
      <FSDialogRemove
        :removeTotal="1"
        :removing="args.removing1"
        @click:submitButton="() => args.removing1 = true"
        v-model="args.value1"
      />
      <FSButton
        label="Dialog - plural"
        @click="() => args.value2 = true"
      />
      <FSDialogRemove
        :removeTotal="12"
        :removing="args.removing2"
        @click:submitButton="() => args.removing2 = true"
        v-model="args.value2"
      />
      <FSButton
        label="Dialog - large number"
        @click="() => args.value3 = true"
      />
      <FSDialogRemove
        :removeTotal="9999999"
        :removing="args.removing3"
        @click:submitButton="() => args.removing3 = true"
        v-model="args.value3"
      />
    </div>\`
  })
}`,...(re=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ue,ie,se;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialog,
      FSTextField,
      FSButton,
      FSCard,
      FSSpan,
      FSCol,
      FSRow,
      FSFadeOut
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="() => args.value1 = true"
      />
      <FSDialog
        title="Form 1"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        v-model="value1"
        :fullscreen="true"
        width="100%"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="() => args.value1 = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialogForm>
    </div>\`
  })
}`,...(se=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,me,pe;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    value1: false,
    showCancelButton1: true,
    showSubmitButton1: true,
    label1: "",
    label2: "",
    label3: ""
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDialogMultiForm,
      FSTextField,
      FSButton,
      FSRow,
      FSSpan,
      FSIcon,
      FSChip
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px;">
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="() => args.value1 = true"
      />
      <FSDialogMultiForm
        width="500px"
        title="Form 1"
        subtitle="3 pages form"
        :showCancelButton="args.showCancelButton1"
        :showSubmitButton="args.showSubmitButton1"
        :steps="3"
        mode="tabs"
        @click:submitButton="() => {
          args.value1 = false;
        }"
        v-model="args.value1"
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
          <FSTextField
            label="Label 1"
            v-model="args.label1"
          />
        </template>
        <template #step-2>
          <FSTextField
            label="Label 2"
            v-model="args.label2"
          />
        </template>
        <template #step-3>
          <FSTextField
            label="Label 3"
            v-model="args.label3"
          />
        </template>
      </FSDialogMultiForm>
    </div>\`
  })
}`,...(pe=(me=N.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const it=["Submit","Form","MultipleForm","Remove","FullScreen","TabsForm"];export{R as Form,O as FullScreen,P as MultipleForm,M as Remove,L as Submit,N as TabsForm,it as __namedExportsOrder,ut as default};
