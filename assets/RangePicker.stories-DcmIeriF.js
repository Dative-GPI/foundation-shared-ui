import{d as Y,e as s,c as k,w as C,B,D as l,I as m,J as E,q as n,K as H,L as W,H as Z}from"./vue.esm-bundler-D5n7z5qz.js";import{a as _}from"./properties-Qw-O9fbT.js";import{F as D}from"./FSCol-D_lbFmZy.js";import{F as x}from"./FSButton-CZRwWCRJ.js";import{_ as j}from"./FSSpan-BN7wkmby.js";import{F as ee}from"./FSText-CJ7Lhzl1.js";import{F as ae,T as p,c as te}from"./FSPlayButtons-CvhlTsCG.js";import{F as re}from"./FSRangeSlider-D23DAxOW.js";import{F as oe}from"./FSBaseField-Buivlp1M.js";import{F as le}from"./FSTermField-CqrOj2Ik.js";import{u as ie}from"./useDateFormat-Be4eIA50.js";import{u as ne}from"./useDateExpression-VfhkHpOm.js";import{u as de}from"./useBreakpoints-CEzKC_o8.js";import{u as me,C as O}from"./useColors-BM_SKUZx.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./theme-Cdiv_FYE.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-BH6GLU3V.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./useSlots-CoecqEnp.js";import"./VSliderTrack-D8v_upRY.js";import"./index-6jMyctoo.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./index-BYo1BiTt.js";import"./rounded-lfTNxM9v.js";import"./VInput-bTNISmSY.js";import"./transition-DbItRNv8.js";import"./density-BnAGl-Nw.js";import"./dimensions-B7sNhH2O.js";import"./VLabel-D-9L6eJP.js";import"./lodash-DyRFk5BS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSSelectField-4I7RHWyb.js";import"./FSDialogMenu-553iq_m_.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./anchor-CPKk15qm.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./VSlideGroup-BxUK8FWF.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSToggleSet-BOI7_zgs.js";import"./FSWrapGroup-DzpSjUDj.js";import"./FSTextField-Cclf6IX8.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./loader-COXi3ZW_.js";import"./index-BKpPdzm5.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./FSFadeOut-C918yX_r.js";import"./FSLoader-Cl8hDT8j.js";import"./FSRadio-BXAjRcH_.js";import"./VSelect-tiqwHlQo.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VMenu-en6JpVrG.js";import"./dates-CU5b-tXh.js";import"./useTranslations-CFCS6HA-.js";import"./FSDateTimeRangeField-D8YktCxw.js";import"./FSDialogSubmit-DVh4A4xN.js";import"./FSDialog-BqdRyaJy.js";import"./FSCalendarTwin-CQF9798_.js";import"./useAppLanguageCode-CWFK3Ooe.js";import"./VLocaleProvider-BbWRdjxY.js";import"./date-BmZJDDE_.js";import"./VBtn--7NXzl5z.js";import"./FSClock-5B7_3g5h.js";import"./FSSlider-D_gTL9Q0.js";import"./VSlider-CeqmblEU.js";import"./useAppTimeZone-tx8M1w-h.js";import"./FSNumberField-ck2CaY81.js";import"./FSForm-D4JgF9dF.js";import"./rules-2-0C43Mt.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";const A=Y({name:"FSRangePicker",components:{FSCol:D,FSSpan:j,FSText:ee,FSTermField:le,FSBaseField:oe,FSRangeSlider:re,FSPlayButtons:ae},props:{label:{type:String,required:!1},mode:{type:String,required:!1,default:"single"},modelValue:{type:Object,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:a,expose:S}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:R,epochToDayMonthShortOnly:w,epochToISO:v,epochToMonthShortTimeFormat:F}=ie(),{convert:d}=ne(),{isMobileSized:h,isExtraSmall:y}=de(),{getColors:t}=me(),J=t(O.Light),u=s(!1),V=s(),i=s(d(e.startDate)),r=s(d(e.endDate)),b=k(()=>y.value?3:h.value?4:5),P=k(()=>{const o=r.value-i.value;return o<=864e5*b.value?p.Hours:o<=2592e6*b.value?p.Days:p.Months}),K=k(()=>te({start:i.value,end:r.value,tickCount:b.value,precision:P.value})),$=()=>{i.value=d(e.startDate),r.value=d(e.endDate)},G=o=>{u.value=o},Q=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[i.value,i.value+o])},X=()=>{const o=e.modelValue[1]-e.modelValue[0];a("update:modelValue",[r.value-o,r.value])};return C([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(e.modelValue[0]<i.value||e.modelValue[1]>r.value)&&a("update:modelValue",[i.value,r.value])},{immediate:!0}),C([()=>e.startDate,()=>e.endDate],()=>{$()},{immediate:!0}),C(u,o=>{if(!o&&V.value){clearInterval(V.value);return}V.value=setInterval(()=>{e.modelValue[0]+e.stepTime<=r.value&&e.modelValue[1]+e.stepTime<=r.value?a("update:modelValue",[e.modelValue[0]+e.stepTime,e.modelValue[1]+e.stepTime]):u.value=!1},e.playingStepDuration)}),S({refresh:$}),{ticks:K,playing:u,ColorEnum:O,lightColors:J,endTimestamp:r,TimePrecision:p,tickPrecision:P,startTimestamp:i,epochToISO:v,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:R,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:w,epochToMonthShortTimeFormat:F}}});function ue(e,a,S,q,R,w){const v=m("FSTermField"),F=m("FSText"),d=m("FSRangeSlider"),h=m("FSPlayButtons"),y=m("FSBaseField");return E(),B(y,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:l(()=>[n(T,{align:"bottom-center",gap:"32px"},{default:l(()=>[n(v,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":a[0]||(a[0]=t=>e.$emit("update:startDate",t)),"onUpdate:endDate":a[1]||(a[1]=t=>e.$emit("update:endDate",t))},null,8,["label","startDate","endDate","disabled"]),n(T,{padding:"0 0 2px 0",align:"center-center"},{default:l(()=>[n(D,null,{default:l(()=>[n(d,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackFillColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.$emit("update:modelValue",t))},{"thumb-label":l(({modelValue:t})=>[n(j,{font:"text-overline"},{default:l(()=>[H(W(e.epochToMonthShortTimeFormat(t)),1)]),_:2},1024)]),"tick-label":l(({tick:t})=>[n(T,null,{default:l(()=>[n(F,{color:e.lightColors.dark,font:"text-overline"},{default:l(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(t.value):e.epochToDayMonthShortOnly(t.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","trackFillColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(E(),B(h,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const g=se(A,[["render",ue]]);A.__docgenInfo={displayName:"FSRangePicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"mode",type:{name:"String as () => 'single' | 'range'"},required:!1,defaultValue:{func:!1,value:"'single'"}},{name:"modelValue",type:{name:"Object as () => [number, number]"},required:!0},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRangePicker.vue"]};const st={title:"Foundation/Shared/RangePicker",component:g,tags:["autodocs"],argTypes:{..._(g)}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:[0,0]},render:e=>({components:{FSCol:D,FSRangePicker:g},setup(){return{args:e}},template:`
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
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const ut=["Default","WithRefresh"];export{f as Default,c as WithRefresh,ut as __namedExportsOrder,st as default};
