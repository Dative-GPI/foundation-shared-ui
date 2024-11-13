import{d as _,w as B,y as l,z as $,A as q,B as v,O as h,C as t,m as w,K as D,L as I,M as N,N as a,H as m,I as p}from"./vue.esm-bundler-l-siv0w9.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as k}from"./FSTagGroup-BU9jkaBL.js";import{F as u}from"./FSIcon-uIr9VdFq.js";import{F as G}from"./FSText-BwKgSTLP.js";import{_ as S}from"./FSRow-CbEgVN08.js";import{F as y}from"./FSDataTable-CU3h_ikB.js";import{u as M}from"./useRoleOrganisations-Le1p0qwB.js";import{a as z,b as A}from"./users-C0O-H65U.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSWrapGroup-cmIYWMlH.js";import"./uuid-DTaye2KM.js";import"./useSlots-C_N_WAus.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./display-BWzbFTnS.js";import"./VIcon-D6ql3n-m.js";import"./locale-CTwwbPAi.js";import"./resizeObserver-CjMDZ25n.js";import"./FSTag-ErOwxBbY.js";import"./FSSpan-Di50moR2.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./FSButton-v1WOpc1k.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DbvAho3u.js";import"./FSCard-DL4SLpmS.js";import"./FSCol-BvqytbKT.js";import"./FSLoader-kY4Od3NB.js";import"./FSDataTableUI-BI3ayRPp.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSSearchField-wkNlBvKw.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-CUVvdxOA.js";import"./VList-ByZS85Zy.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";import"./VImg-CZhZqiQJ.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VSelect-kPgNBBHc.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-03a1Iisa.js";import"./permissionInfos-BPDgTHQl.js";const T=_({name:"FSBaseRoleOrganisationsList",components:{FSDataTable:y,FSTagGroup:k,FSIcon:u,FSText:G,FSRow:S},props:{tableCode:{type:String,required:!1,default:null},roleOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,entities:d,fetching:f}=M(),g=r=>e.modelValue.includes(r);return B(()=>e.roleOrganisationsFilters,(r,s)=>{(!r&&!s||!P.isEqual(r,s))&&i(e.roleOrganisationsFilters??void 0)},{immediate:!0}),{fetchingRoleOrganisations:f,roleOrganisations:d,userTypeLabel:z,userTypeIcon:A,isSelected:g}}});function j(e,i,d,f,g,r){const s=l("FSText"),R=l("FSTagGroup"),C=l("FSDataTable");return $(),q(C,w({loading:e.fetchingRoleOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,items:e.roleOrganisations,itemTo:e.$props.itemTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"item.icon":t(({item:o})=>[a(u,null,{default:t(()=>[m(p(o.icon),1)]),_:2},1024)]),"item.userType":t(({item:o})=>[a(S,{align:"center-left"},{default:t(()=>[a(u,null,{default:t(()=>[m(p(e.userTypeIcon(o.userType)),1)]),_:2},1024),a(s,null,{default:t(()=>[m(p(e.userTypeLabel(o.userType)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":t(({item:o})=>[a(R,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[h(e.$slots,(o,c)=>({name:c,fn:t(L=>[D(e.$slots,c,I(N(L)))])}))]),1040,["loading","showSelect","tableCode","items","itemTo","modelValue"])}const V=E(T,[["render",j]]);T.__docgenInfo={displayName:"FSBaseRoleOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleOrganisationsFilters",type:{name:"RoleOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: RoleOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/roleOrganisations/FSBaseRoleOrganisationsList.vue"]};const Lo={title:"Foundation/Core/Lists/Base Lists/BaseRoleOrganisationsList",component:V,subcomponents:{FSDataTable:y},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["roleOrganisations1"]}}},n={render:e=>({components:{FSBaseRoleOrganisationsList:V},setup(){return{args:e}},template:`
      <FSBaseRoleOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"roleOrganisations1",modelValue:[]}};var F,b,O;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseRoleOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseRoleOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'roleOrganisations1',
    modelValue: []
  }
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const _o=["Default"];export{n as Default,_o as __namedExportsOrder,Lo as default};