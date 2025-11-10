import{d as E,b,c as v,w as O,C as P,k as n,D as j,S as H,E as m,m as G,F as K,I as S,J as U,O as y,P as I,Q as N}from"./vue.esm-bundler-CC_jVOJ5.js";import{_ as z}from"./lodash-Zo30T2Bj.js";import{F as J}from"./FSDialogSubmit-DLaEkr55.js";import{F as L}from"./FSCalendarTwin-BNcSWnfZ.js";import{F as k}from"./FSTextField-CTUDqfDL.js";import{F as p}from"./FSButton-Czf3beC8.js";import{C as R}from"./useColors-BXuuHMxE.js";import{u as M}from"./useRules-Da0JLBaA.js";import{u as Q}from"./useDateFormat-DHrriBQY.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as X}from"./FSForm-CSz_UbV2.js";import{F as A}from"./FSCol-DVEaUPKl.js";import{_ as T}from"./FSRow-CjY3icuR.js";import{u as Y}from"./useAppTimeZone-Bddnv5KM.js";import{D as x}from"./rules-BUSk3wMq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSFadeOut-DU3Ke7qi.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BMcJFLA8.js";import"./css-DTGEi_Ca.js";import"./FSDialog-CS4QDqZQ.js";import"./FSCard-twwkVLSp.js";import"./FSText-B2RNQvtL.js";import"./useSlots-C8jkAuOW.js";import"./VDialog-fWvZSkPk.js";import"./VOverlay-DXMNyzvF.js";import"./easing-DY7PVvcf.js";import"./color-BM2dSUAO.js";import"./theme-Bp81IclV.js";import"./proxiedModel-Nw0LX-ta.js";import"./anchor-S0Fc85Gi.js";import"./dimensions-TKp8HHzB.js";import"./display-CpM-3U3n.js";import"./lazy-BrZUVd24.js";import"./locale-K9DBMW2q.js";import"./router-kuDvkEMM.js";import"./scopeId-BJNiFHH-.js";import"./transition-Ucf2Ovas.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CuIagDb9.js";import"./useTranslations-5XSl7qXA.js";import"./FSSelectField-CN0uswF4.js";import"./FSDialogMenu-CWcRHPoR.js";import"./FSSlideGroup-nu8Cr66q.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./VSlideGroup-DVr5PPvN.js";import"./index-Dylhq_Dl.js";import"./group-CxQl3dDS.js";import"./VIcon-BOLLMMm0.js";import"./resizeObserver-BZ0AJw4z.js";import"./VSlideGroupItem-Bl-P3Ech.js";import"./FSToggleSet-CEKaVblF.js";import"./FSWrapGroup-Cr3q9yBs.js";import"./VInput-0C1kQySn.js";import"./density-mssFUWH2.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./FSCheckbox-D-xuSzdC.js";import"./FSIcon-CeLDRxMK.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./FSRadio-QZhD_0uB.js";import"./VSelect-rJC_8mRT.js";import"./VList-C5ZFMMa0.js";import"./ssrBoot-CyKRGZ4o.js";import"./border-BnR_N-bS.js";import"./rounded-Cy4gG01O.js";import"./VImg-BmPSKt86.js";import"./index-B48vLg-P.js";import"./VMenu-DWktgpYO.js";import"./useAppLanguageCode-DwRThLpm.js";import"./VLocaleProvider-Dw-Dn45Q.js";import"./VBtn-BXSaXTUb.js";import"./loader-CbVzlK-r.js";import"./VProgressCircular-B7HKciov.js";import"./VField-CnDxsm3U.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./index-_Z9wfsFC.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-CEDjUrWj.js";import"./times-CqUFey1a.js";const B=E({name:"FSDateRangeField",components:{FSDialogSubmit:J,FSCalendarTwin:L,FSTextField:k,FSButton:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:R.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,getMessages:f}=M(),{epochToShortDateFormat:F}=Q(),l=b(!1),a=b(e.modelValue),d=v(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(Z=>F(Z)).join(" - ")),o=v(()=>f(e.modelValue,e.rules,!0)),t=()=>{e.disabled||(l.value=!0)},u=()=>{r("update:modelValue",null),a.value=null},$=()=>{r("update:modelValue",a.value),l.value=!1};return O(()=>e.modelValue,()=>{z.isEqual(a.value,e.modelValue)||(a.value=e.modelValue)}),{toShortDateFormat:d,innerDateRange:a,validateOn:c,ColorEnum:R,messages:o,dialog:l,onClick:t,onClear:u,onSubmit:$}}});function _(e,r,c,f,F,l){const a=S("FSCalendarTwin"),d=S("FSDialogSubmit");return U(),P(K,null,[n(k,G({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},e.$attrs),j({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[n(p,{variant:"icon",icon:"mdi-calendar",disabled:e.$props.disabled,color:e.ColorEnum.Dark},null,8,["disabled","color"])])]),_:2},[H(e.$slots,(o,t)=>({name:t,fn:m(u=>[y(e.$slots,t,I(N(u)))])}))]),1040,["label","description","color","hideHeader","required","disabled","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),n(d,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=o=>e.dialog=o)},{body:m(()=>[n(a,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerDateRange=o)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const g=W(B,[["render",_]]);B.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const Or={title:"Foundation/Shared/Input fields/DateRangeField",component:g,tags:["autodocs"],argTypes:{}},i={args:{args:{setTimeZone:Y().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:g,FSButton:p,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const Pr=["Variations","Rules"];export{s as Rules,i as Variations,Pr as __namedExportsOrder,Or as default};
