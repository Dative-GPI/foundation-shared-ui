import{a as y,b as G}from"./properties-Qw-O9fbT.js";import{F as V}from"./FSGroupingTileUI-cGN477Fi.js";import{F as v}from"./FSTile-BiFTCuMc.js";import{d as I,w as $,B as l,m as C,H as q,I as m,J as s}from"./vue.esm-bundler-D5n7z5qz.js";import{F as k}from"./FSLoadTile-B_OaMmgm.js";import{a as B}from"./useGroupings-DqaR0kQy.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-DY67PQVj.js";import"./FSColor-CsxJ8it1.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-Csj1FPWH.js";import"./FSIconCard-BlsFbvOA.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./transition-gfLL8RoD.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSCol-D_lbFmZy.js";import"./FSCheckbox-DMg4fEo0.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./index-Bo6vw90T.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const S=I({name:"FSGroupingTile",components:{FSGroupingTileUI:V,FSLoadTile:k},props:{groupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:i,entity:p}=B();return $(()=>e.groupingId,()=>{o(e.groupingId)},{immediate:!0}),{getting:i,entity:p}}});function w(e,o,i,p,L,N){const F=m("FSLoadTile"),T=m("FSGroupingTileUI");return e.getting?(s(),l(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(s(),l(T,C({key:1,icon:e.entity.icon,iconColor:e.entity.color,label:e.entity.label,code:e.entity.code,subgroupingCount:e.entity.subgroupingCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","iconColor","label","code","subgroupingCount","selectable","modelValue"])):q("",!0)}const r=U(S,[["render",w]]);S.__docgenInfo={displayName:"FSGroupingTile",exportName:"default",description:"",tags:{},props:[{name:"groupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupingTile.vue"]};const je={title:"Foundation/Core/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...G([V,v],r),...y(r)}},t={render:e=>({components:{FSGroupingTile:r},setup(){return{args:e}},template:`
      <FSGroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,groupingId:"1"}},n={render:e=>({components:{FSGroupingTile:r},setup(){return{args:e}},template:`
      <FSGroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,groupingId:"2",selectable:!0}};var u,d,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSGroupingTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSGroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    groupingId: '1'
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var c,f,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSGroupingTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSGroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    groupingId: '2',
    selectable: true
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ze=["Default","Selectable"];export{t as Default,n as Selectable,ze as __namedExportsOrder,je as default};
