import{d as U,b,c as G,w as L,z as w,C as o,G as p,H as v,A as N,F as K,P as l,B as C,L as f,Q as $,M as k,N as R,m as z}from"./vue.esm-bundler-CM4TIH-Q.js";import{_ as I}from"./lodash-BrWYvtk2.js";import{F as Q}from"./VList-DEzGjKAB.js";import{F as S}from"./FSTextField-DAhSqlNI.js";import{F as J}from"./FSCalendar-BlCX4nUO.js";import{F as s}from"./FSButton-CnIlx-fc.js";import{F as W}from"./FSCard-CYsPoqay.js";import{F as X}from"./FSMenu-Da0q64tf.js";import{F as d}from"./FSCol-Be93XvPD.js";import{C as T}from"./useColors-CjA2D2xA.js";import{u as Y}from"./useDateFormat-hcE1Scoo.js";import{u as x}from"./useRules-B12Yr5ve.js";import{u as _}from"./useBreakpoints-DsICqL2A.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as re}from"./FSForm-LfcAIV6X.js";import{_ as P}from"./FSRow-C47sfGk6.js";import{u as ae}from"./useAppTimeZone-CP1Ic-gf.js";import{D as le}from"./rules-DnnTrRzM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./index-BJH4L2FX.js";import"./VIcon-GfKFLOEw.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./index-DWgrY6Dg.js";import"./FSBaseField-B4z0jav7.js";import"./FSSpan-BXQyelfo.js";import"./useSlots-c6yg-hhg.js";import"./VField-D97ztcGG.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./loader-CQB_6PPx.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSSelectField-BY8R2J8_.js";import"./FSSlideGroup-DeB5Ds_m.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BMwpXNyX.js";import"./css-D38lF7BW.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-CwbYA91K.js";import"./FSWrapGroup-Fe7qxaBI.js";import"./FSCheckbox-cl9Reorp.js";import"./FSIcon-CIF0zaTI.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-PZiJk41N.js";import"./FSLoader-_1jWS2ee.js";import"./FSRadio-Cpv_pdl7.js";import"./VSelect-D2RjpGxv.js";import"./VMenu-sKuqJ8jm.js";import"./useAppLanguageCode-CN6bsmo6.js";import"./VLocaleProvider-JJ3Zr1Af.js";import"./VBtn-DqO4-7PD.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-a8XmDSU8.js";import"./index-DfSX31J9.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-CLqRehXT.js";import"./time-s3B59H5y.js";const H=U({name:"FSDateField",components:{FSDialogMenu:Q,FSTextField:S,FSCalendar:J,FSButton:s,FSCard:W,FSMenu:X,FSCol:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:T.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongDateFormat:V}=Y(),{validateOn:h,getMessages:q}=x(),{isExtraSmall:D}=_(),t=b(!1),m=b(!1),n=b(e.modelValue),g=G(()=>q(e.modelValue,e.rules)),a=()=>{e.disabled||(t.value=!0)},u=()=>{r("update:modelValue",null),n.value=null},i=()=>{r("update:modelValue",n.value),t.value=!1,m.value=!1};return L(()=>e.modelValue,()=>{I.isEqual(n.value,e.modelValue)||(n.value=e.modelValue)}),{isExtraSmall:D,validateOn:h,ColorEnum:T,innerDate:n,messages:g,dialog:t,menu:m,epochToLongDateFormat:V,openMobileOverlay:a,onSubmit:i,onClear:u}}});function oe(e,r,V,h,q,D){const t=p("FSCalendar"),m=p("FSDialogMenu"),n=p("FSCard"),g=p("FSMenu");return v(),w(d,null,{default:o(()=>[e.isExtraSmall?(v(),N(K,{key:0},[l(S,{class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear,onClick:e.openMobileOverlay},C({"prepend-inner":o(()=>[f(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",disabled:e.$props.disabled,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["disabled","color","onClick"])])]),_:2},[$(e.$slots,(a,u)=>({name:u,fn:o(i=>[f(e.$slots,u,k(R(i)))])}))]),1032,["label","description","color","hideHeader","required","disabled","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue","onClick"]),l(m,{modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=a=>e.dialog=a)},{body:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[0]||(r[0]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1},8,["modelValue"])],64)):(v(),w(g,{key:1,"min-width":"300px",closeOnContentClick:!1,modelValue:e.menu&&!e.$props.disabled,"onUpdate:modelValue":r[3]||(r[3]=a=>e.menu=a)},{activator:o(({props:a})=>[l(S,z({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.epochToLongDateFormat(e.$props.modelValue),"onUpdate:modelValue":e.onClear},a),C({"prepend-inner":o(()=>[f(e.$slots,"prepend-inner",{},()=>[l(s,{variant:"icon",icon:"mdi-calendar",disabled:e.$props.disabled,color:e.ColorEnum.Dark},null,8,["disabled","color"])])]),_:2},[$(e.$slots,(u,i)=>({name:i,fn:o(j=>[f(e.$slots,i,k(R(j)))])}))]),1040,["label","description","color","hideHeader","required","disabled","rules","messages","validateOn","validationValue","modelValue","onUpdate:modelValue"])]),default:o(()=>[l(n,{padding:"8px",elevation:!0,border:!1},{default:o(()=>[l(d,{width:"hug"},{default:o(()=>[l(t,{color:e.$props.color,modelValue:e.innerDate,"onUpdate:modelValue":r[2]||(r[2]=a=>e.innerDate=a)},null,8,["color","modelValue"]),l(s,{width:"100%",color:e.$props.color,label:e.$tr("ui.common.validate","Validate"),onClick:e.onSubmit},null,8,["color","label","onClick"])]),_:1})]),_:1})]),_:3},8,["modelValue"]))]),_:3})}const y=ee(H,[["render",oe]]);H.__docgenInfo={displayName:"FSDateField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateField.vue"]};const Br={title:"Foundation/Shared/Input fields/DateField",component:y,tags:["autodocs"],argTypes:{}},F={args:{args:{setTimeZone:ae().setAppTimeZone,value1:null,value2:17012088e5,value3:17012088e5}},render:(e,{argTypes:r})=>({components:{FSDateField:y,FSButton:s,FSCol:d,FSRow:P},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(O=(B=F.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var Z,E,M;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const Or=["Variations","Rules"];export{c as Rules,F as Variations,Or as __namedExportsOrder,Br as default};
