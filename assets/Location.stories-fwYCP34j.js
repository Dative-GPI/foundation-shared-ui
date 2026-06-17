import{F as V}from"./FSTile-D4h9K5XP.js";import{F as c}from"./FSLocationTileUI-BY7tdG_S.js";import{d as F,w as b,E as m,m as S,K as T,L as l,M as p}from"./vue.esm-bundler-NVdFPFZB.js";import{F as L}from"./FSLoadTile-DF_gJ9W6.js";import{a as v}from"./useLocations-5-DsIeXw.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as C,b as $}from"./properties-Qw-O9fbT.js";import"./FSCard-ghpSlWxI.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCheckbox-D5kCrb66.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./dimensions-CS_qJJhy.js";import"./FSEntityCountBadge-CRHeOWFC.js";import"./FSColor-on4KTt7-.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-goCvgFxx.js";import"./FSIconCard-fi7H3dxW.js";import"./FSImage-BlYox72k.js";import"./FSImageUI-CdvzmuqZ.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./address-CE2z3AEI.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const f=F({name:"FSLocationTile",components:{FSLocationTileUI:c,FSLoadTile:L},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],inheritAttrs:!1,setup(e){const{get:o,getting:a,entity:n}=v();return b(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:a,entity:n}}});function q(e,o,a,n,k,U){const g=l("FSLoadTile"),y=l("FSLocationTileUI");return e.getting?(p(),m(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["selectable","modelValue"])):e.entity?(p(),m(y,S({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.formattedAddress,deviceCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","selectable","modelValue"])):T("",!0)}const r=I(f,[["render",q]]);f.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Pe={title:"Core/Components/Tiles/Location",component:r,tags:["autodocs"],argTypes:{...$([c,V],r),...C(r),locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:r},setup(){return{args:e}},template:`
      <FSLocationTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{locationId:"1"}};var s,d,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSLocationTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSLocationTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    locationId: '1'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const je=["Default"];export{t as Default,je as __namedExportsOrder,Pe as default};
