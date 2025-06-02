import{F}from"./FSTile-DIm7BUL1.js";import{F as c}from"./FSLocationTileUI-D4HcggSO.js";import{d as V,w as b,B as m,H as S,m as T,I as l,J as p}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as L}from"./FSLoadTile-BJVS6vIm.js";import{a as v}from"./useLocations-DVRbWNIc.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as C}from"./properties-Qw-O9fbT.js";import"./FSClickable-CBfoSsDs.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSRow-udQVJR1p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./VProgressCircular-cB7gdjsO.js";import"./color-iZFxpsFf.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-ZzEkeSRE.js";import"./FSCheckbox-tSiw0lhZ.js";import"./FSIcon-8KcAAKgU.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./useRules-Cutg_0Yh.js";import"./VSelectionControl-Dw5vpEc6.js";import"./density-B3EUR5Bv.js";import"./proxiedModel-BirLikdP.js";import"./index-BSoBU6Pm.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./locale-BJmdjC_5.js";import"./index-BHk1SuU0.js";import"./transition-C13qRIR1.js";import"./dimensions-CuS7VcMO.js";import"./FSSimpleTileUI-Ji75yLFi.js";import"./FSIconCard-Dqsqzdxg.js";import"./FSImage-DLNm9-cY.js";import"./FSImageUI-B_rD9Cl-.js";import"./FSLoader-0ho3eZau.js";import"./elevation-DCJceMeT.js";import"./VImg-UKGkvK5A.js";import"./rounded-T_eKj2ZY.js";import"./index-0XvVa1kA.js";import"./useImages-k0iD--OD.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-nTw6pyPT.js";import"./FSColor-CuR1jGLD.js";import"./badge-D9p4Oj7n.js";import"./address-CE2z3AEI.js";import"./base-B6WxqUqv.js";import"./useAppOrganisationId-oxTtWVij.js";const f=V({name:"FSLocationTile",components:{FSLocationTileUI:c,FSLoadTile:L},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:i,entity:n}=v();return b(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:i,entity:n}}});function q(e,o,i,n,k,B){const g=l("FSLoadTile"),y=l("FSLocationTileUI");return e.getting?(p(),m(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(p(),m(y,T({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","selectable","modelValue"])):S("",!0)}const r=I(f,[["render",q]]);f.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Oe={title:"Foundation/Core/Tiles/Location",component:r,tags:["autodocs"],argTypes:{...C([c,F],r),...$(r),locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:r},setup(){return{args:e}},template:`
      <FSLocationTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{locationId:"1"}};var s,d,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    locationId: '1'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const he=["Default"];export{t as Default,he as __namedExportsOrder,Oe as default};
