import{d as _,c as u,z as b,C as l,m as j,G as F,H as S,Q as d,D as U,B as L,E as z,I as E,J as P}from"./vue.esm-bundler-CUSnV4DE.js";import{F as G}from"./FSAutocompleteField-CKnbZeUq.js";import{F as A}from"./FSButton-BTpAdEE5.js";import{F as H}from"./FSChip-B4fQRAFB.js";import{F as T}from"./FSIcon-Cp7BQBW6.js";import{u as J}from"./useChartOrganisationTypes-CioXsEEK.js";import{u as Q}from"./useChartOrganisations-TUsUrupL.js";import{u as K}from"./useAutocomplete-JLCgZTVD.js";import{a as g,b as R,d as W}from"./chartsTools-DOk0Z_eo.js";import{u as X}from"./useTranslations-D0SM0QeA.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-BQiFrdcO.js";import"./FSSearchField-eXvJVmGa.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useSlots-CY84M1fx.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./color-CgsoZSKd.js";import"./transition-C81aHyit.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./VIcon-DeLOaNVc.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./proxiedModel-DaBGAliH.js";import"./loader-BjfLeESU.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./anchor-MMgLgK3d.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeZa2hiu.js";import"./VList-0zKlnGxf.js";import"./FSCard-BnVyMFnh.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./router-C6XMMO7F.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./elevation-C08MHLji.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./FSToggleSet-gSDjdstT.js";import"./FSWrapGroup-DswCzfON.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VSelect-CO7kggYd.js";import"./VMenu-BYRtZ3M5.js";import"./filter-BDc_Ne3E.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";const q=_({name:"FSAutocompleteChart",components:{FSAutocompleteField:G,FSButton:A,FSChip:H,FSIcon:T},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:g.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:c,fetching:y,entities:h}=J(),{getMany:f,fetching:i,entities:p}=Q(),{$tr:a}=X(),s=u(()=>h.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.Organisation})))),$=u(()=>I.value&&(y.value||i.value)),k=u(()=>e.multiple&&e.modelValue?a("autocomplete.chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),D=t=>{if(Array.isArray(t)){const r=t.map(m=>m.id),C=t.map(m=>m.type);o("update:modelValue",r),o("update:type",C),o("update",{modelValue:r,type:C})}else o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type),o("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},B=t=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(c({...e.chartOrganisationTypeFilters,search:t??void 0})),e.ignoreChartOrganisations||r.push(f({...e.chartOrganisationFilters,search:t??void 0})),Promise.all(r)},{toggleSet:N,init:I,onUpdate:M}=K(s,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,B,D);return{placeholder:k,toggleSet:N,loading:$,charts:s,chartOriginColor:W,chartOriginLabel:R,onUpdate:M}}});function x(e,o,c,y,h,f){const i=F("FSChip"),p=F("FSAutocompleteField");return S(),b(p,j({label:e.$props.label??e.$tr("ui.common.chart","Chart"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:a})=>[a.icon?(S(),b(T,{key:0},{default:l(()=>[E(P(a.icon),1)]),_:2},1024)):z("",!0)]),"item-append":l(({item:a})=>[d(i,{color:e.chartOriginColor(a.type),label:e.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(a=>[d(A,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:U(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},L({_:2},[a.item.type?{name:"append",fn:l(()=>[d(i,{color:e.chartOriginColor(a.item.type),label:e.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const w=Y(q,[["render",x]]);q.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const qt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:w,FSCol:Z},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteChart
        label="Chart"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var O,v,V;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: null,
      type2: 0,
      value3: null,
      type3: 0,
      value4: null,
      type4: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteChart,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteChart
        label="Chart"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteChart
        label="Chart with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(V=(v=n.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const wt=["Variations"];export{n as Variations,wt as __namedExportsOrder,qt as default};
