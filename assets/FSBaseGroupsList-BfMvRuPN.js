import{d as _,w as b,y as a,z as c,A as f,M as y,N as h,B as t,m as g,I as $,J as T,K as C,D as q,L as s,E as v,G as B}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as L}from"./lodash-BiW_TGGX.js";import{F as N}from"./FSDataTable-Dv92sctM.js";import{_ as F}from"./FSIcon-D23Cpf0F.js";import{F as U}from"./FSImage-Bal15wTA.js";import{F as w}from"./FSTagGroup-C_aC6pxK.js";import{F as D}from"./FSGroupTileUI-Biz_3t0t.js";import{u as k}from"./useGroups-BEpPMhMx.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CtbqJzfZ.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./color-BygXFKwQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./FSCol-YmDykHL-.js";import"./FSRow-CVY2l52N.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-OzHAGAP3.js";import"./vue-router-BhvpcqFa.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-VrXx14Lw.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSCard-D-fFYNec.js";import"./FSText-DyldgdXP.js";import"./FSSearchField-lTJRdxcj.js";import"./FSTextField-BKDOMXYp.js";import"./FSBaseField-_Isn_Ha_.js";import"./FSButton-BNq-0lOE.js";import"./FSClickable-DdK5daMz.js";import"./VProgressCircular-Dh9H7lZx.js";import"./VField-DndYz9t7.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./useTranslations-CdSqQFV3.js";import"./FSSelectField-CTZAdwe6.js";import"./FSDialogMenu-BULt7rkH.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-CcWB8C_f.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-CI3bzWWf.js";import"./FSWrapGroup-Choo5L6h.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-BDiw7DXd.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B_I0944e.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-SLQwEwFD.js";import"./FSChip-BrwvSycq.js";import"./FSOptionGroup-CE_5FDQP.js";import"./filter-CTnmeGG4.js";import"./VBtn-CC1p3R0h.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSImageUI-xIDH797J.js";import"./base-CmdGny12.js";import"./FSTag-CC_Nt88n.js";import"./FSColor-GjRAijUJ.js";import"./FSTile-ChlvKokJ.js";import"./pathCrumb-Db-cq5HI.js";const S=_({name:"FSBaseGroupsList",components:{FSDataTable:N,FSImage:U,FSIcon:F,FSGroupTileUI:D,FSTagGroup:w},props:{groupsFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(o){const{getMany:i,fetching:n,entities:l}=k(),u=r=>o.modelValue.includes(r);return b(()=>o.groupsFilters,(r,m)=>{(!r&&!m||!L.isEqual(r,m))&&i(o.groupsFilters)},{immediate:!0}),{fetchingGroups:n,groups:l,isSelected:u}}});function z(o,i,n,l,u,r){const m=a("FSImage"),V=a("FSTagGroup"),G=a("FSGroupTileUI"),I=a("FSDataTable");return c(),f(I,g({loading:o.fetchingGroups,items:o.groups,tableCode:o.$props.tableCode,modelValue:o.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=e=>o.$emit("update:modelValue",e))},o.$attrs),y({"item.imageId":t(({item:e})=>[e.imageId?(c(),f(m,{key:0,height:"38px",width:"38px",imageId:e.imageId},null,8,["imageId"])):q("",!0)]),"item.icon":t(({item:e})=>[s(F,null,{default:t(()=>[v(B(e.icon),1)]),_:2},1024)]),"item.tags":t(({item:e})=>[s(V,{variant:"slide",editable:!1,tags:e.tags},null,8,["tags"])]),"item.tile":t(({item:e,toggleSelect:p})=>[s(G,g({modelValue:o.isSelected(e.id),"onUpdate:modelValue":d=>p(e)},e),null,16,["modelValue","onUpdate:modelValue"])]),_:2},[h(o.$slots,(e,p)=>({name:p,fn:t(d=>[$(o.$slots,p,T(C(d)))])}))]),1040,["loading","items","tableCode","modelValue"])}const ye=P(S,[["render",z]]);S.__docgenInfo={displayName:"FSBaseGroupsList",exportName:"default",description:"",tags:{},props:[{name:"groupsFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/groups/FSBaseGroupsList.vue"]};export{ye as default};