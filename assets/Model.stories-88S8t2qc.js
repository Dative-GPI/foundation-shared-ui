import{F as V}from"./FSTile-DIm7BUL1.js";import{F as c}from"./FSModelTileUI-D04PqY_y.js";import{d as b,w as S,B as i,H as T,m as y,I as n,J as p}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as I}from"./FSLoadTile-BJVS6vIm.js";import{a as M}from"./useModels-Dt9UBIhq.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as q}from"./properties-Qw-O9fbT.js";import"./FSClickable-CBfoSsDs.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSRow-udQVJR1p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./VProgressCircular-cB7gdjsO.js";import"./color-iZFxpsFf.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-ZzEkeSRE.js";import"./FSCheckbox-tSiw0lhZ.js";import"./FSIcon-8KcAAKgU.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./useRules-Cutg_0Yh.js";import"./VSelectionControl-Dw5vpEc6.js";import"./density-B3EUR5Bv.js";import"./proxiedModel-BirLikdP.js";import"./index-BSoBU6Pm.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./locale-BJmdjC_5.js";import"./index-BHk1SuU0.js";import"./transition-C13qRIR1.js";import"./dimensions-CuS7VcMO.js";import"./FSSimpleTileUI-Ji75yLFi.js";import"./FSIconCard-Dqsqzdxg.js";import"./FSImage-DLNm9-cY.js";import"./FSImageUI-B_rD9Cl-.js";import"./FSLoader-0ho3eZau.js";import"./elevation-DCJceMeT.js";import"./VImg-UKGkvK5A.js";import"./rounded-T_eKj2ZY.js";import"./index-0XvVa1kA.js";import"./useImages-k0iD--OD.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-nTw6pyPT.js";import"./base-B6WxqUqv.js";import"./useAppOrganisationId-oxTtWVij.js";const f=b({name:"FSModelTile",components:{FSModelTileUI:c,FSLoadTile:I},props:{modelId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:l,entity:a}=M();return S(()=>e.modelId,()=>{o(e.modelId)},{immediate:!0}),{getting:l,entity:a}}});function k(e,o,l,a,B,C){const g=n("FSLoadTile"),F=n("FSModelTileUI");return e.getting?(p(),i(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=m=>e.$emit("update:modelValue",m))},null,8,["selectable","modelValue"])):e.entity?(p(),i(F,y({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=m=>e.$emit("update:modelValue",m))},e.$attrs),null,16,["imageId","label","code","selectable","modelValue"])):T("",!0)}const r=v(f,[["render",k]]);f.__docgenInfo={displayName:"FSModelTile",exportName:"default",description:"",tags:{},props:[{name:"modelId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSModelTile.vue"]};const Le={title:"Foundation/Core/Tiles/Model",component:r,tags:["autodocs"],argTypes:{...q([c,V],r),...$(r),modelId:{control:"select",options:["1","2"]}}},t={render:e=>({components:{FSModelTile:r},setup(){return{args:e}},template:`
      <FSModelTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelId:"1"}};var d,s,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSModelTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSModelTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelId: '1'
  }
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const Ne=["Default"];export{t as Default,Ne as __namedExportsOrder,Le as default};
