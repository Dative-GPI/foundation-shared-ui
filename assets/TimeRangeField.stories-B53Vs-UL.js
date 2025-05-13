import{d as U,c as u,z as S,C as p,G as H,H as T,P as o,E}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as k}from"./FSSelectField-DG1JLx9N.js";import{F as B}from"./FSBaseField-B4CV_xuh.js";import{F as O}from"./FSClock-DcVrPuah.js";import{_ as y}from"./FSRow-oDTnIAxc.js";import{a as i,d as I}from"./timeRangeTools-Fhi6yVy0.js";import{u as A}from"./useRules-B12Yr5ve.js";import{u as L}from"./useTranslations-CLqRehXT.js";import{D as b,a as s}from"./dates-CU5b-tXh.js";import{C as N}from"./useColors-CjA2D2xA.js";import{g as j}from"./enumTools-BEsapygt.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-BR6T1l1C.js";import"./VList-Cd1xaDQJ.js";import"./FSCard-BedrH_cK.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./index-BJH4L2FX.js";import"./VIcon-GfKFLOEw.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./index-DWgrY6Dg.js";import"./FSSlideGroup-DuKHMc7B.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CuTZlUtI.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./FSIcon-LkE5-ra7.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-lwjzcNyZ.js";import"./FSWrapGroup-DldQIiCW.js";import"./VInput-DXPqvHKO.js";import"./FSTextField-C7rYmEAT.js";import"./VField-D97ztcGG.js";import"./VLabel-Ca5QW7tf.js";import"./loader-CQB_6PPx.js";import"./FSCheckbox-DdLfY5jd.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-CmtPc-zJ.js";import"./FSLoader-CRKSvpTi.js";import"./FSRadio-Di2X4_xD.js";import"./VSelect-IZDtUERE.js";import"./VMenu-sKuqJ8jm.js";import"./FSSlider-CfINKbdA.js";import"./VSlider-HZEqctk3.js";import"./useDateFormat-hcE1Scoo.js";import"./useAppTimeZone-CP1Ic-gf.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CN6bsmo6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const w=U({name:"FSTimeRangeField",components:{FSSelectField:k,FSBaseField:B,FSClock:O,FSRow:y},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Object,required:!0,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},showVariant:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{$tr:c}=L(),{validateOn:h,getMessages:F}=A(),M=[{id:b.Local,label:c("ui.common.local","Local")},{id:b.UTC,label:c("ui.common.utc","UTC")}],d=u(()=>j(s).map(t=>({id:t.value,label:I(t.value)}))),a=u(()=>i(e.modelValue,!1)),v=u(()=>a.value?a.value.startHour*60*60*1e3+a.value.startMinute*60*1e3:0),m=u(()=>a.value?a.value.endHour*60*60*1e3+a.value.endMinute*60*1e3:0),l=u(()=>e.messages??F(e.modelValue,e.rules));return{dateTypeItems:M,validateOn:h,daysItems:d,ColorEnum:N,startTime:v,realTime:a,messages:l,DateType:b,endTime:m,onChangeHourStart:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0,V={startDay:a.value.startDay,startHour:n,startMinute:g,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},D=i(V,!0);r("update:modelValue",D)},onChangeDayStart:t=>{if(t===s.AllDays)r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});else{const n=i({startDay:t,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:e.modelValue.endDay==s.AllDays?t:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}},onChangeHourEnd:t=>{const n=t?Math.floor(t/36e5):0,g=t?Math.floor(t%(60*60*1e3)/(60*1e3)):0;if(a.value){const V={startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:n,endMinute:g,variant:a.value.variant},D=i(V,!0);r("update:modelValue",D)}},onUpdateVariant:t=>{const n=i({startDay:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:a.value.endDay,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:t},!0);r("update:modelValue",n)},onChangeDayEnd:t=>{if(t===s.AllDays){r("update:modelValue",{startDay:t,startHour:e.modelValue.startHour,startMinute:e.modelValue.startMinute,endDay:t,endHour:e.modelValue.endHour,endMinute:e.modelValue.endMinute,variant:e.modelValue.variant});return}else{const n=i({startDay:e.modelValue.startDay==s.AllDays?t:a.value.startDay,startHour:a.value.startHour,startMinute:a.value.startMinute,endDay:t,endHour:a.value.endHour,endMinute:a.value.endMinute,variant:a.value.variant},!0);r("update:modelValue",n)}}}}});function P(e,r,c,h,F,M){const d=H("FSSelectField"),a=H("FSClock"),v=H("FSBaseField");return T(),S(v,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,messages:e.messages},{default:p(()=>[o(y,null,{default:p(()=>{var m;return[o(y,{wrap:!1},{default:p(()=>{var l;return[o(d,{validationValue:e.$props.modelValue,disabled:e.$props.disabled,validateOn:e.validateOn,rules:e.$props.rules,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.startDay)??0,"onUpdate:modelValue":e.onChangeDayStart},null,8,["validationValue","disabled","validateOn","rules","items","modelValue","onUpdate:modelValue"]),o(a,{disabled:e.$props.disabled,color:e.ColorEnum.Light,slider:!1,modelValue:e.startTime,"onUpdate:modelValue":e.onChangeHourStart},null,8,["disabled","color","modelValue","onUpdate:modelValue"])]}),_:1}),o(y,{wrap:!1},{default:p(()=>{var l;return[o(d,{disabled:e.$props.disabled,items:e.daysItems,hideHeader:!0,clearable:!1,modelValue:((l=e.realTime)==null?void 0:l.endDay)??0,"onUpdate:modelValue":e.onChangeDayEnd},null,8,["disabled","items","modelValue","onUpdate:modelValue"]),o(a,{disabled:e.$props.disabled,color:e.ColorEnum.Light,slider:!1,modelValue:e.endTime,"onUpdate:modelValue":e.onChangeHourEnd},null,8,["disabled","color","modelValue","onUpdate:modelValue"])]}),_:1}),e.$props.showVariant?(T(),S(d,{key:0,width:"hug",label:e.$tr("ui.common.type","Type"),items:e.dateTypeItems,hideHeader:!0,clearable:!1,modelValue:((m=e.modelValue)==null?void 0:m.variant)??e.DateType.Local,"onUpdate:modelValue":e.onUpdateVariant},null,8,["label","items","modelValue","onUpdate:modelValue"])):E("",!0)]}),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","messages"])}const $=z(w,[["render",P]]);w.__docgenInfo={displayName:"FSTimeRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"DateTimeRange"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"showVariant",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTimeRangeField.vue"]};const ba={title:"Foundation/Shared/Input fields/TimeRangeField",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value0:{startDay:0,startHour:22,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:2},value1:{startDay:0,startHour:0,startMinute:0,endDay:0,endHour:0,endMinute:0,variant:1},value2:{startDay:1,startHour:1,startMinute:0,endDay:2,endHour:2,endMinute:0,variant:1}}},render:(e,{argTypes:r})=>({components:{FSTimeRangeField:$,FSCol:G},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(R=(q=f.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const ha=["Variations"];export{f as Variations,ha as __namedExportsOrder,ba as default};
