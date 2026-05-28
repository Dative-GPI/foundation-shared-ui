import{a as y,b as G}from"./properties-Qw-O9fbT.js";import{F as V}from"./FSGroupingTileUI-DZvdF8Bh.js";import{F as v}from"./FSTile-DyIXnIBo.js";import{r as I,aa as $,j as l,B as C,k,Y as m,P as s}from"./vue.esm-bundler-DR0_aU9U.js";import{F as q}from"./FSLoadTile-1GZVg8zv.js";import{u as B}from"./useGroupings-DnN2Fh_k.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-BC4g5c6u.js";import"./FSColor-BzMG0twY.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-Ca1kk7vw.js";import"./FSIconCard-D8RPikTZ.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./FSLoader-DlWbYN_-.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./VImg-DooBjoZC.js";import"./rounded-B6-M_5uG.js";import"./transition-CedxoFs4.js";import"./index-BLyOCIqB.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSCol-B2uM4vFw.js";import"./FSCheckbox-D-n0kplZ.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./index-C-lZWyiZ.js";import"./base-7hURbKeK.js";import"./useAppOrganisationId-DfaOV_k9.js";const S=I({name:"FSGroupingTile",components:{FSGroupingTileUI:V,FSLoadTile:q},props:{groupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:i,entity:p}=B();return $(()=>e.groupingId,()=>{o(e.groupingId)},{immediate:!0}),{getting:i,entity:p}}});function L(e,o,i,p,N,h){const F=m("FSLoadTile"),T=m("FSGroupingTileUI");return e.getting?(s(),l(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(s(),l(T,C({key:1,icon:e.entity.icon,iconColor:e.entity.color,label:e.entity.label,code:e.entity.code,subgroupingCount:e.entity.subgroupingCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","iconColor","label","code","subgroupingCount","selectable","modelValue"])):k("",!0)}const r=U(S,[["render",L]]);S.__docgenInfo={displayName:"FSGroupingTile",exportName:"default",description:"",tags:{},props:[{name:"groupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupingTile.vue"]};const He={title:"Foundation/Core/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...G([V,v],r),...y(r)}},t={render:e=>({components:{FSGroupingTile:r},setup(){return{args:e}},template:`
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const Je=["Default","Selectable"];export{t as Default,n as Selectable,Je as __namedExportsOrder,He as default};
