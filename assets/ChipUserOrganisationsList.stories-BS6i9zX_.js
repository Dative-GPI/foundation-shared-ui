import{d as F,w as C,z as p,C as S,m as _,G as m,H as t,A as I,F as L,Q as U,P as y}from"./vue.esm-bundler-PTWG9x2X.js";import{_ as d}from"./FSRow-DPcQMiM9.js";import{F as k}from"./FSLoader-DjLBB-ae.js";import{F as w}from"./FSChipGroup-DA0zWeyu.js";import{a as $}from"./useUserOrganisations-DW8PbRkc.js";import{C as E}from"./useColors-CHEA4ij4.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./color-CCpgnDIk.js";import"./theme-D6MQh39g.js";import"./dimensions-v18atrWI.js";import"./elevation-CrSwNJwg.js";import"./locale-Cz_4DTJh.js";import"./FSSlideGroup-Jp6XGK-I.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-GWsRoL9L.js";import"./FSButton-YqGArPy2.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-TnS9e2Ej.js";import"./FSCard-DkDNRB06.js";import"./FSCol-qfATdd_b.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSIcon-Df5FR-8G.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./proxiedModel-CvHSoKPb.js";import"./index-b-ADC_Il.js";import"./display-CESVul9-.js";import"./FSWrapGroup-C1TeRipg.js";import"./FSChip-Czu45ZxK.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BJ27TNVe.js";import"./useAppOrganisationId-CurthI5S.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./index-DfSX31J9.js";const l=F({name:"FSChipUserOrganisationsList",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=$();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:E,fetching:n}}});function v(r,i,n,e,x,B){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(t(),p(d,{key:0},{default:S(()=>[(t(),I(L,null,U(4,o=>y(f,{key:o,variant:"chip",height:"12px"})),64))]),_:1})):(t(),p(h,_({key:1,color:r.ColorEnum.Light,labels:(a=r.userOrganisations)==null?void 0:a.map(o=>o.name)},r.$attrs),null,16,["color","labels"]))}const O=G(l,[["render",v]]);l.__docgenInfo={displayName:"FSChipUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue"]};const Ur={title:"Foundation/Core/Lists/FSChipUserOrganisationsList",component:O,tags:["autodocs"]},s={render:r=>({components:{FSChipUserOrganisationsList:O},setup(){return{args:r}},template:`
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
