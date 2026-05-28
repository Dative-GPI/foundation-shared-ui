import{r as F,aa as C,j as p,ac as S,B as _,Y as m,P as i,l as I,F as G,W as U,p as y}from"./vue.esm-bundler-DR0_aU9U.js";import{_ as d}from"./FSRow-C8VtPvPz.js";import{F as k}from"./FSLoader-DlWbYN_-.js";import{F as L}from"./FSChipGroup-x9KDE_OT.js";import{a as w}from"./useColors-CvhpHTRO.js";import{a as $}from"./useUserOrganisations-DDuCYNpF.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./useRender-BLRtLddt.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./FSCol-B2uM4vFw.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSWrapGroup-v391AceI.js";import"./FSChip-ShmCCKc7.js";import"./FSMenu-Dpr7CvAm.js";import"./VMenu-CkdLE1rB.js";import"./VOverlay-BwyinDfp.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./lazy-DY4Wto-x.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./dialog-transition-BGzvJBOV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./permissionInfos-BPDgTHQl.js";import"./base-7hURbKeK.js";import"./useAppOrganisationId-DfaOV_k9.js";const O=F({name:"FSUserOrganisationsChipGroup",components:{FSChipGroup:L,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:s,fetching:n,entities:e}=$();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&s({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:w,fetching:n}}});function E(r,s,n,e,v,x){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(i(),p(d,{key:0},{default:S(()=>[(i(),I(G,null,U(4,t=>y(f,{key:t,variant:"chip",height:"12px"})),64))]),_:1})):(i(),p(h,_({key:1,color:r.ColorEnum.Light,items:(a=r.userOrganisations)==null?void 0:a.map(t=>t.name)},r.$attrs),null,16,["color","items"]))}const l=B(O,[["render",E]]);O.__docgenInfo={displayName:"FSUserOrganisationsChipGroup",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSUserOrganisationsChipGroup.vue"]};const br={title:"Foundation/Core/Lists/FSUserOrganisationsChipGroup",component:l,tags:["autodocs"]},o={render:r=>({components:{FSUserOrganisationsChipGroup:l},setup(){return{args:r}},template:`
      <FSUserOrganisationsChipGroup
        :userOrganisationIds="args.userOrganisationIds"
      />
    `}),args:{userOrganisationIds:["1","2"]}};var u,c,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSUserOrganisationsChipGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSUserOrganisationsChipGroup
        :userOrganisationIds="args.userOrganisationIds"
      />
    \`
  }),
  args: {
    userOrganisationIds: ["1", "2"]
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const zr=["userOrganisations"];export{zr as __namedExportsOrder,br as default,o as userOrganisations};
