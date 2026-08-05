import{a as T,b as v}from"./properties-Qw-O9fbT.js";import{F as S}from"./FSSubgroupingTileUI-CJwgsm18.js";import{F as I}from"./FSTile--sGnCLIm.js";import{d as C,w as $,E as l,m as L,K as q,L as m,M as s}from"./vue.esm-bundler-NVdFPFZB.js";import{F as k}from"./FSLoadTile-CXAXVlII.js";import{a as U}from"./useSubgroupings-BTmxapQc.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-DAvYvgat.js";import"./FSColor-BcZro-gF.js";import"./FSCard-CuYV3KZq.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-Cl-msgPN.js";import"./FSIconCard-B_4_q2ty.js";import"./FSIcon-DnRHaPib.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSImage-BlyKd8fm.js";import"./FSImageUI-CkJsDdzE.js";import"./FSLoader-C6yio_zx.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./transition-a5pzBS6c.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSCol-ChYB2Oag.js";import"./FSCheckbox-BeUZFJsQ.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./index-ByfGjSW7.js";import"./subgroupingInfos-CBtJpNmo.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const V=C({name:"FSSubgroupingTile",components:{FSSubgroupingTileUI:S,FSLoadTile:k},props:{subgroupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:a,entity:p}=U();return $(()=>e.subgroupingId,()=>{o(e.subgroupingId)},{immediate:!0}),{getting:a,entity:p}}});function O(e,o,a,p,w,E){const F=m("FSLoadTile"),y=m("FSSubgroupingTileUI");return e.getting?(s(),l(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["selectable","modelValue"])):e.entity?(s(),l(y,L({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,groupingLabel:e.entity.groupingLabel,groupingIcon:e.entity.groupingIcon,groupingColor:e.entity.groupingColor,deviceOrganisationsCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["icon","label","code","groupingLabel","groupingIcon","groupingColor","deviceOrganisationsCount","selectable","modelValue"])):q("",!0)}const r=B(V,[["render",O]]);V.__docgenInfo={displayName:"FSSubgroupingTile",exportName:"default",description:"",tags:{},props:[{name:"subgroupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSSubgroupingTile.vue"]};const He={title:"Core/Components/Tiles/Subgrouping",component:r,tags:["autodocs"],argTypes:{...v([S,I],r),...T(r)}},t={render:e=>({components:{FSSubgroupingTile:r},setup(){return{args:e}},template:`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,subgroupingId:"1"}},n={render:e=>({components:{FSSubgroupingTile:r},setup(){return{args:e}},template:`
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,subgroupingId:"2",selectable:!0}};var u,g,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const Je=["Default","Selectable"];export{t as Default,n as Selectable,Je as __namedExportsOrder,He as default};
