import{_ as h}from"./lodash-BiW_TGGX.js";import{d as E,b as z,c as V,g as R,w as b,y as f,z as n,A as d,B as H,O as K,C as i,m as c,K as G,L as J,M as Q,N as W,H as v,I as X,F as m}from"./vue.esm-bundler-l-siv0w9.js";import{F as Y}from"./FSDataTable-Ut8ZCOp7.js";import{F as y}from"./FSIcon-CvjHaRpL.js";import{F as Z}from"./FSDashboardShallowTileUI-BA7ZnAdS.js";import{F as _}from"./FSDashboardOrganisationTileUI-DRZihWxd.js";import{F as x}from"./FSDashboardOrganisationTypeTileUI-IzPliDdq.js";import{u as aa}from"./useDashboardOrganisationTypes-CRvSBmAg.js";import{u as ea}from"./useDashboardOrganisations-A76m0SEj.js";import{u as oa}from"./useDashboardShallows-nXFDeTPW.js";import{u as ta}from"./useUserOrganisations-Ds2BTiaH.js";import{u as ra}from"./useOrganisations-LhrUMelk.js";import{u as ia}from"./useAppOrganisationId-Cv6r7Qq7.js";import{D as g}from"./dashboards-JSNI7pIu.js";import{_ as sa}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-t85MEsQz.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-r8nvatqt.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./FSDataTableUI-v1niesVH.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BuNOyTVK.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-CBOjzTDC.js";import"./FSText-BV49O4zh.js";import"./FSSearchField-BjWXLOyv.js";import"./FSTextField-DavtGNe9.js";import"./FSBaseField-kRvwdySD.js";import"./FSButton-DSUuKlnr.js";import"./FSRouterLink-BeSr6Wr-.js";import"./FSClickable-Dv9jZ2SG.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-S8Rrt-Eq.js";import"./FSDialogMenu-UKP76pyV.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-SUHx-DYG.js";import"./FSButtonNextIcon-CWkFzDlU.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-BsSRvUgm.js";import"./FSWrapGroup-CDPc2Zen.js";import"./FSFadeOut-qg65ZIq1.js";import"./FSRadio-DYhcD128.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-DpktbJ_S.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BtyXSsGO.js";import"./FSChip-CZIsa9Si.js";import"./FSOptionGroup-NVInOHNN.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSSimpleTileUI-BUhxamxS.js";import"./FSIconCard-BRF-Mlv3.js";import"./FSImage-yMh7QIr7.js";import"./FSImageUI-CFHBCxhz.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTile-DITjMSfT.js";import"./dashboardTranslation-CAYhusM0.js";import"./useAppLanguageCode-BzH56rSm.js";import"./pathCrumb-Db-cq5HI.js";import"./permissionInfos-BPDgTHQl.js";const k=E({name:"FSBaseDashboardsList",components:{FSDataTable:Y,FSIcon:y,FSDashboardOrganisationTileUI:_,FSDashboardOrganisationTypeTileUI:x,FSDashboardShallowTileUI:Z},props:{tableCode:{type:String,required:!1,default:null},dashboardOrganisationTypeFetchFilter:{type:Object,default:void 0,required:!1},dashboardOrganisationsFilters:{type:Object,default:void 0,required:!1},dashboardShallowsFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:type"],setup(a,{emit:p}){const{entities:I,fetching:w,getMany:U}=aa(),{entities:$,fetching:T,getMany:D}=ea(),{entities:F,fetching:O,getMany:e}=oa(),{fetch:r,entity:s}=ta(),{entity:B,get:L}=ra(),{organisationId:S}=ia(),u=z(a.modelValue),C=V(()=>h.sortBy([...I.value.map(o=>({...o,dashboardType:g.OrganisationType})),...$.value.map(o=>({...o,dashboardType:g.Organisation})),...F.value.map(o=>({...o,dashboardType:g.Shallow}))],o=>o.label)),N=V(()=>{var o;return(o=s.value)==null?void 0:o.mainDashboardId}),P=V(()=>{var o;return(o=B.value)==null?void 0:o.mainDashboardId}),j=o=>{u.value=o;const t=C.value.filter(l=>u.value.includes(l.id)),q=t.map(l=>l.id),M=t.map(l=>l.dashboardType);p("update:modelValue",q),p("update:type",M),p("update",{modelValue:q,type:M})},A=o=>{var t;return(t=u.value)==null?void 0:t.includes(o)};return R(()=>{r()}),b(()=>S.value,()=>{S.value&&L(S.value)},{immediate:!0}),b(()=>a.dashboardOrganisationTypeFetchFilter,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&U(a.dashboardOrganisationTypeFetchFilter)},{immediate:!0}),b(()=>a.dashboardOrganisationsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&D(a.dashboardOrganisationsFilters)},{immediate:!0}),b(()=>a.dashboardShallowsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&e(a.dashboardShallowsFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:w,fetchingDashboardOrganisations:T,fetchingDashboardShallows:O,selecteds:u,items:C,mainUserDashboardId:N,mainOrganisationDashboardId:P,onSelect:j,isSelected:A,DashboardType:g}}});function na(a,p,I,w,U,$){const T=f("FSDashboardOrganisationTypeTileUI"),D=f("FSDashboardOrganisationTileUI"),F=f("FSDashboardShallowTileUI"),O=f("FSDataTable");return n(),d(O,c({defaultMode:"iterator",items:a.items,itemTo:a.$props.itemTo,loading:a.fetchingDashboardOrganisationTypes||a.fetchingDashboardOrganisations||a.fetchingDashboardShallows,tableCode:a.$props.tableCode,modelValue:a.selecteds,"onUpdate:modelValue":a.onSelect},a.$attrs),H({"item.icon":i(({item:e})=>[W(y,null,{default:i(()=>[v(X(e.icon),1)]),_:2},1024)]),"item.main":i(({item:e})=>[e.id===a.mainOrganisationDashboardId?(n(),d(y,{key:0},{default:i(()=>[v(" mdi-account-group-outline ")]),_:1})):m("",!0),e.id===a.mainUserDashboardId?(n(),d(y,{key:1},{default:i(()=>[v(" mdi-home ")]),_:1})):m("",!0)]),"item.tile":i(({item:e,toggleSelect:r})=>[e.dashboardType==a.DashboardType.OrganisationType?(n(),d(T,c({key:0,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Organisation?(n(),d(D,c({key:1,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Shallow?(n(),d(F,c({key:2,bottomColor:e.colors,modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e),to:a.$props.itemTo&&a.$props.itemTo(e)},e),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):m("",!0)]),_:2},[K(a.$slots,(e,r)=>({name:r,fn:i(s=>[G(a.$slots,r,J(Q(s)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue","onUpdate:modelValue"])}const io=sa(k,[["render",na]]);k.__docgenInfo={displayName:"FSBaseDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationTypeFetchFilter",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardOrganisationsFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardShallowsFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue"]};export{io as default};