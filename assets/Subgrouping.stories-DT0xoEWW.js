import{a as T,b as v}from"./properties-Qw-O9fbT.js";import{F as S}from"./FSSubgroupingTileUI-itox22ie.js";import{F as I}from"./FSTile-BiFTCuMc.js";import{d as C,w as $,B as l,m as q,H as L,I as m,J as u}from"./vue.esm-bundler-D5n7z5qz.js";import{F as k}from"./FSLoadTile-B_OaMmgm.js";import{a as B}from"./useSubgroupings-Cb14Wuvg.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-DY67PQVj.js";import"./FSColor-CsxJ8it1.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-Csj1FPWH.js";import"./FSIconCard-BlsFbvOA.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./transition-gfLL8RoD.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSCol-D_lbFmZy.js";import"./FSCheckbox-DMg4fEo0.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./index-Bo6vw90T.js";import"./subgroupingInfos-CBtJpNmo.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const V=C({name:"FSSubgroupingTile",components:{FSSubgroupingTileUI:S,FSLoadTile:k},props:{subgroupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:a,entity:p}=B();return $(()=>e.subgroupingId,()=>{o(e.subgroupingId)},{immediate:!0}),{getting:a,entity:p}}});function O(e,o,a,p,w,N){const F=m("FSLoadTile"),y=m("FSSubgroupingTileUI");return e.getting?(u(),l(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["selectable","modelValue"])):e.entity?(u(),l(y,q({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,groupingLabel:e.entity.groupingLabel,groupingIcon:e.entity.groupingIcon,groupingColor:e.entity.groupingColor,deviceOrganisationsCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["icon","label","code","groupingLabel","groupingIcon","groupingColor","deviceOrganisationsCount","selectable","modelValue"])):L("",!0)}const r=U(V,[["render",O]]);V.__docgenInfo={displayName:"FSSubgroupingTile",exportName:"default",description:"",tags:{},props:[{name:"subgroupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSSubgroupingTile.vue"]};const Ge={title:"Foundation/Core/Tiles/Subgrouping",component:r,tags:["autodocs"],argTypes:{...v([S,I],r),...T(r)}},t={render:e=>({components:{FSSubgroupingTile:r},setup(){return{args:e}},template:`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,subgroupingId:"1"}},n={render:e=>({components:{FSSubgroupingTile:r},setup(){return{args:e}},template:`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,subgroupingId:"2",selectable:!0}};var s,d,g;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSubgroupingTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    subgroupingId: '1'
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var c,b,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSubgroupingTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    subgroupingId: '2',
    selectable: true
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const Ke=["Default","Selectable"];export{t as Default,n as Selectable,Ke as __namedExportsOrder,Ge as default};
