import{d as F,w as C,B as p,E as S,m as _,I as m,J as t,C as I,F as L,S as U,k as y}from"./vue.esm-bundler-CocPPKUI.js";import{_ as d}from"./FSRow-BvJ7lU5E.js";import{F as k}from"./FSLoader-BeIlBGG_.js";import{F as w}from"./FSChipGroup-BNdekU-7.js";import{a as E}from"./useUserOrganisations-DeT_s7o2.js";import{C as $}from"./useColors-DUufJJPH.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./color-yBCdco2I.js";import"./theme-DhcBBMcp.js";import"./dimensions-C9PuMYcl.js";import"./elevation-CsFMJmSN.js";import"./locale-_fONYh-8.js";import"./FSSlideGroup-BpYleAPY.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./FSButton-VjwKfCr9.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./FSCol-79-COv64.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-CKNHHVc2.js";import"./VSlideGroup-D3ZQzm0f.js";import"./index-DfBdMsnv.js";import"./display-BmuJHlI4.js";import"./group-CbiZXdYV.js";import"./proxiedModel-DvocDLKO.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./FSWrapGroup-CR1U-5kP.js";import"./FSChip-FYuzsxJw.js";import"./permissionInfos-BPDgTHQl.js";import"./base-D6U4mRRi.js";import"./useAppOrganisationId-DacmST4-.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./index-_Z9wfsFC.js";const l=F({name:"FSChipUserOrganisationsList",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=E();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:$,fetching:n}}});function v(r,i,n,e,x,G){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(t(),p(d,{key:0},{default:S(()=>[(t(),I(L,null,U(4,o=>y(f,{key:o,variant:"chip",height:"12px"})),64))]),_:1})):(t(),p(h,_({key:1,color:r.ColorEnum.Light,labels:(a=r.userOrganisations)==null?void 0:a.map(o=>o.name)},r.$attrs),null,16,["color","labels"]))}const O=B(l,[["render",v]]);l.__docgenInfo={displayName:"FSChipUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue"]};const yr={title:"Foundation/Core/Lists/FSChipUserOrganisationsList",component:O,tags:["autodocs"]},s={render:r=>({components:{FSChipUserOrganisationsList:O},setup(){return{args:r}},template:`
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
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const kr=["userOrganisations"];export{kr as __namedExportsOrder,yr as default,s as userOrganisations};
