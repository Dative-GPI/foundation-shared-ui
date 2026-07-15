import{F}from"./FSTile-DnwhleJY.js";import{F as c}from"./FSModelTileUI-CTRChTGi.js";import{d as b,w as S,E as i,m as T,K as y,L as p,M as n}from"./vue.esm-bundler-NVdFPFZB.js";import{F as I}from"./FSLoadTile-By2dYS-Q.js";import{a as M}from"./useModels-FzB5LDMQ.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as q}from"./properties-Qw-O9fbT.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCheckbox-D4XH1I7L.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./dimensions-CS_qJJhy.js";import"./FSSimpleTileUI-DcYrEEsb.js";import"./FSIconCard-jgpe5rl0.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./modelInfos-C734A82I.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const f=b({name:"FSModelTile",components:{FSModelTileUI:c,FSLoadTile:I},props:{modelId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:l,entity:a}=M();return S(()=>e.modelId,()=>{o(e.modelId)},{immediate:!0}),{getting:l,entity:a}}});function C(e,o,l,a,k,U){const g=p("FSLoadTile"),V=p("FSModelTileUI");return e.getting?(n(),i(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=m=>e.$emit("update:modelValue",m))},null,8,["selectable","modelValue"])):e.entity?(n(),i(V,T({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=m=>e.$emit("update:modelValue",m))},e.$attrs),null,16,["imageId","label","code","selectable","modelValue"])):y("",!0)}const r=v(f,[["render",C]]);f.__docgenInfo={displayName:"FSModelTile",exportName:"default",description:"",tags:{},props:[{name:"modelId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSModelTile.vue"]};const Ae={title:"Core/Components/Tiles/Model",component:r,tags:["autodocs"],argTypes:{...q([c,F],r),...$(r),modelId:{control:"select",options:["1","2"]}}},t={render:e=>({components:{FSModelTile:r},setup(){return{args:e}},template:`
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
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const Ke=["Default"];export{t as Default,Ke as __namedExportsOrder,Ae as default};
