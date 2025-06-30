import{d as Y,b as m,c as b,w as k,B as I,E as o,I as d,J as R,z as n,H as Z,A as H,K as W}from"./vue.esm-bundler-BB--BfRN.js";import{F as g}from"./FSCol-BU2zndN-.js";import{F as _}from"./FSButton-DEqhqb0b.js";import{_ as L}from"./FSSpan-BndtI8AP.js";import{F as x}from"./FSText-RaLR8FTM.js";import{F as ee}from"./FSSlider-D48CyF2S.js";import{F as ae,T as p,c as te}from"./FSPlayButtons-DR0ZPl7M.js";import{F as re}from"./FSBaseField-BxMUaAXJ.js";import{F as oe}from"./FSTermField-g-NFrZ-l.js";import{u as ne}from"./useDateFormat-CLF81prI.js";import{u as le}from"./useDateExpression-BnqG0Oit.js";import{u as se}from"./useBreakpoints-f5uwzDhq.js";import{u as ie,C as E}from"./useColors-CeWNZtds.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSRow-Bdc52rY8.js";import"./css-DoweNwVf.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./VProgressCircular-DNr7n8jG.js";import"./color-DIvEt_AX.js";import"./theme-BwQCEo_4.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSIcon-BKav6CVU.js";import"./useSlots-COLyvmal.js";import"./VSlider-Bn75Yh_W.js";import"./VSliderTrack-D17LvGqE.js";import"./index-9ysw5oGg.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./index-8zgUIpZ9.js";import"./rounded-BKWlZxOJ.js";import"./VInput-BfMi-lTR.js";import"./transition-GJJG9yri.js";import"./density-Xpr_P7nk.js";import"./dimensions-DwY9cRwZ.js";import"./proxiedModel-DMSSa4ZW.js";import"./VLabel-Cmax-_yp.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-DqwGnLNL.js";import"./VList-CAfJ4PqY.js";import"./VDialog-bMbnstsA.js";import"./VOverlay-B758aeer.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-C8ooBn8e.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./router-WJHyAZQ9.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./ssrBoot-DNxkCF-9.js";import"./border-TZTDiA6n.js";import"./VImg-DcLzuYY5.js";import"./index--Ye8kcMr.js";import"./FSSlideGroup-DLHspItq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./FSToggleSet-D12Sjar_.js";import"./FSWrapGroup-TGBfJRdY.js";import"./FSTextField-DmCfYujO.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./loader-BKsf8Js6.js";import"./FSCheckbox-ti2pWVdy.js";import"./VSelectionControl-KO2lf4xS.js";import"./FSFadeOut-BS7VKwj1.js";import"./FSLoader-Cf5HtYZd.js";import"./FSRadio-C1kBTUbb.js";import"./VSelect-fihYAFHR.js";import"./VMenu-DdabqpBj.js";import"./dates-CU5b-tXh.js";import"./useTranslations-DvAhn7XV.js";import"./FSDateTimeRangeField-B-c9YT0a.js";import"./FSDialogSubmit-DCuIz0OX.js";import"./FSDialog-CsOSQzi_.js";import"./FSCalendarTwin-Dk9yTQam.js";import"./useAppLanguageCode-DVn301Ra.js";import"./VLocaleProvider-jaJMEg04.js";import"./VBtn-CpUNAmWP.js";import"./FSClock-smdRdCOC.js";import"./useAppTimeZone-Yy6tN57G.js";import"./FSNumberField-CCJJ15Eq.js";import"./index-_Z9wfsFC.js";import"./FSForm-Ci9drIy4.js";import"./rules-BTu8BudJ.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DawHGwfT.js";import"./startOfDay-C4pDH4rb.js";const J=Y({name:"FSInstantPicker",components:{FSCol:g,FSSpan:L,FSText:x,FSSlider:ee,FSTermField:oe,FSBaseField:re,FSPlayButtons:ae},props:{label:{type:String,required:!1},modelValue:{type:Number,required:!1},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:a,expose:D}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:w,epochToDayMonthShortOnly:P,epochToISO:S,epochToMonthShortTimeFormat:F}=ne(),{convert:l}=le(),{isMobileSized:v,isExtraSmall:h}=se(),{getColors:t}=ie(),K=t(E.Light),u=m(!1),y=m(),s=m(l(e.startDate)),r=m(l(e.endDate)),V=b(()=>h.value?3:v.value?4:5),$=b(()=>{const i=r.value-s.value;return i<=864e5*V.value?p.Hours:i<=2592e6*V.value?p.Days:p.Months}),j=b(()=>te({start:s.value,end:r.value,tickCount:V.value,precision:$.value})),B=()=>{s.value=l(e.startDate),r.value=l(e.endDate)},G=i=>{u.value=i},Q=()=>{a("update:modelValue",s.value)},X=()=>{a("update:modelValue",r.value)};return k([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(!e.modelValue||e.modelValue<s.value||e.modelValue>r.value)&&a("update:modelValue",r.value)},{immediate:!0}),k([()=>e.startDate,()=>e.endDate],()=>{B()},{immediate:!0}),k(u,i=>{!i&&y.value?clearInterval(y.value):y.value=setInterval(()=>{e.modelValue&&e.modelValue+e.stepTime<=r.value?a("update:modelValue",e.modelValue+e.stepTime):(a("update:modelValue",r.value),u.value=!1)},e.playingStepDuration)}),D({refresh:B}),{ticks:j,playing:u,ColorEnum:E,lightColors:K,endTimestamp:r,TimePrecision:p,tickPrecision:$,startTimestamp:s,epochToISO:S,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:w,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:P,epochToMonthShortTimeFormat:F}}});function me(e,a,D,q,w,P){const S=d("FSTermField"),F=d("FSText"),l=d("FSSlider"),v=d("FSPlayButtons"),h=d("FSBaseField");return R(),I(h,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:o(()=>[n(C,{align:"bottom-center",gap:"32px"},{default:o(()=>[n(S,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":a[0]||(a[0]=t=>e.$emit("update:startDate",t)),"onUpdate:endDate":a[1]||(a[1]=t=>e.$emit("update:endDate",t))},null,8,["label","startDate","endDate","disabled"]),n(C,{padding:"0 0 2px 0",align:"center-center"},{default:o(()=>[n(g,null,{default:o(()=>[n(l,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},{"thumb-label":o(({modelValue:t})=>[n(L,{font:"text-overline"},{default:o(()=>[H(W(e.epochToMonthShortTimeFormat(t)),1)]),_:2},1024)]),"tick-label":o(({tick:t})=>[n(C,null,{default:o(()=>[n(F,{color:e.lightColors.dark,font:"text-overline"},{default:o(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(t.value):e.epochToDayMonthShortOnly(t.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(R(),I(v,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const T=de(J,[["render",me]]);J.__docgenInfo={displayName:"FSInstantPicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"number"},required:!1},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInstantPicker.vue"]};const Ya={title:"Foundation/Shared/InstantPicker",component:T,tags:["autodocs"],argTypes:{"onUpdate:startDate":{action:"update:startDate"},"onUpdate:endDate":{action:"update:endDate"},"onUpdate:modelValue":{action:"update:modelValue"}}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:0},render:e=>({components:{FSCol:g,FSInstantPicker:T},setup(){return{args:e}},template:`
      <FSCol
        gap="20px"
      >
        <FSInstantPicker
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
      </FSCol>
    `})},c={args:{startDate:"now - 3d",endDate:"now",modelValue:0},render:e=>({components:{FSCol:g,FSInstantPicker:T,FSButton:_},setup(){const a=m(null);return{args:e,pickerRef:a,refresh:()=>{a.value&&a.value.refresh()}}},template:`
      <FSCol
        gap="20px"
      >
        <FSInstantPicker
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
    `})};var N,U,M;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    startDate: 'now - 3d',
    endDate: 'now',
    modelValue: 0
  },
  render: args => ({
    components: {
      FSCol,
      FSInstantPicker
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
        <FSInstantPicker
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
}`,...(M=(U=f.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var O,z,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    startDate: 'now - 3d',
    endDate: 'now',
    modelValue: 0
  },
  render: args => ({
    components: {
      FSCol,
      FSInstantPicker,
      FSButton
    },
    setup() {
      const pickerRef = ref<typeof FSInstantPicker | null>(null);
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
        <FSInstantPicker
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
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Za=["Default","WithRefresh"];export{f as Default,c as WithRefresh,Za as __namedExportsOrder,Ya as default};
