import{d as _,c as u,A as b,D as l,l as j,H as F,I as S,R as d,E as U,C as L,F as E,J as P,K as z}from"./vue.esm-bundler-BD3cPSox.js";import{F as H}from"./FSAutocompleteField-DFb3lyeo.js";import{F as A}from"./FSButton-CQA40iQ2.js";import{F as J}from"./FSChip-D4m4Movw.js";import{F as T}from"./FSIcon-BikiybNc.js";import{u as K}from"./useChartOrganisationTypes-BMiPGBjP.js";import{u as R}from"./useChartOrganisations-CEGXzwDC.js";import{u as G}from"./useAutocomplete-BGAR7scz.js";import{a as g,b as Q,d as W}from"./chartsTools-e8TBt3nb.js";import{u as X}from"./useTranslations-aJtH5CGl.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSCol-C9a7BKGp.js";import"./FSSearchField-C59ZFn1o.js";import"./FSTextField-DHU8-iy6.js";import"./FSBaseField-BvFJ1Ol8.js";import"./FSSpan-CqHf-ny6.js";import"./useBreakpoints-CnZdRDE7.js";import"./useSlots-DhthX9xh.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./index-CcZ3F2bM.js";import"./color-DAd2dJIE.js";import"./transition-BVEL_Cnv.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./locale-Cg0C6Moy.js";import"./VIcon-ef9P0Odv.js";import"./density-Dp_zkCfD.js";import"./dimensions-DbGEEU80.js";import"./proxiedModel-JzK6JHhO.js";import"./form-DhAzn97I.js";import"./loader-DirtECG2.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./anchor-Ce3a1Oj_.js";import"./rounded-idSslOdv.js";import"./VDefaultsProvider-rHrX99un.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Ov0xN_Hx.js";import"./VList-B1NoTgR2.js";import"./FSCard-DOwp-V9l.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./router-BdSI2seK.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./elevation-C4p0Fj2B.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./FSToggleSet-DDZ_-ts7.js";import"./FSWrapGroup-BXAsHxAi.js";import"./FSCheckbox-CM6E8uCY.js";import"./VSelectionControl-CDPTHhw0.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-DNoTFnQV.js";import"./VSelect-D40GRNzX.js";import"./VMenu-iLNk3WZy.js";import"./filter-VzgWnVmw.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";const q=_({name:"FSAutocompleteChart",components:{FSAutocompleteField:H,FSButton:A,FSChip:J,FSIcon:T},props:{chartOrganisationTypeFilters:{type:Object,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:g.None},ignoreChartOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreChartOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(e,{emit:o}){const{getMany:c,fetching:y,entities:h}=K(),{getMany:f,fetching:i,entities:p}=R(),{$tr:a}=X(),s=u(()=>h.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.OrganisationType})).concat(p.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:g.Organisation})))),$=u(()=>I.value&&(y.value||i.value)),k=u(()=>e.multiple&&e.modelValue?a("autocomplete.chart.placeholder","{0} chart(s) selected",e.modelValue.length):null),D=t=>{if(Array.isArray(t)){const r=t.map(m=>m.id),C=t.map(m=>m.type);o("update:modelValue",r),o("update:type",C),o("update",{modelValue:r,type:C})}else o("update:modelValue",t==null?void 0:t.id),o("update:type",t==null?void 0:t.type),o("update",{modelValue:t==null?void 0:t.id,type:t==null?void 0:t.type})},N=t=>{const r=[];return e.ignoreChartOrganisationTypes||r.push(c({...e.chartOrganisationTypeFilters,search:t??void 0})),e.ignoreChartOrganisations||r.push(f({...e.chartOrganisationFilters,search:t??void 0})),Promise.all(r)},{toggleSet:B,init:I,onUpdate:M}=G(s,[()=>e.chartOrganisationTypeFilters,()=>e.chartOrganisationFilters],o,N,D);return{placeholder:k,toggleSet:B,loading:$,charts:s,chartOriginColor:W,chartOriginLabel:Q,onUpdate:M}}});function x(e,o,c,y,h,f){const i=F("FSChip"),p=F("FSAutocompleteField");return S(),b(p,j({label:e.$props.label??e.$tr("ui.common.chart","Chart"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.charts,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":l(({item:a})=>[a.icon?(S(),b(T,{key:0},{default:l(()=>[P(z(a.icon),1)]),_:2},1024)):E("",!0)]),"item-append":l(({item:a})=>[d(i,{color:e.chartOriginColor(a.type),label:e.chartOriginLabel(a.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":l(a=>[d(A,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:U(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},L({_:2},[a.item.type?{name:"append",fn:l(()=>[d(i,{color:e.chartOriginColor(a.item.type),label:e.chartOriginLabel(a.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const w=Y(q,[["render",x]]);q.__docgenInfo={displayName:"FSAutocompleteChart",exportName:"default",description:"",tags:{},props:[{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartOrigin[] | ChartOrigin"},required:!1,defaultValue:{func:!1,value:"ChartOrigin.None"}},{name:"ignoreChartOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreChartOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue"]};const wt={title:"Foundation/Core/Autocompletes/AutocompleteChart",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:o})=>({components:{FSAutocompleteChart:w,FSCol:Z},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(V=(v=n.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const $t=["Variations"];export{n as Variations,$t as __namedExportsOrder,wt as default};
