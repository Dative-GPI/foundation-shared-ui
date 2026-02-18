import{d as Y,e as s,c as k,w as C,B,D as l,I as m,J as E,q as n,K as H,L as W,H as Z}from"./vue.esm-bundler-B9lxvfDw.js";import{a as _}from"./properties-Qw-O9fbT.js";import{F as D}from"./FSCol-BwxAijHz.js";import{F as x}from"./FSButton-CxA5c6KR.js";import{_ as j}from"./FSSpan-COYXSDbp.js";import{F as ee}from"./FSText-DZJhh1AD.js";import{F as ae,T as p,c as te}from"./FSPlayButtons-vrShVNF1.js";import{F as re}from"./FSRangeSlider-CyIza2F5.js";import{F as oe}from"./FSBaseField-CSo0Z4y4.js";import{F as le}from"./FSTermField-g3hcpmX2.js";import{u as ie}from"./useDateFormat-DB9Xcy26.js";import{u as ne}from"./useDateExpression-DZOLa9PY.js";import{u as de}from"./useBreakpoints-Dc84uxeD.js";import{u as me,C as O}from"./useColors-B5aYgogF.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSRow-CFa9RNor.js";import"./css-BHrR5cp2.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./VProgressCircular-DSOzHF7B.js";import"./color-CLtf7Qrc.js";import"./theme-Bz5xEpqh.js";import"./useRender-DM2jvMPN.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSIcon-kCffLiJ2.js";import"./useSlots-BioZKQqg.js";import"./VSliderTrack-D_rsWSuX.js";import"./index-7AXDWkBX.js";import"./elevation-DZ0Sccyb.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./index-EdIR5CJS.js";import"./rounded-BrvRf1BO.js";import"./VInput-DcZY3iGt.js";import"./transition-Dh_EAQcC.js";import"./density-DvMOIaQw.js";import"./dimensions-n1mPaUbN.js";import"./VLabel-CT69iMfY.js";import"./lodash-DyRFk5BS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSSelectField-DgdAo_PA.js";import"./FSDialogMenu-DW8xl5CQ.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./easing-DY7PVvcf.js";import"./anchor-ByUPiJZt.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BurwYF19.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./VSlideGroup-6AACxYIN.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSToggleSet-ByYfXxag.js";import"./FSWrapGroup-rn2r_UVH.js";import"./FSTextField-mjFAiq2r.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./loader-CaGstafT.js";import"./index-Dli51uy9.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSLoader-FkDR4IbG.js";import"./FSRadio-0LKeB0Ro.js";import"./VSelect-DVFoBPCa.js";import"./VList-CuJqKfkq.js";import"./ssrBoot-butIQ2KL.js";import"./variant-BIgPYL9J.js";import"./VImg-UzuohEtG.js";import"./VDivider-CJxliPT_.js";import"./VMenu-etFegoZJ.js";import"./dates-CU5b-tXh.js";import"./useTranslations-AmWs0SAL.js";import"./FSDateTimeRangeField-BHyNWxfH.js";import"./FSDialogSubmit-B0ne1ir2.js";import"./FSDialog-DB3qC7bV.js";import"./FSCalendarTwin-DTCnXpxi.js";import"./useAppLanguageCode-CT4VqPAG.js";import"./VLocaleProvider-aph9zSFn.js";import"./date-B2d_2UQ9.js";import"./VBtn-CjvfwDqR.js";import"./FSClock-BI5Dq5rD.js";import"./FSSlider-DRS071pL.js";import"./VSlider-DBHmGPm5.js";import"./useAppTimeZone-yr9jXsW5.js";import"./FSNumberField-BrGJ77rB.js";import"./FSForm-C7RHfymi.js";import"./rules-BJlQ9sVg.js";import"./time-BAnUzhMU.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";const A=Y({name:"FSRangePicker",components:{FSCol:D,FSSpan:j,FSText:ee,FSTermField:le,FSBaseField:oe,FSRangeSlider:re,FSPlayButtons:ae},props:{label:{type:String,required:!1},mode:{type:String,required:!1,default:"single"},modelValue:{type:Object,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:a,expose:S}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:R,epochToDayMonthShortOnly:w,epochToISO:v,epochToMonthShortTimeFormat:F}=ie(),{convert:d}=ne(),{isMobileSized:h,isExtraSmall:y}=de(),{getColors:t}=me(),J=t(O.Light),u=s(!1),V=s(),i=s(d(e.startDate)),r=s(d(e.endDate)),b=k(()=>y.value?3:h.value?4:5),P=k(()=>{const o=r.value-i.value;return o<=864e5*b.value?p.Hours:o<=2592e6*b.value?p.Days:p.Months}),K=k(()=>te({start:i.value,end:r.value,tickCount:b.value,precision:P.value})),$=()=>{i.value=d(e.startDate),r.value=d(e.endDate)},G=o=>{u.value=o},Q=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[i.value,i.value+o])},X=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[r.value-o,r.value])};return C([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(e.modelValue[0]<i.value||e.modelValue[1]>r.value)&&a("update:modelValue",[i.value,r.value])},{immediate:!0}),C([()=>e.startDate,()=>e.endDate],()=>{$()},{immediate:!0}),C(u,o=>{if(!o&&V.value){clearInterval(V.value);return}V.value=setInterval(()=>{e.modelValue[0]+e.stepTime<=r.value&&e.modelValue[1]+e.stepTime<=r.value?a("update:modelValue",[e.modelValue[0]+e.stepTime,e.modelValue[1]+e.stepTime]):u.value=!1},e.playingStepDuration)}),S({refresh:$}),{ticks:K,playing:u,ColorEnum:O,lightColors:J,endTimestamp:r,TimePrecision:p,tickPrecision:P,startTimestamp:i,epochToISO:v,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:R,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:w,epochToMonthShortTimeFormat:F}}});function ue(e,a,S,q,R,w){const v=m("FSTermField"),F=m("FSText"),d=m("FSRangeSlider"),h=m("FSPlayButtons"),y=m("FSBaseField");return E(),B(y,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:l(()=>[n(T,{align:"bottom-center",gap:"32px"},{default:l(()=>[n(v,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":a[0]||(a[0]=t=>e.$emit("update:startDate",t)),"onUpdate:endDate":a[1]||(a[1]=t=>e.$emit("update:endDate",t))},null,8,["label","startDate","endDate","disabled"]),n(T,{padding:"0 0 2px 0",align:"center-center"},{default:l(()=>[n(D,null,{default:l(()=>[n(d,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackFillColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},{"thumb-label":l(({modelValue:t})=>[n(j,{font:"text-overline"},{default:l(()=>[H(W(e.epochToMonthShortTimeFormat(t)),1)]),_:2},1024)]),"tick-label":l(({tick:t})=>[n(T,null,{default:l(()=>[n(F,{color:e.lightColors.dark,font:"text-overline"},{default:l(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(t.value):e.epochToDayMonthShortOnly(t.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","trackFillColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(E(),B(h,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const g=se(A,[["render",ue]]);A.__docgenInfo={displayName:"FSRangePicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"mode",type:{name:"String as () => 'single' | 'range'"},required:!1,defaultValue:{func:!1,value:"'single'"}},{name:"modelValue",type:{name:"Object as () => [number, number]"},required:!0},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRangePicker.vue"]};const mt={title:"Foundation/Shared/RangePicker",component:g,tags:["autodocs"],argTypes:{..._(g)}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:[0,0]},render:e=>({components:{FSCol:D,FSRangePicker:g},setup(){return{args:e}},template:`
      <FSCol
        gap="20px"
      >
        <FSRangePicker
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
      </FSCol>
    `})},c={args:{startDate:"now - 3d",endDate:"now",modelValue:[0,0]},render:e=>({components:{FSCol:D,FSRangePicker:g,FSButton:x},setup(){const a=s(null);return{args:e,pickerRef:a,refresh:()=>{a.value&&a.value.refresh()}}},template:`
      <FSCol
        gap="20px"
      >
        <FSRangePicker
          ref="pickerRef"
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
        <FSButton
          @click="refresh"
          label="Refresh"
        />
      </FSCol>
    `})};var N,I,M;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    startDate: 'now - 3d',
    endDate: 'now',
    modelValue: [0, 0]
  },
  render: args => ({
    components: {
      FSCol,
      FSRangePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSCol
        gap="20px"
      >
        <FSRangePicker
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
      </FSCol>
    \`
  })
}`,...(M=(I=f.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var U,z,L;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    startDate: 'now - 3d',
    endDate: 'now',
    modelValue: [0, 0]
  },
  render: args => ({
    components: {
      FSCol,
      FSRangePicker,
      FSButton
    },
    setup() {
      const pickerRef = ref<typeof FSRangePicker | null>(null);
      const refresh = () => {
        if (pickerRef.value) {
          pickerRef.value.refresh();
        }
      };
      return {
        args,
        pickerRef,
        refresh
      };
    },
    template: \`
      <FSCol
        gap="20px"
      >
        <FSRangePicker
          ref="pickerRef"
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
        <FSButton
          @click="refresh"
          label="Refresh"
        />
      </FSCol>
    \`
  })
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const st=["Default","WithRefresh"];export{f as Default,c as WithRefresh,st as __namedExportsOrder,mt as default};
