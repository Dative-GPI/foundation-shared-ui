import{d as E,b,c as v,w as O,C as P,k as n,D as j,S as H,E as m,m as G,F as K,I as S,J as U,O as y,P as I,Q as N}from"./vue.esm-bundler-PONd4AmC.js";import{_ as z}from"./lodash-Zo30T2Bj.js";import{F as J}from"./FSDialogSubmit-BPHhd3-P.js";import{F as L}from"./FSCalendarTwin-ONwWZT4N.js";import{F as k}from"./FSTextField-D-U5ryYn.js";import{F as p}from"./FSButton-CZKySWW0.js";import{C as R}from"./useColors-Dytl_X2F.js";import{u as M}from"./useRules-CT5DWk6c.js";import{u as Q}from"./useDateFormat-BhCCrheZ.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as X}from"./FSForm-CLe5Lp0x.js";import{F as A}from"./FSCol-Bfhiyt6Y.js";import{_ as T}from"./FSRow-C-b-hpWa.js";import{u as Y}from"./useAppTimeZone-BXRoybOo.js";import{D as x}from"./rules-DRXW83Bb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSFadeOut-CtUd8oOA.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-RTs-XAJF.js";import"./css-BeoQuAfr.js";import"./FSDialog-Iu1wYtKv.js";import"./FSCard-DYD9Tm3w.js";import"./FSText-C7hkL3As.js";import"./useSlots-nyIcwo6G.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./color-_AiH45em.js";import"./theme-CTzRPxOi.js";import"./proxiedModel-vOB1Q9Gh.js";import"./anchor-D2WyvgD_.js";import"./dimensions-CNbPgA3L.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./locale-CoLhg8Wl.js";import"./router-6tzIEQS-.js";import"./transition-BXZIGKil.js";import"./VDefaultsProvider-BsWh58B_.js";import"./useTranslations-_Q1DYra_.js";import"./FSSelectField-Bqm7POVY.js";import"./FSDialogMenu-Czm1Jubp.js";import"./FSSlideGroup-CGqp6f7y.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./index-CANKuvlL.js";import"./VIcon-DIMW80nW.js";import"./resizeObserver-UZYihl4g.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./VInput-ClaXJMCA.js";import"./density-CNNumQ_A.js";import"./FSBaseField-DMW1nZy-.js";import"./FSSpan-DxKJLsSl.js";import"./FSCheckbox-CQphVYdu.js";import"./FSIcon-bsX1r_Ci.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./VLabel-5AeJpfXJ.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./rounded-BBFi0CuG.js";import"./VImg-DKyIpwU2.js";import"./index-Bb4mSIJO.js";import"./VMenu-D11N5TPJ.js";import"./useAppLanguageCode-fPbUdbod.js";import"./VLocaleProvider-BW20Lu4A.js";import"./VBtn-PodE2DV2.js";import"./loader-DGoLn0VY.js";import"./VProgressCircular-CDK6zSYw.js";import"./VField-So_guaQm.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./index-_Z9wfsFC.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-Cavyfpwa.js";const B=E({name:"FSDateRangeField",components:{FSDialogSubmit:J,FSCalendarTwin:L,FSTextField:k,FSButton:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:R.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,getMessages:f}=M(),{epochToShortDateFormat:F}=Q(),l=b(!1),a=b(e.modelValue),d=v(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(Z=>F(Z)).join(" - ")),o=v(()=>f(e.modelValue,e.rules,!0)),t=()=>{e.disabled||(l.value=!0)},u=()=>{r("update:modelValue",null),a.value=null},$=()=>{r("update:modelValue",a.value),l.value=!1};return O(()=>e.modelValue,()=>{z.isEqual(a.value,e.modelValue)||(a.value=e.modelValue)}),{toShortDateFormat:d,innerDateRange:a,validateOn:c,ColorEnum:R,messages:o,dialog:l,onClick:t,onClear:u,onSubmit:$}}});function _(e,r,c,f,F,l){const a=S("FSCalendarTwin"),d=S("FSDialogSubmit");return U(),P(K,null,[n(k,G({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},e.$attrs),j({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[n(p,{variant:"icon",icon:"mdi-calendar",disabled:e.$props.disabled,color:e.ColorEnum.Dark},null,8,["disabled","color"])])]),_:2},[H(e.$slots,(o,t)=>({name:t,fn:m(u=>[y(e.$slots,t,I(N(u)))])}))]),1040,["label","description","color","hideHeader","required","disabled","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),n(d,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=o=>e.dialog=o)},{body:m(()=>[n(a,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerDateRange=o)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const g=W(B,[["render",_]]);B.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const Br={title:"Foundation/Shared/Input fields/DateRangeField",component:g,tags:["autodocs"],argTypes:{}},i={args:{args:{setTimeZone:Y().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:g,FSButton:p,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Disabled date range, error color, with description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>`})},s={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:x}},render:(e,{argTypes:r})=>({components:{FSForm:X,FSDateRangeField:g,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var h,q,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateRangeField,
      FSButton,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Disabled date range, error color, with description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(D=(q=i.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var V,w,C;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateRangeField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const $r=["Variations","Rules"];export{s as Rules,i as Variations,$r as __namedExportsOrder,Br as default};
