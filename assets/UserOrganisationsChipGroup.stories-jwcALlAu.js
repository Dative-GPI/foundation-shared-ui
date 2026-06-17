import{d as F,w as C,E as p,H as S,m as I,L as m,M as i,J as _,F as G,X as U,k as y}from"./vue.esm-bundler-NVdFPFZB.js";import{F as d}from"./FSRow-Dg2RhQyl.js";import{F as k}from"./FSLoader-DOgbrYCd.js";import{F as L}from"./FSChipGroup-YRGc8t7X.js";import{C as w}from"./useColors-B9SkzYFF.js";import{u as E}from"./useUserOrganisations-Soh04Owq.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./color-BS29f5Yp.js";import"./theme-DuZszYeY.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./useRender-CaGCh2Xu.js";import"./FSSlideGroup-BYhxS2B0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BffFRYRL.js";import"./FSButton-CdKzPvIq.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DR713pSR.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-B28b2m0n.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-ghpSlWxI.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./FSCol-KRtq6OYO.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./display-QVN4B5Qw.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSWrapGroup-jHFOEYDl.js";import"./FSChip-MKc2C3wM.js";import"./FSMenu-DcCsQXC4.js";import"./VMenu-BCj9c0xY.js";import"./VOverlay-BuHPOPgF.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./lazy-sPNxwuRm.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Blv54jCg.js";import"./dialog-transition-B9S_00bc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const O=F({name:"FSUserOrganisationsChipGroup",components:{FSChipGroup:L,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:s,fetching:n,entities:e}=E();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&s({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:w,fetching:n}}});function v(r,s,n,e,x,B){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(i(),p(d,{key:0},{default:S(()=>[(i(),_(G,null,U(4,t=>y(f,{key:t,variant:"chip",height:"12px"})),64))]),_:1})):(i(),p(h,I({key:1,color:r.ColorEnum.Light,items:(a=r.userOrganisations)==null?void 0:a.map(t=>t.name)},r.$attrs),null,16,["color","items"]))}const l=$(O,[["render",v]]);O.__docgenInfo={displayName:"FSUserOrganisationsChipGroup",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSUserOrganisationsChipGroup.vue"]};const br={title:"Core/Components/Lists/FSUserOrganisationsChipGroup",component:l,tags:["autodocs"]},o={render:r=>({components:{FSUserOrganisationsChipGroup:l},setup(){return{args:r}},template:`
      <FSUserOrganisationsChipGroup
        :userOrganisationIds="args.userOrganisationIds"
      />
    `}),args:{userOrganisationIds:["1","2"]}};var u,g,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(g=o.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const jr=["userOrganisations"];export{jr as __namedExportsOrder,br as default,o as userOrganisations};
