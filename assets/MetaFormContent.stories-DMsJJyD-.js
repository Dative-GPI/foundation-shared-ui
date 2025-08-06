import{a as M}from"./properties-Qw-O9fbT.js";import{d as _,B as s,E as r,I as p,J as l,C as u,F as y,S as f,k as c,A as x,K as P}from"./vue.esm-bundler-CocPPKUI.js";import{F as v}from"./FSText-Nj40J67v.js";import{F as L}from"./FSMetaField-CkbjRUdA.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-79-COv64.js";import{_ as z}from"./FSRow-BvJ7lU5E.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./useBreakpoints-DZlz3-56.js";import"./useSlots-D4bv69lA.js";import"./FSDateTimeField-_qBRemyJ.js";import"./FSDialogMenu-CqfE7T6V.js";import"./FSCard-2KUMcI8D.js";import"./css-mt76hoAn.js";import"./VDialog-BOSWAwdu.js";import"./VOverlay-C9rlmtj8.js";import"./easing-DY7PVvcf.js";import"./color-D50-hVV_.js";import"./proxiedModel-DW1FRKBO.js";import"./anchor-D4EnoweD.js";import"./dimensions-Cv9Fwl7U.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./locale-_fONYh-8.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./transition-bMLtH-b3.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./FSTextField-CdmKROte.js";import"./FSBaseField-Cn3A38Ti.js";import"./FSSpan-CKhKq6E1.js";import"./FSButton-B9T3D7JL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSIcon-BGuuL0jz.js";import"./useRules-C3-AmzzE.js";import"./VField-C42QHTgn.js";import"./index-hd-xIizf.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./density-2KuMGYl6.js";import"./loader-BDqRCawj.js";import"./rounded-CBYChxif.js";import"./index-5LM_ZUPq.js";import"./FSCalendar-JXgqBUIo.js";import"./FSSelectField-Cc3l2LgY.js";import"./FSSlideGroup-BoaCkdx0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./FSToggleSet-mQm74CcI.js";import"./FSWrapGroup-DXlgsE59.js";import"./FSCheckbox-MGAv1q-u.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./index-BwBNp3ym.js";import"./FSFadeOut-BcV7cYL5.js";import"./FSLoader-JpoH2mis.js";import"./elevation-DUhGVECn.js";import"./FSRadio-D7UyW-G6.js";import"./VSelect-CDoqko5t.js";import"./VList-7u5M4k2B.js";import"./ssrBoot-B-cFki3l.js";import"./border-ZP5ArpGv.js";import"./VImg-C2WY2bzk.js";import"./VMenu-DVt-HGrP.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./useTranslations-DJaIYmO0.js";import"./VLocaleProvider-BJaGNJI0.js";import"./VBtn-CT_Tyh1g.js";import"./FSWindow-CvRw_nNN.js";import"./VWindowItem-bVm6GL_p.js";import"./FSClock-DswYcISI.js";import"./FSSlider-D214cViD.js";import"./VSlider-DynmDTsv.js";import"./VSliderTrack-C6Ch4QSr.js";import"./FSMenu-D9AFjjKN.js";import"./FSNumberField-BWGFDxiq.js";import"./FSIconField-DQMJnyMG.js";import"./FSSwitch-DRR8MMQU.js";const S=_({name:"FSMetaFormContent",components:{FSMetaField:L,FSText:v},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){return{categories:e.customProperties.reduce((a,t)=>(a[t.categoryLabel]===void 0&&(a[t.categoryLabel]=[]),a[t.categoryLabel].push(t),a),{})}}});function k(e,O,a,t,B,N){const F=p("FSText"),h=p("FSMetaField");return l(),s(g,{gap:24},{default:r(()=>[(l(!0),u(y,null,f(e.categories,(w,m)=>(l(),s(g,{key:m,gap:16},{default:r(()=>[c(z,null,{default:r(()=>[c(F,{font:"text-h3"},{default:r(()=>[x(P(m),1)]),_:2},1024)]),_:2},1024),(l(!0),u(y,null,f(w,(i,T)=>(l(),s(h,{customProperty:i,disabled:e.disabled,key:T,modelValue:e.modelValue[i.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:A})},null,8,["customProperty","disabled","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const d=D(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const Ao={title:"Foundation/Core/CustomProperties/MetaFormContent",component:d,tags:["autodocs"],argTypes:{...M(d)}},n={args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":""}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],modelValue:{string:"test"}},render:e=>({components:{FSMetaFormContent:d},setup(){return{args:e}},template:`
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
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Mo=["Default"];export{n as Default,Mo as __namedExportsOrder,Ao as default};
