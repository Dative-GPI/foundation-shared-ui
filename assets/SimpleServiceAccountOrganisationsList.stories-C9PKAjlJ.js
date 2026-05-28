import{a as d}from"./index-B-lxVbXh.js";import{r as g,aa as S,j as f,B as v,Y as O,P as A}from"./vue.esm-bundler-DR0_aU9U.js";import{F as a}from"./FSSimpleList-BAZgedxF.js";import{u as F}from"./useServiceAccountOrganisations-DgJVHoWr.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as _,b as h}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSCol-B2uM4vFw.js";import"./FSLoader-DlWbYN_-.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./color-RD9Ud5Y3.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./useRender-BLRtLddt.js";import"./FSFadeOut-DENuqwmT.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSSearchField-DM7Wv8W0.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./density-SLEyWIf6.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./useTranslations-CDmrxgqt.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./VImg-DooBjoZC.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSTile-DyIXnIBo.js";import"./FSCheckbox-D-n0kplZ.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";import"./FSButtonEditIcon-BJT1uqLi.js";import"./FSButtonRemoveIcon-DEkhrlrM.js";import"./filter-C1K_d8Vd.js";import"./permissionInfos-BPDgTHQl.js";import"./base-7hURbKeK.js";import"./useAppOrganisationId-DfaOV_k9.js";const c=g({name:"FSSimpleServiceAccountOrganisationsList",components:{FSSimpleList:a},props:{serviceAccountOrganisationFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:e,fetching:n}=F();return S(()=>t.serviceAccountOrganisationFilters,()=>{e(t.serviceAccountOrganisationFilters)},{immediate:!0,deep:!0}),{serviceAccountOrganisations:r,fetching:n}}});function k(t,r,e,n,u,y){const l=O("FSSimpleList");return A(),f(l,v({items:t.serviceAccountOrganisations,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=L(c,[["render",k]]);c.__docgenInfo={displayName:"FSSimpleServiceAccountOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountOrganisationFilters",type:{name:"ServiceAccountOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/serviceAccountOrganisations/FSSimpleServiceAccountOrganisationsList.vue"]};const ri={title:"Foundation/Core/Lists/Simple Lists/SimpleServiceAccountOrganisationsList",component:o,tags:["autodocs"],argTypes:{...h([a],o),..._(o)}},i={render:t=>({components:{FSSimpleServiceAccountOrganisationsList:o},setup(){return{args:t}},template:`
      <FSSimpleServiceAccountOrganisationsList
        v-bind="args"
      />
    `}),args:{tileProps:t=>({onClick:()=>d("clicked item")(t)})}};var m,p,s;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSimpleServiceAccountOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleServiceAccountOrganisationsList
        v-bind="args"
      />
    \`
  }),
  args: {
    tileProps: (item: any) => ({
      onClick: () => action("clicked item")(item)
    })
  }
}`,...(s=(p=i.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const ei=["Default"];export{i as Default,ei as __namedExportsOrder,ri as default};
