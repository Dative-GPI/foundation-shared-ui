import{a as d}from"./index-B-lxVbXh.js";import{d as g,w as S,E as f,m as v,L as O,M as A}from"./vue.esm-bundler-NVdFPFZB.js";import{F as a}from"./FSSimpleList-DIWPDsCL.js";import{u as F}from"./useServiceAccountOrganisations-LD8sWnMf.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as _,b as h}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSCol-KRtq6OYO.js";import"./FSLoader-BoDinVVO.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./color-BS29f5Yp.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./useRender-CaGCh2Xu.js";import"./FSFadeOut-W61q8jFE.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BbqArISU.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./FSButton-BqreeKOn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DIbyStIN.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-B28b2m0n.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-DxY0aXhp.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./display-QVN4B5Qw.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSSearchField-Dnz4Beq9.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./density-CE2FkSgs.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./VImg-BdZHkGCX.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSTile-DnwhleJY.js";import"./FSCheckbox-D4XH1I7L.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSButtonEditIcon-DHFlTc3g.js";import"./FSButtonRemoveIcon-ClDcpchh.js";import"./filter-C1K_d8Vd.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const c=g({name:"FSSimpleServiceAccountOrganisationsList",components:{FSSimpleList:a},props:{serviceAccountOrganisationFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:e,fetching:n}=F();return S(()=>t.serviceAccountOrganisationFilters,()=>{e(t.serviceAccountOrganisationFilters)},{immediate:!0,deep:!0}),{serviceAccountOrganisations:r,fetching:n}}});function k(t,r,e,n,u,y){const l=O("FSSimpleList");return A(),f(l,v({items:t.serviceAccountOrganisations,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=L(c,[["render",k]]);c.__docgenInfo={displayName:"FSSimpleServiceAccountOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountOrganisationFilters",type:{name:"ServiceAccountOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/serviceAccountOrganisations/FSSimpleServiceAccountOrganisationsList.vue"]};const ri={title:"Core/Components/Lists/Simple Lists/SimpleServiceAccountOrganisationsList",component:o,tags:["autodocs"],argTypes:{...h([a],o),..._(o)}},i={render:t=>({components:{FSSimpleServiceAccountOrganisationsList:o},setup(){return{args:t}},template:`
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
