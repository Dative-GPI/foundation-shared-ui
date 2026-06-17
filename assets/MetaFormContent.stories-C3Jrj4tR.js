import{a as M}from"./properties-Qw-O9fbT.js";import{d as x,E as s,H as l,L as d,M as r,J as u,F as y,X as f,k as c,N as P,O as v}from"./vue.esm-bundler-NVdFPFZB.js";import{F as L}from"./FSText-DR713pSR.js";import{F as _}from"./FSMetaField-CeTa7PZy.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-KRtq6OYO.js";import{F as z}from"./FSRow-Dg2RhQyl.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./FSDateTimeField-C-vE0cHP.js";import"./FSDialogMenu-HNK7X8ju.js";import"./FSCard-ghpSlWxI.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./css-CUVOJ3aO.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSTextField-DFareS9q.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./FSButton-CdKzPvIq.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./density-CE2FkSgs.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./FSCalendar-B4pgvyCN.js";import"./FSSelectField-CGFDUGHS.js";import"./FSSlideGroup-BYhxS2B0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BffFRYRL.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-CZYm0d1o.js";import"./FSWrapGroup-jHFOEYDl.js";import"./FSCheckbox-D5kCrb66.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-VhSFSAo6.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-C94-RoOx.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./useDateFormat-BKFE7Nxu.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./VLocaleProvider-BDkbqBWQ.js";import"./date-C0y0BLJc.js";import"./VBtn-Ct4hkl6N.js";import"./position-O95c9fuD.js";import"./FSWindow-D1J0s9tP.js";import"./VWindowItem-CArm1FTd.js";import"./FSClock-DfXIuyJ6.js";import"./FSSlider-BGwqsXDf.js";import"./VSlider-B3ymumPR.js";import"./VSliderTrack-DOx_w6yS.js";import"./FSMenu-DcCsQXC4.js";import"./FSNumberField-D8EhXm8v.js";import"./FSIconField-0RC8EOeT.js";import"./FSSwitch-BRVLyQxs.js";const S=x({name:"FSMetaFormContent",components:{FSMetaField:_,FSText:L},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,O,t,a,N,B){const F=d("FSText"),h=d("FSMetaField");return r(),s(g,{gap:24},{default:l(()=>[(r(!0),u(y,null,f(e.categories,(w,p)=>(r(),s(g,{key:p,gap:16},{default:l(()=>[c(z,null,{default:l(()=>[c(F,{font:"text-h3"},{default:l(()=>[P(v(p),1)]),_:2},1024)]),_:2},1024),(r(!0),u(y,null,f(w,(i,T)=>(r(),s(h,{customProperty:i,disabled:e.disabled,key:T,modelValue:e.modelValue[i.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:A})},null,8,["customProperty","disabled","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const m=D(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const Io={title:"Core/Components/CustomProperties/MetaFormContent",component:m,tags:["autodocs"],argTypes:{...M(m)}},n={args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":""}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],modelValue:{string:"test"}},render:e=>({components:{FSMetaFormContent:m},setup(){return{args:e}},template:`
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
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const $o=["Default"];export{n as Default,$o as __namedExportsOrder,Io as default};
