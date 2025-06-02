import{d as U,b,c as G,w as K,B as w,E as o,I as p,J as v,C as L,F as N,z as l,D as C,O as f,S as $,P as k,Q as R,m as I}from"./vue.esm-bundler-CqZ6aK3I.js";import{_ as z}from"./lodash-BrWYvtk2.js";import{F as J}from"./VList-BdRSj6hM.js";import{F as S}from"./FSTextField-CEJP76Sx.js";import{F as Q}from"./FSCalendar-Cy8Q3hY7.js";import{F as s}from"./FSButton-2OKi08_r.js";import{F as W}from"./FSCard-BH9I8ruU.js";import{F as X}from"./FSMenu-9wehFRGE.js";import{F as d}from"./FSCol-DIPgj7wU.js";import{C as T}from"./useColors-BIkRBR7C.js";import{u as Y}from"./useDateFormat-B0N4tW_S.js";import{u as x}from"./useRules-Cutg_0Yh.js";import{u as _}from"./useBreakpoints-DMrtgY61.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as re}from"./FSForm-ChP82nGG.js";import{_ as P}from"./FSRow-udQVJR1p.js";import{u as ae}from"./useAppTimeZone-CbCPkuif.js";import{D as le}from"./rules-B2dA6v7x.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VDialog-BjO_95QL.js";import"./VOverlay-CrPt6Ctk.js";import"./forwardRefs-DWGaNmQL.js";import"./color-iZFxpsFf.js";import"./theme-CCooKRqg.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-3cG3_dFO.js";import"./index-BHk1SuU0.js";import"./VIcon-ZzEkeSRE.js";import"./ssrBoot-B76fNmmB.js";import"./border-DGybV2oK.js";import"./density-B3EUR5Bv.js";import"./elevation-DCJceMeT.js";import"./rounded-T_eKj2ZY.js";import"./index-BSoBU6Pm.js";import"./VImg-UKGkvK5A.js";import"./index-0XvVa1kA.js";import"./FSBaseField-eUR0iGRU.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./VField-B2nfi808.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./loader-Bh1R7Z2A.js";import"./VProgressCircular-cB7gdjsO.js";import"./resizeObserver-C7qOORSR.js";import"./FSSelectField-BBiyLElX.js";import"./FSSlideGroup-FM6r_xNQ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BR7gWMZw.js";import"./css-BZjDzSZ1.js";import"./VSlideGroupItem-DMC4DYA5.js";import"./group-1sntWZNj.js";import"./FSToggleSet-CzuJHIxU.js";import"./FSWrapGroup-Dpc14vID.js";import"./FSCheckbox-tSiw0lhZ.js";import"./FSIcon-8KcAAKgU.js";import"./VSelectionControl-Dw5vpEc6.js";import"./FSFadeOut-B817LR1t.js";import"./FSLoader-0ho3eZau.js";import"./FSRadio-DU7kdJ5e.js";import"./VSelect-Bvdm_LMp.js";import"./VMenu-B5kDinlh.js";import"./useAppLanguageCode-D1PzUORY.js";import"./VLocaleProvider-DFxugEO9.js";import"./VBtn-3Idlo3fr.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-CBfoSsDs.js";import"./index-DfSX31J9.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-D4m4SVfo.js";import"./time-CwdNr9Ch.js";const j=U({name:"FSDateField",components:{FSDialogMenu:J,FSTextField:S,FSCalendar:Q,FSButton:s,FSCard:W,FSMenu:X,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:T.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:V}=Y(),{validateOn:h,getMessages:q}=x(),{isExtraSmall:D}=_(),t=b(!1),m=b(!1),n=b(e.modelValue),g=G(()=>q(e.modelValue,e.rules)),a=()=>{e.disabled||(t.value=!0)},u=()=>{r("update:modelValue",null),n.value=null},i=()=>{r("update:modelValue",n.value),t.value=!1,m.value=!1};return K(()=>e.modelValue,()=>{z.isEqual(n.value,e.modelValue)||(n.value=e.modelValue)}),{isExtraSmall:D,validateOn:h,ColorEnum:T,innerDate:n,messages:g,dialog:t,menu:m,epochToLongDateFormat:V,openMobileOverlay:a,onSubmit:i,onClear:u}}});function oe(e,r,V,h,q,D){const t=p("FSCalendar"),m=p("FSDialogMenu"),n=p("FSCard"),g=p("FSMenu");return v(),w(d,null,{default:o(()=>[e.isExtraSmall?(v(),L(N,{key:0},[l(S,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},C({"prepend-inner":o(()=>[f(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",disabled:e.$props.disabled,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["disabled","color","onClick"])])]),_:2},[$(e.$slots,(a,u)=>({name:u,fn:o(i=>[f(e.$slots,u,k(R(i)))])}))]),1032,["label","description","color","hideHeader","required","disabled","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),l(m,{modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])],64)):(v(),w(g,{key:1,"min-width":"300px",closeOnContentClick:!1,modelValue:e.menu&&!e.$props.disabled,"onUpdate:modelValue":r[3]||(r[3]=a=>e.menu=a)},{activator:o(({props:a})=>[l(S,I({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},a),C({"prepend-inner":o(()=>[f(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",disabled:e.$props.disabled,color:e.ColorEnum.Dark},null,8,["disabled","color"])])]),_:2},[$(e.$slots,(u,i)=>({name:i,fn:o(H=>[f(e.$slots,i,k(R(H)))])}))]),1040,["label","description","color","hideHeader","required","disabled","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:o(()=>[l(n,{padding:"8px",elevation:!0,border:!1},{default:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"]))]),_:3})}const y=ee(j,[["render",oe]]);j.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const Br={title:"Foundation/Shared/Input fields/DateField",component:y,tags:["autodocs"],argTypes:{}},F={args:{args:{setTimeZone:ae().setAppTimeZone,value1:null,value2:17012088e5,value3:17012088e5}},render:(e,{argTypes:r})=>({components:{FSDateField:y,FSButton:s,FSCol:d,FSRow:P},props:Object.keys(r),setup(){return{...e}},template:`
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
      <FSDateField
        label="Date, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Disabled date, error color, with description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>`})},c={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:le}},render:(e,{argTypes:r})=>({components:{FSForm:re,FSDateField:y,FSCol:d,FSRow:P},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var A,B,O;F.parameters={...F.parameters,docs:{...(A=F.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      value1: null,
      value2: 1701208800000,
      value3: 1701208800000
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateField,
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
      <FSDateField
        label="Date, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Required date, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateField
        label="Disabled date, error color, with description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(O=(B=F.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var E,Z,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      FSDateField,
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
    <FSForm v-model="args.valid" variant="standard">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(M=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};const Or=["Variations","Rules"];export{c as Rules,F as Variations,Or as __namedExportsOrder,Br as default};
