import{F as V}from"./FSTile-NX-NI4Ku.js";import{F as c}from"./FSModelTileUI-Doxc-LES.js";import{d as b,w as S,B as i,m as T,H as y,I as n,J as p}from"./vue.esm-bundler-D5n7z5qz.js";import{F as I}from"./FSLoadTile-CMz_smvJ.js";import{a as M}from"./useModels-ASTgHAT4.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as q}from"./properties-Qw-O9fbT.js";import"./FSCard-BCuiauGe.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./proxiedModel-Cv3qT1cZ.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./dimensions-D_nx6Jbk.js";import"./FSSimpleTileUI-Lc4WgZDr.js";import"./FSIconCard-CDjfPUao.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const f=b({name:"FSModelTile",components:{FSModelTileUI:c,FSLoadTile:I},props:{modelId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:l,entity:a}=M();return S(()=>e.modelId,()=>{o(e.modelId)},{immediate:!0}),{getting:l,entity:a}}});function k(e,o,l,a,B,C){const g=n("FSLoadTile"),F=n("FSModelTileUI");return e.getting?(p(),i(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=m=>e.$emit("update:modelValue",m))},null,8,["selectable","modelValue"])):e.entity?(p(),i(F,T({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=m=>e.$emit("update:modelValue",m))},e.$attrs),null,16,["imageId","label","code","selectable","modelValue"])):y("",!0)}const r=v(f,[["render",k]]);f.__docgenInfo={displayName:"FSModelTile",exportName:"default",description:"",tags:{},props:[{name:"modelId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSModelTile.vue"]};const Ee={title:"Foundation/Core/Tiles/Model",component:r,tags:["autodocs"],argTypes:{...q([c,V],r),...$(r),modelId:{control:"select",options:["1","2"]}}},t={render:e=>({components:{FSModelTile:r},setup(){return{args:e}},template:`
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
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const he=["Default"];export{t as Default,he as __namedExportsOrder,Ee as default};
