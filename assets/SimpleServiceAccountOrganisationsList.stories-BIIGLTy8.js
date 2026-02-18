import{a as d}from"./index-B-lxVbXh.js";import{d as g,w as S,B as f,m as v,I as O,J as A}from"./vue.esm-bundler-B9lxvfDw.js";import{F as a}from"./FSSimpleList-C8GwMOiy.js";import{u as F}from"./useServiceAccountOrganisations-B4rsu1rH.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as _,b as h}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-CFa9RNor.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSCol-BwxAijHz.js";import"./FSLoader-FkDR4IbG.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./color-CLtf7Qrc.js";import"./dimensions-n1mPaUbN.js";import"./elevation-DZ0Sccyb.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./useRender-DM2jvMPN.js";import"./FSFadeOut-DwiC6ECo.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./FSButtonNextIcon-BETncHzg.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSIcon-kCffLiJ2.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./display-BzNfeHa8.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSSearchField-OT9cCDCH.js";import"./FSTextField-mjFAiq2r.js";import"./FSBaseField-CSo0Z4y4.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./transition-Dh_EAQcC.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./density-DvMOIaQw.js";import"./loader-CaGstafT.js";import"./anchor-ByUPiJZt.js";import"./rounded-BrvRf1BO.js";import"./VDefaultsProvider-BurwYF19.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-Dli51uy9.js";import"./useTranslations-AmWs0SAL.js";import"./FSImage-BdRbjk_B.js";import"./FSImageUI-Dstvh29N.js";import"./VImg-UzuohEtG.js";import"./useImages-CXY-OT-0.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-Cnww6a6j.js";import"./FSTile-05t0iUHJ.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./index-EdIR5CJS.js";import"./FSButtonEditIcon-6HGvQw1Y.js";import"./FSButtonRemoveIcon-BKhQYIAP.js";import"./filter-C1K_d8Vd.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DYlC2SM8.js";import"./useAppOrganisationId-BPp8-Hw1.js";const c=g({name:"FSSimpleServiceAccountOrganisationsList",components:{FSSimpleList:a},props:{serviceAccountOrganisationFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:e,fetching:n}=F();return S(()=>t.serviceAccountOrganisationFilters,()=>{e(t.serviceAccountOrganisationFilters)},{immediate:!0,deep:!0}),{serviceAccountOrganisations:r,fetching:n}}});function k(t,r,e,n,u,y){const l=O("FSSimpleList");return A(),f(l,v({items:t.serviceAccountOrganisations,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=L(c,[["render",k]]);c.__docgenInfo={displayName:"FSSimpleServiceAccountOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountOrganisationFilters",type:{name:"ServiceAccountOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/serviceAccountOrganisations/FSSimpleServiceAccountOrganisationsList.vue"]};const Yt={title:"Foundation/Core/Lists/Simple Lists/SimpleServiceAccountOrganisationsList",component:o,tags:["autodocs"],argTypes:{...h([a],o),..._(o)}},i={render:t=>({components:{FSSimpleServiceAccountOrganisationsList:o},setup(){return{args:t}},template:`
      <FSSimpleServiceAccountOrganisationsList
        v-bind="args"
      />
    `}),args:{tileProps:t=>({onClick:()=>d("clicked item")(t)})}};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Zt=["Default"];export{i as Default,Zt as __namedExportsOrder,Yt as default};
