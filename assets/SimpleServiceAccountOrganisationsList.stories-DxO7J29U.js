import{a as d}from"./chunk-MZXVCX43-CvRfcaG5.js";import{d as g,w as S,B as f,m as v,I as O,J as A}from"./vue.esm-bundler-CocPPKUI.js";import{F as a}from"./FSSimpleList-D9skSHe5.js";import{u as F}from"./useServiceAccountOrganisations-52xj9wye.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as _,b as h}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSCol-79-COv64.js";import"./FSLoader-BeIlBGG_.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./color-yBCdco2I.js";import"./dimensions-C9PuMYcl.js";import"./elevation-CsFMJmSN.js";import"./locale-_fONYh-8.js";import"./FSFadeOut-BaaWP8Xe.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BpYleAPY.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./FSButton-VjwKfCr9.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-CKNHHVc2.js";import"./VSlideGroup-D3ZQzm0f.js";import"./index-DfBdMsnv.js";import"./display-BmuJHlI4.js";import"./group-CbiZXdYV.js";import"./proxiedModel-DvocDLKO.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./FSSearchField-BChNb6vP.js";import"./FSTextField-CrSrBFtk.js";import"./FSBaseField-BHCTmkg_.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./transition-BuKnRONq.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./density-DZuLaB-B.js";import"./loader-B3-0Tc48.js";import"./anchor-C7UfIAXa.js";import"./rounded-Cjf6r1y4.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-lkzvYdnq.js";import"./useTranslations-DJaIYmO0.js";import"./FSImage-BWKdCiW7.js";import"./FSImageUI-CFqUtuMS.js";import"./VImg-BaN5zAl6.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./useAppAuthToken-DuOSULz9.js";import"./FSTile-Cm9Anp65.js";import"./FSCheckbox-ChCYq6Yz.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./index-BgX1FNqJ.js";import"./FSButtonEditIcon-BxUUIGiv.js";import"./FSButtonRemoveIcon-C5F4E7T4.js";import"./filter-C1K_d8Vd.js";import"./permissionInfos-BPDgTHQl.js";import"./base-D6U4mRRi.js";import"./useAppOrganisationId-DacmST4-.js";const c=g({name:"FSSimpleServiceAccountOrganisationsList",components:{FSSimpleList:a},props:{serviceAccountOrganisationFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:e,fetching:n}=F();return S(()=>t.serviceAccountOrganisationFilters,()=>{e(t.serviceAccountOrganisationFilters)},{immediate:!0,deep:!0}),{serviceAccountOrganisations:r,fetching:n}}});function k(t,r,e,n,u,y){const l=O("FSSimpleList");return A(),f(l,v({items:t.serviceAccountOrganisations,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=L(c,[["render",k]]);c.__docgenInfo={displayName:"FSSimpleServiceAccountOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountOrganisationFilters",type:{name:"ServiceAccountOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/serviceAccountOrganisations/FSSimpleServiceAccountOrganisationsList.vue"]};const Wt={title:"Foundation/Core/Lists/Simple Lists/SimpleServiceAccountOrganisationsList",component:o,tags:["autodocs"],argTypes:{...h([a],o),..._(o)}},i={render:t=>({components:{FSSimpleServiceAccountOrganisationsList:o},setup(){return{args:t}},template:`
      <FSSimpleServiceAccountOrganisationsList
        v-bind="args"
      />
    `}),args:{tileProps:t=>({onClick:()=>d("clicked item")(t)})}};var s,m,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Xt=["Default"];export{i as Default,Xt as __namedExportsOrder,Wt as default};
