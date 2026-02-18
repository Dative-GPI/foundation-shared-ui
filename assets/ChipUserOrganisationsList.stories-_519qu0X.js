import{d as F,w as C,B as p,D as S,m as _,I as m,J as t,G as I,F as L,U,q as y}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as d}from"./FSRow-DIk8KFbG.js";import{F as k}from"./FSLoader-Cl8hDT8j.js";import{F as w}from"./FSChipGroup-ChlCfj12.js";import{a as $}from"./useUserOrganisations-BJ7SVcsB.js";import{C as B}from"./useColors-BM_SKUZx.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./color-BW36qAym.js";import"./theme-Cdiv_FYE.js";import"./dimensions-B7sNhH2O.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./useRender-BcOya-6A.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./FSButton-CZRwWCRJ.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-BH6GLU3V.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./FSCol-D_lbFmZy.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./display-D8bdLPBN.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSWrapGroup-DzpSjUDj.js";import"./FSChip-BDUVXgpY.js";import"./permissionInfos-BPDgTHQl.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";const l=F({name:"FSChipUserOrganisationsList",components:{FSChipGroup:w,FSLoader:k,FSRow:d},props:{userOrganisationIds:{type:Array,required:!1}},setup(r){const{getMany:i,fetching:n,entities:e}=$();return C(()=>r.userOrganisationIds,async()=>{r.userOrganisationIds&&r.userOrganisationIds.length>0&&i({userOrganisationsIds:r.userOrganisationIds})},{immediate:!0}),{userOrganisations:e,ColorEnum:B,fetching:n}}});function G(r,i,n,e,q,v){var a;const f=m("FSLoader"),h=m("FSChipGroup");return r.fetching?(t(),p(d,{key:0},{default:S(()=>[(t(),I(L,null,U(4,o=>y(f,{key:o,variant:"chip",height:"12px"})),64))]),_:1})):(t(),p(h,_({key:1,color:r.ColorEnum.Light,labels:(a=r.userOrganisations)==null?void 0:a.map(o=>o.name)},r.$attrs),null,16,["color","labels"]))}const O=E(l,[["render",G]]);l.__docgenInfo={displayName:"FSChipUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationIds",type:{name:"string[]"},required:!1}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue"]};const Br={title:"Foundation/Core/Lists/FSChipUserOrganisationsList",component:O,tags:["autodocs"]},s={render:r=>({components:{FSChipUserOrganisationsList:O},setup(){return{args:r}},template:`
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
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const Er=["userOrganisations"];export{Er as __namedExportsOrder,Br as default,s as userOrganisations};
