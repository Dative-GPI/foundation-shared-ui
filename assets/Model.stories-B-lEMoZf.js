import{F as V}from"./FSTile-CUVojSsV.js";import{F as c}from"./FSModelTileUI-D6kPOf2M.js";import{d as b,w as S,z as i,E as T,m as y,G as n,H as p}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as I}from"./FSLoadTile-FbI2NTBN.js";import{a as M}from"./useModels-D9OD5T-4.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as q}from"./properties-DwZ_iDct.js";import"./FSClickable-CXLm7rHe.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSCard-BedrH_cK.js";import"./FSCol-BR6T1l1C.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./FSRow-oDTnIAxc.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSCheckbox-DdLfY5jd.js";import"./FSIcon-LkE5-ra7.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./density-Dl4v3sM7.js";import"./proxiedModel-DKx29MO-.js";import"./index-BkfcJ8bv.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./dimensions-DW-k5kP_.js";import"./FSSimpleTileUI-D1P1i1cE.js";import"./FSIconCard-BeL7xzLJ.js";import"./FSImage-DOioESmt.js";import"./FSImageUI-DnMadCDH.js";import"./FSLoader-CRKSvpTi.js";import"./elevation-DgpWsjTu.js";import"./VImg-D7XF-hIS.js";import"./rounded-CDCr0BOq.js";import"./index-DWgrY6Dg.js";import"./useImages-X7qHyDlJ.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3v3Ax1PV.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";const f=b({name:"FSModelTile",components:{FSModelTileUI:c,FSLoadTile:I},props:{modelId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:l,entity:a}=M();return S(()=>e.modelId,()=>{o(e.modelId)},{immediate:!0}),{getting:l,entity:a}}});function k(e,o,l,a,C,U){const g=n("FSLoadTile"),F=n("FSModelTileUI");return e.getting?(p(),i(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=m=>e.$emit("update:modelValue",m))},null,8,["selectable","modelValue"])):e.entity?(p(),i(F,y({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=m=>e.$emit("update:modelValue",m))},e.$attrs),null,16,["imageId","label","code","selectable","modelValue"])):T("",!0)}const r=v(f,[["render",k]]);f.__docgenInfo={displayName:"FSModelTile",exportName:"default",description:"",tags:{},props:[{name:"modelId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSModelTile.vue"]};const Ee={title:"Foundation/Core/Tiles/Model",component:r,tags:["autodocs"],argTypes:{...q([c,V],r),...$(r),modelId:{control:"select",options:["1","2"]}}},t={render:e=>({components:{FSModelTile:r},setup(){return{args:e}},template:`
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
