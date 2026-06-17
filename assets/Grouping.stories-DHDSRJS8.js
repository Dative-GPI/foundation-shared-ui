import{a as y,b as G}from"./properties-Qw-O9fbT.js";import{F as V}from"./FSGroupingTileUI-CUCuwRje.js";import{F as v}from"./FSTile-DmLtcb1O.js";import{d as I,w as C,E as m,m as $,K as q,L as l,M as s}from"./vue.esm-bundler-C5-CUMHT.js";import{F as k}from"./FSLoadTile-B4pkqwrF.js";import{a as U}from"./useGroupings-BquDWDQG.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-BzMp6Ozz.js";import"./FSColor-DHzcrx_i.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-CcRMbNDG.js";import"./FSIconCard-C8bYj-2A.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./FSImage-CTV3ARHO.js";import"./FSImageUI-DrqF_CxM.js";import"./FSLoader-BTZOtjrt.js";import"./dimensions-Bm76csmg.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./VImg-DXeUU_wB.js";import"./rounded-Ctowy803.js";import"./transition-CgRUW3r8.js";import"./index-B3ZVJx30.js";import"./useImages-CyYFl-Jz.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DMcDmCCx.js";import"./FSCol-DedFW0nl.js";import"./FSCheckbox-BwFpn-kB.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./density-qUtw3dk7.js";import"./index-asyjLxvi.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./index-pS3mXfMR.js";import"./base-BFVjoMA-.js";import"./useAppOrganisationId-CSdtG-as.js";const S=I({name:"FSGroupingTile",components:{FSGroupingTileUI:V,FSLoadTile:k},props:{groupingId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:a,entity:p}=U();return C(()=>e.groupingId,()=>{o(e.groupingId)},{immediate:!0}),{getting:a,entity:p}}});function L(e,o,a,p,w,E){const F=l("FSLoadTile"),T=l("FSGroupingTileUI");return e.getting?(s(),m(F,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["selectable","modelValue"])):e.entity?(s(),m(T,$({key:1,icon:e.entity.icon,iconColor:e.entity.color,label:e.entity.label,code:e.entity.code,subgroupingCount:e.entity.subgroupingCount,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["icon","iconColor","label","code","subgroupingCount","selectable","modelValue"])):q("",!0)}const r=B(S,[["render",L]]);S.__docgenInfo={displayName:"FSGroupingTile",exportName:"default",description:"",tags:{},props:[{name:"groupingId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupingTile.vue"]};const ze={title:"Core/Components/Tiles/Grouping",component:r,tags:["autodocs"],argTypes:{...G([V,v],r),...y(r)}},t={render:e=>({components:{FSGroupingTile:r},setup(){return{args:e}},template:`
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
