import{d as Y,e as m,c as b,w as k,B as I,D as o,I as d,J as R,q as l,K as H,L as W,H as Z}from"./vue.esm-bundler-D5n7z5qz.js";import{F as g}from"./FSCol-D_lbFmZy.js";import{F as _}from"./FSButton-CZRwWCRJ.js";import{_ as A}from"./FSSpan-BN7wkmby.js";import{F as x}from"./FSText-CJ7Lhzl1.js";import{F as ee}from"./FSSlider-D_gTL9Q0.js";import{F as te,T as p,c as ae}from"./FSPlayButtons-CvhlTsCG.js";import{F as re}from"./FSBaseField-Buivlp1M.js";import{F as oe}from"./FSTermField-CqrOj2Ik.js";import{u as le}from"./useDateFormat-Be4eIA50.js";import{u as ne}from"./useDateExpression-VfhkHpOm.js";import{u as ie}from"./useBreakpoints-CEzKC_o8.js";import{u as se,C as N}from"./useColors-BM_SKUZx.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./theme-Cdiv_FYE.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-BH6GLU3V.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./useSlots-CoecqEnp.js";import"./VSlider-CeqmblEU.js";import"./VSliderTrack-D8v_upRY.js";import"./index-6jMyctoo.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./index-BYo1BiTt.js";import"./rounded-lfTNxM9v.js";import"./VInput-bTNISmSY.js";import"./transition-DbItRNv8.js";import"./density-BnAGl-Nw.js";import"./dimensions-B7sNhH2O.js";import"./VLabel-D-9L6eJP.js";import"./lodash-DyRFk5BS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSSelectField-4I7RHWyb.js";import"./FSDialogMenu-553iq_m_.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./anchor-CPKk15qm.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./VSlideGroup-BxUK8FWF.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSToggleSet-BOI7_zgs.js";import"./FSWrapGroup-DzpSjUDj.js";import"./FSTextField-Cclf6IX8.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./loader-COXi3ZW_.js";import"./index-BKpPdzm5.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./FSFadeOut-C918yX_r.js";import"./FSLoader-Cl8hDT8j.js";import"./FSRadio-BXAjRcH_.js";import"./VSelect-tiqwHlQo.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VMenu-en6JpVrG.js";import"./dates-CU5b-tXh.js";import"./useTranslations-CFCS6HA-.js";import"./FSDateTimeRangeField-D8YktCxw.js";import"./FSDialogSubmit-DVh4A4xN.js";import"./FSDialog-BqdRyaJy.js";import"./FSCalendarTwin-CQF9798_.js";import"./useAppLanguageCode-CWFK3Ooe.js";import"./VLocaleProvider-BbWRdjxY.js";import"./date-BmZJDDE_.js";import"./VBtn--7NXzl5z.js";import"./FSClock-5B7_3g5h.js";import"./useAppTimeZone-tx8M1w-h.js";import"./FSNumberField-ck2CaY81.js";import"./FSForm-D4JgF9dF.js";import"./rules-2-0C43Mt.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";const J=Y({name:"FSInstantPicker",components:{FSCol:g,FSSpan:A,FSText:x,FSSlider:ee,FSTermField:oe,FSBaseField:re,FSPlayButtons:te},props:{label:{type:String,required:!1},modelValue:{type:Number,required:!1},startDate:{type:String,required:!0},endDate:{type:String,required:!0},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},playable:{type:Boolean,required:!1,default:!0},stepTime:{type:Number,required:!1,default:6e4},playingStepDuration:{type:Number,required:!1,default:50},maxWidth:{type:String,required:!1,default:null}},emits:["update:modelValue","update:startDate","update:endDate"],setup(e,{emit:t,expose:D}){const{epochToShortTimeOnlyFormat:q,epochToShortDateFormat:w,epochToDayMonthShortOnly:P,epochToISO:S,epochToMonthShortTimeFormat:F}=le(),{convert:n}=ne(),{isMobileSized:v,isExtraSmall:h}=ie(),{getColors:a}=se(),K=a(N.Light),u=m(!1),y=m(),i=m(n(e.startDate)),r=m(n(e.endDate)),V=b(()=>h.value?3:v.value?4:5),$=b(()=>{const s=r.value-i.value;return s<=864e5*V.value?p.Hours:s<=2592e6*V.value?p.Days:p.Months}),j=b(()=>ae({start:i.value,end:r.value,tickCount:V.value,precision:$.value})),B=()=>{i.value=n(e.startDate),r.value=n(e.endDate)},G=s=>{u.value=s},Q=()=>{t("update:modelValue",i.value)},X=()=>{t("update:modelValue",r.value)};return k([()=>e.startDate,()=>e.endDate,()=>e.modelValue],()=>{(!e.modelValue||e.modelValue<i.value||e.modelValue>r.value)&&t("update:modelValue",r.value)},{immediate:!0}),k([()=>e.startDate,()=>e.endDate],()=>{B()},{immediate:!0}),k(u,s=>{!s&&y.value?clearInterval(y.value):y.value=setInterval(()=>{e.modelValue&&e.modelValue+e.stepTime<=r.value?t("update:modelValue",e.modelValue+e.stepTime):(t("update:modelValue",r.value),u.value=!1)},e.playingStepDuration)}),D({refresh:B}),{ticks:j,playing:u,ColorEnum:N,lightColors:K,endTimestamp:r,TimePrecision:p,tickPrecision:$,startTimestamp:i,epochToISO:S,onPlayingChange:G,onClickForward:X,onClickBackward:Q,epochToShortDateFormat:w,epochToShortTimeOnlyFormat:q,epochToDayMonthShortOnly:P,epochToMonthShortTimeFormat:F}}});function me(e,t,D,q,w,P){const S=d("FSTermField"),F=d("FSText"),n=d("FSSlider"),v=d("FSPlayButtons"),h=d("FSBaseField");return R(),I(h,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,maxWidth:e.$props.maxWidth},{default:o(()=>[l(C,{align:"bottom-center",gap:"32px"},{default:o(()=>[l(S,{width:"430px",label:e.$tr("ui.instant-picker.analyze-period","Analyze Period"),startDate:e.$props.startDate,endDate:e.$props.endDate,disabled:e.$props.disabled,"onUpdate:startDate":t[0]||(t[0]=a=>e.$emit("update:startDate",a)),"onUpdate:endDate":t[1]||(t[1]=a=>e.$emit("update:endDate",a))},null,8,["label","startDate","endDate","disabled"]),l(C,{padding:"0 0 2px 0",align:"center-center"},{default:o(()=>[l(g,null,{default:o(()=>[l(n,{minWidth:"min(300px, 90vw)",disabled:e.$props.disabled,color:e.ColorEnum.Light,thumbColor:e.ColorEnum.Primary,trackSize:8,"thumb-label":"always",step:e.$props.stepTime,min:e.startTimestamp,max:e.endTimestamp,hideHeader:!0,maxWidth:null,ticks:e.ticks,showTicks:"always",modelValue:e.$props.modelValue,"onUpdate:modelValue":t[2]||(t[2]=a=>e.$emit("update:modelValue",a))},{"thumb-label":o(({modelValue:a})=>[l(A,{font:"text-overline"},{default:o(()=>[H(W(e.epochToMonthShortTimeFormat(a)),1)]),_:2},1024)]),"tick-label":o(({tick:a})=>[l(C,null,{default:o(()=>[l(F,{color:e.lightColors.dark,font:"text-overline"},{default:o(()=>[H(W(e.tickPrecision===e.TimePrecision.Hours?e.epochToShortTimeOnlyFormat(a.value):e.epochToDayMonthShortOnly(a.value)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:1},8,["disabled","color","thumbColor","step","min","max","ticks","modelValue"])]),_:1}),e.$props.playable?(R(),I(v,{key:0,disabled:e.$props.disabled,modelValue:e.playing,"onClick:backward":e.onClickBackward,"onClick:forward":e.onClickForward,"onUpdate:modelValue":e.onPlayingChange},null,8,["disabled","modelValue","onClick:backward","onClick:forward","onUpdate:modelValue"])):Z("",!0)]),_:1})]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","maxWidth"])}const T=de(J,[["render",me]]);J.__docgenInfo={displayName:"FSInstantPicker",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"number"},required:!1},{name:"startDate",type:{name:"string"},required:!0},{name:"endDate",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"playable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"stepTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60000"}},{name:"playingStepDuration",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"50"}},{name:"maxWidth",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:startDate"},{name:"update:endDate"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSInstantPicker.vue"]};const ia={title:"Foundation/Shared/InstantPicker",component:T,tags:["autodocs"],argTypes:{"onUpdate:startDate":{action:"update:startDate"},"onUpdate:endDate":{action:"update:endDate"},"onUpdate:modelValue":{action:"update:modelValue"}}},f={args:{startDate:"now - 3d",endDate:"now",modelValue:0},render:e=>({components:{FSCol:g,FSInstantPicker:T},setup(){return{args:e}},template:`
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
    `})},c={args:{startDate:"now - 3d",endDate:"now",modelValue:0},render:e=>({components:{FSCol:g,FSInstantPicker:T,FSButton:_},setup(){const t=m(null);return{args:e,pickerRef:t,refresh:()=>{t.value&&t.value.refresh()}}},template:`
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
    `})};var U,E,M;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(E=f.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,z,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const sa=["Default","WithRefresh"];export{f as Default,c as WithRefresh,sa as __namedExportsOrder,ia as default};
