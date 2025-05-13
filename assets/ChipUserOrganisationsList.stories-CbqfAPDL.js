import{d as F,w as C,z as p,C as S,m as _,G as m,H as t,A as I,F as L,Q as U,P as y}from"./vue.esm-bundler-CM4TIH-Q.js";import{_ as d}from"./FSRow-C47sfGk6.js";import{F as k}from"./FSLoader-_1jWS2ee.js";import{F as w}from"./FSChipGroup-DCOYeS23.js";import{a as $}from"./useUserOrganisations-CEQ4t5kG.js";import{C as E}from"./useColors-CjA2D2xA.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./dimensions-DW-k5kP_.js";import"./elevation-DgpWsjTu.js";import"./locale-BqFH1fBg.js";import"./FSSlideGroup-DeB5Ds_m.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BMwpXNyX.js";import"./FSButton-CnIlx-fc.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-a8XmDSU8.js";import"./FSCard-CYsPoqay.js";import"./FSCol-Be93XvPD.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSSpan-BXQyelfo.js";import"./useSlots-c6yg-hhg.js";import"./FSIcon-CIF0zaTI.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./proxiedModel-DKx29MO-.js";import"./index-BJH4L2FX.js";import"./display-CUGteI3_.js";import"./FSWrapGroup-Fe7qxaBI.js";import"./FSChip-DNTt-MXE.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./index-DfSX31J9.js";const l=F({name:"FSChipUserOrganisationsList",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=$();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:E,fetching:n}}});function v(r,i,n,e,x,B){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(t(),p(d,{key:0},{default:S(()=>[(t(),I(L,null,U(4,o=>y(f,{key:o,variant:"chip",height:"12px"})),64))]),_:1})):(t(),p(h,_({key:1,color:r.ColorEnum.Light,labels:(a=r.userOrganisations)==null?void 0:a.map(o=>o.name)},r.$attrs),null,16,["color","labels"]))}const O=G(l,[["render",v]]);l.__docgenInfo={displayName:"FSChipUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue"]};const Ur={title:"Foundation/Core/Lists/FSChipUserOrganisationsList",component:O,tags:["autodocs"]},s={render:r=>({components:{FSChipUserOrganisationsList:O},setup(){return{args:r}},template:`
      <FSChipUserOrganisationsList
        :userOrganisationIds="args.userOrganisationIds"
      />
    `}),args:{userOrganisationIds:["1","2"]}};var u,c,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSChipUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSChipUserOrganisationsList
        :userOrganisationIds="args.userOrganisationIds"
      />
    \`
  }),
  args: {
    userOrganisationIds: ["1", "2"]
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const yr=["userOrganisations"];export{yr as __namedExportsOrder,Ur as default,s as userOrganisations};
