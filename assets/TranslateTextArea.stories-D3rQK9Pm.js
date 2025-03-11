import{d as E,b as V,c as H,A as C,Q as n,B as z,R as w,C as l,m as K,F as q,G as A,H as F,K as $,M as J,N as M,z as Q,S as W,I as R,J as x}from"./vue.esm-bundler-CUSnV4DE.js";import{F as X}from"./FSDialogSubmit-B8zuuo-y.js";import{F as Y}from"./FSTextArea-DZ581GsO.js";import{F as j}from"./FSButton-BTpAdEE5.js";import{F as G}from"./FSIcon-Cp7BQBW6.js";import{_ as L}from"./FSSpan-M9GEX7v6.js";import{_ as y}from"./FSRow-hpHYWcoJ.js";import{C as m,u as Z}from"./useColors-CQZIO9RQ.js";import{u as _}from"./useAppLanguages-BSjDFg7X.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./FSCol-BQiFrdcO.js";import{F as te}from"./FSForm-BDusjIFO.js";import{a as ae}from"./rules-CDo_Brp5.js";import"./FSFadeOut-BguakrVC.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-CQzBW1Q0.js";import"./css-BnRE2gle.js";import"./FSDialog-CDP3ltAg.js";import"./FSCard-BnVyMFnh.js";import"./FSText-CUkc4ADt.js";import"./useSlots-CY84M1fx.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CgsoZSKd.js";import"./theme-DGuAngmo.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./useTranslations-D0SM0QeA.js";import"./FSBaseField-DwmVeNEG.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./VIcon-DeLOaNVc.js";import"./density-DAqBVexQ.js";import"./loader-BjfLeESU.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./rounded-DQzQH8wE.js";import"./index-CeZa2hiu.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-BXARN-2X.js";import"./useDateFormat-D6A_WgCt.js";import"./useAppLanguageCode-CV1UAuz5.js";import"./useAppTimeZone-CYLIXU2i.js";import"./startOfDay-C4pDH4rb.js";const N=E({name:"FSTranslateTextArea",components:{FSDialogSubmit:X,FSTextArea:Y,FSButton:j,FSIcon:G,FSSpan:L,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:h}=_(),{getColors:b}=Z(),v=V(!1),r=V(e.translations),s=b(m.Light),S=b(m.Dark),a=H(()=>e.editable?{"--fs-translate-field-color":S.base}:{"--fs-translate-field-color":s.dark});return{innerTranslations:r,ColorEnum:m,languages:h,dialog:v,style:a,getTranslation:u=>{if(!r.value)return"";const o=r.value.find(p=>p.languageCode===u);return!o||!o[e.property]?"":o[e.property]},setTranslation:(u,o)=>{if(!r.value){r.value=[{languageCode:u,[e.property]:o}];return}const p=r.value.find(O=>O.languageCode===u);p?p[e.property]=o:r.value.push({languageCode:u,[e.property]:o})},onSubmit:()=>{v.value=!1,e.editable&&t("update:translations",r.value)}}}});function re(e,t,h,b,v,r){const s=A("FSTextArea"),S=A("FSDialogSubmit");return F(),C(q,null,[n(s,K({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),z({append:l(()=>[n(j,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:t[0]||(t[0]=a=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[w(e.$slots,(a,i)=>({name:i,fn:l(d=>[$(e.$slots,i,J(M(d)))])}))]),1040,["editable","modelValue"]),n(S,{title:e.$tr("translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>e.dialog=a)},{body:l(()=>[n(c,{gap:"32px"},{default:l(()=>[n(s,{label:e.$tr("ui.common.default-value","Default value"),editable:!1,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(c,{gap:"20px"},{default:l(()=>[(F(!0),C(q,null,w(e.languages,(a,i)=>(F(),Q(s,{editable:e.$props.editable,key:i,modelValue:e.getTranslation(a.code),rows:e.$attrs.rows,"onUpdate:modelValue":d=>e.setTranslation(a.code,d)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(L,{font:"text-overline",style:W(e.style)},{default:l(()=>[R(x(e.$tr("translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(G,null,{default:l(()=>[R(x(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=ee(N,[["render",re]]);N.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const mt={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:t})=>({components:{FSTranslateTextArea:T,FSCol:c},props:Object.keys(t),setup(){return{...e}},template:`
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
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},g={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:ae}},render:(e,{argTypes:t})=>({components:{FSForm:te,FSTranslateTextArea:T,FSCol:c,FSRow:y},props:Object.keys(t),setup(){return{...e}},template:`
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
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(B=(I=f.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var D,P,U;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(U=(P=g.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const ft=["Variations","Rules"];export{g as Rules,f as Variations,ft as __namedExportsOrder,mt as default};
