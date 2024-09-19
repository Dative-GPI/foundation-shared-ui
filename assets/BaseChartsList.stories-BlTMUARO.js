import{d as $,c as q,w as k,z as u,A as I,B as S,M as D,N as E,C as r,m as N,J as w,K as M,L as U,v as l,G as T,H as G,E as P}from"./vue.esm-bundler-BwDfg4wG.js";import{_ as j}from"./lodash-BiW_TGGX.js";import{F as z}from"./FSChartTileUI-Dqn3CVLG.js";import{F as A}from"./FSTagGroup-5FHer4Te.js";import{F as H}from"./FSImage-CtdLuckH.js";import{F as y}from"./FSIcon-ChaYv6Le.js";import{F as _}from"./FSDataTable-Me_5Some.js";import{u as J}from"./useChartOrganisations-CzXxwkos.js";import{u as K}from"./useChartOrganisationTypes-oOBHFuQg.js";import{C as R}from"./useColors-tmPxRJAs.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./css-DTUiF03J.js";import"./FSRow-k5pgBhR1.js";import"./VProgressCircular-CmpAWY4m.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./tag-Ceq3l71M.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./charts-BPLoyxCB.js";import"./useTranslations-CHmpEDXr.js";import"./FSWrapGroup-CzncWNtJ.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-FmBZXb1C.js";import"./FSButton-jJkg4qCi.js";import"./index-h4Pvk0JI.js";import"./display-DC3KmzVA.js";import"./group-Co3yQlsH.js";import"./proxiedModel-okNizC5Y.js";import"./VIcon-D-JUvW-a.js";import"./locale-DTc71_bq.js";import"./FSTag-B1oK3EZ-.js";import"./VBtn-CAkWF00h.js";import"./border-CJvl-6Or.js";import"./density-CY8ZwxUy.js";import"./elevation-Ba-uT6Vw.js";import"./rounded-NuUWeCiM.js";import"./dimensions-yOZi2HlQ.js";import"./loader-ecE02KGk.js";import"./anchor-0YuAsO7w.js";import"./router-CeBnHAqN.js";import"./index-BBm8PRb1.js";import"./VDefaultsProvider-_csoeOf7.js";import"./FSImageUI-BAdgvYuR.js";import"./FSLoader-CBedVZCM.js";import"./VImg-DFtMr-E9.js";import"./transition-DbaVUv7M.js";import"./index-O1RQoaVh.js";import"./useImages-hJ8kAqsC.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-fou7heQy.js";import"./VSpacer-C5S3LEb3.js";import"./FSDataTableUI-cllOIrAS.js";import"./vue-router-BC-FzL9X.js";import"./FSCheckbox-Up-USX9A.js";import"./useRules-CJCAsX67.js";import"./VSelectionControl-gUfFxYp8.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./form-CH3j37ax.js";import"./FSText-CwwFvnOv.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./VField-C9nLiyrW.js";import"./forwardRefs-DWGaNmQL.js";import"./FSSelectField-BAtD035V.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./lazy-MJJzC26k.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./FSDivider-CNRYiEGS.js";import"./FSChip-kw9MOYsi.js";import"./FSOptionGroup-DruPS3EV.js";import"./filter-C1K_d8Vd.js";import"./filter-Cv_nnV1z.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-DfSX31J9.js";const v=$({name:"FSBaseChartsList",components:{FSChartTileUI:z,FSDataTable:_,FSTagGroup:A,FSImage:H,FSIcon:y},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},tableCode:{type:String,required:!0}},emits:["update:modelValue","update:scope"],setup(t,{emit:n}){const{entities:g,fetching:b,getMany:F}=J(),{entities:h,fetching:f,getMany:p}=K(),d=e=>t.modelValue.includes(e),C=()=>{F(t.chartOrganisationFilters),p(t.chartOrganisationTypeFilters)},a=q(()=>g.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(h.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),o=e=>{const i=d(e);m(i?t.modelValue.filter(s=>s!=e):[...t.modelValue,e])},m=e=>{if(!e){n("update:modelValue",[]),n("update:scope",[]);return}const i=a.value.filter(s=>e.includes(s.id));n("update:modelValue",i.map(s=>s.id)),n("update:scope",i.map(s=>s.scope))};return k(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,i)=>{(!e&&!i||!j.isEqual(e,i))&&C()},{immediate:!0}),{fetchingChartOrganisationTypes:f,fetchingChartOrganisations:b,chartOrganisationTypes:h,chartOrganisations:g,ColorEnum:R,charts:a,isSelected:d,onSelect:m,update:o}}});function W(t,n,g,b,F,h){const f=u("FSImage"),p=u("FSTagGroup"),d=u("FSChartTileUI"),C=u("FSDataTable");return I(),S(C,N({loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),D({"header.imageId-title":r(()=>[l(y,null,{default:r(()=>[T(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[l(y,null,{default:r(()=>[T(G(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(I(),S(f,{key:0,height:"32px",width:"32px",imageId:a.imageId},null,8,["imageId"])):P("",!0)]),"item.tags":r(({item:a})=>[l(p,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.modelsLabels":r(({item:a})=>[l(p,{editable:!1,tags:a.modelsLabels.map(o=>o.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[l(d,{label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Dark,onClick:o=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[E(t.$slots,(a,o)=>({name:o,fn:r(m=>[w(t.$slots,o,M(U(m)))])}))]),1040,["loading","items","tableCode","modelValue","onUpdate:modelValue"])}const B=Q(v,[["render",W]]);v.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Nt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:B,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},c={render:t=>({components:{FSBaseChartsList:B},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `}),args:{tableCode:"charts1"}};var L,O,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    \`
  }),
  args: {
    tableCode: 'charts1'
  }
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const wt=["Default"];export{c as Default,wt as __namedExportsOrder,Nt as default};