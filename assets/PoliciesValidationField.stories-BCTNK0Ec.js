var h=Object.defineProperty;var V=(o,e,r)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var t=(o,e,r)=>V(o,typeof e!="symbol"?e+"":e,r);import{d as S,o as $,G as L,B as F,D as a,H as y,F as b,I as R,J as s,q as i}from"./vue.esm-bundler-B9lxvfDw.js";import{a as E}from"./properties-Qw-O9fbT.js";import{F as m}from"./FSCol-BwxAijHz.js";import{_ as d}from"./FSRow-CFa9RNor.js";import{F as p}from"./FSCheckbox-8fnFFMk6.js";import{F as u}from"./FSButton-CxA5c6KR.js";import{F as k}from"./FSLoader-FkDR4IbG.js";import{G as N}from"./base-CmdGny12.js";import{C as w}from"./composableFactory-CzIPMomJ.js";import{S as A}from"./serviceFactory-DGf7dwWo.js";import{u as T}from"./useFiles-DMwS4DK9.js";import{C as q}from"./useColors-B5aYgogF.js";import{e as B}from"./rules-BJlQ9sVg.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSForm-C7RHfymi.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSIcon-kCffLiJ2.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./theme-Bz5xEpqh.js";import"./useRender-DM2jvMPN.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./useRules-Cun-4MZo.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./density-DvMOIaQw.js";import"./proxiedModel-DRvKxps3.js";import"./index-EdIR5CJS.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./locale-C647X9dJ.js";import"./index-7AXDWkBX.js";import"./transition-Dh_EAQcC.js";import"./dimensions-n1mPaUbN.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./elevation-DZ0Sccyb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Cnww6a6j.js";import"./time-BAnUzhMU.js";import"./times-CqUFey1a.js";import"./useTranslations-AmWs0SAL.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-DB9Xcy26.js";import"./useAppTimeZone-yr9jXsW5.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CT4VqPAG.js";import"./forwardRefs-C-GTDzx5.js";class O{constructor(e){t(this,"id");t(this,"privacyPolicyId");t(this,"generalConditionsId");this.id=e.id,this.privacyPolicyId=e.privacyPolicyId,this.generalConditionsId=e.generalConditionsId}}class M extends O{constructor(e){super(e)}}const D=()=>`${N()}/legal-informations`,_=()=>`${D()}/current`,H={...A.addCustom("getCurrent",o=>o.get(_()),o=>new M(o))},J=w.custom(H.getCurrent),I=S({name:"FSPoliciesValidationField",components:{FSCol:m,FSRow:d,FSCheckbox:p,FSButton:u,FSLoader:k},props:{generalConditions:{type:Boolean,required:!1},privacyPolicy:{type:Boolean,required:!1}},emits:["update:generalConditions","update:privacyPolicy"],setup(){const{fetch:o,entity:e,fetching:r}=J(),{downloadFile:g}=T();return $(()=>{o()}),{legalInformation:e,ToggleRules:B,ColorEnum:q,fetching:r,downloadFile:g}}});function W(o,e,r,g,Y,j){const f=R("FSLoader");return s(),L(b,null,[o.fetching?(s(),F(m,{key:0},{default:a(()=>[i(f,{variant:"field"}),i(f,{variant:"field"})]),_:1})):y("",!0),o.legalInformation?(s(),F(m,{key:1},{default:a(()=>[i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.generalConditions,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:generalConditions",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.general-conditions-of-use","general conditions of use"),color:o.ColorEnum.Primary,onClick:e[1]||(e[1]=n=>o.downloadFile(o.legalInformation.generalConditionsId))},null,8,["label","color"])]),_:1}),i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.privacyPolicy,"onUpdate:modelValue":e[2]||(e[2]=n=>o.$emit("update:privacyPolicy",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.privacy-policy","privacy policy"),color:o.ColorEnum.Primary,onClick:e[3]||(e[3]=n=>o.downloadFile(o.legalInformation.privacyPolicyId))},null,8,["label","color"])]),_:1})]),_:1})):y("",!0)],64)}const c=U(I,[["render",W]]);I.__docgenInfo={displayName:"FSPoliciesValidationField",exportName:"default",description:"",tags:{},props:[{name:"generalConditions",type:{name:"boolean"},required:!1},{name:"privacyPolicy",type:{name:"boolean"},required:!1}],events:[{name:"update:generalConditions"},{name:"update:privacyPolicy"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPoliciesValidationField.vue"]};const oe={title:"Foundation/Shared/PoliciesValidationField",component:c,tags:["autodocs"],argTypes:{...E(c)}},l={args:{generalConditions:!1,privacyPolicy:!1},render:o=>S({components:{FSPoliciesValidationField:c,FSForm:G},inheritAttrs:!1,setup(){return{args:o}},template:`
        <FSForm height="500px">
          <FSPoliciesValidationField
            v-model:generalConditions="args.generalConditions"
            v-model:privacyPolicy="args.privacyPolicy"
          />
        </FSForm>
      `})};var v,C,P;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    generalConditions: false,
    privacyPolicy: false
  },
  render: args => defineComponent({
    components: {
      FSPoliciesValidationField,
      FSForm
    },
    inheritAttrs: false,
    setup() {
      return {
        args
      };
    },
    template: \`
        <FSForm height="500px">
          <FSPoliciesValidationField
            v-model:generalConditions="args.generalConditions"
            v-model:privacyPolicy="args.privacyPolicy"
          />
        </FSForm>
      \`
  })
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const ee=["PoliciesValidationField"];export{l as PoliciesValidationField,ee as __namedExportsOrder,oe as default};
