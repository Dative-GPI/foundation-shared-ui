import{d as F,w as C,B as p,D as S,m as _,I as m,J as t,G as I,F as L,U,q as y}from"./vue.esm-bundler-B9lxvfDw.js";import{_ as d}from"./FSRow-CFa9RNor.js";import{F as k}from"./FSLoader-FkDR4IbG.js";import{F as w}from"./FSChipGroup-COTpZdOm.js";import{a as $}from"./useUserOrganisations-C2JjD9WI.js";import{C as B}from"./useColors-B5aYgogF.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./color-CLtf7Qrc.js";import"./theme-Bz5xEpqh.js";import"./dimensions-n1mPaUbN.js";import"./elevation-DZ0Sccyb.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./useRender-DM2jvMPN.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSIcon-kCffLiJ2.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./display-BzNfeHa8.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSWrapGroup-rn2r_UVH.js";import"./FSChip-CnWvj3Fb.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DYlC2SM8.js";import"./useAppOrganisationId-BPp8-Hw1.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";const l=F({name:"FSChipUserOrganisationsList",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=$();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:B,fetching:n}}});function G(r,i,n,e,q,v){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(t(),p(d,{key:0},{default:S(()=>[(t(),I(L,null,U(4,o=>y(f,{key:o,variant:"chip",height:"12px"})),64))]),_:1})):(t(),p(h,_({key:1,color:r.ColorEnum.Light,labels:(a=r.userOrganisations)==null?void 0:a.map(o=>o.name)},r.$attrs),null,16,["color","labels"]))}const O=E(l,[["render",G]]);l.__docgenInfo={displayName:"FSChipUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue"]};const wr={title:"Foundation/Core/Lists/FSChipUserOrganisationsList",component:O,tags:["autodocs"]},s={render:r=>({components:{FSChipUserOrganisationsList:O},setup(){return{args:r}},template:`
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
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const $r=["userOrganisations"];export{$r as __namedExportsOrder,wr as default,s as userOrganisations};
