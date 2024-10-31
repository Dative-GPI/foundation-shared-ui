import{d as M,y as u,z as r,A as d,C as l,E as y,O as c,N as f,H as x,I as P,G as g}from"./vue.esm-bundler-l-siv0w9.js";import{F as _}from"./FSText-BV49O4zh.js";import{F as v}from"./FSMetaField-D9t3HeNh.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as p}from"./FSCol-BvqytbKT.js";import{_ as k}from"./FSRow-CbEgVN08.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-r8nvatqt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSDateTimeField-BWy5vaEx.js";import"./FSDialogMenu-UKP76pyV.js";import"./FSCard-CBOjzTDC.js";import"./css-CP2C2-Fe.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSTextField-DavtGNe9.js";import"./FSBaseField-kRvwdySD.js";import"./FSSpan-Di50moR2.js";import"./FSButton-DSUuKlnr.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-Dv9jZ2SG.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSIcon-CvjHaRpL.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./FSCalendar-PBtgUAAt.js";import"./useDateFormat-BlT1gBMR.js";import"./useAppTimeZone-BUrTBgYP.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-BzH56rSm.js";import"./useTranslations-CJK8D24x.js";import"./VLocaleProvider-DMII1C8e.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./group-Dk9dfj8w.js";import"./index-Cr304eD2.js";import"./FSWindow-tyjsnE42.js";import"./ssrBoot-DD96sY1N.js";import"./FSClock-CgJOgKpw.js";import"./FSSlider-2PRxgFEu.js";import"./VSlider-Ku0tr_EN.js";import"./VMenu-DQq2E1HW.js";import"./FSNumberField-M1Feu5NU.js";import"./FSSelectField-S8Rrt-Eq.js";import"./FSSlideGroup-SUHx-DYG.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CWkFzDlU.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./FSToggleSet-BsSRvUgm.js";import"./FSWrapGroup-CDPc2Zen.js";import"./FSCheckbox-BuNOyTVK.js";import"./VSelectionControl-Br2dHavx.js";import"./FSFadeOut-qg65ZIq1.js";import"./FSLoader-t85MEsQz.js";import"./FSRadio-DYhcD128.js";import"./VList-Bzb582fb.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-DpktbJ_S.js";import"./FSIconField-CJeBtfIW.js";import"./FSSwitch-CRn4NS3x.js";const O=M({name:"FSMetaFormContent",components:{FSMetaField:v,FSText:_},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function z(e,i,t,a,D,N){const h=u("FSText"),F=u("FSMetaField");return r(),d(p,{gap:24},{default:l(()=>[(r(!0),y(g,null,c(e.categories,(w,m)=>(r(),d(p,{key:m,gap:16},{default:l(()=>[f(k,null,{default:l(()=>[f(h,{font:"text-h3"},{default:l(()=>[x(P(m),1)]),_:2},1024)]),_:2},1024),(r(!0),y(g,null,c(w,(s,T)=>(r(),d(F,{customProperty:s,editable:e.editable,key:T,modelValue:e.modelValue[s.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[s.code]:A})},null,8,["customProperty","editable","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const S=L(O,[["render",z]]);O.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const Co={title:"Foundation/Core/CustomProperties/MetaFormContent",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":null}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{existing:"test"}}},render:(e,{argTypes:i})=>({components:{FSMetaFormContent:S,FSCol:p},props:Object.keys(i),setup(){return{...e}},template:`
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
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Oo=["Variations"];export{n as Variations,Oo as __namedExportsOrder,Co as default};