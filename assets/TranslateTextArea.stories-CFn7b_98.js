import{d as H,b as V,c as U,A as C,P as n,B as z,Q as w,C as l,m as K,F as q,G as A,H as F,L as $,M as J,N as M,z as Q,S as W,I as R,J as x}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as X}from"./FSDialogSubmit-3derbzl9.js";import{F as Y}from"./FSTextArea-B8v1Itk0.js";import{F as L}from"./FSButton-hPdQnp5M.js";import{F as G}from"./FSIcon-B4J40lse.js";import{_ as N}from"./FSSpan-BXQyelfo.js";import{_ as y}from"./FSRow-C47sfGk6.js";import{C as m,u as Z}from"./useColors-CjA2D2xA.js";import{u as _}from"./useAppLanguages-GIEtxWZx.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as c}from"./FSCol-Be93XvPD.js";import{F as ae}from"./FSForm-LfcAIV6X.js";import{a as te}from"./rules-DnnTrRzM.js";import"./FSFadeOut-PZiJk41N.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DsICqL2A.js";import"./css-D38lF7BW.js";import"./FSDialog-CjSkVsu5.js";import"./FSCard-BmFmHVy0.js";import"./FSText-C032WjuG.js";import"./useSlots-c6yg-hhg.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./theme-d3-Spt7o.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./useTranslations-CLqRehXT.js";import"./FSBaseField-B4z0jav7.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./index-BJH4L2FX.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./VIcon-GfKFLOEw.js";import"./density-Dl4v3sM7.js";import"./loader-CQB_6PPx.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./rounded-CDCr0BOq.js";import"./index-DWgrY6Dg.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-Cg52tyx-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./time-s3B59H5y.js";import"./useDateFormat-hcE1Scoo.js";import"./useAppTimeZone-CP1Ic-gf.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CN6bsmo6.js";const O=H({name:"FSTranslateTextArea",components:{FSDialogSubmit:X,FSTextArea:Y,FSButton:L,FSIcon:G,FSSpan:N,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:h}=_(),{getColors:b}=Z(),v=V(!1),r=V(e.translations),s=b(m.Light),S=b(m.Dark),t=U(()=>e.disabled?{"--fs-translate-field-color":s.dark}:{"--fs-translate-field-color":S.base});return{innerTranslations:r,ColorEnum:m,languages:h,dialog:v,style:t,getTranslation:d=>{if(!r.value)return"";const o=r.value.find(p=>p.languageCode===d);return!o||!o[e.property]?"":o[e.property]},setTranslation:(d,o)=>{if(!r.value){r.value=[{languageCode:d,[e.property]:o}];return}const p=r.value.find(E=>E.languageCode===d);p?p[e.property]=o:r.value.push({languageCode:d,[e.property]:o})},onSubmit:()=>{v.value=!1,e.disabled||a("update:translations",r.value)}}}});function re(e,a,h,b,v,r){const s=A("FSTextArea"),S=A("FSDialogSubmit");return F(),C(q,null,[n(s,K({disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),z({append:l(()=>[n(L,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:a[0]||(a[0]=t=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[w(e.$slots,(t,i)=>({name:i,fn:l(u=>[$(e.$slots,i,J(M(u)))])}))]),1040,["disabled","modelValue"]),n(S,{title:e.$tr("translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":a[2]||(a[2]=t=>e.dialog=t)},{body:l(()=>[n(c,{gap:"32px"},{default:l(()=>[n(s,{label:e.$tr("ui.common.default-value","Default value"),disabled:!0,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(c,{gap:"20px"},{default:l(()=>[(F(!0),C(q,null,w(e.languages,(t,i)=>(F(),Q(s,{disabled:e.$props.disabled,key:i,modelValue:e.getTranslation(t.code),rows:e.$attrs.rows,"onUpdate:modelValue":u=>e.setTranslation(t.code,u)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(N,{font:"text-overline",style:W(e.style)},{default:l(()=>[R(x(e.$tr("translate-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1032,["style"]),n(G,null,{default:l(()=>[R(x(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["disabled","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=ee(O,[["render",re]]);O.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const ma={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:a})=>({components:{FSTranslateTextArea:T,FSCol:c},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})},g={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:te}},render:(e,{argTypes:a})=>({components:{FSForm:ae,FSTranslateTextArea:T,FSCol:c,FSRow:y},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const fa=["Variations","Rules"];export{g as Rules,f as Variations,fa as __namedExportsOrder,ma as default};
