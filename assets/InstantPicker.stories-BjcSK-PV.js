import{d as Y,b as m,c as b,w as k,B as I,E as o,I as d,J as R,k as n,H as Z,A as H,K as W}from"./vue.esm-bundler-CocPPKUI.js";import{F as g}from"./FSCol-79-COv64.js";import{F as _}from"./FSButton-B9T3D7JL.js";import{_ as L}from"./FSSpan-CKhKq6E1.js";import{F as x}from"./FSText-Nj40J67v.js";import{F as ee}from"./FSSlider-D214cViD.js";import{F as ae,T as p,c as te}from"./FSPlayButtons-VU1buNhk.js";import{F as re}from"./FSBaseField-Cn3A38Ti.js";import{F as oe}from"./FSTermField-DocgbVem.js";import{u as ne}from"./useDateFormat-DIxFAYu6.js";import{u as le}from"./useDateExpression-DXBXD926.js";import{u as ie}from"./useBreakpoints-DZlz3-56.js";import{u as se,C as E}from"./useColors-C1aD-Kb6.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./VProgressCircular-k_tOz5gX.js";import"./color-D50-hVV_.js";import"./theme-C1Gcptw7.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSIcon-BGuuL0jz.js";import"./useSlots-D4bv69lA.js";import"./VSlider-DynmDTsv.js";import"./VSliderTrack-C6Ch4QSr.js";import"./index-hd-xIizf.js";import"./elevation-DUhGVECn.js";import"./locale-_fONYh-8.js";import"./index-BwBNp3ym.js";import"./rounded-CBYChxif.js";import"./VInput-JSCg5nQs.js";import"./transition-bMLtH-b3.js";import"./density-2KuMGYl6.js";import"./dimensions-Cv9Fwl7U.js";import"./proxiedModel-DW1FRKBO.js";import"./VLabel-yrR5w-fx.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-Cu50eP5y.js";import"./FSDialogMenu-BpQhlEn9.js";import"./VDialog-BpMVGEao.js";import"./VOverlay-BMq2UEr3.js";import"./forwardRefs-DWGaNmQL.js";import"./anchor-D4EnoweD.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./FSSlideGroup-BoaCkdx0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./FSToggleSet-mQm74CcI.js";import"./FSWrapGroup-DXlgsE59.js";import"./FSTextField-HkwYV1Vw.js";import"./useRules-C3-AmzzE.js";import"./VField-CAcTjb6h.js";import"./loader-BDqRCawj.js";import"./index-5LM_ZUPq.js";import"./FSCheckbox-MGAv1q-u.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./FSFadeOut-BcV7cYL5.js";import"./FSLoader-JpoH2mis.js";import"./FSRadio-D7UyW-G6.js";import"./VSelect-iFfd9zu0.js";import"./VList-7u5M4k2B.js";import"./ssrBoot-B-cFki3l.js";import"./border-ZP5ArpGv.js";import"./VImg-C2WY2bzk.js";import"./VMenu-DLjuHJDK.js";import"./dates-CU5b-tXh.js";import"./useTranslations-DJaIYmO0.js";import"./FSDateTimeRangeField-DPw91Nd-.js";import"./FSDialogSubmit-D4dVVio-.js";import"./FSDialog-DH0zR2eI.js";import"./FSCalendarTwin-VQGjM8hT.js";import"./useAppLanguageCode-yNRdweo3.js";import"./VLocaleProvider-BJaGNJI0.js";import"./VBtn-CT_Tyh1g.js";import"./FSClock-BWPgTudT.js";import"./useAppTimeZone-CyFP2jUy.js";import"./FSNumberField-DEan1R3Z.js";import"./index-_Z9wfsFC.js";import"./FSForm-DpdyTVKf.js";import"./rules-B-1MsapQ.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DjiI-HV9.js";import"./startOfDay-C4pDH4rb.js";const J=Y({name:"FSInstantPicker",components:{FSCol:g,FSSpan:L,FSText:x,FSSlider:ee,FSTermField:oe,FSBaseField:re,FSPlayButtons:ae},props:{label:{type:String,required:!1},modelValue:{type:Number,required:!1},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:a,expose:D}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:w,epochToDayMonthShortOnly:P,epochToISO:S,epochToMonthShortTimeFormat:F}=ne(),{convert:l}=le(),{isMobileSized:v,isExtraSmall:h}=ie(),{getColors:t}=se(),K=t(E.Light),u=m(!1),y=m(),i=m(l(e.startDate)),r=m(l(e.endDate)),V=b(()=>h.value?3:v.value?4:5),$=b(()=>{const s=r.value-i.value;return s<=864e5*V.value?p.Hours:s<=2592e6*V.value?p.Days:p.Months}),j=b(()=>te({start:i.value,end:r.value,tickCount:V.value,precision:$.value})),B=()=>{i.value=l(e.startDate),r.value=l(e.endDate)},G=s=>{u.value=s},Q=()=>{a("update:modelValue",i.value)},X=()=>{a("update:modelValue",r.value)};return k([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(!e.modelValue||e.modelValue<i.value||e.modelValue>r.value)&&a("update:modelValue",r.value)},{immediate:!0}),k([()=>e.startDate,()=>e.endDate],()=>{B()},{immediate:!0}),k(u,s=>{!s&&y.value?clearInterval(y.value):y.value=setInterval(()=>{e.modelValue&&e.modelValue+e.stepTime<=r.value?a("update:modelValue",e.modelValue+e.stepTime):(a("update:modelValue",r.value),u.value=!1)},e.playingStepDuration)}),D({refresh:B}),{ticks:j,playing:u,ColorEnum:E,lightColors:K,endTimestamp:r,TimePrecision:p,tickPrecision:$,startTimestamp:i,epochToISO:S,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:w,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:P,epochToMonthShortTimeFormat:F}}});function me(e,a,D,q,w,P){const S=d("FSTermField"),F=d("FSText"),l=d("FSSlider"),v=d("FSPlayButtons"),h=d("FSBaseField");return R(),I(h,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:o(()=>[n(C,{align:"bottom-center",gap:"32px"},{default:o(()=>[n(S,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":a[0]||(a[0]=t=>e.$emit("update:startDate",t)),"onUpdate:endDate":a[1]||(a[1]=t=>e.$emit("update:endDate",t))},null,8,["label","startDate","endDate","disabled"]),n(C,{padding:"0 0 2px 0",align:"center-center"},{default:o(()=>[n(g,null,{default:o(()=>[n(l,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},{"thumb-label":o(({modelValue:t})=>[n(L,{font:"text-overline"},{default:o(()=>[H(W(e.epochToMonthShortTimeFormat(t)),1)]),_:2},1024)]),"tick-label":o(({tick:t})=>[n(C,null,{default:o(()=>[n(F,{color:e.lightColors.dark,font:"text-overline"},{default:o(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(t.value):e.epochToDayMonthShortOnly(t.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(R(),I(v,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const T=de(J,[["render",me]]);J.__docgenInfo={displayName:"FSInstantPicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"number"},required:!1},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInstantPicker.vue"]};const xa={title:"Foundation/Shared/InstantPicker",component:T,tags:["autodocs"],argTypes:{"onUpdate:startDate":{action:"update:startDate"},"onUpdate:endDate":{action:"update:endDate"},"onUpdate:modelValue":{action:"update:modelValue"}}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:0},render:e=>({components:{FSCol:g,FSInstantPicker:T},setup(){return{args:e}},template:`
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
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const et=["Default","WithRefresh"];export{f as Default,c as WithRefresh,et as __namedExportsOrder,xa as default};
