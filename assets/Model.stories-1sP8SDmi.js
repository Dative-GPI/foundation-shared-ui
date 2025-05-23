import{F as V}from"./FSTile-CmIQMWJs.js";import{F as c}from"./FSModelTileUI-rxbbfe4S.js";import{d as b,w as S,z as i,E as T,m as y,G as n,H as p}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as I}from"./FSLoadTile-pC7CZ7Xw.js";import{a as M}from"./useModels-D9OD5T-4.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as q}from"./properties-DwZ_iDct.js";import"./FSClickable-DsGMo-Qs.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSCard-ByrGPHX6.js";import"./FSCol-Be93XvPD.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./FSRow-C47sfGk6.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSCheckbox-hfVXQFUK.js";import"./FSIcon-B4J40lse.js";import"./FSSpan-BXQyelfo.js";import"./useSlots-c6yg-hhg.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./density-Dl4v3sM7.js";import"./proxiedModel-DKx29MO-.js";import"./index-BkfcJ8bv.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./dimensions-DW-k5kP_.js";import"./FSSimpleTileUI-DX7hC8j0.js";import"./FSIconCard-ClbATips.js";import"./FSImage-BesC0Cra.js";import"./FSImageUI-CbHYTG-G.js";import"./FSLoader-_1jWS2ee.js";import"./elevation-DgpWsjTu.js";import"./VImg-D7XF-hIS.js";import"./rounded-CDCr0BOq.js";import"./index-DWgrY6Dg.js";import"./useImages-X7qHyDlJ.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3v3Ax1PV.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";const f=b({name:"FSModelTile",components:{FSModelTileUI:c,FSLoadTile:I},props:{modelId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:l,entity:a}=M();return S(()=>e.modelId,()=>{o(e.modelId)},{immediate:!0}),{getting:l,entity:a}}});function k(e,o,l,a,C,U){const g=n("FSLoadTile"),F=n("FSModelTileUI");return e.getting?(p(),i(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=m=>e.$emit("update:modelValue",m))},null,8,["selectable","modelValue"])):e.entity?(p(),i(F,y({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=m=>e.$emit("update:modelValue",m))},e.$attrs),null,16,["imageId","label","code","selectable","modelValue"])):T("",!0)}const r=v(f,[["render",k]]);f.__docgenInfo={displayName:"FSModelTile",exportName:"default",description:"",tags:{},props:[{name:"modelId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSModelTile.vue"]};const Ee={title:"Foundation/Core/Tiles/Model",component:r,tags:["autodocs"],argTypes:{...q([c,V],r),...$(r),modelId:{control:"select",options:["1","2"]}}},t={render:e=>({components:{FSModelTile:r},setup(){return{args:e}},template:`
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
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const Le=["Default"];export{t as Default,Le as __namedExportsOrder,Ee as default};
