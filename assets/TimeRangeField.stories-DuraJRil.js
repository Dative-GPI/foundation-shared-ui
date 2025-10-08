import{d as U,c as u,B as S,E as p,I as b,J as T,k as o,H as E}from"./vue.esm-bundler-CocPPKUI.js";import{F as k}from"./FSSelectField-DzMtmuD3.js";import{F as B}from"./FSBaseField-BHCTmkg_.js";import{F as O}from"./FSClock-xDXvcUTi.js";import{_ as y}from"./FSRow-BvJ7lU5E.js";import{a as i,d as I}from"./timeRangeTools-4jFyM7Vk.js";import{u as A}from"./useRules-C3-AmzzE.js";import{u as L}from"./useTranslations-DJaIYmO0.js";import{D,a as s}from"./dates-CU5b-tXh.js";import{C as N}from"./useColors-DUufJJPH.js";import{g as W}from"./enumTools-BEsapygt.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as J}from"./FSCol-79-COv64.js";import"./FSDialogMenu-CeOfi1Vz.js";import"./FSCard-JQNJPDhp.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./easing-DY7PVvcf.js";import"./color-yBCdco2I.js";import"./theme-DhcBBMcp.js";import"./proxiedModel-DvocDLKO.js";import"./anchor-C7UfIAXa.js";import"./dimensions-C9PuMYcl.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./locale-_fONYh-8.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./transition-BuKnRONq.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./FSSlideGroup-BpYleAPY.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./FSButton-VjwKfCr9.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-CKNHHVc2.js";import"./VSlideGroup-D3ZQzm0f.js";import"./index-DfBdMsnv.js";import"./group-CbiZXdYV.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./FSToggleSet-BAu9OVEz.js";import"./FSWrapGroup-CR1U-5kP.js";import"./VInput-DhPQv4YC.js";import"./density-DZuLaB-B.js";import"./FSTextField-CrSrBFtk.js";import"./VField-CEhz-0ZK.js";import"./VLabel-HvE-XSAC.js";import"./loader-B3-0Tc48.js";import"./rounded-Cjf6r1y4.js";import"./index-lkzvYdnq.js";import"./FSCheckbox-ChCYq6Yz.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./index-BgX1FNqJ.js";import"./FSFadeOut-BaaWP8Xe.js";import"./FSLoader-BeIlBGG_.js";import"./elevation-CsFMJmSN.js";import"./FSRadio-DSN2e6_O.js";import"./VSelect-CKWfJZu2.js";import"./VList-BU_HHy4r.js";import"./ssrBoot-B-cFki3l.js";import"./border-B0huqYee.js";import"./VImg-BaN5zAl6.js";import"./VMenu-uiC9_CJ1.js";import"./FSSlider-Bnz1_knh.js";import"./VSlider-xkXf3j8e.js";import"./VSliderTrack-BIaLI1BH.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";const w=U({name:"FSTimeRangeField",components:{FSSelectField:k,FSBaseField:B,FSClock:O,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},showVariant:{type:Boolean,required:!1,default:!1},maxWidth:{type:[Array,String,Number],required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{$tr:c}=L(),{validateOn:H,getMessages:F}=A(),M=[{id:D.Local,label:c("ui.common.local","Local")},{id:D.UTC,label:c("ui.common.utc","UTC")}],d=u(()=>W(s).map(t=>({id:t.value,label:I(t.value)}))),a=u(()=>i(e.modelValue,!1)),v=u(()=>a.value?a.value.startHour*60*60*1e3+a.value.startMinute*60*1e3:0),m=u(()=>a.value?a.value.endHour*60*60*1e3+a.value.endMinute*60*1e3:0),l=u(()=>e.messages??F(e.modelValue,e.rules));return{dateTypeItems:M,validateOn:H,daysItems:d,ColorEnum:N,startTime:v,realTime:a,messages:l,DateType:D,endTime:m,onChangeHourStart:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0,V={startDay:a.value.startDay,startHour:n,startMinute:g,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},h=i(V,!0);r("update:modelValue",h)},onChangeDayStart:t=>{if(t===s.AllDays)r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});else{const n=i({startDay:t,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:e.modelValue.endDay==s.AllDays?t:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}},onChangeHourEnd:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(a.value){const V={startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:n,endMinute:g,variant:a.value.variant},h=i(V,!0);r("update:modelValue",h)}},onUpdateVariant:t=>{const n=i({startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:t},!0);r("update:modelValue",n)},onChangeDayEnd:t=>{if(t===s.AllDays){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});return}else{const n=i({startDay:e.modelValue.startDay==s.AllDays?t:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:t,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}}}}});function z(e,r,c,H,F,M){const d=b("FSSelectField"),a=b("FSClock"),v=b("FSBaseField");return T(),S(v,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,messages:e.messages,maxWidth:e.$props.maxWidth},{default:p(()=>[o(y,null,{default:p(()=>{var m;return[o(y,{wrap:!1},{default:p(()=>{var l;return[o(d,{validationValue:e.$props.modelValue,disabled:e.$props.disabled,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","disabled","validateOn","rules","items","modelValue","onUpdate:modelValue"]),o(a,{disabled:e.$props.disabled,color:e.ColorEnum.Light,slider:!1,modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["disabled","color","modelValue","onUpdate:modelValue"])]}),_:1}),o(y,{wrap:!1},{default:p(()=>{var l;return[o(d,{disabled:e.$props.disabled,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["disabled","items","modelValue","onUpdate:modelValue"]),o(a,{disabled:e.$props.disabled,color:e.ColorEnum.Light,slider:!1,modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["disabled","color","modelValue","onUpdate:modelValue"])]}),_:1}),e.$props.showVariant?(T(),S(d,{key:0,width:"hug",label:e.$tr("ui.common.type","Type"),items:e.dateTypeItems,hideHeader:!0,clearable:!1,modelValue:((m=e.modelValue)==null?void 0:m.variant)??e.DateType.Local,"onUpdate:modelValue":e.onUpdateVariant},null,8,["label","items","modelValue","onUpdate:modelValue"])):E("",!0)]}),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","messages","maxWidth"])}const $=j(w,[["render",z]]);w.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"showVariant",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const Ca={title:"Foundation/Shared/Input fields/TimeRangeField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:2},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:1},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0,variant:1}}},render:(e,{argTypes:r})=>({components:{FSTimeRangeField:$,FSCol:J},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTimeRangeField
        label="Time Range"
        :modelValue="args.value0"
        :showVariant="true"
        v-model="args.value0"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Required time Range, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Disabled time Range, with description"
        description="description"
        :disabled="true"
        v-model="args.value2"
      />
    </FSCol>`})};var C,q,R;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    args: {
      value0: {
        startDay: 0,
        startHour: 22,
        startMinute: 0,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        variant: 2
      },
      value1: {
        startDay: 0,
        startHour: 0,
        startMinute: 0,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        variant: 1
      },
      value2: {
        startDay: 1,
        startHour: 1,
        startMinute: 0,
        endDay: 2,
        endHour: 2,
        endMinute: 0,
        variant: 1
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeRangeField,
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
      <FSTimeRangeField
        label="Time Range"
        :modelValue="args.value0"
        :showVariant="true"
        v-model="args.value0"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Required time Range, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeRangeField
        label="Disabled time Range, with description"
        description="description"
        :disabled="true"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(R=(q=f.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const qa=["Variations"];export{f as Variations,qa as __namedExportsOrder,Ca as default};
