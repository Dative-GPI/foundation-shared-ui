import{d as Y,b as m,c as k,w as C,B,E as n,I as s,J as E,k as i,H as Z,A as H,K as W}from"./vue.esm-bundler-CocPPKUI.js";import{a as _}from"./properties-Qw-O9fbT.js";import{F as S}from"./FSCol-79-COv64.js";import{F as x}from"./FSButton-VjwKfCr9.js";import{_ as A}from"./FSSpan-DrSEJIpr.js";import{F as ee}from"./FSText-U805njuH.js";import{F as ae,T as p,c as te}from"./FSPlayButtons-EVZ9zInR.js";import{F as re}from"./FSRangeSlider-BJ9myWFh.js";import{F as oe}from"./FSBaseField-BHCTmkg_.js";import{F as ne}from"./FSTermField-wvsbBfCG.js";import{u as le}from"./useDateFormat-DIxFAYu6.js";import{u as ie}from"./useDateExpression-DXBXD926.js";import{u as de}from"./useBreakpoints-DZlz3-56.js";import{u as se,C as O}from"./useColors-DUufJJPH.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./theme-DhcBBMcp.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSIcon-CKNHHVc2.js";import"./useSlots-D4bv69lA.js";import"./VSliderTrack-BIaLI1BH.js";import"./index-DfBdMsnv.js";import"./elevation-CsFMJmSN.js";import"./locale-_fONYh-8.js";import"./index-BgX1FNqJ.js";import"./rounded-Cjf6r1y4.js";import"./VInput-DhPQv4YC.js";import"./transition-BuKnRONq.js";import"./density-DZuLaB-B.js";import"./dimensions-C9PuMYcl.js";import"./proxiedModel-DvocDLKO.js";import"./VLabel-HvE-XSAC.js";import"./lodash-Zo30T2Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSelectField-DzMtmuD3.js";import"./FSDialogMenu-CeOfi1Vz.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./easing-DY7PVvcf.js";import"./anchor-C7UfIAXa.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./FSSlideGroup-BpYleAPY.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BGw3zb-K.js";import"./VSlideGroup-D3ZQzm0f.js";import"./group-CbiZXdYV.js";import"./VSlideGroupItem-BQNaTCX0.js";import"./FSToggleSet-BAu9OVEz.js";import"./FSWrapGroup-CR1U-5kP.js";import"./FSTextField-CrSrBFtk.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./loader-B3-0Tc48.js";import"./index-lkzvYdnq.js";import"./FSCheckbox-ChCYq6Yz.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./FSFadeOut-BaaWP8Xe.js";import"./FSLoader-BeIlBGG_.js";import"./FSRadio-DSN2e6_O.js";import"./VSelect-CKWfJZu2.js";import"./VList-BU_HHy4r.js";import"./ssrBoot-B-cFki3l.js";import"./border-B0huqYee.js";import"./VImg-BaN5zAl6.js";import"./VMenu-uiC9_CJ1.js";import"./dates-CU5b-tXh.js";import"./useTranslations-DJaIYmO0.js";import"./FSDateTimeRangeField-B_Cbbl6M.js";import"./FSDialogSubmit-na6ulupt.js";import"./FSDialog-Da78Hskl.js";import"./FSCalendarTwin-CIEzsnFa.js";import"./useAppLanguageCode-yNRdweo3.js";import"./VLocaleProvider-B6NC48_S.js";import"./VBtn-Cjbcb1KM.js";import"./FSClock-xDXvcUTi.js";import"./FSSlider-Bnz1_knh.js";import"./VSlider-xkXf3j8e.js";import"./useAppTimeZone-CyFP2jUy.js";import"./FSNumberField-KvdxLQEK.js";import"./index-_Z9wfsFC.js";import"./FSForm-DtfEUZJL.js";import"./rules-BRs3Lhuu.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-BAqNPYOD.js";import"./times-CqUFey1a.js";import"./startOfDay-C4pDH4rb.js";const L=Y({name:"FSRangePicker",components:{FSCol:S,FSSpan:A,FSText:ee,FSTermField:ne,FSBaseField:oe,FSRangeSlider:re,FSPlayButtons:ae},props:{label:{type:String,required:!1},mode:{type:String,required:!1,default:"single"},modelValue:{type:Object,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:a,expose:D}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:R,epochToDayMonthShortOnly:w,epochToISO:v,epochToMonthShortTimeFormat:F}=le(),{convert:d}=ie(),{isMobileSized:h,isExtraSmall:y}=de(),{getColors:t}=se(),J=t(O.Light),u=m(!1),V=m(),l=m(d(e.startDate)),r=m(d(e.endDate)),b=k(()=>y.value?3:h.value?4:5),P=k(()=>{const o=r.value-l.value;return o<=864e5*b.value?p.Hours:o<=2592e6*b.value?p.Days:p.Months}),K=k(()=>te({start:l.value,end:r.value,tickCount:b.value,precision:P.value})),$=()=>{l.value=d(e.startDate),r.value=d(e.endDate)},G=o=>{u.value=o},Q=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[l.value,l.value+o])},X=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[r.value-o,r.value])};return C([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(e.modelValue[0]<l.value||e.modelValue[1]>r.value)&&a("update:modelValue",[l.value,r.value])},{immediate:!0}),C([()=>e.startDate,()=>e.endDate],()=>{$()},{immediate:!0}),C(u,o=>{if(!o&&V.value){clearInterval(V.value);return}V.value=setInterval(()=>{e.modelValue[0]+e.stepTime<=r.value&&e.modelValue[1]+e.stepTime<=r.value?a("update:modelValue",[e.modelValue[0]+e.stepTime,e.modelValue[1]+e.stepTime]):u.value=!1},e.playingStepDuration)}),D({refresh:$}),{ticks:K,playing:u,ColorEnum:O,lightColors:J,endTimestamp:r,TimePrecision:p,tickPrecision:P,startTimestamp:l,epochToISO:v,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:R,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:w,epochToMonthShortTimeFormat:F}}});function ue(e,a,D,q,R,w){const v=s("FSTermField"),F=s("FSText"),d=s("FSRangeSlider"),h=s("FSPlayButtons"),y=s("FSBaseField");return E(),B(y,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:n(()=>[i(T,{align:"bottom-center",gap:"32px"},{default:n(()=>[i(v,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":a[0]||(a[0]=t=>e.$emit("update:startDate",t)),"onUpdate:endDate":a[1]||(a[1]=t=>e.$emit("update:endDate",t))},null,8,["label","startDate","endDate","disabled"]),i(T,{padding:"0 0 2px 0",align:"center-center"},{default:n(()=>[i(S,null,{default:n(()=>[i(d,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackFillColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},{"thumb-label":n(({modelValue:t})=>[i(A,{font:"text-overline"},{default:n(()=>[H(W(e.epochToMonthShortTimeFormat(t)),1)]),_:2},1024)]),"tick-label":n(({tick:t})=>[i(T,null,{default:n(()=>[i(F,{color:e.lightColors.dark,font:"text-overline"},{default:n(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(t.value):e.epochToDayMonthShortOnly(t.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","trackFillColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(E(),B(h,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const g=me(L,[["render",ue]]);L.__docgenInfo={displayName:"FSRangePicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"mode",type:{name:"String as () => 'single' | 'range'"},required:!1,defaultValue:{func:!1,value:"'single'"}},{name:"modelValue",type:{name:"Object as () => [number, number]"},required:!0},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRangePicker.vue"]};const nt={title:"Foundation/Shared/RangePicker",component:g,tags:["autodocs"],argTypes:{..._(g)}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:[0,0]},render:e=>({components:{FSCol:S,FSRangePicker:g},setup(){return{args:e}},template:`
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
}`,...(M=(I=f.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var U,z,j;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(z=c.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const lt=["Default","WithRefresh"];export{f as Default,c as WithRefresh,lt as __namedExportsOrder,nt as default};
