import{d as x,c as w,B as s,D as I,S as p,I as g,J as u,E as d,O as A,P as E,Q as G,H as h}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as q}from"./FSGrid-_3PaYPmD.js";import{F as B,a as n}from"./FSMetaValue-KpXI8qO6.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSIcon-CeLDRxMK.js";import{P as i,a as _}from"./customProperties-DqkON8hk.js";import"./FSText-B2RNQvtL.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./useBreakpoints-BMcJFLA8.js";import"./useSlots-C8jkAuOW.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./FSRow-CjY3icuR.js";import"./useDateExpression-CWjnhewb.js";import"./useAppTimeZone-Bddnv5KM.js";import"./useDateFormat-DHrriBQY.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DwRThLpm.js";import"./useTranslations-5XSl7qXA.js";import"./FSIconCheck-C4Bcj5yc.js";import"./FSSpan-DkNsO5wd.js";import"./VIcon-BOLLMMm0.js";import"./color-BM2dSUAO.js";const M=x({name:"FSMetaGrid",components:{FSMetaValue:B,FSGrid:q},props:{items:{type:Array,default:()=>[],required:!1},customProperties:{type:Array,default:()=>[],required:!1},meta:{type:Object,required:!0}},setup(e){const c=w(()=>e.items.filter(t=>t.code.startsWith("meta.")).map(t=>({value:t,customProperty:y(t.code)}))),y=t=>e.customProperties.find(f=>`meta.${f.code}`===t);return{metaItems:c}}});function z(e,c,y,t,f,N){const F=g("FSMetaValue"),C=g("FSGrid");return u(),s(C,{items:e.$props.items},I({_:2},[p(e.$slots,(r,l)=>({name:l,fn:d(O=>[A(e.$slots,l,E(G(O)))])})),p(e.metaItems,(r,l)=>({name:`item.${r.value.code}`,fn:d(()=>[!r.value.hideDefault&&r.customProperty?(u(),s(F,{key:0,customProperty:r.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])})),p(e.metaItems,(r,l)=>({name:`item-end.${r.value.code}`,fn:d(()=>[r.value.hideDefault&&r.customProperty?(u(),s(F,{key:0,customProperty:r.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])}))]),1032,["items"])}const m=L(M,[["render",z]]);M.__docgenInfo={displayName:"FSMetaGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"meta",type:{name:"{ [key: string]: string }"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaGrid.vue"]};const fe={title:"Foundation/Core/CustomProperties/MetaGrid",component:m,tags:["autodocs"],argTypes:{}},a={args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0},{label:"Dernière maintenance",code:"meta.lastMaintenance",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:i.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:n.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:n.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:i.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:n.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:n.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"1",allowedValues:{},categoryLabel:"Entretien",code:"lastMaintenance",defaultValue:"",colorMap:[{priority:2,filterType:n.More,filterValues:["now + 1M"],color:"#00FF00"},{priority:1,filterType:n.More,filterValues:["now + 4M"],color:"#00B0FF"},{priority:0,filterType:n.LessOrEqual,filterValues:["now + 4M"],color:"#FF0000"}],colorful:!0,dataType:3,entity:_.Device,history:!1,historySize:10,index:5,label:"Dernière maintenance",readOnlyAdmin:!1,readOnlyCore:!0,useOnlyAllowedValues:!1}],meta:{property1:"meta1",property2:"mdi-ab-testing",lastMaintenance:"1704346065004"}},render:e=>({components:{FSMetaGrid:m,FSIcon:D},setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          v-bind="args"
        />
      </div>
    </div>`})},o={args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:i.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:n.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:n.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:i.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:n.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:n.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}},render:e=>({components:{FSMetaGrid:m,FSIcon:D},setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          v-bind="args"
        >
          <template #header="{ item }">
            {{ item.label }}
          </template>
          <template #item-end="{ item }">
            {{ item.value }}
          </template>
          <template #header.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
          <template #item-end.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
        </FSMetaGrid>
      </div>
    </div>`})};var v,b,V;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Permission 1",
      code: "permission1",
      value: "1",
      hideDefault: false
    }, {
      label: "Permission 2",
      code: "permission2",
      value: "2",
      hideDefault: false
    }, {
      label: "Permission 3",
      code: "permission3",
      value: "3",
      hideDefault: false
    }, {
      label: "Permission 4",
      code: "permission4",
      value: "4",
      hideDefault: false
    }, {
      label: "Permission 5",
      code: "permission5",
      value: "5",
      hideDefault: true
    }, {
      label: "CustomString",
      code: "meta.property1",
      value: "",
      hideDefault: false
    }, {
      label: "CustomIcon",
      code: "meta.property2",
      value: "",
      hideDefault: true
    }, {
      label: "Dernière maintenance",
      code: "meta.lastMaintenance",
      value: "",
      hideDefault: true
    }],
    customProperties: [{
      id: "3",
      code: "property1",
      label: "CustomString",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.String,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: true,
      colorMap: [{
        priority: 2,
        filterType: FilterType.Equal,
        filterValues: ["Bingo"],
        color: "#00FF00"
      }, {
        priority: 1,
        filterType: FilterType.None,
        filterValues: [],
        color: "#FF0000"
      }],
      useOnlyAllowedValues: false,
      allowedValues: {}
    }, {
      id: "2",
      code: "property2",
      label: "CustomIcon",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.Icon,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: true,
      colorMap: [{
        priority: 2,
        filterType: FilterType.Equal,
        filterValues: ["Bingo"],
        color: "#00FF00"
      }, {
        priority: 1,
        filterType: FilterType.None,
        filterValues: [],
        color: "#FF0000"
      }],
      useOnlyAllowedValues: false,
      allowedValues: {}
    }, {
      id: "1",
      allowedValues: {},
      categoryLabel: "Entretien",
      code: "lastMaintenance",
      defaultValue: "",
      colorMap: [{
        "priority": 2,
        "filterType": FilterType.More,
        "filterValues": ["now + 1M"],
        "color": "#00FF00"
      }, {
        "priority": 1,
        "filterType": FilterType.More,
        "filterValues": ["now + 4M"],
        "color": "#00B0FF"
      }, {
        "priority": 0,
        "filterType": FilterType.LessOrEqual,
        "filterValues": ["now + 4M"],
        "color": "#FF0000"
      }],
      colorful: true,
      dataType: 3,
      entity: PropertyEntity.Device,
      history: false,
      historySize: 10,
      index: 5,
      label: "Dernière maintenance",
      readOnlyAdmin: false,
      readOnlyCore: true,
      useOnlyAllowedValues: false
    }],
    meta: {
      property1: "meta1",
      property2: "mdi-ab-testing",
      lastMaintenance: "1704346065004"
    }
  },
  render: args => ({
    components: {
      FSMetaGrid,
      FSIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          v-bind="args"
        />
      </div>
    </div>\`
  })
}`,...(V=(b=a.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var S,P,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Permission 1",
      code: "permission1",
      value: "1",
      hideDefault: false
    }, {
      label: "Permission 2",
      code: "permission2",
      value: "2",
      hideDefault: false
    }, {
      label: "Permission 3",
      code: "permission3",
      value: "3",
      hideDefault: false
    }, {
      label: "Permission 4",
      code: "permission4",
      value: "4",
      hideDefault: false
    }, {
      label: "Permission 5",
      code: "permission5",
      value: "5",
      hideDefault: true
    }, {
      label: "CustomString",
      code: "meta.property1",
      value: "",
      hideDefault: false
    }, {
      label: "CustomIcon",
      code: "meta.property2",
      value: "",
      hideDefault: true
    }],
    customProperties: [{
      id: "3",
      code: "property1",
      label: "CustomString",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.String,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: true,
      colorMap: [{
        priority: 2,
        filterType: FilterType.Equal,
        filterValues: ["Bingo"],
        color: "#00FF00"
      }, {
        priority: 1,
        filterType: FilterType.None,
        filterValues: [],
        color: "#FF0000"
      }],
      useOnlyAllowedValues: false,
      allowedValues: {}
    }, {
      id: "2",
      code: "property2",
      label: "CustomIcon",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.Icon,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: true,
      colorMap: [{
        priority: 2,
        filterType: FilterType.Equal,
        filterValues: ["Bingo"],
        color: "#00FF00"
      }, {
        priority: 1,
        filterType: FilterType.None,
        filterValues: [],
        color: "#FF0000"
      }],
      useOnlyAllowedValues: false,
      allowedValues: {}
    }],
    meta: {
      property1: "meta1",
      property2: "mdi-ab-testing"
    }
  },
  render: args => ({
    components: {
      FSMetaGrid,
      FSIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          v-bind="args"
        >
          <template #header="{ item }">
            {{ item.label }}
          </template>
          <template #item-end="{ item }">
            {{ item.value }}
          </template>
          <template #header.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
          <template #item-end.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
        </FSMetaGrid>
      </div>
    </div>\`
  })
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const Fe=["Default","Variations"];export{a as Default,o as Variations,Fe as __namedExportsOrder,fe as default};
