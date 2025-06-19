import{d as R,b as k,c as n,B as x,D as V,S as $,E as g,m as T,J as D,O as F,P as O,Q as B,z as j}from"./vue.esm-bundler-BB--BfRN.js";import{F as h}from"./FSTextField-DmCfYujO.js";import{F as P}from"./FSButton-DEqhqb0b.js";import{u as E,C as p}from"./useColors-CeWNZtds.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSForm-Ci9drIy4.js";import{F as q}from"./FSCol-BU2zndN-.js";import{_ as z}from"./FSRow-Bdc52rY8.js";import{a as G}from"./rules-BTu8BudJ.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./useBreakpoints-f5uwzDhq.js";import"./useSlots-COLyvmal.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./index-9ysw5oGg.js";import"./color-DIvEt_AX.js";import"./theme-BwQCEo_4.js";import"./transition-GJJG9yri.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./locale-CSWC84Vq.js";import"./VIcon-Cl87HT90.js";import"./density-Xpr_P7nk.js";import"./dimensions-DwY9cRwZ.js";import"./proxiedModel-DMSSa4ZW.js";import"./loader-BKsf8Js6.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./anchor-C8ooBn8e.js";import"./rounded-BKWlZxOJ.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./forwardRefs-DWGaNmQL.js";import"./index--Ye8kcMr.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./css-DoweNwVf.js";import"./FSIcon-BKav6CVU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DawHGwfT.js";import"./useTranslations-DvAhn7XV.js";import"./useDateFormat-CLF81prI.js";import"./useAppTimeZone-Yy6tN57G.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DVn301Ra.js";const C=R({name:"FSPasswordField",components:{FSTextField:h,FSButton:P},props:{modelValue:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{getColors:r}=E(),i=r(p.Light),d=r(p.Dark),s=k(!0),m=n(()=>e.disabled?{"--fs-password-field-cursor":"default","--fs-password-field-color":i.dark,"--fs-password-field-hover-color":i.dark}:{"--fs-password-field-cursor":"pointer","--fs-password-field-color":d.base,"--fs-password-field-hover-color":d.dark}),o=n(()=>s.value?"password":"text"),a=n(()=>s.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:p,type:o,icon:a,style:m,onToggle:()=>{e.disabled||(s.value=!s.value)}}}});function H(e,r,i,d,s,m){return D(),x(h,T({type:e.type,disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),V({"append-inner":g(()=>[j(P,{variant:"icon",disabled:e.$props.disabled,color:e.ColorEnum.Dark,icon:e.icon,onClick:e.onToggle},null,8,["disabled","color","icon","onClick"]),F(e.$slots,"append-inner")]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:g(c=>[F(e.$slots,a,O(B(c)))])}))]),1040,["type","disabled","modelValue"])}const u=_(C,[["render",H]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPasswordField.vue"]};const Ne={title:"Foundation/Shared/Input fields/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:u,FSCol:q},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSPasswordField
        label="Password"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Required password, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Disabled password, with description"
        description="Disabled description"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:G}},render:(e,{argTypes:r})=>({components:{FSForm:N,FSPasswordField:u,FSCol:q,FSRow:z},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var v,f,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSPasswordField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSPasswordField
        label="Password"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Required password, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Disabled password, with description"
        description="Disabled description"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,S,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSPasswordField,
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
        <FSPasswordField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const ze=["Variations","Rules"];export{l as Rules,t as Variations,ze as __namedExportsOrder,Ne as default};
