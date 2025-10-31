import{d as F,w as C,B as p,E as S,m as _,I as m,J as t,C as I,F as L,S as U,k as y}from"./vue.esm-bundler-CC_jVOJ5.js";import{_ as d}from"./FSRow-CjY3icuR.js";import{F as k}from"./FSLoader-0nGK1qhA.js";import{F as w}from"./FSChipGroup-Dw1M0v4r.js";import{a as E}from"./useUserOrganisations-C4HqOR1U.js";import{C as $}from"./useColors-BXuuHMxE.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./color-BM2dSUAO.js";import"./theme-Bp81IclV.js";import"./dimensions-TKp8HHzB.js";import"./elevation-CjJG1XnK.js";import"./locale-K9DBMW2q.js";import"./FSSlideGroup-nu8Cr66q.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./FSCol-DVEaUPKl.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSIcon-CeLDRxMK.js";import"./VSlideGroup-DVr5PPvN.js";import"./index-Dylhq_Dl.js";import"./display-CpM-3U3n.js";import"./group-CxQl3dDS.js";import"./proxiedModel-Nw0LX-ta.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./FSChip-DtJe-ffy.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Cj4tO-2v.js";import"./useAppOrganisationId-DWUnIwce.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-aQiBqOvf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./index-_Z9wfsFC.js";const l=F({name:"FSChipUserOrganisationsList",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=E();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:$,fetching:n}}});function v(r,i,n,e,x,G){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(t(),p(d,{key:0},{default:S(()=>[(t(),I(L,null,U(4,o=>y(f,{key:o,variant:"chip",height:"12px"})),64))]),_:1})):(t(),p(h,_({key:1,color:r.ColorEnum.Light,labels:(a=r.userOrganisations)==null?void 0:a.map(o=>o.name)},r.$attrs),null,16,["color","labels"]))}const O=B(l,[["render",v]]);l.__docgenInfo={displayName:"FSChipUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue"]};const yr={title:"Foundation/Core/Lists/FSChipUserOrganisationsList",component:O,tags:["autodocs"]},s={render:r=>({components:{FSChipUserOrganisationsList:O},setup(){return{args:r}},template:`
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
