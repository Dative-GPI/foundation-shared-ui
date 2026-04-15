import{a as M}from"./properties-Qw-O9fbT.js";import{d as _,E as s,H as l,L as p,M as r,J as u,F as y,X as f,k as c,N as x,O as P}from"./vue.esm-bundler-D_gXonxt.js";import{F as v}from"./FSText-DL_5kFi7.js";import{F as L}from"./FSMetaField-C7NZU0iO.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as g}from"./FSCol-C3EJfcJX.js";import{_ as z}from"./FSRow-cHWWqhhs.js";import{P as o}from"./customProperties-DqkON8hk.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./useBreakpoints-BWz07CZT.js";import"./useSlots-CdBAzqCX.js";import"./FSDateTimeField-CxbBx0wp.js";import"./FSDialogMenu-CYc22LXB.js";import"./FSCard-Cxfe3-O9.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./css-Bznx04uW.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./proxiedModel-Cl0bR0rs.js";import"./easing-DY7PVvcf.js";import"./anchor-DrPAsKKU.js";import"./dimensions-BYDjhYdL.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./locale-CEMLpecI.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./transition-CHyhkthg.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-d5ANZlFh.js";import"./VDefaultsProvider-DJfojugM.js";import"./FSTextField-CxQWhEox.js";import"./FSBaseField-CGwB2cs2.js";import"./FSSpan-ap0CpdXZ.js";import"./FSButton-cpkpLA7w.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./index-aKIkx5xA.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./density-W7RG4BnT.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./rounded-yhlSUX6x.js";import"./index-CpkyVf-S.js";import"./FSCalendar-XQUqUNV4.js";import"./FSSelectField-D3jDhMc4.js";import"./FSSlideGroup-DWL-VMav.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CoBpV-yC.js";import"./VSlideGroup-Bqij08hI.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSToggleSet-C7biUZpu.js";import"./FSWrapGroup-D5YRUBcz.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";import"./FSFadeOut-z7-cnvK3.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./FSRadio-Bk5L3sqZ.js";import"./VSelect-BdqVvZBK.js";import"./VList-D8CiLhgs.js";import"./ssrBoot-DpaZqI6q.js";import"./border-BTzDu4tj.js";import"./variant-ftZYcIF1.js";import"./VImg-ufpttNgj.js";import"./VDivider-CTy1lKut.js";import"./VMenu-KvKUKA1I.js";import"./useDateFormat-BQ8h6gVb.js";import"./useAppLanguageCode-ulGHj8Yu.js";import"./useAppTimeZone-Cxxk5HO_.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-D2TwtVAp.js";import"./VLocaleProvider-D9Wisn4b.js";import"./date-C09vmCiz.js";import"./VBtn-DgLqICzT.js";import"./position-mzu5LnMQ.js";import"./FSWindow-kJC9jUNn.js";import"./VWindowItem-Ifl49WMN.js";import"./FSClock-DfKYiLZa.js";import"./FSSlider-Bh8WGjOj.js";import"./VSlider-BXIeuNcZ.js";import"./VSliderTrack-K2dqvxwJ.js";import"./FSMenu-BRQdQ5Qk.js";import"./FSNumberField-DNwHGyA_.js";import"./FSIconField-Dry-MNQV.js";import"./FSSwitch-x0D-6C75.js";const S=_({name:"FSMetaFormContent",components:{FSMetaField:L,FSText:v},props:{customProperties:{type:[Object],required:!0},modelValue:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){return{categories:e.customProperties.reduce((t,a)=>(t[a.categoryLabel]===void 0&&(t[a.categoryLabel]=[]),t[a.categoryLabel].push(a),t),{})}}});function k(e,O,t,a,N,B){const F=p("FSText"),h=p("FSMetaField");return r(),s(g,{gap:24},{default:l(()=>[(r(!0),u(y,null,f(e.categories,(w,d)=>(r(),s(g,{key:d,gap:16},{default:l(()=>[c(z,null,{default:l(()=>[c(F,{font:"text-h3"},{default:l(()=>[x(P(d),1)]),_:2},1024)]),_:2},1024),(r(!0),u(y,null,f(w,(i,T)=>(r(),s(h,{customProperty:i,disabled:e.disabled,key:T,modelValue:e.modelValue[i.code],"onUpdate:modelValue":A=>e.$emit("update:modelValue",{...e.modelValue,[i.code]:A})},null,8,["customProperty","disabled","modelValue","onUpdate:modelValue"]))),128))]),_:2},1024))),128))]),_:1})}const m=D(S,[["render",k]]);S.__docgenInfo={displayName:"FSMetaFormContent",exportName:"default",description:"",tags:{},props:[{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!0},{name:"modelValue",type:{name:"{ [key: string]: string }"},required:!0},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaFormContent.vue"]};const qo={title:"Foundation/Core/CustomProperties/MetaFormContent",component:m,tags:["autodocs"],argTypes:{...M(m)}},n={args:{customProperties:[{id:"1",label:"Selector",code:"selector",categoryLabel:"Category1",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!0,allowedValues:{1:"value1",2:"value 2",3:"value 3","key without value":""}},{id:"2",label:"Number",code:"number",categoryLabel:"Category1",index:0,entity:1,dataType:o.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"3",label:"Boolean",code:"bool",categoryLabel:"Category1",index:0,entity:1,dataType:o.Boolean,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"4",label:"String",code:"string",categoryLabel:"Category2",index:0,entity:1,dataType:o.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"5",label:"Date",code:"date",categoryLabel:"Category2",index:0,entity:1,dataType:o.DateTime,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}},{id:"6",label:"Icon",code:"icon",categoryLabel:"Category3",index:0,entity:1,dataType:o.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!1,colorMap:[],useOnlyAllowedValues:!1,allowedValues:{}}],modelValue:{string:"test"}},render:e=>({components:{FSMetaFormContent:m},setup(){return{args:e}},template:`
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
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Io=["Default"];export{n as Default,Io as __namedExportsOrder,qo as default};
