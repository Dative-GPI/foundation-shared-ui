import{a as M}from"./properties-Qw-O9fbT.js";import{d as _,z as s,C as r,G as p,H as l,A as u,F as y,S as f,R as c,I as x,J as P}from"./vue.esm-bundler-DtArtqdn.js";import{F as v}from"./FSText-CyTnv_LZ.js";import{F as L}from"./FSMetaField-Bq3VYXAH.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-D6yYDi9X.js";import{_ as z}from"./FSRow-C-mN1bTt.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./useBreakpoints-DjafNA1e.js";import"./useSlots-DbyfVVj5.js";import"./FSDateTimeField-DiySyhun.js";import"./VList-BvtMNBCq.js";import"./FSCard-oEcmHswj.js";import"./css-Byt5yd9p.js";import"./VDialog-BTHijwvN.js";import"./VOverlay-Bjkk9AiY.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DKVd81aj.js";import"./proxiedModel-DNPVb8sx.js";import"./anchor-CbVlxldO.js";import"./dimensions-Dt4h5jdR.js";import"./display-H53nrFTM.js";import"./scopeId-DRx9AlMK.js";import"./locale-EnvrzLNX.js";import"./router-DPM6bvc5.js";import"./transition-POm6u0ds.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./index-YdMT2sR1.js";import"./VIcon-_X0ionFS.js";import"./ssrBoot-BOTKrwq8.js";import"./border--9_J8r4E.js";import"./density-96HGjcby.js";import"./elevation-DuPJjm1T.js";import"./rounded-B9giz-GX.js";import"./index-DWcj--5B.js";import"./VImg-DB10nKT8.js";import"./index-ShtRROw2.js";import"./FSTextField-Dwg3bGtr.js";import"./FSBaseField-COfiqIR8.js";import"./FSSpan-Btkwe66a.js";import"./FSButton-q8xhuZjd.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSClickable-Lp9mb8CD.js";import"./VProgressCircular-vkSDrwPD.js";import"./resizeObserver-Bx252tqU.js";import"./FSIcon-DAU03b1P.js";import"./useRules-eDN7Chft.js";import"./VField-OtS-Js_u.js";import"./VLabel-D5MHSYH0.js";import"./VInput-Dw4F_0vm.js";import"./loader-CJlqftns.js";import"./FSCalendar-DNW2xs-8.js";import"./FSSelectField-CI3nSuyA.js";import"./FSSlideGroup-DaeYUKJp.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bvnrx82W.js";import"./VSlideGroupItem-XSA54cuy.js";import"./group-B-yFvi8t.js";import"./FSToggleSet-CojuCZxM.js";import"./FSWrapGroup-BBSbZNqu.js";import"./FSCheckbox-D615kJWP.js";import"./VSelectionControl-D_AGLwLV.js";import"./FSFadeOut-okmKwNuP.js";import"./FSLoader-C5CmIvK9.js";import"./FSRadio-K1Efb9Rj.js";import"./VSelect-c638diSh.js";import"./VMenu-Bm-EzALO.js";import"./useDateFormat-BSX7uQO9.js";import"./useAppTimeZone-BYltbN9h.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-xqeUHdoL.js";import"./useTranslations-CEyRES9c.js";import"./VLocaleProvider-DeKAroFB.js";import"./VBtn-YNAwppzK.js";import"./FSWindow-DaTXgSvH.js";import"./FSClock-B4E53n78.js";import"./FSSlider-C2IxYUb2.js";import"./VSlider-Dm-P4-Ji.js";import"./FSMenu-BUeXiefy.js";import"./FSNumberField-C-yUy9He.js";import"./FSIconField-CJWIAEaG.js";import"./FSSwitch-cOjCAjel.js";const S=_({name:"FSMetaFormContent",components:{FSMetaField:L,FSText:v},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){return{categories:e.customProperties.reduce((a,t)=>(a[t.categoryLabel]===void 0&&(a[t.categoryLabel]=[]),a[t.categoryLabel].push(t),a),{})}}});function k(e,O,a,t,B,N){const F=p("FSText"),h=p("FSMetaField");return l(),s(g,{gap:24},{default:r(()=>[(l(!0),u(y,null,f(e.categories,(w,m)=>(l(),s(g,{key:m,gap:16},{default:r(()=>[c(z,null,{default:r(()=>[c(F,{font:"text-h3"},{default:r(()=>[x(P(m),1)]),_:2},1024)]),_:2},1024),(l(!0),u(y,null,f(w,(i,T)=>(l(),s(h,{customProperty:i,disabled:e.disabled,key:T,modelValue:e.modelValue[i.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:A})},null,8,["customProperty","disabled","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const d=D(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const So={title:"Foundation/Core/CustomProperties/MetaFormContent",component:d,tags:["autodocs"],argTypes:{...M(d)}},n={args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":""}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],modelValue:{string:"test"}},render:e=>({components:{FSMetaFormContent:d},setup(){return{args:e}},template:`
    <FSCol>
      <FSMetaFormContent
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`})};var V,b,C;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        ["key without value"]: ""
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
    modelValue: {
      string: "test"
    }
  },
  render: args => ({
    components: {
      FSMetaFormContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSMetaFormContent
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Oo=["Default"];export{n as Default,Oo as __namedExportsOrder,So as default};
