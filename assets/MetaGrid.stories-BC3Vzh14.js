import{d as M,c as I,z as s,B as w,Q as p,G as g,H as u,C as d,L as A,M as G,N as q,E as h}from"./vue.esm-bundler-PTWG9x2X.js";import{F as N}from"./FSGrid-CQreVV4-.js";import{F as _,a as t}from"./FSMetaValue-cYApfVSo.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSIcon-Df5FR-8G.js";import{P as i}from"./customProperties-DqkON8hk.js";import"./FSText-CMVh5ns4.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./useBreakpoints-W7XGW48y.js";import"./useSlots-BG_ZhEqK.js";import"./FSCol-qfATdd_b.js";import"./css-B90wD3BD.js";import"./FSRow-DPcQMiM9.js";import"./useAppTimeZone-DyFwBRoB.js";import"./FSIconCheck-CvhFR3Ch.js";import"./FSSpan-yJEd2pn-.js";import"./useDateFormat-BIFVETfU.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-tS_QL_TH.js";import"./useTranslations-BnE68qER.js";import"./VIcon-DIeegzqR.js";import"./color-CCpgnDIk.js";const D=M({name:"FSMetaGrid",components:{FSMetaValue:_,FSGrid:N},props:{items:{type:Array,default:()=>[],required:!1},customProperties:{type:Array,default:()=>[],required:!1},meta:{type:Object,required:!0}},setup(e){const c=I(()=>e.items.filter(n=>n.code.startsWith("meta.")).map(n=>({value:n,customProperty:y(n.code)}))),y=n=>e.customProperties.find(f=>`meta.${f.code}`===n);return{metaItems:c}}});function k(e,c,y,n,f,z){const F=g("FSMetaValue"),x=g("FSGrid");return u(),s(x,{items:e.$props.items},w({_:2},[p(e.$slots,(r,a)=>({name:a,fn:d(O=>[A(e.$slots,a,G(q(O)))])})),p(e.metaItems,(r,a)=>({name:`item.${r.value.code}`,fn:d(()=>[!r.value.hideDefault&&r.customProperty?(u(),s(F,{key:0,customProperty:r.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])})),p(e.metaItems,(r,a)=>({name:`item-end.${r.value.code}`,fn:d(()=>[r.value.hideDefault&&r.customProperty?(u(),s(F,{key:0,customProperty:r.customProperty,meta:e.meta},null,8,["customProperty","meta"])):h("",!0)])}))]),1032,["items"])}const m=B(D,[["render",k]]);D.__docgenInfo={displayName:"FSMetaGrid",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"FSGridItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"customProperties",type:{name:"CustomPropertyInfos[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"meta",type:{name:"{ [key: string]: string }"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaGrid.vue"]};const ce={title:"Foundation/Core/CustomProperties/MetaGrid",component:m,tags:["autodocs"],argTypes:{}},l={args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:i.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:t.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:t.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:i.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:t.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:t.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}},render:e=>({components:{FSMetaGrid:m,FSIcon:T},setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          v-bind="args"
        />
      </div>
    </div>`})},o={args:{items:[{label:"Permission 1",code:"permission1",value:"1",hideDefault:!1},{label:"Permission 2",code:"permission2",value:"2",hideDefault:!1},{label:"Permission 3",code:"permission3",value:"3",hideDefault:!1},{label:"Permission 4",code:"permission4",value:"4",hideDefault:!1},{label:"Permission 5",code:"permission5",value:"5",hideDefault:!0},{label:"CustomString",code:"meta.property1",value:"",hideDefault:!1},{label:"CustomIcon",code:"meta.property2",value:"",hideDefault:!0}],customProperties:[{id:"3",code:"property1",label:"CustomString",categoryLabel:"Category",index:0,entity:1,dataType:i.String,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:t.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:t.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}},{id:"2",code:"property2",label:"CustomIcon",categoryLabel:"Category",index:0,entity:1,dataType:i.Icon,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:2,filterType:t.Equal,filterValues:["Bingo"],color:"#00FF00"},{priority:1,filterType:t.None,filterValues:[],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}],meta:{property1:"meta1",property2:"mdi-ab-testing"}},render:e=>({components:{FSMetaGrid:m,FSIcon:T},setup(){return{args:e}},template:`
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
    </div>`})};var v,b,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        />
      </div>
    </div>\`
  })
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var P,V,C;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(V=o.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const ye=["Default","Variations"];export{l as Default,o as Variations,ye as __namedExportsOrder,ce as default};
