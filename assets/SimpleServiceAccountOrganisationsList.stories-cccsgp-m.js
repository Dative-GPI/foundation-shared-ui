import{a as d}from"./chunk-MZXVCX43-CvRfcaG5.js";import{d as g,w as S,B as f,m as v,I as O,J as A}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as a}from"./FSSimpleList-CPWD7MUH.js";import{u as F}from"./useServiceAccountOrganisations-CG_Vq7s9.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as _,b as h}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-CjY3icuR.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSCol-DVEaUPKl.js";import"./FSLoader-0nGK1qhA.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./color-BM2dSUAO.js";import"./dimensions-TKp8HHzB.js";import"./elevation-CjJG1XnK.js";import"./locale-K9DBMW2q.js";import"./FSFadeOut-DU3Ke7qi.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-nu8Cr66q.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSIcon-CeLDRxMK.js";import"./VSlideGroup-DVr5PPvN.js";import"./index-Dylhq_Dl.js";import"./display-CpM-3U3n.js";import"./group-CxQl3dDS.js";import"./proxiedModel-Nw0LX-ta.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSSearchField-X1df83qn.js";import"./FSTextField-CTUDqfDL.js";import"./FSBaseField-Bo38Hl_f.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./transition-Ucf2Ovas.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./density-mssFUWH2.js";import"./loader-CbVzlK-r.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B48vLg-P.js";import"./useTranslations-5XSl7qXA.js";import"./FSImage-B4vuOyJ-.js";import"./FSImageUI-DVteMu9v.js";import"./VImg-BmPSKt86.js";import"./useImages-R4kG-Q-t.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-CakgBvEM.js";import"./lodash-Zo30T2Bj.js";import"./useAppAuthToken-BT-dflJP.js";import"./FSTile-CPs209xc.js";import"./FSCheckbox-D-xuSzdC.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";import"./FSButtonEditIcon-BNK7II6G.js";import"./FSButtonRemoveIcon-C01X5qxr.js";import"./filter-C1K_d8Vd.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Cj4tO-2v.js";import"./useAppOrganisationId-DWUnIwce.js";const c=g({name:"FSSimpleServiceAccountOrganisationsList",components:{FSSimpleList:a},props:{serviceAccountOrganisationFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:e,fetching:n}=F();return S(()=>t.serviceAccountOrganisationFilters,()=>{e(t.serviceAccountOrganisationFilters)},{immediate:!0,deep:!0}),{serviceAccountOrganisations:r,fetching:n}}});function k(t,r,e,n,u,y){const l=O("FSSimpleList");return A(),f(l,v({items:t.serviceAccountOrganisations,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=L(c,[["render",k]]);c.__docgenInfo={displayName:"FSSimpleServiceAccountOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountOrganisationFilters",type:{name:"ServiceAccountOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/serviceAccountOrganisations/FSSimpleServiceAccountOrganisationsList.vue"]};const Wt={title:"Foundation/Core/Lists/Simple Lists/SimpleServiceAccountOrganisationsList",component:o,tags:["autodocs"],argTypes:{...h([a],o),..._(o)}},i={render:t=>({components:{FSSimpleServiceAccountOrganisationsList:o},setup(){return{args:t}},template:`
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
