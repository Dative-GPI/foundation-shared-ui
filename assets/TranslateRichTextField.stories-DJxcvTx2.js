import{d as L,b as N,w as U,A as p,D as o,l as c,H as T,I as d,R as l,B as _,G as O,S as A,J as V,K as E,F as D}from"./vue.esm-bundler-NAfsqApI.js";import{F as G}from"./FSButtonCancelLabel-KhhBn6UN.js";import{F as M,e as S}from"./FSRichTextField-COYXKmYi.js";import{F as x}from"./FSButton-CnXo3fLV.js";import{F as q}from"./FSIcon-Dq2bxLH5.js";import{_ as B}from"./FSSpan-CLtVPKpS.js";import{F as m}from"./FSCol-CPY6S-Xd.js";import{_ as v}from"./FSRow-GjwhmX1p.js";import{u as J}from"./useAppLanguages-CXZCAI-3.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSAutocompleteField-Dosoxp9w.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./useSlots-S0O9Daut.js";import"./useRules-pqUeO9kt.js";import"./useBreakpoints-BwxwzcAl.js";import"./VField-KOKiCRZA.js";import"./index-Dne_26Gx.js";import"./color-BvydW9AS.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./VIcon-PiNvAqE-.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./anchor-DvtYZGyi.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./useTranslations-CxiknF7e.js";import"./VList-Cf1cUG92.js";import"./FSCard-DOESxZy8.js";import"./css-DBDqGZ-V.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./elevation-B-XsQHpK.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./FSText-Bp70TDSF.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";const j=L({name:"FSTranslateRichTextField",components:{FSButtonCancelLabel:G,FSRichTextField:M,FSButton:x,FSIcon:q,FSSpan:B,FSCol:m,FSRow:v},props:{translationsExpanded:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},modelValue:{type:[Object,String],required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:a}){const{languages:g}=J(),r=N([]),b=t=>{if(!r.value)return S;const n=r.value.find(i=>i.languageCode===t);return!n||!n[e.property]?S:n[e.property]},F=(t,n)=>{if(!r.value){r.value=[{languageCode:t,[e.property]:n}];return}const i=r.value.find(I=>I.languageCode===t);i?i[e.property]=n:r.value.push({languageCode:t,[e.property]:n})},s=()=>{e.editable&&a("update:translations",r.value),a("update:translationsExpanded",!1)},y=()=>{a("update:translationsExpanded",!1)};return U(()=>e.translations,t=>{r.value=t.map(n=>typeof n[e.property]=="string"?n:{...n,[e.property]:JSON.stringify(n[e.property])})},{immediate:!0,deep:!0}),{languages:g,onCancelTranslations:y,onSubmitTranslations:s,getTranslation:b,setTranslation:F}}});function H(e,a,g,r,b,F){const s=T("FSRichTextField"),y=T("FSButtonCancelLabel");return e.$props.translationsExpanded?(d(),p(m,{key:0},{default:o(()=>[l(m,{gap:"16px"},{default:o(()=>[l(s,c({editable:!1,label:e.$tr("ui.common.default-value","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(d(!0),_(O,null,A(e.languages,(t,n)=>(d(),p(s,c({editable:e.$props.editable,key:n,modelValue:e.getTranslation(t.code),"onUpdate:modelValue":i=>e.setTranslation(t.code,i),ref_for:!0},e.$attrs),{label:o(()=>[l(v,{wrap:!1,align:"center-left"},{default:o(()=>[l(B,{class:"fs-translate-field-label",font:"text-overline"},{default:o(()=>[V(E(e.$tr("translate-rich-text-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1024),l(q,null,{default:o(()=>[V(E(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1}),l(v,{wrap:!1},{default:o(()=>[l(y,{prependIcon:"mdi-cancel",width:"100%",onClick:e.onCancelTranslations},null,8,["onClick"]),e.$props.editable?(d(),p(x,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.validate","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"])):D("",!0)]),_:1})]),_:1})):(d(),p(s,c({key:1,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),{"append-inner":o(()=>[l(x,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.manage-translations","Manage translations"),onClick:a[0]||(a[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["editable","modelValue"]))}const h=W(j,[["render",H]]);j.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"{ [key: string]: any } | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:`{
  languageCode: string;
  [key: string]: string | object | null;
}[]`},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const yt={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:h,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:translations":{action:"update:translations"},"onUpdate:translationsExpanded":{action:"update:translationsExpanded"}}},u={args:{translationsExpanded:!1,modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations:[],variableReferences:[{code:"temperature",defaultValue:0,typeName:"number"},{code:"weather",defaultValue:"XXX",typeName:"string"}],label:"Rich text translatable",required:!0,editable:!0,property:"label",description:"This is a rich text field"},render:(e,{argTypes:a})=>({components:{FSTranslateRichTextField:h,FSCol:m},props:Object.keys(a),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})},f={args:{translationsExpanded:!1,modelValue:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Current weather : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home is a ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"French villa ",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:"with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"arched windows",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" that allow plenty of natural light to flood the spacious, open interiors. ",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Inside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},translations:[{text:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Météo actuelle : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison est une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"villa française",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" avec un immense ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"jardin",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", entourée de verdure luxuriante et de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fleurs",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" éclatantes. La villa possède une élégante ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"façade en pierre",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et de grandes ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fenêtres",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"À l'intérieur, la villa offre de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"hauts plafonds",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", des ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"poutres en bois",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et un mobilier ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"rustique",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et chaleureux. La ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"terrasse",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" extérieure est idéale pour dîner, et une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"piscine",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" scintillante invite à la détente lors des journées ensoleillées.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},languageCode:"fr-FR"},{text:null,languageCode:"it-IT"},{text:null,languageCode:"en-GB"},{text:null,languageCode:"es-ES"}],variableReferences:[{code:"temperature",defaultValue:0,label:"Température"},{code:"weather",defaultValue:"XXX",label:"Weather"}],label:"Rich text translatable",required:!0,editable:!0,property:"text",description:"This is a rich text field"},render:(e,{argTypes:a})=>({components:{FSTranslateRichTextField:h,FSCol:m},props:Object.keys(a),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})};var w,C,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    translationsExpanded: false,
    modelValue: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
    translations: [],
    variableReferences: [{
      code: "temperature",
      defaultValue: 0,
      typeName: "number"
    }, {
      code: "weather",
      defaultValue: "XXX",
      typeName: "string"
    }],
    label: 'Rich text translatable',
    required: true,
    editable: true,
    property: 'label',
    description: 'This is a rich text field'
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
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,X,$;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    variableReferences: [{
      code: "temperature",
      defaultValue: 0,
      label: "Température"
    }, {
      code: "weather",
      defaultValue: "XXX",
      label: "Weather"
    }],
    label: 'Rich text translatable',
    required: true,
    editable: true,
    property: 'text',
    description: 'This is a rich text field'
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
}`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const ct=["Default","TranslationObject"];export{u as Default,f as TranslationObject,ct as __namedExportsOrder,yt as default};
