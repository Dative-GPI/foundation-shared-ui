import{_ as F}from"./lodash-BiW_TGGX.js";import{d as L,w as V,y as n,z as b,A as y,B as q,O as $,C as l,m as u,K as C,L as T,M as h,N as d,H as v,I as B}from"./vue.esm-bundler-DTB_q9xr.js";import{F as c}from"./FSIcon-CaaGuK6D.js";import{F as I}from"./FSDataTable-DL6puPef.js";import{F as w}from"./FSLocationTileUI-4WzkX01P.js";import{u as U}from"./useLocations-CjGzyaax.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-BWKJNLz8.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./css-B7hQ34V-.js";import"./VIcon-DzZvThha.js";import"./color-Du5JXqac.js";import"./FSLoader-IaO7i80m.js";import"./dimensions-CqoZOW6j.js";import"./elevation-JfXKLVfD.js";import"./locale-BJQwrXJ7.js";import"./FSCol-CYWCfIBP.js";import"./FSRow-CFFgZ74C.js";import"./VSpacer-Di7g3RCw.js";import"./FSDataTableUI-BXXFe2b8.js";import"./vue-router-Bp8FxDoy.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-Bdwx0Alv.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-DMxVfgfA.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./index-UH0ZuYvc.js";import"./transition-DhTIerNz.js";import"./form-_oo3cshG.js";import"./FSCard-C6D9gNrD.js";import"./FSText-7jyalPrS.js";import"./FSSearchField-CAI8fEsN.js";import"./FSTextField-B-binuYf.js";import"./FSBaseField-D2wwYX9r.js";import"./FSButton-C0EbsNmZ.js";import"./FSClickable-BkJRwj5f.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VField-Do2gtyNA.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-CUwTiuac.js";import"./FSDialogMenu-BA4IKkHH.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./router-DxFny788.js";import"./FSSlideGroup--K704DO9.js";import"./FSButtonNextIcon-DF3eQVXp.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./FSToggleSet-CvGKl15-.js";import"./FSWrapGroup-Dplk4rjv.js";import"./FSFadeOut-d8eb0S_F.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-oAa5CmWC.js";import"./VMenu-CuKNZEBs.js";import"./FSDivider-BNA1ohhL.js";import"./FSChip-D8HPW226.js";import"./FSOptionGroup-CYF5vXq9.js";import"./filter-C1K_d8Vd.js";import"./VBtn-BUwP05fv.js";import"./filter-COIlslko.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./FSIconCard-DaZBidMJ.js";import"./FSColor-BQxGv4SQ.js";import"./FSTile-NKozYWaP.js";import"./address-CE2z3AEI.js";const f=L({name:"FSBaseLocationsList",components:{FSLocationTileUI:w,FSDataTable:I,FSIcon:c},props:{tableCode:{type:String,required:!1,default:null},locationsFilters:{type:Object,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},itemTo:{type:Function,required:!1},singleSelect:{type:Boolean,required:!1,default:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:r,fetching:m,entities:s}=U();return V(()=>e.locationsFilters,(i,t)=>{(!i&&!t||!F.isEqual(i,t))&&r(e.locationsFilters)},{immediate:!0}),{fetchingLocations:m,isSelected:i=>{var t;return(t=e.modelValue)==null?void 0:t.includes(i)},locations:s}}});function D(e,r,m,s,S,i){const t=n("FSLocationTileUI"),g=n("FSDataTable");return b(),y(g,u({defaultMode:"iterator",loading:e.fetchingLocations,items:e.locations,showSelect:e.$props.editable,tableCode:e.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),q({"item.icon":l(({item:o})=>[d(c,null,{default:l(()=>[v(B(o.icon),1)]),_:2},1024)]),"item.tile":l(({item:o,toggleSelect:a})=>[d(t,u(o,{bottomColor:o.colors,address:o.address.placeLabel,editable:!0,singleSelect:e.singleSelect,modelValue:e.isSelected(o.id),to:e.$props.itemTo&&e.$props.itemTo(o),"onUpdate:modelValue":p=>a(o)}),null,16,["bottomColor","address","singleSelect","modelValue","to","onUpdate:modelValue"])]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:l(p=>[C(e.$slots,a,T(h(p)))])}))]),1040,["loading","items","showSelect","tableCode","modelValue"])}const Fo=N(f,[["render",D]]);f.__docgenInfo={displayName:"FSBaseLocationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"locationsFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"itemTo",type:{name:"(item: LocationInfos) => Partial<RouteLocation>"},required:!1},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/locations/FSBaseLocationsList.vue"]};export{Fo as default};