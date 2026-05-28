var h=Object.defineProperty;var V=(o,e,r)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var t=(o,e,r)=>V(o,typeof e!="symbol"?e+"":e,r);import{r as S,L,l as $,j as F,ac as a,k as y,F as b,Y as R,P as s,p as i}from"./vue.esm-bundler-DR0_aU9U.js";import{a as k}from"./properties-Qw-O9fbT.js";import{F as m}from"./FSCol-B2uM4vFw.js";import{_ as d}from"./FSRow-C8VtPvPz.js";import{F as p}from"./FSCheckbox-D-n0kplZ.js";import{F as c}from"./FSButton-CX1uVweX.js";import{F as E}from"./FSLoader-DlWbYN_-.js";import{C as N}from"./composableFactory-yqpAgWWK.js";import{S as w}from"./serviceFactory-CnLiFQ6s.js";import{G as A}from"./base-CmdGny12.js";import{u as T}from"./useFiles-CtFzdVt6.js";import{a as q}from"./useColors-CvhpHTRO.js";import{d as B}from"./rules-tbTkbybW.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSForm-kBy3Krb7.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./proxiedModel-DoNoMWaC.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./dimensions-DYTrXD1P.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./elevation-DVEOfLMu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./time-DuowFvgO.js";import"./useTranslations-CDmrxgqt.js";import"./times-CqUFey1a.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-DAnuesY2.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./useAppTimeZone-fWyn93dw.js";import"./startOfDay-C4pDH4rb.js";import"./forwardRefs-C-GTDzx5.js";class G{constructor(e){t(this,"id");t(this,"privacyPolicyId");t(this,"generalConditionsId");this.id=e.id,this.privacyPolicyId=e.privacyPolicyId,this.generalConditionsId=e.generalConditionsId}}class M extends G{constructor(e){super(e)}}const Y=()=>`${A()}/legal-informations`,_=()=>`${Y()}/current`,j={...w.addCustom("getCurrent",o=>o.get(_()),o=>new M(o))},D=N.custom(j.getCurrent),I=S({name:"FSPoliciesValidationField",components:{FSCol:m,FSRow:d,FSCheckbox:p,FSButton:c,FSLoader:E},props:{generalConditions:{type:Boolean,required:!1},privacyPolicy:{type:Boolean,required:!1}},emits:["update:generalConditions","update:privacyPolicy"],setup(){const{fetch:o,entity:e,fetching:r}=D(),{downloadFile:g}=T();return L(()=>{o()}),{legalInformation:e,ToggleRules:B,ColorEnum:q,fetching:r,downloadFile:g}}});function W(o,e,r,g,z,H){const f=R("FSLoader");return s(),$(b,null,[o.fetching?(s(),F(m,{key:0},{default:a(()=>[i(f,{variant:"field"}),i(f,{variant:"field"})]),_:1})):y("",!0),o.legalInformation?(s(),F(m,{key:1},{default:a(()=>[i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.generalConditions,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:generalConditions",n))},null,8,["label","rules","modelValue"]),i(c,{variant:"icon",label:o.$tr("ui.registration.general-conditions-of-use","general conditions of use"),color:o.ColorEnum.Primary,onClick:e[1]||(e[1]=n=>o.downloadFile(o.legalInformation.generalConditionsId))},null,8,["label","color"])]),_:1}),i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.privacyPolicy,"onUpdate:modelValue":e[2]||(e[2]=n=>o.$emit("update:privacyPolicy",n))},null,8,["label","rules","modelValue"]),i(c,{variant:"icon",label:o.$tr("ui.registration.privacy-policy","privacy policy"),color:o.ColorEnum.Primary,onClick:e[3]||(e[3]=n=>o.downloadFile(o.legalInformation.privacyPolicyId))},null,8,["label","color"])]),_:1})]),_:1})):y("",!0)],64)}const u=U(I,[["render",W]]);I.__docgenInfo={displayName:"FSPoliciesValidationField",exportName:"default",description:"",tags:{},props:[{name:"generalConditions",type:{name:"boolean"},required:!1},{name:"privacyPolicy",type:{name:"boolean"},required:!1}],events:[{name:"update:generalConditions"},{name:"update:privacyPolicy"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPoliciesValidationField.vue"]};const re={title:"Foundation/Shared/PoliciesValidationField",component:u,tags:["autodocs"],argTypes:{...k(u)}},l={args:{generalConditions:!1,privacyPolicy:!1},render:o=>S({components:{FSPoliciesValidationField:u,FSForm:O},inheritAttrs:!1,setup(){return{args:o}},template:`
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
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const ne=["PoliciesValidationField"];export{l as PoliciesValidationField,ne as __namedExportsOrder,re as default};
