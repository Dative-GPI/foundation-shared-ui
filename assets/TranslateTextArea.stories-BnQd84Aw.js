import{d as H,b as V,c as K,w as z,C as w,k as n,D as J,S as C,E as l,m as Q,F as q,I as A,J as F,O as $,P as M,Q as W,B as X,V as Y,A as R,K as x}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as Z}from"./FSDialogSubmit-DLaEkr55.js";import{F as _}from"./FSTextArea-B8aSn8HB.js";import{F as O}from"./FSButton-Czf3beC8.js";import{F as E}from"./FSIcon-CeLDRxMK.js";import{_ as L}from"./FSSpan-DkNsO5wd.js";import{_ as y}from"./FSRow-CjY3icuR.js";import{C as m,u as ee}from"./useColors-BXuuHMxE.js";import{u as ae}from"./useAppLanguages-CY5Dd5qs.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./FSCol-DVEaUPKl.js";import{F as re}from"./FSForm-CSz_UbV2.js";import{a as ne}from"./rules-BUSk3wMq.js";import"./FSFadeOut-DU3Ke7qi.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BMcJFLA8.js";import"./css-DTGEi_Ca.js";import"./FSDialog-CS4QDqZQ.js";import"./FSCard-twwkVLSp.js";import"./FSText-B2RNQvtL.js";import"./useSlots-C8jkAuOW.js";import"./VDialog-fWvZSkPk.js";import"./VOverlay-DXMNyzvF.js";import"./easing-DY7PVvcf.js";import"./color-BM2dSUAO.js";import"./theme-Bp81IclV.js";import"./proxiedModel-Nw0LX-ta.js";import"./anchor-S0Fc85Gi.js";import"./dimensions-TKp8HHzB.js";import"./display-CpM-3U3n.js";import"./lazy-BrZUVd24.js";import"./locale-K9DBMW2q.js";import"./router-kuDvkEMM.js";import"./scopeId-BJNiFHH-.js";import"./transition-Ucf2Ovas.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CuIagDb9.js";import"./useTranslations-5XSl7qXA.js";import"./FSBaseField-Bo38Hl_f.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./index-Dylhq_Dl.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./VIcon-BOLLMMm0.js";import"./density-mssFUWH2.js";import"./loader-CbVzlK-r.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./rounded-Cy4gG01O.js";import"./index-B48vLg-P.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-CEDjUrWj.js";import"./times-CqUFey1a.js";import"./useDateFormat-DHrriBQY.js";import"./useAppTimeZone-Bddnv5KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DwRThLpm.js";const G=H({name:"FSTranslateTextArea",components:{FSDialogSubmit:Z,FSTextArea:_,FSButton:O,FSIcon:E,FSSpan:L,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:h}=ae(),{getColors:b}=ee(),v=V(!1),r=V(e.translations),d=b(m.Light),S=b(m.Dark),t=K(()=>e.disabled?{"--fs-translate-field-color":d.dark}:{"--fs-translate-field-color":S.base}),i=o=>{if(!r.value)return"";const s=r.value.find(p=>p.languageCode===o);return!s||!s[e.property]?"":s[e.property]??""},u=(o,s)=>{if(!r.value){r.value=[{languageCode:o,[e.property]:s}];return}const p=r.value.find(U=>U.languageCode===o);p?p[e.property]=s:r.value.push({languageCode:o,[e.property]:s})},N=()=>{v.value=!1,e.disabled||a("update:translations",r.value)};return z(()=>e.translations,o=>{r.value=o},{immediate:!0,deep:!0}),{innerTranslations:r,ColorEnum:m,languages:h,dialog:v,style:t,getTranslation:i,setTranslation:u,onSubmit:N}}});function le(e,a,h,b,v,r){const d=A("FSTextArea"),S=A("FSDialogSubmit");return F(),w(q,null,[n(d,Q({disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),J({append:l(()=>[n(O,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:a[0]||(a[0]=t=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[C(e.$slots,(t,i)=>({name:i,fn:l(u=>[$(e.$slots,i,M(W(u)))])}))]),1040,["disabled","modelValue"]),n(S,{title:e.$tr("translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[2]||(a[2]=t=>e.dialog=t)},{body:l(()=>[n(c,{gap:"32px"},{default:l(()=>[n(d,{label:e.$tr("ui.common.default-value","Default value"),disabled:!0,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(c,{gap:"20px"},{default:l(()=>[(F(!0),w(q,null,C(e.languages,(t,i)=>(F(),X(d,{disabled:e.$props.disabled,key:i,modelValue:e.getTranslation(t.code),rows:e.$attrs.rows,"onUpdate:modelValue":u=>e.setTranslation(t.code,u)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(L,{font:"text-overline",style:Y(e.style)},{default:l(()=>[R(x(e.$tr("translate-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1032,["style"]),n(E,null,{default:l(()=>[R(x(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["disabled","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=te(G,[["render",le]]);G.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"Translation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const ba={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:a})=>({components:{FSTranslateTextArea:T,FSCol:c},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const va=["Variations","Rules"];export{g as Rules,f as Variations,va as __namedExportsOrder,ba as default};
