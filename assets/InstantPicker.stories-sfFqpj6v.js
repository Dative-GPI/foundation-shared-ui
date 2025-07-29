import{d as Y,b as m,c as b,w as k,B as I,E as o,I as d,J as R,k as n,H as Z,A as H,K as W}from"./vue.esm-bundler-PONd4AmC.js";import{F as g}from"./FSCol-Bfhiyt6Y.js";import{F as _}from"./FSButton-CZKySWW0.js";import{_ as L}from"./FSSpan-DxKJLsSl.js";import{F as x}from"./FSText-C7hkL3As.js";import{F as ee}from"./FSSlider-D514dNG_.js";import{F as ae,T as p,c as te}from"./FSPlayButtons-B1bB69hY.js";import{F as re}from"./FSBaseField-DMW1nZy-.js";import{F as oe}from"./FSTermField-l5pzQTBE.js";import{u as ne}from"./useDateFormat-BhCCrheZ.js";import{u as le}from"./useDateExpression-Dghvwhpf.js";import{u as ie}from"./useBreakpoints-RTs-XAJF.js";import{u as se,C as E}from"./useColors-Dytl_X2F.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./VProgressCircular-CDK6zSYw.js";import"./color-_AiH45em.js";import"./theme-CTzRPxOi.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSIcon-bsX1r_Ci.js";import"./useSlots-nyIcwo6G.js";import"./VSlider-brHfwJlg.js";import"./VSliderTrack-D_7OwznJ.js";import"./index-CANKuvlL.js";import"./elevation-CL0Py7Fp.js";import"./locale-CoLhg8Wl.js";import"./index-B8vPsAiL.js";import"./rounded-BBFi0CuG.js";import"./VInput-ClaXJMCA.js";import"./transition-BXZIGKil.js";import"./density-CNNumQ_A.js";import"./dimensions-CNbPgA3L.js";import"./proxiedModel-vOB1Q9Gh.js";import"./VLabel-5AeJpfXJ.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-Bqm7POVY.js";import"./FSDialogMenu-Czm1Jubp.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-D2WyvgD_.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./router-6tzIEQS-.js";import"./VDefaultsProvider-BsWh58B_.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./FSTextField-D-U5ryYn.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./loader-DGoLn0VY.js";import"./index-Bb4mSIJO.js";import"./FSCheckbox-CQphVYdu.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSLoader-UOJfN8Qb.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./VImg-DKyIpwU2.js";import"./VMenu-D11N5TPJ.js";import"./dates-CU5b-tXh.js";import"./useTranslations-_Q1DYra_.js";import"./FSDateTimeRangeField-gIet2_RK.js";import"./FSDialogSubmit-BPHhd3-P.js";import"./FSDialog-Iu1wYtKv.js";import"./FSCalendarTwin-ONwWZT4N.js";import"./useAppLanguageCode-fPbUdbod.js";import"./VLocaleProvider-BW20Lu4A.js";import"./VBtn-PodE2DV2.js";import"./FSClock-E7QFA3KD.js";import"./useAppTimeZone-BXRoybOo.js";import"./FSNumberField-Bfz5R9tT.js";import"./index-_Z9wfsFC.js";import"./FSForm-CLe5Lp0x.js";import"./rules-DRXW83Bb.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-Cavyfpwa.js";import"./startOfDay-C4pDH4rb.js";const J=Y({name:"FSInstantPicker",components:{FSCol:g,FSSpan:L,FSText:x,FSSlider:ee,FSTermField:oe,FSBaseField:re,FSPlayButtons:ae},props:{label:{type:String,required:!1},modelValue:{type:Number,required:!1},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:a,expose:D}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:w,epochToDayMonthShortOnly:P,epochToISO:S,epochToMonthShortTimeFormat:F}=ne(),{convert:l}=le(),{isMobileSized:v,isExtraSmall:h}=ie(),{getColors:t}=se(),K=t(E.Light),u=m(!1),y=m(),i=m(l(e.startDate)),r=m(l(e.endDate)),V=b(()=>h.value?3:v.value?4:5),$=b(()=>{const s=r.value-i.value;return s<=864e5*V.value?p.Hours:s<=2592e6*V.value?p.Days:p.Months}),j=b(()=>te({start:i.value,end:r.value,tickCount:V.value,precision:$.value})),B=()=>{i.value=l(e.startDate),r.value=l(e.endDate)},G=s=>{u.value=s},Q=()=>{a("update:modelValue",i.value)},X=()=>{a("update:modelValue",r.value)};return k([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(!e.modelValue||e.modelValue<i.value||e.modelValue>r.value)&&a("update:modelValue",r.value)},{immediate:!0}),k([()=>e.startDate,()=>e.endDate],()=>{B()},{immediate:!0}),k(u,s=>{!s&&y.value?clearInterval(y.value):y.value=setInterval(()=>{e.modelValue&&e.modelValue+e.stepTime<=r.value?a("update:modelValue",e.modelValue+e.stepTime):(a("update:modelValue",r.value),u.value=!1)},e.playingStepDuration)}),D({refresh:B}),{ticks:j,playing:u,ColorEnum:E,lightColors:K,endTimestamp:r,TimePrecision:p,tickPrecision:$,startTimestamp:i,epochToISO:S,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:w,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:P,epochToMonthShortTimeFormat:F}}});function me(e,a,D,q,w,P){const S=d("FSTermField"),F=d("FSText"),l=d("FSSlider"),v=d("FSPlayButtons"),h=d("FSBaseField");return R(),I(h,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:o(()=>[n(C,{align:"bottom-center",gap:"32px"},{default:o(()=>[n(S,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":a[0]||(a[0]=t=>e.$emit("update:startDate",t)),"onUpdate:endDate":a[1]||(a[1]=t=>e.$emit("update:endDate",t))},null,8,["label","startDate","endDate","disabled"]),n(C,{padding:"0 0 2px 0",align:"center-center"},{default:o(()=>[n(g,null,{default:o(()=>[n(l,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},{"thumb-label":o(({modelValue:t})=>[n(L,{font:"text-overline"},{default:o(()=>[H(W(e.epochToMonthShortTimeFormat(t)),1)]),_:2},1024)]),"tick-label":o(({tick:t})=>[n(C,null,{default:o(()=>[n(F,{color:e.lightColors.dark,font:"text-overline"},{default:o(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(t.value):e.epochToDayMonthShortOnly(t.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(R(),I(v,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const T=de(J,[["render",me]]);J.__docgenInfo={displayName:"FSInstantPicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"number"},required:!1},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInstantPicker.vue"]};const _a={title:"Foundation/Shared/InstantPicker",component:T,tags:["autodocs"],argTypes:{"onUpdate:startDate":{action:"update:startDate"},"onUpdate:endDate":{action:"update:endDate"},"onUpdate:modelValue":{action:"update:modelValue"}}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:0},render:e=>({components:{FSCol:g,FSInstantPicker:T},setup(){return{args:e}},template:`
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
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const xa=["Default","WithRefresh"];export{f as Default,c as WithRefresh,xa as __namedExportsOrder,_a as default};
