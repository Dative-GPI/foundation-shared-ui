var h=Object.defineProperty;var V=(o,e,r)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var t=(o,e,r)=>V(o,typeof e!="symbol"?e+"":e,r);import{d as S,v as $,C as L,B as F,H as y,E as a,F as b,I as R,J as s,k as i}from"./vue.esm-bundler-CocPPKUI.js";import{a as E}from"./properties-Qw-O9fbT.js";import{F as m}from"./FSCol-79-COv64.js";import{_ as d}from"./FSRow-BvJ7lU5E.js";import{F as p}from"./FSCheckbox-MGAv1q-u.js";import{F as u}from"./FSButton-B9T3D7JL.js";import{F as k}from"./FSLoader-JpoH2mis.js";import{G as N}from"./base-CmdGny12.js";import{C as w}from"./composableFactory-DRFDSLtA.js";import{S as A}from"./serviceFactory-aQiBqOvf.js";import{u as T}from"./useFiles-h-y93sQm.js";import{C as B}from"./useColors-C1aD-Kb6.js";import{e as q}from"./rules-B-1MsapQ.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSForm-BptLXx1c.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSIcon-BGuuL0jz.js";import"./VIcon-ZjKwFcqe.js";import"./color-D50-hVV_.js";import"./theme-C1Gcptw7.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./density-2KuMGYl6.js";import"./proxiedModel-DW1FRKBO.js";import"./index-BwBNp3ym.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./locale-_fONYh-8.js";import"./index-hd-xIizf.js";import"./transition-bMLtH-b3.js";import"./dimensions-Cv9Fwl7U.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./elevation-DUhGVECn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./index-_Z9wfsFC.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DjiI-HV9.js";import"./useTranslations-DJaIYmO0.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./forwardRefs-C-GTDzx5.js";class G{constructor(e){t(this,"id");t(this,"privacyPolicyId");t(this,"generalConditionsId");this.id=e.id,this.privacyPolicyId=e.privacyPolicyId,this.generalConditionsId=e.generalConditionsId}}class M extends G{constructor(e){super(e)}}const _=()=>`${N()}/legal-informations`,D=()=>`${_()}/current`,H={...A.addCustom("getCurrent",o=>o.get(D()),o=>new M(o))},J=w.custom(H.getCurrent),I=S({name:"FSPoliciesValidationField",components:{FSCol:m,FSRow:d,FSCheckbox:p,FSButton:u,FSLoader:k},props:{generalConditions:{type:Boolean,required:!1},privacyPolicy:{type:Boolean,required:!1}},emits:["update:generalConditions","update:privacyPolicy"],setup(){const{fetch:o,entity:e,fetching:r}=J(),{downloadFile:g}=T();return $(()=>{o()}),{legalInformation:e,ToggleRules:q,ColorEnum:B,fetching:r,downloadFile:g}}});function W(o,e,r,g,Y,j){const f=R("FSLoader");return s(),L(b,null,[o.fetching?(s(),F(m,{key:0},{default:a(()=>[i(f,{variant:"field"}),i(f,{variant:"field"})]),_:1})):y("",!0),o.legalInformation?(s(),F(m,{key:1},{default:a(()=>[i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.generalConditions,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:generalConditions",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.general-conditions-of-use","general conditions of use"),color:o.ColorEnum.Primary,onClick:e[1]||(e[1]=n=>o.downloadFile(o.legalInformation.generalConditionsId))},null,8,["label","color"])]),_:1}),i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.privacyPolicy,"onUpdate:modelValue":e[2]||(e[2]=n=>o.$emit("update:privacyPolicy",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.privacy-policy","privacy policy"),color:o.ColorEnum.Primary,onClick:e[3]||(e[3]=n=>o.downloadFile(o.legalInformation.privacyPolicyId))},null,8,["label","color"])]),_:1})]),_:1})):y("",!0)],64)}const c=U(I,[["render",W]]);I.__docgenInfo={displayName:"FSPoliciesValidationField",exportName:"default",description:"",tags:{},props:[{name:"generalConditions",type:{name:"boolean"},required:!1},{name:"privacyPolicy",type:{name:"boolean"},required:!1}],events:[{name:"update:generalConditions"},{name:"update:privacyPolicy"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPoliciesValidationField.vue"]};const Zo={title:"Foundation/Shared/PoliciesValidationField",component:c,tags:["autodocs"],argTypes:{...E(c)}},l={args:{generalConditions:!1,privacyPolicy:!1},render:o=>S({components:{FSPoliciesValidationField:c,FSForm:O},inheritAttrs:!1,setup(){return{args:o}},template:`
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
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const xo=["PoliciesValidationField"];export{l as PoliciesValidationField,xo as __namedExportsOrder,Zo as default};
