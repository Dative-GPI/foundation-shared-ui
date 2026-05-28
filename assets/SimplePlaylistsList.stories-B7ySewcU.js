import{a as u}from"./index-B-lxVbXh.js";import{r as f,aa as y,j as S,B as g,Y as F,P as L}from"./vue.esm-bundler-DR0_aU9U.js";import{F as a}from"./FSSimpleList-BAZgedxF.js";import{a as P}from"./usePlaylists-DGAlDCQE.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as h,b as k}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSCol-B2uM4vFw.js";import"./FSLoader-DlWbYN_-.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./color-RD9Ud5Y3.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./useRender-BLRtLddt.js";import"./FSFadeOut-DENuqwmT.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSSearchField-DM7Wv8W0.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./density-SLEyWIf6.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./useTranslations-CDmrxgqt.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./VImg-DooBjoZC.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSTile-DyIXnIBo.js";import"./FSCheckbox-D-n0kplZ.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";import"./FSButtonEditIcon-BJT1uqLi.js";import"./FSButtonRemoveIcon-DEkhrlrM.js";import"./filter-C1K_d8Vd.js";import"./base-7hURbKeK.js";import"./useAppOrganisationId-DfaOV_k9.js";const l=f({name:"FSSimplePlaylistsList",components:{FSSimpleList:a},props:{playlistFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:p,fetching:m}=P();return y(()=>t.playlistFilters,()=>{p(t.playlistFilters)},{immediate:!0}),{playlists:r,fetching:m}}});function C(t,r,p,m,c,b){const d=F("FSSimpleList");return L(),S(d,g({items:t.playlists,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=_(l,[["render",C]]);l.__docgenInfo={displayName:"FSSimplePlaylistsList",exportName:"default",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSSimplePlaylistsList.vue"]};const oi={title:"Foundation/Core/Lists/Simple Lists/SimplePLaylistsList",component:o,tags:["autodocs"],argTypes:{...k([a],o),...h(o)}},i={render:t=>({components:{FSSimplePlaylistsList:o},setup(){return{args:t}},template:`
      <FSSimplePlaylistsList
        v-bind="args"
      />
    `}),args:{tileProps:t=>({onClick:()=>u("clicked item")(t)})}};var e,s,n;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSimplePlaylistsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimplePlaylistsList
        v-bind="args"
      />
    \`
  }),
  args: {
    tileProps: (item: any) => ({
      onClick: () => action("clicked item")(item)
    })
  }
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ri=["Default"];export{i as Default,ri as __namedExportsOrder,oi as default};
