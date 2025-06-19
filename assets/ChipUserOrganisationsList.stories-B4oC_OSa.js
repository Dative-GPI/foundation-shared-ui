import{d as F,w as C,B as p,E as S,m as _,I as m,J as t,C as I,F as L,S as U,z as y}from"./vue.esm-bundler-BB--BfRN.js";import{_ as d}from"./FSRow-Bdc52rY8.js";import{F as k}from"./FSLoader-Cf5HtYZd.js";import{F as w}from"./FSChipGroup-Mi70SaMg.js";import{a as E}from"./useUserOrganisations-U9vMnnuq.js";import{C as $}from"./useColors-CeWNZtds.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./color-DIvEt_AX.js";import"./theme-BwQCEo_4.js";import"./dimensions-DwY9cRwZ.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./FSSlideGroup-DLHspItq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./FSButton-DEqhqb0b.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./FSCol-BU2zndN-.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSIcon-BKav6CVU.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-9ysw5oGg.js";import"./display-DzHu_6W3.js";import"./FSWrapGroup-TGBfJRdY.js";import"./FSChip-fXKFC3cO.js";import"./permissionInfos-BPDgTHQl.js";import"./base-CiabG-44.js";import"./useAppOrganisationId-D3b8yxVY.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./index-_Z9wfsFC.js";const l=F({name:"FSChipUserOrganisationsList",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=E();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:$,fetching:n}}});function v(r,i,n,e,x,G){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(t(),p(d,{key:0},{default:S(()=>[(t(),I(L,null,U(4,o=>y(f,{key:o,variant:"chip",height:"12px"})),64))]),_:1})):(t(),p(h,_({key:1,color:r.ColorEnum.Light,labels:(a=r.userOrganisations)==null?void 0:a.map(o=>o.name)},r.$attrs),null,16,["color","labels"]))}const O=B(l,[["render",v]]);l.__docgenInfo={displayName:"FSChipUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue"]};const Ur={title:"Foundation/Core/Lists/FSChipUserOrganisationsList",component:O,tags:["autodocs"]},s={render:r=>({components:{FSChipUserOrganisationsList:O},setup(){return{args:r}},template:`
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
