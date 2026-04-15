import{d as H,e as V,c as z,w as K,J as w,k as n,G as J,X as C,H as l,m as M,F as q,L as A,M as F,S as $,U as X,V as Q,E as W,_ as Y,N as R,O as x}from"./vue.esm-bundler-D_gXonxt.js";import{F as Z}from"./FSDialogSubmit-CXqdvZQ2.js";import{F as _}from"./FSTextArea-DxdKD0os.js";import{F as L}from"./FSButton-cpkpLA7w.js";import{F as O}from"./FSIcon-B9MXbR5l.js";import{_ as E}from"./FSSpan-ap0CpdXZ.js";import{_ as y}from"./FSRow-cHWWqhhs.js";import{C as m,u as ee}from"./useColors-B49MKafH.js";import{u as ae}from"./useAppLanguages-DrfimCem.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./FSCol-C3EJfcJX.js";import{F as re}from"./FSForm-7qi1lT_s.js";import{a as ne}from"./rules-BzW1_6pp.js";import"./FSFadeOut-z7-cnvK3.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BWz07CZT.js";import"./css-Bznx04uW.js";import"./FSDialog-st5JvFSU.js";import"./FSCard-Cxfe3-O9.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./theme-DdZUMbNR.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSText-DL_5kFi7.js";import"./useSlots-CdBAzqCX.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./proxiedModel-Cl0bR0rs.js";import"./easing-DY7PVvcf.js";import"./anchor-DrPAsKKU.js";import"./dimensions-BYDjhYdL.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./locale-CEMLpecI.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./transition-CHyhkthg.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-d5ANZlFh.js";import"./VDefaultsProvider-DJfojugM.js";import"./useTranslations-D2TwtVAp.js";import"./FSBaseField-CGwB2cs2.js";import"./useRules-CohX4tE3.js";import"./VField-Cr90fIiu.js";import"./index-aKIkx5xA.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./density-W7RG4BnT.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./rounded-yhlSUX6x.js";import"./index-CpkyVf-S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./time-B7nWt_FV.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-BQ8h6gVb.js";import"./useAppLanguageCode-ulGHj8Yu.js";import"./useAppTimeZone-Cxxk5HO_.js";import"./startOfDay-C4pDH4rb.js";const G=H({name:"FSTranslateTextArea",components:{FSDialogSubmit:Z,FSTextArea:_,FSButton:L,FSIcon:O,FSSpan:E,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:h}=ae(),{getColors:v}=ee(),b=V(!1),r=V(e.translations),d=v(m.Light),S=v(m.Dark),t=z(()=>e.disabled?{"--fs-translate-field-color":d.dark}:{"--fs-translate-field-color":S.base}),i=o=>{if(!r.value)return"";const s=r.value.find(p=>p.languageCode===o);return!s||!s[e.property]?"":s[e.property]??""},u=(o,s)=>{if(!r.value){r.value=[{languageCode:o,[e.property]:s}];return}const p=r.value.find(U=>U.languageCode===o);p?p[e.property]=s:r.value.push({languageCode:o,[e.property]:s})},N=()=>{b.value=!1,e.disabled||a("update:translations",r.value)};return K(()=>e.translations,o=>{r.value=o},{immediate:!0,deep:!0}),{innerTranslations:r,ColorEnum:m,languages:h,dialog:b,style:t,getTranslation:i,setTranslation:u,onSubmit:N}}});function le(e,a,h,v,b,r){const d=A("FSTextArea"),S=A("FSDialogSubmit");return F(),w(q,null,[n(d,M({disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),J({append:l(()=>[n(L,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:a[0]||(a[0]=t=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[C(e.$slots,(t,i)=>({name:i,fn:l(u=>[$(e.$slots,i,X(Q(u)))])}))]),1040,["disabled","modelValue"]),n(S,{title:e.$tr("translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[2]||(a[2]=t=>e.dialog=t)},{body:l(()=>[n(c,{gap:"32px"},{default:l(()=>[n(d,{label:e.$tr("ui.common.default-value","Default value"),disabled:!0,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(c,{gap:"20px"},{default:l(()=>[(F(!0),w(q,null,C(e.languages,(t,i)=>(F(),W(d,{disabled:e.$props.disabled,key:i,modelValue:e.getTranslation(t.code),rows:e.$attrs.rows,"onUpdate:modelValue":u=>e.setTranslation(t.code,u)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(E,{font:"text-overline",style:Y(e.style)},{default:l(()=>[R(x(e.$tr("translate-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1032,["style"]),n(O,null,{default:l(()=>[R(x(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["disabled","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=te(G,[["render",le]]);G.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"Translation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const Ta={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:a})=>({components:{FSTranslateTextArea:T,FSCol:c},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const ha=["Variations","Rules"];export{g as Rules,f as Variations,ha as __namedExportsOrder,Ta as default};
