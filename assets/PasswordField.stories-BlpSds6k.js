import{d as R,b as k,c as n,z as x,B as V,Q as $,C as g,m as T,H as D,L as F,M as B,N as O,P as j}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as h}from"./FSTextField-DAhSqlNI.js";import{F as P}from"./FSButton-CnIlx-fc.js";import{u as N,C as p}from"./useColors-CjA2D2xA.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E}from"./FSForm-LfcAIV6X.js";import{F as q}from"./FSCol-Be93XvPD.js";import{_ as H}from"./FSRow-C47sfGk6.js";import{a as L}from"./rules-DnnTrRzM.js";import"./FSBaseField-B4z0jav7.js";import"./FSSpan-BXQyelfo.js";import"./useBreakpoints-DsICqL2A.js";import"./useSlots-c6yg-hhg.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./index-BJH4L2FX.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./transition-DMoMR0kB.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./VIcon-GfKFLOEw.js";import"./density-Dl4v3sM7.js";import"./dimensions-DW-k5kP_.js";import"./proxiedModel-DKx29MO-.js";import"./loader-CQB_6PPx.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./anchor-DCFmATqq.js";import"./rounded-CDCr0BOq.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DWgrY6Dg.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-a8XmDSU8.js";import"./FSCard-CYsPoqay.js";import"./css-D38lF7BW.js";import"./FSIcon-CIF0zaTI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-s3B59H5y.js";import"./useTranslations-CLqRehXT.js";import"./useDateFormat-hcE1Scoo.js";import"./useAppTimeZone-CP1Ic-gf.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CN6bsmo6.js";const C=R({name:"FSPasswordField",components:{FSTextField:h,FSButton:P},props:{modelValue:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{getColors:r}=N(),i=r(p.Light),d=r(p.Dark),s=k(!0),m=n(()=>e.disabled?{"--fs-password-field-cursor":"default","--fs-password-field-color":i.dark,"--fs-password-field-hover-color":i.dark}:{"--fs-password-field-cursor":"pointer","--fs-password-field-color":d.base,"--fs-password-field-hover-color":d.dark}),o=n(()=>s.value?"password":"text"),a=n(()=>s.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:p,type:o,icon:a,style:m,onToggle:()=>{e.disabled||(s.value=!s.value)}}}});function z(e,r,i,d,s,m){return D(),x(h,T({type:e.type,disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),V({"append-inner":g(()=>[j(P,{variant:"icon",disabled:e.$props.disabled,color:e.ColorEnum.Dark,icon:e.icon,onClick:e.onToggle},null,8,["disabled","color","icon","onClick"]),F(e.$slots,"append-inner")]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:g(c=>[F(e.$slots,a,B(O(c)))])}))]),1040,["type","disabled","modelValue"])}const u=_(C,[["render",z]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPasswordField.vue"]};const Ee={title:"Foundation/Shared/Input fields/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:u,FSCol:q},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:L}},render:(e,{argTypes:r})=>({components:{FSForm:E,FSPasswordField:u,FSCol:q,FSRow:H},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const He=["Variations","Rules"];export{l as Rules,t as Variations,He as __namedExportsOrder,Ee as default};
