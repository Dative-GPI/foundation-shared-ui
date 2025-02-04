import{d as M,A as d,D as l,H as u,I as r,B as y,G as c,S as f,R as g,J as x,K as P}from"./vue.esm-bundler-NAfsqApI.js";import{F as _}from"./FSText-Bp70TDSF.js";import{F as v}from"./FSMetaField-DUwEbEw-.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as p}from"./FSCol-CPY6S-Xd.js";import{_ as k}from"./FSRow-GjwhmX1p.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./FSDateTimeField-CeASajTb.js";import"./VList-Cf1cUG92.js";import"./FSCard-DOESxZy8.js";import"./css-DBDqGZ-V.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BvydW9AS.js";import"./proxiedModel-sn-eI_a5.js";import"./anchor-DvtYZGyi.js";import"./dimensions-IFPI4Yq9.js";import"./display-Bn-MFLq6.js";import"./scopeId-CbPxXtFO.js";import"./locale-CAPEya44.js";import"./router-0GC4RTMW.js";import"./transition-L7INWkz2.js";import"./VDefaultsProvider-BngNLuXK.js";import"./index-Dne_26Gx.js";import"./VIcon-PiNvAqE-.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./density-BGeA8UH8.js";import"./elevation-B-XsQHpK.js";import"./rounded-DwVJT96z.js";import"./index-o6vlk9JB.js";import"./VImg-D7CqP58l.js";import"./index-DINlpRuJ.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSSpan-CLtVPKpS.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./FSIcon-Dq2bxLH5.js";import"./useRules-pqUeO9kt.js";import"./VField-KOKiCRZA.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./FSCalendar-BwTKMY8p.js";import"./FSSelectField-BvYV5EfQ.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./useDateFormat-Ci8JB6DS.js";import"./useAppLanguageCode-DW7Tteig.js";import"./useAppTimeZone-UiqNElH2.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-CxiknF7e.js";import"./VLocaleProvider-COnZoa7i.js";import"./VBtn-DqFLTMVy.js";import"./FSWindow-DzxBgxK_.js";import"./FSClock-BadRUA0k.js";import"./FSSlider-MrCtwS3U.js";import"./VSlider-BZyCF8pi.js";import"./FSNumberField-BJkXWD3Z.js";import"./FSIconField-OcppTbWX.js";import"./FSSwitch-DM1-Rn7u.js";const S=M({name:"FSMetaFormContent",components:{FSMetaField:v,FSText:_},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function D(e,i,t,a,z,B){const h=u("FSText"),F=u("FSMetaField");return r(),d(p,{gap:24},{default:l(()=>[(r(!0),y(c,null,f(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:l(()=>[g(k,null,{default:l(()=>[g(h,{font:"text-h3"},{default:l(()=>[x(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(c,null,f(w,(s,T)=>(r(),d(F,{customProperty:s,editable:e.editable,key:T,modelValue:e.modelValue[s.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[s.code]:A})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const O=L(S,[["render",D]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const bo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:i})=>({components:{FSMetaFormContent:O,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
    <FSCol>
      <FSMetaFormContent
        :customProperties="args.customProperties"
        v-model="args.meta" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
    </FSCol>`})};var V,b,C;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    args: {
      customProperties: [{
        id: "1",
        label: "Selector",
        code: "selector",
        categoryLabel: "Category1",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.String,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: true,
        allowedValues: {
          ["1"]: "value1",
          ["2"]: "value 2",
          ["3"]: "value 3",
          ["key without value"]: null
        }
      }, {
        id: "2",
        label: "Number",
        code: "number",
        categoryLabel: "Category1",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Number,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }, {
        id: "3",
        label: "Boolean",
        code: "bool",
        categoryLabel: "Category1",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Boolean,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }, {
        id: "4",
        label: "String",
        code: "string",
        categoryLabel: "Category2",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.String,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }, {
        id: "5",
        label: "Date",
        code: "date",
        categoryLabel: "Category2",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.DateTime,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }, {
        id: "6",
        label: "Icon",
        code: "icon",
        categoryLabel: "Category3",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Icon,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: false,
        colorMap: [],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }],
      meta: {
        existing: "test"
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaFormContent,
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
      <FSMetaFormContent
        :customProperties="args.customProperties"
        v-model="args.meta" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
    </FSCol>\`
  })
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Co=["Variations"];export{n as Variations,Co as __namedExportsOrder,bo as default};
