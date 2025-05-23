import{F as ne}from"./FSTranslateField-CWsgZ1ky.js";import{d as q,b as g,c as B,z as b,H as c,C as l,P as t,G as F,A as oe,Q as O,L as y,E as R,F as re,m as P,B as ue,M as ie,N as se,w as Se,I as E,J as U}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as Be}from"./FSPagination-BcntKYn3.js";import{_ as V}from"./FSFadeOut-PZiJk41N.js";import{F as s}from"./FSButton-OpnenzvL.js";import{F as de}from"./FSForm-LfcAIV6X.js";import{F as S}from"./FSCol-Be93XvPD.js";import{_ as f}from"./FSRow-C47sfGk6.js";import{C as h}from"./useColors-CjA2D2xA.js";import{u as me}from"./useBreakpoints-DsICqL2A.js";import{u as pe}from"./useTranslations-CLqRehXT.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ye}from"./FSWindow-BH46k-T1.js";import{F as M}from"./FSDialog-gz6grh-x.js";import{F as N}from"./FSTextField-D1GTNUtI.js";import{F as he}from"./FSDialogSubmit-DGkU_Tqg.js";import{F as Ve}from"./FSDialogRemove-BX9gahbH.js";import{F as k}from"./FSCard-ByrGPHX6.js";import{_ as $}from"./FSSpan-BXQyelfo.js";import{F as qe}from"./FSText-C032WjuG.js";import"./FSIcon-B4J40lse.js";import"./css-D38lF7BW.js";import"./VIcon-GfKFLOEw.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./useAppLanguages-GIEtxWZx.js";import"./useSlots-c6yg-hhg.js";import"./uuid-DTaye2KM.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-DsGMo-Qs.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./density-Dl4v3sM7.js";import"./dimensions-DW-k5kP_.js";import"./proxiedModel-DKx29MO-.js";import"./forwardRefs-DWGaNmQL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./group-3MU8bQUc.js";import"./VBtn-DqO4-7PD.js";import"./border-CvDIZQGy.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./loader-CQB_6PPx.js";import"./anchor-DCFmATqq.js";import"./router-BXF-7Xxx.js";import"./index-BkfcJ8bv.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./scopeId-COl1Iexy.js";import"./ssrBoot-BDHgcVA9.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./display-CUGteI3_.js";import"./FSBaseField-B4z0jav7.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./VLabel-Ca5QW7tf.js";import"./index-DWgrY6Dg.js";const fe=q({name:"FSDialogMultiFormBody",components:{FSPagination:Be,FSFadeOut:V,FSButton:s,FSForm:de,FSCol:S,FSRow:f},props:{subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},variant:{type:String,required:!1,default:"submit"},steps:{type:Number,required:!0},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:h.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:h.Primary},load:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},emits:["click:cancelButton","click:submitButton"],setup(e,{emit:a}){const{isMobileSized:r}=me(),{$tr:u}=pe(),n=g(1),p=g(!1),d=g(Array.from({length:e.steps},()=>!1)),m=B(()=>`calc(100vh - 42px - ${48+(r.value?24:32)+24+(e.subtitle?(r.value?16:20)+8:0)+(e.steps>1?28:0)+(r.value?36:40)+24}px)`),i=B(()=>n.value==1?e.cancelButtonLabel??u("ui.common.cancel","Cancel"):u("ui.common.back","Back")),o=B(()=>n.value==e.steps?e.submitButtonLabel??u("ui.common.validate","Validate"):u("ui.common.next","Next")),v=B(()=>n.value==e.steps?e.submitButtonVariant??"full":"standard");return{previousButtonLabel:i,nextButtonVariant:v,nextButtonLabel:o,currentStep:n,ColorEnum:h,maxHeight:m,valids:d,valid:p,onPrevious:()=>{n.value>1?n.value--:a("click:cancelButton")},onSubmit:()=>{if(p.value)switch(n.value){case e.steps:a("click:submitButton");break;default:n.value++;break}}}}});function we(e,a,r,u,n,p){const d=F("FSPagination"),m=F("FSForm");return c(),b(S,{gap:"24px"},{default:l(()=>[t(d,{width:"calc(100% - 16px)",pages:e.$props.steps,modelValue:e.currentStep-1},null,8,["pages","modelValue"]),t(ye,{width:"100%",modelValue:e.currentStep-1},{default:l(()=>[(c(!0),oe(re,null,O(e.$props.steps,(i,o)=>(c(),b(m,{variant:e.$props.variant,key:o,onSubmit:e.onSubmit,modelValue:e.valid,"onUpdate:modelValue":a[1]||(a[1]=v=>e.valid=v)},{default:l(()=>[t(S,{gap:"24px"},{default:l(()=>[t(V,{maxHeight:e.maxHeight},{default:l(()=>[y(e.$slots,`step-${i}`)]),_:2},1032,["maxHeight"]),t(f,null,{default:l(()=>[y(e.$slots,"left-footer"),t(f,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[e.$props.showCancelButton||e.currentStep>1?(c(),b(s,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.previousButtonLabel,onClick:a[0]||(a[0]=v=>e.onPrevious())},null,8,["prependIcon","appendIcon","variant","color","label"])):R("",!0),e.$props.showSubmitButton||e.currentStep<e.$props.steps?(c(),b(s,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,color:e.$props.submitButtonColor,variant:e.nextButtonVariant,disabled:e.$props.disabled,label:e.nextButtonLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","color","variant","disabled","label","load"])):R("",!0)]),_:1})]),_:3})]),_:2},1024)]),_:2},1032,["variant","onSubmit","modelValue"]))),128))]),_:3},8,["modelValue"])]),_:3})}const ke=w(fe,[["render",we]]);fe.__docgenInfo={displayName:"FSDialogMultiFormBody",exportName:"default",description:"",tags:{},props:[{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"steps",type:{name:"number"},required:!0},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"}],slots:[{name:"`step-${step}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"left-footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiFormBody.vue"]};const ce=q({name:"FSDialogMultiForm",components:{FSDialogMultiFormBody:ke,FSDialog:M},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"auto"},modelValue:{type:Boolean,required:!1,default:!1},steps:{type:Number,required:!0}},emits:["update:modelValue","click:submitButton"],setup(){return{}}});function $e(e,a,r,u,n,p){const d=F("FSDialogMultiFormBody"),m=F("FSDialog");return c(),b(m,P({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=i=>e.$emit("update:modelValue",i))},e.$attrs),{body:l(()=>[t(d,P({subtitle:e.$props.subtitle,steps:e.$props.steps,"onClick:submitButton":a[0]||(a[0]=i=>e.$emit("click:submitButton")),"onClick:cancelButton":a[1]||(a[1]=i=>e.$emit("update:modelValue",!1))},e.$attrs),ue({_:2},[O(e.$slots,(i,o)=>({name:o,fn:l(v=>[y(e.$slots,o,ie(se(v)))])}))]),1040,["subtitle","steps"])]),_:3},16,["subtitle","title","width","modelValue"])}const Ce=w(ce,[["render",$e]]);ce.__docgenInfo={displayName:"FSDialogMultiForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"steps",type:{name:"number"},required:!0}],events:[{name:"update:modelValue"},{name:"click:submitButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMultiForm.vue"]};const ge=q({name:"FSDialogFormBody",components:{FSFadeOut:V,FSButton:s,FSForm:de,FSRow:f},props:{variant:{type:String,required:!1,default:"submit"},subtitle:{type:String,required:!1,default:null},showCancelButton:{type:Boolean,required:!1,default:!0},cancelButtonPrependIcon:{type:String,required:!1,default:null},cancelButtonLabel:{type:String,required:!1,default:null},cancelButtonAppendIcon:{type:String,required:!1,default:null},cancelButtonVariant:{type:String,required:!1,default:"standard"},cancelButtonColor:{type:String,required:!1,default:h.Light},showSubmitButton:{type:Boolean,required:!1,default:!0},submitButtonPrependIcon:{type:String,required:!1,default:null},submitButtonLabel:{type:String,required:!1,default:null},submitButtonAppendIcon:{type:String,required:!1,default:null},submitButtonVariant:{type:String,required:!1,default:"full"},submitButtonColor:{type:String,required:!1,default:h.Primary},validateButtonPrependIcon:{type:String,required:!1,default:null},validateButtonLabel:{type:String,required:!1,default:null},validateButtonAppendIcon:{type:String,required:!1,default:null},validateButtonVariant:{type:String,required:!1,default:"standard"},validateButtonColor:{type:String,required:!1,default:h.Light},validation:{type:Boolean,required:!1,default:!1},load:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},emits:["click:cancelButton","click:submitButton","click:validateButton","update:isValidForm"],setup(e,{emit:a}){const{isMobileSized:r}=me(),{$tr:u}=pe(),n=g(null),p=g(null),d=B(()=>`calc(100vh - 42px - ${48+(r.value?24:32)+24+(e.subtitle?(r.value?16:20)+8:0)+(r.value?36:40)+24}px)`),m=B(()=>e.cancelButtonLabel??u("ui.common.cancel","Cancel")),i=B(()=>e.submitButtonLabel??u("ui.common.submit","Submit")),o=B(()=>e.validateButtonLabel??u("ui.common.validate","Validate")),v=()=>{n.value&&n.value.resetValidation()},A=async()=>{if(n.value)return await n.value.validate()},H=()=>{p.value&&a("click:submitButton")},j=()=>{a("click:validateButton")};return Se(()=>p.value,()=>{a("update:isValidForm",p.value)},{immediate:!0}),{resetFormValidation:v,validateLabel:o,validateForm:A,isValidForm:p,cancelLabel:m,submitLabel:i,onValidate:j,ColorEnum:h,maxHeight:d,onSubmit:H,formRef:n}}});function De(e,a,r,u,n,p){const d=F("FSForm");return e.$props.validation?(c(),b(S,{key:1,gap:"24px"},{default:l(()=>[t(V,{maxHeight:e.maxHeight},{default:l(()=>[y(e.$slots,"validation")]),_:3},8,["maxHeight"]),t(f,null,{default:l(()=>[y(e.$slots,"left-footer"),t(f,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[t(s,{prependIcon:e.$props.validateButtonPrependIcon,appendIcon:e.$props.validateButtonAppendIcon,variant:e.$props.validateButtonVariant,color:e.$props.validateButtonColor,label:e.validateLabel,onClick:e.onValidate},null,8,["prependIcon","appendIcon","variant","color","label","onClick"])]),_:1})]),_:3})]),_:3})):(c(),b(d,{key:0,ref:"formRef",variant:e.$props.variant,onSubmit:e.onSubmit,modelValue:e.isValidForm,"onUpdate:modelValue":a[1]||(a[1]=m=>e.isValidForm=m)},{default:l(()=>[t(S,{gap:"24px"},{default:l(()=>[t(V,{maxHeight:e.maxHeight},{default:l(()=>[y(e.$slots,"body")]),_:3},8,["maxHeight"]),t(f,null,{default:l(()=>[y(e.$slots,"left-footer"),t(f,{class:"fs-dialog-actions",align:"top-right",wrap:!1},{default:l(()=>[e.$props.showCancelButton?(c(),b(s,{key:0,prependIcon:e.$props.cancelButtonPrependIcon,appendIcon:e.$props.cancelButtonAppendIcon,variant:e.$props.cancelButtonVariant,color:e.$props.cancelButtonColor,label:e.cancelLabel,onClick:a[0]||(a[0]=()=>e.$emit("click:cancelButton",!1))},null,8,["prependIcon","appendIcon","variant","color","label"])):R("",!0),e.$props.showSubmitButton?(c(),b(s,{key:1,type:"submit",prependIcon:e.$props.submitButtonPrependIcon,appendIcon:e.$props.submitButtonAppendIcon,variant:e.$props.submitButtonVariant,color:e.$props.submitButtonColor,disabled:e.$props.disabled,label:e.submitLabel,load:e.$props.load},null,8,["prependIcon","appendIcon","variant","color","disabled","label","load"])):R("",!0)]),_:1})]),_:3})]),_:3})]),_:3},8,["variant","onSubmit","modelValue"]))}const Ie=w(ge,[["render",De]]);ge.__docgenInfo={displayName:"FSDialogFormBody",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"cancelButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"cancelButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"cancelButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"showSubmitButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"submitButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"submitButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"submitButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"validateButtonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"validateButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"validateButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"load",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:cancelButton"},{name:"click:submitButton"},{name:"click:validateButton"},{name:"update:isValidForm"}],slots:[{name:"body"},{name:"left-footer"},{name:"validation"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogFormBody.vue"]};const ve=q({name:"FSDialogForm",components:{FSDialogFormBody:Ie,FSDialog:M},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},validation:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"auto"}},emits:["update:modelValue","click:validateButton","click:submitButton"],setup(e,{emit:a}){const r=g(null),u=g(!1);return{resetFormValidation:()=>{r.value&&r.value.resetFormValidation()},validateForm:async()=>{if(r.value)return await r.value.validateForm()},isValidForm:u,onValidate:()=>{a("click:validateButton"),a("update:modelValue",!1)},bodyRef:r,onClose:()=>{e.validation&&a("click:validateButton"),a("update:modelValue",!1)}}}});function Le(e,a,r,u,n,p){const d=F("FSDialogFormBody"),m=F("FSDialog");return c(),b(m,P({subtitle:e.$props.subtitle,title:e.$props.title,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onClose},e.$attrs),{body:l(()=>[t(d,P({ref:"bodyRef"},e.$attrs,{subtitle:e.$props.subtitle,validation:e.$props.validation,"onClick:cancelButton":a[0]||(a[0]=i=>e.$emit("update:modelValue",!1)),"onClick:submitButton":a[1]||(a[1]=i=>e.$emit("click:submitButton")),"onClick:validateButton":e.onValidate,"onUpdate:isValidForm":a[2]||(a[2]=i=>e.isValidForm=i)}),ue({_:2},[O(e.$slots,(i,o)=>({name:o,fn:l(v=>[y(e.$slots,o,ie(se(v)))])}))]),1040,["subtitle","validation","onClick:validateButton"])]),_:3},16,["subtitle","title","width","modelValue","onUpdate:modelValue"])}const be=w(ve,[["render",Le]]);ve.__docgenInfo={displayName:"FSDialogForm",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"validation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"click:submitButton"},{name:"click:validateButton"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogForm.vue"]};const Fe=q({name:"DialogFormRef",components:{FSDialogForm:be,FSTranslateField:ne,FSButton:s,FSText:qe},setup(){const e=g(null),a=g(null),r=g(!1),u=g("");return{resetValidation:()=>{e.value&&e.value.resetFormValidation()},isValidForm:a,dialogRef:e,validate:async()=>{if(e.value){if(!(await e.value.validateForm()).valid)return;console.log("validated")}},value:r,label:u}}});function Te(e,a,r,u,n,p){const d=F("FSTranslateField"),m=F("FSText"),i=F("FSDialogForm");return c(),oe(re,null,[t(s,{color:"primary",label:"Manual validation dialog",onClick:a[0]||(a[0]=()=>e.value=!0)}),t(i,{ref:"dialogRef",width:"500px",title:"Manual validation dialog",modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=o=>e.value=o),"onUpdate:isValidForm":a[5]||(a[5]=o=>e.isValidForm=o)},{body:l(()=>[t(d,{label:"Label 5",required:!0,rules:[o=>!!o||"Label is required"],modelValue:e.label,"onUpdate:modelValue":a[1]||(a[1]=o=>e.label=o)},null,8,["rules","modelValue"]),t(s,{label:"ValidateForm",onClick:a[2]||(a[2]=o=>e.validate())}),t(s,{label:"ResetFormValidation",onClick:a[3]||(a[3]=o=>e.resetValidation())}),t(m,null,{default:l(()=>[E(" The current validity of the form is: "+U(e.isValidForm==!0),1)]),_:1}),t(m,null,{default:l(()=>[E(" The dialogRef is null : "+U(e.dialogRef==null),1)]),_:1})]),_:1},8,["modelValue"])],64)}const Re=w(Fe,[["render",Te]]);Fe.__docgenInfo={displayName:"DialogFormRef",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/dialogs/DialogFormRef.vue"]};const Ga={title:"Foundation/Shared/Dialog",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},C={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0},render:(e,{argTypes:a})=>({components:{FSDialogSubmit:he,FSTextField:N,FSButton:s,FSCard:k,FSSpan:$,FSCol:S,FSRow:f},props:Object.keys(a),setup(){return{args:e}},template:`
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
    </div>`})},D={args:{value1:!1,value2:!1,value4:!1,validation2:!1,label1:"",label2:"",label4:""},render:(e,{argTypes:a})=>({components:{FSTranslateField:ne,FSDialogForm:be,FSTextField:N,FSButton:s,FSCard:k,FSSpan:$,FSCol:S,FSRow:f,DialogFormRef:Re},props:Object.keys(a),setup(){return{args:e}},template:`
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
    </div>`})},I={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0,label11:"",label12:""},render:(e,{argTypes:a})=>({components:{FSDialogMultiForm:Ce,FSTextField:N,FSButton:s,FSCard:k,FSSpan:$,FSCol:S,FSRow:f},props:Object.keys(a),setup(){return{args:e}},template:`
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
    </div>`})},L={args:{value1:!1,removing1:!1,value2:!1,removing2:!1,value3:!1,removing3:!1},render:(e,{argTypes:a})=>({components:{FSDialogRemove:Ve,FSButton:s,FSCard:k,FSSpan:$,FSCol:S,FSRow:f},props:Object.keys(a),setup(){return{args:e}},template:`
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
    </div>`})},T={args:{value1:!1,showCancelButton1:!0,showSubmitButton1:!0},render:(e,{argTypes:a})=>({components:{FSDialog:M,FSTextField:N,FSButton:s,FSCard:k,FSSpan:$,FSCol:S,FSRow:f,FSFadeOut:V},props:Object.keys(a),setup(){return{args:e}},template:`
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
    </div>`})};var z,G,J;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,W,K;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(K=(W=D.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var x,_,ee;L.parameters={...L.parameters,docs:{...(x=L.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(ee=(_=L.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,le,te;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(le=T.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};const Ja=["Submit","Form","MultipleForm","Remove","FullScreen"];export{D as Form,T as FullScreen,I as MultipleForm,L as Remove,C as Submit,Ja as __namedExportsOrder,Ga as default};
