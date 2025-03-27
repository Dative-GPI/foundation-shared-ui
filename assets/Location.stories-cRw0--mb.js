import{F as V}from"./FSTile-D67iqGNu.js";import{F as u}from"./FSLocationTileUI-BQDpH-Ok.js";import{d as F,w as y,z as n,E as L,m as S,G as l,H as m}from"./vue.esm-bundler-CUSnV4DE.js";import{F as T}from"./FSLoadTile-CISJGXh8.js";import{a as I}from"./useLocations-DR90Iqt-.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Bn4xIsxH.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSRow-hpHYWcoJ.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSCheckbox-DT2R4my4.js";import"./FSIcon-Cp7BQBW6.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./useRules-CYZMRvpC.js";import"./VSelectionControl-BrUoGkRx.js";import"./density-DAqBVexQ.js";import"./proxiedModel-DaBGAliH.js";import"./index-BdaiM53K.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./index-DDQZ-RJM.js";import"./transition-C81aHyit.js";import"./dimensions-BI5CQRk1.js";import"./FSIconCard-DzysKg3d.js";import"./FSColor-D-t7tRtb.js";import"./FSLoader-BxWH0Nmg.js";import"./elevation-C08MHLji.js";import"./address-CE2z3AEI.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";const c=F({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:T},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:i}=I();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:r,entity:i}}});function $(e,o,r,i,C,q){const g=l("FSLoadTile"),b=l("FSLocationTileUI");return e.getting?(m(),n(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(m(),n(b,S({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","editable","modelValue"])):L("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Te={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:V},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    `}),args:{locationId:"1",modelValue:!0,editable:!0}};var d,p,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSLocationTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    \`
  }),
  args: {
    locationId: '1',
    modelValue: true,
    editable: true
  }
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Ie=["Default"];export{t as Default,Ie as __namedExportsOrder,Te as default};
