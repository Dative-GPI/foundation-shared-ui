import{_ as V}from"./lodash-BiW_TGGX.js";import{d as T,w as b,y as l,z as y,A as $,B as C,O as h,C as m,m as c,K as q,L as v,M as I,N as s,H as L,I as B}from"./vue.esm-bundler-l-siv0w9.js";import{F as g}from"./FSIcon-DfqW6nqQ.js";import{F as D}from"./FSTagGroup-COxOJfpL.js";import{F as _}from"./FSFolderTileUI-BIPdzd1_.js";import{F as U}from"./FSDataTable-Db0A6Nxk.js";import{u as N}from"./useFolders-B-Xmjgdy.js";import{F as w}from"./dashboards-BEiBH8vF.js";import{D as M}from"./dashboards-JSNI7pIu.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useBreakpoints-mbnqo5a1.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-C_oz6kYw.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSWrapGroup-CgUIplkM.js";import"./uuid-DTaye2KM.js";import"./useSlots-C_N_WAus.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./display-BWzbFTnS.js";import"./locale-CTwwbPAi.js";import"./resizeObserver-CjMDZ25n.js";import"./FSTag-BGAnsMdV.js";import"./FSSpan-DwE651wI.js";import"./FSRow-BjeBkMPV.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-CntZC7f2.js";import"./FSButtonNextIcon-F5m9he5w.js";import"./FSButton-cXGosxtu.js";import"./FSClickable-B8_y_vmt.js";import"./FSCard-Cocsqd0c.js";import"./FSCol-DD5MeAoT.js";import"./FSSimpleTileUI-DxHSZxVX.js";import"./FSIconCard-DM6qnjqu.js";import"./FSImage-CruQww6b.js";import"./FSImageUI-C7_EaQD6.js";import"./FSLoader-DoOybHH0.js";import"./VImg-CZhZqiQJ.js";import"./transition-AZsQzdUZ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTile-C7XX9_aa.js";import"./FSCheckbox-BKUwhDef.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./form-CLJq5y5w.js";import"./FSDataTableUI-BIWQyI2R.js";import"./vue-router-C4bv40Tb.js";import"./FSText-4yVUx1mI.js";import"./FSSearchField-DcpwxoGP.js";import"./FSTextField-CIXfVN3n.js";import"./FSBaseField-CfZ7AiUY.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-DqO1gPa4.js";import"./FSDialogMenu-vSYpuZ_d.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./FSToggleSet-92mUnG-8.js";import"./FSFadeOut-CszUv8uk.js";import"./FSRadio-CfSjScM8.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./VSelect-R5W67bQu.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-Du2p4-qy.js";import"./FSChip-YuZ5nGgh.js";import"./FSOptionGroup-BY_KnwjN.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./pathCrumb-Db-cq5HI.js";const S=T({name:"FSBaseFoldersList",components:{FSFolderTileUI:_,FSDataTable:U,FSTagGroup:D,FSIcon:g},props:{tableCode:{type:String,required:!1,default:null},foldersFilters:{type:Object,default:void 0,required:!1},itemTo:{type:Function,required:!1},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const{entities:n,fetching:d,getMany:u}=N(),f=t=>{a("update:modelValue",t)},p=t=>{var r;return(r=e.modelValue)==null?void 0:r.includes(t)};return b(()=>e.foldersFilters,(t,r)=>{(!t&&!r||!V.isEqual(t,r))&&u(e.foldersFilters,o=>{var i;return o.parentId==((i=e.foldersFilters)==null?void 0:i.parentId)})},{immediate:!0}),{fetchingFolders:d,folders:n,onSelect:f,isSelected:p,FoldersListType:w,DashboardType:M}}});function k(e,a,n,d,u,f){const p=l("FSTagGroup"),t=l("FSFolderTileUI"),r=l("FSDataTable");return y(),$(r,c({defaultMode:"iterator",items:e.folders,itemTo:e.$props.itemTo,loading:e.fetchingFolders,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),C({"item.icon":m(({item:o})=>[s(g,null,{default:m(()=>[L(B(o.icon),1)]),_:2},1024)]),"item.tags":m(({item:o})=>[s(p,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),"item.tile":m(({item:o,toggleSelect:i})=>[s(t,c({bottomColor:o.colors},o,{modelValue:e.isSelected(o.id),"onUpdate:modelValue":F=>i(o),to:e.$props.itemTo&&e.$props.itemTo(o)}),null,16,["bottomColor","modelValue","onUpdate:modelValue","to"])]),_:2},[h(e.$slots,(o,i)=>({name:i,fn:m(F=>[q(e.$slots,i,v(I(F)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const Bo=P(S,[["render",k]]);S.__docgenInfo={displayName:"FSBaseFoldersList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"foldersFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"itemTo",type:{name:"(item: DashboardInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/folders/FSBaseFoldersList.vue"]};export{Bo as default};