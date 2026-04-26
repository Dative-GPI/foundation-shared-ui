import{d as F,w as C,E as p,H as S,m as _,L as m,M as i,J as I,F as G,X as U,k as y}from"./vue.esm-bundler-D_gXonxt.js";import{_ as d}from"./FSRow-cHWWqhhs.js";import{F as k}from"./FSLoader-CdctsmAF.js";import{F as L}from"./FSChipGroup-BMnAo0Gc.js";import{C as w}from"./useColors-B49MKafH.js";import{u as E}from"./useUserOrganisations-BuD9YcYa.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./color-DuOnfdFp.js";import"./theme-DdZUMbNR.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./useRender-BE0GCWmZ.js";import"./FSSlideGroup-CeCO9XCC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dgxxr9ql.js";import"./FSButton-DHeuA-BH.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./useSlots-CdBAzqCX.js";import"./FSSpan-ap0CpdXZ.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSCol-C3EJfcJX.js";import"./VSlideGroup-Bqij08hI.js";import"./index-aKIkx5xA.js";import"./display-BIN9xr9Q.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSWrapGroup-D5YRUBcz.js";import"./FSChip-BxBwP6Ct.js";import"./FSMenu-BRQdQ5Qk.js";import"./VMenu-KvKUKA1I.js";import"./VOverlay-CrMgAm2W.js";import"./easing-DY7PVvcf.js";import"./anchor-DrPAsKKU.js";import"./lazy-aXB44k01.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./transition-CHyhkthg.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-DJfojugM.js";import"./dialog-transition-d5ANZlFh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-CzhkrYh7.js";import"./lodash-5Yh5OMmr.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./permissionInfos-BPDgTHQl.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";const O=F({name:"FSUserOrganisationsChipGroup",components:{FSChipGroup:L,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:s,fetching:n,entities:e}=E();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&s({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:w,fetching:n}}});function v(r,s,n,e,x,B){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(i(),p(d,{key:0},{default:S(()=>[(i(),I(G,null,U(4,t=>y(f,{key:t,variant:"chip",height:"12px"})),64))]),_:1})):(i(),p(h,_({key:1,color:r.ColorEnum.Light,items:(a=r.userOrganisations)==null?void 0:a.map(t=>t.name)},r.$attrs),null,16,["color","items"]))}const l=$(O,[["render",v]]);O.__docgenInfo={displayName:"FSUserOrganisationsChipGroup",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSUserOrganisationsChipGroup.vue"]};const br={title:"Foundation/Core/Lists/FSUserOrganisationsChipGroup",component:l,tags:["autodocs"]},o={render:r=>({components:{FSUserOrganisationsChipGroup:l},setup(){return{args:r}},template:`
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const jr=["userOrganisations"];export{jr as __namedExportsOrder,br as default,o as userOrganisations};
