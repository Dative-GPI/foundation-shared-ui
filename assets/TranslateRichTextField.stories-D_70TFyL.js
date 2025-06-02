import{d as A,b as O,w as U,B as u,E as o,m as c,I as T,J as d,z as l,C as N,F as D,S as M,A as V,K as S,H as G}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as J}from"./FSButtonCancelLabel-DXhinbDY.js";import{F as B,e as E}from"./FSRichTextField-BQDGv7Mj.js";import{F as v}from"./FSButton-2OKi08_r.js";import{F as j}from"./FSIcon-8KcAAKgU.js";import{_ as I}from"./FSSpan-B7HDTlg9.js";import{F as p}from"./FSCol-DIPgj7wU.js";import{_ as g}from"./FSRow-udQVJR1p.js";import{u as z}from"./useAppLanguages-DP6ibxSz.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as K,a as P}from"./properties-Qw-O9fbT.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./FSAutocompleteField-D7kTrWBx.js";import"./FSSearchField-VvMfG9Mz.js";import"./FSTextField-CEJP76Sx.js";import"./FSBaseField-eUR0iGRU.js";import"./useSlots-BgbXyH5p.js";import"./useRules-Cutg_0Yh.js";import"./useBreakpoints-DMrtgY61.js";import"./VField-B2nfi808.js";import"./index-BHk1SuU0.js";import"./color-iZFxpsFf.js";import"./transition-C13qRIR1.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./locale-BJmdjC_5.js";import"./VIcon-ZzEkeSRE.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./proxiedModel-BirLikdP.js";import"./loader-Bh1R7Z2A.js";import"./VProgressCircular-cB7gdjsO.js";import"./resizeObserver-C7qOORSR.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";import"./VDefaultsProvider-3cG3_dFO.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./useTranslations-D4m4SVfo.js";import"./VList-BdRSj6hM.js";import"./FSCard-BH9I8ruU.js";import"./css-BZjDzSZ1.js";import"./VDialog-BjO_95QL.js";import"./VOverlay-CrPt6Ctk.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./router-C0dK7NvB.js";import"./ssrBoot-B76fNmmB.js";import"./border-DGybV2oK.js";import"./elevation-DCJceMeT.js";import"./index-BSoBU6Pm.js";import"./VImg-UKGkvK5A.js";import"./FSSlideGroup-FM6r_xNQ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BR7gWMZw.js";import"./VSlideGroupItem-DMC4DYA5.js";import"./group-1sntWZNj.js";import"./FSToggleSet-CzuJHIxU.js";import"./FSWrapGroup-Dpc14vID.js";import"./FSCheckbox-tSiw0lhZ.js";import"./VSelectionControl-Dw5vpEc6.js";import"./FSFadeOut-B817LR1t.js";import"./FSLoader-0ho3eZau.js";import"./FSRadio-DU7kdJ5e.js";import"./VSelect-Bvdm_LMp.js";import"./VMenu-B5kDinlh.js";import"./filter-DhzaDDBp.js";import"./FSText-C92q1_nI.js";import"./FSMenu-9wehFRGE.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-CBfoSsDs.js";const q=A({name:"FSTranslateRichTextField",components:{FSButtonCancelLabel:J,FSRichTextField:B,FSButton:v,FSIcon:j,FSSpan:I,FSCol:p,FSRow:g},props:{translationsExpanded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},modelValue:{type:[Object,String],required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:h}=z(),r=O([]),b=t=>{if(!r.value)return E;const n=r.value.find(i=>i.languageCode===t);return!n||!n[e.property]?E:n[e.property]},F=(t,n)=>{if(!r.value){r.value=[{languageCode:t,[e.property]:n}];return}const i=r.value.find(_=>_.languageCode===t);i?i[e.property]=n:r.value.push({languageCode:t,[e.property]:n})},s=()=>{e.disabled||a("update:translations",r.value),a("update:translationsExpanded",!1)},x=()=>{a("update:translationsExpanded",!1)};return U(()=>e.translations,t=>{r.value=t.map(n=>typeof n[e.property]=="string"?n:{...n,[e.property]:JSON.stringify(n[e.property])})},{immediate:!0,deep:!0}),{languages:h,onCancelTranslations:x,onSubmitTranslations:s,getTranslation:b,setTranslation:F}}});function Q(e,a,h,r,b,F){const s=T("FSRichTextField"),x=T("FSButtonCancelLabel");return e.$props.translationsExpanded?(d(),u(p,{key:0},{default:o(()=>[l(p,{gap:"16px"},{default:o(()=>[l(s,c({disabled:!0,label:e.$tr("ui.common.default-value","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(d(!0),N(D,null,M(e.languages,(t,n)=>(d(),u(s,c({disabled:e.$props.disabled,key:n,modelValue:e.getTranslation(t.code),"onUpdate:modelValue":i=>e.setTranslation(t.code,i),ref_for:!0},e.$attrs),{label:o(()=>[l(g,{wrap:!1,align:"center-left"},{default:o(()=>[l(I,{class:"fs-translate-field-label",font:"text-overline"},{default:o(()=>[V(S(e.$tr("translate-rich-text-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1024),l(j,null,{default:o(()=>[V(S(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["disabled","modelValue","onUpdate:modelValue"]))),128))]),_:1}),l(g,{wrap:!1},{default:o(()=>[l(x,{prependIcon:"mdi-cancel",width:"100%",onClick:e.onCancelTranslations},null,8,["onClick"]),e.$props.disabled?G("",!0):(d(),u(v,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.validate","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"]))]),_:1})]),_:1})):(d(),u(s,c({key:1,disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),{"append-inner":o(()=>[l(v,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.manage-translations","Manage translations"),onClick:a[0]||(a[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["disabled","modelValue"]))}const m=H(q,[["render",Q]]);q.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"{ [key: string]: any } | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:`{
  languageCode: string;
  [key: string]: string | object | null;
}[]`},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const gt={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:m,tags:["autodocs"],argTypes:{...P(m),...K([B],m)}},L=[{code:"temperature",defaultValue:"0",label:"Température"},{code:"weather",defaultValue:"XXX",label:"Météo"}],f={args:{modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',variableReferences:[...L]},render:(e,{argTypes:a})=>({components:{FSTranslateRichTextField:m,FSCol:p},props:Object.keys(a),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})},y={args:{translationsExpanded:!1,modelValue:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Current weather : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home is a ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"French villa ",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:"with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"arched windows",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" that allow plenty of natural light to flood the spacious, open interiors. ",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Inside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},translations:[{text:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Météo actuelle : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison est une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"villa française",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" avec un immense ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"jardin",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", entourée de verdure luxuriante et de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fleurs",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" éclatantes. La villa possède une élégante ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"façade en pierre",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et de grandes ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fenêtres",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"À l'intérieur, la villa offre de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"hauts plafonds",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", des ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"poutres en bois",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et un mobilier ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"rustique",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et chaleureux. La ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"terrasse",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" extérieure est idéale pour dîner, et une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"piscine",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" scintillante invite à la détente lors des journées ensoleillées.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},languageCode:"fr-FR"},{text:null,languageCode:"it-IT"},{text:null,languageCode:"en-GB"},{text:null,languageCode:"es-ES"}],variableReferences:[...L]},render:(e,{argTypes:a})=>({components:{FSTranslateRichTextField:m,FSCol:p},props:Object.keys(a),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        @update:modelValue="args['onUpdate:modelValue']"
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})};var C,w,k;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
    variableReferences: [...variableReferences]
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateRichTextField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(k=(w=f.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var R,$,X;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    translationsExpanded: false,
    modelValue: {
      "root": {
        "children": [{
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "A nice home",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "center",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h1"
        }, {
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "Current weather : ",
            "type": "text",
            "version": 1
          }, {
            "type": "variable",
            "version": 1,
            "code": "weather",
            "defaultValue": "XXX"
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": " (",
            "type": "text",
            "version": 1
          }, {
            "type": "variable",
            "version": 1,
            "code": "temperature",
            "defaultValue": 0
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": " °C)",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "center",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h3"
        }, {
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "A nice home is a ",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 1,
            "mode": "normal",
            "style": "",
            "text": "French villa ",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large ",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 1,
            "mode": "normal",
            "style": "",
            "text": "arched windows",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": " that allow plenty of natural light to flood the spacious, open interiors. ",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        }, {
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "Inside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        }],
        "direction": "ltr",
        "format": "",
        "indent": 0,
        "type": "root",
        "version": 1
      }
    },
    translations: [{
      "text": {
        "root": {
          "children": [{
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Une belle maison",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "center",
            "indent": 0,
            "type": "heading",
            "version": 1,
            "tag": "h1"
          }, {
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Météo actuelle : ",
              "type": "text",
              "version": 1
            }, {
              "type": "variable",
              "version": 1,
              "code": "weather",
              "defaultValue": "XXX"
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " (",
              "type": "text",
              "version": 1
            }, {
              "type": "variable",
              "version": 1,
              "code": "temperature",
              "defaultValue": 0
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " °C)",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "center",
            "indent": 0,
            "type": "heading",
            "version": 1,
            "tag": "h3"
          }, {
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Une belle maison est une ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "villa française",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " avec un immense ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "jardin",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": ", entourée de verdure luxuriante et de ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "fleurs",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " éclatantes. La villa possède une élégante ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "façade en pierre",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " et de grandes ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "fenêtres",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "",
            "indent": 0,
            "type": "paragraph",
            "version": 1
          }, {
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "À l'intérieur, la villa offre de ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "hauts plafonds",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": ", des ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "poutres en bois",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " et un mobilier ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "rustique",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " et chaleureux. La ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "terrasse",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " extérieure est idéale pour dîner, et une ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "piscine",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " scintillante invite à la détente lors des journées ensoleillées.",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "",
            "indent": 0,
            "type": "paragraph",
            "version": 1
          }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "root",
          "version": 1
        }
      },
      "languageCode": "fr-FR"
    }, {
      "text": null,
      "languageCode": "it-IT"
    }, {
      "text": null,
      "languageCode": "en-GB"
    }, {
      "text": null,
      "languageCode": "es-ES"
    }],
    variableReferences: [...variableReferences]
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateRichTextField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSTranslateRichTextField
        @update:modelValue="args['onUpdate:modelValue']"
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(X=($=y.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const ht=["Default","TranslationObject"];export{f as Default,y as TranslationObject,ht as __namedExportsOrder,gt as default};
