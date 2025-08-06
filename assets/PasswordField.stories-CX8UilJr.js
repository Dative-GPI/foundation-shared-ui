import{d as R,b as k,c as n,B as x,D as V,S as $,E as g,m as T,J as D,O as F,P as O,Q as B,k as j}from"./vue.esm-bundler-CocPPKUI.js";import{F as h}from"./FSTextField-CdmKROte.js";import{F as P}from"./FSButton-B9T3D7JL.js";import{u as E,C as p}from"./useColors-C1aD-Kb6.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSForm-BptLXx1c.js";import{F as q}from"./FSCol-79-COv64.js";import{_ as G}from"./FSRow-BvJ7lU5E.js";import{a as H}from"./rules-B-1MsapQ.js";import"./FSBaseField-Cn3A38Ti.js";import"./FSSpan-CKhKq6E1.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./useRules-C3-AmzzE.js";import"./VField-C42QHTgn.js";import"./index-hd-xIizf.js";import"./color-D50-hVV_.js";import"./theme-C1Gcptw7.js";import"./transition-bMLtH-b3.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./locale-_fONYh-8.js";import"./VIcon-ZjKwFcqe.js";import"./density-2KuMGYl6.js";import"./dimensions-Cv9Fwl7U.js";import"./proxiedModel-DW1FRKBO.js";import"./loader-BDqRCawj.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./anchor-D4EnoweD.js";import"./rounded-CBYChxif.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-5LM_ZUPq.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./css-mt76hoAn.js";import"./FSIcon-BGuuL0jz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-DjiI-HV9.js";import"./useTranslations-DJaIYmO0.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";const C=R({name:"FSPasswordField",components:{FSTextField:h,FSButton:P},props:{modelValue:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{getColors:r}=E(),i=r(p.Light),d=r(p.Dark),s=k(!0),m=n(()=>e.disabled?{"--fs-password-field-cursor":"default","--fs-password-field-color":i.dark,"--fs-password-field-hover-color":i.dark}:{"--fs-password-field-cursor":"pointer","--fs-password-field-color":d.base,"--fs-password-field-hover-color":d.dark}),o=n(()=>s.value?"password":"text"),a=n(()=>s.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:p,type:o,icon:a,style:m,onToggle:()=>{e.disabled||(s.value=!s.value)}}}});function I(e,r,i,d,s,m){return D(),x(h,T({type:e.type,disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),V({"append-inner":g(()=>[j(P,{variant:"icon",disabled:e.$props.disabled,color:e.ColorEnum.Dark,icon:e.icon,onClick:e.onToggle},null,8,["disabled","color","icon","onClick"]),F(e.$slots,"append-inner")]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:g(c=>[F(e.$slots,a,O(B(c)))])}))]),1040,["type","disabled","modelValue"])}const u=_(C,[["render",I]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPasswordField.vue"]};const Ge={title:"Foundation/Shared/Input fields/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:u,FSCol:q},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:H}},render:(e,{argTypes:r})=>({components:{FSForm:N,FSPasswordField:u,FSCol:q,FSRow:G},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const He=["Variations","Rules"];export{l as Rules,t as Variations,He as __namedExportsOrder,Ge as default};
