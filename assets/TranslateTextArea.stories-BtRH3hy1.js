import{d as H,e as w,c as K,w as z,G as V,q as n,C as J,U as C,D as l,m as Q,F as q,I as A,J as F,P as $,Q as W,R as M,B as X,W as Y,K as R,L as x}from"./vue.esm-bundler-B9lxvfDw.js";import{F as Z}from"./FSDialogSubmit-B0ne1ir2.js";import{F as _}from"./FSTextArea-Cz-5eRaQ.js";import{F as L}from"./FSButton-CxA5c6KR.js";import{F as G}from"./FSIcon-kCffLiJ2.js";import{_ as O}from"./FSSpan-COYXSDbp.js";import{_ as y}from"./FSRow-CFa9RNor.js";import{C as m,u as ee}from"./useColors-B5aYgogF.js";import{u as ae}from"./useAppLanguages-O3aOvHx8.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./FSCol-BwxAijHz.js";import{F as re}from"./FSForm-C7RHfymi.js";import{a as ne}from"./rules-BJlQ9sVg.js";import"./FSFadeOut-DwiC6ECo.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-Dc84uxeD.js";import"./css-BHrR5cp2.js";import"./FSDialog-DB3qC7bV.js";import"./FSCard-BwbWypiX.js";import"./FSText-DZJhh1AD.js";import"./useSlots-BioZKQqg.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./easing-DY7PVvcf.js";import"./useRender-DM2jvMPN.js";import"./theme-Bz5xEpqh.js";import"./proxiedModel-DRvKxps3.js";import"./anchor-ByUPiJZt.js";import"./color-CLtf7Qrc.js";import"./dimensions-n1mPaUbN.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./locale-C647X9dJ.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./transition-Dh_EAQcC.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BurwYF19.js";import"./useTranslations-AmWs0SAL.js";import"./FSBaseField-CSo0Z4y4.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./index-7AXDWkBX.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./density-DvMOIaQw.js";import"./loader-CaGstafT.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./rounded-BrvRf1BO.js";import"./index-Dli51uy9.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./time-BAnUzhMU.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-DB9Xcy26.js";import"./useAppTimeZone-yr9jXsW5.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CT4VqPAG.js";const U=H({name:"FSTranslateTextArea",components:{FSDialogSubmit:Z,FSTextArea:_,FSButton:L,FSIcon:G,FSSpan:O,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:h}=ae(),{getColors:v}=ee(),b=w(!1),r=w(e.translations),d=v(m.Light),S=v(m.Dark),t=K(()=>e.disabled?{"--fs-translate-field-color":d.dark}:{"--fs-translate-field-color":S.base}),i=o=>{if(!r.value)return"";const s=r.value.find(p=>p.languageCode===o);return!s||!s[e.property]?"":s[e.property]??""},u=(o,s)=>{if(!r.value){r.value=[{languageCode:o,[e.property]:s}];return}const p=r.value.find(N=>N.languageCode===o);p?p[e.property]=s:r.value.push({languageCode:o,[e.property]:s})},E=()=>{b.value=!1,e.disabled||a("update:translations",r.value)};return z(()=>e.translations,o=>{r.value=o},{immediate:!0,deep:!0}),{innerTranslations:r,ColorEnum:m,languages:h,dialog:b,style:t,getTranslation:i,setTranslation:u,onSubmit:E}}});function le(e,a,h,v,b,r){const d=A("FSTextArea"),S=A("FSDialogSubmit");return F(),V(q,null,[n(d,Q({disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),J({append:l(()=>[n(L,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:a[0]||(a[0]=t=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[C(e.$slots,(t,i)=>({name:i,fn:l(u=>[$(e.$slots,i,W(M(u)))])}))]),1040,["disabled","modelValue"]),n(S,{title:e.$tr("translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[2]||(a[2]=t=>e.dialog=t)},{body:l(()=>[n(c,{gap:"32px"},{default:l(()=>[n(d,{label:e.$tr("ui.common.default-value","Default value"),disabled:!0,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(c,{gap:"20px"},{default:l(()=>[(F(!0),V(q,null,C(e.languages,(t,i)=>(F(),X(d,{disabled:e.$props.disabled,key:i,modelValue:e.getTranslation(t.code),rows:e.$attrs.rows,"onUpdate:modelValue":u=>e.setTranslation(t.code,u)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(O,{font:"text-overline",style:Y(e.style)},{default:l(()=>[R(x(e.$tr("translate-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1032,["style"]),n(G,null,{default:l(()=>[R(x(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["disabled","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=te(U,[["render",le]]);U.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"Translation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const ba={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:a})=>({components:{FSTranslateTextArea:T,FSCol:c},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateTextArea
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
        :rows="4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        :autoGrow="false"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Disabled translation, with description"
        description="description"
        :disabled="true"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},g={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:ne}},render:(e,{argTypes:a})=>({components:{FSForm:re,FSTranslateTextArea:T,FSCol:c,FSRow:y},props:Object.keys(a),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var k,I,B;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      translations1: null,
      value2: "Hello there",
      translations2: [{
        languageCode: "fr-FR",
        label: "Bonjour ici"
      }],
      value3: "General Kenobi",
      translations3: []
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateTextArea,
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
      <FSTranslateTextArea
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
        :rows="4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        :autoGrow="false"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Disabled translation, with description"
        description="description"
        :disabled="true"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(B=(I=f.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var D,P,j;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      translations1: null,
      value2: "",
      translations2: null,
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTranslateTextArea,
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
        <FSTranslateTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const Sa=["Variations","Rules"];export{g as Rules,f as Variations,Sa as __namedExportsOrder,ba as default};
