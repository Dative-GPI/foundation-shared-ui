import{a as T,b as v}from"./properties-Qw-O9fbT.js";import{F as S}from"./FSSubgroupingTileUI-BK-KKumN.js";import{F as I}from"./FSTile-DyIXnIBo.js";import{r as C,aa as $,j as l,B as k,k as q,Y as m,P as u}from"./vue.esm-bundler-DR0_aU9U.js";import{F as L}from"./FSLoadTile-1GZVg8zv.js";import{u as B}from"./useSubgroupings-BfKrD1OA.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-BC4g5c6u.js";import"./FSColor-BzMG0twY.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-Ca1kk7vw.js";import"./FSIconCard-D8RPikTZ.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./FSLoader-DlWbYN_-.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./VImg-DooBjoZC.js";import"./rounded-B6-M_5uG.js";import"./transition-CedxoFs4.js";import"./index-BLyOCIqB.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSCol-B2uM4vFw.js";import"./FSCheckbox-D-n0kplZ.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./index-C-lZWyiZ.js";import"./subgroupingInfos-CBtJpNmo.js";import"./base-7hURbKeK.js";import"./useAppOrganisationId-DfaOV_k9.js";const V=C({name:"FSSubgroupingTile",components:{FSSubgroupingTileUI:S,FSLoadTile:L},props:{subgroupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:a,entity:p}=B();return $(()=>e.subgroupingId,()=>{o(e.subgroupingId)},{immediate:!0}),{getting:a,entity:p}}});function O(e,o,a,p,N,h){const F=m("FSLoadTile"),y=m("FSSubgroupingTileUI");return e.getting?(u(),l(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["selectable","modelValue"])):e.entity?(u(),l(y,k({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,groupingLabel:e.entity.groupingLabel,groupingIcon:e.entity.groupingIcon,groupingColor:e.entity.groupingColor,deviceOrganisationsCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["icon","label","code","groupingLabel","groupingIcon","groupingColor","deviceOrganisationsCount","selectable","modelValue"])):q("",!0)}const r=U(V,[["render",O]]);V.__docgenInfo={displayName:"FSSubgroupingTile",exportName:"default",description:"",tags:{},props:[{name:"subgroupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSSubgroupingTile.vue"]};const Je={title:"Foundation/Core/Tiles/Subgrouping",component:r,tags:["autodocs"],argTypes:{...v([S,I],r),...T(r)}},t={render:e=>({components:{FSSubgroupingTile:r},setup(){return{args:e}},template:`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,subgroupingId:"1"}},n={render:e=>({components:{FSSubgroupingTile:r},setup(){return{args:e}},template:`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,subgroupingId:"2",selectable:!0}};var s,g,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var c,b,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const Ke=["Default","Selectable"];export{t as Default,n as Selectable,Ke as __namedExportsOrder,Je as default};
