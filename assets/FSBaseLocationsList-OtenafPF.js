import{d as c,w as f,y as g,z as L,A as F,M as b,N as V,B as m,m as y,I as S,J as _,K as $,L as h,E as C,G as q}from"./vue.esm-bundler-Vj2X7okO.js";import{_ as B}from"./lodash-BiW_TGGX.js";import{F as v}from"./FSDataTable-ByS6eBsk.js";import{_ as n}from"./FSIcon-C5J86pUk.js";import{u as I}from"./useLocations-CFhTBaVS.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VImg-BXfgvzNq.js";import"./css-CbCR1nbl.js";import"./useColors-ClJ5KOuK.js";import"./index-3zl-tJp_.js";import"./theme-DqOMA9k1.js";import"./color-Dk23S21P.js";import"./dimensions-CBrtQk_X.js";import"./elevation-DH7kyzD7.js";import"./locale-CMOn_BOp.js";import"./rounded-B-50KYhN.js";import"./transition-Cs7QtK7U.js";import"./index-DQeMThUY.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VSpacer-BJ2TWwuy.js";import"./FSDataTableUI-CWLbUHmv.js";import"./vue-router-Cn9ishJ4.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-CEveiKls.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./density-BWgXlOb-.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./proxiedModel-CZPY81Tp.js";import"./index-BN7Lbnw3.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./index-7QBgy7JM.js";import"./form-BN2rR47-.js";import"./FSCard-CD3PuQHv.js";import"./FSText-BFkdlBCz.js";import"./FSSearchField-DQjooe7z.js";import"./FSTextField-BxQZ_6yr.js";import"./FSBaseField-Na9zArMU.js";import"./FSButton-DypSO1L1.js";import"./FSClickable-HpeyF8B8.js";import"./VProgressCircular-BALYDMME.js";import"./VField-C1LOclAH.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DyPMaPr_.js";import"./FSSelectField-Df_Hyyw7.js";import"./FSDialogMenu-BLjBa2f5.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DJuMPLhX.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-_rtSdk97.js";import"./FSWrapGroup-WFgHTW5y.js";import"./FSFadeOut-k2izDgAG.js";import"./FSRadio-DUmD3b7i.js";import"./VList-C3UDUNRO.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-D4M3PHT5.js";import"./VMenu-BOpQjLNS.js";import"./FSDivider-D-_vZpJK.js";import"./FSChip-Cy1QD-MY.js";import"./FSOptionGroup-CNdXJuEX.js";import"./VBtn-8V3HVfv8.js";import"./filter-KqM1uUBX.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./address-CE2z3AEI.js";const l=c({name:"BaseLocationsList",components:{FSDataTable:v,FSIcon:n},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(o){const{getMany:t,fetching:a,entities:p}=I();return f(()=>o.locationFilters,(r,i)=>{(!r&&!i||!B.isEqual(r,i))&&t(o.locationFilters)},{immediate:!0}),{fetchingLocations:a,locations:p}}});function w(o,t,a,p,r,i){const d=g("FSDataTable");return L(),F(d,y({mode:"table",loading:o.fetchingLocations,disableIterator:!0,items:o.locations,tableCode:o.tableCode,modelValue:o.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=e=>o.$emit("update:modelValue",e))},o.$attrs),b({"item.icon":m(({item:e})=>[h(n,null,{default:m(()=>[C(q(e.icon),1)]),_:2},1024)]),_:2},[V(o.$slots,(e,s)=>({name:s,fn:m(u=>[S(o.$slots,s,_($(u)))])}))]),1040,["loading","items","tableCode","modelValue"])}const at=N(l,[["render",w]]);l.__docgenInfo={displayName:"BaseLocationsList",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/locations/FSBaseLocationsList.vue"]};export{at as default};