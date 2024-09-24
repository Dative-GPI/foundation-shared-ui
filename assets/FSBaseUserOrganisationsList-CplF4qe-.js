import{d as U,w as v,y as a,z as F,A as S,M as h,N as $,B as o,m as y,I as C,J as _,K as q,L as i,E as p,D as w,G as b}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as L}from"./lodash-BiW_TGGX.js";import{F as B}from"./FSDataTable-CIruG7xe.js";import{_ as l}from"./FSSpan-CCGpb4KF.js";import{F as k}from"./FSImage-VV4rkzPN.js";import{F as N}from"./FSTagGroup-BuAqKeGP.js";import{F as D}from"./FSIconCheck-MILxPI7E.js";import{F as E}from"./FSUserOrganisationTileUI-O1SPRmRE.js";import{a as G}from"./useUserOrganisations-CrfAsfeZ.js";import{u as P,a as z}from"./users-C2Y2e-HI.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSIcon-BVNp7pcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader--MJuLA8w.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./color--o2QfpAv.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-DZA6pxA1.js";import"./FSRow-CA1vgNXx.js";import"./VSpacer-DvdcLDtW.js";import"./FSDataTableUI-C7faQcjJ.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-M73AcfXp.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-DxF8PKcC.js";import"./density-CDPzHPmZ.js";import"./VIcon-BQIm0b3J.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-CiUY3jF9.js";import"./FSText-BN3VvfV9.js";import"./useSlots-P12pG1X5.js";import"./FSSearchField-BTP0Kv2l.js";import"./FSTextField-VVHNKRY7.js";import"./FSBaseField-CEXO2T_h.js";import"./FSButton-CzT4qk-w.js";import"./FSClickable-D0EdtzT9.js";import"./VProgressCircular-D09FP1rk.js";import"./VField-C6F5sWZK.js";import"./loader-C8KBePTS.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-DbrO_Qw0.js";import"./FSDialogMenu-Bh07lE_k.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-B39qfVC2.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-TMm1inSD.js";import"./FSWrapGroup-BrAfZF5Z.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSRadio-BXbOdhye.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VSelect-CIcDcVs4.js";import"./VMenu-Cfqut3Fx.js";import"./FSDivider-CW2X6WDB.js";import"./FSChip-CZ8TO10U.js";import"./FSOptionGroup-BeYA2w7U.js";import"./filter-C1K_d8Vd.js";import"./VBtn-B3SFyF18.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-NfwyqzmC.js";import"./useImages-H1Zoj8aR.js";import"./base-CmdGny12.js";import"./FSTag-CA-pAfrN.js";import"./FSTile-CfLkyy4l.js";import"./permissionInfos-BPDgTHQl.js";const V=U({name:"FSBaseUserOrganisationsList",components:{FSDataTable:B,FSImage:k,FSUserOrganisationTileUI:E,FSSpan:l,FSTagGroup:N,FSIconCheck:D},props:{tableCode:{type:String,required:!0},userOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:s,entities:u,fetching:d}=G(),f=r=>e.modelValue.includes(r);return v(()=>e.userOrganisationsFilters,(r,m)=>{(!r&&!m||!L.isEqual(r,m))&&s(e.userOrganisationsFilters??void 0)},{immediate:!0}),{fetchingUserOrganisations:d,userOrganisations:u,userValidityLabel:P,userTypeLabel:z,isSelected:f}}});function R(e,s,u,d,f,r){const m=a("FSImage"),g=a("FSIconCheck"),O=a("FSTagGroup"),T=a("FSUserOrganisationTileUI"),I=a("FSDataTable");return F(),S(I,y({items:e.userOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingUserOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[0]||(s[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),h({"header.imageId-title":o(()=>[i(M,null,{default:o(()=>[p(" mdi-panorama-variant-outline ")]),_:1})]),"item.imageId":o(({item:t})=>[t.imageId?(F(),S(m,{key:0,height:"32px",width:"32px",imageId:t.imageId},null,8,["imageId"])):w("",!0)]),"item.allowEmails":o(({item:t})=>[i(g,{value:t.allowEmails},null,8,["value"])]),"item.allowSms":o(({item:t})=>[i(g,{value:t.allowSms},null,8,["value"])]),"item.tags":o(({item:t})=>[i(O,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.validity":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userValidityLabel(t.validity)),1)]),_:2},1024)]),"item.userType":o(({item:t})=>[i(l,{font:"text-overline"},{default:o(()=>[p(b(e.userTypeLabel(t.userType)),1)]),_:2},1024)]),"item.tile":o(({item:t,toggleSelect:n})=>[i(T,y({to:e.$props.itemTo&&e.$props.itemTo(t),editable:e.$props.editable,modelValue:e.isSelected(t.id),"onUpdate:modelValue":c=>n(t)},t),null,16,["to","editable","modelValue","onUpdate:modelValue"])]),_:2},[$(e.$slots,(t,n)=>({name:n,fn:o(c=>[C(e.$slots,n,_(q(c)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const _t=A(V,[["render",R]]);V.__docgenInfo={displayName:"FSBaseUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"userOrganisationsFilters",type:{name:"UserOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: UserOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSBaseUserOrganisationsList.vue"]};export{_t as default};