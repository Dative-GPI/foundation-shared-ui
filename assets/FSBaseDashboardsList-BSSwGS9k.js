import{_ as h}from"./lodash-BiW_TGGX.js";import{d as A,b as R,c as V,g as z,w as b,A as f,B as n,C as d,D as H,Q as J,E as i,j as c,M as K,N as Q,O as G,P as W,J as v,K as X,H as m}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as Y}from"./FSDataTable-0fXdqeSq.js";import{F as y}from"./FSIcon-CKEWDmaC.js";import{F as Z}from"./FSDashboardShallowTileUI-B84yI8Bb.js";import{F as _}from"./FSDashboardOrganisationTileUI-OMx4aTME.js";import{F as x}from"./FSDashboardOrganisationTypeTileUI-DGWgRVsA.js";import{u as aa}from"./useDashboardOrganisationTypes-ByFQN-ON.js";import{u as ea}from"./useDashboardOrganisations-C7UErTFX.js";import{u as oa}from"./useDashboardShallows-5yaO-2dy.js";import{u as ta}from"./useUserOrganisations-BxH-tq_V.js";import{u as ra}from"./organisationDetails-ChKmfnVj.js";import{u as ia}from"./useAppOrganisationId-HHayVd6L.js";import{D as g}from"./dashboards-JSNI7pIu.js";import{_ as sa}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CRmsosiO.js";import"./useBreakpoints-IB1lZo1P.js";import"./useColors-Cz5tOQmp.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./css-YWErTUWV.js";import"./color-mm3JSYKM.js";import"./dimensions-BWgpWc0X.js";import"./elevation-BrHPj82J.js";import"./locale-Beavd5eP.js";import"./FSCol-DLyNVOXQ.js";import"./FSRow-4Qz6Bbpg.js";import"./FSDataTableUI-b-_eG0eF.js";import"./vue-router-D-G4AqQz.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-CunxM6rm.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./density-DMrbDfgW.js";import"./VIcon-DsLd3bsf.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-CMMTOWvF.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./form-ChxmsGl9.js";import"./FSCard-4bilSlvW.js";import"./FSText-DqK2dTtm.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./FSClickable-CUaqPDhz.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./VField-BtCsV974.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./useTranslations-DN7QCs30.js";import"./FSSelectField-b29JGwjP.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-CtBhRuPR.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./FSDivider-DOHnDXxM.js";import"./FSChip-DMpdcIDo.js";import"./FSOptionGroup-DJl0hUWz.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CKg6JYm3.js";import"./filter-DiySb8XN.js";import"./base-DsQovONZ.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-DJbHulE4.js";import"./FSSimpleTileUI-DOCGiJI5.js";import"./FSIconCard-BnC0UqQH.js";import"./FSImage-CJNmFlk_.js";import"./FSImageUI-Q0M2a9Ft.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSTile-dJi94q2j.js";import"./dashboardTranslation-B7lvR05i.js";import"./useAppLanguageCode-DjpqeQYI.js";import"./pathCrumb-Db-cq5HI.js";import"./permissionInfos-BPDgTHQl.js";const k=A({name:"FSBaseDashboardsList",components:{FSDataTable:Y,FSIcon:y,FSDashboardOrganisationTileUI:_,FSDashboardOrganisationTypeTileUI:x,FSDashboardShallowTileUI:Z},props:{tableCode:{type:String,required:!1,default:null},dashboardOrganisationTypeFetchFilter:{type:Object,default:void 0,required:!1},dashboardOrganisationsFilters:{type:Object,default:void 0,required:!1},dashboardShallowsFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:type"],setup(a,{emit:p}){const{entities:w,fetching:I,getMany:U}=aa(),{entities:$,fetching:T,getMany:D}=ea(),{entities:F,fetching:O,getMany:e}=oa(),{fetch:r,entity:s}=ta(),{entity:B,get:L}=ra(),{organisationId:S}=ia(),u=R(a.modelValue),C=V(()=>h.sortBy([...w.value.map(o=>({...o,dashboardType:g.OrganisationType})),...$.value.map(o=>({...o,dashboardType:g.Organisation})),...F.value.map(o=>({...o,dashboardType:g.Shallow}))],o=>o.label)),N=V(()=>{var o;return(o=s.value)==null?void 0:o.mainDashboardId}),P=V(()=>{var o;return(o=B.value)==null?void 0:o.mainDashboardId}),j=o=>{u.value=o;const t=C.value.filter(l=>u.value.includes(l.id)),q=t.map(l=>l.id),M=t.map(l=>l.dashboardType);p("update:modelValue",q),p("update:type",M),p("update",{modelValue:q,type:M})},E=o=>{var t;return(t=u.value)==null?void 0:t.includes(o)};return z(()=>{r()}),b(()=>S.value,()=>{S.value&&L(S.value)},{immediate:!0}),b(()=>a.dashboardOrganisationTypeFetchFilter,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&U(a.dashboardOrganisationTypeFetchFilter)},{immediate:!0}),b(()=>a.dashboardOrganisationsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&D(a.dashboardOrganisationsFilters)},{immediate:!0}),b(()=>a.dashboardShallowsFilters,(o,t)=>{(!o&&!t||!h.isEqual(o,t))&&e(a.dashboardShallowsFilters)},{immediate:!0}),{fetchingDashboardOrganisationTypes:I,fetchingDashboardOrganisations:T,fetchingDashboardShallows:O,selecteds:u,items:C,mainUserDashboardId:N,mainOrganisationDashboardId:P,onSelect:j,isSelected:E,DashboardType:g}}});function na(a,p,w,I,U,$){const T=f("FSDashboardOrganisationTypeTileUI"),D=f("FSDashboardOrganisationTileUI"),F=f("FSDashboardShallowTileUI"),O=f("FSDataTable");return n(),d(O,c({defaultMode:"iterator",items:a.items,itemTo:a.$props.itemTo,loading:a.fetchingDashboardOrganisationTypes||a.fetchingDashboardOrganisations||a.fetchingDashboardShallows,tableCode:a.$props.tableCode,modelValue:a.selecteds,"onUpdate:modelValue":a.onSelect},a.$attrs),H({"item.icon":i(({item:e})=>[W(y,null,{default:i(()=>[v(X(e.icon),1)]),_:2},1024)]),"item.main":i(({item:e})=>[e.id===a.mainOrganisationDashboardId?(n(),d(y,{key:0},{default:i(()=>[v(" mdi-account-group-outline ")]),_:1})):m("",!0),e.id===a.mainUserDashboardId?(n(),d(y,{key:1},{default:i(()=>[v(" mdi-home ")]),_:1})):m("",!0)]),"item.tile":i(({item:e,toggleSelect:r})=>[e.dashboardType==a.DashboardType.OrganisationType?(n(),d(T,c({key:0,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Organisation?(n(),d(D,c({key:1,bottomColor:e.colors,to:a.$props.itemTo&&a.$props.itemTo(e),modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e)},e),null,16,["bottomColor","to","modelValue","onUpdate:modelValue"])):m("",!0),e.dashboardType==a.DashboardType.Shallow?(n(),d(F,c({key:2,bottomColor:e.colors,modelValue:a.isSelected(e.id),"onUpdate:modelValue":s=>r(e),to:a.$props.itemTo&&a.$props.itemTo(e)},e),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])):m("",!0)]),_:2},[J(a.$slots,(e,r)=>({name:r,fn:i(s=>[K(a.$slots,r,Q(G(s)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue","onUpdate:modelValue"])}const ro=sa(k,[["render",na]]);k.__docgenInfo={displayName:"FSBaseDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationTypeFetchFilter",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardOrganisationsFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"dashboardShallowsFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue"]};export{ro as default};