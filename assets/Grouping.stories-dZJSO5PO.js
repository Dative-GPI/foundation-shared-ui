import{a as y,b as G}from"./properties-Qw-O9fbT.js";import{F as V}from"./FSGroupingTileUI-CFov2AXb.js";import{F as v}from"./FSTile-Dc7IleRl.js";import{d as I,w as $,E as m,m as C,K as q,L as l,M as s}from"./vue.esm-bundler-D_gXonxt.js";import{F as k}from"./FSLoadTile-DSF_DCua.js";import{a as U}from"./useGroupings-D5u3wL86.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge--4cegCgG.js";import"./FSColor-CFMl-Ul2.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-Boz4MTP-.js";import"./FSIconCard-orS5KPa9.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./FSImage-DWYQvpU3.js";import"./FSImageUI-C_EkTaPS.js";import"./FSLoader-CdctsmAF.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./VImg-ufpttNgj.js";import"./rounded-yhlSUX6x.js";import"./transition-CHyhkthg.js";import"./index-CpkyVf-S.js";import"./useImages-pCcsdsIl.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-BqFXSmrg.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSCol-C3EJfcJX.js";import"./FSCheckbox-zoBL9ZjY.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./index-aKIkx5xA.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";const S=I({name:"FSGroupingTile",components:{FSGroupingTileUI:V,FSLoadTile:k},props:{groupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:a,entity:p}=U();return $(()=>e.groupingId,()=>{o(e.groupingId)},{immediate:!0}),{getting:a,entity:p}}});function L(e,o,a,p,w,E){const F=l("FSLoadTile"),T=l("FSGroupingTileUI");return e.getting?(s(),m(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["selectable","modelValue"])):e.entity?(s(),m(T,C({key:1,icon:e.entity.icon,iconColor:e.entity.color,label:e.entity.label,code:e.entity.code,subgroupingCount:e.entity.subgroupingCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["icon","iconColor","label","code","subgroupingCount","selectable","modelValue"])):q("",!0)}const r=B(S,[["render",L]]);S.__docgenInfo={displayName:"FSGroupingTile",exportName:"default",description:"",tags:{},props:[{name:"groupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupingTile.vue"]};const ze={title:"Foundation/Core/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...G([V,v],r),...y(r)}},t={render:e=>({components:{FSGroupingTile:r},setup(){return{args:e}},template:`
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const He=["Default","Selectable"];export{t as Default,n as Selectable,He as __namedExportsOrder,ze as default};
