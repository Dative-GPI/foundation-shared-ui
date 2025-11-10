import{F as V}from"./FSTile-CPs209xc.js";import{F as c}from"./FSModelTileUI-DH0GTV-v.js";import{d as b,w as S,B as i,H as T,m as y,I as n,J as p}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as I}from"./FSLoadTile-C36HWg-d.js";import{a as M}from"./useModels-D1wNJU7R.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as q}from"./properties-Qw-O9fbT.js";import"./FSClickable-DFmwvck2.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSCard-twwkVLSp.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSRow-CjY3icuR.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSCheckbox-D-xuSzdC.js";import"./FSIcon-CeLDRxMK.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./useRules-Da0JLBaA.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./density-mssFUWH2.js";import"./proxiedModel-Nw0LX-ta.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./dimensions-TKp8HHzB.js";import"./FSSimpleTileUI-CCLBKTqt.js";import"./FSIconCard-C9Y7GHaO.js";import"./FSImage-B4vuOyJ-.js";import"./FSImageUI-DVteMu9v.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./VImg-BmPSKt86.js";import"./rounded-Cy4gG01O.js";import"./index-B48vLg-P.js";import"./useImages-R4kG-Q-t.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-CakgBvEM.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BT-dflJP.js";import"./base-Cj4tO-2v.js";import"./useAppOrganisationId-DWUnIwce.js";const f=b({name:"FSModelTile",components:{FSModelTileUI:c,FSLoadTile:I},props:{modelId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:l,entity:a}=M();return S(()=>e.modelId,()=>{o(e.modelId)},{immediate:!0}),{getting:l,entity:a}}});function k(e,o,l,a,B,C){const g=n("FSLoadTile"),F=n("FSModelTileUI");return e.getting?(p(),i(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=m=>e.$emit("update:modelValue",m))},null,8,["selectable","modelValue"])):e.entity?(p(),i(F,y({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=m=>e.$emit("update:modelValue",m))},e.$attrs),null,16,["imageId","label","code","selectable","modelValue"])):T("",!0)}const r=v(f,[["render",k]]);f.__docgenInfo={displayName:"FSModelTile",exportName:"default",description:"",tags:{},props:[{name:"modelId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSModelTile.vue"]};const Ne={title:"Foundation/Core/Tiles/Model",component:r,tags:["autodocs"],argTypes:{...q([c,V],r),...$(r),modelId:{control:"select",options:["1","2"]}}},t={render:e=>({components:{FSModelTile:r},setup(){return{args:e}},template:`
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
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const De=["Default"];export{t as Default,De as __namedExportsOrder,Ne as default};
