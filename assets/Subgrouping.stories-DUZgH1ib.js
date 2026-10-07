import{a as T,b as v}from"./properties-Qw-O9fbT.js";import{F as S}from"./FSSubgroupingTileUI-sESxbl3z.js";import{F as I}from"./FSTile-BhVLh0I_.js";import{d as C,w as $,E as l,m as L,K as q,L as m,M as s}from"./vue.esm-bundler-NVdFPFZB.js";import{F as k}from"./FSLoadTile-BsiS59UV.js";import{a as U}from"./useSubgroupings-BTmxapQc.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-bfelcV1p.js";import"./FSColor-BdLg0VqR.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-Bi734Ok8.js";import"./FSIconCard-DMtxuGAX.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./FSImage-qkvcP0r6.js";import"./FSImageUI-CXTsXdBJ.js";import"./FSLoader-DRppy7ch.js";import"./dimensions-BuDdBtmf.js";import"./elevation-DyTGrbk9.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./VImg-CF0d7Fd2.js";import"./rounded-BE8u9DAQ.js";import"./transition-Dqm8buww.js";import"./index-D_7bL_IH.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSCol-ChYB2Oag.js";import"./FSCheckbox-BEgzMGmB.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./density-HajNgXBf.js";import"./index-CDgYZebE.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./index-C0WTB2TM.js";import"./subgroupingInfos-CBtJpNmo.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const V=C({name:"FSSubgroupingTile",components:{FSSubgroupingTileUI:S,FSLoadTile:k},props:{subgroupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:a,entity:p}=U();return $(()=>e.subgroupingId,()=>{o(e.subgroupingId)},{immediate:!0}),{getting:a,entity:p}}});function O(e,o,a,p,w,E){const F=m("FSLoadTile"),y=m("FSSubgroupingTileUI");return e.getting?(s(),l(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["selectable","modelValue"])):e.entity?(s(),l(y,L({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,groupingLabel:e.entity.groupingLabel,groupingIcon:e.entity.groupingIcon,groupingColor:e.entity.groupingColor,deviceOrganisationsCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["icon","label","code","groupingLabel","groupingIcon","groupingColor","deviceOrganisationsCount","selectable","modelValue"])):q("",!0)}const r=B(V,[["render",O]]);V.__docgenInfo={displayName:"FSSubgroupingTile",exportName:"default",description:"",tags:{},props:[{name:"subgroupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSSubgroupingTile.vue"]};const He={title:"Core/Components/Tiles/Subgrouping",component:r,tags:["autodocs"],argTypes:{...v([S,I],r),...T(r)}},t={render:e=>({components:{FSSubgroupingTile:r},setup(){return{args:e}},template:`
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
