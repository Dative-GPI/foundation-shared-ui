import{r as U,V,g as z,aa as K,l as w,p as n,m as W,W as C,ac as l,B as X,F as q,Y as A,P as F,X as $,G as Y,u as J,j as M,H as Q,o as R,a1 as x}from"./vue.esm-bundler-DR0_aU9U.js";import{F as Z}from"./FSDialogSubmit-DXuR5l8T.js";import{F as _}from"./FSTextArea-DgcHTtMC.js";import{F as G}from"./FSButton-CX1uVweX.js";import{F as L}from"./FSIcon-CBwOL1p5.js";import{_ as O}from"./FSSpan-9E7WYB2n.js";import{_ as y}from"./FSRow-C8VtPvPz.js";import{a as m,u as ee}from"./useColors-CvhpHTRO.js";import{u as ae}from"./useAppLanguages-IVHynbOe.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./FSCol-B2uM4vFw.js";import{F as re}from"./FSForm-kBy3Krb7.js";import{a as ne}from"./rules-tbTkbybW.js";import"./FSFadeOut-DENuqwmT.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DhvOJkKp.js";import"./css-B9c0ZZC5.js";import"./FSDialog-BThV5-rh.js";import"./FSCard--XyliQO3.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./VDialog-uOP7gGlh.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-BGzvJBOV.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./useTranslations-CDmrxgqt.js";import"./FSBaseField-y2QkcP3h.js";import"./useRules-2yt7KWSA.js";import"./VField-BhclGBdp.js";import"./index-C-lZWyiZ.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./density-SLEyWIf6.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./rounded-B6-M_5uG.js";import"./index-BLyOCIqB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./time-DuowFvgO.js";import"./times-CqUFey1a.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-DAnuesY2.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./useAppTimeZone-fWyn93dw.js";import"./startOfDay-C4pDH4rb.js";const E=U({name:"FSTranslateTextArea",components:{FSDialogSubmit:Z,FSTextArea:_,FSButton:G,FSIcon:L,FSSpan:O,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:h}=ae(),{getColors:v}=ee(),b=V(!1),r=V(e.translations),d=v(m.Light),S=v(m.Dark),t=z(()=>e.disabled?{"--fs-translate-field-color":d.dark}:{"--fs-translate-field-color":S.base}),i=o=>{if(!r.value)return"";const s=r.value.find(p=>p.languageCode===o);return!s||!s[e.property]?"":s[e.property]??""},u=(o,s)=>{if(!r.value){r.value=[{languageCode:o,[e.property]:s}];return}const p=r.value.find(N=>N.languageCode===o);p?p[e.property]=s:r.value.push({languageCode:o,[e.property]:s})},H=()=>{b.value=!1,e.disabled||a("update:translations",r.value)};return K(()=>e.translations,o=>{r.value=o},{immediate:!0,deep:!0}),{innerTranslations:r,ColorEnum:m,languages:h,dialog:b,style:t,getTranslation:i,setTranslation:u,onSubmit:H}}});function le(e,a,h,v,b,r){const d=A("FSTextArea"),S=A("FSDialogSubmit");return F(),w(q,null,[n(d,X({disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),W({append:l(()=>[n(G,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:a[0]||(a[0]=t=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[C(e.$slots,(t,i)=>({name:i,fn:l(u=>[$(e.$slots,i,Y(J(u)))])}))]),1040,["disabled","modelValue"]),n(S,{title:e.$tr("translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[2]||(a[2]=t=>e.dialog=t)},{body:l(()=>[n(c,{gap:"32px"},{default:l(()=>[n(d,{label:e.$tr("ui.common.default-value","Default value"),disabled:!0,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(c,{gap:"20px"},{default:l(()=>[(F(!0),w(q,null,C(e.languages,(t,i)=>(F(),M(d,{disabled:e.$props.disabled,key:i,modelValue:e.getTranslation(t.code),rows:e.$attrs.rows,"onUpdate:modelValue":u=>e.setTranslation(t.code,u)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(O,{font:"text-overline",style:Q(e.style)},{default:l(()=>[R(x(e.$tr("translate-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1032,["style"]),n(L,null,{default:l(()=>[R(x(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["disabled","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=te(E,[["render",le]]);E.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"Translation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const Ta={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:a})=>({components:{FSTranslateTextArea:T,FSCol:c},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSForm>`})};var k,B,I;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(B=f.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var D,P,j;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const ha=["Variations","Rules"];export{g as Rules,f as Variations,ha as __namedExportsOrder,Ta as default};
