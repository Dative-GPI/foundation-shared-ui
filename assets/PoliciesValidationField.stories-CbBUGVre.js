var h=Object.defineProperty;var V=(o,e,r)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var t=(o,e,r)=>V(o,typeof e!="symbol"?e+"":e,r);import{d as S,v as $,C as L,B as F,H as y,E as a,F as b,I as R,J as s,k as i}from"./vue.esm-bundler-CC_jVOJ5.js";import{a as E}from"./properties-Qw-O9fbT.js";import{F as m}from"./FSCol-DVEaUPKl.js";import{_ as d}from"./FSRow-CjY3icuR.js";import{F as p}from"./FSCheckbox-D-xuSzdC.js";import{F as u}from"./FSButton-Czf3beC8.js";import{F as k}from"./FSLoader-0nGK1qhA.js";import{G as N}from"./base-CmdGny12.js";import{C as w}from"./composableFactory-7f7_oyFS.js";import{S as A}from"./serviceFactory-CakgBvEM.js";import{u as T}from"./useFiles-DJWqsXrQ.js";import{C as B}from"./useColors-BXuuHMxE.js";import{e as q}from"./rules-BUSk3wMq.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSForm-CSz_UbV2.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSIcon-CeLDRxMK.js";import"./VIcon-BOLLMMm0.js";import"./color-BM2dSUAO.js";import"./theme-Bp81IclV.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./useRules-Da0JLBaA.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./density-mssFUWH2.js";import"./proxiedModel-Nw0LX-ta.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./dimensions-TKp8HHzB.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./elevation-CjJG1XnK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BT-dflJP.js";import"./index-_Z9wfsFC.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CEDjUrWj.js";import"./times-CqUFey1a.js";import"./useTranslations-5XSl7qXA.js";import"./useDateFormat-DHrriBQY.js";import"./useAppTimeZone-Bddnv5KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DwRThLpm.js";import"./forwardRefs-C-GTDzx5.js";class G{constructor(e){t(this,"id");t(this,"privacyPolicyId");t(this,"generalConditionsId");this.id=e.id,this.privacyPolicyId=e.privacyPolicyId,this.generalConditionsId=e.generalConditionsId}}class M extends G{constructor(e){super(e)}}const _=()=>`${N()}/legal-informations`,D=()=>`${_()}/current`,H={...A.addCustom("getCurrent",o=>o.get(D()),o=>new M(o))},J=w.custom(H.getCurrent),I=S({name:"FSPoliciesValidationField",components:{FSCol:m,FSRow:d,FSCheckbox:p,FSButton:u,FSLoader:k},props:{generalConditions:{type:Boolean,required:!1},privacyPolicy:{type:Boolean,required:!1}},emits:["update:generalConditions","update:privacyPolicy"],setup(){const{fetch:o,entity:e,fetching:r}=J(),{downloadFile:g}=T();return $(()=>{o()}),{legalInformation:e,ToggleRules:q,ColorEnum:B,fetching:r,downloadFile:g}}});function W(o,e,r,g,Y,j){const f=R("FSLoader");return s(),L(b,null,[o.fetching?(s(),F(m,{key:0},{default:a(()=>[i(f,{variant:"field"}),i(f,{variant:"field"})]),_:1})):y("",!0),o.legalInformation?(s(),F(m,{key:1},{default:a(()=>[i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.generalConditions,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:generalConditions",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.general-conditions-of-use","general conditions of use"),color:o.ColorEnum.Primary,onClick:e[1]||(e[1]=n=>o.downloadFile(o.legalInformation.generalConditionsId))},null,8,["label","color"])]),_:1}),i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.privacyPolicy,"onUpdate:modelValue":e[2]||(e[2]=n=>o.$emit("update:privacyPolicy",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.privacy-policy","privacy policy"),color:o.ColorEnum.Primary,onClick:e[3]||(e[3]=n=>o.downloadFile(o.legalInformation.privacyPolicyId))},null,8,["label","color"])]),_:1})]),_:1})):y("",!0)],64)}const c=U(I,[["render",W]]);I.__docgenInfo={displayName:"FSPoliciesValidationField",exportName:"default",description:"",tags:{},props:[{name:"generalConditions",type:{name:"boolean"},required:!1},{name:"privacyPolicy",type:{name:"boolean"},required:!1}],events:[{name:"update:generalConditions"},{name:"update:privacyPolicy"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPoliciesValidationField.vue"]};const xo={title:"Foundation/Shared/PoliciesValidationField",component:c,tags:["autodocs"],argTypes:{...E(c)}},l={args:{generalConditions:!1,privacyPolicy:!1},render:o=>S({components:{FSPoliciesValidationField:c,FSForm:O},inheritAttrs:!1,setup(){return{args:o}},template:`
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
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const oe=["PoliciesValidationField"];export{l as PoliciesValidationField,oe as __namedExportsOrder,xo as default};
