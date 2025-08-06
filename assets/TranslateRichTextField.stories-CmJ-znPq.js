import{d as A,b as O,w as U,B as u,E as o,m as c,I as T,J as d,k as l,C as N,F as D,S as M,A as V,K as S,H as G}from"./vue.esm-bundler-CocPPKUI.js";import{F as J}from"./FSButtonCancelLabel-4k35ijkL.js";import{F as B,e as E}from"./FSRichTextField-KVUUtyhl.js";import{F as v}from"./FSButton-B9T3D7JL.js";import{F as j}from"./FSIcon-BGuuL0jz.js";import{_ as I}from"./FSSpan-CKhKq6E1.js";import{F as p}from"./FSCol-79-COv64.js";import{_ as g}from"./FSRow-BvJ7lU5E.js";import{u as H}from"./useAppLanguages-YxeLYIRF.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as P,a as z}from"./properties-Qw-O9fbT.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./FSAutocompleteField-BeyvUnEw.js";import"./FSSearchField-xkilxT3T.js";import"./FSTextField-HkwYV1Vw.js";import"./FSBaseField-Cn3A38Ti.js";import"./useSlots-D4bv69lA.js";import"./useRules-C3-AmzzE.js";import"./useBreakpoints-DZlz3-56.js";import"./VField-CAcTjb6h.js";import"./index-hd-xIizf.js";import"./color-D50-hVV_.js";import"./transition-bMLtH-b3.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./locale-_fONYh-8.js";import"./VIcon-ZjKwFcqe.js";import"./density-2KuMGYl6.js";import"./dimensions-Cv9Fwl7U.js";import"./proxiedModel-DW1FRKBO.js";import"./loader-BDqRCawj.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./anchor-D4EnoweD.js";import"./rounded-CBYChxif.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-5LM_ZUPq.js";import"./useTranslations-DJaIYmO0.js";import"./FSDialogMenu-BpQhlEn9.js";import"./FSCard-2KUMcI8D.js";import"./css-mt76hoAn.js";import"./VDialog-BpMVGEao.js";import"./VOverlay-BMq2UEr3.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./FSSlideGroup-BoaCkdx0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./FSToggleSet-mQm74CcI.js";import"./FSWrapGroup-DXlgsE59.js";import"./FSCheckbox-MGAv1q-u.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./index-BwBNp3ym.js";import"./FSFadeOut-BcV7cYL5.js";import"./FSLoader-JpoH2mis.js";import"./elevation-DUhGVECn.js";import"./FSRadio-D7UyW-G6.js";import"./VSelect-iFfd9zu0.js";import"./VList-7u5M4k2B.js";import"./ssrBoot-B-cFki3l.js";import"./border-ZP5ArpGv.js";import"./VImg-C2WY2bzk.js";import"./VMenu-DLjuHJDK.js";import"./filter-ROZ4nnRZ.js";import"./FSText-Nj40J67v.js";import"./FSMenu-aaB0XS5w.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";const q=A({name:"FSTranslateRichTextField",components:{FSButtonCancelLabel:J,FSRichTextField:B,FSButton:v,FSIcon:j,FSSpan:I,FSCol:p,FSRow:g},props:{translationsExpanded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},modelValue:{type:[Object,String],required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:h}=H(),r=O([]),b=t=>{if(!r.value)return E;const n=r.value.find(i=>i.languageCode===t);return!n||!n[e.property]?E:n[e.property]},F=(t,n)=>{if(!r.value){r.value=[{languageCode:t,[e.property]:n}];return}const i=r.value.find(_=>_.languageCode===t);i?i[e.property]=n:r.value.push({languageCode:t,[e.property]:n})},s=()=>{e.disabled||a("update:translations",r.value),a("update:translationsExpanded",!1)},x=()=>{a("update:translationsExpanded",!1)};return U(()=>e.translations,t=>{r.value=t.map(n=>typeof n[e.property]=="string"?n:{...n,[e.property]:JSON.stringify(n[e.property])})},{immediate:!0,deep:!0}),{languages:h,onCancelTranslations:x,onSubmitTranslations:s,getTranslation:b,setTranslation:F}}});function Q(e,a,h,r,b,F){const s=T("FSRichTextField"),x=T("FSButtonCancelLabel");return e.$props.translationsExpanded?(d(),u(p,{key:0},{default:o(()=>[l(p,{gap:"16px"},{default:o(()=>[l(s,c({disabled:!0,label:e.$tr("ui.common.default-value","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(d(!0),N(D,null,M(e.languages,(t,n)=>(d(),u(s,c({disabled:e.$props.disabled,key:n,modelValue:e.getTranslation(t.code),"onUpdate:modelValue":i=>e.setTranslation(t.code,i),ref_for:!0},e.$attrs),{label:o(()=>[l(g,{wrap:!1,align:"center-left"},{default:o(()=>[l(I,{class:"fs-translate-field-label",font:"text-overline"},{default:o(()=>[V(S(e.$tr("translate-rich-text-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1024),l(j,null,{default:o(()=>[V(S(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["disabled","modelValue","onUpdate:modelValue"]))),128))]),_:1}),l(g,{wrap:!1},{default:o(()=>[l(x,{prependIcon:"mdi-cancel",width:"100%",onClick:e.onCancelTranslations},null,8,["onClick"]),e.$props.disabled?G("",!0):(d(),u(v,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.validate","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"]))]),_:1})]),_:1})):(d(),u(s,c({key:1,disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),{"append-inner":o(()=>[l(v,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.manage-translations","Manage translations"),onClick:a[0]||(a[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["disabled","modelValue"]))}const m=K(q,[["render",Q]]);q.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"{ [key: string]: any } | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:`{
  languageCode: string;
  [key: string]: string | object | null;
}[]`},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const Ft={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:m,tags:["autodocs"],argTypes:{...z(m),...P([B],m)}},L=[{code:"temperature",defaultValue:"0",label:"Température"},{code:"weather",defaultValue:"XXX",label:"Météo"}],f={args:{modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',variableReferences:[...L]},render:(e,{argTypes:a})=>({components:{FSTranslateRichTextField:m,FSCol:p},props:Object.keys(a),setup(){return{args:e}},template:`
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
}`,...(X=($=y.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const Tt=["Default","TranslationObject"];export{f as Default,y as TranslationObject,Tt as __namedExportsOrder,Ft as default};
