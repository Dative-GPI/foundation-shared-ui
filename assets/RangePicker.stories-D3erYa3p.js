import{d as Y,b as m,c as k,w as C,B,E as n,I as s,J as E,z as i,H as Z,A as H,K as W}from"./vue.esm-bundler-BB--BfRN.js";import{a as _}from"./properties-Qw-O9fbT.js";import{F as S}from"./FSCol-BU2zndN-.js";import{F as x}from"./FSButton-DEqhqb0b.js";import{_ as A}from"./FSSpan-BndtI8AP.js";import{F as ee}from"./FSText-RaLR8FTM.js";import{F as ae,T as p,c as te}from"./FSPlayButtons-DR0ZPl7M.js";import{F as re}from"./FSRangeSlider-C7UNTyaS.js";import{F as oe}from"./FSBaseField-BxMUaAXJ.js";import{F as ne}from"./FSTermField-g-NFrZ-l.js";import{u as le}from"./useDateFormat-CLF81prI.js";import{u as ie}from"./useDateExpression-BnqG0Oit.js";import{u as de}from"./useBreakpoints-f5uwzDhq.js";import{u as se,C as O}from"./useColors-CeWNZtds.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSRow-Bdc52rY8.js";import"./css-DoweNwVf.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./VProgressCircular-DNr7n8jG.js";import"./color-DIvEt_AX.js";import"./theme-BwQCEo_4.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSIcon-BKav6CVU.js";import"./useSlots-COLyvmal.js";import"./VSliderTrack-D17LvGqE.js";import"./index-9ysw5oGg.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./index-8zgUIpZ9.js";import"./rounded-BKWlZxOJ.js";import"./VInput-BfMi-lTR.js";import"./transition-GJJG9yri.js";import"./density-Xpr_P7nk.js";import"./dimensions-DwY9cRwZ.js";import"./proxiedModel-DMSSa4ZW.js";import"./VLabel-Cmax-_yp.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-DqwGnLNL.js";import"./VList-CAfJ4PqY.js";import"./VDialog-bMbnstsA.js";import"./VOverlay-B758aeer.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-C8ooBn8e.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./router-WJHyAZQ9.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./ssrBoot-DNxkCF-9.js";import"./border-TZTDiA6n.js";import"./VImg-DcLzuYY5.js";import"./index--Ye8kcMr.js";import"./FSSlideGroup-DLHspItq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./FSToggleSet-D12Sjar_.js";import"./FSWrapGroup-TGBfJRdY.js";import"./FSTextField-DmCfYujO.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./loader-BKsf8Js6.js";import"./FSCheckbox-ti2pWVdy.js";import"./VSelectionControl-KO2lf4xS.js";import"./FSFadeOut-BS7VKwj1.js";import"./FSLoader-Cf5HtYZd.js";import"./FSRadio-C1kBTUbb.js";import"./VSelect-fihYAFHR.js";import"./VMenu-DdabqpBj.js";import"./dates-CU5b-tXh.js";import"./useTranslations-DvAhn7XV.js";import"./FSDateTimeRangeField-B-c9YT0a.js";import"./FSDialogSubmit-DCuIz0OX.js";import"./FSDialog-CsOSQzi_.js";import"./FSCalendarTwin-Dk9yTQam.js";import"./useAppLanguageCode-DVn301Ra.js";import"./VLocaleProvider-jaJMEg04.js";import"./VBtn-CpUNAmWP.js";import"./FSClock-smdRdCOC.js";import"./FSSlider-D48CyF2S.js";import"./VSlider-Bn75Yh_W.js";import"./useAppTimeZone-Yy6tN57G.js";import"./FSNumberField-CCJJ15Eq.js";import"./index-_Z9wfsFC.js";import"./FSForm-Ci9drIy4.js";import"./rules-BTu8BudJ.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DawHGwfT.js";import"./startOfDay-C4pDH4rb.js";const L=Y({name:"FSRangePicker",components:{FSCol:S,FSSpan:A,FSText:ee,FSTermField:ne,FSBaseField:oe,FSRangeSlider:re,FSPlayButtons:ae},props:{label:{type:String,required:!1},mode:{type:String,required:!1,default:"single"},modelValue:{type:Object,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:a,expose:D}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:R,epochToDayMonthShortOnly:w,epochToISO:v,epochToMonthShortTimeFormat:F}=le(),{convert:d}=ie(),{isMobileSized:h,isExtraSmall:y}=de(),{getColors:t}=se(),J=t(O.Light),u=m(!1),V=m(),l=m(d(e.startDate)),r=m(d(e.endDate)),b=k(()=>y.value?3:h.value?4:5),P=k(()=>{const o=r.value-l.value;return o<=864e5*b.value?p.Hours:o<=2592e6*b.value?p.Days:p.Months}),K=k(()=>te({start:l.value,end:r.value,tickCount:b.value,precision:P.value})),$=()=>{l.value=d(e.startDate),r.value=d(e.endDate)},G=o=>{u.value=o},Q=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[l.value,l.value+o])},X=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[r.value-o,r.value])};return C([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(e.modelValue[0]<l.value||e.modelValue[1]>r.value)&&a("update:modelValue",[l.value,r.value])},{immediate:!0}),C([()=>e.startDate,()=>e.endDate],()=>{$()},{immediate:!0}),C(u,o=>{if(!o&&V.value){clearInterval(V.value);return}V.value=setInterval(()=>{e.modelValue[0]+e.stepTime<=r.value&&e.modelValue[1]+e.stepTime<=r.value?a("update:modelValue",[e.modelValue[0]+e.stepTime,e.modelValue[1]+e.stepTime]):u.value=!1},e.playingStepDuration)}),D({refresh:$}),{ticks:K,playing:u,ColorEnum:O,lightColors:J,endTimestamp:r,TimePrecision:p,tickPrecision:P,startTimestamp:l,epochToISO:v,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:R,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:w,epochToMonthShortTimeFormat:F}}});function ue(e,a,D,q,R,w){const v=s("FSTermField"),F=s("FSText"),d=s("FSRangeSlider"),h=s("FSPlayButtons"),y=s("FSBaseField");return E(),B(y,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:n(()=>[i(T,{align:"bottom-center",gap:"32px"},{default:n(()=>[i(v,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":a[0]||(a[0]=t=>e.$emit("update:startDate",t)),"onUpdate:endDate":a[1]||(a[1]=t=>e.$emit("update:endDate",t))},null,8,["label","startDate","endDate","disabled"]),i(T,{padding:"0 0 2px 0",align:"center-center"},{default:n(()=>[i(S,null,{default:n(()=>[i(d,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackFillColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},{"thumb-label":n(({modelValue:t})=>[i(A,{font:"text-overline"},{default:n(()=>[H(W(e.epochToMonthShortTimeFormat(t)),1)]),_:2},1024)]),"tick-label":n(({tick:t})=>[i(T,null,{default:n(()=>[i(F,{color:e.lightColors.dark,font:"text-overline"},{default:n(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(t.value):e.epochToDayMonthShortOnly(t.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","trackFillColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(E(),B(h,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const g=me(L,[["render",ue]]);L.__docgenInfo={displayName:"FSRangePicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"mode",type:{name:"String as () => 'single' | 'range'"},required:!1,defaultValue:{func:!1,value:"'single'"}},{name:"modelValue",type:{name:"Object as () => [number, number]"},required:!0},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRangePicker.vue"]};const xa={title:"Foundation/Shared/RangePicker",component:g,tags:["autodocs"],argTypes:{..._(g)}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:[0,0]},render:e=>({components:{FSCol:S,FSRangePicker:g},setup(){return{args:e}},template:`
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
    `})},c={args:{startDate:"now - 3d",endDate:"now",modelValue:[0,0]},render:e=>({components:{FSCol:S,FSRangePicker:g,FSButton:x},setup(){const a=m(null);return{args:e,pickerRef:a,refresh:()=>{a.value&&a.value.refresh()}}},template:`
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
}`,...(M=(I=f.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var z,U,j;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(U=c.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const et=["Default","WithRefresh"];export{f as Default,c as WithRefresh,et as __namedExportsOrder,xa as default};
