import{d as _,e as O,w as A,B as u,D as n,m as x,I as T,J as d,q as l,G as N,F as D,U as M,K as V,L as S,H as G}from"./vue.esm-bundler-D5n7z5qz.js";import{F as J}from"./FSButtonCancelLabel-DSieExxF.js";import{F as j,e as w}from"./FSRichTextField-C2Q_XlXJ.js";import{F as v}from"./FSButton-Cpjx6pT4.js";import{F as B}from"./FSIcon-BJsIM37h.js";import{_ as q}from"./FSSpan-BN7wkmby.js";import{F as p}from"./FSCol-D_lbFmZy.js";import{_ as g}from"./FSRow-DIk8KFbG.js";import{u as H}from"./useAppLanguages-Bn8V9U-N.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as P,a as z}from"./properties-Qw-O9fbT.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./FSAutocompleteField-jljIIC9A.js";import"./FSSearchField-B5GkzB7N.js";import"./FSTextField-BEn-1eo1.js";import"./FSBaseField-Buivlp1M.js";import"./useSlots-CoecqEnp.js";import"./useRules-R3Ldkrx4.js";import"./useBreakpoints-CEzKC_o8.js";import"./VField-B1xdFTJF.js";import"./index-6jMyctoo.js";import"./useRender-BcOya-6A.js";import"./transition-DbItRNv8.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./density-BnAGl-Nw.js";import"./dimensions-B7sNhH2O.js";import"./loader-COXi3ZW_.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./anchor-CPKk15qm.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BKpPdzm5.js";import"./useTranslations-CFCS6HA-.js";import"./FSDialogMenu-DEwIi3jx.js";import"./FSCard-DLunkI-x.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./css-CxcvJboa.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./FSSlideGroup-D85Y1rXq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BnFBmJK4.js";import"./VSlideGroup-BxUK8FWF.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSToggleSet-B_gt-EnF.js";import"./FSWrapGroup-DzpSjUDj.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./FSFadeOut-C918yX_r.js";import"./FSLoader-Cl8hDT8j.js";import"./elevation-JukLG-n6.js";import"./FSRadio-BXAjRcH_.js";import"./VSelect-Dbz6iFLD.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VMenu-en6JpVrG.js";import"./filter-DlYw_aWm.js";import"./FSText-CJ7Lhzl1.js";import"./FSMenu-Cl6jFqyD.js";const I=_({name:"FSTranslateRichTextField",components:{FSButtonCancelLabel:J,FSRichTextField:j,FSButton:v,FSIcon:B,FSSpan:q,FSCol:p,FSRow:g},props:{translationsExpanded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},modelValue:{type:[Object,String],required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:r}){const{languages:h}=H(),o=O([]),b=t=>{if(!o.value)return w;const a=o.value.find(i=>i.languageCode===t);return!a||!a[e.property]?w:a[e.property]},F=(t,a)=>{if(!o.value){o.value=[{languageCode:t,[e.property]:a}];return}const i=o.value.find(U=>U.languageCode===t);i?i[e.property]=a:o.value.push({languageCode:t,[e.property]:a})},s=()=>{e.disabled||r("update:translations",o.value),r("update:translationsExpanded",!1)},c=()=>{r("update:translationsExpanded",!1)};return A(()=>e.translations,t=>{o.value=t.map(a=>typeof a[e.property]=="string"?a:{...a,[e.property]:JSON.stringify(a[e.property])})},{immediate:!0,deep:!0}),{languages:h,onCancelTranslations:c,onSubmitTranslations:s,getTranslation:b,setTranslation:F}}});function Q(e,r,h,o,b,F){const s=T("FSRichTextField"),c=T("FSButtonCancelLabel");return e.$props.translationsExpanded?(d(),u(p,{key:0},{default:n(()=>[l(p,{gap:"16px"},{default:n(()=>[l(s,x({disabled:!0,label:e.$tr("ui.common.default-value","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(d(!0),N(D,null,M(e.languages,(t,a)=>(d(),u(s,x({disabled:e.$props.disabled,key:a,modelValue:e.getTranslation(t.code),"onUpdate:modelValue":i=>e.setTranslation(t.code,i)},{ref_for:!0},e.$attrs),{label:n(()=>[l(g,{wrap:!1,align:"center-left"},{default:n(()=>[l(q,{class:"fs-translate-field-label",font:"text-overline"},{default:n(()=>[V(S(e.$tr("translate-rich-text-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1024),l(B,null,{default:n(()=>[V(S(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["disabled","modelValue","onUpdate:modelValue"]))),128))]),_:1}),l(g,{wrap:!1},{default:n(()=>[l(c,{prependIcon:"mdi-cancel",width:"100%",onClick:e.onCancelTranslations},null,8,["onClick"]),e.$props.disabled?G("",!0):(d(),u(v,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.validate","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"]))]),_:1})]),_:1})):(d(),u(s,x({key:1,disabled:e.$props.disabled,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[1]||(r[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),{"append-inner":n(()=>[l(v,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.manage-translations","Manage translations"),onClick:r[0]||(r[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["disabled","modelValue"]))}const m=K(I,[["render",Q]]);I.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"{ [key: string]: any } | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:`{
  languageCode: string;
  [key: string]: string | object | null;
}[]`},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const kt={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:m,tags:["autodocs"],argTypes:{...z(m),...P([j],m)}},L=[{code:"temperature",defaultValue:"0",label:"Température"},{code:"weather",defaultValue:"XXX",label:"Météo"}],f={args:{modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',variableReferences:[...L]},render:(e,{argTypes:r})=>({components:{FSTranslateRichTextField:m,FSCol:p},props:Object.keys(r),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})},y={args:{translationsExpanded:!1,modelValue:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Current weather : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home is a ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"French villa ",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:"with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"arched windows",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" that allow plenty of natural light to flood the spacious, open interiors. ",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Inside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},translations:[{text:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Météo actuelle : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison est une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"villa française",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" avec un immense ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"jardin",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", entourée de verdure luxuriante et de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fleurs",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" éclatantes. La villa possède une élégante ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"façade en pierre",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et de grandes ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fenêtres",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"À l'intérieur, la villa offre de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"hauts plafonds",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", des ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"poutres en bois",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et un mobilier ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"rustique",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et chaleureux. La ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"terrasse",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" extérieure est idéale pour dîner, et une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"piscine",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" scintillante invite à la détente lors des journées ensoleillées.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},languageCode:"fr-FR"},{text:null,languageCode:"it-IT"},{text:null,languageCode:"en-GB"},{text:null,languageCode:"es-ES"}],variableReferences:[...L]},render:(e,{argTypes:r})=>({components:{FSTranslateRichTextField:m,FSCol:p},props:Object.keys(r),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        @update:modelValue="args['onUpdate:modelValue']"
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})};var C,k,R;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(k=f.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var E,$,X;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(X=($=y.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const Rt=["Default","TranslationObject"];export{f as Default,y as TranslationObject,Rt as __namedExportsOrder,kt as default};
