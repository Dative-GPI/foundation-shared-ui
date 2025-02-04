import{d as E,b,c as v,w as O,B as j,R as n,C as P,S as U,D as m,l as H,G,H as S,I as K,L as y,N,O as I}from"./vue.esm-bundler-NAfsqApI.js";import{_ as L}from"./lodash-BrWYvtk2.js";import{F as z}from"./FSDialogSubmit-7JBSBOYG.js";import{F as M}from"./FSCalendarTwin-DnLdvE-9.js";import{F as k}from"./FSTextField-Dzov9hcU.js";import{F as p}from"./FSButton-CnXo3fLV.js";import{C as R}from"./useColors-CWqJhoVw.js";import{u as J}from"./useRules-pqUeO9kt.js";import{u as Q}from"./useDateFormat-Ci8JB6DS.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as X}from"./FSForm-C3WOsd9u.js";import{F as A}from"./FSCol-CPY6S-Xd.js";import{_ as T}from"./FSRow-GjwhmX1p.js";import{u as Y}from"./useAppTimeZone-UiqNElH2.js";import{D as x}from"./rules-DXGz8S5V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSFadeOut-D3iDD7Hj.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BwxwzcAl.js";import"./css-DBDqGZ-V.js";import"./FSDialog-XxGvYAKF.js";import"./FSCard-DOESxZy8.js";import"./FSText-Bp70TDSF.js";import"./useSlots-S0O9Daut.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BvydW9AS.js";import"./theme-F_JAsCzs.js";import"./proxiedModel-sn-eI_a5.js";import"./anchor-DvtYZGyi.js";import"./dimensions-IFPI4Yq9.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./locale-CAPEya44.js";import"./router-0GC4RTMW.js";import"./transition-L7INWkz2.js";import"./VDefaultsProvider-BngNLuXK.js";import"./useTranslations-CxiknF7e.js";import"./FSSelectField-BvYV5EfQ.js";import"./VList-Cf1cUG92.js";import"./index-Dne_26Gx.js";import"./VIcon-PiNvAqE-.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./density-BGeA8UH8.js";import"./elevation-B-XsQHpK.js";import"./rounded-DwVJT96z.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./index-DINlpRuJ.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./resizeObserver-CLnVcpcq.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./VInput-B5HH3Lye.js";import"./form-DTsyvZhj.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./FSCheckbox-CZADXYvb.js";import"./FSIcon-Dq2bxLH5.js";import"./VSelectionControl-CV2pv1R-.js";import"./VLabel-BDFzMscP.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./useAppLanguageCode-DW7Tteig.js";import"./VLocaleProvider-COnZoa7i.js";import"./VBtn-DqFLTMVy.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./VField-KOKiCRZA.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./index-DfSX31J9.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-Bbs-Eu8-.js";const B=E({name:"FSDateRangeField",components:{FSDialogSubmit:z,FSCalendarTwin:M,FSTextField:k,FSButton:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:R.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,getMessages:f}=J(),{epochToShortDateFormat:F}=Q(),l=b(!1),a=b(e.modelValue),d=v(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(Z=>F(Z)).join(" - ")),o=v(()=>f(e.modelValue,e.rules,!0)),t=()=>{e.editable&&(l.value=!0)},u=()=>{r("update:modelValue",null),a.value=null},$=()=>{r("update:modelValue",a.value),l.value=!1};return O(()=>e.modelValue,()=>{L.isEqual(a.value,e.modelValue)||(a.value=e.modelValue)}),{toShortDateFormat:d,innerDateRange:a,validateOn:c,ColorEnum:R,messages:o,dialog:l,onClick:t,onClear:u,onSubmit:$}}});function _(e,r,c,f,F,l){const a=S("FSCalendarTwin"),d=S("FSDialogSubmit");return K(),j(G,null,[n(k,H({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},e.$attrs),P({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[n(p,{variant:"icon",icon:"mdi-calendar",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[U(e.$slots,(o,t)=>({name:t,fn:m(u=>[y(e.$slots,t,N(I(u)))])}))]),1040,["label","description","color","hideHeader","required","editable","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),n(d,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=o=>e.dialog=o)},{body:m(()=>[n(a,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerDateRange=o)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const g=W(B,[["render",_]]);B.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const Tr={title:"Foundation/Shared/Input fields/DateRangeField",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{setTimeZone:Y().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:g,FSButton:p,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
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
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
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
    </FSForm>`})};var h,q,V;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        label="Uneditable date range, error color, with description"
        description="Uneditable description"
        color="error"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(V=(q=i.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var w,D,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const Br=["Variations","Rules"];export{s as Rules,i as Variations,Br as __namedExportsOrder,Tr as default};
