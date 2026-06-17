import{d as F,w as C,E as p,H as S,m as I,L as m,M as i,J as _,F as G,X as U,k as y}from"./vue.esm-bundler-C5-CUMHT.js";import{F as d}from"./FSRow-C8aYwBu-.js";import{F as k}from"./FSLoader-BTZOtjrt.js";import{F as L}from"./FSChipGroup-_HVNT_pj.js";import{C as w}from"./useColors-BAnxS_-e.js";import{u as E}from"./useUserOrganisations-CCu_PQEW.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./color-D7ZCcSxD.js";import"./theme-CB6As9Cd.js";import"./dimensions-Bm76csmg.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./useRender-_COxrB9K.js";import"./FSSlideGroup-5yThapiu.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./FSButton-DohpVEzP.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSText-C8rmUTxK.js";import"./useSlots-ol4Nk6ew.js";import"./FSSpan-D6aG51_c.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./FSCol-DedFW0nl.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./display-IUfV935l.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSWrapGroup-DMf-egfq.js";import"./FSChip-PSYJcPlU.js";import"./FSMenu-5jQDuEvO.js";import"./VMenu-dxHuUw__.js";import"./VOverlay-CG3iG1zZ.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./lazy-DXVvciW4.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./dialog-transition-DRDndVEC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BFVjoMA-.js";import"./useAppOrganisationId-CSdtG-as.js";const O=F({name:"FSUserOrganisationsChipGroup",components:{FSChipGroup:L,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:s,fetching:n,entities:e}=E();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&s({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:w,fetching:n}}});function v(r,s,n,e,x,B){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(i(),p(d,{key:0},{default:S(()=>[(i(),_(G,null,U(4,t=>y(f,{key:t,variant:"chip",height:"12px"})),64))]),_:1})):(i(),p(h,I({key:1,color:r.ColorEnum.Light,items:(a=r.userOrganisations)==null?void 0:a.map(t=>t.name)},r.$attrs),null,16,["color","items"]))}const l=$(O,[["render",v]]);O.__docgenInfo={displayName:"FSUserOrganisationsChipGroup",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSUserOrganisationsChipGroup.vue"]};const br={title:"Core/Components/Lists/FSUserOrganisationsChipGroup",component:l,tags:["autodocs"]},o={render:r=>({components:{FSUserOrganisationsChipGroup:l},setup(){return{args:r}},template:`
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
