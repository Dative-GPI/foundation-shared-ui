import{d as U,c as u,B as S,E as p,I as b,J as T,k as o,H as E}from"./vue.esm-bundler-CocPPKUI.js";import{F as k}from"./FSSelectField-Cu50eP5y.js";import{F as B}from"./FSBaseField-Cn3A38Ti.js";import{F as O}from"./FSClock-BWPgTudT.js";import{_ as y}from"./FSRow-BvJ7lU5E.js";import{a as i,d as I}from"./timeRangeTools-4jFyM7Vk.js";import{u as A}from"./useRules-C3-AmzzE.js";import{u as L}from"./useTranslations-DJaIYmO0.js";import{D,a as s}from"./dates-CU5b-tXh.js";import{C as N}from"./useColors-C1aD-Kb6.js";import{g as W}from"./enumTools-BEsapygt.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as J}from"./FSCol-79-COv64.js";import"./FSDialogMenu-BpQhlEn9.js";import"./FSCard-2KUMcI8D.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./VDialog-BpMVGEao.js";import"./VOverlay-BMq2UEr3.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D50-hVV_.js";import"./theme-C1Gcptw7.js";import"./proxiedModel-DW1FRKBO.js";import"./anchor-D4EnoweD.js";import"./dimensions-Cv9Fwl7U.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./locale-_fONYh-8.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./transition-bMLtH-b3.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./FSSlideGroup-BoaCkdx0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./FSButton-B9T3D7JL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-BGuuL0jz.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./index-hd-xIizf.js";import"./FSToggleSet-mQm74CcI.js";import"./FSWrapGroup-DXlgsE59.js";import"./VInput-JSCg5nQs.js";import"./density-2KuMGYl6.js";import"./FSTextField-HkwYV1Vw.js";import"./VField-CAcTjb6h.js";import"./VLabel-yrR5w-fx.js";import"./loader-BDqRCawj.js";import"./rounded-CBYChxif.js";import"./index-5LM_ZUPq.js";import"./FSCheckbox-MGAv1q-u.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./index-BwBNp3ym.js";import"./FSFadeOut-BcV7cYL5.js";import"./FSLoader-JpoH2mis.js";import"./elevation-DUhGVECn.js";import"./FSRadio-D7UyW-G6.js";import"./VSelect-iFfd9zu0.js";import"./VList-7u5M4k2B.js";import"./ssrBoot-B-cFki3l.js";import"./border-ZP5ArpGv.js";import"./VImg-C2WY2bzk.js";import"./VMenu-DLjuHJDK.js";import"./FSSlider-D214cViD.js";import"./VSlider-DynmDTsv.js";import"./VSliderTrack-C6Ch4QSr.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";const w=U({name:"FSTimeRangeField",components:{FSSelectField:k,FSBaseField:B,FSClock:O,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},showVariant:{type:Boolean,required:!1,default:!1},maxWidth:{type:[Array,String,Number],required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{$tr:c}=L(),{validateOn:H,getMessages:F}=A(),M=[{id:D.Local,label:c("ui.common.local","Local")},{id:D.UTC,label:c("ui.common.utc","UTC")}],d=u(()=>W(s).map(t=>({id:t.value,label:I(t.value)}))),a=u(()=>i(e.modelValue,!1)),v=u(()=>a.value?a.value.startHour*60*60*1e3+a.value.startMinute*60*1e3:0),m=u(()=>a.value?a.value.endHour*60*60*1e3+a.value.endMinute*60*1e3:0),l=u(()=>e.messages??F(e.modelValue,e.rules));return{dateTypeItems:M,validateOn:H,daysItems:d,ColorEnum:N,startTime:v,realTime:a,messages:l,DateType:D,endTime:m,onChangeHourStart:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0,V={startDay:a.value.startDay,startHour:n,startMinute:g,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},h=i(V,!0);r("update:modelValue",h)},onChangeDayStart:t=>{if(t===s.AllDays)r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});else{const n=i({startDay:t,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:e.modelValue.endDay==s.AllDays?t:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}},onChangeHourEnd:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(a.value){const V={startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:n,endMinute:g,variant:a.value.variant},h=i(V,!0);r("update:modelValue",h)}},onUpdateVariant:t=>{const n=i({startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:t},!0);r("update:modelValue",n)},onChangeDayEnd:t=>{if(t===s.AllDays){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});return}else{const n=i({startDay:e.modelValue.startDay==s.AllDays?t:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:t,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}}}}});function z(e,r,c,H,F,M){const d=b("FSSelectField"),a=b("FSClock"),v=b("FSBaseField");return T(),S(v,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,messages:e.messages,maxWidth:e.$props.maxWidth},{default:p(()=>[o(y,null,{default:p(()=>{var m;return[o(y,{wrap:!1},{default:p(()=>{var l;return[o(d,{validationValue:e.$props.modelValue,disabled:e.$props.disabled,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","disabled","validateOn","rules","items","modelValue","onUpdate:modelValue"]),o(a,{disabled:e.$props.disabled,color:e.ColorEnum.Light,slider:!1,modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["disabled","color","modelValue","onUpdate:modelValue"])]}),_:1}),o(y,{wrap:!1},{default:p(()=>{var l;return[o(d,{disabled:e.$props.disabled,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["disabled","items","modelValue","onUpdate:modelValue"]),o(a,{disabled:e.$props.disabled,color:e.ColorEnum.Light,slider:!1,modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["disabled","color","modelValue","onUpdate:modelValue"])]}),_:1}),e.$props.showVariant?(T(),S(d,{key:0,width:"hug",label:e.$tr("ui.common.type","Type"),items:e.dateTypeItems,hideHeader:!0,clearable:!1,modelValue:((m=e.modelValue)==null?void 0:m.variant)??e.DateType.Local,"onUpdate:modelValue":e.onUpdateVariant},null,8,["label","items","modelValue","onUpdate:modelValue"])):E("",!0)]}),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","messages","maxWidth"])}const $=j(w,[["render",z]]);w.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"showVariant",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"maxWidth",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const Sa={title:"Foundation/Shared/Input fields/TimeRangeField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:2},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:1},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0,variant:1}}},render:(e,{argTypes:r})=>({components:{FSTimeRangeField:$,FSCol:J},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(R=(q=f.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Ta=["Variations"];export{f as Variations,Ta as __namedExportsOrder,Sa as default};
