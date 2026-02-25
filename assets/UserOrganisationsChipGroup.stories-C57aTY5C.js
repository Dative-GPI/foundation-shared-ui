import{d as F,w as C,B as p,D as S,m as _,I as m,J as s,G as I,F as G,U,q as y}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as d}from"./FSRow-DIk8KFbG.js";import{F as k}from"./FSLoader-uhE9mCg0.js";import{F as w}from"./FSChipGroup-CIJdEqtJ.js";import{a as L}from"./useUserOrganisations-DWhatJEo.js";import{C as $}from"./useColors-COEXNh00.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./useRender-Dce1Ng4u.js";import"./FSSlideGroup-BOTL2kDs.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BVPIcqKL.js";import"./FSButton-BTgaogZq.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCard-BCuiauGe.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSCol-D_lbFmZy.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./display-DvHDH61C.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSWrapGroup-ES-pUhBN.js";import"./FSChip-BAG_v8gF.js";import"./FSMenu-mE5omh8N.js";import"./VMenu-DOme5rNf.js";import"./VOverlay-BApTxsTF.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./lazy-Bqido2cx.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./dialog-transition-CBLjbvr6.js";import"./permissionInfos-BPDgTHQl.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";const O=F({name:"FSUserOrganisationsChipGroup",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=L();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:$,fetching:n}}});function E(r,i,n,e,q,v){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(s(),p(d,{key:0},{default:S(()=>[(s(),I(G,null,U(4,t=>y(f,{key:t,variant:"chip",height:"12px"})),64))]),_:1})):(s(),p(h,_({key:1,color:r.ColorEnum.Light,items:(a=r.userOrganisations)==null?void 0:a.map(t=>t.name)},r.$attrs),null,16,["color","items"]))}const l=B(O,[["render",E]]);O.__docgenInfo={displayName:"FSUserOrganisationsChipGroup",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSUserOrganisationsChipGroup.vue"]};const Pr={title:"Foundation/Core/Lists/FSUserOrganisationsChipGroup",component:l,tags:["autodocs"]},o={render:r=>({components:{FSUserOrganisationsChipGroup:l},setup(){return{args:r}},template:`
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const Vr=["userOrganisations"];export{Vr as __namedExportsOrder,Pr as default,o as userOrganisations};
