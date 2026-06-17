var h=Object.defineProperty;var V=(o,e,r)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var t=(o,e,r)=>V(o,typeof e!="symbol"?e+"":e,r);import{d as S,o as L,J as $,E as F,H as a,K as y,F as b,L as E,M as s,k as i}from"./vue.esm-bundler-C5-CUMHT.js";import{a as R}from"./properties-Qw-O9fbT.js";import{F as m}from"./FSCol-DedFW0nl.js";import{F as d}from"./FSRow-C8aYwBu-.js";import{F as p}from"./FSCheckbox-BwFpn-kB.js";import{F as u}from"./FSButton-DohpVEzP.js";import{F as k}from"./FSLoader-BTZOtjrt.js";import{C as N}from"./composableFactory-Cxup7bUM.js";import{S as A}from"./serviceFactory-DI_gyWBF.js";import{G as T}from"./base-CmdGny12.js";import{u as w}from"./useFiles-38dqZ6ns.js";import{C as q}from"./useColors-BAnxS_-e.js";import{e as B}from"./rules-DD8uUSt-.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSForm-luuDRx7I.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./theme-CB6As9Cd.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./density-qUtw3dk7.js";import"./proxiedModel-CV-HTW34.js";import"./index-asyjLxvi.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./locale-BNkeanE6.js";import"./index-pS3mXfMR.js";import"./transition-CgRUW3r8.js";import"./dimensions-Bm76csmg.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSText-C8rmUTxK.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./elevation-DfTZ1KyC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DMcDmCCx.js";import"./time-uuMHVXf_.js";import"./useTranslations-DAi7IZoP.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-D3hpfVqH.js";import"./useAppLanguageCode-CembXc6P.js";import"./useAppTimeZone-s1RlKu8w.js";import"./startOfDay-C4pDH4rb.js";import"./forwardRefs-C-GTDzx5.js";class G{constructor(e){t(this,"id");t(this,"privacyPolicyId");t(this,"generalConditionsId");this.id=e.id,this.privacyPolicyId=e.privacyPolicyId,this.generalConditionsId=e.generalConditionsId}}class M extends G{constructor(e){super(e)}}const D=()=>`${T()}/legal-informations`,H=()=>`${D()}/current`,J={...A.addCustom("getCurrent",o=>o.get(H()),o=>new M(o))},K=N.custom(J.getCurrent),I=S({name:"FSPoliciesValidationField",components:{FSCol:m,FSRow:d,FSCheckbox:p,FSButton:u,FSLoader:k},props:{generalConditions:{type:Boolean,required:!1},privacyPolicy:{type:Boolean,required:!1}},emits:["update:generalConditions","update:privacyPolicy"],setup(){const{fetch:o,entity:e,fetching:r}=K(),{downloadFile:g}=w();return L(()=>{o()}),{legalInformation:e,ToggleRules:B,ColorEnum:q,fetching:r,downloadFile:g}}});function W(o,e,r,g,Y,j){const f=E("FSLoader");return s(),$(b,null,[o.fetching?(s(),F(m,{key:0},{default:a(()=>[i(f,{variant:"field"}),i(f,{variant:"field"})]),_:1})):y("",!0),o.legalInformation?(s(),F(m,{key:1},{default:a(()=>[i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.generalConditions,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:generalConditions",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.general-conditions-of-use","general conditions of use"),color:o.ColorEnum.Primary,onClick:e[1]||(e[1]=n=>o.downloadFile(o.legalInformation.generalConditionsId))},null,8,["label","color"])]),_:1}),i(d,{align:"center-left",gap:"4px"},{default:a(()=>[i(p,{label:o.$tr("ui.registration.i-have-read-and-understand","I have read and understand the"),rules:[o.ToggleRules.required()],modelValue:o.$props.privacyPolicy,"onUpdate:modelValue":e[2]||(e[2]=n=>o.$emit("update:privacyPolicy",n))},null,8,["label","rules","modelValue"]),i(u,{variant:"icon",label:o.$tr("ui.registration.privacy-policy","privacy policy"),color:o.ColorEnum.Primary,onClick:e[3]||(e[3]=n=>o.downloadFile(o.legalInformation.privacyPolicyId))},null,8,["label","color"])]),_:1})]),_:1})):y("",!0)],64)}const c=U(I,[["render",W]]);I.__docgenInfo={displayName:"FSPoliciesValidationField",exportName:"default",description:"",tags:{},props:[{name:"generalConditions",type:{name:"boolean"},required:!1},{name:"privacyPolicy",type:{name:"boolean"},required:!1}],events:[{name:"update:generalConditions"},{name:"update:privacyPolicy"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPoliciesValidationField.vue"]};const re={title:"Shared/Components/PoliciesValidationField",component:c,tags:["autodocs"],argTypes:{...R(c)}},l={args:{generalConditions:!1,privacyPolicy:!1},render:o=>S({components:{FSPoliciesValidationField:c,FSForm:O},inheritAttrs:!1,setup(){return{args:o}},template:`
        <FSForm height="500px">
          <FSPoliciesValidationField
            v-model:generalConditions="args.generalConditions"
            v-model:privacyPolicy="args.privacyPolicy"
          />
        </FSForm>
      `})};var C,v,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const ne=["PoliciesValidationField"];export{l as PoliciesValidationField,ne as __namedExportsOrder,re as default};
