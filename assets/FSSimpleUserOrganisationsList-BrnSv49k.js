import{d as s,w as n,y as a,z as u,A as l,m as c}from"./vue.esm-bundler-BSyvBTC9.js";import{F as f}from"./FSSimpleList-DyAM7k0C.js";import{a as d}from"./useUserOrganisations-CrfAsfeZ.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./FSCol-DZA6pxA1.js";import"./FSIcon-BVNp7pcM.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VIcon-BQIm0b3J.js";import"./color--o2QfpAv.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSImage-VV4rkzPN.js";import"./FSImageUI-NfwyqzmC.js";import"./FSLoader--MJuLA8w.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-BL_hkJAm.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-H1Zoj8aR.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./FSTile-CfLkyy4l.js";import"./FSClickable-D0EdtzT9.js";import"./FSCard-CiUY3jF9.js";import"./VProgressCircular-D09FP1rk.js";import"./FSCheckbox-M73AcfXp.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-DxF8PKcC.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./index-DwLKzfXL.js";import"./form-B61Sg6X-.js";import"./FSFadeOut-Chaq66Nt.js";import"./uuid-DTaye2KM.js";import"./FSSearchField-BTP0Kv2l.js";import"./FSTextField-VVHNKRY7.js";import"./FSBaseField-CEXO2T_h.js";import"./VSpacer-DvdcLDtW.js";import"./FSButton-CzT4qk-w.js";import"./VField-C6F5sWZK.js";import"./loader-C8KBePTS.js";import"./anchor-D9N-895C.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CdSqQFV3.js";import"./FSButtonEditIcon-wSlpmx4B.js";import"./FSButtonRemoveIcon-ChKFEsAi.js";import"./filter-C1K_d8Vd.js";import"./permissionInfos-BPDgTHQl.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";const e=s({name:"FSSimpleUserOrganisationsList",components:{FSSimpleList:f},props:{userOrganisationFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:i,getMany:r,fetching:o}=d();return n(()=>t.userOrganisationFilters,()=>{r(t.userOrganisationFilters)},{immediate:!0}),{userOrganisations:i,fetching:o}}});function F(t,i,r,o,m,O){const p=a("FSSimpleList");return u(),l(p,c({items:t.userOrganisations,itemLabel:"name",loading:t.fetching},t.$attrs),null,16,["items","loading"])}const qt=g(e,[["render",F]]);e.__docgenInfo={displayName:"FSSimpleUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSSimpleUserOrganisationsList.vue"]};export{qt as default};