import{F}from"./FSTile-DVIPkavo.js";import{F as u}from"./FSLocationTileUI-8qVxtVZu.js";import{d as V,w as y,A as n,F as I,l as L,H as l,I as m}from"./vue.esm-bundler-NAfsqApI.js";import{F as S}from"./FSLoadTile-Csmm-etI.js";import{a as T}from"./useLocations-DbqxFEMI.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Dvaj3J5M.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSCard-DOESxZy8.js";import"./FSCol-CPY6S-Xd.js";import"./css-DBDqGZ-V.js";import"./useBreakpoints-BwxwzcAl.js";import"./FSRow-GjwhmX1p.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./VProgressCircular-B6p7zTwg.js";import"./color-BvydW9AS.js";import"./resizeObserver-CLnVcpcq.js";import"./VIcon-PiNvAqE-.js";import"./FSCheckbox-CZADXYvb.js";import"./FSIcon-Dq2bxLH5.js";import"./FSSpan-CLtVPKpS.js";import"./useSlots-S0O9Daut.js";import"./useRules-pqUeO9kt.js";import"./VSelectionControl-CV2pv1R-.js";import"./density-BGeA8UH8.js";import"./proxiedModel-sn-eI_a5.js";import"./index-o6vlk9JB.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./index-Dne_26Gx.js";import"./transition-L7INWkz2.js";import"./dimensions-IFPI4Yq9.js";import"./form-DTsyvZhj.js";import"./FSIconCard-B7o102Mb.js";import"./FSColor-uHwTJM5j.js";import"./FSLoader-C8dZP0ML.js";import"./elevation-B-XsQHpK.js";import"./address-CE2z3AEI.js";import"./base-D1kf-R5n.js";import"./useAppOrganisationId-CZPUgkT3.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";const c=V({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:S},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:i}=T();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:r,entity:i}}});function $(e,o,r,i,C,q){const g=l("FSLoadTile"),b=l("FSLocationTileUI");return e.getting?(m(),n(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(m(),n(b,L({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","editable","modelValue"])):I("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Te={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:F},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    `}),args:{locationId:"1",modelValue:!0,editable:!0}};var p,d,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const ve=["Default"];export{t as Default,ve as __namedExportsOrder,Te as default};
