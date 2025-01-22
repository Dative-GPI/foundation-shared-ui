import{F as V}from"./FSTile-CbnAVjso.js";import{F as u}from"./FSLocationTileUI-ChAF84Tc.js";import{d as F,w as y,A as n,B as l,x as I,G as L,I as m}from"./vue.esm-bundler-CTTOvLCD.js";import{F as S}from"./FSLoadTile-DgDYToEN.js";import{a as T}from"./useLocations-8ucU22qj.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-DznopAj9.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./FSRow-C8EFLcn9.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./VProgressCircular-it35si_v.js";import"./color-DTA1Qd0w.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSCheckbox-CVOakf5q.js";import"./FSIcon-yzGYQgqh.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./useRules-DE909mL5.js";import"./VSelectionControl-CZi2-uP4.js";import"./density-n-hig0Tg.js";import"./proxiedModel-Da7OD98r.js";import"./index-Bj6Uq_NX.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./locale-Guk_W035.js";import"./index-B698eGq-.js";import"./transition-C1y9a89u.js";import"./dimensions-DIR9-JzD.js";import"./form-gxFDX6UX.js";import"./FSIconCard-CGvq_r_x.js";import"./FSColor-DFBMo33h.js";import"./FSLoader-AugIw030.js";import"./elevation-CqdG4vF6.js";import"./address-CE2z3AEI.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BcaJMM0w.js";const c=F({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:S},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:i}=T();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:r,entity:i}}});function $(e,o,r,i,C,q){const g=n("FSLoadTile"),b=n("FSLocationTileUI");return e.getting?(m(),l(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(m(),l(b,I({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","editable","modelValue"])):L("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Te={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:V},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
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
