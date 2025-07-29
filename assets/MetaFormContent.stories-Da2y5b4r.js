import{a as M}from"./properties-Qw-O9fbT.js";import{d as _,B as s,E as r,I as p,J as l,C as u,F as y,S as f,k as c,A as x,K as P}from"./vue.esm-bundler-PONd4AmC.js";import{F as v}from"./FSText-C7hkL3As.js";import{F as L}from"./FSMetaField-Da_UH9vN.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-Bfhiyt6Y.js";import{_ as z}from"./FSRow-C-b-hpWa.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./useBreakpoints-RTs-XAJF.js";import"./useSlots-nyIcwo6G.js";import"./FSDateTimeField-DzmHr32x.js";import"./FSDialogMenu-Czm1Jubp.js";import"./FSCard-DYD9Tm3w.js";import"./css-BeoQuAfr.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./color-_AiH45em.js";import"./proxiedModel-vOB1Q9Gh.js";import"./anchor-D2WyvgD_.js";import"./dimensions-CNbPgA3L.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./locale-CoLhg8Wl.js";import"./router-6tzIEQS-.js";import"./transition-BXZIGKil.js";import"./VDefaultsProvider-BsWh58B_.js";import"./FSTextField-D-U5ryYn.js";import"./FSBaseField-DMW1nZy-.js";import"./FSSpan-DxKJLsSl.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSIcon-bsX1r_Ci.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./index-CANKuvlL.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./density-CNNumQ_A.js";import"./loader-DGoLn0VY.js";import"./rounded-BBFi0CuG.js";import"./index-Bb4mSIJO.js";import"./FSCalendar-PeO5etD1.js";import"./FSSelectField-Bqm7POVY.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./FSCheckbox-CQphVYdu.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./VImg-DKyIpwU2.js";import"./VMenu-D11N5TPJ.js";import"./useDateFormat-BhCCrheZ.js";import"./useAppTimeZone-BXRoybOo.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-fPbUdbod.js";import"./useTranslations-_Q1DYra_.js";import"./VLocaleProvider-BW20Lu4A.js";import"./VBtn-PodE2DV2.js";import"./FSWindow-sJd0tDre.js";import"./FSClock-E7QFA3KD.js";import"./FSSlider-D514dNG_.js";import"./VSlider-brHfwJlg.js";import"./VSliderTrack-D_7OwznJ.js";import"./FSMenu-0Xerd8-Y.js";import"./FSNumberField-Bfz5R9tT.js";import"./FSIconField-BQUCOYib.js";import"./FSSwitch-BrfAaS2N.js";const S=_({name:"FSMetaFormContent",components:{FSMetaField:L,FSText:v},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){return{categories:e.customProperties.reduce((a,t)=>(a[t.categoryLabel]===void 0&&(a[t.categoryLabel]=[]),a[t.categoryLabel].push(t),a),{})}}});function k(e,O,a,t,B,N){const F=p("FSText"),h=p("FSMetaField");return l(),s(g,{gap:24},{default:r(()=>[(l(!0),u(y,null,f(e.categories,(w,m)=>(l(),s(g,{key:m,gap:16},{default:r(()=>[c(z,null,{default:r(()=>[c(F,{font:"text-h3"},{default:r(()=>[x(P(m),1)]),_:2},1024)]),_:2},1024),(l(!0),u(y,null,f(w,(i,T)=>(l(),s(h,{customProperty:i,disabled:e.disabled,key:T,modelValue:e.modelValue[i.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:A})},null,8,["customProperty","disabled","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const d=D(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const ho={title:"Foundation/Core/CustomProperties/MetaFormContent",component:d,tags:["autodocs"],argTypes:{...M(d)}},n={args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":""}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],modelValue:{string:"test"}},render:e=>({components:{FSMetaFormContent:d},setup(){return{args:e}},template:`
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
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const wo=["Default"];export{n as Default,wo as __namedExportsOrder,ho as default};
